/**
 * The contract between the shell and the mail package.
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
  run: (
    path: string,
    options?: { method?: string; body?: unknown; signal?: AbortSignal },
  ) => AsyncGenerator<StreamEvent>;
  nav: NavSection[];
  username: string;
  theme: Record<string, unknown>;
}

// ── mail package domain types ────────────────────────────────────────────────

export interface MailDomain {
  domain: string;
  dkim_enabled: boolean;
  mailboxes_count: number;
  created_at: string;
}

export interface Mailbox {
  email: string;
  domain: string;
  username: string;
  quota_mb: number;
  used_bytes: number;
  used_mb: number;
  status: string;
}

export interface MailAlias {
  source: string;
  domain: string;
  destination: string;
}

export interface DkimInfo {
  domain: string;
  selector: string;
  public_key: string;
  dns_records: {
    mx: string;
    spf: string;
    dkim: string;
    dmarc: string;
    host_dkim: string;
  };
}

export interface MailQueueItem {
  id: string;
  sender: string;
  recipient: string;
  size: string;
  arrival: string;
  reason?: string;
}

export interface MailStatus {
  active: boolean;
  postfix: string;
  dovecot: string;
  domains_count: number;
  mailboxes_count: number;
  aliases_count: number;
  queue_count: number;
  version?: string;
}
