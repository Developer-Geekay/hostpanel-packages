"""
MongoDB operation -> ops-script verb and argv.
"""
from __future__ import annotations

from typing import Any, Mapping
from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"password", "content", "filter"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "engine.status":        ("engine-status",     ()),
    "engine.start":         ("engine-start",      ()),
    "engine.stop":          ("engine-stop",       ()),
    "engine.restart":       ("engine-restart",    ()),
    "engine.reload":        ("engine-reload",     ()),
    "engine.config_get":    ("engine-config-get", ()),
    "engine.config_set":    ("engine-config-set", ()),
    "engine.logs":          ("engine-logs",       ("lines",)),
    "engine.install":       ("engine-install",    ()),
    "database.list":        ("db-list",           ()),
    "database.create":      ("db-create",         ("name",)),
    "database.drop":        ("db-drop",           ("name",)),
    "database.size":        ("db-size",           ("name",)),
    "database.connections": ("db-connections",    ()),
    "database.collections": ("collection-list",   ("database",)),
    "collection.create":    ("collection-create", ("database", "collection")),
    "collection.drop":      ("collection-drop",   ("database", "collection")),
    "collection.query":     ("collection-query",  ("database", "collection", "limit")),
    "user.list":            ("user-list",         ()),
    "user.create":          ("user-create",       ("username", "database", "roles")),
    "user.drop":            ("user-drop",         ("username", "database")),
    "user.set_password":    ("user-set-password", ("username", "database")),
    "grant.set":            ("grant",             ("username", "database", "roles")),
    "grant.revoke":         ("revoke",            ("username", "database")),
}


def known(op: str) -> bool:
    return op in _ARGV


def operations() -> tuple[str, ...]:
    return tuple(_ARGV)


def _normalise(name: str, value: Any) -> str:
    if isinstance(value, bool):
        return "1" if value else "0"
    return str(value)


def build(op: str, params: Mapping[str, Any]) -> tuple[str, list[str], dict[str, str]]:
    entry = _ARGV.get(op)
    if entry is None:
        raise OpsError(Code.INTERNAL, f"unknown MongoDB operation: {op!r}")

    verb, positional = entry
    argv: list[str] = []
    for name in positional:
        if name not in params:
            continue
        val = params[name]
        if val is not None:
            argv.append(_normalise(name, val))

    secrets: dict[str, str] = {}
    for name in SECRET_PARAMS:
        if name in params and params[name] is not None:
            secrets[name] = str(params[name])

    return verb, argv, secrets
