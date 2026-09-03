from __future__ import annotations
from typing import Any, Mapping
from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"content"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "engine.status":      ("engine-status",     ()),
    "engine.start":       ("engine-start",      ()),
    "engine.stop":        ("engine-stop",       ()),
    "engine.restart":     ("engine-restart",    ()),
    "engine.reload":      ("engine-reload",     ()),
    "engine.test_config": ("engine-test",       ()),
    "engine.config_get":  ("engine-config-get", ()),
    "engine.config_set":  ("engine-config-set", ()),
    "engine.logs":        ("engine-logs",       ("lines", "log_type", "domain")),
    "engine.install":     ("engine-install",    ()),
    "vhost.list":         ("vhost-list",        ()),
    "vhost.get":          ("vhost-get",         ("domain",)),
    "vhost.set":          ("vhost-set",         ("domain",)),
    "vhost.delete":       ("vhost-delete",      ("domain",)),
    "vhost.enable":       ("vhost-enable",      ("domain",)),
    "vhost.disable":      ("vhost-disable",     ("domain",)),
    "module.list":        ("module-list",       ()),
    "module.enable":      ("module-enable",     ("module",)),
    "module.disable":     ("module-disable",    ("module",)),
}

def known(op: str) -> bool: return op in _ARGV

def build(op: str, params: Mapping[str, Any]) -> tuple[str, list[str], dict[str, str]]:
    entry = _ARGV.get(op)
    if entry is None: raise OpsError(Code.INTERNAL, f"unknown Apache operation: {op!r}")
    verb, positional = entry
    argv: list[str] = [str(params[name]) for name in positional if name in params and params[name] is not None]
    secrets: dict[str, str] = {name: str(params[name]) for name in SECRET_PARAMS if name in params and params[name] is not None}
    return verb, argv, secrets
