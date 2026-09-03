"""
Test suite for hostpanel-nodejsd API daemon.

Tests authentication, operations mapping, parameter validation, reverse proxy
port allocation, lifecycle verbs, streaming SSE responses, and error handling.
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

from portald.sdk import manifest as M
from portald.sdk import token as tokenlib
from hostpanel_nodejsd import ports

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

FAKE_OPS = r"""#!/bin/bash
set -euo pipefail
verb="$1"; shift
{
  printf 'VERB=%s\n' "$verb"
  printf 'ARGV=%s\n' "$*"
} >> "$HP_TEST_LOG"

case "$verb" in
  status)
    echo '{"package":"nodejs","version":"3.0.0","service_unit":"hostpanel-nodejsd.service","run_as":"hp-nodejs","port":9111,"total_apps":2,"running_apps":1,"installed_runtimes":2,"total_memory_mb":45.5,"healthy":true}'
    ;;
  list-apps)
    echo '{"apps":[{"name":"my_app","directory":"/opt/hostpanel/data/apps/my_app","node_version":"20","script":"index.js","port":31000,"status":"running","pid":1234,"memory_mb":45.5,"cpu_pct":0.8}]}'
    ;;
  get-app)
    printf '{"name":"%s","directory":"/opt/hostpanel/data/apps/%s","node_version":"20","script":"index.js","port":31000,"status":"running","pid":1234,"memory_mb":45.5,"cpu_pct":0.8}\n' "$1" "$1"
    ;;
  create-app)
    printf '{"name":"%s","directory":"%s","node_version":"%s","script":"%s","port":%s,"status":"stopped","created":true}\n' "$1" "$2" "$3" "$4" "$5"
    ;;
  start-app)
    printf '{"name":"%s","status":"running","pid":5678,"started":true}\n' "$1"
    ;;
  stop-app)
    printf '{"name":"%s","status":"stopped"}\n' "$1"
    ;;
  restart-app)
    printf '{"name":"%s","status":"running","pid":5679,"restarted":true}\n' "$1"
    ;;
  delete-app)
    printf '{"name":"%s","deleted":true}\n' "$1"
    ;;
  set-env)
    printf '{"name":"%s","env_updated":true}\n' "$1"
    ;;
  get-env)
    printf '{"name":"%s","env":"PORT=31000\\nNODE_ENV=production"}\n' "$1"
    ;;
  get-logs)
    printf '{"name":"%s","stdout":"app started on port 31000","stderr":"","logs":"app started on port 31000"}\n' "$1"
    ;;
  list-runtimes)
    echo '{"runtimes":[{"major":"18","version":"v18.20.7","installed":true,"path":"/opt/hostpanel/runtimes/node/v18/bin/node","is_default":false},{"major":"20","version":"v20.18.3","installed":true,"path":"/opt/hostpanel/runtimes/node/v20/bin/node","is_default":true}]}'
    ;;
  install-runtime)
    echo "==> Downloading and extracting Node.js v$1..." >&2
    printf '{"version":"%s","installed":true,"path":"/opt/hostpanel/runtimes/node/v%s/bin/node"}\n' "$1" "$1"
    ;;
  remove-runtime)
    printf '{"version":"%s","removed":true}\n' "$1"
    ;;
  deploy-app)
    echo "==> Running $2 for app $1..." >&2
    printf '{"name":"%s","command":"%s","deployed":true}\n' "$1" "$2"
    ;;
  boom)
    echo "something broke" >&2; exit 11
    ;;
  *)
    echo "unknown verb $verb" >&2; exit 12
    ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-nodejs-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_nodejsd import main as nodejsd

    app = nodejsd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["package"] == "nodejs"
    assert r.json()["ok"] is True


@pytest.mark.parametrize(
    "path", ["/status", "/apps", "/runtimes", "/operations"]
)
def test_routes_reject_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/status").status_code == 401


def test_unknown_path_requires_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/nonexistent").status_code == 401


# ── status & overview ─────────────────────────────────────────────────────────

def test_get_status(svc):
    r = svc.client.get("/status")
    assert r.status_code == 200
    data = r.json()
    assert data["package"] == "nodejs"
    assert data["port"] == 9111
    assert data["service_unit"] == "hostpanel-nodejsd.service"
    assert data["run_as"] == "hp-nodejs"
    assert "VERB=status" in ops_log(svc)


# ── port allocation ───────────────────────────────────────────────────────────

def test_port_allocator_default():
    port = ports.allocate_port(0, used_ports={31000, 31001})
    assert port == 31002


def test_port_allocator_custom():
    port = ports.allocate_port(31050, used_ports={31000})
    assert port == 31050


def test_port_allocator_conflict():
    with pytest.raises(Exception):
        ports.allocate_port(31000, used_ports={31000})


def test_port_allocator_invalid():
    with pytest.raises(Exception):
        ports.allocate_port(80)


# ── app lifecycle ─────────────────────────────────────────────────────────────

def test_list_apps(svc):
    r = svc.client.get("/apps")
    assert r.status_code == 200
    apps = r.json()["apps"]
    assert len(apps) == 1
    assert apps[0]["name"] == "my_app"
    assert "VERB=list-apps" in ops_log(svc)


def test_get_app(svc):
    r = svc.client.get("/apps/my_app")
    assert r.status_code == 200
    assert r.json()["name"] == "my_app"
    assert "ARGV=my_app" in ops_log(svc)


def test_create_app_auto_port(svc):
    r = svc.client.post(
        "/apps",
        json={
            "name": "new_app",
            "directory": "/opt/hostpanel/data/apps/new_app",
            "node_version": "20",
            "script": "server.js",
            "port": 0,
        },
    )
    assert r.status_code == 200
    data = r.json()
    assert data["name"] == "new_app"
    # Port 31000 was in list-apps mock, so auto port becomes 31001
    assert data["port"] == 31001
    assert "VERB=create-app" in ops_log(svc)


def test_create_app_custom_port(svc):
    r = svc.client.post(
        "/apps",
        json={
            "name": "custom_app",
            "directory": "/opt/hostpanel/data/apps/custom_app",
            "node_version": "22",
            "script": "app.js",
            "port": 31050,
        },
    )
    assert r.status_code == 200
    assert r.json()["port"] == 31050
    assert "ARGV=custom_app /opt/hostpanel/data/apps/custom_app 22 app.js 31050" in ops_log(svc)


def test_start_app(svc):
    r = svc.client.post("/apps/my_app/start")
    assert r.status_code == 200
    assert r.json()["status"] == "running"
    assert "VERB=start-app" in ops_log(svc)


def test_stop_app(svc):
    r = svc.client.post("/apps/my_app/stop")
    assert r.status_code == 200
    assert r.json()["status"] == "stopped"
    assert "VERB=stop-app" in ops_log(svc)


def test_restart_app(svc):
    r = svc.client.post("/apps/my_app/restart")
    assert r.status_code == 200
    assert r.json()["status"] == "running"
    assert "VERB=restart-app" in ops_log(svc)


def test_delete_app(svc):
    r = svc.client.delete("/apps/my_app")
    assert r.status_code == 200
    assert r.json()["deleted"] is True
    assert "VERB=delete-app" in ops_log(svc)


# ── environment & logs ────────────────────────────────────────────────────────

def test_get_env(svc):
    r = svc.client.get("/apps/my_app/env")
    assert r.status_code == 200
    assert "PORT=31000" in r.json()["env"]


def test_set_env(svc):
    r = svc.client.put(
        "/apps/my_app/env", json={"env": "PORT=31000\nNODE_ENV=production"}
    )
    assert r.status_code == 200
    assert r.json()["env_updated"] is True


def test_get_logs(svc):
    r = svc.client.get("/apps/my_app/logs?lines=50&type=out")
    assert r.status_code == 200
    assert "app started" in r.json()["stdout"]
    assert "ARGV=my_app 50 out" in ops_log(svc)


# ── runtimes ──────────────────────────────────────────────────────────────────

def test_list_runtimes(svc):
    r = svc.client.get("/runtimes")
    assert r.status_code == 200
    runtimes = r.json()["runtimes"]
    assert len(runtimes) == 2
    assert runtimes[1]["major"] == "20"


def test_install_runtime_json(svc):
    r = svc.client.post("/runtimes/install", json={"version": "22"})
    assert r.status_code == 200
    assert r.json()["installed"] is True
    assert "ARGV=22" in ops_log(svc)


def test_remove_runtime(svc):
    r = svc.client.delete("/runtimes/18")
    assert r.status_code == 200
    assert r.json()["removed"] is True
    assert "ARGV=18" in ops_log(svc)


# ── streaming (SSE) ───────────────────────────────────────────────────────────

def test_install_runtime_streaming(svc):
    r = svc.client.post(
        "/runtimes/install",
        json={"version": "22"},
        headers={"Accept": "text/event-stream"},
    )
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text


def test_deploy_app_streaming(svc):
    r = svc.client.post(
        "/apps/my_app/deploy",
        json={"command": "npm-install"},
        headers={"Accept": "text/event-stream"},
    )
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text


# ── parameter validation ──────────────────────────────────────────────────────

@pytest.mark.parametrize(
    "name",
    [
        "MyApp",         # Uppercase
        "-leadingdash",   # Leading dash
        "app name",       # Space
        "a" * 65,         # Too long
    ],
)
def test_invalid_app_name_refused_before_exec(svc, name):
    r = svc.client.get(f"/apps/{name}")
    assert r.status_code == 400
    assert ops_log(svc) == ""


# ── failure handling ──────────────────────────────────────────────────────────

def test_ops_failure_status_code(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/status")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_introspection(svc):
    r = svc.client.get("/operations")
    assert r.status_code == 200
    ops_dict = r.json()["operations"]
    assert "nodejs.status" in ops_dict
    assert "nodejs.list-apps" in ops_dict
    assert "nodejs.create-app" in ops_dict
    assert "nodejs.start-app" in ops_dict
    assert "nodejs.stop-app" in ops_dict
    assert "nodejs.list-runtimes" in ops_dict
    assert "nodejs.install-runtime" in ops_dict


def test_every_operation_declares_audit_action():
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())
