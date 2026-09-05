/**
 * The contract between the shell and the S3 Object Storage package.
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

// ── S3 Domain Types ──────────────────────────────────────────────────────────

export interface Bucket {
  id: number;
  name: string;
  owner: string;
  public_access: boolean;
  quota_mb: number;
  used_bytes: number;
  used_mb: number;
  used_formatted: string;
  object_count: number;
  region: string;
  custom_path?: string | null;
  created_at: string;
}

export interface S3Object {
  key: string;
  name: string;
  is_dir: boolean;
  size_bytes: number;
  size_formatted: string;
  content_type: string;
  last_modified: string;
  is_public: boolean;
}

export interface AccessKey {
  id: number;
  access_key: string;
  secret_key?: string | null;
  owner: string;
  label: string;
  status: "active" | "disabled" | string;
  bucket_id?: number | null;
  bucket_name?: string | null;
  created_at: string;
}

export interface PresignedUrl {
  id: number;
  bucket_name: string;
  object_key: string;
  token: string;
  expires_at: number;
  status: string;
  created_by: string;
  created_at: string;
}

export interface StorageSettings {
  s3_port: string | number;
  storage_path: string;
  bucket_count: number;
  total_objects: number;
  total_size_bytes: number;
  total_size_formatted: string;
}

export interface ServiceMeta {
  package: string;
  label: string;
  version: string;
  unit: string;
  run_as: string;
  s3_port: number;
  s3_endpoint: string;
  storage_root: string;
  port?: number | null;
}
