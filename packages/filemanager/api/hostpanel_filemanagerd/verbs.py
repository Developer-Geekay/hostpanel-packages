"""
Operation -> ops-script verb and argv for filemanager.

The only place that knows how an HTTP request becomes a bash invocation. Keeping
it separate from routes.py means the mapping is testable without a web server.

Rules:
  * non-secret, validated scalars -> argv (public in `ps`, and that is accepted)
  * secrets (file content)        -> the secrets mapping, which becomes stdin
  * never build a shell string; argv is always a list
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"content"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "file.list":     ("file-list",     ("path",)),
    "file.stat":     ("file-stat",     ("path",)),
    "file.read":     ("file-read",     ("path",)),
    "file.write":    ("file-write",    ("path",)),
    "file.mkdir":    ("file-mkdir",    ("path",)),
    "file.delete":   ("file-delete",   ("path",)),
    "file.move":     ("file-move",     ("source", "target")),
    "file.copy":     ("file-copy",     ("source", "target")),
    "file.chmod":    ("file-chmod",    ("path", "mode")),
    "file.chown":    ("file-chown",    ("path", "owner")),
    "file.compress": ("file-compress", ("source_path", "archive_path", "archive_type")),
    "file.extract":  ("file-extract",  ("archive_path", "target_dir")),
}


def known(op: str) -> bool:
    return op in _ARGV


def operations() -> tuple[str, ...]:
    return tuple(_ARGV)


def _normalise(name: str, value: Any) -> str:
    """Render one parameter as the ops script expects it."""
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

    if op == "file.chown" and params.get("group"):
        argv.append(str(params["group"]))

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in SECRET_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
