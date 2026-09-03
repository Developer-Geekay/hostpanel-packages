"""
The ssh API against the REAL `hp-ssh` script, in dry-run.

The other suite uses a stand-in script, which proves the API layer works but
cannot prove the API and the script agree. That agreement is exactly what
breaks silently: the script grows an argument, the API keeps sending the old
shape, and the failure surfaces as a validation error from a privileged process
rather than as anything obviously wrong.

`HP_OPS_DRYRUN=1` makes this runnable anywhere, including macOS: every
mutating command goes through `act`, which reports instead of executing, so
nothing touches the host. Dry-run is honoured only when euid != 0, so it is
structurally inert under sudo and cannot become a production escape hatch.

What this does NOT cover, and cannot cover without a provisioned host:

  * A successful add-key/remove-key/set-password-auth round trip. Every path
    that reaches disk needs `require_user_exists` to pass for an account that
    is NOT on `guard_protected`'s deny list — and every account available
    unprivileged on a developer machine or this project's dev VM either does
    not exist (so `require_user_exists` fails first) or is the very account
    running the tests, which `guard_protected` refuses by name on purpose
    (protecting the operator's own login is the point). Exercising the actual
    authorized_keys/sshd_config.d writes needs a disposable, non-protected
    Linux account on a real host — integration testing against a provisioned
    box, not this suite.
  * Whether sshd actually accepts the rendered Match-block snippet, or whether
    `systemctl reload ssh` succeeds. Both need a real sshd.

What it DOES cover: the reserved-account and not-found paths (which do not
depend on which account exists), every format-validation path the script
enforces independently of the API, and `sessions`, which is read-only and safe
to run for real everywhere.
"""
from __future__ import annotations

import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / "packages" / "ssh"
sys.path.insert(0, str(PACKAGE / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402

TEST_KEY = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAh7uK6lvf5X/ARf1Av2Ja/RNPGnRNcvtIZDtRuBkrS6 test@example"


@pytest.fixture
def svc(monkeypatch, tmp_path):
    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(PACKAGE / "ops" / "hp-ssh"))
    monkeypatch.setenv("HP_CORE_LIB", str(ROOT / "hpcore" / "lib"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_DRYRUN", "1")
    # Scratch roots so nothing under this process's real $HOME or /etc/ssh is
    # ever touched, even by the read-only paths that stat() a would-be target.
    monkeypatch.setenv("HP_HOME_ROOT", str(tmp_path / "home"))
    monkeypatch.setenv("HP_SSHD_DROPIN_DIR", str(tmp_path / "sshd_config.d"))
    monkeypatch.setenv("HP_SSHD_CONFIG", str(tmp_path / "sshd_config"))
    (tmp_path / "home").mkdir()

    from hostpanel_sshd import main as sshd

    app = sshd.create_app(M.load(PACKAGE / "manifest.json"))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield client


# ── the exit-code taxonomy, end to end ────────────────────────────────────────

def test_reserved_account_is_403(svc):
    """Exit 14 (DENIED). The script refuses `root` before it checks whether an
    authorized_keys file exists, so a nonexistent target cannot be probed."""
    r = svc.post("/ssh/root/keys", json={"key": TEST_KEY})
    assert r.status_code == 403
    assert r.json()["error"] == "DENIED"
    assert r.json()["exit_code"] == 14


def test_daemon_account_is_403(svc):
    r = svc.put("/ssh/hp-web/password-auth", json={"enabled": True})
    assert r.status_code == 403
    assert r.json()["exit_code"] == 14


def test_missing_user_is_404(svc):
    """Exit 10 (NOT_FOUND). Key format is valid, so this proves existence is
    checked — not merely that a bad key was rejected first."""
    r = svc.post("/ssh/definitelynotarealuser999/keys", json={"key": TEST_KEY})
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_missing_user_password_auth_is_404(svc):
    r = svc.put("/ssh/definitelynotarealuser999/password-auth", json={"enabled": False})
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_missing_user_list_keys_is_404(svc):
    r = svc.get("/ssh/definitelynotarealuser999/keys")
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


# ── validation the script enforces independently ─────────────────────────────

def test_unsupported_key_type_is_a_validation_error(svc):
    """Reached BEFORE require_user_exists — key shape does not depend on who
    the target is, so this is testable without a real account."""
    r = svc.post("/ssh/someuser/keys", json={"key": "ssh-imaginary AAAA nope"})
    assert r.status_code == 400
    assert r.json()["error"] == "VALIDATION"
    assert r.json()["exit_code"] == 12


def test_garbage_key_body_fails_ssh_keygen_validation(svc):
    r = svc.post("/ssh/someuser/keys", json={"key": "ssh-ed25519 not-valid-base64!!!"})
    assert r.status_code == 400
    assert r.json()["exit_code"] == 12


def test_bad_fingerprint_shape_never_reaches_the_account_check(svc):
    """Rejected by manifest pattern validation — the fingerprint pattern does
    not depend on which account is named, so this never reaches the script at
    all, and there is no exit code to report (compare
    test_unsupported_key_type_is_a_validation_error, where the manifest has no
    opinion on key content and the rejection genuinely comes from the script).
    """
    r = svc.post("/ssh/someuser/keys/remove", json={"fingerprint": "not-a-real-fingerprint"})
    assert r.status_code == 400
    assert "exit_code" not in r.json()


# ── sessions: read-only, safe to run for real everywhere ─────────────────────

def test_sessions_runs_for_real_and_returns_well_formed_json(svc):
    r = svc.get("/ssh/sessions")
    assert r.status_code == 200
    body = r.json()
    assert "sessions" in body
    assert isinstance(body["sessions"], list)


def test_sessions_filter_is_validated_before_exec(svc):
    r = svc.get("/ssh/sessions", params={"username": "not valid"})
    assert r.status_code == 400
    # Rejected by manifest pattern validation, so the script is never invoked —
    # there is no exit code to report, same as users'
    # test_shell_outside_the_enum_never_reaches_the_script.
    assert "exit_code" not in r.json()
