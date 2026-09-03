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
  nav?: NavSection[];
  username?: string;
  theme?: Record<string, unknown>;
  token?: string;
  baseUrl?: string;
}

export interface EngineStatus {
  ok: boolean;
  engine: string;
  service: string;
  status: string;
  active: boolean;
  pid: number;
  uptime: string;
  version: string;
  port: number | string;
  ports?: string;
  mpm?: string;
  workers?: number;
  instances?: number;
  active_sites?: number;
  total_sites?: number;
}

export interface VhostItem {
  domain: string;
  file: string;
  enabled: boolean;
  port: number;
  ssl: boolean;
  root: string;
}

export interface ModuleItem {
  name: string;
  enabled: boolean;
}
