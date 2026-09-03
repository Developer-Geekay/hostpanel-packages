/**
 * The filemanager package UI.
 *
 * Built independently of the shell, into a single ES module the shell imports
 * at runtime. The only contract is the `mount(el, ctx)` export below.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { FileManagerPage } from "./FileManagerPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <FileManagerPage ctx={ctx} />
    </StrictMode>,
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
