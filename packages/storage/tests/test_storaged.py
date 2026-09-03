"""
The storage package API tests against a stand-in ops script.
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

if [ ! -t 0 ]; then
  while IFS= read -r -d '' k && IFS= read -r -d '' v; do
    printf 'SECRET=%s len=%s\n' "$k" "${#v}" >> "$HP_TEST_LOG"
  done || true
fi

case "$verb" in
  list-buckets)
    echo '{"buckets":[{"name":"demo-bucket","policy":"private","size_bytes":1024,"objects_count":2,"created_at":"2026-08-20T10:00:00Z"}]}'
    ;;
  create-bucket)
    printf '{"name":"%s","created":true,"policy":"%s","size_bytes":0,"objects_count":0,"created_at":"2026-08-23T00:00:00Z"}\n' "$1" "$2"
    ;;
  delete-bucket)
    printf '{"name":"%s","deleted":true}\n' "$1"
    ;;
  list-backups)
    echo '{"backups":[{"id":"backup-20260823-010000","name":"full-system-backup","targets":"all","size_bytes":25480000,"created_at":"2026-08-23T01:00:00Z","destination":"local","filename":"backup-20260823-010000.tar.zst"}]}'
    ;;
  create-backup)
    echo "[storage] Creating snapshot..." >&2
    printf '{"id":"backup-20260823-010000","name":"%s","targets":"%s","size_bytes":15420000,"created_at":"2026-08-23T00:00:00Z","destination":"%s","filename":"backup-20260823-010000.tar.zst","created":true}\n' "$1" "$2" "$3"
    ;;
  restore-backup)
    echo "[storage] Restoring backup..." >&2
    printf '{"id":"%s","restored":true,"targets":"%s"}\n' "$1" "$2"
    ;;
  delete-backup)
    printf '{"id":"%s","deleted":true}\n' "$1"
    ;;
  list-schedules)
    echo '{"schedules":[{"name":"daily-full-backup","cron":"0 2 * * *","targets":"all","retention_days":7,"destination":"local","enabled":true}]}'
    ;;
  set-schedule)
    printf '{"name":"%s","saved":true,"schedule":{"name":"%s","cron":"%s","targets":"%s","retention_days":%s,"destination":"%s","enabled":true}}\n' "$1" "$1" "$2" "$3" "$4" "$5"
    ;;
  delete-schedule)
    printf '{"name":"%s","deleted":true}\n' "$1"
    ;;
  disk-usage)
    echo '{"total_bytes":107374182400,"used_bytes":14200000000,"free_bytes":93174182400,"breakdown":[{"category":"websites","path":"/opt/hostpanel/data/vhosts","size_bytes":5242880000},{"category":"databases","path":"/opt/hostpanel/data","size_bytes":3145728000},{"category":"storage","path":"/opt/hostpanel/data/storage","size_bytes":2097152000},{"category":"backups","path":"/opt/hostpanel/data/backups","size_bytes":2621440000},{"category":"logs","path":"/opt/hostpanel/logs","size_bytes":524288000},{"category":"runtimes","path":"/opt/hostpanel/runtimes","size_bytes":568512000}]}'
    ;;
  *)
    echo "unknown verb $verb" >&2; exit 12
    ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-storage-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_storaged import main as storaged

    app = storaged.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── Authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    svc.client.headers.pop(tokenlib.HEADER, None)
    res = svc.client.get("/health")
    assert res.status_code == 200
    assert res.json() == {"package": "storage", "version": "3.0.0", "ok": True}


def test_operation_without_token_is_rejected(svc):
    svc.client.headers.pop(tokenlib.HEADER, None)
    res = svc.client.get("/buckets")
    assert res.status_code == 401
    assert res.json()["error"] == "UNAUTHORIZED"


def test_operation_with_bad_token_is_rejected(svc):
    svc.client.headers[tokenlib.HEADER] = "bogus-token"
    res = svc.client.get("/buckets")
    assert res.status_code == 401


# ── Buckets ───────────────────────────────────────────────────────────────────

def test_list_buckets(svc):
    res = svc.client.get("/buckets")
    assert res.status_code == 200
    data = res.json()
    assert "buckets" in data
    assert data["buckets"][0]["name"] == "demo-bucket"
    assert "VERB=list-buckets" in ops_log(svc)


def test_create_bucket(svc):
    res = svc.client.post("/buckets", json={"name": "media-bucket", "policy": "public-read"})
    assert res.status_code == 200
    assert res.json()["name"] == "media-bucket"
    assert res.json()["created"] is True
    assert "VERB=create-bucket\nARGV=media-bucket public-read" in ops_log(svc)


def test_create_bucket_invalid_name(svc):
    res = svc.client.post("/buckets", json={"name": "Invalid_Bucket_Uppercase"})
    assert res.status_code in (400, 422)


def test_delete_bucket(svc):
    res = svc.client.delete("/buckets/old-bucket")
    assert res.status_code == 200
    assert res.json()["deleted"] is True
    assert "VERB=delete-bucket\nARGV=old-bucket" in ops_log(svc)


# ── Backups ───────────────────────────────────────────────────────────────────

def test_list_backups(svc):
    res = svc.client.get("/backups")
    assert res.status_code == 200
    data = res.json()
    assert "backups" in data
    assert data["backups"][0]["id"] == "backup-20260823-010000"


def test_create_backup_json(svc):
    res = svc.client.post("/backups", json={
        "name": "daily-snap",
        "targets": "all",
        "destination": "local",
        "compression": "zstd"
    })
    assert res.status_code == 200
    assert res.json()["created"] is True
    assert "VERB=create-backup" in ops_log(svc)


def test_create_backup_sse_stream(svc):
    res = svc.client.post(
        "/backups",
        headers={"Accept": "text/event-stream"},
        json={"name": "stream-snap", "targets": "all", "destination": "local", "compression": "zstd"}
    )
    assert res.status_code == 200
    assert "text/event-stream" in res.headers["content-type"]
    assert "event: result" in res.text


def test_restore_backup_stream(svc):
    res = svc.client.post(
        "/backups/backup-20260823-010000/restore",
        headers={"Accept": "text/event-stream"},
        json={"targets": "all"}
    )
    assert res.status_code == 200
    assert "text/event-stream" in res.headers["content-type"]
    assert "VERB=restore-backup" in ops_log(svc)


def test_delete_backup(svc):
    res = svc.client.delete("/backups/backup-20260823-010000")
    assert res.status_code == 200
    assert res.json()["deleted"] is True
    assert "VERB=delete-backup\nARGV=backup-20260823-010000" in ops_log(svc)


# ── Schedules ─────────────────────────────────────────────────────────────────

def test_list_schedules(svc):
    res = svc.client.get("/schedules")
    assert res.status_code == 200
    assert "schedules" in res.json()


def test_create_schedule(svc):
    res = svc.client.post("/schedules", json={
        "name": "weekly-backup",
        "cron": "0 3 * * 0",
        "targets": "all",
        "retention_days": 14,
        "destination": "s3",
        "enabled": True
    })
    assert res.status_code == 200
    assert res.json()["saved"] is True
    assert "VERB=set-schedule\nARGV=weekly-backup 0 3 * * 0 all 14 s3 1" in ops_log(svc)


def test_update_schedule(svc):
    res = svc.client.put("/schedules/weekly-backup", json={
        "cron": "0 4 * * 0",
        "targets": "websites",
        "retention_days": 30,
        "destination": "r2",
        "enabled": False
    })
    assert res.status_code == 200
    assert res.json()["saved"] is True
    assert "VERB=set-schedule\nARGV=weekly-backup 0 4 * * 0 websites 30 r2 0" in ops_log(svc)


def test_delete_schedule(svc):
    res = svc.client.delete("/schedules/weekly-backup")
    assert res.status_code == 200
    assert res.json()["deleted"] is True
    assert "VERB=delete-schedule\nARGV=weekly-backup" in ops_log(svc)


# ── Disk Usage ────────────────────────────────────────────────────────────────

def test_disk_usage(svc):
    res = svc.client.get("/disk-usage")
    assert res.status_code == 200
    data = res.json()
    assert "total_bytes" in data
    assert "used_bytes" in data
    assert "breakdown" in data
    assert len(data["breakdown"]) >= 1


# ── Operations Introspection ──────────────────────────────────────────────────

def test_operations_introspection(svc):
    res = svc.client.get("/operations")
    assert res.status_code == 200
    data = res.json()
    assert data["package"] == "storage"
    assert "storage.create-backup" in data["operations"]
    assert "storage.create-bucket" in data["operations"]
    assert "storage.disk-usage" in data["operations"]
