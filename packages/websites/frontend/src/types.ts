export type VHostMode = "static" | "php" | "hybrid_apache" | "node" | "proxy" | "redirect";

export interface VHostInfo {
  domain: string;
  aliases: string;
  doc_root: string;
  mode: VHostMode;
  php_version: string;
  proxy_target: string;
  redirect_target: string;
  ssl_enabled: boolean;
}

export interface VHostDetail {
  domain: string;
  nginx_config: string;
  apache_config: string;
}

export interface SslInfo {
  domain: string;
  ssl_enabled: boolean;
  issuer: string;
  expiry: string;
  force_https?: boolean;
}

export interface SecurityInfo {
  domain: string;
  block_hidden: boolean;
  hotlink_protection: boolean;
  ip_allow: string;
  ip_deny: string;
}

export interface PhpInfo {
  domain: string;
  upload_max_filesize: string;
  post_max_size: string;
  memory_limit: string;
  max_execution_time: string;
}

export interface EngineCheckResult {
  nginx_installed: boolean;
  nginx_active: boolean;
  apache_installed: boolean;
  apache_active: boolean;
  php_installed?: boolean;
  php_active?: boolean;
  php_versions?: string[];
  nodejs_installed?: boolean;
  nodejs_active?: boolean;
}

export interface StreamEvent {
  event?: string;
  stream?: "stdout" | "stderr" | "meta";
  text?: string;
  exit_code?: number;
  [key: string]: unknown;
}

export interface PackageContext {
  token: string;
  theme?: unknown;
  api: (path: string, init?: RequestInit) => Promise<Response>;
  run: (path: string, options?: { method?: string; body?: unknown; signal?: AbortSignal }) => AsyncIterable<StreamEvent>;
  openUrl?: (url: string) => void;
  nav?: any;
}
