"""
The users package API, against a stand-in ops script.

A fake script rather than the real `hp-users`, because these tests are about the
API layer: does it authenticate, validate, map operations onto argv correctly,
and keep secrets off the command line. The real script has its own suite
(`ops/tests/run.sh`) and needs a Linux host with `useradd`; these run anywhere.

The load-bearing test is `test_password_never_reaches_argv`. Everything else here
would still be true of a design that passed the password as an argument, and on
stock Ubuntu `/proc/<pid>/cmdline` is world-readable, so that design leaks every
password to every local user.
"""
from __future__ import annotations

import json
import os
import secrets
import stat
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

#: Records every invocation so a test can assert on the exact argv and stdin the
#: script received. Writing them to a file is the point: it is the only way to
#: observe what would have been visible in `ps`.
FAKE_OPS = r"""#!/bin/bash
set -euo pipefail
verb="$1"; shift
{
  printf 'VERB=%s\n' "$verb"
  printf 'ARGV=%s\n' "$*"
} >> "$HP_TEST_LOG"

# Drain NUL-delimited KEY\0VALUE\0 pairs from stdin, recording only the KEY and
# the length -- a test log holding the plaintext would be its own leak.
if [ ! -t 0 ]; then
  while IFS= read -r -d '' k && IFS= read -r -d '' v; do
    printf 'SECRET=%s len=%s\n' "$k" "${#v}" >> "$HP_TEST_LOG"
  done || true
fi

case "$verb" in
  list)   echo '{"users":[{"username":"alice","uid":1001,"home":"/home/alice","shell":"/bin/bash","status":"active"}]}' ;;
  get)    printf '{"username":"%s","uid":1001}\n' "$1" ;;
  create) echo "creating $1" >&2; printf '{"username":"%s","created":true}\n' "$1" ;;
  delete) printf '{"username":"%s","deleted":true}\n' "$1" ;;
  set-password) printf '{"username":"%s","password_set":true}\n' "$1" ;;
  lock)   printf '{"username":"%s","locked":true}\n' "$1" ;;
  unlock) printf '{"username":"%s","locked":false}\n' "$1" ;;
  chown-home) printf '{"username":"%s","path":"%s"}\n' "$1" "$2" ;;
  boom)   echo "it failed" >&2; exit 11 ;;
  *)      echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-users-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    # The stand-in script is run directly. Production goes through sudo, which
    # needs a grant that exists only on a provisioned host.
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_usersd import main as usersd

    app = usersd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    """portald probes this to decide `healthy` before it has a reason to send a
    token, and it exposes nothing."""
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/health").status_code == 200


@pytest.mark.parametrize("path", ["/users", "/operations"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/users").status_code == 401


def test_unknown_path_still_requires_a_token(svc):
    """The token check is middleware, not a route dependency.

    A dependency protects the routes someone remembered to decorate. This is the
    only thing between a privileged operation and every other local process, so
    it must hold for paths that do not exist yet — including one added later by
    someone who forgets the decorator.
    """
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/does-not-exist").status_code == 401


# ── secrets ───────────────────────────────────────────────────────────────────

def test_password_never_reaches_argv(svc):
    """The test this module exists for.

    `/proc/<pid>/cmdline` is world-readable on stock Ubuntu, so an argument is
    public to every local user for the lifetime of the process. The password must
    arrive on stdin instead.
    """
    password = secrets.token_urlsafe(24)
    r = svc.client.post("/users", json={"username": "alice", "password": password})
    assert r.status_code == 200

    log = ops_log(svc)
    assert password not in log, "the password appeared in the ops invocation"
    assert "SECRET=password" in log, "the password did not arrive on stdin either"
    assert f"len={len(password)}" in log, "the password was truncated in transit"


def test_password_is_not_echoed_in_the_response(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.put("/users/alice/password", json={"password": password})
    assert r.status_code == 200
    assert password not in r.text


def test_argv_carries_only_the_public_parameters(svc):
    svc.client.post("/users", json={"username": "alice", "shell": "/bin/bash",
                                    "password": secrets.token_urlsafe(16)})
    assert "ARGV=alice /bin/bash" in ops_log(svc)


# ── operation mapping ─────────────────────────────────────────────────────────

def test_list_returns_the_scripts_json(svc):
    r = svc.client.get("/users")
    assert r.status_code == 200
    assert r.json()["users"][0]["username"] == "alice"


def test_get_passes_the_username(svc):
    assert svc.client.get("/users/alice").json()["username"] == "alice"
    assert "VERB=get" in ops_log(svc)


def test_shell_defaults_from_the_manifest(svc):
    """The default lives in the manifest, so changing it is a data change."""
    svc.client.post("/users", json={"username": "alice"})
    assert "ARGV=alice /bin/bash" in ops_log(svc)


def test_delete_normalises_the_boolean(svc):
    """The HTTP API takes a JSON bool; the script takes 0|1.

    `str(True)` is "True", which the script rejects — a confusing validation
    failure for a request that was perfectly well formed.
    """
    svc.client.delete("/users/alice?remove_home=true")
    assert "ARGV=alice 1" in ops_log(svc)

    svc.log.write_text("")
    svc.client.delete("/users/alice?remove_home=false")
    assert "ARGV=alice 0" in ops_log(svc)


def test_delete_defaults_to_keeping_the_home_directory(svc):
    """Destroying data must be something the caller asked for explicitly."""
    svc.client.delete("/users/alice")
    assert "ARGV=alice 0" in ops_log(svc)


@pytest.mark.parametrize("verb,path,method", [
    ("lock", "/users/alice/lock", "put"),
    ("unlock", "/users/alice/unlock", "put"),
])
def test_state_verbs(svc, verb, path, method):
    assert getattr(svc.client, method)(path).status_code == 200
    assert f"VERB={verb}" in ops_log(svc)


def test_chown_home_passes_the_path(svc):
    r = svc.client.post("/users/alice/chown-home", json={"path": "/home/alice"})
    assert r.status_code == 200
    assert "ARGV=alice /home/alice" in ops_log(svc)


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("username", [
    "Alice",            # uppercase
    "1alice",           # leading digit
    "al ice",           # space
    "alice;rm -rf /",   # shell metacharacters
    "../../etc/passwd", # traversal
    "a" * 33,           # too long
    "",                 # empty
])
def test_invalid_usernames_are_refused_before_exec(svc, username):
    """Rejected by the API, so the ops script is never invoked at all.

    The script re-validates independently — it has to, since it is reachable by
    anyone who is `hp-users` — but a bad name should not get that far.
    """
    r = svc.client.post("/users", json={"username": username})
    assert r.status_code == 400
    assert ops_log(svc) == "", "the ops script ran despite an invalid username"


def test_shell_outside_the_enum_is_refused(svc):
    r = svc.client.post("/users", json={"username": "alice", "shell": "/bin/evil"})
    assert r.status_code == 400
    assert ops_log(svc) == ""


def test_relative_chown_path_is_refused(svc):
    r = svc.client.post("/users/alice/chown-home", json={"path": "home/alice"})
    assert r.status_code == 400


# ── failures ──────────────────────────────────────────────────────────────────

def test_script_exit_code_becomes_the_http_status(svc, tmp_path):
    """Exit 11 is PRECONDITION, which is 409 — not a generic 500.

    The taxonomy is the whole reason a bash script can drive an HTTP API at all.
    """
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/users")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"
    assert r.json()["exit_code"] == 11


def test_stderr_becomes_the_error_message(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    assert "it failed" in svc.client.get("/users").json()["message"]


# ── streaming ─────────────────────────────────────────────────────────────────

def test_json_by_default(svc):
    r = svc.client.post("/users", json={"username": "alice"})
    assert r.headers["content-type"].startswith("application/json")


def test_accept_header_selects_the_stream(svc):
    r = svc.client.post("/users", json={"username": "alice"},
                        headers={"Accept": "text/event-stream"})
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text


def test_stream_carries_the_scripts_stderr_as_log_lines(svc):
    """The operator watches what the script actually printed."""
    r = svc.client.post("/users", json={"username": "alice"},
                        headers={"Accept": "text/event-stream"})
    assert "creating alice" in r.text


def test_stream_result_carries_the_same_data_as_json(svc):
    """A streaming caller must end up with what a JSON caller would have got,
    rather than having to scrape it out of the log lines."""
    r = svc.client.post("/users", json={"username": "alice"},
                        headers={"Accept": "text/event-stream"})
    result = [json.loads(line[len("data: "):])
              for line in r.text.splitlines()
              if line.startswith("data: ") and '"ok"' in line][-1]
    assert result["ok"] is True
    assert result["data"]["username"] == "alice"


def test_stream_is_not_chosen_when_ranked_below_json(svc):
    """A substring check on Accept would call this a stream request."""
    r = svc.client.post("/users", json={"username": "alice"},
                        headers={"Accept": "application/json"})
    assert r.headers["content-type"].startswith("application/json")


def test_failure_still_produces_a_terminal_frame(svc):
    """Without it a client cannot tell "finished" from "the connection dropped"."""
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.post("/users", json={"username": "alice"},
                        headers={"Accept": "text/event-stream"})
    assert "event: result" in r.text
    assert '"ok": false' in r.text


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_are_reported_from_the_manifest(svc):
    ops = svc.client.get("/operations").json()["operations"]
    assert set(ops) == {
        "user.list", "user.get", "user.create", "user.delete",
        "user.set-password", "user.lock", "user.unlock", "user.chown-home",
    }


def test_secret_parameters_are_flagged_not_valued(svc):
    """The UI needs to know a field is a password to render it; it must never
    receive one."""
    create = svc.client.get("/operations").json()["operations"]["user.create"]
    assert create["params"]["password"]["secret"] is True
    assert "value" not in create["params"]["password"]


def test_every_operation_declares_an_audit_action():
    """Enforced by the manifest loader, asserted here so the guarantee is visible
    in the package's own suite rather than only in core's."""
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())
