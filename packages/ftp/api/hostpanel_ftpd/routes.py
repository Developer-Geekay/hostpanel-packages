"""
HTTP surface for the ftp package.

Each operation gets one route. Every route offers two response modes, chosen by
ordinary content negotiation:

    Accept: application/json        -> JSON, once the operation completes
    Accept: text/event-stream       -> SSE, output frame by frame as it happens

The streaming mode is the point of the architecture: the operator watches
`pure-pw useradd` run rather than waiting for a spinner to stop.

MUST NOT: touch pure-ftpd or its passwd file directly. Every mutation goes
through verbs.py into the bash ops script. A subprocess or file write in this
file is a design error.
"""
from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_ftpd import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class CreateAccount(BaseModel):
    username: str
    home: str
    password: str


class SetPassword(BaseModel):
    password: str


class SetHome(BaseModel):
    home: str


class EnableAccount(BaseModel):
    password: str


class SetQuota(BaseModel):
    max_files: int
    max_mb: int


def wants_stream(request: Request) -> bool:
    """True if the caller asked for an event stream.

    Exact token match on the media type. A substring check would treat
    `application/json, text/event-stream;q=0.1` as a stream request even though
    the caller ranked it last.
    """
    accept = request.headers.get("accept", "")
    for part in accept.split(","):
        media = part.split(";", 1)[0].strip().lower()
        if media == "text/event-stream":
            return True
    return False


def build_router(manifest: M.Manifest, ops_script: str, *,
                 use_sudo: bool = True) -> APIRouter:
    """Build the routes.

    `use_sudo=False` exists for development and tests, where the ops script is a
    stand-in run directly. It cannot weaken production: sudoers, not this flag,
    decides what this process may run as root. Turning it off on a real host
    means operations fail with a permission error, not that they bypass anything.
    """
    router = APIRouter()

    def spec_for(op: str, params: Mapping[str, Any], *,
                 timeout_ms: int | None = None) -> tuple[ops.OpsSpec, M.OpSpec]:
        """Validate parameters and build the ops invocation.

        Validation runs against the MANIFEST, not against hand-written checks
        here, so the declared contract and the enforced one cannot drift. It is
        still not the security boundary — the ops script re-validates everything
        independently, because it is reachable by anyone who is `hp-ftp`, not
        only by this process.
        """
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
                        # The terminal frame carries the parsed stdout as `data`,
                        # so a streaming caller ends up with exactly what the JSON
                        # caller would have received.
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

    # ── accounts ──────────────────────────────────────────────────────────────

    @router.get("/accounts")
    async def list_accounts():
        return await run_json("ftp.list", {})

    @router.post("/accounts")
    async def create_account(request: Request, body: CreateAccount):
        return await dispatch(request, "ftp.create", body.model_dump())

    @router.delete("/accounts/{username}")
    async def delete_account(request: Request, username: str):
        return await dispatch(request, "ftp.delete", {"username": username})

    @router.put("/accounts/{username}/password")
    async def set_password(username: str, body: SetPassword):
        return await run_json("ftp.set-password",
                              {"username": username, "password": body.password})

    @router.put("/accounts/{username}/home")
    async def set_home(username: str, body: SetHome):
        return await run_json("ftp.set-home",
                              {"username": username, "home": body.home})

    @router.put("/accounts/{username}/disable")
    async def disable_account(username: str):
        return await run_json("ftp.disable", {"username": username})

    @router.put("/accounts/{username}/enable")
    async def enable_account(username: str, body: EnableAccount):
        return await run_json("ftp.enable",
                              {"username": username, "password": body.password})

    @router.put("/accounts/{username}/quota")
    async def set_quota(username: str, body: SetQuota):
        return await run_json("ftp.set-quota",
                              {"username": username, "max_files": body.max_files,
                               "max_mb": body.max_mb})

    # ── introspection ─────────────────────────────────────────────────────────

    @router.get("/operations")
    async def list_operations():
        """What this package can do, straight from its manifest.

        The UI reads this rather than hardcoding a list, so an operation added to
        the manifest becomes visible without a frontend change.
        """
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
