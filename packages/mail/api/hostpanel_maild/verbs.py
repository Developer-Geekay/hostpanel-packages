"""
Operation -> ops-script verb and argv.

Translates an HTTP request into an invocation of the ops script.
Passes non-secret scalar arguments via argv and secrets via stdin.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

SECRET_PARAMS = frozenset({"password"})

_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "mail.status":           ("status",          ()),
    "mail.list-domains":     ("list-domains",    ()),
    "mail.add-domain":       ("add-domain",      ("domain",)),
    "mail.delete-domain":    ("delete-domain",   ("domain",)),
    "mail.get-dkim":         ("get-dkim",        ("domain",)),
    "mail.list-mailboxes":   ("list-mailboxes",  ()),
    "mail.create-mailbox":   ("create-mailbox",  ("email", "quota_mb")),
    "mail.delete-mailbox":   ("delete-mailbox",  ("email",)),
    "mail.set-password":     ("set-password",    ("email",)),
    "mail.set-quota":        ("set-quota",       ("email", "quota_mb")),
    "mail.list-aliases":     ("list-aliases",    ()),
    "mail.create-alias":     ("create-alias",    ("source", "destination")),
    "mail.delete-alias":     ("delete-alias",    ("source",)),
    "mail.get-queue":        ("get-queue",       ()),
    "mail.flush-queue":      ("flush-queue",     ()),
    "mail.logs":             ("logs",            ("lines",)),
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
                f"refusing to build argv: {name!r} is a secret and cannot be "
                f"a positional argument",
            )
        if name not in params:
            # Check if domain was supplied for list operations
            if op in ("mail.list-mailboxes", "mail.list-aliases") and "domain" in params:
                pass
            else:
                raise OpsError(Code.VALIDATION, f"{op}: missing parameter {name!r}")
        else:
            argv.append(_normalise(name, params[name]))

    if op in ("mail.list-mailboxes", "mail.list-aliases") and "domain" in params and params["domain"]:
        argv.append(_normalise("domain", params["domain"]))

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in SECRET_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
