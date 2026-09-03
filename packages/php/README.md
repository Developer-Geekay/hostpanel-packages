# php — HostPanel v3 package

**PHP** — PHP-FPM version discovery, pool lifecycle, and extension management.

```
php/
├── api/         Python — the HTTP surface (FastAPI, 127.0.0.1:9109, user hp-php)
├── ops/         Bash   — the privileged worker (root, via sudoers grant)
├── frontend/    JS     — this package's UI (React, MUI, Vite library build)
├── manifest.json       what portald reads to route, sandbox, and provision
├── service/            systemd unit (hostpanel-phpd.service)
└── sudoers             one grant, one script path
```

Install allocates port 9109, issues a token, creates `hp-php`, installs the ops
script and sudoers, starts the unit, and registers the package with portald.
portald then routes `/cpanelapi/php/*` here. **No portald code changes.**

The ops script sources shared validators from `hpcore`, enforcing validate-then-act
rules identically across all HostPanel packages.

## Operations

| Operation              | Verb               | Mutating | Streams | What it does |
|------------------------|--------------------|----------|---------|--------------|
| `php.list-versions`    | `list-versions`    | No       | No      | List installed PHP-FPM versions with their active/enabled states |
| `php.list-pools`       | `list-pools`       | No       | No      | List FPM pools across all installed versions or filtered by version |
| `php.get-pool`         | `get-pool`         | No       | No      | Read a single pool's limits and socket configuration |
| `php.create-pool`      | `create-pool`      | Yes      | No      | Render and atomically write a new pool config, reloading FPM |
| `php.delete-pool`      | `delete-pool`      | Yes      | No      | Remove a pool config and reload FPM |
| `php.set-pool-version` | `set-pool-version` | Yes      | No      | Move a pool to a different PHP version, preserving its limits |
| `php.set-pool-limits`  | `set-pool-limits`  | Yes      | No      | Rewrite memory and max execution time limits, reloading FPM |
| `php.restart-fpm`      | `restart-fpm`      | Yes      | Yes     | Restart one or all PHP-FPM daemons (streamed SSE output) |
| `php.list-extensions`  | `list-extensions`  | No       | No      | List built-in and dynamic extensions with their enable status |
| `php.toggle-extension` | `toggle-extension` | Yes      | No      | Enable or disable an extension for a specific PHP version |

## 100% Isolation under `/opt/hostpanel`

- **Pool Configuration**: `/opt/hostpanel/etc/php/<version>/fpm/pool.d/<pool>.conf`
- **FastCGI Sockets**: `/opt/hostpanel/run/php/php<version>-fpm-<pool>.sock`
- **Logs**: `/opt/hostpanel/logs/php/`
- **No scattering**: No pool configs or sockets are placed in system `/etc` or `/var`.
