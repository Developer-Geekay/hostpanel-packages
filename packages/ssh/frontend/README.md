# ssh — package UI

React + TypeScript + Vite, built as a library. The shell imports the bundle at
runtime and calls `mount()`.

Isolated to this package: it builds independently, so a break here affects this
package's page and nothing else.

None of this package's operations stream (see `api/hostpanel_sshd/routes.py`),
so — unlike `packages/users` — this UI never calls `ctx.run()`; every action is
a plain awaited `ctx.api()` call.

The side menu is not defined here — see `manifest.json`. portald aggregates menu
entries across all installed packages and the shell renders the result.
