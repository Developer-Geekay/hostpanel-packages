import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert, Box, Button, Card, CardContent, Chip, CircularProgress, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton,
  InputAdornment, MenuItem, Paper, Snackbar, Stack, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TextField, Tooltip, Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BuildIcon from "@mui/icons-material/Build";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import RefreshIcon from "@mui/icons-material/Refresh";
import ClearIcon from "@mui/icons-material/Clear";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type { LinuxUser, PackageContext, StreamEvent } from "./types";
import { CONSOLE } from "./kit";

interface Line {
  stream: "stdout" | "stderr" | "meta";
  text: string;
}

const SHELLS = ["/bin/bash", "/usr/sbin/nologin"];
const MONO = '"SF Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

export function UsersPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(
    () => createTheme((ctx.theme ?? {}) as ThemeOptions),
    [ctx.theme],
  );

  return (
    <ThemeProvider theme={theme}>
      <UsersPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function UsersPageBody({ ctx }: { ctx: PackageContext }) {
  const [users, setUsers] = useState<LinuxUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // New account form
  const [username, setUsername] = useState("");
  const [shell, setShell] = useState(SHELLS[0]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Search and filter
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "suspended">("all");

  // Log stream
  const [lines, setLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);

  // Dialogs and Modals
  const [confirmWipe, setConfirmWipe] = useState<LinuxUser | null>(null);
  const [confirmChown, setConfirmChown] = useState<LinuxUser | null>(null);
  const [passwordTarget, setPasswordTarget] = useState<LinuxUser | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSaving, setPasswordSaving] = useState(false);

  // Toast notification & copied clipboard indicator
  const [toast, setToast] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);
  const logEnd = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const response = await ctx.api("/users");
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${response.status}`);
      }
      const body = await response.json();
      setUsers(body.users ?? []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [ctx]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    logEnd.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function stream(path: string, method: string, body?: unknown) {
    setRunning(true);
    setLines([]);
    setError(null);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      for await (const event of ctx.run(path, {
        method,
        body,
        signal: controller.signal,
      })) {
        setLines((current) => [...current, toLine(event)]);
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        setLines((current) => [
          ...current,
          { stream: "stderr", text: err instanceof Error ? err.message : String(err) },
        ]);
      }
    } finally {
      setRunning(false);
      abortRef.current = null;
      refresh();
    }
  }

  async function create(event: React.FormEvent) {
    event.preventDefault();
    await stream("/users", "POST", {
      username,
      shell,
      ...(password ? { password } : {}),
    });
    setUsername("");
    setPassword("");
    setToast(`Account creation started for "${username}"`);
  }

  async function remove(user: LinuxUser, removeHome: boolean) {
    setConfirmWipe(null);
    await stream(`/users/${user.username}?remove_home=${removeHome}`, "DELETE");
    setToast(`Deleted user "${user.username}"${removeHome ? " and wiped home directory" : ""}`);
  }

  async function toggleLock(user: LinuxUser) {
    const verb = user.status === "suspended" ? "unlock" : "lock";
    try {
      const response = await ctx.api(`/users/${user.username}/${verb}`, { method: "PUT" });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${response.status}`);
      }
      setToast(`User "${user.username}" ${verb === "unlock" ? "unlocked" : "locked"}`);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  async function submitPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!passwordTarget || !newPassword) return;
    setPasswordSaving(true);
    setPasswordError(null);
    try {
      const response = await ctx.api(`/users/${passwordTarget.username}/password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${response.status}`);
      }
      setToast(`Password updated successfully for "${passwordTarget.username}"`);
      setPasswordTarget(null);
      setNewPassword("");
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : String(err));
    } finally {
      setPasswordSaving(false);
    }
  }

  async function chownHome(user: LinuxUser) {
    setConfirmChown(null);
    await stream(`/users/${user.username}/chown-home`, "POST", { path: user.home });
    setToast(`Permissions restored for "${user.home}"`);
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  // Filtered accounts
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.username.toLowerCase().includes(search.toLowerCase()) ||
        u.home.toLowerCase().includes(search.toLowerCase()) ||
        String(u.uid).includes(search);
      const matchesStatus =
        statusFilter === "all" || u.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [users, search, statusFilter]);

  const activeCount = useMemo(() => users.filter((u) => u.status === "active").length, [users]);
  const suspendedCount = useMemo(() => users.filter((u) => u.status === "suspended").length, [users]);

  return (
    <Stack spacing={3}>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* 1. New Account Card */}
      <Card sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "8px" }}>
        <Box sx={{ px: 2.25, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <PersonAddIcon sx={{ fontSize: 18, color: "primary.main" }} />
            <Typography variant="h6" sx={{ fontSize: "0.9375rem", fontWeight: 700 }}>
              Create Linux User Account
            </Typography>
          </Stack>
        </Box>
        <CardContent sx={{ p: 2.25, "&:last-child": { pb: 2.25 } }}>
          <Stack
            component="form"
            onSubmit={create}
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ alignItems: { md: "flex-end" } }}
          >
            <Field label="Username" hint="required" sx={{ flex: 1 }}>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                required
                fullWidth
                size="small"
                placeholder="e.g. appuser"
                slotProps={{
                  htmlInput: {
                    pattern: "[a-z_][a-z0-9_-]{0,31}",
                    title: "lowercase letters, digits, underscore, hyphen; must not start with a digit",
                    style: { fontFamily: MONO, fontSize: "0.875rem" },
                  },
                }}
              />
            </Field>

            <Field label="Login Shell" sx={{ flex: 1 }}>
              <TextField
                select
                size="small"
                value={shell}
                onChange={(e) => setShell(e.target.value)}
                fullWidth
              >
                {SHELLS.map((s) => (
                  <MenuItem key={s} value={s} sx={{ fontFamily: MONO, fontSize: "0.8125rem" }}>
                    {s} {s === "/bin/bash" ? "(Interactive Bash)" : "(No Login / Service)"}
                  </MenuItem>
                ))}
              </TextField>
            </Field>

            <Field label="Password" hint="optional" sx={{ flex: 1 }}>
              <TextField
                type={showPassword ? "text" : "password"}
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                fullWidth
                placeholder="Leave blank for key-only"
                slotProps={{
                  htmlInput: { style: { fontFamily: MONO, fontSize: "0.875rem" } },
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon sx={{ fontSize: 16 }} /> : <VisibilityIcon sx={{ fontSize: 16 }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Field>

            <Button
              type="submit"
              variant="contained"
              startIcon={<PersonAddIcon sx={{ fontSize: 16 }} />}
              disabled={running || !username}
              sx={{ flexShrink: 0, height: 40, px: 2.5, fontWeight: 600 }}
            >
              {running ? "Creating…" : "Create User"}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* 2. Real-time Operation Logs Stream */}
      {(lines.length > 0 || running) && (
        <LogPane lines={lines} running={running} endRef={logEnd} onClear={() => setLines([])} />
      )}

      {/* 3. User Accounts Section */}
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, justifyContent: "space-between", mb: 2 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontSize: "1.0625rem", fontWeight: 700 }}>
              System Accounts
            </Typography>
            <Chip
              label={`${users.length} total`}
              size="small"
              sx={{ fontFamily: MONO, fontSize: "0.75rem", height: 22, bgcolor: "action.hover", fontWeight: 600 }}
            />
          </Stack>

          {/* Search and Status Filters */}
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            <TextField
              size="small"
              placeholder="Search users…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: { xs: "100%", sm: 200 } }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                  endAdornment: search ? (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setSearch("")}>
                        <ClearIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                    </InputAdornment>
                  ) : null,
                  style: { fontSize: "0.8125rem", height: 34 },
                },
              }}
            />

            <Stack direction="row" spacing={0.5}>
              <Chip
                label="All"
                size="small"
                onClick={() => setStatusFilter("all")}
                color={statusFilter === "all" ? "primary" : "default"}
                variant={statusFilter === "all" ? "filled" : "outlined"}
                sx={{ height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }}
              />
              <Chip
                label={`Active (${activeCount})`}
                size="small"
                onClick={() => setStatusFilter("active")}
                color={statusFilter === "active" ? "success" : "default"}
                variant={statusFilter === "active" ? "filled" : "outlined"}
                sx={{ height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }}
              />
              <Chip
                label={`Suspended (${suspendedCount})`}
                size="small"
                onClick={() => setStatusFilter("suspended")}
                color={statusFilter === "suspended" ? "warning" : "default"}
                variant={statusFilter === "suspended" ? "filled" : "outlined"}
                sx={{ height: 28, fontSize: "0.75rem", cursor: "pointer", fontWeight: 600 }}
              />
            </Stack>

            <Tooltip title="Refresh account list">
              <IconButton size="small" onClick={refresh} disabled={loading}>
                <RefreshIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        {loading && (
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", py: 3, justifyContent: "center" }}>
            <CircularProgress size={20} />
            <Typography variant="body2" color="text.secondary">Loading accounts…</Typography>
          </Stack>
        )}

        {!loading && filteredUsers.length === 0 && (
          <Alert severity="info" variant="outlined" sx={{ borderRadius: "8px" }}>
            {search || statusFilter !== "all"
              ? "No accounts match the active filter criteria."
              : "No user accounts found above the minimum UID (1000)."}
          </Alert>
        )}

        {!loading && filteredUsers.length > 0 && (
          <TableContainer component={Paper} sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflowX: "auto" }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: "action.hover" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>USERNAME</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>UID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>HOME DIRECTORY</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>SHELL</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>STATUS</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", pr: 2 }}>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.username} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                        <Box sx={{ fontFamily: MONO, fontSize: "0.875rem", fontWeight: 700, color: "text.primary" }}>
                          {user.username}
                        </Box>
                        <Tooltip title={copiedText === user.username ? "Copied!" : "Copy username"}>
                          <IconButton
                            size="small"
                            onClick={() => copyToClipboard(user.username)}
                            sx={{ p: 0.25, opacity: 0.6, "&:hover": { opacity: 1 } }}
                          >
                            {copiedText === user.username ? (
                              <CheckIcon sx={{ fontSize: 13, color: "success.main" }} />
                            ) : (
                              <ContentCopyIcon sx={{ fontSize: 13 }} />
                            )}
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>

                    <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem", color: "text.secondary" }}>
                      {user.uid}
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                        <Box sx={{ fontFamily: MONO, fontSize: "0.8125rem", color: "text.secondary" }}>
                          {user.home}
                        </Box>
                        <Tooltip title={copiedText === user.home ? "Copied!" : "Copy path"}>
                          <IconButton
                            size="small"
                            onClick={() => copyToClipboard(user.home)}
                            sx={{ p: 0.25, opacity: 0.6, "&:hover": { opacity: 1 } }}
                          >
                            {copiedText === user.home ? (
                              <CheckIcon sx={{ fontSize: 13, color: "success.main" }} />
                            ) : (
                              <ContentCopyIcon sx={{ fontSize: 13 }} />
                            )}
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>

                    <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem", color: "text.secondary" }}>
                      {user.shell}
                    </TableCell>

                    <TableCell>
                      {/* The tinted-fill-with-matching-border treatment is what
                          the theme already gives a coloured Chip, so this asks
                          for the colour by name instead of restating it — which
                          also means it picks up the light palette's darker
                          green and amber, where the 500-weights were too pale
                          to read on white. */}
                      <Chip
                        size="small"
                        label={user.status.toUpperCase()}
                        color={user.status === "active" ? "success" : "warning"}
                        sx={{ fontSize: "0.6875rem", height: 22, fontWeight: 700 }}
                      />
                    </TableCell>

                    <TableCell align="right" sx={{ pr: 1.5 }}>
                      <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                        {/* 1. Change Password Action */}
                        <Tooltip title="Change Password">
                          <span>
                            <IconButton
                              size="small"
                              disabled={running}
                              onClick={() => {
                                setPasswordTarget(user);
                                setNewPassword("");
                                setPasswordError(null);
                              }}
                              sx={{ "&:hover": { color: "primary.main" } }}
                            >
                              <VpnKeyIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </span>
                        </Tooltip>

                        {/* 2. Fix Home Permissions Action */}
                        <Tooltip title="Restore Home Directory Ownership">
                          <span>
                            <IconButton
                              size="small"
                              disabled={running}
                              onClick={() => setConfirmChown(user)}
                              sx={{ "&:hover": { color: "info.main" } }}
                            >
                              <BuildIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </span>
                        </Tooltip>

                        {/* 3. Lock/Unlock Toggle */}
                        <Tooltip title={user.status === "suspended" ? "Unlock Account" : "Lock Account"}>
                          <span>
                            <IconButton
                              size="small"
                              disabled={running}
                              onClick={() => toggleLock(user)}
                              sx={{ "&:hover": { color: user.status === "suspended" ? "success.main" : "warning.main" } }}
                            >
                              {user.status === "suspended" ? (
                                <LockOpenIcon sx={{ fontSize: 16 }} />
                              ) : (
                                <LockIcon sx={{ fontSize: 16 }} />
                              )}
                            </IconButton>
                          </span>
                        </Tooltip>

                        {/* 4. Delete (Keep Home) */}
                        <Tooltip title="Delete account (keep home directory)">
                          <span>
                            <IconButton
                              size="small"
                              disabled={running}
                              onClick={() => remove(user, false)}
                              sx={{ "&:hover": { color: "error.main" } }}
                            >
                              <DeleteIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </span>
                        </Tooltip>

                        {/* 5. Delete and Erase Home */}
                        <Tooltip title="Delete account AND erase home directory">
                          <span>
                            <IconButton
                              size="small"
                              color="error"
                              disabled={running}
                              onClick={() => setConfirmWipe(user)}
                            >
                              <DeleteForeverIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* ── Dialog: Change Password ── */}
      <Dialog
        open={!!passwordTarget}
        onClose={() => !passwordSaving && setPasswordTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <Box component="form" onSubmit={submitPassword}>
          <DialogTitle sx={{ fontWeight: 700 }}>
            Change Password: <span style={{ fontFamily: MONO }}>{passwordTarget?.username}</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2, fontSize: "0.8125rem" }}>
              Enter a new password for this Linux account. It will be updated securely on stdin via system authentication.
            </DialogContentText>

            {passwordError && (
              <Alert severity="error" sx={{ mb: 2, fontSize: "0.8125rem" }}>
                {passwordError}
              </Alert>
            )}

            <TextField
              autoFocus
              label="New Password"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              fullWidth
              size="small"
              autoComplete="new-password"
              placeholder="••••••••••••"
              slotProps={{
                htmlInput: { style: { fontFamily: MONO } },
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOffIcon sx={{ fontSize: 16 }} /> : <VisibilityIcon sx={{ fontSize: 16 }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setPasswordTarget(null)} disabled={passwordSaving}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={passwordSaving || !newPassword}
              startIcon={passwordSaving ? <CircularProgress size={14} /> : <VpnKeyIcon sx={{ fontSize: 14 }} />}
            >
              {passwordSaving ? "Updating…" : "Update Password"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* ── Dialog: Fix Home Directory Ownership ── */}
      <Dialog open={!!confirmChown} onClose={() => setConfirmChown(null)}>
        <DialogTitle sx={{ fontWeight: 700 }}>
          Restore Permissions for {confirmChown?.username}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "0.875rem" }}>
            This will recursively fix ownership on{" "}
            <Box component="span" sx={{ fontFamily: MONO, fontWeight: 700, color: "text.primary" }}>
              {confirmChown?.home}
            </Box>{" "}
            to <Box component="span" sx={{ fontFamily: MONO }}>{confirmChown?.username}:{confirmChown?.username}</Box>.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setConfirmChown(null)}>Cancel</Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<BuildIcon sx={{ fontSize: 14 }} />}
            onClick={() => confirmChown && chownHome(confirmChown)}
          >
            Fix Ownership
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Dialog: Confirm Home Wipe Deletion ── */}
      <Dialog open={!!confirmWipe} onClose={() => setConfirmWipe(null)}>
        <DialogTitle sx={{ fontWeight: 700, color: "error.main" }}>
          Erase {confirmWipe?.username}’s Home Directory?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "0.875rem" }}>
            This will permanently delete the Linux user account <strong>and</strong> erase all files inside{" "}
            <Box component="span" sx={{ fontFamily: MONO, fontWeight: 700, color: "error.light" }}>
              {confirmWipe?.home}
            </Box>
            . This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setConfirmWipe(null)}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteForeverIcon sx={{ fontSize: 14 }} />}
            onClick={() => confirmWipe && remove(confirmWipe, true)}
          >
            Delete & Erase Files
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification */}
      <Snackbar
        open={!!toast}
        autoHideDuration={3500}
        onClose={() => setToast(null)}
        message={toast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Stack>
  );
}

function Field({
  label, hint, sx, children,
}: {
  label: string;
  hint?: string;
  sx?: object;
  children: React.ReactNode;
}) {
  return (
    <Box sx={sx}>
      <Stack direction="row" spacing={0.75} sx={{ alignItems: "baseline", mb: 0.75 }}>
        <Typography
          component="label"
          sx={{ fontSize: "0.75rem", fontWeight: 600, color: "text.secondary" }}
        >
          {label}
        </Typography>
        {hint && (
          <Typography sx={{ fontSize: "0.6875rem", color: "text.disabled" }}>
            {hint}
          </Typography>
        )}
      </Stack>
      {children}
    </Box>
  );
}

function LogPane({
  lines,
  running,
  endRef,
  onClear,
}: {
  lines: Line[];
  running: boolean;
  endRef: React.RefObject<HTMLDivElement>;
  onClear: () => void;
}) {
  return (
    <Paper
      role="log"
      aria-live="polite"
      sx={{
        bgcolor: CONSOLE.bg,
        color: CONSOLE.fg,
        border: "1px solid",
        borderColor: CONSOLE.rule,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "20rem",
        overflowY: "auto",
        fontFamily: MONO,
        fontSize: 12.5,
        lineHeight: 1.5,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        position: "relative",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1, borderBottom: `1px solid ${CONSOLE.rule}`, pb: 0.75 }}>
        <Typography sx={{ fontSize: "0.6875rem", fontWeight: 700, color: CONSOLE.dim, letterSpacing: "0.05em" }}>
          LIVE EXECUTION OUTPUT
        </Typography>
        {!running && lines.length > 0 && (
          <Button size="small" onClick={onClear} sx={{ fontSize: "0.6875rem", py: 0, minHeight: 20 }}>
            Dismiss
          </Button>
        )}
      </Stack>

      {lines.map((line, i) => (
        <Box
          key={i}
          sx={{
            color:
              line.stream === "stderr" ? CONSOLE.err
              : line.stream === "meta" ? CONSOLE.meta
              : CONSOLE.fg,
          }}
        >
          {line.text || " "}
        </Box>
      ))}
      {running && (
        <Box sx={{ color: CONSOLE.accent, mt: 0.5 }}>▍Executing operation…</Box>
      )}
      <div ref={endRef} />
    </Paper>
  );
}

function toLine(event: StreamEvent): Line {
  switch (event.kind) {
    case "log":
      return { stream: event.stream, text: event.line };
    case "error":
      return { stream: "stderr", text: event.message };
    case "result":
      return {
        stream: "meta",
        text: event.ok
          ? `✓ completed successfully (${event.code})`
          : `✗ ${event.code}: ${event.message ?? "operation failed"}` +
            (event.exit_code !== undefined ? ` [exit ${event.exit_code}]` : ""),
      };
  }
}
