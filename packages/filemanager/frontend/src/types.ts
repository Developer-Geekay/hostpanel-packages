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
  api: (path: string, init?: RequestInit) => Promise<Response>;
  run: (
    path: string,
    options?: { method?: string; body?: unknown; signal?: AbortSignal },
  ) => AsyncGenerator<StreamEvent>;
  nav: NavSection[];
  username: string;
  theme: Record<string, unknown>;
}

// ── domain types ─────────────────────────────────────────────────────────────

export interface FileEntry {
  name: string;
  path: string;
  is_dir: boolean;
  is_symlink: boolean;
  size: number;
  mode: string;
  permissions: string;
  owner: string;
  group: string;
  mtime: number;
  mtime_iso: string;
  extension: string;
  mime_type: string;
}

export interface FileListResponse {
  path: string;
  entries: FileEntry[];
  total: number;
}

export interface FileStat {
  name: string;
  path: string;
  is_dir: boolean;
  is_file: boolean;
  is_symlink: boolean;
  symlink_target?: string;
  size: number;
  mode: string;
  permissions: string;
  owner: string;
  group: string;
  mtime: number;
  mtime_iso: string;
  extension: string;
  mime_type: string;
}

export interface FileReadResponse {
  path: string;
  content: string;
  size: number;
  encoding: string;
}

export type ArchiveType = "zip" | "tar.gz" | "tar.bz2" | "tar" | "tgz";
