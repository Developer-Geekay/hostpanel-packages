/**
 * HostPanel v3 — WireGuard package UI entrypoint.
 *
 * Micro-frontend library bundle mounted into the portal shell.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { WireguardPage } from "./WireguardPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <WireguardPage ctx={ctx} />
    </StrictMode>
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
