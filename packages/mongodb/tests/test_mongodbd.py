"""
Unit tests for hostpanel-mongodbd API service.
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
  db-list)            printf '{"ok":true,"databases":[{"name":"appdb","size_bytes":2048,"size_human":"2.0 KB"}]}\n' ;;
  db-create)          printf '{"ok":true,"name":"%s","created":true}\n' "$1" ;;
  db-drop)            printf '{"ok":true,"name":"%s","dropped":true}\n' "$1" ;;
  db-size)            printf '{"ok":true,"name":"%s","size_bytes":1024,"size_human":"1.0 KB"}\n' "$1" ;;
  db-connections)     printf '{"ok":true,"connections":3}\n' ;;
  collection-list)    printf '{"ok":true,"database":"%s","collections":[{"name":"users","type":"collection","count":5,"size_bytes":4096,"size_human":"4.0 KB"}]}\n' "$1" ;;
  collection-create)  printf '{"ok":true,"database":"%s","collection":"%s","created":true}\n' "$1" "$2" ;;
  collection-drop)    printf '{"ok":true,"database":"%s","collection":"%s","dropped":true}\n' "$1" "$2" ;;
  collection-query)   printf '{"ok":true,"database":"%s","collection":"%s","documents":[{"_id":"1","name":"alice"}],"count":1,"execution_time_ms":1.5}\n' "$1" "$2" ;;
  user-list)          printf '{"ok":true,"users":[{"username":"appuser","database":"admin","roles":["readWrite"]}]}\n' ;;
  user-create)        printf '{"ok":true,"username":"%s","database":"%s","roles":"%s"}\n' "$1" "${2:-admin}" "${3:-readWrite}" ;;
  user-drop)          printf '{"ok":true,"username":"%s","database":"%s","dropped":true}\n' "$1" "${2:-admin}" ;;
  user-set-password)  printf '{"ok":true,"username":"%s","database":"%s","password_updated":true}\n' "$1" "${2:-admin}" ;;
  grant)              printf '{"ok":true,"username":"%s","database":"%s","roles":"%s"}\n' "$1" "$2" "${3:-readWrite}" ;;
  revoke)             printf '{"ok":true,"username":"%s","database":"%s","revoked":true}\n' "$1" "$2" ;;
  engine-status)      printf '{"ok":true,"engine":"mongodb","service":"mongodb","status":"running","active":true,"pid":5678,"uptime":"2h","version":"MongoDB 7.0.8","connections":3,"port":27017}\n' ;;
  engine-start)       printf '{"ok":true,"action":"start","status":"active"}\n' ;;
  engine-stop)        printf '{"ok":true,"action":"stop","status":"inactive"}\n' ;;
  engine-restart)     printf '{"ok":true,"action":"restart","status":"active"}\n' ;;
  engine-reload)      printf '{"ok":true,"action":"reload","status":"active"}\n' ;;
  engine-config-get)  printf '{"ok":true,"path":"/opt/hostpanel/etc/mongodb/mongod.conf","content":"storage:\n  dbPath: /opt/hostpanel/data/mongodb"}\n' ;;
  engine-config-set)  printf '{"ok":true,"path":"/opt/hostpanel/etc/mongodb/mongod.conf","saved":true}\n' ;;
  engine-logs)        printf '{"ok":true,"lines":"50","content":"log line 1\nlog line 2"}\n' ;;
  engine-install)     printf '{"ok":true,"engine":"mongodb","status":"installed"}\n' ;;
  *)                  echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-mongodb-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_mongodbd import main as mongodbd

    app = mongodbd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"package": "mongodb", "version": "3.0.1", "ok": True}


def test_routes_reject_missing_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/databases").status_code == 401


def test_list_databases(svc):
    resp = svc.client.get("/databases")
    assert resp.status_code == 200
    assert resp.json() == {"ok": True, "databases": [{"name": "appdb", "size_bytes": 2048, "size_human": "2.0 KB"}]}


def test_create_database(svc):
    resp = svc.client.post("/databases", json={"name": "testdb"})
    assert resp.status_code == 200
    assert resp.json() == {"ok": True, "name": "testdb", "created": True}


def test_drop_database(svc):
    resp = svc.client.delete("/databases/testdb")
    assert resp.status_code == 200
    assert resp.json() == {"ok": True, "name": "testdb", "dropped": True}


def test_database_size(svc):
    resp = svc.client.get("/databases/testdb/size")
    assert resp.status_code == 200
    assert resp.json() == {"ok": True, "name": "testdb", "size_bytes": 1024, "size_human": "1.0 KB"}


def test_user_management(svc):
    # list
    r1 = svc.client.get("/users")
    assert r1.status_code == 200
    # create
    r2 = svc.client.post("/users", json={"username": "alice", "password": "secure123Password!", "database": "admin", "roles": "readWrite"})
    assert r2.status_code == 200
    # set password
    r3 = svc.client.post("/users/alice/password", json={"password": "newPassword123!", "database": "admin"})
    assert r3.status_code == 200
    # drop
    r4 = svc.client.delete("/users/alice?database=admin")
    assert r4.status_code == 200


def test_grants(svc):
    r1 = svc.client.post("/grants", json={"username": "alice", "database": "testdb", "roles": "readWrite"})
    assert r1.status_code == 200
    r2 = svc.client.post("/grants/revoke", json={"username": "alice", "database": "testdb"})
    assert r2.status_code == 200


def test_engine_lifecycle(svc):
    assert svc.client.get("/engine/status").status_code == 200
    assert svc.client.post("/engine/start").status_code == 200
    assert svc.client.post("/engine/restart").status_code == 200
    assert svc.client.post("/engine/reload").status_code == 200
    assert svc.client.post("/engine/stop").status_code == 200
    assert svc.client.get("/engine/config").status_code == 200
    assert svc.client.get("/engine/logs?lines=20").status_code == 200


def test_database_collections(svc):
    resp = svc.client.get("/databases/appdb/collections")
    assert resp.status_code == 200
    data = resp.json()
    assert data["ok"] is True
    assert len(data["collections"]) == 1
    assert data["collections"][0]["name"] == "users"


def test_create_drop_collection(svc):
    r1 = svc.client.post("/databases/appdb/collections", json={"collection": "orders"})
    assert r1.status_code == 200
    assert r1.json()["created"] is True

    r2 = svc.client.delete("/databases/appdb/collections/orders")
    assert r2.status_code == 200
    assert r2.json()["dropped"] is True


def test_collection_query(svc):
    resp = svc.client.post("/databases/appdb/collections/users/query", json={"filter": "{}", "limit": 20})
    assert resp.status_code == 200
    data = resp.json()
    assert data["ok"] is True
    assert len(data["documents"]) == 1
    assert data["documents"][0]["name"] == "alice"
