"""
hostpanel-wireguardd — the WireGuard VPN package API.

An independent HTTP API owning exactly one domain: WireGuard VPN server and peer lifecycle.
Runs as its own unprivileged system user (`hp-wireguard`) and binds 127.0.0.1 only.

Its entire privilege is one sudoers line:
    hp-wireguard ALL=(root) NOPASSWD: /opt/hostpanel/packages/wireguard/ops/hp-wireguard *

100% Isolated: all state, keys, configs and runtime files reside strictly under /opt/hostpanel.
"""
from __future__ import annotations

import logging
import os
from pathlib import Path

from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from portald.sdk import manifest as M
from portald.sdk import token as tokenlib
from portald.sdk.errors import OpsError

from hostpanel_wireguardd import routes

_log = logging.getLogger(__name__)

DEFAULT_MANIFEST = Path(__file__).resolve().parents[2] / "manifest.json"


def manifest_path() -> Path:
    return Path(os.environ.get("HP_MANIFEST", str(DEFAULT_MANIFEST)))


def ops_script(manifest: M.Manifest) -> str:
    return os.environ.get("HP_OPS_SCRIPT", manifest.ops_script)


def create_app(manifest: M.Manifest | None = None) -> FastAPI:
    manifest = manifest or M.load(manifest_path())
    expected = tokenlib.load_from_env()
    script = ops_script(manifest)
    use_sudo = os.environ.get("HP_OPS_SUDO", "1") != "0"

    app = FastAPI(
        title=f"HostPanel {manifest.label}",
        version=manifest.version,
        docs_url=None,
        redoc_url=None,
        openapi_url=None,
        redirect_slashes=False,
    )

    @app.middleware("http")
    async def require_token(request: Request, call_next):
        if request.url.path == "/health":
            return await call_next(request)

        if not tokenlib.verify(request.headers.get(tokenlib.HEADER), expected):
            _log.warning(
                "rejected unauthenticated %s %s from %s",
                request.method,
                request.url.path,
                request.client.host if request.client else "unknown",
            )
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"error": "UNAUTHORIZED", "message": "missing or invalid package token"},
            )
        return await call_next(request)

    @app.exception_handler(OpsError)
    async def ops_error_handler(_request: Request, exc: OpsError):
        return JSONResponse(status_code=exc.http_status, content=exc.to_dict())

    @app.get("/health")
    async def health():
        return {"package": manifest.name, "version": manifest.version, "ok": True}

    if not use_sudo:
        _log.warning("HP_OPS_SUDO=0: invoking %s directly, without sudo. Development only.", script)

    app.include_router(routes.build_router(manifest, script, use_sudo=use_sudo))
    return app


def main() -> None:
    import uvicorn

    logging.basicConfig(
        level=os.environ.get("HP_LOG_LEVEL", "INFO"),
        format="%(asctime)s %(levelname)-7s %(name)s: %(message)s",
    )

    port = int(os.environ.get("HP_PACKAGE_PORT", "9115"))
    host = os.environ.get("HP_PACKAGE_HOST", "127.0.0.1")
    if host not in ("127.0.0.1", "localhost", "::1"):
        raise SystemExit(
            f"HP_PACKAGE_HOST={host!r} is not a loopback address. This service "
            f"exposes privileged WireGuard VPN operations and must not be reachable off-host."
        )

    _log.info("hostpanel-wireguardd starting on %s:%d", host, port)
    uvicorn.run(create_app(), host=host, port=port)


if __name__ == "__main__":
    main()
