"""
HTTP surface for the filemanager package.

Each operation maps to an endpoint. Operations supporting long-running execution
(e.g., compress, extract) offer streaming SSE when Accept: text/event-stream is requested.
"""
from __future__ import annotations

import logging
import os
import uuid
from typing import Any, Mapping

from fastapi import APIRouter, File, Form, HTTPException, Query, Request, Response, UploadFile
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_filemanagerd import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class WriteFileBody(BaseModel):
    path: str
    content: str


class MkdirBody(BaseModel):
    path: str


class MoveBody(BaseModel):
    source: str
    target: str


class CopyBody(BaseModel):
    source: str
    target: str


class DeleteBody(BaseModel):
    path: str


class ChmodBody(BaseModel):
    path: str
    mode: str


class ChownBody(BaseModel):
    path: str
    owner: str
    group: str = ""


class CompressBody(BaseModel):
    source_path: str
    archive_path: str
    archive_type: str


class ExtractBody(BaseModel):
    archive_path: str
    target_dir: str


def wants_stream(request: Request) -> bool:
    accept = request.headers.get("accept", "")
    for part in accept.split(","):
        media = part.split(";", 1)[0].strip().lower()
        if media == "text/event-stream":
            return True
    return False


def build_router(manifest: M.Manifest, ops_script: str, *,
                 use_sudo: bool = True) -> APIRouter:
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

    async def run_json(op: str, params: Mapping[str, Any]) -> JSONResponse:
        spec, _ = spec_for(op, params)
        result = await ops.run(spec)
        result.raise_for_status()
        return JSONResponse(result.data())

    async def run_stream(op: str, params: Mapping[str, Any]) -> StreamingResponse:
        spec, _ = spec_for(op, params)

        async def events():
            try:
                async for item in ops.stream(spec):
                    if isinstance(item, ops.OpsLine):
                        yield sse.log(item.text, stream=item.stream).encode()
                    else:
                        yield sse.result(
                            ok=item.ok,
                            code=item.code.value,
                            message="" if item.ok else (item.stderr.strip()
                                                        or "operation failed"),
                            data=item.data() if item.ok else None,
                            exit_code=item.exit_code,
                        ).encode()
            except OpsError as exc:
                yield sse.result(ok=False, code=exc.code.value,
                                 message=exc.message).encode()

        return StreamingResponse(events(), headers=dict(SSE_HEADERS))

    async def dispatch(request: Request, op: str,
                       params: Mapping[str, Any]):
        if wants_stream(request):
            return await run_stream(op, params)
        return await run_json(op, params)

    # ── file operations ────────────────────────────────────────────────────────

    @router.get("/quick-locations")
    async def quick_locations():
        """Return list of existing quick jump locations, filtering out any that do not exist."""
        candidates = [
            {"id": "hostpanel", "label": "HostPanel (/opt/hostpanel)", "path": "/opt/hostpanel", "icon": "settings"},
            {"id": "vhosts", "label": "Websites (/opt/hostpanel/data/vhosts)", "path": "/opt/hostpanel/data/vhosts", "icon": "language"},
            {"id": "home", "label": "Home (/home)", "path": "/home", "icon": "home"},
            {"id": "mnt", "label": "Mounts (/mnt)", "path": "/mnt", "icon": "storage"},
            {"id": "media", "label": "Media (/media)", "path": "/media", "icon": "storage"},
            {"id": "root", "label": "Root (/)", "path": "/", "icon": "folder"},
        ]
        active = [c for c in candidates if os.path.isdir(c["path"])]
        default_root = "/opt/hostpanel" if os.path.isdir("/opt/hostpanel") else (active[0]["path"] if active else "/")
        return {"locations": active, "default_root": default_root}

    @router.get("/list")
    async def list_files(path: str | None = Query(None)):
        target_path = path or "/opt/hostpanel"
        if not os.path.exists(target_path):
            for fallback in ("/opt/hostpanel", "/home", "/"):
                if os.path.isdir(fallback):
                    target_path = fallback
                    break
        return await run_json("file.list", {"path": target_path})

    @router.get("/stat")
    async def stat_file(path: str = Query(...)):
        return await run_json("file.stat", {"path": path})

    @router.get("/read")
    async def read_file(path: str = Query(...)):
        return await run_json("file.read", {"path": path})

    @router.post("/write")
    async def write_file(body: WriteFileBody):
        return await run_json("file.write", {"path": body.path, "content": body.content})

    @router.post("/mkdir")
    async def create_directory(body: MkdirBody):
        return await run_json("file.mkdir", {"path": body.path})

    @router.delete("/delete")
    @router.post("/delete")
    async def delete_file(body: DeleteBody | None = None, path: str | None = Query(None)):
        target_path = body.path if body and body.path else path
        if not target_path:
            raise OpsError(Code.VALIDATION, "path parameter or body is required")
        return await run_json("file.delete", {"path": target_path})

    @router.post("/move")
    async def move_file(body: MoveBody):
        return await run_json("file.move", {"source": body.source, "target": body.target})

    @router.post("/copy")
    async def copy_file(body: CopyBody):
        return await run_json("file.copy", {"source": body.source, "target": body.target})

    @router.post("/chmod")
    async def chmod_file(body: ChmodBody):
        return await run_json("file.chmod", {"path": body.path, "mode": body.mode})

    @router.post("/chown")
    async def chown_file(body: ChownBody):
        return await run_json("file.chown", {"path": body.path, "owner": body.owner, "group": body.group})

    @router.post("/compress")
    async def compress_files(request: Request, body: CompressBody):
        return await dispatch(request, "file.compress", body.model_dump())

    @router.post("/extract")
    async def extract_archive(request: Request, body: ExtractBody):
        return await dispatch(request, "file.extract", body.model_dump())

    # ── upload and download ───────────────────────────────────────────────────

    @router.post("/upload")
    async def upload_file(
        request: Request,
        path: str | None = Form(default=None),
        file: UploadFile | None = File(default=None),
    ):
        target_path = None
        filename = ""
        file_size = 0

        # Determine staging directory
        staging_dir = "/opt/hostpanel/data/staging"
        try:
            os.makedirs(staging_dir, exist_ok=True)
        except Exception:
            staging_dir = "/tmp"
            try:
                os.makedirs(staging_dir, exist_ok=True)
            except Exception:
                pass

        temp_id = uuid.uuid4().hex
        staging_path = ""

        try:
            # 1. Standard multipart form data (streamed to disk in 1MB chunks)
            if file is not None and path is not None:
                filename = os.path.basename(file.filename or "uploaded_file")
                staging_path = os.path.join(staging_dir, f"hpupload_{temp_id}_{filename}")
                target_path = str(path).rstrip("/")
                with open(staging_path, "wb") as out_fp:
                    while chunk := await file.read(1024 * 1024):
                        out_fp.write(chunk)
                        file_size += len(chunk)
            else:
                # 2. Fallback: Parse request form or JSON body for small API payloads
                content_type = request.headers.get("content-type", "").lower()
                content_bytes = b""
                if "application/json" in content_type:
                    try:
                        data = await request.json()
                        target_path = data.get("path")
                        filename = os.path.basename(data.get("filename", "uploaded_file"))
                        if "content_base64" in data:
                            import base64
                            content_bytes = base64.b64decode(data["content_base64"])
                        elif "content" in data:
                            content_bytes = data["content"].encode("utf-8")
                    except Exception as e:
                        raise HTTPException(status_code=400, detail=f"Failed to parse JSON upload payload: {e}")
                else:
                    try:
                        form = await request.form()
                        target_path = form.get("path")
                        form_file = form.get("file")
                        if hasattr(form_file, "read"):
                            filename = os.path.basename(getattr(form_file, "filename", "uploaded_file"))
                            staging_path = os.path.join(staging_dir, f"hpupload_{temp_id}_{filename}")
                            with open(staging_path, "wb") as out_fp:
                                while chunk := await form_file.read(1024 * 1024):
                                    out_fp.write(chunk)
                                    file_size += len(chunk)
                    except Exception:
                        pass

                if content_bytes:
                    staging_path = os.path.join(staging_dir, f"hpupload_{temp_id}_{filename}")
                    with open(staging_path, "wb") as out_fp:
                        out_fp.write(content_bytes)
                    file_size = len(content_bytes)

            if not target_path or not staging_path or not os.path.exists(staging_path):
                if staging_path and os.path.exists(staging_path):
                    try: os.unlink(staging_path)
                    except Exception: pass
                raise HTTPException(
                    status_code=400,
                    detail="Both 'path' and 'file' (or 'content') are required for upload."
                )

            # Resolve destination target path
            target_path = str(target_path).rstrip("/")
            if str(target_path).endswith("/") or target_path in ("/opt/hostpanel/data", "/opt/hostpanel/data/vhosts", "/opt/hostpanel", "/home"):
                target_path = f"{target_path}/{filename}"
            else:
                try:
                    stat_spec, _ = spec_for("file.stat", {"path": target_path})
                    stat_res = await ops.run(stat_spec)
                    if stat_res.ok and stat_res.data().get("stat", {}).get("is_dir"):
                        target_path = f"{target_path}/{filename}"
                except Exception:
                    pass

            # Move staged file to final target using privileged helper
            # mv is instantaneous (0.001s), atomic, and avoids loading data into bash memory
            try:
                move_spec, _ = spec_for("file.move", {"source": staging_path, "target": target_path})
                res = await ops.run(move_spec)
                res.raise_for_status()
                return JSONResponse({"ok": True, "path": target_path, "uploaded": True, "size": file_size})
            except OpsError as exc:
                if staging_path and os.path.exists(staging_path):
                    try: os.unlink(staging_path)
                    except Exception: pass
                _log.warning("upload failed installing %s: %s (exit: %s)", target_path, exc.message, exc.exit_code)
                raise HTTPException(status_code=400, detail=exc.message or f"Failed writing to {target_path}")
            except Exception as exc:
                if staging_path and os.path.exists(staging_path):
                    try: os.unlink(staging_path)
                    except Exception: pass
                _log.exception("unexpected upload move failure for %s", target_path)
                raise HTTPException(status_code=500, detail=f"Upload move error: {exc}")
        except HTTPException:
            raise
        except Exception as exc:
            if staging_path and os.path.exists(staging_path):
                try: os.unlink(staging_path)
                except Exception: pass
            _log.exception("unexpected upload error for %s", target_path)
            raise HTTPException(status_code=500, detail=f"Upload error: {exc}")

    @router.get("/download")
    async def download_file(path: str = Query(...)):
        spec, _ = spec_for("file.read", {"path": path})
        res = await ops.run(spec)
        res.raise_for_status()
        data = res.data()
        content = data.get("content", "")
        filename = os.path.basename(path)
        return Response(
            content=content.encode("utf-8"),
            media_type="application/octet-stream",
            headers={"Content-Disposition": f'attachment; filename="{filename}"'},
        )

    # ── introspection ─────────────────────────────────────────────────────────

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
                        p.name: {"required": p.required, "secret": p.secret,
                                 "enum": list(p.enum) if p.enum else None,
                                 "pattern": p.pattern, "default": p.default}
                        for p in op.params.values()
                    },
                }
                for name, op in manifest.operations.items()
            },
        }

    return router
