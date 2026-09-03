import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Built as a LIBRARY, not an app: the shell imports this bundle at runtime and
 * calls its `mount()` export.
 *
 * ## React is bundled, not externalised
 *
 * The obvious optimisation is to mark react/react-dom external and share the
 * shell's copy. Two reasons not to:
 *
 * 1. It would not work as written. An externalised import emits a bare
 *    `import "react"` specifier, which a browser cannot resolve — it needs an
 *    import map or a shim, so "external" here means "broken at runtime" unless
 *    the shell also publishes React at a URL.
 *
 * 2. It would reintroduce the coupling this design removes. Sharing one React
 *    instance puts every package on the shell's version, so upgrading the shell
 *    could break a package built months earlier. That is the build-time coupling
 *    the runtime-mount architecture exists to avoid, moved to a dependency.
 *
 * The cost is roughly 45 KB gzipped per package with a UI. On a self-hosted
 * panel that is a fair price for packages that cannot break each other.
 */
export default defineConfig({
  plugins: [react()],

  /**
   * REQUIRED for a library build. Do not remove.
   *
   * In app mode Vite substitutes `process.env.NODE_ENV`; in library mode it
   * deliberately does not, because a library should not hardcode its consumer's
   * environment. React does not agree — it guards its development-only code with
   * `process.env.NODE_ENV !== "production"`, so without this define the bundle:
   *
   *   1. keeps the DEVELOPMENT build of React (750 kB instead of 160 kB), and
   *   2. references `process` at runtime, which does not exist in a browser —
   *      so the module throws `ReferenceError: process is not defined` the
   *      instant the shell imports it.
   *
   * The failure is total and immediate, but invisible until the bundle is
   * actually loaded in a browser: the build succeeds, TypeScript is happy, and
   * the file looks fine on disk.
   */
  define: { "process.env.NODE_ENV": JSON.stringify("production") },

  build: {
    lib: { entry: "src/index.tsx", formats: ["es"], fileName: () => "main.js" },
    // The shell styles the panel; this bundle inherits those styles because it
    // renders into the shell's DOM. Emitting a separate CSS file would need the
    // shell to know to load it, which is one more thing in the contract.
    cssCodeSplit: false,
    emptyOutDir: true,
    sourcemap: true,
  },
});
