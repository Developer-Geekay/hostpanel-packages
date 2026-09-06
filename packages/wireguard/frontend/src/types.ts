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
  imported?: boolean;
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

export interface ImportPeerRequest {
  name: string;
  public_key: string;
  ip?: string;
  allowed_ips?: string;
  dns?: string;
  preshared_key?: string;
}

export interface DnsPreset {
  id: string;
  name: string;
  shortLabel: string;
  servers: string;
  description: string;
}

export const DNS_PRESETS: DnsPreset[] = [
  {
    id: "cloudflare",
    name: "Cloudflare (Standard)",
    shortLabel: "Cloudflare",
    servers: "1.1.1.1, 1.0.0.1",
    description: "Fast, privacy-first, zero logs",
  },
  {
    id: "cloudflare-security",
    name: "Cloudflare (Malware Blocking)",
    shortLabel: "Cloudflare Security",
    servers: "1.1.1.2, 1.0.0.2",
    description: "Blocks known malware and phishing domains",
  },
  {
    id: "google",
    name: "Google Public DNS",
    shortLabel: "Google",
    servers: "8.8.8.8, 8.8.4.4",
    description: "Global high-speed anycast resolvers",
  },
  {
    id: "quad9",
    name: "Quad9 (Security & Privacy)",
    shortLabel: "Quad9",
    servers: "9.9.9.9, 149.112.112.112",
    description: "Threat-intelligence blocking, Swiss jurisdiction",
  },
  {
    id: "adguard",
    name: "AdGuard DNS (Ad & Tracker Blocking)",
    shortLabel: "AdGuard",
    servers: "94.140.14.14, 94.140.15.15",
    description: "Blocks advertising and tracking domains network-wide",
  },
  {
    id: "opendns",
    name: "Cisco OpenDNS",
    shortLabel: "OpenDNS",
    servers: "208.67.222.222, 208.67.220.220",
    description: "Anti-phishing intelligence and high reliability",
  },
  {
    id: "custom",
    name: "Custom DNS Server",
    shortLabel: "Custom",
    servers: "",
    description: "Specify private LAN, Pi-hole, or custom DNS addresses",
  },
];
