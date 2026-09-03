"""
The php API against the REAL `hp-php` script, in dry-run.

The other suite uses a stand-in script, which proves the API layer works but
cannot prove the API and the script agree. `HP_OPS_DRYRUN=1` makes this
runnable anywhere, including macOS: every mutating command goes through `act`,
which reports instead of executing, so nothing touches the host. Dry-run is
honoured only when euid != 0, so it is structurally inert under sudo.

100% Isolation under /opt/hostpanel:
All pool configs live under /opt/hostpanel/etc/php/<version>/fpm/pool.d,
and sockets live under /opt/hostpanel/run/php/php<version>-fpm-<pool>.sock.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = ROOT / "packages" / "php"
sys.path.insert(0, str(PACKAGE / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402

EXISTING_POOL_CONF = """\; Managed by HostPanel — do not edit by hand. Regenerated on every change.
[existingpool]
user = www-data
group = www-data
listen = /opt/hostpanel/run/php/php8.4-fpm-existingpool.sock
listen.owner = www-data
listen.group = www-data
listen.mode = 0660
pm = dynamic
pm.max_children = 5
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
php_admin_value[memory_limit] = 128M
php_admin_value[max_execution_time] = 30
"""


@pytest.fixture
def svc(monkeypatch, tmp_path):
    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(PACKAGE / "ops" / "hp-php"))
    monkeypatch.setenv("HP_CORE_LIB", str(ROOT / "hpcore" / "lib"))
    monkeypatch.setenv("HP_OPS_SUDO", "0")
    monkeypatch.setenv("HP_OPS_DRYRUN", "1")

    etc_root = tmp_path / "php"
    run_root = tmp_path / "run" / "php"
    log_root = tmp_path / "logs" / "php"
    runtimes_root = tmp_path / "runtimes" / "php"
    run_root.mkdir(parents=True)
    log_root.mkdir(parents=True)
    (log_root / "error.log").write_text("PHP Fatal error: test line\n")

    monkeypatch.setenv("HP_PHP_ETC_ROOT", str(etc_root))
    monkeypatch.setenv("HP_PHP_RUN_ROOT", str(run_root))
    monkeypatch.setenv("HP_PHP_LOG_ROOT", str(log_root))
    monkeypatch.setenv("HP_PHP_RUNTIMES_ROOT", str(runtimes_root))

    # PHP 8.4 is "installed" under /opt/hostpanel/runtimes/php/8.4
    bin_dir = runtimes_root / "8.4" / "bin"
    sbin_dir = runtimes_root / "8.4" / "sbin"
    bin_dir.mkdir(parents=True)
    sbin_dir.mkdir(parents=True)
    (bin_dir / "php").write_text("#!/bin/sh\n")
    (sbin_dir / "php-fpm").write_text("#!/bin/sh\n")
    os.chmod(str(bin_dir / "php"), 0o755)
    os.chmod(str(sbin_dir / "php-fpm"), 0o755)

    pooldir = etc_root / "8.4" / "fpm" / "pool.d"
    conf_dir = etc_root / "8.4" / "fpm" / "conf.d"
    mods_dir = etc_root / "8.4" / "mods-available"
    pooldir.mkdir(parents=True)
    conf_dir.mkdir(parents=True)
    mods_dir.mkdir(parents=True)

    (pooldir / "existingpool.conf").write_text(EXISTING_POOL_CONF)
    (conf_dir / "20-curl.ini").write_text("extension=curl.so\n")
    (mods_dir / "redis.ini").write_text("extension=redis.so\n")

    from hostpanel_phpd import main as phpd

    app = phpd.create_app(M.load(PACKAGE / "manifest.json"))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield client


# ── the full lifecycle, against a scratch pool.d tree ─────────────────────────

def test_list_versions_reports_the_installed_version(svc):
    r = svc.get("/php/versions")
    assert r.status_code == 200
    versions = {v["version"] for v in r.json()["versions"] if v.get("installed")}
    assert "8.4" in versions


def test_get_pool_reads_back_the_real_file(svc):
    r = svc.get("/php/pools/existingpool")
    assert r.status_code == 200
    body = r.json()
    assert body["pool"] == "existingpool"
    assert body["version"] == "8.4"
    assert body["memory_limit"] == "128M"
    assert body["max_execution_time"] == 30
    assert "php8.4-fpm-existingpool.sock" in body["socket"]


def test_list_pools_includes_the_real_pool(svc):
    r = svc.get("/php/pools")
    assert r.status_code == 200
    pools = {p["pool"] for p in r.json()["pools"]}
    assert "existingpool" in pools


def test_create_pool_succeeds_end_to_end_in_dry_run(svc):
    r = svc.post("/php/pools", json={
        "pool": "newpool", "version": "8.4",
        "memory_limit": "256M", "max_execution_time": "45",
    })
    assert r.status_code == 200
    body = r.json()
    assert body["pool"] == "newpool"
    assert body["memory_limit"] == "256M"
    assert body["max_execution_time"] == 45 or body["max_execution_time"] == "45"
    assert body.get("created") is True or "socket" in body


def test_create_pool_with_manifest_defaults(svc):
    r = svc.post("/php/pools", json={"pool": "defaultspool", "version": "8.4"})
    assert r.status_code == 200
    body = r.json()
    assert body["memory_limit"] == "128M"


def test_create_pool_conflicts_on_an_existing_name(svc):
    r = svc.post("/php/pools", json={"pool": "existingpool", "version": "8.4"})
    assert r.status_code == 409
    assert r.json()["error"] == "CONFLICT"
    assert r.json()["exit_code"] == 13


def test_set_pool_limits_reports_the_requested_values(svc):
    r = svc.put("/php/pools/existingpool/limits",
                json={"memory_limit": "512M", "max_execution_time": "90"})
    assert r.status_code == 200
    body = r.json()
    assert body["memory_limit"] == "512M"


def test_delete_pool_succeeds(svc):
    r = svc.delete("/php/pools/existingpool")
    assert r.status_code == 200
    assert r.json()["deleted"] is True


def test_restart_fpm_succeeds_for_an_installed_version(svc):
    r = svc.post("/php/fpm/8.4/restart")
    assert r.status_code == 200
    assert r.json()["restarted"] is True


def test_restart_fpm_succeeds_for_all(svc):
    r = svc.post("/php/fpm/restart")
    assert r.status_code == 200
    assert r.json()["restarted"] is True


def test_list_extensions_includes_curl(svc):
    r = svc.get("/php/extensions?version=8.4")
    assert r.status_code == 200
    exts = r.json()["extensions"]
    curl_ext = next((e for e in exts if e["name"] == "curl"), None)
    assert curl_ext is not None
    assert curl_ext["enabled"] is True


def test_toggle_extension_succeeds_in_dry_run(svc):
    r = svc.post("/php/extensions/toggle", json={
        "version": "8.4", "extension": "redis", "enabled": True
    })
    assert r.status_code == 200
    body = r.json()
    assert body["version"] == "8.4"
    assert body["extension"] == "redis"
    assert body["enabled"] is True


# ── the exit-code taxonomy, end to end ────────────────────────────────────────

def test_reserved_pool_is_403(svc):
    r = svc.post("/php/pools", json={"pool": "www", "version": "9.9"})
    assert r.status_code == 403
    assert r.json()["error"] == "DENIED"
    assert r.json()["exit_code"] == 14


def test_delete_reserved_pool_is_403(svc):
    r = svc.delete("/php/pools/www")
    assert r.status_code == 403
    assert r.json()["exit_code"] == 14


def test_version_not_installed_is_404(svc):
    r = svc.post("/php/pools", json={"pool": "newpool", "version": "9.9"})
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_restart_uninstalled_version_is_404(svc):
    r = svc.post("/php/fpm/9.9/restart")
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_missing_pool_is_404(svc):
    r = svc.get("/php/pools/definitelynotarealpool")
    assert r.status_code == 404
    assert r.json()["exit_code"] == 10


def test_set_pool_version_to_the_same_version_conflicts(svc):
    r = svc.put("/php/pools/existingpool/version", json={"version": "8.4"})
    assert r.status_code == 409
    assert r.json()["exit_code"] == 13
