"""
Operation -> ops-script verb and argv.

The only place that knows how an HTTP request becomes a bash invocation. Keeping
it separate from routes.py means the mapping is testable without a web server,
and reviewable in isolation — which matters, because getting it wrong is how an
FTP password ends up in argv.

Rules:
  * non-secret, validated scalars -> argv (public in `ps`, and that is accepted)
  * secrets                       -> the secrets mapping, which becomes stdin
  * never build a shell string; argv is always a list

The argv shapes below are the ops script's contract, verbatim:

    list
    create        <username> <home>        [password on stdin]
    delete        <username>
    set-password  <username>               [password on stdin]
    set-home      <username> <home>
    disable       <username>
    enable        <username>               [password on stdin]
    set-quota     <username> <max-files> <max-mb>
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

#: Parameter names whose values are secret, mirrored from the manifest. Held here
#: too because this module decides argv, and the decision must not depend on a
#: file being loaded correctly — a manifest that failed to parse must not be able
#: to silently downgrade a password into an ordinary argument.
SECRET_PARAMS = frozenset({"password"})

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "ftp.list":          ("list",          ()),
    "ftp.create":        ("create",        ("username", "home")),
    "ftp.delete":        ("delete",        ("username",)),
    "ftp.set-password":  ("set-password",  ("username",)),
    "ftp.set-home":      ("set-home",      ("username", "home")),
    "ftp.disable":       ("disable",       ("username",)),
    "ftp.enable":        ("enable",        ("username",)),
    "ftp.set-quota":     ("set-quota",     ("username", "max_files", "max_mb")),
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
    """Return (verb, argv, secrets) for one operation.

    Raises for an unknown op rather than falling through — an operation this
    service does not implement must never reach the ops script.
    """
    if op not in _ARGV:
        raise OpsError(
            Code.VALIDATION,
            f"unknown operation {op!r}; expected one of {', '.join(sorted(_ARGV))}",
        )

    verb, positional = _ARGV[op]

    argv: list[str] = []
    for name in positional:
        if name in SECRET_PARAMS:
            # Unreachable via _ARGV as written, and deliberately kept anyway: it
            # is the check that turns "someone adds a secret to the positional
            # tuple" from a silent password leak into an immediate failure.
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
