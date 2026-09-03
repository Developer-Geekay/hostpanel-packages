"""
Operation -> ops-script verb and argv.

The only place that knows how an HTTP request becomes a bash invocation. Keeping
it separate from routes.py means the mapping is testable without a web server,
and reviewable in isolation.
"""
from __future__ import annotations

from typing import Any, Mapping

from portald.sdk.errors import Code, OpsError

#: op -> (verb, positional parameter names). Order is the argv order.
_ARGV: dict[str, tuple[str, tuple[str, ...]]] = {
    # Engine Lifecycle
    "php.engine_status":        ("engine-status",         ()),
    "php.engine_install":       ("engine-install",        ()),
    "php.engine_uninstall":     ("engine-uninstall",      ()),
    "php.engine_action":        ("engine-action",         ("action", "version")),

    # Runtimes & Multi-Version
    "php.version_list":         ("version-list",          ()),
    "php.version_install":      ("version-install",       ("version",)),
    "php.version_uninstall":    ("version-uninstall",     ("version",)),
    "php.version_set_default":  ("version-set-default",   ("version",)),

    # Extensions
    "php.extension_list":       ("extension-list",        ("version",)),
    "php.extension_toggle":     ("extension-toggle",      ("version", "extension", "enabled")),
    "php.extension_install":    ("extension-install",     ("version", "extension")),
    "php.extension_install_pecl": ("extension-install-pecl", ("version", "extension")),
    "php.extension_install_so": ("extension-install-so",  ("version", "extension", "so_content_b64", "is_zend")),
    "php.extension_uninstall":  ("extension-uninstall",   ("version", "extension")),

    # Config & Directives
    "php.config_get":           ("config-get",            ("version", "target")),
    "php.config_set":           ("config-set",            ("version", "content_b64", "target")),
    "php.directives_get":       ("directives-get",        ("version",)),
    "php.directives_set":       ("directives-set",        ("version", "upload_max_filesize", "post_max_size", "memory_limit", "max_execution_time", "max_input_time", "max_input_vars", "timezone", "display_errors", "opcache_enable")),

    # Logs
    "php.logs_get":             ("logs-get",              ("version", "log_type", "lines")),

    # Pools & Service
    "php.list-pools":           ("list-pools",            ("version",)),
    "php.get-pool":             ("get-pool",              ("pool",)),
    "php.create-pool":          ("create-pool",           ("pool", "version", "memory_limit", "max_execution_time")),
    "php.delete-pool":          ("delete-pool",           ("pool",)),
    "php.set-pool-version":     ("set-pool-version",      ("pool", "version")),
    "php.set-pool-limits":      ("set-pool-limits",       ("pool", "memory_limit", "max_execution_time")),
    "php.restart-fpm":          ("restart-fpm",           ("version",)),
}

#: Positional parameters that may be OMITTED from argv entirely (rather than
#: sent empty) when absent from the request.
OPTIONAL_POSITIONAL: dict[str, frozenset[str]] = {
    "php.engine_action":        frozenset({"version"}),
    "php.extension_list":       frozenset({"version"}),
    "php.extension_install_so": frozenset({"is_zend"}),
    "php.config_get":           frozenset({"target"}),
    "php.config_set":           frozenset({"target"}),
    "php.directives_set":       frozenset({"upload_max_filesize", "post_max_size", "memory_limit", "max_execution_time", "max_input_time", "max_input_vars", "timezone", "display_errors", "opcache_enable"}),
    "php.logs_get":             frozenset({"version", "log_type", "lines"}),
    "php.list-pools":           frozenset({"version"}),
    "php.restart-fpm":          frozenset({"version"}),
}


def known(op: str) -> bool:
    return op in _ARGV


def operations() -> tuple[str, ...]:
    return tuple(_ARGV)


def build(op: str, params: Mapping[str, Any]) -> tuple[str, list[str], dict[str, str]]:
    """Return (verb, argv, secrets) for one operation."""
    if op not in _ARGV:
        raise OpsError(
            Code.VALIDATION,
            f"unknown operation {op!r}; expected one of {', '.join(sorted(_ARGV))}",
        )

    verb, positional = _ARGV[op]
    optional = OPTIONAL_POSITIONAL.get(op, frozenset())

    argv: list[str] = []
    for name in positional:
        if name not in params or params[name] is None:
            if name in optional:
                continue
            raise OpsError(Code.VALIDATION, f"{op}: missing parameter {name!r}")
        argv.append(str(params[name]))

    return verb, argv, {}

