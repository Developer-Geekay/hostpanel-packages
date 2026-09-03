/**
 * The contract between the shell and this package.
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
  /** Call this package's own API. portald routes it; this bundle never learns
   *  the service's port and never holds its token. */
  api: (path: string, init?: RequestInit) => Promise<Response>;
  /** Run an operation and watch its bash output arrive. */
  run: (
    path: string,
    options?: { method?: string; body?: unknown; signal?: AbortSignal },
  ) => AsyncGenerator<StreamEvent>;
  /** The whole menu, so this package can link to others without importing them. */
  nav: NavSection[];
  username: string;
  /** Design tokens as plain data — MUI ThemeOptions */
  theme: Record<string, unknown>;
}

// ── this package's own domain types ─────────────────────────────────────────

export interface PhpVersionRuntime {
  version: string;
  installed: boolean;
  active: string;
  status: string;
  bin_path: string;
  socket: string;
  pool_count?: number;
}

export interface PhpEngineStatus {
  installed: boolean;
  active: boolean;
  versions: PhpVersionRuntime[];
  default_version: string;
}

export interface PhpPool {
  pool: string;
  version: string;
  memory_limit: string | null;
  max_execution_time: number | null;
  socket: string;
}

export interface PhpExtension {
  version: string;
  name: string;
  category: string;
  description: string;
  installed: boolean;
  enabled: boolean;
  builtin: boolean;
  method: "apt" | "pecl" | "direct_so" | "builtin";
}

export interface PhpDirectives {
  version: string;
  upload_max_filesize: string;
  post_max_size: string;
  memory_limit: string;
  max_execution_time: number | string;
  max_input_time: number | string;
  max_input_vars: number | string;
  timezone: string;
  display_errors: string;
  opcache_enable: string;
}

export interface PhpLogResponse {
  ok: boolean;
  type: string;
  version?: string | null;
  path: string;
  lines: string[];
}

