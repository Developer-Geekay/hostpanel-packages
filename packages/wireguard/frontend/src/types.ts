/**
 * The contract between the shell and the WireGuard package UI.
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
  /** Design tokens as plain data — MUI ThemeOptions. */
  theme: Record<string, unknown>;
}

// ── WireGuard Domain Types ──────────────────────────────────────────────────

export interface ServerStatus {
  status: "running" | "stopped" | "unknown";
  interface: string;
  listen_port: number;
  public_key: string;
  address: string;
  subnet: string;
  endpoint: string;
  total_rx_bytes: number;
  total_tx_bytes: number;
  peers_count: number;
  active_peers_count: number;
}

export interface ServerConfig {
  interface: string;
  listen_port: number;
  address: string;
  subnet: string;
  mtu: number;
  public_key: string;
  endpoint: string;
  config_path: string;
  isolation_path: string;
  run_path: string;
  logs_path: string;
  peers_path: string;
  runtime_path: string;
}

/** This daemon's own identity, from GET /meta.
 *
 *  Reported rather than hardcoded: the port is allocated from portald's registry
 *  at provision time, so no literal in this bundle can be right about it. */
export interface ServiceMeta {
  unit: string;
  run_as: string;
  ops_script: string;
  package: string;
  version: string;
  port: number | null;
  host: string;
}

export interface PeerItem {
  id: string;
  name: string;
  ip: string;
  public_key: string;
  allowed_ips: string;
  dns: string;
  created_at: string;
  enabled: boolean;
  rx_bytes: number;
  tx_bytes: number;
  last_handshake: number;
  endpoint?: string;
  config?: string;
}

export interface CreatePeerRequest {
  name: string;
  ip?: string;
  allowed_ips?: string;
  dns?: string;
  preshared_key?: string;
}
