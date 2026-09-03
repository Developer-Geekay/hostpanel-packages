# ftp — HostPanel v3 package

**FTP Accounts** — pure-ftpd virtual users: list/create/delete accounts, set a
password, set/change the home directory, enable/disable an account, set a
quota.

```
ftp/
├── api/         Python — the HTTP surface (own process, own port)
├── ops/         Bash   — the privileged work (root, via one sudoers grant)
├── frontend/    JS     — this package's UI, isolated to this package
├── manifest.json       what portald reads to route and provision
├── service/            systemd unit
└── sudoers             one grant, one script path
```

Install allocates a port, issues a token, creates `hp-ftp`, installs the ops
script and sudoers, starts the unit, and registers the package with portald.
portald then routes `/cpanelapi/ftp/*` here. **No portald code changes.**

## Virtual users, not Linux accounts

FTP accounts are pure-ftpd's own **virtual** users, managed through `pure-pw`
against a PureDB passwd file — they are not real Linux accounts and this
package never calls `useradd`/`userdel`. Every virtual account is mapped to
ONE shared system uid/gid (`HP_FTP_SYS_USER` / `HP_FTP_SYS_GROUP`, default
`ftpuser`/`ftpgroup`) for filesystem permissions — the standard pattern most
shared-hosting panels use. Provisioning that system account is out of scope
for this package (and for this dev-only pass); `ftp.create` fails closed with
`DEPENDENCY` (20) if it is missing, which is exactly what happens on the dev
VM this was built and tested against, since neither pure-ftpd nor that system
account exists there.

An FTP home directory must be confined below a configured root
(`HP_FTP_ROOT`, default `/home`). Path handling follows the same
reject-`..`-then-prefix-then-`realpath`-then-**re-check**-the-resolved-path
sequence as `hp-users`' `chown-home`, which is what defeats a symlink planted
inside the allowed root.

## Enable/disable, honestly

`pure-pw` has no native "disable this account" flag, and this package does
not invent a fake one:

- **disable** replaces the account's password with a long random value the
  operator never sees — a real auth-level lock, not a bluff — and marks the
  account's GECOS field with the literal string `HP-DISABLED` so `list` can
  report status without HostPanel keeping any state of its own. The marker
  lives on the resource itself (pure-ftpd's own passwd file), not in a
  separate database.
- **enable** requires a **new** password from the operator. The random
  lockout password from `disable` is never stored anywhere — this package
  holds no state — so there is no "previous" password to restore. The
  frontend's "enable" action is honest about this: it opens the same
  password-entry form as a reset, not a one-click toggle.

## What is and is not verified

`ops/tests/run.sh` passes 41 negative-path assertions on the VM covering
arity, identifier shape, the reserved-name deny-list, path confinement
(including a symlink-escape attempt), quota shape, and the secrets-on-stdin
requirement — all of which resolve before the script ever needs `pure-pw` to
exist, so the suite runs without pure-ftpd installed.

Neither `pure-ftpd` nor `pure-pw` is installed on the dev VM this was built
against, so:

- The exact `pure-pw` flags this script uses (`useradd`/`usermod`/`userdel`
  with `-f`/`-u`/`-g`/`-d`/`-c`/`-n`/`-N`, plus `mkdb` and `show`) are the
  ones most stably documented across pure-ftpd's history, but they are **not
  verified against a live binary**. Confirm them with `pure-pw --help` /
  `man pure-pw` on the actual target host before trusting this in production.
- `tests/test_ops_integration.py` runs the real script in `HP_OPS_DRYRUN=1`
  to prove the API and the script agree on argv shape end to end, and
  confirms `create` fails closed (DEPENDENCY) with no system account
  provisioned — it cannot prove `pure-pw useradd` actually creates a working
  FTP login. That needs a provisioned host with pure-ftpd running.

The ops script sources shared validators from `hpcore`, so the validation
rules are identical across every package.
