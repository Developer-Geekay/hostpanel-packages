import React from "react";
import ReactDOM from "react-dom/client";
import { ApachePage } from "./ApachePage";
import type { PackageContext } from "./types";

declare global {
  interface Window {
    HostPanelPackage?: {
      mount: (el: HTMLElement, ctx: PackageContext) => () => void;
    };
  }
}

export function mount(el: HTMLElement, ctx: PackageContext): () => void {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <ApachePage ctx={ctx} />
    </React.StrictMode>
  );
  return () => {
    root.unmount();
  };
}

if (typeof window !== "undefined") {
  window.HostPanelPackage = { mount };
}
