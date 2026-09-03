"""
hostpanel-phpd — the php package API.

An independent HTTP API owning exactly one domain: PHP-FPM pool lifecycle. It
runs as its own unprivileged system user (`hp-php`) and binds 127.0.0.1 only.

Its entire privilege is one sudoers line:

    hp-php ALL=(root) NOPASSWD: /opt/hostpanel/packages/php/ops/hp-php *

One script. It cannot write to /opt/hostpanel/etc/php/*/fpm/pool.d or restart a php-fpm unit
directly — only through that script's validation.

It holds NO state and never opens the database. Everything it needs arrives as
request parameters.

Run:  python -m hostpanel_phpd
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

from hostpanel_phpd import routes

_log = logging.getLogger(__name__)

#: Default location of this package's manifest, relative to this file:
#: packages/php/api/hostpanel_phpd/main.py -> packages/php/manifest.json
DEFAULT_MANIFEST = Path(__file__).resolve().parents[2] / "manifest.json"


def manifest_path() -> Path:
    """Where to read the manifest from.

    Overridable so the service can run from a source checkout during development
    without the installed layout existing yet.
    """
    return Path(os.environ.get("HP_MANIFEST", str(DEFAULT_MANIFEST)))


def ops_script(manifest: M.Manifest) -> str:
    """The ops script this service invokes.

    The manifest names the INSTALLED path, which is correct in production and
    absent in a checkout. The override exists for development only; it is
    harmless because it decides which script this unprivileged process asks sudo
    to run, and sudoers independently decides which one it is actually allowed
    to run. Pointing this elsewhere gets a denial, not an escalation.
    """
    return os.environ.get("HP_OPS_SCRIPT", manifest.ops_script)


def create_app(manifest: M.Manifest | None = None) -> FastAPI:
    """Build the FastAPI app.

    Every route depends on the service-token check: the loopback port is
    reachable by every local process, so an unauthenticated request must be
    refused before it reaches an operation.
    """
    manifest = manifest or M.load(manifest_path())
    expected = tokenlib.load_from_env()
    script = ops_script(manifest)
    # Development and tests run the ops script directly; production goes through
    # sudo. See `routes.build_router` — this cannot weaken a real host, because
    # sudoers decides what may run as root regardless of what this flag says.
    use_sudo = os.environ.get("HP_OPS_SUDO", "1") != "0"

    app = FastAPI(
        title=f"HostPanel {manifest.label}",
        version=manifest.version,
        docs_url=None,          # no interactive docs on a privileged service
        redoc_url=None,
        openapi_url=None,
        redirect_slashes=False,
    )

    @app.middleware("http")
    async def require_token(request: Request, call_next):
        """Authenticate every request, including ones that match no route.

        Middleware rather than a route dependency, deliberately: a dependency
        protects the routes someone remembered to decorate, and this is the only
        thing standing between a privileged operation and every other local
        process. Middleware cannot be forgotten when a route is added.
        """
        if request.url.path == "/health":
            # Reachability only, no system access, no data. portald probes this
            # to decide `healthy` before it has a reason to send a token.
            return await call_next(request)

        if not tokenlib.verify(request.headers.get(tokenlib.HEADER), expected):
            _log.warning("rejected unauthenticated %s %s from %s",
                         request.method, request.url.path,
                         request.client.host if request.client else "unknown")
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"error": "UNAUTHORIZED",
                         "message": "missing or invalid package token"},
            )
        return await call_next(request)

    @app.exception_handler(OpsError)
    async def ops_error_handler(_request: Request, exc: OpsError):
        return JSONResponse(status_code=exc.http_status, content=exc.to_dict())

    @app.get("/health")
    async def health():
        return {"package": manifest.name, "version": manifest.version, "ok": True}

    if not use_sudo:
        _log.warning("HP_OPS_SUDO=0: invoking %s directly, without sudo. "
                     "Development only.", script)
    app.include_router(routes.build_router(manifest, script, use_sudo=use_sudo))
    return app


def main() -> None:
    """Entrypoint: read port + token from env, bind 127.0.0.1, serve.

    Binds loopback ONLY. Binding 0.0.0.0 would expose privileged operations to
    the network.
    """
    import uvicorn

    logging.basicConfig(
        level=os.environ.get("HP_LOG_LEVEL", "INFO"),
        format="%(asctime)s %(levelname)-7s %(name)s: %(message)s",
    )

    port = int(os.environ.get("HP_PACKAGE_PORT", "9109"))
    host = os.environ.get("HP_PACKAGE_HOST", "127.0.0.1")
    if host not in ("127.0.0.1", "localhost", "::1"):
        # Refusing to start is the safe failure. A privileged operations API
        # reachable from the network is not a degraded mode worth running in.
        raise SystemExit(
            f"HP_PACKAGE_HOST={host!r} is not a loopback address. This service "
            f"exposes privileged operations and must not be reachable off-host."
        )

    _log.info("hostpanel-phpd starting on %s:%d", host, port)
    uvicorn.run(create_app(), host=host, port=port)


if __name__ == "__main__":
    main()
