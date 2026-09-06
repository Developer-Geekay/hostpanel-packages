"""
The storage package API tests against a stand-in ops script and SQLite database.
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
sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "portald"))

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

case "$verb" in
  storage-init)
    echo "storage directories initialized"
    ;;
  bucket-create)
    printf 'bucket %s directory ready\n' "$1"
    ;;
  bucket-delete)
    printf 'bucket %s deleted\n' "$1"
    ;;
  disk-usage)
    echo '{"total_bytes":107374182400,"used_bytes":14200000000,"free_bytes":93174182400,"buckets_count":2,"buckets":[{"name":"demo-bucket","size_bytes":1048576,"objects_count":4}]}'
    ;;
  service-restart)
    echo "service restarted"
    ;;
  firewall-allow)
    echo "port $1 allowed"
    ;;
  *)
    echo "unknown verb $verb" >&2; exit 12
    ;;
esac
"""


FAKE_OPS_BAT = r"""@echo off
set "VERB=%~1"
shift
echo VERB=%VERB%>> "%HP_TEST_LOG%"
set "REST=%~1"
:argloop
shift
if "%~1"=="" goto argdone
set "REST=%REST% %~1"
goto argloop
:argdone
echo ARGV=%REST%>> "%HP_TEST_LOG%"

if "%VERB%"=="storage-init" (
  echo storage directories initialized
  exit /b 0
)
if "%VERB%"=="bucket-create" (
  echo bucket %~1 directory ready
  exit /b 0
)
if "%VERB%"=="bucket-delete" (
  echo bucket %~1 deleted
  exit /b 0
)
if "%VERB%"=="disk-usage" (
  echo {"total_bytes":107374182400,"used_bytes":14200000000,"free_bytes":93174182400,"buckets_count":2,"buckets":[{"name":"demo-bucket","size_bytes":1048576,"objects_count":4}]}
  exit /b 0
)
if "%VERB%"=="service-restart" (
  echo service restarted
  exit /b 0
)
if "%VERB%"=="firewall-allow" (
  echo port %~1 allowed
  exit /b 0
)
echo unknown verb %VERB% 1>&2
exit /b 12
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    if sys.platform == "win32":
        script = tmp_path / "hp-storage-fake.bat"
        script.write_text(FAKE_OPS_BAT)
    else:
        script = tmp_path / "hp-storage-fake"
        script.write_text(FAKE_OPS)
        script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    db_path = tmp_path / "storage" / "storage.db"
    storage_root = tmp_path / "storage" / "buckets"
    storage_root.mkdir(parents=True, exist_ok=True)

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_DB_PATH", str(db_path))
    monkeypatch.setenv("HP_DISABLE_S3_SERVER", "1")

    from hostpanel_storaged import main as storaged
    from hostpanel_storaged import db

    db.init_storage_tables()
    db.set_storage_setting("storage_path", str(storage_root))

    app = storaged.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log, "storage_root": storage_root})


def ops_log(svc) -> str:
    return svc.log.read_text().replace("\r\n", "\n")


# ── Authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    old = svc.client.headers.pop(tokenlib.HEADER, None)
    try:
        res = svc.client.get("/health")
        assert res.status_code == 200
        assert res.json() == {"package": "storage", "version": "3.1.0", "ok": True}
    finally:
        if old:
            svc.client.headers[tokenlib.HEADER] = old


def test_operation_without_token_is_rejected(svc):
    old = svc.client.headers.pop(tokenlib.HEADER, None)
    try:
        res = svc.client.get("/buckets")
        assert res.status_code == 401
        assert res.json()["error"] == "UNAUTHORIZED"
    finally:
        if old:
            svc.client.headers[tokenlib.HEADER] = old


def test_operation_with_bad_token_is_rejected(svc):
    old = svc.client.headers.get(tokenlib.HEADER)
    try:
        svc.client.headers[tokenlib.HEADER] = "bogus-token"
        res = svc.client.get("/buckets")
        assert res.status_code == 401
    finally:
        if old:
            svc.client.headers[tokenlib.HEADER] = old


# ── Buckets ───────────────────────────────────────────────────────────────────

def test_list_buckets_initially_empty(svc):
    res = svc.client.get("/buckets")
    assert res.status_code == 200
    data = res.json()
    assert data["ok"] is True
    assert data["buckets"] == []


def test_create_bucket(svc):
    res = svc.client.post("/buckets", json={"name": "media-bucket", "public_access": True, "quota_mb": 2048})
    assert res.status_code == 200
    assert res.json()["name"] == "media-bucket"
    assert res.json()["created"] is True

    # Now verify it appears in list
    res2 = svc.client.get("/buckets")
    assert res2.status_code == 200
    buckets = res2.json()["buckets"]
    assert len(buckets) == 1
    assert buckets[0]["name"] == "media-bucket"
    assert buckets[0]["public_access"] is True
    assert buckets[0]["quota_mb"] == 2048
    assert "VERB=bucket-create\nARGV=media-bucket" in ops_log(svc)


def test_create_bucket_duplicate(svc):
    res1 = svc.client.post("/buckets", json={"name": "my-bucket"})
    assert res1.status_code == 200
    res2 = svc.client.post("/buckets", json={"name": "my-bucket"})
    assert res2.status_code == 409


def test_update_bucket(svc):
    svc.client.post("/buckets", json={"name": "update-test", "quota_mb": 1000})
    res = svc.client.patch("/buckets/update-test", json={"quota_mb": 4096, "public_access": True})
    assert res.status_code == 200
    assert res.json()["updated"] is True

    res2 = svc.client.get("/buckets")
    b = [x for x in res2.json()["buckets"] if x["name"] == "update-test"][0]
    assert b["quota_mb"] == 4096
    assert b["public_access"] is True


def test_delete_bucket(svc):
    svc.client.post("/buckets", json={"name": "delete-test"})
    res = svc.client.delete("/buckets/delete-test")
    assert res.status_code == 200
    assert res.json()["deleted"] is True
    assert "VERB=bucket-delete\nARGV=delete-test" in ops_log(svc)

    res2 = svc.client.get("/buckets")
    assert not any(x["name"] == "delete-test" for x in res2.json()["buckets"])


# ── Access Keys ───────────────────────────────────────────────────────────────

def test_access_keys_crud(svc):
    # List initial keys (empty)
    res = svc.client.get("/keys")
    assert res.status_code == 200
    assert res.json()["keys"] == []

    # Create access key
    res2 = svc.client.post("/keys", json={"label": "App Backup Key"})
    assert res2.status_code == 200
    key_data = res2.json()["key"]
    assert key_data["access_key_id"].startswith("HPK")
    assert len(key_data["secret_access_key"]) == 40
    assert key_data["label"] == "App Backup Key"

    key_id = key_data["access_key_id"]

    # Toggle status
    res3 = svc.client.post(f"/keys/{key_id}/status", json={"status": "disabled"})
    assert res3.status_code == 200
    assert res3.json()["status"] == "disabled"

    # Delete access key
    res4 = svc.client.delete(f"/keys/{key_id}")
    assert res4.status_code == 200
    assert res4.json()["deleted"] is True


# ── Settings & Meta ───────────────────────────────────────────────────────────

def test_meta(svc):
    res = svc.client.get("/meta")
    assert res.status_code == 200
    data = res.json()
    assert data["package"] == "storage"
    assert data["version"] == "3.1.2"
    assert "s3_port" in data


def test_settings(svc):
    res = svc.client.get("/settings")
    assert res.status_code == 200
    data = res.json()
    assert data["s3_port"] == 9000

    custom_path = str(svc.storage_root / "custom_data")
    res2 = svc.client.post("/settings", json={"s3_port": "9100", "storage_path": custom_path})
    assert res2.status_code == 200
    assert res2.json()["saved"] is True
    assert "VERB=storage-init" in ops_log(svc)

    res3 = svc.client.get("/settings")
    assert res3.json()["storage_path"] == custom_path
    assert res3.json()["s3_port"] == 9100


# ── Operations Introspection ──────────────────────────────────────────────────

def test_operations_introspection(svc):
    res = svc.client.get("/operations")
    assert res.status_code == 200
    data = res.json()
    assert data["package"] == "storage"
    assert "storage.bucket-create" in data["operations"]
    assert "storage.bucket-delete" in data["operations"]
    assert "storage.disk-usage" in data["operations"]
