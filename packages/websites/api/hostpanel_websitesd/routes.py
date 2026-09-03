from __future__ import annotations

import logging
from typing import Any, Mapping

from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

from portald.sdk import manifest as M
from portald.sdk import ops
from portald.sdk.errors import Code, OpsError
from hostpanel_websitesd import verbs

_log = logging.getLogger(__name__)


# ── Pydantic Request Models ───────────────────────────────────────────────────

class VHostCreateRequest(BaseModel):
    domain: str
    aliases: str = ""
    doc_root: str = ""
    mode: str = "hybrid_apache"
    php_version: str = "8.3"
    proxy_target: str = ""
    redirect_target: str = ""
    force_https: bool = False


class VHostUpdateRequest(BaseModel):
    aliases: str = ""
    doc_root: str = ""
    mode: str = "hybrid_apache"
    php_version: str = "8.3"
    proxy_target: str = ""
    redirect_target: str = ""
    force_https: bool = False


class SslSetRequest(BaseModel):
    cert: str = ""
    key: str = ""
    force_https: bool = True
    hsts: bool = False
    http2: bool = True


class SecuritySetRequest(BaseModel):
    block_hidden: bool = True
    hotlink: bool = False
    ip_allow: str = ""
    ip_deny: str = ""
    basic_auth: str = ""


class PhpSetRequest(BaseModel):
    upload_max_filesize: str = "64M"
    post_max_size: str = "64M"
    memory_limit: str = "256M"
    max_execution_time: str = "120"


class HtaccessSetRequest(BaseModel):
    content: str = ""


def register_routes(
    router: APIRouter,
    manifest: M.Manifest,
    ops_script: str,
    use_sudo: bool = True,
) -> None:

    async def _invoke(op_name: str, args: list[str], secrets: dict[str, str] | None = None) -> JSONResponse:
        op = manifest.operations.get(op_name)
        if op is None:
            raise OpsError(code=Code.VERB_NOT_FOUND, message=f"operation {op_name} not in manifest")

        spec = ops.OpsSpec(
            script=ops_script,
            verb=op.verb,
            args=args,
            secrets=secrets or {},
            timeout_ms=op.timeout_ms,
            sudo=use_sudo,
        )
        result = await ops.run(spec)
        result.raise_for_status()
        return JSONResponse(result.data())

    # ── Engine Check ──────────────────────────────────────────────────────────
    @router.get("/engine/check")
    async def engine_check() -> JSONResponse:
        return await _invoke(verbs.ENGINE_CHECK, [])

    # ── VHost CRUD ────────────────────────────────────────────────────────────
    @router.get("/vhosts")
    async def list_vhosts() -> JSONResponse:
        return await _invoke(verbs.VHOST_LIST, [])

    @router.get("/vhosts/{domain}")
    async def get_vhost(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_GET, [domain])

    @router.post("/vhosts")
    async def create_vhost(req: VHostCreateRequest) -> JSONResponse:
        args = [
            req.domain,
            req.aliases,
            req.doc_root,
            req.mode,
            req.php_version,
            req.proxy_target,
            req.redirect_target,
            "true" if req.force_https else "false",
        ]
        return await _invoke(verbs.VHOST_CREATE, args)

    @router.put("/vhosts/{domain}")
    async def update_vhost(domain: str, req: VHostUpdateRequest) -> JSONResponse:
        args = [
            domain,
            req.aliases,
            req.doc_root,
            req.mode,
            req.php_version,
            req.proxy_target,
            req.redirect_target,
            "true" if req.force_https else "false",
        ]
        return await _invoke(verbs.VHOST_UPDATE, args)

    @router.delete("/vhosts/{domain}")
    async def delete_vhost(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_DELETE, [domain])

    @router.get("/vhosts/{domain}/logs")
    async def get_vhost_logs(
        domain: str,
        lines: int = 50,
        log_type: str = "access",
        engine: str = "nginx",
    ) -> JSONResponse:
        return await _invoke(verbs.VHOST_LOGS, [domain, str(lines), log_type, engine])

    # ── SSL Operations ────────────────────────────────────────────────────────
    @router.get("/vhosts/{domain}/ssl")
    async def get_ssl(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_SSL_GET, [domain])

    @router.post("/vhosts/{domain}/ssl")
    async def set_ssl(domain: str, req: SslSetRequest) -> JSONResponse:
        args = [
            domain,
            "true" if req.force_https else "false",
            "true" if req.hsts else "false",
            "true" if req.http2 else "false",
        ]
        secrets = {"cert": req.cert, "key": req.key}
        return await _invoke(verbs.VHOST_SSL_SET, args, secrets)

    @router.post("/vhosts/{domain}/ssl/selfsigned")
    async def generate_selfsigned_ssl(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_SSL_SELFSIGNED, [domain])

    # ── Security Directives ───────────────────────────────────────────────────
    @router.get("/vhosts/{domain}/security")
    async def get_security(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_SECURITY_GET, [domain])

    @router.post("/vhosts/{domain}/security")
    async def set_security(domain: str, req: SecuritySetRequest) -> JSONResponse:
        args = [
            domain,
            "true" if req.block_hidden else "false",
            "true" if req.hotlink else "false",
        ]
        secrets = {
            "ip_allow": req.ip_allow,
            "ip_deny": req.ip_deny,
            "basic_auth": req.basic_auth,
        }
        return await _invoke(verbs.VHOST_SECURITY_SET, args, secrets)

    # ── PHP Settings ──────────────────────────────────────────────────────────
    @router.get("/vhosts/{domain}/php")
    async def get_php(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_PHP_GET, [domain])

    @router.post("/vhosts/{domain}/php")
    async def set_php(domain: str, req: PhpSetRequest) -> JSONResponse:
        args = [
            domain,
            req.upload_max_filesize,
            req.post_max_size,
            req.memory_limit,
            req.max_execution_time,
        ]
        return await _invoke(verbs.VHOST_PHP_SET, args)

    # ── URL Rewrite (.htaccess) ───────────────────────────────────────────────
    @router.get("/vhosts/{domain}/htaccess")
    async def get_htaccess(domain: str) -> JSONResponse:
        return await _invoke(verbs.VHOST_HTACCESS_GET, [domain])

    @router.post("/vhosts/{domain}/htaccess")
    async def set_htaccess(domain: str, req: HtaccessSetRequest) -> JSONResponse:
        secrets = {"content": req.content}
        return await _invoke(verbs.VHOST_HTACCESS_SET, [domain], secrets)
