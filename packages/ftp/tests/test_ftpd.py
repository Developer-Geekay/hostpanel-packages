"""
The ftp package API, against a stand-in ops script.

A fake script rather than the real `hp-ftp`, because these tests are about the
API layer: does it authenticate, validate, map operations onto argv correctly,
and keep secrets off the command line. The real script has its own suite
(`ops/tests/run.sh`) and needs pure-ftpd installed for anything beyond
validation; these run anywhere.

The load-bearing tests are the `test_password_never_reaches_argv_*` ones.
Everything else here would still be true of a design that passed the password
as an argument, and on stock Ubuntu `/proc/<pid>/cmdline` is world-readable, so
that design leaks every FTP password to every local user.
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

if [ ! -t 0 ]; then
  while IFS= read -r -d '' k && IFS= read -r -d '' v; do
    printf 'SECRET=%s len=%s\n' "$k" "${#v}" >> "$HP_TEST_LOG"
  done || true
fi

case "$verb" in
  list)          echo '{"accounts":[{"username":"alice","uid":1001,"gid":1001,"home":"/home/alice","enabled":true}]}' ;;
  create)         echo "creating $1" >&2; printf '{"username":"%s","home":"%s","created":true}\n' "$1" "$2" ;;
  delete)          printf '{"username":"%s","deleted":true}\n' "$1" ;;
  set-password)     printf '{"username":"%s","password_set":true}\n' "$1" ;;
  set-home)          printf '{"username":"%s","home":"%s"}\n' "$1" "$2" ;;
  disable)            printf '{"username":"%s","enabled":false}\n' "$1" ;;
  enable)               printf '{"username":"%s","enabled":true}\n' "$1" ;;
  set-quota)             printf '{"username":"%s","max_files":%s,"max_mb":%s}\n' "$1" "$2" "$3" ;;
  boom)   echo "it failed" >&2; exit 11 ;;
  *)      echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-ftp-fake"
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

    from hostpanel_ftpd import main as ftpd

    app = ftpd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/health").status_code == 200


@pytest.mark.parametrize("path", ["/accounts", "/operations"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/accounts").status_code == 401


def test_unknown_path_still_requires_a_token(svc):
    """The token check is middleware, not a route dependency — the only thing
    standing between a privileged operation and every other local process, so
    it must hold for paths added later by someone who forgets the decorator."""
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/does-not-exist").status_code == 401


# ── secrets ───────────────────────────────────────────────────────────────────

def test_password_never_reaches_argv_on_create(svc):
    """The test this module exists for.

    `/proc/<pid>/cmdline` is world-readable on stock Ubuntu, so an argument is
    public to every local user for the lifetime of the process. The password
    must arrive on stdin instead.
    """
    password = secrets.token_urlsafe(24)
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": password})
    assert r.status_code == 200

    log = ops_log(svc)
    assert password not in log, "the password appeared in the ops invocation"
    assert "SECRET=password" in log, "the password did not arrive on stdin either"
    assert f"len={len(password)}" in log, "the password was truncated in transit"


def test_password_never_reaches_argv_on_set_password(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.put("/accounts/alice/password", json={"password": password})
    assert r.status_code == 200
    log = ops_log(svc)
    assert password not in log
    assert "SECRET=password" in log


def test_password_never_reaches_argv_on_enable(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.put("/accounts/alice/enable", json={"password": password})
    assert r.status_code == 200
    log = ops_log(svc)
    assert password not in log
    assert "SECRET=password" in log


def test_password_is_not_echoed_in_the_response(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.put("/accounts/alice/password", json={"password": password})
    assert r.status_code == 200
    assert password not in r.text


def test_argv_carries_only_the_public_parameters(svc):
    svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                        "password": secrets.token_urlsafe(16)})
    assert "ARGV=alice /home/alice" in ops_log(svc)


# ── operation mapping ─────────────────────────────────────────────────────────

def test_list_returns_the_scripts_json(svc):
    r = svc.client.get("/accounts")
    assert r.status_code == 200
    assert r.json()["accounts"][0]["username"] == "alice"


def test_delete_account(svc):
    r = svc.client.request("DELETE", "/accounts/alice")
    assert r.status_code == 200
    assert "VERB=delete" in ops_log(svc)
    assert "ARGV=alice" in ops_log(svc)


def test_set_home(svc):
    r = svc.client.put("/accounts/alice/home", json={"home": "/home/alice/new"})
    assert r.status_code == 200
    assert "ARGV=alice /home/alice/new" in ops_log(svc)


def test_disable(svc):
    r = svc.client.put("/accounts/alice/disable")
    assert r.status_code == 200
    assert r.json()["enabled"] is False
    assert "VERB=disable" in ops_log(svc)


def test_enable(svc):
    r = svc.client.put("/accounts/alice/enable", json={"password": "s3cretpw12"})
    assert r.status_code == 200
    assert r.json()["enabled"] is True


def test_set_quota(svc):
    r = svc.client.put("/accounts/alice/quota", json={"max_files": 100, "max_mb": 500})
    assert r.status_code == 200
    assert "ARGV=alice 100 500" in ops_log(svc)


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("username", [
    ".alice",            # leading dot
    "-alice",            # leading hyphen
    "al ice",            # space
    "alice;rm -rf /",    # shell metacharacters
    "../../etc/passwd",  # traversal
    "a" * 65,             # too long
    "",                   # empty
])
def test_invalid_usernames_are_refused_before_exec(svc, username):
    """Rejected by the API, so the ops script is never invoked at all."""
    r = svc.client.post("/accounts", json={"username": username, "home": "/home/x",
                                            "password": "s3cretpw12"})
    assert r.status_code == 400
    assert ops_log(svc) == "", "the ops script ran despite an invalid username"


def test_relative_home_path_is_refused(svc):
    r = svc.client.post("/accounts", json={"username": "alice", "home": "home/alice",
                                            "password": "s3cretpw12"})
    assert r.status_code == 400


def test_missing_password_field_is_refused_by_the_manifest(svc):
    """`password` is a required field on the pydantic body — a create request
    that omits it must never reach the ops script."""
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice"})
    assert r.status_code == 422
    assert ops_log(svc) == ""


# ── failures ──────────────────────────────────────────────────────────────────

def test_script_exit_code_becomes_the_http_status(svc):
    """Exit 11 is PRECONDITION, which is 409 — not a generic 500."""
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/accounts")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"
    assert r.json()["exit_code"] == 11


def test_stderr_becomes_the_error_message(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    assert "it failed" in svc.client.get("/accounts").json()["message"]


# ── streaming ─────────────────────────────────────────────────────────────────

def test_json_by_default(svc):
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": "s3cretpw12"})
    assert r.headers["content-type"].startswith("application/json")


def test_accept_header_selects_the_stream(svc):
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": "s3cretpw12"},
                        headers={"Accept": "text/event-stream"})
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text


def test_stream_carries_the_scripts_stderr_as_log_lines(svc):
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": "s3cretpw12"},
                        headers={"Accept": "text/event-stream"})
    assert "creating alice" in r.text


def test_stream_result_carries_the_same_data_as_json(svc):
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": "s3cretpw12"},
                        headers={"Accept": "text/event-stream"})
    result = [json.loads(line[len("data: "):])
              for line in r.text.splitlines()
              if line.startswith("data: ") and '"ok"' in line][-1]
    assert result["ok"] is True
    assert result["data"]["username"] == "alice"


def test_failure_still_produces_a_terminal_frame(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.post("/accounts", json={"username": "alice", "home": "/home/alice",
                                            "password": "s3cretpw12"},
                        headers={"Accept": "text/event-stream"})
    assert "event: result" in r.text
    assert '"ok": false' in r.text


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_are_reported_from_the_manifest(svc):
    ops = svc.client.get("/operations").json()["operations"]
    assert set(ops) == {
        "ftp.list", "ftp.create", "ftp.delete", "ftp.set-password",
        "ftp.set-home", "ftp.disable", "ftp.enable", "ftp.set-quota",
    }


def test_secret_parameters_are_flagged_not_valued(svc):
    """The UI needs to know a field is a password to render it; it must never
    receive one."""
    create = svc.client.get("/operations").json()["operations"]["ftp.create"]
    assert create["params"]["password"]["secret"] is True
    assert "value" not in create["params"]["password"]


def test_every_operation_declares_an_audit_action():
    """Enforced by the manifest loader, asserted here so the guarantee is visible
    in the package's own suite rather than only in core's."""
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())
