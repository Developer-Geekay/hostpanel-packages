"""
Unit tests for hostpanel-ssld API service.
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
  engine-status)
    printf '{"ok":true,"daemon":"hostpanel-ssld","status":"running","active":true,"port":9112,"total_certs":2,"active_certs":2,"expiring_soon":0,"acme_cron":true,"version":"OpenSSL 3.0.13","paths":{"conf":"/opt/hostpanel/etc/ssl","certs":"/opt/hostpanel/etc/ssl/certs","keys":"/opt/hostpanel/etc/ssl/private","acme":"/opt/hostpanel/data/acme","logs":"/opt/hostpanel/logs/ssl","run":"/opt/hostpanel/run/ssl"}}\n'
    ;;
  engine-logs)
    printf '{"ok":true,"log_type":"%s","lines":["[INFO] ACME renewal check ok","[INFO] Certificate valid"],"total":2}\n' "${2:-acme}"
    ;;
  list)
    printf '{"ok":true,"certs":[{"domain":"example.com","issuer":"Let'\''s Encrypt","valid_from":"Mar 1 00:00:00 2026 GMT","valid_to":"May 30 00:00:00 2026 GMT","days_left":88,"auto_renew":true,"force_https":false,"san":["example.com"],"key_type":"RSA 2048","status":"valid"}]}\n'
    ;;
  get)
    printf '{"ok":true,"domain":"%s","issuer":"Let'\''s Encrypt","valid_from":"Mar 1 00:00:00 2026 GMT","valid_to":"May 30 00:00:00 2026 GMT","days_left":88,"auto_renew":true,"force_https":false,"san":["%s"],"cert_pem":"-----BEGIN CERTIFICATE-----\\nFAKE\\n-----END CERTIFICATE-----","has_key":true}\n' "$1" "$1"
    ;;
  issue-letsencrypt)
    echo "[1/4] Preparing ACME environment for $1..."
    echo "[2/4] Validating challenge..."
    echo "[3/4] Requesting certificate..."
    echo "[4/4] Certificate issued successfully."
    printf '{"ok":true,"domain":"%s","issued":true,"issuer":"Let'\''s Encrypt","auto_renew":true,"days_left":90,"valid_until":"2026-05-30"}\n' "$1"
    ;;
  upload-custom)
    printf '{"ok":true,"domain":"%s","uploaded":true,"issuer":"Custom","auto_renew":false}\n' "$1"
    ;;
  renew)
    echo "[1/2] Checking validity..."
    echo "[2/2] Renewed certificate."
    printf '{"ok":true,"renewed":true,"domain":"%s","renewed_count":1}\n' "${1:-all}"
    ;;
  delete)
    printf '{"ok":true,"domain":"%s","deleted":true}\n' "$1"
    ;;
  force-https)
    printf '{"ok":true,"domain":"%s","force_https":%s}\n' "$1" "$([ "${2:-1}" = "1" ] && echo true || echo false)"
    ;;
  boom)
    echo "simulated failure" >&2
    exit 11
    ;;
  *)
    echo "unknown verb $verb" >&2
    exit 12
    ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-ssl-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_ssld import main as ssld

    app = ssld.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"package": "ssl", "version": "3.0.0", "ok": True}


@pytest.mark.parametrize("path", ["/certs", "/engine/status", "/operations"])
def test_routes_reject_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_invalid_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/certs").status_code == 401


# ── secrets protection ────────────────────────────────────────────────────────

def test_private_key_and_cert_never_reach_argv(svc):
    cert_data = "-----BEGIN CERTIFICATE-----\nSAMPLE_CERT\n-----END CERTIFICATE-----"
    key_data = "-----BEGIN PRIVATE KEY-----\nSAMPLE_KEY\n-----END PRIVATE KEY-----"

    r = svc.client.post("/certs/custom", json={
        "domain": "example.com",
        "cert_pem": cert_data,
        "key_pem": key_data,
        "ca_bundle": "-----BEGIN CERTIFICATE-----\nCA_BUNDLE\n-----END CERTIFICATE-----",
    })
    assert r.status_code == 200

    log = ops_log(svc)
    assert cert_data not in log
    assert key_data not in log
    assert "SECRET=cert_pem" in log
    assert "SECRET=key_pem" in log
    assert "SECRET=ca_bundle" in log
    assert "ARGV=example.com" in log


# ── certificate operations ───────────────────────────────────────────────────

def test_list_certificates(svc):
    r = svc.client.get("/certs")
    assert r.status_code == 200
    data = r.json()
    assert data["ok"] is True
    assert len(data["certs"]) == 1
    assert data["certs"][0]["domain"] == "example.com"


def test_get_certificate(svc):
    r = svc.client.get("/certs/example.com")
    assert r.status_code == 200
    data = r.json()
    assert data["ok"] is True
    assert data["domain"] == "example.com"
    assert "VERB=get" in ops_log(svc)


def test_issue_letsencrypt_json(svc):
    r = svc.client.post("/certs/issue", json={
        "domain": "example.com",
        "email": "admin@example.com",
        "challenge_type": "http-01",
        "staging": False,
        "agree_tos": True,
    })
    assert r.status_code == 200
    data = r.json()
    assert data["ok"] is True
    assert data["issued"] is True
    assert "VERB=issue-letsencrypt" in ops_log(svc)


def test_issue_letsencrypt_stream(svc):
    r = svc.client.post(
        "/certs/issue",
        json={
            "domain": "example.com",
            "email": "admin@example.com",
            "challenge_type": "http-01",
            "staging": False,
            "agree_tos": True,
        },
        headers={"Accept": "text/event-stream"},
    )
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text
    assert "Preparing ACME environment" in r.text


def test_renew_certificates(svc):
    # Renew all
    r = svc.client.post("/certs/renew")
    assert r.status_code == 200
    assert r.json()["ok"] is True

    # Renew single domain
    r2 = svc.client.post("/certs/example.com/renew")
    assert r2.status_code == 200
    assert r2.json()["ok"] is True


def test_force_https(svc):
    r = svc.client.post("/certs/example.com/force-https", json={"enabled": True})
    assert r.status_code == 200
    assert r.json()["force_https"] is True
    assert "ARGV=example.com 1" in ops_log(svc)

    r2 = svc.client.post("/certs/example.com/force-https", json={"enabled": False})
    assert r2.status_code == 200
    assert r2.json()["force_https"] is False
    assert "ARGV=example.com 0" in ops_log(svc)


def test_delete_certificate(svc):
    r = svc.client.delete("/certs/example.com")
    assert r.status_code == 200
    assert r.json()["deleted"] is True
    assert "VERB=delete" in ops_log(svc)


# ── engine status and logs ────────────────────────────────────────────────────

def test_engine_status(svc):
    r = svc.client.get("/engine/status")
    assert r.status_code == 200
    data = r.json()
    assert data["ok"] is True
    assert data["daemon"] == "hostpanel-ssld"
    assert data["port"] == 9112
    assert data["paths"]["conf"] == "/opt/hostpanel/etc/ssl"


def test_engine_logs(svc):
    r = svc.client.get("/engine/logs?lines=50&log_type=acme")
    assert r.status_code == 200
    data = r.json()
    assert data["ok"] is True
    assert data["log_type"] == "acme"
    assert len(data["lines"]) == 2


# ── validation and errors ─────────────────────────────────────────────────────

@pytest.mark.parametrize("domain", [
    "invalid domain with space",
    "domain;rm -rf /",
    "../traversal",
    "-leadingslash.com",
    "",
])
def test_invalid_domain_rejected(svc, domain):
    r = svc.client.post("/certs/issue", json={"domain": domain})
    assert r.status_code == 400


def test_error_propagation_and_status_code(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/certs")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"
    assert "simulated failure" in r.json()["message"]


def test_operations_introspection(svc):
    r = svc.client.get("/operations")
    assert r.status_code == 200
    ops = r.json()["operations"]
    assert "ssl.list" in ops
    assert "ssl.issue-letsencrypt" in ops
    assert "ssl.upload-custom" in ops
    assert "ssl.renew" in ops
    assert "ssl.delete" in ops
    assert "ssl.force-https" in ops
    assert "engine.status" in ops
    assert "engine.logs" in ops


def test_every_operation_declares_audit_action():
    manifest = M.load(MANIFEST)
    for name, op in manifest.operations.items():
        assert op.audit_action, f"operation {name} must declare an audit_action"
