/**
 * HostPanel SSL Package UI entry point.
 * Mounted dynamically by the portal shell.
 */
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { SslPage } from "./SslPage";
import type { PackageContext } from "./types";

declare global {
  interface Window {
    HostPanelPackage?: {
      mount: (el: HTMLElement, ctx: PackageContext) => () => void;
    };
  }
}

let root: Root | null = null;

export function mount(el: HTMLElement, ctx: PackageContext): () => void {
  root = createRoot(el);
  root.render(
    <StrictMode>
      <SslPage ctx={ctx} />
    </StrictMode>
  );
  return () => {
    unmount();
  };
}

export function unmount(): void {
  const current = root;
  root = null;
  if (current) {
    queueMicrotask(() => current.unmount());
  }
}

if (typeof window !== "undefined") {
  window.HostPanelPackage = { mount };
}

export default { mount, unmount };
