"""
The ftp API against the REAL `hp-ftp` script, in dry-run.

The other suite uses a stand-in script, which proves the API layer works but
cannot prove the API and the script agree. That agreement is exactly what
breaks silently: the script grows an argument, the API keeps sending the old
shape, and the failure surfaces as a validation error from a privileged
process rather than as anything obviously wrong.

`HP_OPS_DRYRUN=1` makes this runnable anywhere, including macOS: every
mutating command goes through `act` (or an explicit dry-run branch for the
password-bearing verbs), which reports instead of executing, so nothing
touches a real pure-ftpd install. Dry-run is honoured only when euid != 0, so
it is structurally inert under sudo and cannot become a production escape
hatch.

What this does NOT cover: whether `pure-pw useradd` actually works, and
whether the exact flags this script uses match the pure-pw binary on a real
host — neither pure-ftpd nor pure-pw is installed on the dev VM this was
built against. That needs a provisioned host.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / "packages" / "ftp"
sys.path.insert(0, str(PACKAGE / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402


@pytest.fixture
def svc(monkeypatch, tmp_path):
    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(PACKAGE / "ops" / "hp-ftp"))
    monkeypatch.setenv("HP_CORE_LIB", str(ROOT / "hpcore" / "lib"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_DRYRUN", "1")
    # A scratch ftp root and passwd file, isolated per test — never the real
    # /home or /etc/pure-ftpd on the machine running the suite.
    ftp_root = tmp_path / "home"
    ftp_root.mkdir()
    monkeypatch.setenv("HP_FTP_ROOT", str(ftp_root))
    monkeypatch.setenv("HP_FTP_PASSWD_FILE", str(tmp_path / "pureftpd.passwd"))
    monkeypatch.setenv("HP_FTP_DB_FILE", str(tmp_path / "pureftpd.pdb"))
    (tmp_path / "pureftpd.passwd").touch()
    # Deliberately absent system account, same as ops/tests/run.sh: this
    # machine has no pure-ftpd installed, so `create` is expected to fail
    # closed on the missing uid/gid mapping, not to succeed.
    monkeypatch.setenv("HP_FTP_SYS_USER", "hp-ftp-test-nonexistent-user")
    monkeypatch.setenv("HP_FTP_SYS_GROUP", "hp-ftp-test-nonexistent-group")

    from hostpanel_ftpd import main as ftpd

    app = ftpd.create_app(M.load(PACKAGE / "manifest.json"))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield client


def frames(text: str) -> list[dict]:
    return [json.loads(line[len("data: "):])
            for line in text.splitlines() if line.startswith("data: ")]


def test_create_reaches_the_script_and_fails_closed_on_the_missing_system_account(svc):
    """The contract between the API and the script, asserted end to end — and
    an honest limitation: with no pure-ftpd system user provisioned on this
    machine, `create` cannot go further than DEPENDENCY (20)."""
    import os
    home = os.environ["HP_FTP_ROOT"] + "/alice"
    r = svc.post("/accounts", json={"username": "alice", "home": home,
                                    "password": "s3cretpassword"},
                 headers={"Accept": "text/event-stream"})
    assert r.status_code == 200
    result = frames(r.text)[-1]
    assert result["ok"] is False
    assert result["code"] == "DEPENDENCY"
    assert result["exit_code"] == 20


def test_password_is_redacted_in_the_streamed_log(svc, monkeypatch):
    """The operator watches this scroll past, and so does anyone they
    screen-share with. The script redacts it; this asserts the redaction
    survives the whole path out to the SSE frames.

    Uses `nobody`/`nogroup` — accounts that exist on any Linux box — as the
    system uid/gid mapping, specifically so this reaches the dry-run
    WOULD-EXEC echo (which is what actually redacts the password) rather than
    stopping earlier at the missing-system-account DEPENDENCY failure the
    other tests in this file deliberately exercise.
    """
    import os
    monkeypatch.setenv("HP_FTP_SYS_USER", "nobody")
    monkeypatch.setenv("HP_FTP_SYS_GROUP", "nogroup")
    home = os.environ["HP_FTP_ROOT"] + "/alice"
    r = svc.post("/accounts", json={"username": "alice", "home": home,
                                    "password": "hunter2hunter2"},
                 headers={"Accept": "text/event-stream"})
    assert "hunter2hunter2" not in r.text
    assert "<redacted>" in r.text


def test_delete_on_an_empty_passwd_file_is_not_found(svc):
    r = svc.delete("/accounts/alice")
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_reserved_name_is_403(svc):
    """Exit 14 (DENIED). The script refuses reserved names before it checks
    whether the account exists."""
    r = svc.delete("/accounts/root")
    assert r.status_code == 403
    assert r.json()["error"] == "DENIED"
    assert r.json()["exit_code"] == 14


def test_invalid_username_never_reaches_the_script(svc):
    """Refused by manifest validation, so there is no exit code at all."""
    r = svc.delete("/accounts/..%2F..%2Fetc")
    assert r.status_code in (400, 404)


def test_traversal_in_home_path_is_refused(svc):
    r = svc.put("/accounts/alice/home", json={"home": "/home/../etc"})
    assert r.status_code in (400, 403), r.json()
    assert r.json()["error"] in ("VALIDATION", "DENIED")


def test_symlink_escape_in_home_path_is_refused(svc, monkeypatch):
    ftp_root = Path(__import__("os").environ["HP_FTP_ROOT"])
    victim = ftp_root / "victim"
    victim.mkdir()
    escape = victim / "escape"
    escape.symlink_to("/etc")

    r = svc.put("/accounts/alice/home", json={"home": str(escape)})
    assert r.status_code == 400
    assert r.json()["error"] == "VALIDATION"


def test_quota_with_non_numeric_value_never_reaches_the_script(svc):
    r = svc.put("/accounts/alice/quota", json={"max_files": "abc", "max_mb": 10})
    assert r.status_code == 422  # pydantic: max_files is typed as int
