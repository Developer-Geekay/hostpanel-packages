"""
Operation -> ops-script verb and argv for hostpanel_storaged.

The only place that knows how an HTTP request becomes a bash invocation.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset()

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "storage.list-buckets":    ("list-buckets",    ()),
    "storage.create-bucket":   ("create-bucket",   ("name", "policy")),
    "storage.delete-bucket":   ("delete-bucket",   ("name",)),
    "storage.list-backups":    ("list-backups",    ()),
    "storage.create-backup":   ("create-backup",   ("name", "targets", "destination", "compression")),
    "storage.restore-backup":  ("restore-backup",  ("backup_id", "targets")),
    "storage.delete-backup":   ("delete-backup",   ("backup_id",)),
    "storage.list-schedules":  ("list-schedules",  ()),
    "storage.set-schedule":    ("set-schedule",    ("name", "cron", "targets", "retention_days", "destination", "enabled")),
    "storage.delete-schedule": ("delete-schedule", ("name",)),
    "storage.disk-usage":      ("disk-usage",      ()),
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
