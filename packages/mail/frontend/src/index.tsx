/**
 * The mail package UI.
 *
 * Built into an ES module that mounts in the shell.
 */
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MailPage } from "./MailPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <MailPage ctx={ctx} />
    </StrictMode>,
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
