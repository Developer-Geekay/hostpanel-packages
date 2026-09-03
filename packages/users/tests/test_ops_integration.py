"""
The users API against the REAL `hp-users` script, in dry-run.

The other suite uses a stand-in script, which proves the API layer works but
cannot prove the API and the script agree. That agreement is exactly what breaks
silently: the script grows an argument, the API keeps sending the old shape, and
the failure surfaces as a validation error from a privileged process rather than
as anything obviously wrong.

`HP_OPS_DRYRUN=1` makes this runnable anywhere, including macOS: every mutating
command goes through `act`, which reports instead of executing, so nothing
touches the host. Dry-run is honoured only when euid != 0, so it is structurally
inert under sudo and cannot become a production escape hatch.

What this does NOT cover: whether `useradd` actually works. That needs a Linux
host and belongs in the VM run.
"""
from __future__ import annotations

import json
import secrets
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / "packages" / "users"
sys.path.insert(0, str(PACKAGE / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402


@pytest.fixture
def scratch_user() -> str:
    """A username that cannot collide with a real account on this host.

    These tests originally hardcoded "alice", which passed until the panel was
    used to create a real `alice` — then `require_user_absent` correctly refused
    and three tests failed. A dry-run test still reads the REAL /etc/passwd, so
    any fixed name is a latent conflict with whatever the operator happens to
    have created.
    """
    return f"hptest{secrets.token_hex(4)}"


@pytest.fixture
def svc(monkeypatch):
    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(PACKAGE / "ops" / "hp-users"))
    monkeypatch.setenv("HP_CORE_LIB", str(ROOT / "hpcore" / "lib"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_DRYRUN", "1")
    monkeypatch.setenv("HP_OPS_DRY_RUN", "1")

    from hostpanel_usersd import main as usersd

    app = usersd.create_app(M.load(PACKAGE / "manifest.json"))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield client


def frames(text: str) -> list[dict]:
    return [json.loads(line[len("data: "):])
            for line in text.splitlines() if line.startswith("data: ")]


def test_create_reaches_useradd_with_the_expected_argv(svc, scratch_user):
    """The contract between the API and the script, asserted end to end."""
    r = svc.post("/users", json={"username": scratch_user, "shell": "/bin/bash"},
                 headers={"Accept": "text/event-stream"})
    assert r.status_code == 200
    log = "\n".join(f["line"] for f in frames(r.text) if "line" in f)
    assert f"WOULD-EXEC: useradd -m -s /bin/bash {scratch_user}" in log


def test_password_is_redacted_in_the_streamed_log(svc, scratch_user):
    """The operator watches this scroll past, and so does anyone they screen-share
    with. The script redacts it; this asserts the redaction survives the whole
    path out to the SSE frames."""
    r = svc.post("/users", json={"username": scratch_user, "password": "hunter2"},
                 headers={"Accept": "text/event-stream"})
    assert "hunter2" not in r.text
    assert "<redacted>" in r.text


def test_terminal_frame_carries_the_parsed_result(svc, scratch_user):
    r = svc.post("/users", json={"username": scratch_user},
                 headers={"Accept": "text/event-stream"})
    result = frames(r.text)[-1]
    assert result["ok"] is True
    assert result["data"]["username"] == scratch_user
    assert result["exit_code"] == 0


# ── the exit-code taxonomy, end to end ────────────────────────────────────────

def test_reserved_name_is_403(svc, scratch_user):
    """Exit 14 (DENIED). The script refuses `root` before it checks whether the
    account exists, so an absent root cannot be created."""
    r = svc.post("/users", json={"username": "root"})
    assert r.status_code == 403
    assert r.json()["error"] == "DENIED"
    assert r.json()["exit_code"] == 14


def test_missing_user_is_404(svc, scratch_user):
    """Exit 10 (NOT_FOUND)."""
    r = svc.put("/users/definitelynotarealuser/lock")
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_shell_outside_the_enum_never_reaches_the_script(svc, scratch_user):
    """Refused by manifest validation, so there is no exit code at all."""
    r = svc.post("/users", json={"username": "bob", "shell": "/bin/evil"})
    assert r.status_code == 400
    assert "exit_code" not in r.json()


def test_traversal_in_chown_path_is_refused(svc, scratch_user):
    r = svc.post(f"/users/{scratch_user}/chown-home", json={"path": "/home/../etc"})
    assert r.status_code in (400, 403), r.json()
    assert r.json()["error"] in ("VALIDATION", "DENIED")
