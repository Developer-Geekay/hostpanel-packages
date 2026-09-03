import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MySQLPage } from "./MySQLPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <MySQLPage ctx={ctx} />
    </StrictMode>,
  );
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
