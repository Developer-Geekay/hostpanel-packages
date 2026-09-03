import pytest
from fastapi.testclient import TestClient
from portald.sdk import manifest as M
from hostpanel_websitesd.main import create_app
from pathlib import Path

MANIFEST_PATH = Path(__file__).resolve().parents[1] / "manifest.json"
REAL_OPS_SCRIPT = Path(__file__).resolve().parents[1] / "ops" / "hp-websites"

@pytest.fixture
def client(monkeypatch):
    monkeypatch.setenv("HP_PACKAGE_TOKEN", "test-token")
    monkeypatch.setenv("HP_OPS_DRY_RUN", "1")
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_SCRIPT", str(REAL_OPS_SCRIPT))
    manifest = M.load(MANIFEST_PATH)
    app = create_app(manifest)
    return TestClient(app)

def test_healthz(client):
    res = client.get("/healthz")
    assert res.status_code == 200
    assert res.json() == {"status": "ok", "package": "websites"}

def test_unauthorized(client):
    res = client.get("/vhosts")
    assert res.status_code == 401

def test_engine_check(client):
    res = client.get("/engine/check", headers={"X-HostPanel-Token": "test-token"})
    assert res.status_code == 200
    data = res.json()
    assert "nginx_installed" in data
    assert "apache_installed" in data
    assert "php_installed" in data
    assert "nodejs_installed" in data

def test_vhost_list(client):
    res = client.get("/vhosts", headers={"X-HostPanel-Token": "test-token"})
    assert res.status_code == 200
    assert "vhosts" in res.json()

def test_vhost_logs(client):
    res = client.get(
        "/vhosts/testsite.com/logs?lines=20&log_type=access&engine=nginx",
        headers={"X-HostPanel-Token": "test-token"},
    )
    assert res.status_code == 200
    data = res.json()
    assert data.get("ok") is True
    assert "lines" in data

def test_vhost_create_and_delete(client):
    res = client.post(
        "/vhosts",
        headers={"X-HostPanel-Token": "test-token"},
        json={"domain": "testsite.com", "mode": "hybrid_apache", "php_version": "8.3"},
    )
    assert res.status_code == 200
    assert res.json().get("status") == "created"

    del_res = client.delete(
        "/vhosts/testsite.com",
        headers={"X-HostPanel-Token": "test-token"},
    )
    assert del_res.status_code == 200
    assert del_res.json().get("status") == "deleted"

def test_node_vhost_create(client):
    res = client.post(
        "/vhosts",
        headers={"X-HostPanel-Token": "test-token"},
        json={
            "domain": "nodeapp.local",
            "mode": "node",
            "doc_root": "/opt/hostpanel/data/apps/nodeapp",
            "proxy_target": "http://127.0.0.1:31000",
        },
    )
    assert res.status_code == 200
    assert res.json().get("status") == "created"

    del_res = client.delete(
        "/vhosts/nodeapp.local",
        headers={"X-HostPanel-Token": "test-token"},
    )
    assert del_res.status_code == 200
    assert del_res.json().get("status") == "deleted"
