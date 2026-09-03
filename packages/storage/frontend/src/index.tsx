/**
 * The storage package UI micro-frontend entry.
 *
 * Built independently and mounted at runtime by portald shell.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { StoragePage } from "./StoragePage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <StoragePage ctx={ctx} />
    </StrictMode>,
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
