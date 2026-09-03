"""
HTTP surface for the php package.
"""
from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_phpd import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


# ── Pydantic Request Models ───────────────────────────────────────────────────

class EngineActionBody(BaseModel):
    action: str
    version: str | None = None


class InstallVersionBody(BaseModel):
    version: str


class SetDefaultVersionBody(BaseModel):
    version: str


class ToggleExtensionBody(BaseModel):
    version: str
    extension: str
    enabled: bool | str = True


class InstallExtensionBody(BaseModel):
    version: str
    extension: str


class InstallSoExtensionBody(BaseModel):
    version: str
    extension: str
    so_content_b64: str
    is_zend: bool | str = False


class SetConfigBody(BaseModel):
    content_b64: str
    target: str | None = "fpm"


class SetDirectivesBody(BaseModel):
    upload_max_filesize: str | None = None
    post_max_size: str | None = None
    memory_limit: str | None = None
    max_execution_time: str | None = None
    max_input_time: str | None = None
    max_input_vars: str | None = None
    timezone: str | None = None
    display_errors: str | None = None
    opcache_enable: str | None = None


class CreatePool(BaseModel):
    pool: str
    version: str
    memory_limit: str | None = "128M"
    max_execution_time: str | None = "30"


class SetPoolVersion(BaseModel):
    version: str


class SetPoolLimits(BaseModel):
    memory_limit: str
    max_execution_time: str


class RestartFpmBody(BaseModel):
    version: str | None = None


def wants_stream(request: Request) -> bool:
    """True if the caller asked for an event stream."""
    accept = request.headers.get("accept", "")
    for part in accept.split(","):
        media = part.split(";", 1)[0].strip().lower()
        if media == "text/event-stream":
            return True
    return False


def build_router(manifest: M.Manifest, ops_script: str, *,
                 use_sudo: bool = True) -> APIRouter:
    """Build the routes."""
    router = APIRouter()

    def spec_for(op: str, params: Mapping[str, Any], *,
                 timeout_ms: int | None = None) -> tuple[ops.OpsSpec, M.OpSpec]:
        """Validate parameters and build the ops invocation."""
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

    async def dispatch(request: Request, op: str, params: Mapping[str, Any]):
        if wants_stream(request):
            return await run_stream(op, params)
        return await run_json(op, params)

    # ── Engine Lifecycle ──────────────────────────────────────────────────────

    @router.get("/status")
    @router.get("/engine/status")
    async def get_engine_status():
        return await run_json("php.engine_status", {})

    @router.post("/engine/install")
    async def install_engine(request: Request):
        return await dispatch(request, "php.engine_install", {})

    @router.post("/engine/uninstall")
    async def uninstall_engine(request: Request):
        return await dispatch(request, "php.engine_uninstall", {})

    @router.post("/engine/action")
    async def engine_action(body: EngineActionBody):
        return await run_json("php.engine_action", {
            "action": body.action,
            "version": body.version,
        })

    # ── Multi-Version Runtimes ────────────────────────────────────────────────

    @router.get("/runtimes")
    @router.get("/php/versions")
    @router.get("/versions")
    async def list_versions():
        return await run_json("php.version_list", {})

    @router.post("/runtimes/install")
    @router.post("/versions/install")
    async def install_version(request: Request, body: InstallVersionBody):
        return await dispatch(request, "php.version_install", {"version": body.version})

    @router.delete("/runtimes/{version}")
    @router.post("/runtimes/{version}/uninstall")
    async def uninstall_version(request: Request, version: str):
        return await dispatch(request, "php.version_uninstall", {"version": version})

    @router.post("/runtimes/default")
    @router.post("/versions/default")
    async def set_default_version(body: SetDefaultVersionBody):
        return await run_json("php.version_set_default", {"version": body.version})

    # ── Extensions ────────────────────────────────────────────────────────────

    @router.get("/extensions")
    @router.get("/php/extensions")
    async def list_extensions(version: str | None = Query(None)):
        params = {"version": version} if version else {}
        return await run_json("php.extension_list", params)

    @router.post("/extensions/toggle")
    @router.post("/php/extensions/toggle")
    async def toggle_extension(body: ToggleExtensionBody):
        enabled_str = "true" if body.enabled in (True, "true", "1", "enable", "enabled") else "false"
        return await run_json("php.extension_toggle", {
            "version": body.version,
            "extension": body.extension,
            "enabled": enabled_str,
        })

    @router.post("/extensions/install")
    async def install_extension(request: Request, body: InstallExtensionBody):
        return await dispatch(request, "php.extension_install", {
            "version": body.version,
            "extension": body.extension,
        })

    @router.post("/extensions/install-pecl")
    async def install_extension_pecl(request: Request, body: InstallExtensionBody):
        return await dispatch(request, "php.extension_install_pecl", {
            "version": body.version,
            "extension": body.extension,
        })

    @router.post("/extensions/install-so")
    async def install_extension_so(body: InstallSoExtensionBody):
        zend_str = "true" if body.is_zend in (True, "true", "1") else "false"
        return await run_json("php.extension_install_so", {
            "version": body.version,
            "extension": body.extension,
            "so_content_b64": body.so_content_b64,
            "is_zend": zend_str,
        })

    @router.delete("/extensions/{version}/{extension}")
    @router.post("/extensions/uninstall")
    async def uninstall_extension(request: Request, version: str, extension: str):
        return await dispatch(request, "php.extension_uninstall", {
            "version": version,
            "extension": extension,
        })

    # ── Configuration & Directives ────────────────────────────────────────────

    @router.get("/config/{version}")
    async def get_config(version: str, target: str = Query("fpm")):
        return await run_json("php.config_get", {"version": version, "target": target})

    @router.post("/config/{version}")
    async def set_config(version: str, body: SetConfigBody):
        return await run_json("php.config_set", {
            "version": version,
            "content_b64": body.content_b64,
            "target": body.target or "fpm",
        })

    @router.get("/directives/{version}")
    async def get_directives(version: str):
        return await run_json("php.directives_get", {"version": version})

    @router.post("/directives/{version}")
    async def set_directives(version: str, body: SetDirectivesBody):
        return await run_json("php.directives_set", {
            "version": version,
            "upload_max_filesize": body.upload_max_filesize,
            "post_max_size": body.post_max_size,
            "memory_limit": body.memory_limit,
            "max_execution_time": body.max_execution_time,
            "max_input_time": body.max_input_time,
            "max_input_vars": body.max_input_vars,
            "timezone": body.timezone,
            "display_errors": body.display_errors,
            "opcache_enable": body.opcache_enable,
        })

    # ── Logs ──────────────────────────────────────────────────────────────────

    @router.get("/logs")
    @router.get("/php/logs")
    async def get_logs(version: str | None = Query(None),
                       type: str = Query("error"),
                       lines: int = Query(50)):
        return await run_json("php.logs_get", {
            "version": version,
            "log_type": type,
            "lines": str(lines),
        })

    # ── Pools ─────────────────────────────────────────────────────────────────

    @router.get("/php/pools")
    @router.get("/pools")
    async def list_pools(version: str | None = Query(None)):
        params = {"version": version} if version else {}
        return await run_json("php.list-pools", params)

    @router.get("/php/pools/{pool}")
    @router.get("/pools/{pool}")
    async def get_pool(pool: str):
        return await run_json("php.get-pool", {"pool": pool})

    @router.post("/php/pools")
    @router.post("/pools")
    async def create_pool(body: CreatePool):
        return await run_json("php.create-pool", {
            "pool": body.pool,
            "version": body.version,
            "memory_limit": body.memory_limit or "128M",
            "max_execution_time": body.max_execution_time or "30",
        })

    @router.delete("/php/pools/{pool}")
    @router.delete("/pools/{pool}")
    async def delete_pool(pool: str):
        return await run_json("php.delete-pool", {"pool": pool})

    @router.put("/php/pools/{pool}/version")
    @router.put("/pools/{pool}/version")
    async def set_pool_version(pool: str, body: SetPoolVersion):
        return await run_json("php.set-pool-version", {
            "pool": pool,
            "version": body.version,
        })

    @router.put("/php/pools/{pool}/limits")
    @router.put("/pools/{pool}/limits")
    async def set_pool_limits(pool: str, body: SetPoolLimits):
        return await run_json("php.set-pool-limits", {
            "pool": pool,
            "memory_limit": body.memory_limit,
            "max_execution_time": body.max_execution_time,
        })

    @router.post("/php/fpm/restart")
    @router.post("/fpm/restart")
    @router.post("/php/fpm/{version}/restart")
    @router.post("/fpm/{version}/restart")
    async def restart_fpm_root(request: Request,
                               version: str | None = None,
                               body: RestartFpmBody | None = None):
        target_ver = version or (body.version if body else None)
        params = {"version": target_ver} if target_ver else {}
        return await dispatch(request, "php.restart-fpm", params)

    # ── Introspection ─────────────────────────────────────────────────────────

    @router.get("/operations")
    async def list_operations():
        """What this package can do, straight from its manifest."""
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

