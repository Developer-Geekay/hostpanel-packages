"""
HTTP surface for the SSL / TLS package.

Each operation gets one route. Every mutating/long-running route offers two response modes,
chosen by content negotiation:
    Accept: application/json        -> JSON, once the operation completes
    Accept: text/event-stream       -> SSE, output frame by frame as it happens
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

from hostpanel_ssld import verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class IssueLetsEncrypt(BaseModel):
    domain: str
    email: str | None = None
    challenge_type: str = "http-01"
    staging: bool = False
    agree_tos: bool = True


class UploadCustomCert(BaseModel):
    domain: str
    cert_pem: str
    key_pem: str
    ca_bundle: str | None = None


class RenewCert(BaseModel):
    domain: str | None = None


class ForceHttps(BaseModel):
    enabled: bool = True


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
    router = APIRouter()

    def spec_for(op: str, params: Mapping[str, Any], *,
                 timeout_ms: int | None = None) -> tuple[ops.OpsSpec, M.OpSpec]:
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

        return StreamingResponse(events(), headers=dict(SSE_HEADERS))

    async def dispatch(request: Request, op: str, params: Mapping[str, Any]):
        if wants_stream(request):
            return await run_stream(op, params)
        return await run_json(op, params)

    # ── Certificates Lifecycle & Management ────────────────────────────────────

    @router.get("/certs")
    async def list_certificates():
        """List all certificates installed and managed under /opt/hostpanel/etc/ssl."""
        return await run_json("ssl.list", {})

    @router.get("/certs/{domain}")
    async def get_certificate(domain: str):
        """Get details, expiration, and configuration for a specific domain certificate."""
        return await run_json("ssl.get", {"domain": domain})

    @router.post("/certs/issue")
    async def issue_letsencrypt(request: Request, body: IssueLetsEncrypt):
        """Issue or request a new certificate from Let's Encrypt."""
        params = {
            "domain": body.domain,
            "email": body.email,
            "challenge_type": body.challenge_type,
            "staging": "1" if body.staging else "0",
            "agree_tos": "1" if body.agree_tos else "0",
        }
        return await dispatch(request, "ssl.issue-letsencrypt", params)

    @router.post("/certs/custom")
    async def upload_custom(request: Request, body: UploadCustomCert):
        """Upload and install a custom SSL certificate, private key, and optional CA bundle."""
        params = {
            "domain": body.domain,
            "cert_pem": body.cert_pem,
            "key_pem": body.key_pem,
            "ca_bundle": body.ca_bundle or "",
        }
        return await dispatch(request, "ssl.upload-custom", params)

    @router.post("/certs/renew")
    async def renew_certificates(request: Request, body: RenewCert | None = None):
        """Renew a specific certificate or all expiring certificates."""
        params = {"domain": body.domain} if (body and body.domain) else {}
        return await dispatch(request, "ssl.renew", params)

    @router.post("/certs/{domain}/renew")
    async def renew_single_certificate(request: Request, domain: str):
        """Renew a certificate for a single domain."""
        return await dispatch(request, "ssl.renew", {"domain": domain})

    @router.post("/certs/{domain}/force-https")
    async def toggle_force_https(request: Request, domain: str, body: ForceHttps | None = None):
        """Enable or disable force HTTPS redirect for a domain."""
        enabled = body.enabled if body is not None else True
        return await dispatch(request, "ssl.force-https", {
            "domain": domain,
            "enabled": "1" if enabled else "0",
        })

    @router.delete("/certs/{domain}")
    async def delete_certificate(request: Request, domain: str):
        """Delete an installed certificate, private key, and metadata for a domain."""
        return await dispatch(request, "ssl.delete", {"domain": domain})

    # ── Engine Status & Logs ──────────────────────────────────────────────────

    @router.get("/engine/status")
    async def get_engine_status():
        """Retrieve daemon status, acme cron state, active cert count, and isolation paths."""
        return await run_json("engine.status", {})

    @router.get("/engine/logs")
    async def get_engine_logs(lines: int = Query(50), log_type: str = Query("acme")):
        """Fetch logs from /opt/hostpanel/logs/ssl/."""
        return await run_json("engine.logs", {"lines": lines, "log_type": log_type})

    # ── Operations Introspection ──────────────────────────────────────────────

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
