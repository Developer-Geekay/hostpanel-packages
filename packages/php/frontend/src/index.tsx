/**
 * The php package UI.
 *
 * Built independently of the shell and of every other package, into a single ES
 * module the shell imports at runtime. The only contract is the `mount(el, ctx)`
 * export below — the shell knows nothing else about this file.
 *
 * It creates its own React root inside the element it is given, so nothing here
 * shares state, context or a React version with the shell.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { PhpPage } from "./PhpPage";
import type { PackageContext } from "./types";

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <PhpPage ctx={ctx} />
    </StrictMode>,
  );
}

export function unmount(): void {
  // Deferred by a tick: React throws if a root is unmounted while it is
  // rendering, which is exactly what happens when the shell tears this down
  // from inside its own effect cleanup.
  const current = root;
  root = null;
  if (current) queueMicrotask(() => current.unmount());
}

export default { mount, unmount };
