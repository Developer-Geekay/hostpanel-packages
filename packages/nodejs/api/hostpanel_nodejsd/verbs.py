"""
Operation -> ops-script verb and argv mapping for Node.js package.

The only place that translates an HTTP request into a bash invocation.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"env"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "nodejs.status":          ("status",          ()),
    "nodejs.list-apps":       ("list-apps",       ()),
    "nodejs.get-app":         ("get-app",         ("name",)),
    "nodejs.create-app":      ("create-app",      ("name", "directory", "node_version", "script", "port")),
    "nodejs.start-app":       ("start-app",       ("name",)),
    "nodejs.stop-app":        ("stop-app",        ("name",)),
    "nodejs.restart-app":     ("restart-app",     ("name",)),
    "nodejs.delete-app":      ("delete-app",      ("name",)),
    "nodejs.set-env":         ("set-env",         ("name",)),
    "nodejs.get-env":         ("get-env",         ("name",)),
    "nodejs.get-logs":        ("get-logs",        ("name", "lines", "type")),
    "nodejs.list-runtimes":   ("list-runtimes",   ()),
    "nodejs.install-runtime": ("install-runtime", ("version",)),
    "nodejs.remove-runtime":  ("remove-runtime",  ("version",)),
    "nodejs.deploy-app":      ("deploy-app",      ("name", "command", "custom_cmd")),
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
                f"refusing to build argv: {name!r} is a secret and cannot be "
                f"a positional argument",
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
