# users — HostPanel v3 package

A feature package. Self-contained: its own API, its own operations, its own UI.

```
users/
├── api/         Python — the HTTP surface (own process, own port)
├── ops/         Bash   — the privileged work (root, via one sudoers grant)
├── frontend/    JS     — this package's UI, isolated to this package
├── manifest.json       what portald reads to route and provision
├── service/            systemd unit
└── sudoers             one grant, one script path
```

Install allocates a port, issues a token, creates `hp-users`, installs the ops
script and sudoers, starts the unit, and registers the package with portald.
portald then routes `/cpanelapi/users/*` here. **No portald code changes.**

The ops script sources shared validators from `hpcore`, so the validation rules
are identical across every package.
