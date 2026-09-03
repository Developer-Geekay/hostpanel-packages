"""
The ssh package API, against a stand-in ops script.

A fake script rather than the real `hp-ssh`, because these tests are about the
API layer: does it authenticate, validate, map operations onto argv correctly,
and keep long/free-text values off the command line. The real script has its
own suite (`ops/tests/run.sh`) and needs a Linux host with `ssh-keygen`, real
accounts and (for the password-auth verbs) sshd itself; these run anywhere.

The load-bearing test is `test_key_never_reaches_argv`. A public key is not
confidential, but it IS long, free-form text with no length limit, and
`/proc/<pid>/cmdline` truncates and is world-readable — the same reasoning
`test_password_never_reaches_argv` documents in packages/users, applied to a
value that is public rather than secret.
"""
from __future__ import annotations

import json
import os
import stat
import sys
from pathlib import Path
from urllib.parse import quote

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

TEST_KEY = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAh7uK6lvf5X/ARf1Av2Ja/RNPGnRNcvtIZDtRuBkrS6 test@example"

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
# the length -- a test log holding the plaintext would defeat the point of the
# assertion that reads it.
if [ ! -t 0 ]; then
  while IFS= read -r -d '' k && IFS= read -r -d '' v; do
    printf 'SECRET=%s len=%s\n' "$k" "${#v}" >> "$HP_TEST_LOG"
  done || true
fi

case "$verb" in
  list-keys)          printf '{"username":"%s","keys":[{"fingerprint":"SHA256:AAAA","type":"ssh-ed25519","bits":256,"comment":"alice@laptop"}]}\n' "$1" ;;
  add-key)             echo "adding key for $1" >&2
                        printf '{"username":"%s","fingerprint":"SHA256:AAAA","type":"ssh-ed25519","bits":256,"comment":"x","added":true}\n' "$1" ;;
  remove-key)           printf '{"username":"%s","fingerprint":"%s","removed":true}\n' "$1" "$2" ;;
  get-password-auth)    printf '{"username":"%s","password_auth":true,"override":true}\n' "$1" ;;
  set-password-auth)    printf '{"username":"%s","password_auth":%s}\n' "$1" "$([ "$2" = "1" ] && echo true || echo false)" ;;
  sessions)             printf '{"sessions":[{"user":"alice","tty":"pts/0","login_time":"2024-01-01 09:00","from":"203.0.113.5"}]}\n' ;;
  boom)                 echo "it failed" >&2; exit 11 ;;
  *)                    echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-ssh-fake"
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

    from hostpanel_sshd import main as sshd

    app = sshd.create_app(M.load(MANIFEST))
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


@pytest.mark.parametrize("path", ["/ssh/alice/keys", "/operations", "/ssh/sessions"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/ssh/alice/keys").status_code == 401


def test_unknown_path_still_requires_a_token(svc):
    """The token check is middleware, not a route dependency — see
    packages/users/tests/test_usersd.py for the full rationale."""
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/does-not-exist").status_code == 401


# ── the key never reaches argv ────────────────────────────────────────────────

def test_key_never_reaches_argv(svc):
    """The test this module exists for.

    A public key is not a secret, but it is long, free-form text with no length
    limit, and it must not sit in argv where /proc/<pid>/cmdline exposes it to
    every local user (and where a 4096-bit RSA key could simply overflow argv).
    """
    r = svc.client.post("/ssh/alice/keys", json={"key": TEST_KEY, "comment": "alice@laptop"})
    assert r.status_code == 200

    log = ops_log(svc)
    assert TEST_KEY not in log, "the key appeared in the ops invocation"
    assert "SECRET=key" in log, "the key did not arrive on stdin either"
    assert f"len={len(TEST_KEY)}" in log, "the key was truncated in transit"
    assert "SECRET=comment" in log


def test_key_is_not_echoed_back_in_the_response_beyond_its_own_fields(svc):
    r = svc.client.post("/ssh/alice/keys", json={"key": TEST_KEY})
    assert r.status_code == 200
    assert TEST_KEY not in r.text


def test_argv_for_add_key_carries_only_the_username(svc):
    svc.client.post("/ssh/alice/keys", json={"key": TEST_KEY, "comment": "x"})
    assert "ARGV=alice" in ops_log(svc)


def test_comment_is_optional(svc):
    r = svc.client.post("/ssh/alice/keys", json={"key": TEST_KEY})
    assert r.status_code == 200
    assert "SECRET=comment" not in ops_log(svc), "an absent comment should not be sent at all"


# ── operation mapping ─────────────────────────────────────────────────────────

def test_list_keys_returns_the_scripts_json(svc):
    r = svc.client.get("/ssh/alice/keys")
    assert r.status_code == 200
    assert r.json()["keys"][0]["fingerprint"] == "SHA256:AAAA"
    assert "VERB=list-keys" in ops_log(svc)
    assert "ARGV=alice" in ops_log(svc)


def test_remove_key_passes_username_and_fingerprint(svc):
    r = svc.client.post("/ssh/alice/keys/remove", json={"fingerprint": "SHA256:AAAA"})
    assert r.status_code == 200
    assert "ARGV=alice SHA256:AAAA" in ops_log(svc)


def test_get_password_auth_passes_the_username(svc):
    assert svc.client.get("/ssh/alice/password-auth").json()["password_auth"] is True
    assert "VERB=get-password-auth" in ops_log(svc)


def test_set_password_auth_normalises_the_boolean(svc):
    """The HTTP API takes a JSON bool; the script takes 0|1.

    `str(True)` is "True", which the script rejects — a confusing validation
    failure for a request that was perfectly well formed.
    """
    svc.client.put("/ssh/alice/password-auth", json={"enabled": True})
    assert "ARGV=alice 1" in ops_log(svc)

    svc.log.write_text("")
    svc.client.put("/ssh/alice/password-auth", json={"enabled": False})
    assert "ARGV=alice 0" in ops_log(svc)


def test_sessions_with_no_filter_omits_the_argument(svc):
    svc.client.get("/ssh/sessions")
    assert "ARGV=" in ops_log(svc)
    assert "ARGV=alice" not in ops_log(svc)


def test_sessions_with_a_filter_passes_it(svc):
    svc.client.get("/ssh/sessions?username=alice")
    assert "ARGV=alice" in ops_log(svc)


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("username", [
    "Alice",            # uppercase
    "1alice",           # leading digit
    "al ice",           # space
    "a" * 33,           # too long
])
def test_invalid_usernames_are_refused_before_exec(svc, username):
    """Rejected by the API, so the ops script is never invoked at all.

    The script re-validates independently — it has to, since it is reachable by
    anyone who is `hp-ssh` — but a bad name should not get that far.

    NOTE on what is deliberately NOT parametrized here: a username containing
    '/' (e.g. "alice;rm -rf /" or "../../etc/passwd"). `username` sits in the
    URL PATH on every route in this package, and the ASGI server decodes a
    percent-encoded '%2F' back into a literal '/' before Starlette's router
    ever sees it — so such a value 404s on route-segment mismatch rather than
    reaching this handler at all. That is still a safe rejection (the ops
    script never runs either way), just not one this test can observe as a
    400. `valid_username`'s pattern rejects '/' regardless, both here and,
    independently, in hp-ssh itself — see the fingerprint tests below for the
    case where the framework-level routing behaviour actually matters, because
    a legitimate fingerprint CAN contain '/'.
    """
    r = svc.client.get(f"/ssh/{quote(username, safe='')}/keys")
    assert r.status_code == 400
    assert ops_log(svc) == "", "the ops script ran despite an invalid username"


@pytest.mark.parametrize("fingerprint", [
    "not-a-fingerprint",
    "SHA256:has spaces",
    "SHA256:abc;rm -rf /",
])
def test_invalid_fingerprints_are_refused_before_exec(svc, fingerprint):
    r = svc.client.post("/ssh/alice/keys/remove", json={"fingerprint": fingerprint})
    assert r.status_code == 400
    assert ops_log(svc) == ""


def test_a_fingerprint_containing_a_slash_still_routes_correctly(svc):
    """The regression test for the bug the body-not-path design avoids: a
    standard-alphabet base64 SHA256 digest routinely contains '/', and that
    must reach validation (and, for a well-formed one, the script) rather than
    404ing on route-segment mismatch."""
    real_shaped = "SHA256:" + "A" * 42 + "/"  # 43 chars, valid pattern shape
    r = svc.client.post("/ssh/alice/keys/remove", json={"fingerprint": real_shaped})
    assert r.status_code == 200
    assert f"ARGV=alice {real_shaped}" in ops_log(svc)


def test_missing_key_is_a_validation_error(svc):
    r = svc.client.post("/ssh/alice/keys", json={})
    assert r.status_code == 422  # pydantic: `key` is a required body field


# ── failures ──────────────────────────────────────────────────────────────────

def test_script_exit_code_becomes_the_http_status(svc):
    """Exit 11 is PRECONDITION, which is 409 — not a generic 500.

    The taxonomy is the whole reason a bash script can drive an HTTP API at all.
    """
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/ssh/alice/keys")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"
    assert r.json()["exit_code"] == 11


def test_stderr_becomes_the_error_message(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    assert "it failed" in svc.client.get("/ssh/alice/keys").json()["message"]


# ── content type ──────────────────────────────────────────────────────────────

def test_json_response(svc):
    r = svc.client.get("/ssh/alice/keys")
    assert r.headers["content-type"].startswith("application/json")


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_are_reported_from_the_manifest(svc):
    ops = svc.client.get("/operations").json()["operations"]
    assert set(ops) == {
        "ssh.list-keys", "ssh.add-key", "ssh.remove-key",
        "ssh.get-password-auth", "ssh.set-password-auth", "ssh.sessions",
    }


def test_key_and_comment_are_flagged_secret_not_valued(svc):
    """The UI needs to know these fields travel off argv; it must never receive
    a value for them from this endpoint."""
    add_key = svc.client.get("/operations").json()["operations"]["ssh.add-key"]
    assert add_key["params"]["key"]["secret"] is True
    assert add_key["params"]["comment"]["secret"] is True
    assert "value" not in add_key["params"]["key"]


def test_every_operation_declares_an_audit_action():
    """Enforced by the manifest loader, asserted here so the guarantee is visible
    in the package's own suite rather than only in core's."""
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())
