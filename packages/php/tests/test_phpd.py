"""
The php package API, against a stand-in ops script.
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

MANIFEST = Path(__file__).resolve().parents[1] / "manifest.json"

#: Records every invocation so a test can assert on the exact argv the script
#: received.
FAKE_OPS = r"""#!/bin/bash
set -euo pipefail
verb="$1"; shift
{
  printf 'VERB=%s\n' "$verb"
  printf 'ARGV=%s\n' "$*"
} >> "$HP_TEST_LOG"

case "$verb" in
  engine-status)       echo '{"installed":true,"active":true,"versions":[{"version":"8.3","active":"active","status":"active","path":"/opt/hostpanel/runtimes/php/8.3/bin/php","socket":"/opt/hostpanel/run/php/php8.3-fpm.sock","pool_count":1}],"default_version":"8.3"}' ;;
  engine-install)      echo '{"status":"installed","version":"8.3","active":true}' ;;
  engine-uninstall)    echo '{"status":"uninstalled"}' ;;
  engine-action)       printf '{"action":"%s","version":"%s","ok":true}\n' "$1" "${2:-all}" ;;
  version-list)        echo '{"versions":[{"version":"8.3","installed":true,"active":"active","status":"active","bin_path":"/opt/hostpanel/runtimes/php/8.3/bin/php","socket":"/opt/hostpanel/run/php/php8.3-fpm.sock"}]}' ;;
  version-install)     printf '{"version":"%s","installed":true,"active":true}\n' "$1" ;;
  version-uninstall)   printf '{"version":"%s","uninstalled":true}\n' "$1" ;;
  version-set-default) printf '{"version":"%s","default":true}\n' "$1" ;;
  extension-list)      echo '{"extensions":[{"version":"8.3","name":"curl","category":"Web & Core","description":"cURL","installed":true,"enabled":true,"builtin":false,"method":"apt"}]}' ;;
  extension-toggle)    printf '{"version":"%s","extension":"%s","enabled":%s}\n' "$1" "$2" "$3" ;;
  extension-install)   printf '{"version":"%s","extension":"%s","installed":true}\n' "$1" "$2" ;;
  extension-install-pecl) printf '{"version":"%s","extension":"%s","installed":true,"method":"pecl"}\n' "$1" "$2" ;;
  extension-install-so)   printf '{"version":"%s","extension":"%s","installed":true}\n' "$1" "$2" ;;
  extension-uninstall) printf '{"version":"%s","extension":"%s","uninstalled":true}\n' "$1" "$2" ;;
  config-get)          echo '{"version":"8.3","target":"fpm","path":"/opt/hostpanel/etc/php/8.3/fpm/php.ini","content_b64":"W1BIUF0="}' ;;
  config-set)          printf '{"version":"%s","target":"%s","saved":true}\n' "$1" "${3:-fpm}" ;;
  directives-get)      echo '{"version":"8.3","upload_max_filesize":"64M","post_max_size":"64M","memory_limit":"256M","max_execution_time":120,"max_input_time":60,"max_input_vars":1000,"timezone":"UTC","display_errors":"Off","opcache_enable":"1"}' ;;
  directives-set)      printf '{"version":"%s","updated":true}\n' "$1" ;;
  logs-get)            echo '{"version":"8.3","type":"error","path":"/opt/hostpanel/logs/php/php8.3-fpm.log","lines":["test log line 1","test log line 2"]}' ;;
  list-pools)          echo '{"pools":[{"pool":"example_com","version":"8.3","memory_limit":"256M","max_execution_time":30,"socket":"/opt/hostpanel/run/php/php8.3-fpm-example_com.sock"}]}' ;;
  get-pool)            printf '{"pool":"%s","version":"8.3","memory_limit":"128M","max_execution_time":30,"socket":"/opt/hostpanel/run/php/php8.3-fpm-%s.sock"}\n' "$1" "$1" ;;
  create-pool)         printf '{"pool":"%s","version":"%s","memory_limit":"%s","max_execution_time":%s,"socket":"x"}\n' "$1" "$2" "$3" "$4" ;;
  delete-pool)         printf '{"pool":"%s","version":"8.3","deleted":true}\n' "$1" ;;
  set-pool-version)    printf '{"pool":"%s","version":"%s","socket":"x"}\n' "$1" "$2" ;;
  set-pool-limits)     printf '{"pool":"%s","version":"8.3","memory_limit":"%s","max_execution_time":%s}\n' "$1" "$2" "$3" ;;
  restart-fpm)         echo "restarting php${1:-all}-fpm" >&2
                       printf '{"version":"%s","restarted":true}\n' "${1:-all}" ;;
  boom)                echo "it failed" >&2; exit 11 ;;
  *)                   echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-php-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    log_dir = tmp_path / "logs"
    log_dir.mkdir(parents=True)
    (log_dir / "error.log").write_text("PHP Fatal error: test line 1\nPHP Warning: test line 2\n")

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_PHP_LOG_ROOT", str(log_dir))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_phpd import main as phpd

    app = phpd.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log, "log_dir": log_dir})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/health").status_code == 200


@pytest.mark.parametrize("path", ["/status", "/runtimes", "/extensions", "/pools", "/operations"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/runtimes").status_code == 401


# ── operation mapping ─────────────────────────────────────────────────────────

def test_engine_status(svc):
    r = svc.client.get("/status")
    assert r.status_code == 200
    assert r.json()["installed"] is True
    assert "VERB=engine-status" in ops_log(svc)


def test_list_versions(svc):
    r = svc.client.get("/runtimes")
    assert r.status_code == 200
    assert r.json()["versions"][0]["version"] == "8.3"
    assert "VERB=version-list" in ops_log(svc)


def test_list_pools_with_no_filter_omits_the_argument(svc):
    svc.client.get("/pools")
    assert "VERB=list-pools" in ops_log(svc)


def test_list_pools_with_a_filter_passes_it(svc):
    svc.client.get("/pools?version=8.3")
    assert "ARGV=8.3" in ops_log(svc)


def test_get_pool_passes_the_pool_name(svc):
    r = svc.client.get("/pools/example_com")
    assert r.status_code == 200
    assert "ARGV=example_com" in ops_log(svc)


def test_create_pool_passes_pool_version_and_limits(svc):
    svc.client.post("/pools", json={
        "pool": "example_com", "version": "8.3",
        "memory_limit": "256M", "max_execution_time": "60",
    })
    assert "ARGV=example_com 8.3 256M 60" in ops_log(svc)


def test_delete_pool_passes_the_pool_name(svc):
    r = svc.client.delete("/pools/example_com")
    assert r.status_code == 200
    assert "ARGV=example_com" in ops_log(svc)


def test_set_pool_version_passes_pool_and_new_version(svc):
    svc.client.put("/pools/example_com/version", json={"version": "8.4"})
    assert "ARGV=example_com 8.4" in ops_log(svc)


def test_set_pool_limits_passes_pool_and_both_limits(svc):
    svc.client.put("/pools/example_com/limits",
                   json={"memory_limit": "512M", "max_execution_time": "90"})
    assert "ARGV=example_com 512M 90" in ops_log(svc)


def test_restart_fpm_with_version_passes_the_version(svc):
    r = svc.client.post("/fpm/restart", json={"version": "8.3"})
    assert r.status_code == 200
    assert "ARGV=8.3" in ops_log(svc)


def test_list_extensions_passes_optional_version(svc):
    r = svc.client.get("/extensions?version=8.3")
    assert r.status_code == 200
    assert "VERB=extension-list" in ops_log(svc)
    assert "ARGV=8.3" in ops_log(svc)


def test_toggle_extension_passes_version_name_and_state(svc):
    r = svc.client.post("/extensions/toggle", json={
        "version": "8.3", "extension": "redis", "enabled": True
    })
    assert r.status_code == 200
    assert "VERB=extension-toggle" in ops_log(svc)
    assert "ARGV=8.3 redis true" in ops_log(svc)


def test_get_directives_endpoint(svc):
    r = svc.client.get("/directives/8.3")
    assert r.status_code == 200
    body = r.json()
    assert body["version"] == "8.3"
    assert "VERB=directives-get" in ops_log(svc)


def test_set_directives_endpoint(svc):
    r = svc.client.post("/directives/8.3", json={
        "upload_max_filesize": "128M",
        "memory_limit": "512M",
    })
    assert r.status_code == 200
    assert "VERB=directives-set" in ops_log(svc)


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("pool", [
    "Example",           # uppercase
    "1example",          # leading digit
    "ex ample",          # space
    "a" * 65,            # too long
])
def test_invalid_pool_names_are_refused_before_exec(svc, pool):
    r = svc.client.get(f"/pools/{pool}")
    assert r.status_code == 400
    assert ops_log(svc) == "", "the ops script ran despite an invalid pool name"


@pytest.mark.parametrize("version", ["8", "8.x", "v8.1", "8.1.2"])
def test_invalid_versions_are_refused_before_exec(svc, version):
    r = svc.client.post("/pools", json={"pool": "example_com", "version": version})
    assert r.status_code == 400
    assert ops_log(svc) == ""


# ── streaming (restart-fpm only) ───────────────────────────────────────────────

def test_stream_carries_the_scripts_stderr_as_log_lines(svc):
    r = svc.client.post("/fpm/restart", json={"version": "8.3"}, headers={"Accept": "text/event-stream"})
    assert "restarting php8.3-fpm" in r.text


# ── introspection ─────────────────────────────────────────────────────────────

def test_every_operation_declares_an_audit_action():
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())

