"""
HTTP surface for the nodejs package.

Each operation gets one or more clean REST endpoints with support for both
standard JSON responses and SSE streaming.
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

from hostpanel_nodejsd import ports, verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class CreateApp(BaseModel):
    name: str
    directory: str
    node_version: str | None = "20"
    script: str | None = "index.js"
    port: int | str | None = 0


class UpdateApp(BaseModel):
    directory: str
    node_version: str | None = "20"
    script: str | None = "index.js"
    port: int | str | None = 0


class SetEnv(BaseModel):
    env: str


class InstallRuntime(BaseModel):
    version: str


class DeployApp(BaseModel):
    command: str | None = "npm-install"
    custom_cmd: str | None = ""


def wants_stream(request: Request) -> bool:
    """True if caller requested text/event-stream."""
    accept = request.headers.get("accept", "")
    for part in accept.split(","):
        media = part.split(";", 1)[0].strip().lower()
        if media == "text/event-stream":
            return True
    return False


def build_router(
    manifest: M.Manifest, ops_script: str, *, use_sudo: bool = True
) -> APIRouter:
    router = APIRouter()

    def spec_for(
        op: str, params: Mapping[str, Any], *, timeout_ms: int | None = None
    ) -> tuple[ops.OpsSpec, M.OpSpec]:
        op_spec = manifest.operations.get(op)
        if op_spec is None:
            raise OpsError(
                Code.INTERNAL, f"operation {op!r} is not declared in the manifest"
            )
        try:
            cleaned = M.validate_params(
                op_spec, {k: v for k, v in params.items() if v is not None}
            )
        except M.ManifestError as exc:
            raise OpsError(Code.VALIDATION, str(exc)) from exc

        verb, argv, secrets = verbs.build(op, cleaned)
        return (
            ops.OpsSpec(
                script=ops_script,
                verb=verb,
                args=argv,
                secrets=secrets,
                timeout_ms=timeout_ms or op_spec.timeout_ms,
                sudo=use_sudo,
            ),
            op_spec,
        )

    async def run_json(
        op: str, params: Mapping[str, Any], *, timeout_ms: int | None = None
    ) -> JSONResponse:
        spec, _ = spec_for(op, params, timeout_ms=timeout_ms)
        result = await ops.run(spec)
        result.raise_for_status()
        return JSONResponse(result.data())

    async def run_stream(
        op: str, params: Mapping[str, Any], *, timeout_ms: int | None = None
    ) -> StreamingResponse:
        spec, _ = spec_for(op, params, timeout_ms=timeout_ms)

        async def events():
            try:
                async for item in ops.stream(spec):
                    if isinstance(item, ops.OpsLine):
                        yield sse.log(item.text, stream=item.stream).encode()
                    else:
                        yield sse.result(
                            ok=item.ok,
                            code=item.code.value,
                            message=""
                            if item.ok
                            else (item.stderr.strip() or "operation failed"),
                            data=item.data() if item.ok else None,
                            exit_code=item.exit_code,
                        ).encode()
            except OpsError as exc:
                yield sse.result(
                    ok=False, code=exc.code.value, message=exc.message
                ).encode()

        return StreamingResponse(events(), headers=dict(SSE_HEADERS))

    async def dispatch(
        request: Request,
        op: str,
        params: Mapping[str, Any],
        *,
        timeout_ms: int | None = None,
    ):
        if wants_stream(request):
            return await run_stream(op, params, timeout_ms=timeout_ms)
        return await run_json(op, params, timeout_ms=timeout_ms)

    # ── Status & Overview ─────────────────────────────────────────────────────

    @router.get("/status")
    async def get_status():
        return await run_json("nodejs.status", {})

    # ── Applications ──────────────────────────────────────────────────────────

    @router.get("/apps")
    async def list_apps():
        return await run_json("nodejs.list-apps", {})

    @router.get("/apps/{name}")
    async def get_app(name: str):
        return await run_json("nodejs.get-app", {"name": name})

    @router.post("/apps")
    @router.post("/apps/create")
    async def create_app(body: CreateApp):
        # Query existing apps to find used ports
        existing_ports: set[int] = set()
        try:
            spec_list, _ = spec_for("nodejs.list-apps", {})
            res = await ops.run(spec_list)
            if res.ok:
                data = res.data()
                for app in data.get("apps", []):
                    if "port" in app and app["port"]:
                        try:
                            existing_ports.add(int(app["port"]))
                        except (ValueError, TypeError):
                            pass
        except Exception:
            _log.debug("could not fetch existing app ports for allocation", exc_info=True)

        allocated_port = ports.allocate_port(body.port, existing_ports)
        params = {
            "name": body.name,
            "directory": body.directory,
            "node_version": body.node_version or "20",
            "script": body.script or "index.js",
            "port": allocated_port,
        }
        return await run_json("nodejs.create-app", params)

    @router.put("/apps/{name}")
    @router.post("/apps/{name}/update")
    async def update_app(name: str, body: UpdateApp):
        params = {
            "name": name,
            "directory": body.directory,
            "node_version": body.node_version or "20",
            "script": body.script or "index.js",
            "port": body.port or 0,
        }
        return await run_json("nodejs.update-app", params)

    @router.post("/apps/{name}/start")
    async def start_app(name: str):
        return await run_json("nodejs.start-app", {"name": name})

    @router.post("/apps/{name}/stop")
    async def stop_app(name: str):
        return await run_json("nodejs.stop-app", {"name": name})

    @router.post("/apps/{name}/restart")
    async def restart_app(name: str):
        return await run_json("nodejs.restart-app", {"name": name})

    @router.delete("/apps/{name}")
    @router.post("/apps/{name}/delete")
    async def delete_app(name: str):
        return await run_json("nodejs.delete-app", {"name": name})

    # ── Environment & Logs ───────────────────────────────────────────────────

    @router.get("/apps/{name}/env")
    async def get_env(name: str):
        return await run_json("nodejs.get-env", {"name": name})

    @router.put("/apps/{name}/env")
    @router.post("/apps/{name}/env")
    async def set_env(name: str, body: SetEnv):
        return await run_json("nodejs.set-env", {"name": name, "env": body.env})

    @router.get("/apps/{name}/logs")
    async def get_logs(
        name: str,
        lines: int = Query(100, ge=1, le=10000),
        type: str = Query("all", pattern="^(all|out|err)$"),
    ):
        return await run_json(
            "nodejs.get-logs", {"name": name, "lines": lines, "type": type}
        )

    # ── Deploy / Build SSE Stream ────────────────────────────────────────────

    @router.post("/apps/{name}/deploy")
    async def deploy_app(request: Request, name: str, body: DeployApp):
        return await dispatch(
            request,
            "nodejs.deploy-app",
            {
                "name": name,
                "command": body.command or "npm-install",
                "custom_cmd": body.custom_cmd or "",
            },
        )

    # ── Node Runtimes ────────────────────────────────────────────────────────

    @router.get("/runtimes")
    async def list_runtimes():
        return await run_json("nodejs.list-runtimes", {})

    @router.post("/runtimes/install")
    async def install_runtime(request: Request, body: InstallRuntime):
        return await dispatch(
            request, "nodejs.install-runtime", {"version": body.version}
        )

    @router.delete("/runtimes/{version}")
    @router.post("/runtimes/remove")
    async def remove_runtime(
        version: str | None = None, body: InstallRuntime | None = None
    ):
        target_ver = version or (body.version if body else None)
        if not target_ver:
            raise OpsError(Code.VALIDATION, "version is required")
        return await run_json("nodejs.remove-runtime", {"version": target_ver})

    # ── Introspection ────────────────────────────────────────────────────────

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
