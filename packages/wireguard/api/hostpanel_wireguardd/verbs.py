"""
Operation -> ops-script verb and argv for WireGuard.

Maps each HTTP operation onto its bash ops invocation.
Separated from routes.py for clean testability and security auditing.

Rules:
  * non-secret scalars -> argv
  * secrets (preshared_key) -> secrets dict (sent via stdin)
  * never build a shell string; argv is always a list
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"preshared_key"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "wireguard.engine-status":    ("engine-status",    ()),
    "wireguard.engine-install":   ("engine-install",   ()),
    "wireguard.engine-uninstall": ("engine-uninstall", ()),
    "wireguard.server-status":   ("server-status",   ()),
    "wireguard.server-start":    ("server-start",    ()),
    "wireguard.server-stop":     ("server-stop",     ()),
    "wireguard.server-restart":  ("server-restart",  ()),
    "wireguard.server-toggle":   ("server-toggle",   ("enabled",)),
    "wireguard.server-config":   ("server-config",   ()),
    "wireguard.set-endpoint":    ("set-endpoint",    ("endpoint",)),
    "wireguard.server-logs":     ("server-logs",     ()),
    "wireguard.list-peers":      ("list-peers",      ()),
    "wireguard.create-peer":     ("create-peer",     ("name", "ip", "allowed_ips", "dns")),
    "wireguard.import-peer":     ("import-peer",     ("name", "public_key", "ip", "allowed_ips", "dns")),
    "wireguard.toggle-peer":     ("toggle-peer",     ("id", "enabled")),
    "wireguard.rename-peer":     ("rename-peer",     ("id", "new_name")),
    "wireguard.delete-peer":     ("delete-peer",     ("id",)),
    "wireguard.get-peer-config": ("get-peer-config", ("id", "endpoint")),
    "wireguard.get-peer-qr":     ("get-peer-qr",     ("id", "endpoint")),
}

# Parameters in _ARGV that can be omitted from the request and defaulted to ""
_OPTIONAL_POSITIONAL: dict[str, set[str]] = {
    "wireguard.create-peer": {"ip", "allowed_ips", "dns"},
    "wireguard.import-peer": {"ip", "allowed_ips", "dns"},
    "wireguard.set-endpoint": {"endpoint"},
    "wireguard.get-peer-config": {"endpoint"},
    "wireguard.get-peer-qr": {"endpoint"},
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
    optional = _OPTIONAL_POSITIONAL.get(op, set())

    argv: list[str] = []
    for name in positional:
        if name in SECRET_PARAMS:
            raise OpsError(
                Code.INTERNAL,
                f"refusing to build argv: {name!r} is a secret and cannot be a positional argument",
            )
        if name not in params:
            if name in optional:
                argv.append("")
            else:
                raise OpsError(Code.VALIDATION, f"{op}: missing parameter {name!r}")
        else:
            argv.append(_normalise(name, params[name]))

    # Trim trailing empty optional arguments so argv is clean
    while argv and argv[-1] == "" and len(argv) > len(positional) - len(optional):
        argv.pop()

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in SECRET_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
