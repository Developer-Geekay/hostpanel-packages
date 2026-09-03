"""
HTTP surface for the storage & backups package.

Each operation maps to a route. Mutating operations support both JSON
and SSE streaming via content negotiation:
    Accept: application/json   -> JSON response when done
    Accept: text/event-stream  -> SSE stream of live logs & result
"""
from __future__ import annotations

import logging
import os
from pathlib import Path
from typing import Any, Mapping

from fastapi import APIRouter, Body, HTTPException, Query, Request, status
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_storaged import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class CreateBucket(BaseModel):
    name: str
    policy: str | None = "private"


class CreateBackup(BaseModel):
    name: str | None = ""
    targets: str | None = "all"
    destination: str | None = "local"
    compression: str | None = "zstd"


class RestoreBackup(BaseModel):
    targets: str | None = "all"


class SetSchedule(BaseModel):
    name: str | None = None
    cron: str
    targets: str | None = "all"
    retention_days: int | str = 7
    destination: str | None = "local"
    enabled: bool | str = True


def wants_stream(request: Request) -> bool:
    """True if caller asked for SSE event stream."""
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
                            message="" if item.ok else (item.stderr.strip() or "operation failed"),
                            data=item.data() if item.ok else None,
                            exit_code=item.exit_code,
                        ).encode()
            except OpsError as exc:
                yield sse.result(ok=False, code=exc.code.value,
                                 message=exc.message).encode()

        return StreamingResponse(events(), headers=dict(SSE_HEADERS))

    async def dispatch(request: Request, op: str, params: Mapping[str, Any]):
        if wants_stream(request):
            return await run_stream(op, params)
        return await run_json(op, params)

    # ── Service metadata ──────────────────────────────────────────────────────

    @router.get("/meta")
    async def meta():
        """This daemon's own identity, as it actually is.

        The UI restated these as literals and showed a loopback port of 9114 in
        six places while provisioning had assigned something else entirely —
        ports come from portald's registry at provision time and change whenever
        a package is reinstalled, so no constant in this repo can be right about
        one.

        The port comes from the environment the unit was started with, which is
        the same value portald routes to. `PackageContext` deliberately withholds
        it from the browser bundle, so the daemon is the one component that can
        answer honestly.
        """
        return {
            "unit": manifest.unit,
            "run_as": manifest.run_as,
            "ops_script": manifest.ops_script,
            "package": manifest.name,
            "version": manifest.version,
            "port": int(os.environ["HP_PACKAGE_PORT"]) if os.environ.get("HP_PACKAGE_PORT") else None,
            "host": os.environ.get("HP_PACKAGE_HOST", "127.0.0.1"),
        }

    # ── Buckets ───────────────────────────────────────────────────────────────

    @router.get("/buckets")
    async def list_buckets():
        return await run_json("storage.list-buckets", {})

    @router.post("/buckets")
    @router.post("/buckets/create")
    async def create_bucket(body: CreateBucket):
        return await run_json("storage.create-bucket", {
            "name": body.name,
            "policy": body.policy or "private",
        })

    @router.delete("/buckets/{name}")
    async def delete_bucket(name: str):
        return await run_json("storage.delete-bucket", {"name": name})

    # ── Backups ───────────────────────────────────────────────────────────────

    @router.get("/backups")
    async def list_backups():
        return await run_json("storage.list-backups", {})

    @router.post("/backups")
    @router.post("/backups/create")
    async def create_backup(request: Request, body: CreateBackup = CreateBackup()):
        params = {
            "name": body.name or "",
            "targets": body.targets or "all",
            "destination": body.destination or "local",
            "compression": body.compression or "zstd",
        }
        return await dispatch(request, "storage.create-backup", params)

    @router.post("/backups/{backup_id}/restore")
    async def restore_backup(request: Request, backup_id: str,
                             body: RestoreBackup = RestoreBackup()):
        params = {
            "backup_id": backup_id,
            "targets": body.targets or "all",
        }
        return await dispatch(request, "storage.restore-backup", params)

    @router.get("/backups/{backup_id}/download")
    async def download_backup(backup_id: str):
        backup_dir = Path(os.environ.get("HP_BACKUP_ROOT", "/opt/hostpanel/data/backups"))
        for ext in ("tar.zst", "tar.gz", "tar"):
            fpath = backup_dir / f"{backup_id}.{ext}"
            if fpath.is_file():
                return FileResponse(
                    path=str(fpath),
                    filename=f"{backup_id}.{ext}",
                    media_type="application/octet-stream",
                )
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"backup archive for {backup_id!r} not found",
        )

    @router.delete("/backups/{backup_id}")
    async def delete_backup(backup_id: str):
        return await run_json("storage.delete-backup", {"backup_id": backup_id})

    # ── Schedules ─────────────────────────────────────────────────────────────

    @router.get("/schedules")
    async def list_schedules():
        return await run_json("storage.list-schedules", {})

    @router.post("/schedules")
    async def create_schedule(body: SetSchedule):
        if not body.name:
            raise OpsError(Code.VALIDATION, "schedule name is required")
        enabled_flag = "1" if body.enabled in (True, "1", "true", "True", 1) else "0"
        params = {
            "name": body.name,
            "cron": body.cron,
            "targets": body.targets or "all",
            "retention_days": str(body.retention_days),
            "destination": body.destination or "local",
            "enabled": enabled_flag,
        }
        return await run_json("storage.set-schedule", params)

    @router.put("/schedules/{name}")
    async def set_schedule(name: str, body: SetSchedule):
        enabled_flag = "1" if body.enabled in (True, "1", "true", "True", 1) else "0"
        params = {
            "name": name,
            "cron": body.cron,
            "targets": body.targets or "all",
            "retention_days": str(body.retention_days),
            "destination": body.destination or "local",
            "enabled": enabled_flag,
        }
        return await run_json("storage.set-schedule", params)

    @router.delete("/schedules/{name}")
    async def delete_schedule(name: str):
        return await run_json("storage.delete-schedule", {"name": name})

    # ── Disk Usage ────────────────────────────────────────────────────────────

    @router.get("/disk-usage")
    async def disk_usage():
        return await run_json("storage.disk-usage", {})

    # ── Introspection ─────────────────────────────────────────────────────────

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
