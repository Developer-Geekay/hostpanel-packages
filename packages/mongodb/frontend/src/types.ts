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
  run: (
    path: string,
    options?: { method?: string; body?: unknown; signal?: AbortSignal },
  ) => AsyncGenerator<StreamEvent>;
  nav: NavSection[];
  username: string;
  theme: Record<string, unknown>;
}

export interface EngineStatus {
  engine: string;
  service: string;
  status: string;
  active: boolean;
  pid: number;
  connections: number;
  uptime?: string;
  version: string;
  port?: number;
}

export interface EngineConfig {
  path: string;
  content: string;
}

export interface DatabaseItem {
  name: string;
  size_bytes?: number;
  size_human?: string;
  empty?: boolean;
}

export interface UserItem {
  username: string;
  database: string;
  roles?: string[];
}

export interface CollectionItem {
  name: string;
  type: string;
  count: number;
  size_bytes: number;
  size_human: string;
}

export interface MqlQueryResult {
  ok: boolean;
  database?: string;
  collection?: string;
  documents?: any[];
  count?: number;
  execution_time_ms?: number;
  error?: string;
}
