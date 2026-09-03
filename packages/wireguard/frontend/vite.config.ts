import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Built as a LIBRARY, not an app: the shell imports this bundle at runtime and
 * calls its `mount()` export.
 */
export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    lib: { entry: "src/index.tsx", formats: ["es"], fileName: () => "main.js" },
    cssCodeSplit: false,
    emptyOutDir: true,
    sourcemap: true,
  },
});
