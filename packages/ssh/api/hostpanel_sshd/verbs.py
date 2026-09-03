"""
Operation -> ops-script verb and argv.

The only place that knows how an HTTP request becomes a bash invocation. Keeping
it separate from routes.py means the mapping is testable without a web server,
and reviewable in isolation — which matters, because getting it wrong is how a
public key (or, for `key`/`comment`, just an oversized argument) ends up in argv.

Rules:
  * non-secret, validated scalars -> argv (public in `ps`, and that is accepted)
  * `key` / `comment`             -> the secrets mapping, which becomes stdin —
    not because they are confidential (a public key is not), but because they
    are free text with no length limit and do not belong in argv
  * never build a shell string; argv is always a list

The argv shapes below are the ops script's contract, verbatim:

    list-keys           <username>
    add-key              <username>                [key, comment on stdin]
    remove-key           <username> <fingerprint>
    get-password-auth    <username>
    set-password-auth    <username> <enabled:0|1>
    sessions             [username]
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

#: Parameter names whose values travel on stdin rather than argv, mirrored from
#: the manifest. Held here too because this module decides argv, and the
#: decision must not depend on a file being loaded correctly.
STDIN_PARAMS = frozenset({"key", "comment"})

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    "ssh.list-keys":           ("list-keys",          ("username",)),
    "ssh.add-key":              ("add-key",            ("username",)),
    "ssh.remove-key":           ("remove-key",         ("username", "fingerprint")),
    "ssh.get-password-auth":    ("get-password-auth",  ("username",)),
    "ssh.set-password-auth":    ("set-password-auth",  ("username", "enabled")),
    "ssh.sessions":              ("sessions",           ("username",)),
}

#: Positional parameters that may be OMITTED from argv entirely (rather than
#: sent empty) when absent from the request. Only `sessions`' filter is
#: optional; every other positional parameter is required by its manifest
#: declaration and `build()` treats its absence as a caller error.
OPTIONAL_POSITIONAL: dict[str, frozenset[str]] = {
    "ssh.sessions": frozenset({"username"}),
}


def known(op: str) -> bool:
    return op in _ARGV


def operations() -> tuple[str, ...]:
    return tuple(_ARGV)


def _normalise(name: str, value: Any) -> str:
    """Render one parameter as the ops script expects it.

    `enabled` is the interesting case: the HTTP API takes a JSON boolean
    because that is what a caller would naturally send, while the script takes
    `0|1` because that is what bash compares cheaply. Python's `str(True)` is
    "True", which the script rejects as a validation error — a confusing
    failure for a request that was perfectly well formed. So booleans are
    converted here, once, rather than at each call site.
    """
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
    optional = OPTIONAL_POSITIONAL.get(op, frozenset())

    argv: list[str] = []
    for name in positional:
        if name in STDIN_PARAMS:
            # Unreachable via _ARGV as written, and deliberately kept anyway: it
            # is the check that turns "someone adds a stdin-only param to the
            # positional tuple" from a silent argv leak into an immediate
            # failure.
            raise OpsError(
                Code.INTERNAL,
                f"refusing to build argv: {name!r} travels on stdin and cannot "
                f"be a positional argument",
            )
        if name not in params:
            if name in optional:
                continue
            raise OpsError(Code.VALIDATION, f"{op}: missing parameter {name!r}")
        argv.append(_normalise(name, params[name]))

    secrets = {
        name: str(value)
        for name, value in params.items()
        if name in STDIN_PARAMS and value not in (None, "")
    }

    return verb, argv, secrets
