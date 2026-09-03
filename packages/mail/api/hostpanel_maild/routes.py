"""
HTTP surface for the mail package (Postfix & Dovecot).

Each operation gets an HTTP route supporting JSON and Server-Sent Events (SSE).
"""
from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel, Field

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_maild import verbs
from hostpanel_maild.dkim import compute_dns_records

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class AddDomain(BaseModel):
    domain: str


class CreateMailbox(BaseModel):
    email: str
    password: str
    quota_mb: int = Field(default=1024)


class SetPassword(BaseModel):
    password: str


class SetQuota(BaseModel):
    quota_mb: int


class CreateAlias(BaseModel):
    source: str
    destination: str


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

    async def dispatch(request: Request, op: str, params: Mapping[str, Any]):
        if wants_stream(request):
            return await run_stream(op, params)
        return await run_json(op, params)

    # ── Status ────────────────────────────────────────────────────────────────

    @router.get("/status")
    async def get_status():
        return await run_json("mail.status", {})

    # ── Domains ───────────────────────────────────────────────────────────────

    @router.get("/domains")
    async def list_domains():
        return await run_json("mail.list-domains", {})

    @router.post("/domains")
    async def add_domain(request: Request, body: AddDomain):
        return await dispatch(request, "mail.add-domain", body.model_dump())

    @router.post("/domains/add")
    async def add_domain_alias(request: Request, body: AddDomain):
        return await dispatch(request, "mail.add-domain", body.model_dump())

    @router.delete("/domains/{domain}")
    async def delete_domain(request: Request, domain: str):
        return await dispatch(request, "mail.delete-domain", {"domain": domain})

    @router.get("/domains/{domain}/dkim")
    async def get_domain_dkim(domain: str):
        return await run_json("mail.get-dkim", {"domain": domain})

    # ── Mailboxes ─────────────────────────────────────────────────────────────

    @router.get("/mailboxes")
    async def list_mailboxes(domain: str | None = Query(default=None)):
        params = {"domain": domain} if domain else {}
        return await run_json("mail.list-mailboxes", params)

    @router.post("/mailboxes")
    async def create_mailbox(request: Request, body: CreateMailbox):
        return await dispatch(request, "mail.create-mailbox", body.model_dump())

    @router.post("/mailboxes/create")
    async def create_mailbox_alias(request: Request, body: CreateMailbox):
        return await dispatch(request, "mail.create-mailbox", body.model_dump())

    @router.delete("/mailboxes/{email}")
    async def delete_mailbox(request: Request, email: str):
        return await dispatch(request, "mail.delete-mailbox", {"email": email})

    @router.put("/mailboxes/{email}/password")
    async def set_password(email: str, body: SetPassword):
        return await run_json("mail.set-password",
                              {"email": email, "password": body.password})

    @router.put("/mailboxes/{email}/quota")
    async def set_quota(email: str, body: SetQuota):
        return await run_json("mail.set-quota",
                              {"email": email, "quota_mb": body.quota_mb})

    # ── Aliases ───────────────────────────────────────────────────────────────

    @router.get("/aliases")
    async def list_aliases(domain: str | None = Query(default=None)):
        params = {"domain": domain} if domain else {}
        return await run_json("mail.list-aliases", params)

    @router.post("/aliases")
    async def create_alias(request: Request, body: CreateAlias):
        return await dispatch(request, "mail.create-alias", body.model_dump())

    @router.post("/aliases/create")
    async def create_alias_alias(request: Request, body: CreateAlias):
        return await dispatch(request, "mail.create-alias", body.model_dump())

    @router.delete("/aliases/{source:path}")
    async def delete_alias(request: Request, source: str):
        return await dispatch(request, "mail.delete-alias", {"source": source})

    # ── Queue ─────────────────────────────────────────────────────────────────

    @router.get("/queue")
    async def get_queue():
        return await run_json("mail.get-queue", {})

    @router.post("/queue/flush")
    async def flush_queue(request: Request):
        return await dispatch(request, "mail.flush-queue", {})

    # ── Logs ──────────────────────────────────────────────────────────────────

    @router.get("/logs")
    async def get_logs(lines: int = Query(default=50)):
        return await run_json("mail.logs", {"lines": lines})

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
