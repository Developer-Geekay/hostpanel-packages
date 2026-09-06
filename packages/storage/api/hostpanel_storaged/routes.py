"""
HTTP routes for hostpanel-storaged S3 Object Storage management.
Provides management endpoints for the HostPanel frontend UI.
"""
from __future__ import annotations

import logging
import mimetypes
import os
import shutil
import time
from pathlib import Path
from typing import Any, List, Mapping, Optional

from fastapi import APIRouter, File, Form, HTTPException, Query, Request, UploadFile, status
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops
from portald.sdk.errors import Code, OpsError
from hostpanel_storaged import verbs
from hostpanel_storaged.db import (
    generate_access_key_id,
    generate_secret_access_key,
    get_bucket_path,
    get_data_root,
    get_db,
    get_dir_stats,
    get_storage_setting,
    set_storage_setting,
)

_log = logging.getLogger(__name__)


# ── Pydantic Request Models ───────────────────────────────────────────────────

class CreateBucketRequest(BaseModel):
    name: str
    quota_mb: int = 5120
    public_access: bool = False
    region: str = "us-east-1"
    custom_path: Optional[str] = None


class UpdateBucketRequest(BaseModel):
    quota_mb: Optional[int] = None
    public_access: Optional[bool] = None
    custom_path: Optional[str] = None


class CreateKeyRequest(BaseModel):
    label: str = ""
    bucket_id: Optional[int] = None


class KeyStatusRequest(BaseModel):
    status: str  # 'active' or 'disabled'


class ObjectAclRequest(BaseModel):
    object_key: str
    is_public: bool


class PresignRequest(BaseModel):
    object_key: str
    expires_in: int = 3600  # seconds; 0 means permanent


class UpdateSettingsRequest(BaseModel):
    s3_port: Optional[str] = None
    storage_path: Optional[str] = None


def format_size(bytes_num: int) -> str:
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_num < 1024.0:
            return f"{bytes_num:.1f} {unit}"
        bytes_num /= 1024.0
    return f"{bytes_num:.1f} PB"


def build_router(manifest: M.Manifest, ops_script: str, *, use_sudo: bool = True) -> APIRouter:
    router = APIRouter()

    def spec_for(op: str, params: Mapping[str, Any], *,
                 timeout_ms: int | None = None) -> tuple[ops.OpsSpec, M.OpSpec]:
        op_spec = manifest.operations.get(op)
        if op_spec is None:
            raise OpsError(Code.INTERNAL,
                           f"operation {op!r} is not declared in the manifest")
        try:
            cleaned = M.validate_params(op_spec, {k: v for k, v in params.items()
                                                  if v is not None})
        except M.ManifestError as exc:
            raise OpsError(Code.VALIDATION, str(exc)) from exc

        verb, argv, secrets = verbs.build(op, cleaned)
        return ops.OpsSpec(
            script=ops_script,
            verb=verb,
            args=argv,
            secrets=secrets,
            timeout_ms=timeout_ms or op_spec.timeout_ms,
            sudo=use_sudo,
        ), op_spec

    async def run_json(op: str, params: Mapping[str, Any]) -> dict[str, Any]:
        spec, _ = spec_for(op, params)
        result = await ops.run(spec)
        result.raise_for_status()
        return result.data()

    # ── Service Metadata ──────────────────────────────────────────────────────

    @router.get("/meta")
    async def get_meta(request: Request):
        s3_port = int(get_storage_setting("s3_port", "9000"))
        host = request.headers.get("host", "localhost").split(":")[0]
        return {
            "package": manifest.name,
            "label": manifest.label,
            "version": manifest.version,
            "unit": manifest.unit,
            "run_as": manifest.run_as,
            "s3_port": s3_port,
            "s3_endpoint": f"http://{host}:{s3_port}",
            "storage_root": get_data_root(),
            "port": int(os.environ.get("HP_PACKAGE_PORT", "9114")),
        }

    # ── Buckets ───────────────────────────────────────────────────────────────

    @router.get("/buckets")
    async def list_buckets():
        with get_db() as conn:
            rows = conn.execute("SELECT * FROM storage_buckets ORDER BY name ASC").fetchall()

        results = []
        for r in rows:
            b_dict = dict(r)
            b_path = get_bucket_path(b_dict["name"], b_dict.get("custom_path"))
            used_bytes, obj_count = get_dir_stats(b_path)
            results.append({
                "id": b_dict["id"],
                "name": b_dict["name"],
                "owner": b_dict["owner"],
                "public_access": bool(b_dict["public_access"]),
                "quota_mb": b_dict["quota_mb"],
                "used_bytes": used_bytes,
                "used_mb": round(used_bytes / (1024 * 1024), 2),
                "used_formatted": format_size(used_bytes),
                "object_count": obj_count,
                "region": b_dict["region"],
                "custom_path": b_dict.get("custom_path"),
                "created_at": b_dict["created_at"],
            })
        return {"ok": True, "buckets": results}

    @router.post("/buckets")
    async def create_bucket(body: CreateBucketRequest):
        name = body.name.strip().lower()
        if not name:
            raise HTTPException(status_code=400, detail="Bucket name is required")

        # 1. Check if already exists in DB
        with get_db() as conn:
            existing = conn.execute("SELECT id FROM storage_buckets WHERE name = ?", (name,)).fetchone()
            if existing:
                raise HTTPException(status_code=409, detail=f"Bucket '{name}' already exists")

        # 2. Call root ops runner to create bucket directory with hp-storage ownership
        try:
            await run_json("storage.bucket-create", {"name": name})
        except OpsError as exc:
            raise HTTPException(status_code=exc.http_status, detail=exc.message) from exc

        # 3. Insert bucket metadata into DB
        with get_db() as conn:
            cur = conn.execute(
                """INSERT INTO storage_buckets (name, owner, public_access, quota_mb, region, custom_path)
                   VALUES (?, 'admin', ?, ?, ?, ?)""",
                (name, 1 if body.public_access else 0, body.quota_mb, body.region, body.custom_path),
            )
            bucket_id = cur.lastrowid

        return {"ok": True, "id": bucket_id, "name": name, "created": True}

    @router.patch("/buckets/{bucket_name}")
    @router.put("/buckets/{bucket_name}")
    async def update_bucket(bucket_name: str, body: UpdateBucketRequest):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

            updates = []
            params = []
            if body.quota_mb is not None:
                updates.append("quota_mb = ?")
                params.append(body.quota_mb)
            if body.public_access is not None:
                updates.append("public_access = ?")
                params.append(1 if body.public_access else 0)
            if body.custom_path is not None:
                updates.append("custom_path = ?")
                params.append(body.custom_path)

            if updates:
                params.append(bucket_name)
                conn.execute(f"UPDATE storage_buckets SET {', '.join(updates)} WHERE name = ?", params)

        return {"ok": True, "name": bucket_name, "updated": True}

    @router.delete("/buckets/{bucket_name}")
    async def delete_bucket(bucket_name: str):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

        # Call root ops runner to delete bucket directory cleanly
        try:
            await run_json("storage.bucket-delete", {"name": bucket_name})
        except OpsError as exc:
            if exc.code != Code.NOT_FOUND:
                raise HTTPException(status_code=exc.http_status, detail=exc.message) from exc

        with get_db() as conn:
            conn.execute("DELETE FROM storage_buckets WHERE name = ?", (bucket_name,))
            conn.execute("DELETE FROM storage_object_acls WHERE bucket_name = ?", (bucket_name,))
            conn.execute("DELETE FROM storage_presigned_urls WHERE bucket_name = ?", (bucket_name,))

        return {"ok": True, "name": bucket_name, "deleted": True}

    # ── Object Explorer ───────────────────────────────────────────────────────

    @router.get("/buckets/{bucket_name}/objects")
    async def list_bucket_objects(
        bucket_name: str,
        prefix: str = Query(""),
        delimiter: str = Query("/"),
    ):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")
            acls = {r["object_key"]: bool(r["is_public"]) for r in conn.execute("SELECT object_key, is_public FROM storage_object_acls WHERE bucket_name = ?", (bucket_name,)).fetchall()}

        b_path = get_bucket_path(bucket_name, b_row["custom_path"])
        if not os.path.exists(b_path):
            return {"ok": True, "bucket": bucket_name, "prefix": prefix, "objects": []}

        clean_prefix = prefix.lstrip("/")
        target_dir = os.path.abspath(os.path.join(b_path, clean_prefix))
        if not target_dir.startswith(os.path.abspath(b_path)):
            raise HTTPException(status_code=400, detail="Invalid path traversal")

        items = []
        if os.path.exists(target_dir) and os.path.isdir(target_dir):
            for entry in sorted(os.listdir(target_dir)):
                if entry.startswith("."):
                    continue
                fp = os.path.join(target_dir, entry)
                rel_p = os.path.relpath(fp, b_path).replace("\\", "/")
                is_dir = os.path.isdir(fp)

                if is_dir:
                    size = 0
                    dir_bytes, file_count = get_dir_stats(fp)
                    formatted = f"{file_count} items"
                    ctype = "directory"
                    mtime_str = ""
                    is_pub = False
                else:
                    stat = os.stat(fp)
                    size = stat.st_size
                    formatted = format_size(size)
                    ctype, _ = mimetypes.guess_type(fp)
                    ctype = ctype or "application/octet-stream"
                    mtime_str = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(stat.st_mtime))
                    is_pub = acls.get(rel_p, bool(b_row["public_access"]))

                items.append({
                    "key": rel_p + ("/" if is_dir else ""),
                    "name": entry,
                    "is_dir": is_dir,
                    "size_bytes": size,
                    "size_formatted": formatted,
                    "content_type": ctype,
                    "last_modified": mtime_str,
                    "is_public": is_pub,
                })

        return {"ok": True, "bucket": bucket_name, "prefix": prefix, "objects": items}

    @router.post("/buckets/{bucket_name}/objects/upload")
    async def upload_bucket_object(
        bucket_name: str,
        prefix: str = Form(""),
        file: UploadFile = File(...),
    ):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

        b_path = get_bucket_path(bucket_name, b_row["custom_path"])
        clean_prefix = prefix.strip().lstrip("/")
        target_dir = os.path.abspath(os.path.join(b_path, clean_prefix))
        if not target_dir.startswith(os.path.abspath(b_path)):
            raise HTTPException(status_code=400, detail="Invalid path traversal")

        Path(target_dir).mkdir(parents=True, exist_ok=True)
        filename = os.path.basename(file.filename or "upload.bin")
        target_path = os.path.join(target_dir, filename)

        # Write file in chunks
        chunk_size = 1024 * 1024
        written = 0
        with open(target_path, "wb") as out_f:
            while chunk := await file.read(chunk_size):
                out_f.write(chunk)
                written += len(chunk)

        rel_key = os.path.relpath(target_path, b_path).replace("\\", "/")
        return {
            "ok": True,
            "bucket": bucket_name,
            "key": rel_key,
            "size_bytes": written,
            "size_formatted": format_size(written),
        }

    @router.get("/buckets/{bucket_name}/objects/download")
    async def download_bucket_object(bucket_name: str, key: str = Query(...)):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

        b_path = get_bucket_path(bucket_name, b_row["custom_path"])
        clean_key = key.lstrip("/")
        target = os.path.abspath(os.path.join(b_path, clean_key))
        if not target.startswith(os.path.abspath(b_path)) or not os.path.isfile(target):
            raise HTTPException(status_code=404, detail="Object not found")

        ctype, _ = mimetypes.guess_type(target)
        return FileResponse(target, filename=os.path.basename(target), media_type=ctype or "application/octet-stream")

    @router.delete("/buckets/{bucket_name}/objects")
    async def delete_bucket_object(bucket_name: str, key: str = Query(...)):
        with get_db() as conn:
            b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

        b_path = get_bucket_path(bucket_name, b_row["custom_path"])
        clean_key = key.lstrip("/")
        target = os.path.abspath(os.path.join(b_path, clean_key))
        if not target.startswith(os.path.abspath(b_path)):
            raise HTTPException(status_code=400, detail="Invalid path traversal")

        if os.path.exists(target):
            if os.path.isdir(target):
                shutil.rmtree(target, ignore_errors=True)
            else:
                os.remove(target)

        with get_db() as conn:
            conn.execute("DELETE FROM storage_object_acls WHERE bucket_name = ? AND object_key = ?", (bucket_name, clean_key))
            conn.execute("DELETE FROM storage_presigned_urls WHERE bucket_name = ? AND object_key = ?", (bucket_name, clean_key))

        return {"ok": True, "bucket": bucket_name, "key": key, "deleted": True}

    @router.post("/buckets/{bucket_name}/objects/acl")
    async def set_object_acl(bucket_name: str, body: ObjectAclRequest):
        with get_db() as conn:
            b_row = conn.execute("SELECT id FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

            clean_key = body.object_key.lstrip("/")
            conn.execute(
                """INSERT INTO storage_object_acls (bucket_name, object_key, is_public)
                   VALUES (?, ?, ?)
                   ON CONFLICT(bucket_name, object_key) DO UPDATE SET is_public = excluded.is_public""",
                (bucket_name, clean_key, 1 if body.is_public else 0),
            )

        return {"ok": True, "bucket": bucket_name, "key": clean_key, "is_public": body.is_public}

    @router.post("/buckets/{bucket_name}/objects/presign")
    async def create_presigned_url(request: Request, bucket_name: str, body: PresignRequest):
        with get_db() as conn:
            b_row = conn.execute("SELECT id FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
            if not b_row:
                raise HTTPException(status_code=404, detail="Bucket not found")

            import secrets
            token = secrets.token_urlsafe(24)
            expires_at = int(time.time() + body.expires_in) if body.expires_in > 0 else 0
            clean_key = body.object_key.lstrip("/")

            conn.execute(
                """INSERT INTO storage_presigned_urls (bucket_name, object_key, token, expires_at, status, created_by)
                   VALUES (?, ?, ?, ?, 'active', 'admin')""",
                (bucket_name, clean_key, token, expires_at),
            )

        s3_port = int(get_storage_setting("s3_port", "9000"))
        host = request.headers.get("host", "localhost").split(":")[0]
        presigned_url = f"http://{host}:{s3_port}/{bucket_name}/{clean_key}?token={token}"

        return {
            "ok": True,
            "url": presigned_url,
            "token": token,
            "expires_at": expires_at,
            "never_expires": body.expires_in == 0,
        }

    @router.get("/buckets/{bucket_name}/presigned")
    async def list_presigned_urls(bucket_name: str):
        with get_db() as conn:
            rows = conn.execute(
                "SELECT * FROM storage_presigned_urls WHERE bucket_name = ? AND status = 'active' ORDER BY created_at DESC",
                (bucket_name,),
            ).fetchall()
        return {"ok": True, "presigned_urls": [dict(r) for r in rows]}

    @router.delete("/buckets/{bucket_name}/presigned/{token}")
    async def revoke_presigned_url(bucket_name: str, token: str):
        with get_db() as conn:
            conn.execute("UPDATE storage_presigned_urls SET status = 'revoked' WHERE token = ? AND bucket_name = ?", (token, bucket_name))
        return {"ok": True, "revoked": True}

    # ── Access Keys ───────────────────────────────────────────────────────────

    @router.get("/keys")
    async def list_access_keys():
        with get_db() as conn:
            rows = conn.execute("""
                SELECT k.*, b.name as bucket_name
                FROM storage_access_keys k
                LEFT JOIN storage_buckets b ON k.bucket_id = b.id
                ORDER BY k.created_at DESC
            """).fetchall()

        keys = []
        for r in rows:
            keys.append({
                "id": r["id"],
                "access_key": r["access_key"],
                "owner": r["owner"],
                "label": r["label"],
                "status": r["status"],
                "bucket_id": r["bucket_id"],
                "bucket_name": r["bucket_name"],
                "created_at": r["created_at"],
            })
        return {"ok": True, "keys": keys}

    @router.post("/keys")
    async def create_access_key(body: CreateKeyRequest):
        access_key = generate_access_key_id()
        secret_key = generate_secret_access_key()

        with get_db() as conn:
            bucket_name = None
            if body.bucket_id:
                b_row = conn.execute("SELECT name FROM storage_buckets WHERE id = ?", (body.bucket_id,)).fetchone()
                if not b_row:
                    raise HTTPException(status_code=404, detail="Bound bucket not found")
                bucket_name = b_row["name"]

            cur = conn.execute(
                """INSERT INTO storage_access_keys (access_key, secret_key, owner, label, status, bucket_id)
                   VALUES (?, ?, 'admin', ?, 'active', ?)""",
                (access_key, secret_key, body.label, body.bucket_id),
            )
            key_id = cur.lastrowid

        key_dict = {
            "id": key_id,
            "access_key": access_key,
            "access_key_id": access_key,
            "secret_key": secret_key,
            "secret_access_key": secret_key,
            "label": body.label,
            "bucket_id": body.bucket_id,
            "bucket_name": bucket_name,
            "created": True,
        }
        return {
            "ok": True,
            **key_dict,
            "key": key_dict,
        }

    @router.patch("/keys/{access_key}/status")
    @router.post("/keys/{access_key}/status")
    async def toggle_key_status(access_key: str, body: KeyStatusRequest):
        if body.status not in ("active", "disabled"):
            raise HTTPException(status_code=400, detail="Status must be 'active' or 'disabled'")

        with get_db() as conn:
            conn.execute("UPDATE storage_access_keys SET status = ? WHERE access_key = ?", (body.status, access_key))

        return {"ok": True, "access_key": access_key, "status": body.status}

    @router.delete("/keys/{access_key}")
    async def delete_access_key(access_key: str):
        with get_db() as conn:
            conn.execute("DELETE FROM storage_access_keys WHERE access_key = ?", (access_key,))
        return {"ok": True, "access_key": access_key, "deleted": True}

    # ── Settings ──────────────────────────────────────────────────────────────

    @router.get("/settings")
    async def get_settings():
        s3_port = int(get_storage_setting("s3_port", "9000"))
        storage_path = get_data_root()
        total_size, total_objs = get_dir_stats(storage_path)

        with get_db() as conn:
            row = conn.execute("SELECT COUNT(*) as count FROM storage_buckets").fetchone()
            bucket_count = row["count"] if row else 0

        return {
            "ok": True,
            "s3_port": s3_port,
            "storage_path": storage_path,
            "bucket_count": bucket_count,
            "total_objects": total_objs,
            "total_size_bytes": total_size,
            "total_size_formatted": format_size(total_size),
        }

    @router.post("/settings")
    async def update_settings(body: UpdateSettingsRequest):
        if body.s3_port:
            set_storage_setting("s3_port", body.s3_port)
        if body.storage_path:
            set_storage_setting("storage_path", body.storage_path)
            Path(body.storage_path).mkdir(parents=True, exist_ok=True)
        return {"ok": True, "saved": True}

    # ── Operations Introspection ──────────────────────────────────────────────

    @router.get("/operations")
    async def list_operations():
        return {
            "package": manifest.name,
            "version": manifest.version,
            "operations": {
                name: {
                    "verb": op.verb,
                    "mutating": op.mutating,
                    "streams": op.streams,
                    "params": {
                        p.name: {
                            "required": p.required,
                            "secret": p.secret,
                            "enum": list(p.enum) if p.enum else None,
                            "pattern": p.pattern,
                            "default": p.default,
                        }
                        for p in op.params.values()
                    },
                }
                for name, op in manifest.operations.items()
            },
        }

    return router
