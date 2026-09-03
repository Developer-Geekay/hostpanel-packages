"""
The filemanager package API, against a stand-in ops script.

Tests that the API authenticates, validates, maps operations onto argv correctly,
and keeps secrets (file content) off the command line.
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
  file-list)      printf '{"path":"%s","entries":[{"name":"index.html","is_dir":false,"size":100}],"total":1}\n' "$1" ;;
  file-stat)      printf '{"path":"%s","stat":{"name":"index.html","is_dir":false,"size":100}}\n' "$1" ;;
  file-read)      printf '{"path":"%s","content":"hello world","size":11,"encoding":"utf-8"}\n' "$1" ;;
  file-write)     echo "writing $1" >&2; printf '{"path":"%s","written":true,"size":11}\n' "$1" ;;
  file-mkdir)     printf '{"path":"%s","created":true}\n' "$1" ;;
  file-delete)    printf '{"path":"%s","deleted":true}\n' "$1" ;;
  file-move)      printf '{"source":"%s","target":"%s","moved":true}\n' "$1" "$2" ;;
  file-copy)      printf '{"source":"%s","target":"%s","copied":true}\n' "$1" "$2" ;;
  file-chmod)     printf '{"path":"%s","mode":"%s","chmod":true}\n' "$1" "$2" ;;
  file-chown)     printf '{"path":"%s","owner":"%s","group":"%s","chown":true}\n' "$1" "$2" "${3:-}" ;;
  file-compress)  echo "compressing $1" >&2; printf '{"source_path":"%s","archive_path":"%s","archive_type":"%s","compressed":true}\n' "$1" "$2" "$3" ;;
  file-extract)   echo "extracting $1" >&2; printf '{"archive_path":"%s","target_dir":"%s","extracted":true}\n' "$1" "$2" ;;
  boom)           echo "it failed" >&2; exit 11 ;;
  *)              echo "unknown verb $verb" >&2; exit 12 ;;
esac
"""


@pytest.fixture
def svc(tmp_path, monkeypatch):
    script = tmp_path / "hp-filemanager-fake"
    script.write_text(FAKE_OPS)
    script.chmod(script.stat().st_mode | stat.S_IEXEC)

    log = tmp_path / "ops.log"
    log.touch()

    token = tokenlib.generate()
    monkeypatch.setenv("HP_PACKAGE_TOKEN", token)
    monkeypatch.setenv("HP_OPS_SCRIPT", str(script))
    monkeypatch.setenv("HP_TEST_LOG", str(log))
    monkeypatch.setenv("HP_OPS_SUDO", "0")

    from hostpanel_filemanagerd import main as filemanagerd

    app = filemanagerd.create_app(M.load(MANIFEST))
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


@pytest.mark.parametrize("path", ["/list?path=/opt/hostpanel/data", "/operations"])
def test_routes_reject_a_missing_token(svc, path):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get(path).status_code == 401


def test_routes_reject_a_wrong_token(svc):
    svc.client.headers[tokenlib.HEADER] = tokenlib.generate()
    assert svc.client.get("/list?path=/opt/hostpanel/data").status_code == 401


def test_unknown_path_still_requires_a_token(svc):
    client = svc.client
    del client.headers[tokenlib.HEADER]
    assert client.get("/does-not-exist").status_code == 401


# ── secrets ───────────────────────────────────────────────────────────────────

def test_file_content_never_reaches_argv_on_write(svc):
    content = "secret-file-content-" + secrets.token_urlsafe(24)
    r = svc.client.post("/write", json={"path": "/opt/hostpanel/data/secret.txt",
                                        "content": content})
    assert r.status_code == 200

    log = ops_log(svc)
    assert content not in log, "the file content appeared in argv"
    assert "SECRET=content" in log, "the file content was not passed via secrets stdin"
    assert f"len={len(content)}" in log


def test_argv_carries_only_the_public_parameters(svc):
    svc.client.post("/write", json={"path": "/opt/hostpanel/data/test.txt",
                                    "content": "some content"})
    assert "ARGV=/opt/hostpanel/data/test.txt" in ops_log(svc)


# ── operation mapping ─────────────────────────────────────────────────────────

def test_list_files(svc):
    r = svc.client.get("/list?path=/opt/hostpanel/data/vhosts")
    assert r.status_code == 200
    assert r.json()["entries"][0]["name"] == "index.html"
    assert "VERB=file-list" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/vhosts" in ops_log(svc)


def test_stat_file(svc):
    r = svc.client.get("/stat?path=/opt/hostpanel/data/vhosts/index.html")
    assert r.status_code == 200
    assert r.json()["stat"]["size"] == 100
    assert "VERB=file-stat" in ops_log(svc)


def test_read_file(svc):
    r = svc.client.get("/read?path=/opt/hostpanel/data/vhosts/index.html")
    assert r.status_code == 200
    assert r.json()["content"] == "hello world"
    assert "VERB=file-read" in ops_log(svc)


def test_mkdir(svc):
    r = svc.client.post("/mkdir", json={"path": "/opt/hostpanel/data/vhosts/newdir"})
    assert r.status_code == 200
    assert "VERB=file-mkdir" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/vhosts/newdir" in ops_log(svc)


def test_delete_file(svc):
    r = svc.client.delete("/delete?path=/opt/hostpanel/data/vhosts/old.txt")
    assert r.status_code == 200
    assert "VERB=file-delete" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/vhosts/old.txt" in ops_log(svc)


def test_move_file(svc):
    r = svc.client.post("/move", json={"source": "/opt/hostpanel/data/a.txt",
                                       "target": "/opt/hostpanel/data/b.txt"})
    assert r.status_code == 200
    assert "VERB=file-move" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/a.txt /opt/hostpanel/data/b.txt" in ops_log(svc)


def test_copy_file(svc):
    r = svc.client.post("/copy", json={"source": "/opt/hostpanel/data/a.txt",
                                       "target": "/opt/hostpanel/data/b.txt"})
    assert r.status_code == 200
    assert "VERB=file-copy" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/a.txt /opt/hostpanel/data/b.txt" in ops_log(svc)


def test_chmod_file(svc):
    r = svc.client.post("/chmod", json={"path": "/opt/hostpanel/data/test.sh",
                                        "mode": "0755"})
    assert r.status_code == 200
    assert "VERB=file-chmod" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/test.sh 0755" in ops_log(svc)


def test_chown_file(svc):
    r = svc.client.post("/chown", json={"path": "/opt/hostpanel/data/test.sh",
                                        "owner": "hostpanel", "group": "hostpanel"})
    assert r.status_code == 200
    assert "VERB=file-chown" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/test.sh hostpanel hostpanel" in ops_log(svc)


def test_compress_files(svc):
    r = svc.client.post("/compress", json={"source_path": "/opt/hostpanel/data/vhosts/site",
                                           "archive_path": "/opt/hostpanel/data/vhosts/site.zip",
                                           "archive_type": "zip"})
    assert r.status_code == 200
    assert "VERB=file-compress" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/vhosts/site /opt/hostpanel/data/vhosts/site.zip zip" in ops_log(svc)


def test_extract_archive(svc):
    r = svc.client.post("/extract", json={"archive_path": "/opt/hostpanel/data/site.zip",
                                          "target_dir": "/opt/hostpanel/data/extracted"})
    assert r.status_code == 200
    assert "VERB=file-extract" in ops_log(svc)
    assert "ARGV=/opt/hostpanel/data/site.zip /opt/hostpanel/data/extracted" in ops_log(svc)


def test_upload_file(svc):
    files = {"file": ("uploaded.txt", b"my uploaded file content", "text/plain")}
    data = {"path": "/opt/hostpanel/data/vhosts/"}
    r = svc.client.post("/upload", data=data, files=files)
    assert r.status_code == 200
    assert "VERB=file-write" in ops_log(svc)
    assert "SECRET=content" in ops_log(svc)


def test_download_file(svc):
    r = svc.client.get("/download?path=/opt/hostpanel/data/vhosts/index.html")
    assert r.status_code == 200
    assert r.content == b"hello world"
    assert "attachment" in r.headers.get("content-disposition", "")


# ── validation ────────────────────────────────────────────────────────────────

@pytest.mark.parametrize("path", [
    "relative/path",
    "",
])
def test_invalid_path_rejected_before_exec(svc, path):
    r = svc.client.get(f"/stat?path={path}")
    assert r.status_code in (400, 422)
    assert ops_log(svc) == ""


def test_chmod_invalid_mode_rejected_before_exec(svc):
    r = svc.client.post("/chmod", json={"path": "/opt/hostpanel/data/test.sh",
                                        "mode": "999"})
    assert r.status_code == 400
    assert ops_log(svc) == ""


def test_compress_invalid_type_rejected_before_exec(svc):
    r = svc.client.post("/compress", json={"source_path": "/opt/hostpanel/data/a",
                                           "archive_path": "/opt/hostpanel/data/a.rar",
                                           "archive_type": "rar"})
    assert r.status_code == 400
    assert ops_log(svc) == ""


# ── failures & exit codes ─────────────────────────────────────────────────────

def test_script_exit_code_becomes_the_http_status(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    r = svc.client.get("/list?path=/opt/hostpanel/data")
    assert r.status_code == 409
    assert r.json()["error"] == "PRECONDITION"
    assert r.json()["exit_code"] == 11


def test_stderr_becomes_the_error_message(svc):
    script = Path(os.environ["HP_OPS_SCRIPT"])
    script.write_text(FAKE_OPS.replace('case "$verb" in', 'case "boom" in'))
    assert "it failed" in svc.client.get("/list?path=/opt/hostpanel/data").json()["message"]


# ── streaming ─────────────────────────────────────────────────────────────────

def test_stream_compress(svc):
    r = svc.client.post("/compress", json={"source_path": "/opt/hostpanel/data/vhosts/site",
                                           "archive_path": "/opt/hostpanel/data/vhosts/site.zip",
                                           "archive_type": "zip"},
                        headers={"Accept": "text/event-stream"})
    assert r.headers["content-type"].startswith("text/event-stream")
    assert "event: log" in r.text
    assert "event: result" in r.text
    assert "compressing /opt/hostpanel/data/vhosts/site" in r.text


# ── introspection ─────────────────────────────────────────────────────────────

def test_operations_are_reported_from_the_manifest(svc):
    ops = svc.client.get("/operations").json()["operations"]
    assert set(ops) == {
        "file.list", "file.stat", "file.read", "file.write", "file.mkdir",
        "file.delete", "file.move", "file.copy", "file.chmod", "file.chown",
        "file.compress", "file.extract"
    }


def test_every_operation_declares_an_audit_action():
    manifest = M.load(MANIFEST)
    assert all(op.audit_action for op in manifest.operations.values())
