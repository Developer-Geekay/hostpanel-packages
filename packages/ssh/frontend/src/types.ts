/**
 * The contract between the shell and this package.
 *
 * Declared here rather than imported from the shell, deliberately: a build-time
 * import would couple this package's build to the shell's source tree, which is
 * the coupling the runtime-mount design exists to remove. This is a structural
 * type — it has to *match* what the shell passes, and it does not have to come
 * from the same file.
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
  /**
   * Design tokens as plain data — MUI `ThemeOptions`, not a built `Theme`.
   *
   * This bundle renders in its own React root, which the shell's ThemeProvider
   * cannot reach, so it builds its own theme from these. Receiving options
   * rather than a Theme is what lets this package carry its own MUI version.
   */
  theme: Record<string, unknown>;
}

// ── this package's own domain types ─────────────────────────────────────────

export interface SshKey {
  fingerprint: string;
  type: string;
  bits: number;
  comment: string;
}

export interface SshSession {
  user: string;
  tty: string;
  login_time: string;
  from: string;
}

export interface PasswordAuthState {
  username: string;
  /** null when there is no per-user override — the account inherits sshd's
   *  global setting, which this package does not read or report. */
  password_auth: boolean | null;
  override: boolean;
}
