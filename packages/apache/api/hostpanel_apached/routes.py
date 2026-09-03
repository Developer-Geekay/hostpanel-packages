from typing import Any
from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel
from portald.sdk import manifest as M
from portald.sdk import ops, sse
from hostpanel_apached import verbs

class ConfigBody(BaseModel):
    content: str

class TestConfigBody(BaseModel):
    content: str = ""

class VhostBody(BaseModel):
    domain: str
    content: str = ""

class ModuleBody(BaseModel):
    module: str

def build_router(manifest: M.Manifest, script: str, use_sudo: bool = True) -> APIRouter:
    router = APIRouter()

    def wants_stream(request: Request) -> bool:
        return "text/event-stream" in request.headers.get("accept", "") or request.query_params.get("stream") == "true"

    async def run_op(op: str, params: dict[str, Any]) -> ops.OpsResult:
        verb, argv, secrets = verbs.build(op, params)
        return await ops.run(ops.OpsSpec(script=script, verb=verb, args=argv, secrets=secrets, sudo=use_sudo))

    async def run_json(op: str, params: dict[str, Any]):
        res = await run_op(op, params)
        res.raise_for_status()
        return res.data()

    async def run_stream(op: str, params: dict[str, Any]):
        verb, argv, secrets = verbs.build(op, params)
        spec = ops.OpsSpec(script=script, verb=verb, args=argv, secrets=secrets, sudo=use_sudo)
        async def gen():
            async for item in ops.stream(spec):
                if isinstance(item, ops.OpsLine): yield sse.log(item.text, stream=item.stream).encode()
                elif isinstance(item, ops.OpsResult):
                    yield sse.result(ok=item.ok, code=item.code.value, message=item.stderr if not item.ok else "Completed", data=item.data() if item.ok else None, exit_code=item.exit_code).encode()
        return StreamingResponse(gen(), media_type="text/event-stream")

    @router.get("/engine/status")
    async def get_status(): return await run_json("engine.status", {})

    @router.post("/engine/start")
    async def start_engine(request: Request):
        if wants_stream(request): return await run_stream("engine.start", {})
        return await run_json("engine.start", {})

    @router.post("/engine/stop")
    async def stop_engine(request: Request):
        if wants_stream(request): return await run_stream("engine.stop", {})
        return await run_json("engine.stop", {})

    @router.post("/engine/restart")
    async def restart_engine(request: Request):
        if wants_stream(request): return await run_stream("engine.restart", {})
        return await run_json("engine.restart", {})

    @router.post("/engine/reload")
    async def reload_engine(request: Request):
        if wants_stream(request): return await run_stream("engine.reload", {})
        return await run_json("engine.reload", {})

    @router.post("/engine/test")
    async def test_config(body: TestConfigBody | None = None):
        params = body.model_dump() if body else {}
        return await run_json("engine.test_config", params)

    @router.get("/engine/config")
    async def get_config(): return await run_json("engine.config_get", {})

    @router.post("/engine/config")
    async def set_config(body: ConfigBody, request: Request):
        if wants_stream(request): return await run_stream("engine.config_set", body.model_dump())
        return await run_json("engine.config_set", body.model_dump())

    @router.get("/engine/logs")
    async def get_logs(lines: int = Query(50), log_type: str = Query("error"), domain: str = Query("")):
        return await run_json("engine.logs", {"lines": str(lines), "log_type": log_type, "domain": domain})

    @router.post("/engine/install")
    async def install_engine(): return await run_stream("engine.install", {})

    @router.get("/vhosts")
    async def list_vhosts(): return await run_json("vhost.list", {})

    @router.get("/vhosts/{domain}")
    async def get_vhost(domain: str): return await run_json("vhost.get", {"domain": domain})

    @router.post("/vhosts")
    async def save_vhost(body: VhostBody, request: Request):
        if wants_stream(request): return await run_stream("vhost.set", body.model_dump())
        return await run_json("vhost.set", body.model_dump())

    @router.delete("/vhosts/{domain}")
    async def delete_vhost(domain: str, request: Request):
        if wants_stream(request): return await run_stream("vhost.delete", {"domain": domain})
        return await run_json("vhost.delete", {"domain": domain})

    @router.post("/vhosts/{domain}/enable")
    async def enable_vhost(domain: str): return await run_json("vhost.enable", {"domain": domain})

    @router.post("/vhosts/{domain}/disable")
    async def disable_vhost(domain: str): return await run_json("vhost.disable", {"domain": domain})

    @router.get("/modules")
    async def list_modules(): return await run_json("module.list", {})

    @router.post("/modules/enable")
    async def enable_module(body: ModuleBody, request: Request):
        if wants_stream(request): return await run_stream("module.enable", body.model_dump())
        return await run_json("module.enable", body.model_dump())

    @router.post("/modules/disable")
    async def disable_module(body: ModuleBody, request: Request):
        if wants_stream(request): return await run_stream("module.disable", body.model_dump())
        return await run_json("module.disable", body.model_dump())

    return router
