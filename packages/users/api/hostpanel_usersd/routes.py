"""
HTTP surface for the users package.

Each operation gets one route. Every route offers two response modes, chosen by
ordinary content negotiation:

    Accept: application/json        -> JSON, once the operation completes
    Accept: text/event-stream       -> SSE, output frame by frame as it happens

The streaming mode is the point of the architecture: the operator watches
`useradd` run rather than waiting for a spinner to stop.

Content negotiation rather than a `?stream=1` flag, because the flag would have
to survive portald's proxy as a query parameter while `Accept` is already
forwarded as a header — and because "what representation do you want" is exactly
what the header is for. The route, the verb and the argv are identical either
way; only the rendering differs.

MUST NOT: touch the system directly. Every mutation goes through verbs.py into
the bash ops script. A subprocess call in this file is a design error.
"""
from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter, Body, Query, Request
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_usersd import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class CreateUser(BaseModel):
    username: str
    shell: str | None = None
    password: str | None = None


class SetPassword(BaseModel):
    password: str


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
        independently, because it is reachable by anyone who is `hp-users`, not
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
                        # caller would have received. Without it the UI would have
                        # to scrape the log lines to find the result.
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

    # ── read ──────────────────────────────────────────────────────────────────

    @router.get("/users")
    async def list_users():
        return await run_json("user.list", {})

    @router.get("/users/{username}")
    async def get_user(username: str):
        return await run_json("user.get", {"username": username})

    # ── lifecycle ─────────────────────────────────────────────────────────────

    @router.post("/users")
    async def create_user(request: Request, body: CreateUser):
        return await dispatch(request, "user.create", body.model_dump())

    @router.delete("/users/{username}")
    async def delete_user(request: Request, username: str,
                          remove_home: bool = Query(False)):
        # Converted here, at the HTTP boundary, rather than left to verbs.py.
        # Parameters are validated against the manifest before verbs.py ever sees
        # them, and the manifest declares this as the ops script's `0|1` — so a
        # Python bool arriving at validation stringifies to "False" and is
        # rejected as invalid, for a request that was perfectly well formed.
        #
        # Defaults to keeping the home directory: destroying data has to be
        # something the caller asked for.
        return await dispatch(request, "user.delete",
                              {"username": username,
                               "remove_home": "1" if remove_home else "0"})

    # ── state ─────────────────────────────────────────────────────────────────

    @router.put("/users/{username}/password")
    async def set_password(username: str, body: SetPassword):
        return await run_json("user.set-password",
                              {"username": username, "password": body.password})

    @router.put("/users/{username}/lock")
    async def lock_user(username: str):
        return await run_json("user.lock", {"username": username})

    @router.put("/users/{username}/unlock")
    async def unlock_user(username: str):
        return await run_json("user.unlock", {"username": username})

    @router.post("/users/{username}/chown-home")
    async def chown_home(request: Request, username: str,
                         path: str = Body(..., embed=True)):
        return await dispatch(request, "user.chown-home",
                              {"username": username, "path": path})

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
