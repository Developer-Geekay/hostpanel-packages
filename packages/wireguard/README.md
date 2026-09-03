# HostPanel v3 — WireGuard VPN Package (`wireguard`)

High-performance kernel WireGuard VPN server and client management package for HostPanel v3.

## Structure

```
packages/wireguard/
├── api/
│   └── hostpanel_wireguardd/
│       ├── __init__.py
│       ├── __main__.py
│       ├── main.py          # FastAPI app factory, token auth, error handling
│       ├── routes.py        # HTTP & SSE streaming endpoints
│       ├── verbs.py         # Ops verb & argv mapping (secrets on stdin)
│       └── crypto.py        # Curve25519/X25519 key generation & PSK helpers
├── bin/                     # Bundled engine — the ONLY binaries in the v3 repo
│   ├── wg                   #   141 KB, aarch64, built for v2 and reused as-is
│   └── wg-quick             #   13.5 KB, upstream bash script
├── ops/
│   ├── hp-wireguard         # Root helper with validate-then-act
│   └── tests/
│       └── run.sh           # Ops negative & dry-run test suite
├── frontend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── dist/
│   │   └── main.js          # Built micro-frontend bundle
│   └── src/
│       ├── index.tsx        # mount/unmount entry point
│       ├── types.ts         # TypeScript domain types & PackageContext
│       ├── kit.tsx          # Presentation kit (Panel, Readout, Dot, LogPane)
│       ├── qr.tsx           # QR Code Canvas generator for mobile scanning
│       └── WireguardPage.tsx# Full WireGuard management dashboard UI
├── tests/
│   ├── test_wireguardd.py   # Comprehensive FastAPI unit test suite
│   └── test_ops_integration.py # Real bash ops dry-run integration suite
├── conftest.py              # Async pytest runner fixture
├── manifest.json            # Package metadata, navigation, sandbox, operations
├── pyproject.toml           # Setuptools build definition
├── service/
│   └── hostpanel-wireguardd.service # Systemd unit definition
└── sudoers                  # NOPASSWD grant for hp-wireguard -> ops/hp-wireguard
```

## Isolation Guarantees (Strict 100% Isolation under `/opt/hostpanel`)

All configuration, keys, runtime sockets, and logs reside strictly under `/opt/hostpanel`:
- **Configuration & Server Keys**: `/opt/hostpanel/etc/wireguard/` (`wg0.conf`, `server_private.key`, `server_public.key`)
- **Client Profiles**: `/opt/hostpanel/etc/wireguard/peers/<id>.conf`, `<id>.json`
- **Runtime State & Sockets**: `/opt/hostpanel/run/wireguard/`
- **Audit & Traffic Logs**: `/opt/hostpanel/logs/wireguard/`
- **No filesystem scattering**: Never writes to system `/etc/wireguard`.

## Service & Privilege Specification

- **Service Port**: allocated by portald's registry at provision time from the
  9100–9199 range and recorded in `/opt/hostpanel/etc/wireguard.env`; it is
  **not** a fixed number. Read it from the registry or `GET /cpanelapi/packages/wireguard`.
  (On the current dev VM it happens to be 9105.)
- **Systemd Unit**: `hostpanel-wireguardd.service`
- **Run-as User**: `hp-wireguard`
- **Root Ops Helper**: `/opt/hostpanel/packages/wireguard/ops/hp-wireguard`
- **VPN Subnet**: `10.8.0.0/24` (Server gateway: `10.8.0.1/24`, Client IP range: `10.8.0.2` - `10.8.0.254`)
- **Default UDP Port**: `51820`

## The engine

WireGuard is two halves, and neither needs a compiler:

| half | where it comes from |
|---|---|
| kernel module | in-tree since Linux 5.6 — already present on the target kernel, only loaded |
| `wg` + `wg-quick` | **bundled in this package** at `bin/`, 155 KB total |

`bin/wg` is the aarch64 binary built for v2 and reused unchanged; `bin/wg-quick`
is upstream's bash script. They are the only binaries committed to the v3 repo —
every other package's runtime is too large to bundle and goes through staging.

`engine-install` verifies both against the sha256 digests pinned in
`ops/hp-wireguard`, installs them `root:root 0755` into
`/opt/hostpanel/runtimes/wireguard/bin/`, writes `VERSION`, and loads the module.
A digest mismatch is a hard refusal that leaves the existing runtime running.
Nothing is ever downloaded.

The ops script resolves `wg` **only** from that prefix — never through `$PATH` —
so the package cannot silently bind to a host `/usr/bin/wg`. If the engine is
absent, operations fail with exit 20 rather than degrading.

### Why this package disables `ProtectKernelModules`

Its data plane *is* a kernel module. `ProtectKernelModules=yes` — the default for
every other package — blocks `modprobe`, and a sudo'd child inherits the unit's
namespace, so the ops script cannot load it either. The interface then never
comes up while every file on disk looks correct. The manifest therefore declares
`"sandbox": { "protect_kernel_modules": false }`. `ProtectSystem=strict` and the
narrow `ReadWritePaths` are unchanged.

## Operations Declared in `manifest.json`

| Operation | Verb | Mutating | Streaming | Audit Action |
|---|---|---|---|---|
| `wireguard.engine-status` | `engine-status` | No | No | `wireguard.engine_status` |
| `wireguard.engine-install` | `engine-install` | Yes | Yes | `wireguard.engine_install` |
| `wireguard.engine-uninstall` | `engine-uninstall` | Yes | Yes | `wireguard.engine_uninstall` |
| `wireguard.server-status` | `server-status` | No | No | `wireguard.server_status` |
| `wireguard.server-start` | `server-start` | Yes | Yes | `wireguard.server_start` |
| `wireguard.server-stop` | `server-stop` | Yes | Yes | `wireguard.server_stop` |
| `wireguard.server-restart` | `server-restart` | Yes | Yes | `wireguard.server_restart` |
| `wireguard.server-toggle` | `server-toggle` | Yes | Yes | `wireguard.server_toggle` |
| `wireguard.server-config` | `server-config` | No | No | `wireguard.server_config` |
| `wireguard.server-logs` | `server-logs` | No | No | `wireguard.server_logs` |
| `wireguard.list-peers` | `list-peers` | No | No | `wireguard.list_peers` |
| `wireguard.create-peer` | `create-peer` | Yes | Yes | `wireguard.create_peer` |
| `wireguard.delete-peer` | `delete-peer` | Yes | Yes | `wireguard.delete_peer` |
| `wireguard.get-peer-config` | `get-peer-config` | No | No | `wireguard.get_peer_config` |
| `wireguard.get-peer-qr` | `get-peer-qr` | No | No | `wireguard.get_peer_qr` |

## Security & Secrets Handling

- Public and private keys are generated via Curve25519/X25519 (`crypto.py` and `hp-wireguard`).
- Sensitive data such as `preshared_key` travels exclusively through the NUL-delimited `stdin` stream (`SECRET_PARAMS = frozenset({"preshared_key"})`), never exposed in `argv` or `/proc/<pid>/cmdline`.
