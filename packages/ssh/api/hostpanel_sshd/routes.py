"""
HTTP surface for the ssh package.

Every operation here is short (append a line, edit a five-line config snippet,
read `who`), so every route responds with plain JSON once the operation
completes — none is declared `streams: true` in the manifest. Contrast
packages/users, where account creation/deletion stream their output because
`useradd -m`/`userdel -r` are worth watching run. If a future ssh operation
becomes long-running, add SSE the way users/routes.py does: a `run_stream`
helper, an `Accept: text/event-stream` content-negotiation check, and a manifest
`streams: true` — do not bolt it on ad hoc.

MUST NOT: touch the system directly. Every mutation goes through verbs.py into
the bash ops script. A subprocess call in this file is a design error.
"""
from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from portald.sdk import manifest as M
from portald.sdk import ops
from portald.sdk.errors import Code, OpsError

from hostpanel_sshd import verbs

_log = logging.getLogger(__name__)


class AddKey(BaseModel):
    key: str
    comment: str | None = None


class RemoveKey(BaseModel):
    fingerprint: str


class SetPasswordAuth(BaseModel):
    enabled: bool


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
        independently, because it is reachable by anyone who is `hp-ssh`, not
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

    # ── keys ──────────────────────────────────────────────────────────────────

    @router.get("/ssh/{username}/keys")
    async def list_keys(username: str):
        return await run_json("ssh.list-keys", {"username": username})

    @router.post("/ssh/{username}/keys")
    async def add_key(username: str, body: AddKey):
        return await run_json("ssh.add-key",
                              {"username": username, "key": body.key,
                               "comment": body.comment})

    @router.post("/ssh/{username}/keys/remove")
    async def remove_key(username: str, body: RemoveKey):
        # `fingerprint` travels in the body, not the URL path. A standard
        # base64 SHA256 fingerprint routinely contains a literal '/' (base64's
        # own alphabet), and that survives no path-segment encoding scheme: the
        # ASGI server decodes a percent-encoded '%2F' back into '/' before
        # Starlette's router ever sees it, so the request would 404 on
        # legitimate fingerprints instead of reaching validation. A request
        # body has no such ambiguity. Mirrors users' POST /chown-home, which
        # puts its path argument in the body for the same class of reason.
        return await run_json("ssh.remove-key",
                              {"username": username, "fingerprint": body.fingerprint})

    # ── password auth ─────────────────────────────────────────────────────────

    @router.get("/ssh/{username}/password-auth")
    async def get_password_auth(username: str):
        return await run_json("ssh.get-password-auth", {"username": username})

    @router.put("/ssh/{username}/password-auth")
    async def set_password_auth(username: str, body: SetPasswordAuth):
        return await run_json("ssh.set-password-auth",
                              {"username": username,
                               "enabled": "1" if body.enabled else "0"})

    # ── sessions ──────────────────────────────────────────────────────────────

    @router.get("/ssh/sessions")
    async def sessions(username: str | None = Query(None)):
        return await run_json("ssh.sessions",
                              {"username": username} if username else {})

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
