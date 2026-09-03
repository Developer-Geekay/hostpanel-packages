"""
HTTP routes for hostpanel-mysqld.
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
from hostpanel_mysqld import verbs

_log = logging.getLogger(__name__)


class CreateDatabase(BaseModel):
    name: str


class CreateDbUser(BaseModel):
    username: str
    password: str
    host: str = "%"


class SetDbPassword(BaseModel):
    password: str
    host: str = "%"


class GrantBody(BaseModel):
    username: str
    database: str
    privileges: str = "ALL PRIVILEGES"
    host: str = "%"


class RevokeBody(BaseModel):
    username: str
    database: str
    host: str = "%"


class EngineConfigBody(BaseModel):
    content: str


class QueryBody(BaseModel):
    query: str


def wants_stream(request: Request) -> bool:
    accept = request.headers.get("accept", "")
    return "text/event-stream" in accept or request.query_params.get("stream") == "true"


def build_router(manifest: M.Manifest, ops_script: str, *, use_sudo: bool = True) -> APIRouter:
    router = APIRouter()

    def spec_for(op: str, params: Mapping[str, Any], *, timeout_ms: int | None = None) -> tuple[ops.OpsSpec, M.OpSpec]:
        op_spec = manifest.operations.get(op)
        if op_spec is None:
            raise OpsError(Code.INTERNAL, f"operation {op!r} is not declared in the manifest")
        try:
            cleaned = M.validate_params(op_spec, {k: v for k, v in params.items() if v is not None})
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
                yield sse.result(ok=False, code=exc.code.value, message=exc.message).encode()

        return StreamingResponse(
            events(),
            media_type="text/event-stream",
            headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
        )

    # Routes
    @router.get("/databases")
    async def list_databases():
        return await run_json("database.list", {})

    @router.post("/databases")
    async def create_database(body: CreateDatabase, request: Request):
        if wants_stream(request):
            return await run_stream("database.create", body.model_dump())
        return await run_json("database.create", body.model_dump())

    @router.delete("/databases/{name}")
    async def drop_database(name: str, request: Request):
        if wants_stream(request):
            return await run_stream("database.drop", {"name": name})
        return await run_json("database.drop", {"name": name})

    @router.get("/databases/{name}/size")
    async def get_database_size(name: str):
        return await run_json("database.size", {"name": name})

    @router.get("/databases/{name}/tables")
    async def get_database_tables(name: str):
        return await run_json("database.tables", {"database": name})

    @router.post("/databases/{name}/query")
    async def execute_database_query(name: str, body: QueryBody):
        return await run_json("database.query", {"database": name, "query": body.query})

    @router.get("/users")
    async def list_users():
        return await run_json("user.list", {})

    @router.post("/users")
    async def create_user(body: CreateDbUser, request: Request):
        if wants_stream(request):
            return await run_stream("user.create", body.model_dump())
        return await run_json("user.create", body.model_dump())

    @router.delete("/users/{username}")
    async def drop_user(username: str, host: str = Query("%"), request: Request = None):
        params = {"username": username, "host": host}
        if request and wants_stream(request):
            return await run_stream("user.drop", params)
        return await run_json("user.drop", params)

    @router.post("/users/{username}/password")
    async def set_user_password(username: str, body: SetDbPassword, request: Request):
        params = {"username": username, "password": body.password, "host": body.host}
        if wants_stream(request):
            return await run_stream("user.set_password", params)
        return await run_json("user.set_password", params)

    @router.post("/grants")
    async def set_grant(body: GrantBody, request: Request):
        if wants_stream(request):
            return await run_stream("grant.set", body.model_dump())
        return await run_json("grant.set", body.model_dump())

    @router.post("/grants/revoke")
    async def revoke_grant(body: RevokeBody, request: Request):
        if wants_stream(request):
            return await run_stream("grant.revoke", body.model_dump())
        return await run_json("grant.revoke", body.model_dump())

    @router.get("/engine/status")
    async def get_engine_status():
        return await run_json("engine.status", {})

    @router.post("/engine/start")
    async def start_engine(request: Request):
        if wants_stream(request):
            return await run_stream("engine.start", {})
        return await run_json("engine.start", {})

    @router.post("/engine/stop")
    async def stop_engine(request: Request):
        if wants_stream(request):
            return await run_stream("engine.stop", {})
        return await run_json("engine.stop", {})

    @router.post("/engine/restart")
    async def restart_engine(request: Request):
        if wants_stream(request):
            return await run_stream("engine.restart", {})
        return await run_json("engine.restart", {})

    @router.post("/engine/reload")
    async def reload_engine(request: Request):
        if wants_stream(request):
            return await run_stream("engine.reload", {})
        return await run_json("engine.reload", {})

    @router.get("/engine/config")
    async def get_engine_config():
        return await run_json("engine.config_get", {})

    @router.post("/engine/config")
    async def set_engine_config(body: EngineConfigBody, request: Request):
        if wants_stream(request):
            return await run_stream("engine.config_set", body.model_dump())
        return await run_json("engine.config_set", body.model_dump())

    @router.get("/engine/logs")
    async def get_engine_logs(lines: int = Query(50)):
        return await run_json("engine.logs", {"lines": str(lines)})

    @router.post("/engine/install")
    async def install_engine(request: Request):
        return await run_stream("engine.install", {})

    return router
