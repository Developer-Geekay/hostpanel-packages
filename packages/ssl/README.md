# ssl — HostPanel v3 package

**SSL** — Let's Encrypt issuance and commercial cert import

STUB. Structure only; files are generated later.

```
ssl/
├── api/          Python  — HTTP surface, own process/port/Linux user
├── ops/          Bash    — privileged work, root via one sudoers grant,
│                           sources shared validators from hpcore
├── frontend/     JS      — this package's UI, isolated to this package
├── manifest.json         — what portald reads to route, provision and serve
├── service/              — systemd unit
└── sudoers               — one grant, one script path
```

See `packages/users/` for the reference implementation and
`docs/PACKAGE_DEVELOPMENT_GUIDE.md` for the rules.
