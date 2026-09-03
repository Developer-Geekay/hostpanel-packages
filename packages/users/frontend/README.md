# users — package UI

React + TypeScript + Vite, built as a library. The shell imports the bundle at
runtime and calls `mount()`.

Isolated to this package: it builds independently, so a break here affects this
package's page and nothing else.

The side menu is not defined here — see `manifest.json`. portald aggregates menu
entries across all installed packages and the shell renders the result.
