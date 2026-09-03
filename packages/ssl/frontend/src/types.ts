/**
 * Contract between the HostPanel portal shell and the SSL package frontend.
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
  nav?: NavSection[];
  username?: string;
  theme?: Record<string, unknown>;
}

export interface CertificateItem {
  domain: string;
  issuer: string;
  valid_from: string;
  valid_to: string;
  days_left: number;
  auto_renew: boolean;
  force_https: boolean;
  san: string[];
  key_type?: string;
  status: "valid" | "expiring_soon" | "expired";
  cert_pem?: string;
  has_key?: boolean;
}

export interface EngineStatus {
  ok: boolean;
  daemon: string;
  status: string;
  active: boolean;
  port: number;
  total_certs: number;
  active_certs: number;
  expiring_soon: number;
  acme_cron: boolean;
  version: string;
  paths: {
    conf: string;
    certs: string;
    keys: string;
    acme: string;
    logs: string;
    run: string;
  };
}
