/**
 * The contract between the shell and the storage package.
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

// ── Domain Types ────────────────────────────────────────────────────────────

export interface Bucket {
  name: string;
  policy: "private" | "public-read" | "authenticated-read" | string;
  size_bytes: number;
  objects_count: number;
  created_at: string;
}

export interface BackupSnapshot {
  id: string;
  name: string;
  targets: string;
  size_bytes: number;
  created_at: string;
  destination: "local" | "s3" | "r2" | string;
  filename: string;
}

export interface Schedule {
  name: string;
  cron: string;
  targets: string;
  retention_days: number;
  destination: "local" | "s3" | "r2" | string;
  enabled: boolean;
  last_run?: string;
  next_run?: string;
}

export interface DiskCategory {
  category: string;
  path: string;
  size_bytes: number;
}

export interface DiskUsage {
  total_bytes: number;
  used_bytes: number;
  free_bytes: number;
  breakdown: DiskCategory[];
}

/** This daemon's own identity, from GET /meta.
 *
 *  Reported rather than hardcoded: the port is allocated from portald's registry
 *  at provision time and is reassigned on every reinstall, so no literal in this
 *  bundle can be right about it. */
export interface ServiceMeta {
  unit: string;
  run_as: string;
  ops_script: string;
  package: string;
  version: string;
  port: number | null;
  host: string;
}
