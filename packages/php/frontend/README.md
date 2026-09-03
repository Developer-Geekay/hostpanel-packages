# php — package UI

React + TypeScript + Vite, built as a library. The shell imports the bundle at
runtime and calls `mount()`.

Isolated to this package: it builds independently, so a break here affects this
package's page and nothing else.

`restart-fpm` is the only operation that streams (see `api/hostpanel_phpd/routes.py`)
— it is the one action here that calls `ctx.run()`; every other action is a
plain awaited `ctx.api()` call.

The side menu is not defined here — see `manifest.json`. portald aggregates menu
entries across all installed packages and the shell renders the result.
