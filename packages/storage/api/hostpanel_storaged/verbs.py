"""
Operation -> ops-script verb and argv for hostpanel_storaged.
Maps S3 Object Storage manifest operations to root ops script invocations.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset()

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "storage.bucket-create":   ("bucket-create",   ("name",)),
    "storage.bucket-delete":   ("bucket-delete",   ("name",)),
    "storage.storage-init":    ("storage-init",    ()),
    "storage.disk-usage":      ("disk-usage",      ()),
    "storage.service-restart": ("service-restart", ()),
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
        if name not in params:
            raise OpsError(Code.VALIDATION, f"{op}: missing parameter {name!r}")
        argv.append(_normalise(name, params[name]))

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in SECRET_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
