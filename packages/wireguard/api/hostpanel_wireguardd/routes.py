"""
HTTP surface for the WireGuard VPN package.

Each operation gets one route. Operations that stream bash output offer both:
    Accept: application/json   -> JSON upon completion
    Accept: text/event-stream  -> SSE live stream frame by frame
"""
from __future__ import annotations

import logging
import os
from typing import Any, Mapping, Optional

from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse, PlainTextResponse, StreamingResponse
from pydantic import BaseModel, Field

from portald.sdk import manifest as M
from portald.sdk import ops, sse
from portald.sdk.errors import Code, OpsError

from hostpanel_wireguardd import crypto, verbs

_log = logging.getLogger(__name__)

SSE_HEADERS = {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no",
}


class ToggleServer(BaseModel):
    enabled: str | bool


class CreatePeer(BaseModel):
    name: str
    ip: Optional[str] = None
    allowed_ips: Optional[str] = "0.0.0.0/0, ::/0"
    dns: Optional[str] = "1.1.1.1, 8.8.8.8"
    preshared_key: Optional[str] = None


class ImportPeer(BaseModel):
    name: str
    public_key: str
    ip: Optional[str] = None
    allowed_ips: Optional[str] = "0.0.0.0/0, ::/0"
    dns: Optional[str] = "1.1.1.1, 8.8.8.8"
    preshared_key: Optional[str] = None


class TogglePeer(BaseModel):
    enabled: str | bool


class RenamePeer(BaseModel):
    new_name: str


def wants_stream(request: Request) -> bool:
    """True if caller requested text/event-stream."""
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
            raise OpsError(Code.INTERNAL, f"operation {op!r} is not declared in manifest")

        # Normalize booleans in params before validation if enum requires "0"|"1"
        cleaned_params = {}
        for k, v in params.items():
            if v is not None:
                if isinstance(v, bool):
                    cleaned_params[k] = "1" if v else "0"
                else:
                    cleaned_params[k] = v

        try:
            cleaned = M.validate_params(op_spec, cleaned_params)
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

    # ── Service metadata ──────────────────────────────────────────────────────

    @router.get("/meta")
    async def meta():
        """This daemon's own identity, as it actually is.

        The UI used to restate these as literals and displayed a loopback port of
        9115 — copied from the fallback in `main.py` — while provisioning had
        assigned 9105 from the registry. Ports are allocated at provision time, so
        no constant in this repo can be right about one.

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

    # ── Engine Operations ─────────────────────────────────────────────────────
    #
    # The engine is the wg/wg-quick pair bundled in this package. install and
    # uninstall stream, because the operator should watch the checksum verify and
    # the kernel module load rather than wait on a spinner.

    @router.get("/engine/status")
    async def engine_status():
        return await run_json("wireguard.engine-status", {})

    @router.post("/engine/install")
    async def engine_install(request: Request):
        return await dispatch(request, "wireguard.engine-install", {})

    @router.post("/engine/uninstall")
    async def engine_uninstall(request: Request):
        return await dispatch(request, "wireguard.engine-uninstall", {})

    # ── Server Operations ─────────────────────────────────────────────────────

    @router.get("/server/status")
    async def server_status():
        return await run_json("wireguard.server-status", {})

    @router.post("/server/start")
    async def server_start(request: Request):
        return await dispatch(request, "wireguard.server-start", {})

    @router.post("/server/stop")
    async def server_stop(request: Request):
        return await dispatch(request, "wireguard.server-stop", {})

    @router.post("/server/restart")
    async def server_restart(request: Request):
        return await dispatch(request, "wireguard.server-restart", {})

    @router.post("/server/toggle")
    async def server_toggle(request: Request, body: ToggleServer):
        enabled_str = "1" if (body.enabled is True or body.enabled in ("1", "true", "True")) else "0"
        return await dispatch(request, "wireguard.server-toggle", {"enabled": enabled_str})

    @router.get("/server/config")
    async def server_config():
        return await run_json("wireguard.server-config", {})

    @router.get("/server/logs")
    async def server_logs():
        return await run_json("wireguard.server-logs", {})

    # ── Peers Operations ──────────────────────────────────────────────────────

    @router.get("/peers")
    async def list_peers():
        return await run_json("wireguard.list-peers", {})

    @router.post("/peers/create")
    async def create_peer(request: Request, body: CreatePeer):
        params: dict[str, Any] = {
            "name": body.name,
            "allowed_ips": body.allowed_ips or "0.0.0.0/0, ::/0",
            "dns": body.dns or "1.1.1.1, 8.8.8.8",
        }
        if body.ip:
            params["ip"] = body.ip
        if body.preshared_key:
            params["preshared_key"] = body.preshared_key
        return await dispatch(request, "wireguard.create-peer", params)

    @router.post("/peers/import")
    async def import_peer(request: Request, body: ImportPeer):
        params: dict[str, Any] = {
            "name": body.name,
            "public_key": body.public_key,
            "allowed_ips": body.allowed_ips or "0.0.0.0/0, ::/0",
            "dns": body.dns or "1.1.1.1, 8.8.8.8",
        }
        if body.ip:
            params["ip"] = body.ip
        if body.preshared_key:
            params["preshared_key"] = body.preshared_key
        return await dispatch(request, "wireguard.import-peer", params)

    @router.post("/peers/{id}/toggle")
    async def toggle_peer(request: Request, id: str, body: TogglePeer):
        enabled_str = "1" if (body.enabled is True or body.enabled in ("1", "true", "True")) else "0"
        return await dispatch(request, "wireguard.toggle-peer", {"id": id, "enabled": enabled_str})

    @router.post("/peers/{id}/rename")
    async def rename_peer(request: Request, id: str, body: RenamePeer):
        return await dispatch(request, "wireguard.rename-peer", {"id": id, "new_name": body.new_name})

    @router.delete("/peers/{id}")
    async def delete_peer(request: Request, id: str):
        return await dispatch(request, "wireguard.delete-peer", {"id": id})

    @router.get("/peers/{id}/config")
    async def get_peer_config(id: str):
        return await run_json("wireguard.get-peer-config", {"id": id})

    @router.get("/peers/{id}/qrcode")
    async def get_peer_qrcode(id: str):
        return await run_json("wireguard.get-peer-qr", {"id": id})

    @router.post("/peers/generate-keys")
    async def generate_keys():
        """Helper to generate a WireGuard keypair."""
        priv, pub = crypto.generate_keypair()
        psk = crypto.generate_preshared_key()
        return {"private_key": priv, "public_key": pub, "preshared_key": psk}

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
