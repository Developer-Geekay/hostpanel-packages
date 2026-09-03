"""
hostpanel-websitesd — the websites package API.

Runs as unprivileged system user (`hp-websites`) and binds 127.0.0.1 only.
Authenticates all endpoints with X-HostPanel-Token.
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

from hostpanel_websitesd import routes

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
    async def enforce_token(request: Request, call_next):
        if request.url.path in ("/health", "/healthz"):
            return await call_next(request)
        if not tokenlib.verify(request.headers.get(tokenlib.HEADER), expected):
            _log.warning("rejected unauthenticated %s %s", request.method, request.url.path)
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"error": "UNAUTHORIZED", "message": "missing or invalid package token"},
            )
        return await call_next(request)

    @app.exception_handler(OpsError)
    async def ops_error_handler(_request: Request, exc: OpsError):
        return JSONResponse(
            status_code=exc.http_status,
            content={"error": exc.code.name, "message": exc.message, "detail": exc.detail},
        )

    @app.get("/health")
    @app.get("/healthz")
    async def health():
        return {"status": "ok", "package": "websites"}

    from fastapi import APIRouter
    router = APIRouter()
    routes.register_routes(
        router=router,
        manifest=manifest,
        ops_script=script,
        use_sudo=use_sudo,
    )
    app.include_router(router)
    return app
