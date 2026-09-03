/**
 * Contract between the HostPanel shell and the Node.js package UI.
 */

export interface LogEvent {
  kind: "log";
  stream: "stdout" | "stderr";
  line: string;
}

export interface ResultEvent {
  kind: "result";
  ok: boolean;
  code: string;
  message?: string;
  data?: unknown;
  exit_code?: number;
}

export interface ErrorEvent {
  kind: "error";
  message: string;
}

export type StreamEvent = LogEvent | ResultEvent | ErrorEvent;

export interface NavItem {
  package: string;
  label: string;
  icon: string;
  entry: string | null;
  healthy: boolean;
}

export interface NavSection {
  id: string;
  label: string;
  items: NavItem[];
}

export interface PackageContext {
  api: (path: string, init?: RequestInit) => Promise<Response>;
  run?: (
    path: string,
    options?: { method?: string; body?: unknown; signal?: AbortSignal },
  ) => AsyncGenerator<StreamEvent>;
  stream?: (path: string) => EventSource;
  openUrl?: (url: string) => void;
  nav?: NavSection[];
  username?: string;
  theme?: Record<string, unknown>;
}

export interface PackageModule {
  mount(el: HTMLElement, ctx: PackageContext): void;
  unmount?(): void;
}

// ── Node.js Domain Types ─────────────────────────────────────────────────────

export interface NodeApp {
  name: string;
  directory: string;
  node_version: string;
  script: string;
  port: number;
  status: "running" | "stopped" | "error";
  pid: number;
  memory_mb: string | number;
  cpu_pct: string | number;
}

export interface NodeRuntime {
  major: string;
  version: string;
  installed: boolean;
  path: string;
  is_default: boolean;
}

export interface NodeDaemonStatus {
  package: string;
  version: string;
  service_unit: string;
  run_as: string;
  port: number;
  total_apps: number;
  running_apps: number;
  installed_runtimes: number;
  total_memory_mb: string | number;
  healthy: boolean;
}

export interface AppLogs {
  name: string;
  stdout: string;
  stderr: string;
  logs: string;
}
