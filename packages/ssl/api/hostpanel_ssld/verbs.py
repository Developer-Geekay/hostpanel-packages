"""
Operation -> ops-script verb and argv for the SSL / TLS package.

Keeping it separate from routes.py means the mapping is testable without a web server,
and reviewable in isolation — ensuring secrets (cert_pem, key_pem, ca_bundle) never
leak into argv.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

#: Parameter names whose values are secret, mirrored from the manifest.
SECRET_PARAMS = frozenset({"cert_pem", "key_pem", "ca_bundle"})

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "engine.status":          ("engine-status",     ()),
    "engine.install":         ("engine-install",    ()),
    "engine.uninstall":       ("engine-uninstall",  ("mode",)),
    "engine.logs":            ("engine-logs",       ("lines", "log_type")),
    "ssl.list":               ("list",              ()),
    "ssl.get":                ("get",               ("domain",)),
    "ssl.get-config":         ("get",               ("domain",)),
    "ssl.issue-letsencrypt":  ("issue-letsencrypt", ("domain", "email", "challenge_type", "staging", "agree_tos")),
    "ssl.upload-custom":      ("upload-custom",     ("domain",)),
    "ssl.renew":              ("renew",             ("domain",)),
    "ssl.delete":             ("delete",            ("domain",)),
    "ssl.force-https":        ("force-https",       ("domain", "enabled")),
}


def known(op: str) -> bool:
    return op in _ARGV


def operations() -> tuple[str, ...]:
    return tuple(_ARGV)


def _normalise(name: str, value: Any) -> str:
    """Render one parameter as the ops script expects it."""
    if isinstance(value, bool):
        return "1" if value else "0"
    if value is None:
        return ""
    return str(value)


def build(op: str, params: Mapping[str, Any]) -> tuple[str, list[str], dict[str, str]]:
    """Return (verb, argv, secrets) for one operation."""
    if op not in _ARGV:
        raise OpsError(
            Code.VALIDATION,
            f"unknown operation {op!r}; expected one of {', '.join(sorted(_ARGV))}",
        )

    verb, positional = _ARGV[op]

    argv: list[str] = []
    for name in positional:
        if name in SECRET_PARAMS:
            raise OpsError(
                Code.INTERNAL,
                f"refusing to build argv: {name!r} is a secret and cannot be a positional argument",
            )
        val = params.get(name, "")
        argv.append(_normalise(name, val))

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in SECRET_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
