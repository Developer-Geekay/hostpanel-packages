import ReactDOM from "react-dom/client";
import { WebsitesPage } from "./WebsitesPage";
import type { PackageContext } from "./types";

export function mount(element: HTMLElement, ctx: PackageContext) {
  const root = ReactDOM.createRoot(element);
  root.render(<WebsitesPage ctx={ctx} />);
  return () => root.unmount();
}
