"""
The WireGuard package API unit tests against a stand-in ops script.

Tests authentication, validation, operations mapping onto argv/stdin,
and ensures secrets (preshared_key) never reach argv.
"""
from __future__ import annotations

import json
import os
import stat
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402
from hostpanel_wireguardd import crypto        # noqa: E402

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

FAKE_OPS = r"""#!/bin/bash
set -euo pipefail
verb="$1"; shift
{
  printf 'VERB=%s\n' "$verb"
  printf 'ARGV=%s\n' "$*"
} >> "$HP_TEST_LOG"

# Drain NUL-delimited KEY\0VALUE\0 pairs from stdin
if [ ! -t 0 ]; then
  while IFS= read -r -d '' k && IFS= read -r -d '' v; do
    printf 'SECRET=%s len=%s\n' "$k" "${#v}" >> "$HP_TEST_LOG"
  done || true
fi

case "$verb" in
  server-status)
    printf '{"status":"running","interface":"wg0","listen_port":51820,"public_key":"SERVERPUBKEY123=","address":"10.8.0.1/24","subnet":"10.8.0.0/24","endpoint":"203.0.113.10","total_rx_bytes":102400,"total_tx_bytes":204800,"peers_count":2,"active_peers_count":1}\n'
    ;;
  server-start)
    echo "Starting WireGuard wg0..." >&2
    printf '{"ok":true,"status":"running","interface":"wg0"}\n'
    ;;
  server-stop)
    echo "Stopping WireGuard wg0..." >&2
    printf '{"ok":true,"status":"stopped","interface":"wg0"}\n'
    ;;
  server-restart)
    echo "Restarting WireGuard wg0..." >&2
    printf '{"ok":true,"status":"running","interface":"wg0"}\n'
    ;;
  server-toggle)
    printf '{"ok":true,"enabled":%s,"status":"%s"}\n' "$([ "$1" = "1" ] && echo true || echo false)" "$([ "$1" = "1" ] && echo "running" || echo "stopped")"
    ;;
  server-config)
    printf '{"interface":"wg0","listen_port":51820,"address":"10.8.0.1/24","subnet":"10.8.0.0/24","mtu":1420,"public_key":"SERVERPUBKEY123=","endpoint":"203.0.113.10","config_path":"/opt/hostpanel/etc/wireguard/wg0.conf","isolation_path":"/opt/hostpanel/etc/wireguard"}\n'
    ;;
  server-logs)
    printf '{"logs":["2026-08-23T00:00:00Z [INFO] WireGuard server started","2026-08-23T00:01:00Z [INFO] Peer connected: phone"]}\n'
    ;;
  list-peers)
    printf '{"peers":[{"id":"phone","name":"phone","ip":"10.8.0.2","public_key":"CLIENTPUBKEY1=","allowed_ips":"0.0.0.0/0, ::/0","dns":"1.1.1.1","created_at":"2026-08-23T00:00:00Z","enabled":true,"rx_bytes":51200,"tx_bytes":102400,"last_handshake":1724371200,"endpoint":"198.51.100.2:51820"}]}\n'
    ;;
  create-peer)
    echo "Creating peer $1" >&2
    printf '{"ok":true,"peer":{"id":"%s","name":"%s","ip":"%s","public_key":"NEWCLIENTPUBKEY=","allowed_ips":"%s","dns":"%s","created_at":"2026-08-23T00:05:00Z","enabled":true,"config":"[Interface]\\nPrivateKey = PRIVKEY=\\nAddress = %s/24\\nDNS = %s\\n\\n[Peer]\\nPublicKey = SERVERPUBKEY123=\\nEndpoint = 203.0.113.10:51820\\nAllowedIPs = %s\\n"}}\n' "$1" "$1" "${2:-10.8.0.3}" "${3:-0.0.0.0/0, ::/0}" "${4:-1.1.1.1}" "${2:-10.8.0.3}" "${4:-1.1.1.1}" "${3:-0.0.0.0/0, ::/0}"
    ;;
  import-peer)
    echo "Importing peer $1" >&2
    printf '{"ok":true,"peer":{"id":"%s","name":"%s","ip":"%s","public_key":"%s","allowed_ips":"%s","dns":"%s","created_at":"2026-08-23T00:05:00Z","enabled":true,"imported":true,"config":"[Interface]\\nAddress = %s/24\\nDNS = %s\\n\\n[Peer]\\nPublicKey = SERVERPUBKEY123=\\nEndpoint = 203.0.113.10:51820\\nAllowedIPs = %s\\n"}}\n' "$1" "$1" "${3:-10.8.0.4}" "$2" "${4:-0.0.0.0/0, ::/0}" "${5:-1.1.1.1}" "${3:-10.8.0.4}" "${5:-1.1.1.1}" "${4:-0.0.0.0/0, ::/0}"
    ;;
  toggle-peer)
    printf '{"ok":true,"id":"%s","enabled":%s}\n' "$1" "$([ "$2" = "1" ] && echo true || echo false)"
    ;;
  rename-peer)
    printf '{"ok":true,"id":"%s","name":"%s"}\n' "$1" "$2"
    ;;
  delete-peer)
    printf '{"ok":true,"id":"%s","deleted":true}\n' "$1"
    ;;
  get-peer-config)
    printf '{"id":"%s","name":"%s","ip":"10.8.0.2","config":"[Interface]\\nPrivateKey = CLIENTPRIV=\\nAddress = 10.8.0.2/24\\n\\n[Peer]\\nPublicKey = SERVERPUBKEY123=\\nEndpoint = 203.0.113.10:51820\\nAllowedIPs = 0.0.0.0/0\\n"}\n' "$1" "$1"
    ;;
  get-peer-qr)
    printf '{"id":"%s","config":"[Interface]\\nAddress = 10.8.0.2/24\\n","qr_data":"[Interface]\\nAddress = 10.8.0.2/24\\n"}\n' "$1"
    ;;
  *)
    echo "unknown verb $verb" >&2; exit 12
    ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-wireguard-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script).replace("\\", "/"))
    monkeypatch.setenv("HP_TEST_LOG", str(log).replace("\\", "/"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

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

    app = wgd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_unauthenticated(svc):
    """Health check endpoint requires no auth token."""
    res = svc.client.get("/health", headers={tokenlib.HEADER: ""})
    assert res.status_code == 200
    assert res.json() == {"package": "wireguard", "version": "3.0.1", "ok": True}


def test_missing_token_rejected(svc):
    """All operational endpoints require valid token."""
    res = svc.client.get("/server/status", headers={tokenlib.HEADER: ""})
    assert res.status_code == 401
    assert res.json()["error"] == "UNAUTHORIZED"


def test_invalid_token_rejected(svc):
    res = svc.client.get("/server/status", headers={tokenlib.HEADER: "wrong-secret-token"})
    assert res.status_code == 401


# ── server operations ─────────────────────────────────────────────────────────

def test_server_status(svc):
    res = svc.client.get("/server/status")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "running"
    assert data["interface"] == "wg0"
    assert data["listen_port"] == 51820
    assert data["subnet"] == "10.8.0.0/24"
    assert "VERB=server-status" in ops_log(svc)


def test_server_start(svc):
    res = svc.client.post("/server/start")
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert data["status"] == "running"
    assert "VERB=server-start" in ops_log(svc)


def test_server_stop(svc):
    res = svc.client.post("/server/stop")
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert data["status"] == "stopped"
    assert "VERB=server-stop" in ops_log(svc)


def test_server_restart(svc):
    res = svc.client.post("/server/restart")
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert "VERB=server-restart" in ops_log(svc)


def test_server_toggle(svc):
    res = svc.client.post("/server/toggle", json={"enabled": "1"})
    assert res.status_code == 200
    assert res.json()["enabled"] is True

    res2 = svc.client.post("/server/toggle", json={"enabled": "0"})
    assert res2.status_code == 200
    assert res2.json()["enabled"] is False


def test_server_config(svc):
    res = svc.client.get("/server/config")
    assert res.status_code == 200
    data = res.json()
    assert data["interface"] == "wg0"
    assert data["listen_port"] == 51820
    assert data["config_path"] == "/opt/hostpanel/etc/wireguard/wg0.conf"
    assert data["isolation_path"] == "/opt/hostpanel/etc/wireguard"


def test_server_logs(svc):
    res = svc.client.get("/server/logs")
    assert res.status_code == 200
    data = res.json()
    assert "logs" in data
    assert len(data["logs"]) > 0


# ── peer management ───────────────────────────────────────────────────────────

def test_list_peers(svc):
    res = svc.client.get("/peers")
    assert res.status_code == 200
    data = res.json()
    assert "peers" in data
    assert len(data["peers"]) == 1
    assert data["peers"][0]["name"] == "phone"
    assert data["peers"][0]["ip"] == "10.8.0.2"


def test_create_peer(svc):
    res = svc.client.post("/peers/create", json={
        "name": "laptop",
        "ip": "10.8.0.5",
        "allowed_ips": "0.0.0.0/0",
        "dns": "1.1.1.1",
        "preshared_key": "secretpsk1234567890=",
    })
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert data["peer"]["name"] == "laptop"

    log = ops_log(svc)
    assert "VERB=create-peer" in log
    assert "ARGV=laptop 10.8.0.5 0.0.0.0/0 1.1.1.1" in log
    # Crucial security assertion: PSK was sent on stdin, NOT in argv!
    assert "secretpsk1234567890=" not in log
    assert "SECRET=preshared_key len=20" in log


def test_create_peer_validation(svc):
    # Bad name (special chars)
    res = svc.client.post("/peers/create", json={"name": "bad/peer$name"})
    assert res.status_code == 400

    # Bad IP (outside 10.8.0.2-254)
    res2 = svc.client.post("/peers/create", json={"name": "testpeer", "ip": "192.168.1.1"})
    assert res2.status_code == 400


def test_delete_peer(svc):
    res = svc.client.delete("/peers/phone")
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert data["deleted"] is True
    assert "VERB=delete-peer" in ops_log(svc)


def test_get_peer_config(svc):
    res = svc.client.get("/peers/phone/config")
    assert res.status_code == 200
    data = res.json()
    assert data["id"] == "phone"
    assert "[Interface]" in data["config"]


def test_get_peer_qrcode(svc):
    res = svc.client.get("/peers/phone/qrcode")
    assert res.status_code == 200
    data = res.json()
    assert data["id"] == "phone"
    assert "qr_data" in data


def test_generate_keys_endpoint(svc):
    res = svc.client.post("/peers/generate-keys")
    assert res.status_code == 200
    data = res.json()
    assert "private_key" in data
    assert "public_key" in data
    assert "preshared_key" in data
    assert len(data["private_key"]) == 44
    assert len(data["public_key"]) == 44


def test_crypto_pure_python():
    priv = crypto.generate_private_key()
    pub = crypto.generate_public_key(priv)
    psk = crypto.generate_preshared_key()
    assert len(priv) == 44
    assert len(pub) == 44
    assert len(psk) == 44


def test_operations_introspection(svc):
    res = svc.client.get("/operations")
    assert res.status_code == 200
    data = res.json()
    assert data["package"] == "wireguard"
    assert "wireguard.create-peer" in data["operations"]
    assert "wireguard.import-peer" in data["operations"]
    assert "wireguard.toggle-peer" in data["operations"]
    assert "wireguard.rename-peer" in data["operations"]
    assert "wireguard.server-status" in data["operations"]


def test_import_peer(svc):
    res = svc.client.post("/peers/import", json={
        "name": "imported_client",
        "public_key": "CLIENTPUBKEY1234567890123456789012345678901=",
        "ip": "10.8.0.10",
        "allowed_ips": "0.0.0.0/0, ::/0",
        "dns": "1.1.1.1",
        "preshared_key": "secretpsk==",
    })
    assert res.status_code == 200
    peer = res.json()["peer"]
    assert peer["name"] == "imported_client"
    assert peer["imported"] is True
    log = ops_log(svc)
    assert "VERB=import-peer" in log
    assert "SECRET=preshared_key" in log


def test_toggle_peer(svc):
    res = svc.client.post("/peers/phone/toggle", json={"enabled": False})
    assert res.status_code == 200
    assert res.json()["enabled"] is False
    assert "VERB=toggle-peer" in ops_log(svc)


def test_rename_peer(svc):
    res = svc.client.post("/peers/phone/rename", json={"new_name": "new_phone"})
    assert res.status_code == 200
    assert res.json()["name"] == "new_phone"
    assert "VERB=rename-peer" in ops_log(svc)

