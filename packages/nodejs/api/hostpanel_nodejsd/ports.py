"""
Reverse proxy port allocator for Node.js applications.

Allocates loopback ports in the range 31000–31999.
"""
from __future__ import annotations

from typing import Iterable, Set

from portald.sdk.errors import Code, OpsError

PORT_RANGE_START = 31000
PORT_RANGE_END = 31999


def allocate_port(
    requested: int | str | None = None,
    used_ports: Iterable[int] | None = None,
) -> int:
    """Allocate an application port.

    If a specific port is requested (> 0), validate that it's in the valid
    range (1024-65535) and not already in use.
    If 0 or None, allocate the lowest available port in range 31000-31999.
    """
    in_use: Set[int] = set(used_ports or ())

    if requested is not None:
        try:
            req_port = int(requested)
        except (ValueError, TypeError) as exc:
            raise OpsError(Code.VALIDATION, f"Invalid port: {requested!r}") from exc

        if req_port != 0:
            if req_port < 1024 or req_port > 65535:
                raise OpsError(
                    Code.VALIDATION,
                    f"Port {req_port} is out of allowed range (1024-65535)",
                )
            if req_port in in_use:
                raise OpsError(
                    Code.CONFLICT,
                    f"Port {req_port} is already allocated to another application",
                )
            return req_port

    for port in range(PORT_RANGE_START, PORT_RANGE_END + 1):
        if port not in in_use:
            return port

    raise OpsError(
        Code.CONFLICT,
        f"No available ports in the range {PORT_RANGE_START}–{PORT_RANGE_END}",
    )
