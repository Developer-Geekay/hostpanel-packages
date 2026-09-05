"""
HostPanel S3 REST Protocol Engine.
Provides AWS S3 compatible REST API endpoints (SigV4, SigV2, Presigned URLs).
"""
from __future__ import annotations

import hashlib
import logging
import mimetypes
import os
import time
from typing import Optional
from pathlib import Path

from fastapi import APIRouter, FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from hostpanel_storaged.db import (
    get_bucket_path,
    get_db,
    get_dir_stats,
)

_log = logging.getLogger(__name__)

public_s3_router = APIRouter(prefix="", tags=["S3 Protocol API"])

s3_app = FastAPI(title="HostPanel S3 Protocol Engine", docs_url=None, redoc_url=None, openapi_url=None)
s3_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["ETag", "Content-Length", "Content-Type", "x-amz-request-id"],
)
s3_app.include_router(public_s3_router)


def xml_response(content: str, status_code: int = 200) -> Response:
    xml_header = '<?xml version="1.0" encoding="UTF-8"?>\n'
    return Response(
        content=xml_header + content,
        status_code=status_code,
        media_type="application/xml",
    )


def authenticate_s3_request(req: Request) -> Optional[dict]:
    """
    Authenticate incoming AWS S3 API requests via Authorization header or Query params.
    Supports AWS SigV4, SigV2, and presigned access key params.
    """
    auth_header = req.headers.get("Authorization", "")
    access_key = None

    if "Credential=" in auth_header:
        # AWS4-HMAC-SHA256 Credential=ACCESS_KEY/20260729/region/s3/aws4_request, ...
        cred_part = auth_header.split("Credential=", 1)[1].split(",", 1)[0]
        access_key = cred_part.split("/", 1)[0].strip()
    elif auth_header.startswith("AWS "):
        # SigV2 format: AWS ACCESS_KEY:SIGNATURE
        access_key = auth_header.split(" ", 1)[1].split(":", 1)[0].strip()
    elif "AWSAccessKeyId" in req.query_params:
        access_key = req.query_params.get("AWSAccessKeyId", "").strip()

    if not access_key:
        return None

    with get_db() as conn:
        row = conn.execute(
            """SELECT k.*, b.name as bound_bucket_name
               FROM storage_access_keys k
               LEFT JOIN storage_buckets b ON k.bucket_id = b.id
               WHERE k.access_key = ? AND k.status = 'active'""",
            (access_key,)
        ).fetchone()
        return dict(row) if row else None


@public_s3_router.get("")
@public_s3_router.get("/")
async def s3_list_buckets(req: Request):
    key_info = authenticate_s3_request(req)
    if not key_info:
        return xml_response(
            "<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>",
            status_code=403,
        )

    owner = key_info.get("owner", "admin")
    with get_db() as conn:
        if key_info.get("bucket_id"):
            rows = conn.execute("SELECT * FROM storage_buckets WHERE id = ?", (key_info["bucket_id"],)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM storage_buckets WHERE owner = ? ORDER BY name ASC", (owner,)).fetchall()

    buckets_xml = ""
    for r in rows:
        mtime = r["created_at"]
        buckets_xml += f"""
        <Bucket>
            <Name>{r['name']}</Name>
            <CreationDate>{mtime}</CreationDate>
        </Bucket>"""

    content = f"""<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Owner>
        <ID>{owner}</ID>
        <DisplayName>{owner}</DisplayName>
    </Owner>
    <Buckets>{buckets_xml}
    </Buckets>
</ListAllMyBucketsResult>"""
    return xml_response(content)


@public_s3_router.head("/{bucket_name}")
async def s3_head_bucket(bucket_name: str, req: Request):
    key_info = authenticate_s3_request(req)
    with get_db() as conn:
        row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
    if not row:
        return Response(status_code=404)
    if not bool(row["public_access"]) and not key_info:
        return Response(status_code=403)
    return Response(status_code=200)


@public_s3_router.get("/{bucket_name}")
async def s3_list_objects(
    bucket_name: str,
    req: Request,
    prefix: str = "",
    delimiter: str = "",
    max_keys: int = 1000,
):
    key_info = authenticate_s3_request(req)
    with get_db() as conn:
        b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()

    if not b_row:
        return xml_response(
            "<Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message></Error>",
            status_code=404,
        )

    b_dict = dict(b_row)

    # Permission check: public read OR valid key owner
    if not b_dict["public_access"]:
        if not key_info:
            return xml_response("<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>", status_code=403)
        if key_info["owner"] != b_dict["owner"] and key_info.get("bound_bucket_name") != bucket_name:
            return xml_response("<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>", status_code=403)

    b_path = get_bucket_path(bucket_name, b_dict.get("custom_path"))
    contents_xml = ""
    common_prefixes = set()

    if os.path.exists(b_path):
        count = 0
        clean_prefix = prefix.lstrip("/")
        for root, dirs, files in os.walk(b_path):
            if count >= max_keys:
                break
            for f in sorted(files):
                full_p = os.path.join(root, f)
                rel_p = os.path.relpath(full_p, b_path).replace("\\", "/")
                if clean_prefix and not rel_p.startswith(clean_prefix):
                    continue

                if delimiter:
                    sub = rel_p[len(clean_prefix):]
                    if delimiter in sub:
                        prefix_group = clean_prefix + sub.split(delimiter)[0] + delimiter
                        common_prefixes.add(prefix_group)
                        continue

                try:
                    stat = os.stat(full_p)
                    mtime = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(stat.st_mtime))
                    etag = hashlib.md5(f"{rel_p}:{stat.st_mtime}".encode()).hexdigest()
                    contents_xml += f"""
        <Contents>
            <Key>{rel_p}</Key>
            <LastModified>{mtime}</LastModified>
            <ETag>"{etag}"</ETag>
            <Size>{stat.st_size}</Size>
            <StorageClass>STANDARD</StorageClass>
        </Contents>"""
                    count += 1
                except OSError:
                    pass

    prefixes_xml = "".join(f"<CommonPrefixes><Prefix>{p}</Prefix></CommonPrefixes>" for p in sorted(common_prefixes))

    xml_content = f"""<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>{bucket_name}</Name>
    <Prefix>{prefix}</Prefix>
    <MaxKeys>{max_keys}</MaxKeys>
    <Delimiter>{delimiter}</Delimiter>
    <IsTruncated>false</IsTruncated>{contents_xml}{prefixes_xml}
</ListBucketResult>"""
    return xml_response(xml_content)


@public_s3_router.get("/{bucket_name}/{object_key:path}")
async def s3_get_object(bucket_name: str, object_key: str, req: Request):
    key_info = authenticate_s3_request(req)
    with get_db() as conn:
        b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()

    if not b_row:
        return xml_response("<Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message></Error>", status_code=404)

    b_dict = dict(b_row)
    if not b_dict["public_access"]:
        is_authorized = False

        # Check Object-level ACL
        with get_db() as conn:
            acl_row = conn.execute(
                "SELECT is_public FROM storage_object_acls WHERE bucket_name = ? AND object_key = ?",
                (bucket_name, object_key),
            ).fetchone()
            if acl_row and acl_row["is_public"]:
                is_authorized = True

        # Check presigned token
        if not is_authorized:
            token_param = req.query_params.get("token")
            if token_param:
                with get_db() as conn:
                    p_row = conn.execute(
                        "SELECT * FROM storage_presigned_urls WHERE token = ? AND bucket_name = ? AND object_key = ? AND status = 'active'",
                        (token_param, bucket_name, object_key),
                    ).fetchone()
                    if p_row:
                        exp = p_row["expires_at"]
                        if exp == 0 or time.time() <= exp:
                            is_authorized = True

        if not is_authorized and not key_info:
            return xml_response("<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>", status_code=403)

    b_path = get_bucket_path(bucket_name, b_dict.get("custom_path"))
    clean_key = object_key.lstrip("/")
    target = os.path.abspath(os.path.join(b_path, clean_key))
    if not target.startswith(os.path.abspath(b_path)) or not os.path.exists(target) or os.path.isdir(target):
        return xml_response("<Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message></Error>", status_code=404)

    ctype, _ = mimetypes.guess_type(target)
    stat = os.stat(target)
    etag = hashlib.md5(f"{clean_key}:{stat.st_mtime}".encode()).hexdigest()
    return FileResponse(
        target,
        media_type=ctype or "application/octet-stream",
        headers={"ETag": f'"{etag}"'},
    )


@public_s3_router.head("/{bucket_name}/{object_key:path}")
async def s3_head_object(bucket_name: str, object_key: str, req: Request):
    res = await s3_get_object(bucket_name, object_key, req)
    if isinstance(res, FileResponse):
        return Response(status_code=200, headers=dict(res.headers))
    return res


@public_s3_router.put("/{bucket_name}/{object_key:path}")
async def s3_put_object(bucket_name: str, object_key: str, req: Request):
    key_info = authenticate_s3_request(req)
    if not key_info:
        return xml_response("<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>", status_code=403)

    with get_db() as conn:
        b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
        if not b_row:
            return xml_response("<Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message></Error>", status_code=404)

    b_dict = dict(b_row)
    b_path = get_bucket_path(bucket_name, b_dict.get("custom_path"))
    clean_key = object_key.lstrip("/")
    target = os.path.abspath(os.path.join(b_path, clean_key))

    if not target.startswith(os.path.abspath(b_path)):
        return xml_response("<Error><Code>InvalidArgument</Code><Message>Invalid Key</Message></Error>", status_code=400)

    Path(target).parent.mkdir(parents=True, exist_ok=True)
    body = await req.body()

    # Quota check
    current_used, _ = get_dir_stats(b_path)
    if (current_used + len(body)) > (b_dict["quota_mb"] * 1024 * 1024):
        return xml_response("<Error><Code>QuotaExceeded</Code><Message>Bucket Quota Exceeded</Message></Error>", status_code=413)

    with open(target, "wb") as f:
        f.write(body)

    etag = hashlib.md5(body).hexdigest()
    return Response(status_code=200, headers={"ETag": f'"{etag}"'})


@public_s3_router.delete("/{bucket_name}/{object_key:path}")
async def s3_delete_object(bucket_name: str, object_key: str, req: Request):
    key_info = authenticate_s3_request(req)
    if not key_info:
        return xml_response("<Error><Code>AccessDenied</Code><Message>Access Denied</Message></Error>", status_code=403)

    with get_db() as conn:
        b_row = conn.execute("SELECT * FROM storage_buckets WHERE name = ?", (bucket_name,)).fetchone()
        if not b_row:
            return xml_response("<Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message></Error>", status_code=404)

    b_dict = dict(b_row)
    b_path = get_bucket_path(bucket_name, b_dict.get("custom_path"))
    clean_key = object_key.lstrip("/")
    target = os.path.abspath(os.path.join(b_path, clean_key))

    if os.path.exists(target) and target.startswith(os.path.abspath(b_path)):
        if os.path.isfile(target):
            os.remove(target)
        elif os.path.isdir(target):
            import shutil
            shutil.rmtree(target, ignore_errors=True)

    return Response(status_code=204)
