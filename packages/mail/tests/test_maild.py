"""
The mail package API tests against a stand-in ops script.

Tests authentication, parameter validation, operation mapping, secret handling,
DKIM generation, and streaming.
"""
from __future__ import annotations

import json
import os
import secrets
import stat
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "api"))

from portald.sdk import manifest as M          # noqa: E402
from portald.sdk import token as tokenlib      # noqa: E402

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
  status)
    echo '{"active":true,"postfix":"running","dovecot":"running","domains_count":1,"mailboxes_count":1,"aliases_count":0,"queue_count":0,"version":"Postfix 3.8 / Dovecot 2.3"}'
    ;;
  list-domains)
    echo '{"domains":[{"domain":"example.org","dkim_enabled":true,"mailboxes_count":1,"created_at":"2026-08-23T00:00:00Z"}]}'
    ;;
  add-domain)
    printf '{"domain":"%s","created":true,"dkim_selector":"default","dkim_pubkey":"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mock"}\n' "$1"
    ;;
  delete-domain)
    printf '{"domain":"%s","deleted":true}\n' "$1"
    ;;
  get-dkim)
    printf '{"domain":"%s","selector":"default","public_key":"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mock","dns_records":{"mx":"10 mail.%s.","spf":"v=spf1 mx a ~all","dkim":"v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mock","dmarc":"v=DMARC1; p=quarantine; rua=mailto:postmaster@%s","host_dkim":"default._domainkey.%s"}}\n' "$1" "$1" "$1" "$1"
    ;;
  list-mailboxes)
    echo '{"mailboxes":[{"email":"user@example.org","domain":"example.org","username":"user","quota_mb":1024,"used_bytes":1048576,"used_mb":1.0,"status":"active"}]}'
    ;;
  create-mailbox)
    echo "creating mailbox $1" >&2
    printf '{"email":"%s","domain":"example.org","username":"user","quota_mb":%s,"created":true}\n' "$1" "${2:-1024}"
    ;;
  delete-mailbox)
    printf '{"email":"%s","deleted":true}\n' "$1"
    ;;
  set-password)
    printf '{"email":"%s","password_set":true}\n' "$1"
    ;;
  set-quota)
    printf '{"email":"%s","quota_mb":%s}\n' "$1" "$2"
    ;;
  list-aliases)
    echo '{"aliases":[{"source":"info@example.org","domain":"example.org","destination":"user@example.org"}]}'
    ;;
  create-alias)
    printf '{"source":"%s","domain":"example.org","destination":"%s","created":true}\n' "$1" "$2"
    ;;
  delete-alias)
    printf '{"source":"%s","deleted":true}\n' "$1"
    ;;
  get-queue)
    echo '{"count":0,"messages":[]}'
    ;;
  flush-queue)
    echo '{"flushed":true}'
    ;;
  logs)
    echo '{"lines":["Aug 23 00:00:01 hostpanel postfix/smtpd[1234]: connect from localhost"]}'
    ;;
  boom)
    echo "it failed" >&2
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
    script = tmp_path / "hp-mail-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_maild import main as maild

    app = maild.create_app(M.load(MANIFEST))
    with TestClient(app) as client:
        client.headers[tokenlib.HEADER] = token
        yield type("Svc", (), {"client": client, "token": token, "log": log})


def ops_log(svc) -> str:
    return svc.log.read_text()


# ── authentication ────────────────────────────────────────────────────────────

def test_health_needs_no_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/health").status_code == 200


@pytest.mark.parametrize("path", ["/domains", "/mailboxes", "/aliases", "/queue", "/operations"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/domains").status_code == 401


def test_unknown_path_still_requires_a_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/does-not-exist").status_code == 401


# ── secrets ───────────────────────────────────────────────────────────────────

def test_mailbox_password_never_reaches_argv(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.post("/mailboxes", json={
        "email": "user@example.org",
        "password": password,
        "quota_mb": 1024,
    })
    assert r.status_code == 200

    log = ops_log(svc)
    assert password not in log, "the password appeared in the ops invocation"
    assert "SECRET=password" in log, "the password did not arrive on stdin"
    assert f"len={len(password)}" in log, "the password was truncated"


def test_set_password_never_reaches_argv(svc):
    password = secrets.token_urlsafe(24)
    r = svc.client.put("/mailboxes/user@example.org/password", json={"password": password})
    assert r.status_code == 200
    assert password not in r.text

    log = ops_log(svc)
    assert password not in log
    assert "SECRET=password" in log


# ── status and domains ────────────────────────────────────────────────────────

def test_status_endpoint(svc):
    r = svc.client.get("/status")
    assert r.status_code == 200
    data = r.json()
    assert data["active"] is True
    assert data["postfix"] == "running"
    assert data["dovecot"] == "running"
    assert "VERB=status" in ops_log(svc)


def test_list_domains(svc):
    r = svc.client.get("/domains")
    assert r.status_code == 200
    assert r.json()["domains"][0]["domain"] == "example.org"
    assert "VERB=list-domains" in ops_log(svc)


def test_add_domain(svc):
    r = svc.client.post("/domains", json={"domain": "testmail.com"})
    assert r.status_code == 200
    assert r.json()["domain"] == "testmail.com"
    assert "VERB=add-domain" in ops_log(svc)
    assert "ARGV=testmail.com" in ops_log(svc)


def test_add_domain_alias_endpoint(svc):
    r = svc.client.post("/domains/add", json={"domain": "testmail2.com"})
    assert r.status_code == 200
    assert r.json()["domain"] == "testmail2.com"


def test_delete_domain(svc):
    r = svc.client.delete("/domains/testmail.com")
    assert r.status_code == 200
    assert r.json()["deleted"] is True
    assert "VERB=delete-domain" in ops_log(svc)
    assert "ARGV=testmail.com" in ops_log(svc)


def test_get_dkim(svc):
    r = svc.client.get("/domains/example.org/dkim")
    assert r.status_code == 200
    data = r.json()
    assert data["domain"] == "example.org"
    assert "dns_records" in data
    assert "spf" in data["dns_records"]
    assert "dkim" in data["dns_records"]
    assert "dmarc" in data["dns_records"]
    assert "mx" in data["dns_records"]
    assert "VERB=get-dkim" in ops_log(svc)


# ── mailboxes ─────────────────────────────────────────────────────────────────

def test_list_mailboxes(svc):
    r = svc.client.get("/mailboxes")
    assert r.status_code == 200
    assert len(r.json()["mailboxes"]) == 1
    assert r.json()["mailboxes"][0]["email"] == "user@example.org"


def test_create_mailbox(svc):
    r = svc.client.post("/mailboxes/create", json={
        "email": "alice@example.org",
        "password": "SuperSecretPassword123!",
        "quota_mb": 2048,
    })
    assert r.status_code == 200
    assert r.json()["email"] == "alice@example.org"
    assert "VERB=create-mailbox" in ops_log(svc)
    assert "ARGV=alice@example.org 2048" in ops_log(svc)


def test_delete_mailbox(svc):
    r = svc.client.delete("/mailboxes/alice@example.org")
    assert r.status_code == 200
    assert r.json()["deleted"] is True
    assert "VERB=delete-mailbox" in ops_log(svc)
    assert "ARGV=alice@example.org" in ops_log(svc)


def test_set_quota(svc):
    r = svc.client.put("/mailboxes/alice@example.org/quota", json={"quota_mb": 5120})
    assert r.status_code == 200
    assert r.json()["quota_mb"] == 5120
    assert "VERB=set-quota" in ops_log(svc)
    assert "ARGV=alice@example.org 5120" in ops_log(svc)


# ── aliases ───────────────────────────────────────────────────────────────────

def test_list_aliases(svc):
    r = svc.client.get("/aliases")
    assert r.status_code == 200
    assert r.json()["aliases"][0]["source"] == "info@example.org"


def test_create_alias(svc):
    r = svc.client.post("/aliases", json={
        "source": "sales@example.org",
        "destination": "alice@example.org, bob@example.org",
    })
    assert r.status_code == 200
    assert r.json()["source"] == "sales@example.org"
    assert "VERB=create-alias" in ops_log(svc)
    assert "ARGV=sales@example.org alice@example.org, bob@example.org" in ops_log(svc)


def test_delete_alias(svc):
    r = svc.client.delete("/aliases/sales@example.org")
    assert r.status_code == 200
    assert r.json()["deleted"] is True
    assert "VERB=delete-alias" in ops_log(svc)
    assert "ARGV=sales@example.org" in ops_log(svc)


# ── queue & logs ──────────────────────────────────────────────────────────────

def test_get_queue(svc):
    r = svc.client.get("/queue")
    assert r.status_code == 200
    assert r.json()["count"] == 0
    assert "VERB=get-queue" in ops_log(svc)


def test_flush_queue(svc):
    r = svc.client.post("/queue/flush")
    assert r.status_code == 200
    assert r.json()["flushed"] is True
    assert "VERB=flush-queue" in ops_log(svc)


def test_get_logs(svc):
    r = svc.client.get("/logs?lines=20")
    assert r.status_code == 200
    assert len(r.json()["lines"]) > 0
    assert "VERB=logs" in ops_log(svc)
    assert "ARGV=20" in ops_log(svc)


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("invalid_email", [
    "plainaddress",
    "@missingusername.com",
    "username@.com",
    "user name@example.com",
    "user;rm -rf /@example.com",
    "",
])
def test_invalid_email_refused_before_exec(svc, invalid_email):
    r = svc.client.post("/mailboxes", json={
        "email": invalid_email,
        "password": "Password123!",
        "quota_mb": 1024,
    })
    assert r.status_code == 400
    assert ops_log(svc) == ""


@pytest.mark.parametrize("invalid_domain", [
    "notadomain",
    "-invalid.com",
    "domain..com",
    "domain.c",
    "",
])
def test_invalid_domain_refused_before_exec(svc, invalid_domain):
    r = svc.client.post("/domains", json={"domain": invalid_domain})
    assert r.status_code == 400
    assert ops_log(svc) == ""


# ── streaming ─────────────────────────────────────────────────────────────────

def test_stream_accept_header(svc):
    r = svc.client.post("/domains", json={"domain": "streamingtest.com"},
                        headers={"Accept": "text/event-stream"})
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: result" in r.text


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_introspection(svc):
    ops = svc.client.get("/operations").json()["operations"]
    assert "mail.status" in ops
    assert "mail.list-domains" in ops
    assert "mail.add-domain" in ops
    assert "mail.delete-domain" in ops
    assert "mail.get-dkim" in ops
    assert "mail.list-mailboxes" in ops
    assert "mail.create-mailbox" in ops
    assert "mail.delete-mailbox" in ops
    assert "mail.set-password" in ops
    assert "mail.set-quota" in ops
    assert "mail.list-aliases" in ops
    assert "mail.create-alias" in ops
    assert "mail.delete-alias" in ops
    assert "mail.get-queue" in ops
    assert "mail.flush-queue" in ops
    assert "mail.logs" in ops


def test_manifest_audit_actions():
    manifest = M.load(MANIFEST)
    for name, op in manifest.operations.items():
        assert op.audit_action, f"{name} must have an audit action"
