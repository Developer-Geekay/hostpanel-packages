"""
The WireGuard API against the REAL `hp-wireguard` bash script, in dry-run.

Proves the Python API and the actual bash script agree on arguments,
JSON output shapes, error exit codes, and isolated state directory layouts.
"""
from __future__ import annotations

import os
import stat
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / "packages" / "wireguard"
sys.path.insert(0, str(PACKAGE / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402


@pytest.fixture
def svc(monkeypatch, tmp_path):
    token = tokenlib.generate()
    ops_script = PACKAGE / "ops" / "hp-wireguard"
    # Ensure executable bit
    ops_script.chmod(ops_script.stat().st_mode | stat.S_IEXEC)

    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(ops_script).replace("\\", "/"))
    monkeypatch.setenv("HP_CORE_LIB", str(ROOT / "hpcore" / "lib").replace("\\", "/"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_DRYRUN", "1")

    # Isolated scratch paths per test
    wg_dir = tmp_path / "etc" / "wireguard"
    wg_run = tmp_path / "run" / "wireguard"
    wg_logs = tmp_path / "logs" / "wireguard"
    wg_dir.mkdir(parents=True)
    wg_run.mkdir(parents=True)
    wg_logs.mkdir(parents=True)

    monkeypatch.setenv("HP_WG_DIR", str(wg_dir).replace("\\", "/"))
    monkeypatch.setenv("HP_WG_RUN", str(wg_run).replace("\\", "/"))
    monkeypatch.setenv("HP_WG_LOGS", str(wg_logs).replace("\\", "/"))

    if sys.platform == "win32":
        from portald.sdk import ops
        orig_build_argv = ops._build_argv
        def win_build_argv(spec):
            argv = orig_build_argv(spec)
            git_bash = r"C:\Program Files\Git\bin\bash.exe"
            if os.path.exists(git_bash):
                return [git_bash, *argv]
            return argv
        monkeypatch.setattr(ops, "_build_argv", win_build_argv)

    from hostpanel_wireguardd import main as wgd

    app = wgd.create_app(M.load(PACKAGE / "manifest.json"))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "tmp": tmp_path, "wg_dir": wg_dir})


def test_real_script_server_status(svc):
    res = svc.client.get("/server/status")
    assert res.status_code == 200
    data = res.json()
    assert data["interface"] == "wg0"
    assert data["listen_port"] == 51820
    assert data["subnet"] == "10.8.0.0/24"
    assert data["status"] in ("running", "stopped")


def test_real_script_server_lifecycle(svc):
    # Start
    res_start = svc.client.post("/server/start")
    assert res_start.status_code == 200
    assert res_start.json()["status"] == "running"

    # Status check
    res_st = svc.client.get("/server/status")
    assert res_st.status_code == 200
    assert res_st.json()["status"] == "running"

    # Stop
    res_stop = svc.client.post("/server/stop")
    assert res_stop.status_code == 200
    assert res_stop.json()["status"] == "stopped"

    # Restart
    res_restart = svc.client.post("/server/restart")
    assert res_restart.status_code == 200
    assert res_restart.json()["status"] == "running"


def test_real_script_peer_lifecycle(svc):
    # 1. Create peer
    res_create = svc.client.post("/peers/create", json={
        "name": "work_laptop",
        "allowed_ips": "0.0.0.0/0, ::/0",
        "dns": "1.1.1.1",
        "preshared_key": "testpsk==",
    })
    assert res_create.status_code == 200
    peer = res_create.json()["peer"]
    assert peer["name"] == "work_laptop"
    assert peer["ip"] == "10.8.0.2"
    assert "public_key" in peer
    assert "[Interface]" in peer["config"]

    # Verify files created in isolated dir
    conf_file = svc.wg_dir / "peers" / "work_laptop.conf"
    json_file = svc.wg_dir / "peers" / "work_laptop.json"
    assert conf_file.exists()
    assert json_file.exists()

    # 2. List peers
    res_list = svc.client.get("/peers")
    assert res_list.status_code == 200
    peers = res_list.json()["peers"]
    assert len(peers) == 1
    assert peers[0]["id"] == "work_laptop"
    assert peers[0]["ip"] == "10.8.0.2"

    # 3. Toggle peer (disable and re-enable)
    res_toggle_off = svc.client.post("/peers/work_laptop/toggle", json={"enabled": False})
    assert res_toggle_off.status_code == 200
    assert res_toggle_off.json()["enabled"] is False

    res_list_t = svc.client.get("/peers")
    assert res_list_t.json()["peers"][0]["enabled"] is False

    res_toggle_on = svc.client.post("/peers/work_laptop/toggle", json={"enabled": True})
    assert res_toggle_on.status_code == 200
    assert res_toggle_on.json()["enabled"] is True

    # 4. Rename peer
    res_ren = svc.client.post("/peers/work_laptop/rename", json={"new_name": "renamed_laptop"})
    assert res_ren.status_code == 200
    assert res_ren.json()["name"] == "renamed_laptop"

    res_list_r = svc.client.get("/peers")
    assert res_list_r.json()["peers"][0]["name"] == "renamed_laptop"

    # 5. Import external peer
    res_import = svc.client.post("/peers/import", json={
        "name": "external_phone",
        "public_key": "EXTERNALPUBKEY1234567890123456789012345678=",
        "ip": "10.8.0.5",
    })
    assert res_import.status_code == 200
    assert res_import.json()["peer"]["imported"] is True

    res_list_imp = svc.client.get("/peers")
    assert len(res_list_imp.json()["peers"]) == 2

    # 6. Get peer config & QR
    res_cfg = svc.client.get("/peers/work_laptop/config")
    assert res_cfg.status_code == 200
    assert "[Interface]" in res_cfg.json()["config"]

    res_qr = svc.client.get("/peers/work_laptop/qrcode")
    assert res_qr.status_code == 200
    assert "qr_data" in res_qr.json()

    # 7. Delete peers
    res_del = svc.client.delete("/peers/work_laptop")
    assert res_del.status_code == 200
    assert res_del.json()["deleted"] is True
    assert not conf_file.exists()

    res_del_imp = svc.client.delete("/peers/external_phone")
    assert res_del_imp.status_code == 200
    assert res_del_imp.json()["deleted"] is True

    # 8. List peers is empty
    res_list2 = svc.client.get("/peers")
    assert res_list2.status_code == 200
    assert len(res_list2.json()["peers"]) == 0
