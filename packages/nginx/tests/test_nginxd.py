"""
Unit tests for hostpanel-nginxd API service.
"""
from __future__ import annotations

import stat
import sys
from pathlib import Path
import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "api"))

from portald.sdk import manifest as M
from portald.sdk import token as tokenlib

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

FAKE_OPS = r"""#!/bin/bash
set -euo pipefail
verb="$1"; shift
case "$verb" in
  engine-status)     printf '{"ok":true,"engine":"nginx","service":"nginx","status":"running","active":true,"pid":1234,"uptime":"1h","version":"nginx/1.24.0","port":80,"active_connections":10}
' ;;
  engine-start)      printf '{"ok":true,"action":"start","status":"running"}
' ;;
  engine-stop)       printf '{"ok":true,"action":"stop","status":"stopped"}
' ;;
  engine-restart)    printf '{"ok":true,"action":"restart","status":"running"}
' ;;
  engine-reload)     printf '{"ok":true,"action":"reload","reloaded":true}
' ;;
  engine-test)       printf '{"ok":true,"valid":true,"output":"syntax is ok"}
' ;;
  engine-config-get) printf '{"ok":true,"path":"/opt/hostpanel/etc/nginx/nginx.conf","content":"events {} http {}"}
' ;;
  engine-config-set) printf '{"ok":true,"updated":true,"path":"/opt/hostpanel/etc/nginx/nginx.conf"}
' ;;
  engine-logs)       printf '{"ok":true,"log_type":"error","lines":["line 1","line 2"]}
' ;;
  engine-install)    printf '{"ok":true,"engine":"nginx","status":"installed"}
' ;;
  vhost-list)        printf '{"ok":true,"vhosts":[{"domain":"test.com","file":"test.com.conf","enabled":true,"port":80,"ssl":false,"root":"/var/www/html"}]}
' ;;
  vhost-get)         printf '{"ok":true,"domain":"%s","content":"server {}"}
' "$1" ;;
  vhost-set)         printf '{"ok":true,"domain":"%s","saved":true}
' "$1" ;;
  vhost-delete)      printf '{"ok":true,"domain":"%s","deleted":true}
' "$1" ;;
  vhost-enable)      printf '{"ok":true,"domain":"%s","enabled":true}
' "$1" ;;
  vhost-disable)     printf '{"ok":true,"domain":"%s","enabled":false}
' "$1" ;;
  module-list)       printf '{"ok":true,"modules":[{"name":"http_ssl","builtin":true}]}
' ;;
  *)                 echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""

@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-nginx-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_nginxd import main as nginxd

    app = nginxd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token})

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"package": "nginx", "version": "3.0.0", "ok": True}

def test_routes_reject_missing_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/vhosts").status_code == 401

def test_engine_lifecycle(svc):
    assert svc.client.get("/engine/status").status_code == 200
    assert svc.client.post("/engine/start").status_code == 200
    assert svc.client.post("/engine/restart").status_code == 200
    assert svc.client.post("/engine/reload").status_code == 200
    assert svc.client.post("/engine/test").status_code == 200
    assert svc.client.post("/engine/stop").status_code == 200
    assert svc.client.get("/engine/config").status_code == 200

def test_vhost_management(svc):
    assert svc.client.get("/vhosts").status_code == 200
    assert svc.client.get("/vhosts/test.com").status_code == 200
    assert svc.client.post("/vhosts", json={"domain": "test.com", "content": "server {}"}).status_code == 200
    assert svc.client.post("/vhosts/test.com/enable").status_code == 200
    assert svc.client.post("/vhosts/test.com/disable").status_code == 200
    assert svc.client.delete("/vhosts/test.com").status_code == 200

def test_modules(svc):
    assert svc.client.get("/modules").status_code == 200
