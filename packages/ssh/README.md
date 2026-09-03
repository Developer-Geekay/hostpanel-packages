# ssh — HostPanel v3 package

**SSH** — authorized keys, per-user password-authentication policy, active sessions.

```
ssh/
├── api/         Python — the HTTP surface (own process, own port)
├── ops/         Bash   — the privileged work (root, via one sudoers grant)
├── frontend/    JS     — this package's UI, isolated to this package
├── manifest.json       what portald reads to route and provision
├── service/            systemd unit
└── sudoers              one grant, one script path
```

Install allocates a port, issues a token, creates `hp-ssh`, installs the ops
script and sudoers, starts the unit, and registers the package with portald.
portald then routes `/cpanelapi/ssh/*` here. **No portald code changes.**

The ops script sources shared validators from `hpcore`, so the validation rules
are identical across every package.

## Operations

| Operation                | What it does                                                          |
|---------------------------|------------------------------------------------------------------------|
| `ssh.list-keys`            | List a Linux account's `~/.ssh/authorized_keys` entries                |
| `ssh.add-key`               | Validate and append a public key (rejects malformed keys and duplicates) |
| `ssh.remove-key`            | Remove one key by its `SHA256:`/`MD5:` fingerprint                     |
| `ssh.get-password-auth`     | Read this account's password-authentication override, if any           |
| `ssh.set-password-auth`     | Set (or replace) a per-user `PasswordAuthentication yes\|no` override   |
| `ssh.sessions`              | List active sessions (`who`), optionally filtered by username          |

## Design notes

- **Keys are not secret, but they travel on stdin anyway.** A public key is
  long, free-form text with no length limit; per the project brief it goes
  through the same NUL-delimited stdin channel the manifest calls `secret` —
  that flag means "off argv, onto stdin", not "confidential". See
  `api/hostpanel_sshd/verbs.py` and `ops/hp-ssh`'s header comment.
- **Protected accounts are guarded here too.** `guard_protected` (from
  `hpcore/lib/common.sh`) blocks key and password-auth changes to `root`,
  system accounts, and anything holding `sudo`/`admin`/`wheel` — injecting an
  SSH key into a privileged account through the panel would be a direct path
  to root, so the same deny-list used by `packages/users` applies here.
- **The home directory always comes from the account database, never from the
  caller**, and is still re-validated with `resolve_and_recheck` against
  `HP_HOME_ROOT` before anything is written under it — the same defence
  `hp-users`' `chown-home` uses against a home directory that is itself a
  symlink.
- **Password-auth overrides always close their own `Match` block.** Ubuntu's
  `sshd_config` includes `sshd_config.d/*.conf` near the top of the file, so an
  unclosed `Match User` block would silently narrow every directive that
  follows — for every user — to apply only to the one account the snippet
  named. Every snippet this package writes ends with `Match all`. See the
  comment in `ops/hp-ssh`'s `set-password-auth` verb.
- **A rendered snippet is validated with `sshd -t` before being kept.** If the
  config is invalid after the change, the snippet is removed and the operation
  fails with `DEPENDENCY` (20) rather than leaving a broken sshd on reload.

## What is verified and what is not

- `ops/tests/run.sh` — the bash validation surface (arity, username shape,
  deny-list, key-type/fingerprint/enabled shape, and every not-found
  precondition against usernames that provably do not exist) passes
  unprivileged, in dry-run.
- `tests/test_sshd.py` — the API layer against a stand-in ops script:
  authentication, the manifest↔argv mapping, and — the load-bearing test —
  that the key/comment never appear in argv.
- `tests/test_ops_integration.py` — the same API layer against the REAL
  `hp-ssh` script, in dry-run: reserved-account and not-found paths, and every
  validation the script enforces independently of the manifest.
- **Not verified, and not verifiable without a provisioned host:** a
  successful `add-key`/`remove-key`/`set-password-auth` round trip against a
  real, non-protected account; whether `sshd -t` and `systemctl reload ssh`
  behave as designed against a real `sshd`. `guard_protected` refuses every
  account available unprivileged on a developer machine or this project's dev
  VM (either it does not exist, or it is the account running the tests, which
  the deny-list refuses by name on purpose). That gap closes with integration
  testing against a real host, through the browser UI, per this project's
  testing rule — not by patching the server directly.
