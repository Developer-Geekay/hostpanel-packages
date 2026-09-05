"""
hostpanel-storaged — S3 Object Storage package API daemon.

An independent HTTP API owning S3 buckets, object management, and access keys.
It runs as its own unprivileged system user (`hp-storage`).

Also starts the public AWS S3 protocol server on port 9000 (0.0.0.0:9000).
"""
from __future__ import annotations

import asyncio
import contextlib
import logging
import os
from pathlib import Path

from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
import uvicorn

from portald.sdk import manifest as M
from portald.sdk import token as tokenlib
from portald.sdk.errors import OpsError

from hostpanel_storaged import routes
from hostpanel_storaged.db import get_storage_setting, init_storage_tables
from hostpanel_storaged.s3_engine import s3_app

_log = logging.getLogger(__name__)

DEFAULT_MANIFEST = Path(__file__).resolve().parents[2] / "manifest.json"


def manifest_path() -> Path:
    return Path(os.environ.get("HP_MANIFEST", str(DEFAULT_MANIFEST)))


def ops_script(manifest: M.Manifest) -> str:
    return os.environ.get("HP_OPS_SCRIPT", manifest.ops_script)


@contextlib.asynccontextmanager
async def lifespan(app: FastAPI):
    # 1. Initialize SQLite schema
    init_storage_tables()

    # 2. Start background S3 protocol engine on configured port (default 9000)
    s3_task = None
    s3_server = None
    try:
        s3_port = int(get_storage_setting("s3_port", "9000"))
        # In test or constrained environment, HP_DISABLE_S3_SERVER=1 disables background port binding
        if os.environ.get("HP_DISABLE_S3_SERVER") != "1":
            config = uvicorn.Config(
                s3_app,
                host="0.0.0.0",
                port=s3_port,
                log_level="warning",
                access_log=False,
            )
            s3_server = uvicorn.Server(config)
            s3_task = asyncio.create_task(s3_server.serve())
            _log.info("HostPanel S3 Protocol Server running on 0.0.0.0:%d", s3_port)
    except Exception as exc:
        _log.warning("Could not start background S3 protocol server: %s", exc)

    yield

    # Shutdown S3 server
    if s3_server:
        s3_server.should_exit = True
    if s3_task:
        try:
            await asyncio.wait_for(s3_task, timeout=3.0)
        except (asyncio.TimeoutError, asyncio.CancelledError):
            pass


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
        lifespan=lifespan,
    )

    @app.middleware("http")
    async def require_token(request: Request, call_next):
        # Health check and public S3 proxy endpoints bypass token check
        if request.url.path == "/health" or request.url.path.startswith("/s3"):
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
                content={
                    "error": "UNAUTHORIZED",
                    "message": "missing or invalid package token",
                },
            )
        return await call_next(request)

    @app.exception_handler(OpsError)
    async def ops_error_handler(_request: Request, exc: OpsError):
        return JSONResponse(status_code=exc.http_status, content=exc.to_dict())

    @app.get("/health")
    async def health():
        return {"package": manifest.name, "version": manifest.version, "ok": True}

    if not use_sudo:
        _log.warning(
            "HP_OPS_SUDO=0: invoking %s directly, without sudo. Development only.",
            script,
        )

    # Mount UI management routes
    app.include_router(routes.build_router(manifest, script, use_sudo=use_sudo))

    # Mount public S3 router at /s3 as well
    app.mount("/s3", s3_app)

    return app


def main() -> None:
    logging.basicConfig(
        level=os.environ.get("HP_LOG_LEVEL", "INFO"),
        format="%(asctime)s %(levelname)-7s %(name)s: %(message)s",
    )

    port = int(os.environ.get("HP_PACKAGE_PORT", "9114"))
    host = os.environ.get("HP_PACKAGE_HOST", "127.0.0.1")
    if host not in ("127.0.0.1", "localhost", "::1"):
        raise SystemExit(
            f"HP_PACKAGE_HOST={host!r} is not a loopback address. This service "
            f"exposes privileged operations and must not be reachable off-host."
        )

    _log.info("hostpanel-storaged starting on %s:%d", host, port)
    uvicorn.run(create_app(), host=host, port=port)


if __name__ == "__main__":
    main()
