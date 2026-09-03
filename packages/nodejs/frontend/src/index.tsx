/**
 * HostPanel v3 — Node.js package UI entry point.
 *
 * Mounts the isolated React root into the shell container.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { NodejsPage } from "./NodejsPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <NodejsPage ctx={ctx} />
    </StrictMode>
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
