"""
Database access and schema initialization for hostpanel-storaged.
Strictly isolated under /opt/hostpanel.
"""
from __future__ import annotations

import contextlib
import logging
import os
import secrets
import string
import sqlite3
from pathlib import Path
from typing import Iterator

_log = logging.getLogger(__name__)

DEFAULT_DB_PATH = "/opt/hostpanel/data/hostpanel.db"
DEFAULT_STORAGE_ROOT = "/opt/hostpanel/data/storage/buckets"


def get_db_path() -> str:
    return os.environ.get("HP_DB_PATH", DEFAULT_DB_PATH)


@contextlib.contextmanager
def get_db() -> Iterator[sqlite3.Connection]:
    db_path = get_db_path()
    Path(db_path).parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(db_path, timeout=10.0)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON;")
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def init_storage_tables() -> None:
    """Ensure all required S3 Object Storage tables exist."""
    try:
        with get_db() as conn:
            conn.execute("""
            CREATE TABLE IF NOT EXISTS storage_buckets (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                name          TEXT UNIQUE NOT NULL,
                owner         TEXT NOT NULL DEFAULT 'admin',
                public_access INTEGER NOT NULL DEFAULT 0,
                quota_mb      INTEGER NOT NULL DEFAULT 5120,
                used_bytes    INTEGER NOT NULL DEFAULT 0,
                region        TEXT NOT NULL DEFAULT 'us-east-1',
                custom_path   TEXT,
                created_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
            );
            """)
            conn.execute("""
            CREATE TABLE IF NOT EXISTS storage_access_keys (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                access_key    TEXT UNIQUE NOT NULL,
                secret_key    TEXT NOT NULL,
                owner         TEXT NOT NULL DEFAULT 'admin',
                label         TEXT NOT NULL DEFAULT '',
                status        TEXT NOT NULL DEFAULT 'active',
                bucket_id     INTEGER,
                created_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
                FOREIGN KEY(bucket_id) REFERENCES storage_buckets(id) ON DELETE CASCADE
            );
            """)
            conn.execute("""
            CREATE TABLE IF NOT EXISTS storage_settings (
                key   TEXT PRIMARY KEY,
                value TEXT NOT NULL
            );
            """)
            conn.execute("""
            CREATE TABLE IF NOT EXISTS storage_presigned_urls (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                bucket_name   TEXT NOT NULL,
                object_key    TEXT NOT NULL,
                token         TEXT UNIQUE NOT NULL,
                expires_at    INTEGER NOT NULL DEFAULT 0,
                status        TEXT NOT NULL DEFAULT 'active',
                created_by    TEXT NOT NULL DEFAULT 'admin',
                created_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
            );
            """)
            conn.execute("""
            CREATE TABLE IF NOT EXISTS storage_object_acls (
                id                INTEGER PRIMARY KEY AUTOINCREMENT,
                bucket_name       TEXT NOT NULL,
                object_key        TEXT NOT NULL,
                original_filename TEXT,
                is_public         INTEGER NOT NULL DEFAULT 0,
                created_at        TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
                UNIQUE(bucket_name, object_key)
            );
            """)

            conn.execute("CREATE INDEX IF NOT EXISTS idx_storage_buckets_owner ON storage_buckets(owner);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_storage_keys_owner ON storage_access_keys(owner);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_storage_keys_access ON storage_access_keys(access_key);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_presigned_target ON storage_presigned_urls(bucket_name, object_key);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_presigned_token ON storage_presigned_urls(token);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_object_acls ON storage_object_acls(bucket_name, object_key);")

            # Default settings
            conn.execute("INSERT OR IGNORE INTO storage_settings (key, value) VALUES ('s3_port', '9000');")
            conn.execute("INSERT OR IGNORE INTO storage_settings (key, value) VALUES ('storage_path', ?);", (DEFAULT_STORAGE_ROOT,))
        _log.info("Initialized storage tables in %s", get_db_path())
    except Exception as exc:
        _log.error("Failed initializing storage tables: %s", exc)


def get_storage_setting(key: str, default: str = "") -> str:
    with get_db() as conn:
        row = conn.execute("SELECT value FROM storage_settings WHERE key = ?", (key,)).fetchone()
        return str(row["value"]) if row else default


def set_storage_setting(key: str, value: str) -> None:
    with get_db() as conn:
        conn.execute("INSERT INTO storage_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value;", (key, value))


def get_data_root() -> str:
    custom = get_storage_setting("storage_path", DEFAULT_STORAGE_ROOT)
    return custom or DEFAULT_STORAGE_ROOT


def get_bucket_path(bucket_name: str, custom_path: str | None = None) -> str:
    if custom_path and os.path.isabs(custom_path):
        return custom_path
    root = get_data_root()
    return os.path.join(root, bucket_name)


def get_dir_stats(path: str) -> tuple[int, int]:
    """Calculate total size in bytes and file count for a directory."""
    if not os.path.exists(path):
        return 0, 0
    total_size = 0
    file_count = 0
    try:
        for root, _, files in os.walk(path):
            for f in files:
                fp = os.path.join(root, f)
                if not os.path.islink(fp):
                    try:
                        total_size += os.path.getsize(fp)
                        file_count += 1
                    except OSError:
                        pass
    except Exception as e:
        _log.warning("Error calculating stats for %s: %s", path, e)
    return total_size, file_count


def generate_access_key_id() -> str:
    alphabet = string.ascii_uppercase + string.digits
    return "HPK" + "".join(secrets.choice(alphabet) for _ in range(17))


def generate_secret_access_key() -> str:
    alphabet = string.ascii_letters + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(40))
