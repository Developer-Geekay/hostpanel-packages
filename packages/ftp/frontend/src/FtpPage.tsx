/**
 * pure-ftpd virtual account management.
 *
 * These are NOT Linux users. Every account here maps onto one underlying system
 * uid, and lives only in pure-ftpd's own password database — which is why an FTP
 * account can exist for a home directory whose owner has no shell access at all.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert, Button, Chip, IconButton, Stack, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TextField, Tooltip, Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutlined";
import type { FtpAccount, PackageContext } from "./types";
import { Field, LogPane, MONO, Panel, appendEvent, type Line } from "./kit";

export function FtpPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <Body ctx={ctx} />
    </ThemeProvider>
  );
}

function Body({ ctx }: { ctx: PackageContext }) {
  const [accounts, setAccounts] = useState<FtpAccount[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [home, setHome] = useState("");

  const [lines, setLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);
  const abort = useRef<AbortController | null>(null);

  useEffect(() => () => abort.current?.abort(), []);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const response = await ctx.api("/accounts");
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.message ?? `HTTP ${response.status}`);
      setAccounts(body.accounts ?? []);
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

  async function stream(path: string, method: string, body?: unknown) {
    setRunning(true);
    setLines([]);
    setError(null);
    const controller = new AbortController();
    abort.current = controller;
    try {
      for await (const event of ctx.run(path, { method, body, signal: controller.signal })) {
        setLines((current) => appendEvent(current, event));
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        setLines((c) => [...c, { stream: "stderr", text: String(err) }]);
      }
    } finally {
      setRunning(false);
      abort.current = null;
      refresh();
    }
  }

  async function create(event: React.FormEvent) {
    event.preventDefault();
    await stream("/accounts", "POST", { username, password, home });
    setUsername("");
    setPassword("");
    setHome("");
  }

  return (
    <Stack spacing={2}>
      {error && <Alert severity="error">{error}</Alert>}

      <Panel label="New FTP account">
        <Stack component="form" onSubmit={create} spacing={1.5}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            sx={{ alignItems: { md: "flex-end" } }}
          >
            <Field label="Username" sx={{ flex: 1 }}>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="webftp"
                fullWidth
                required
              />
            </Field>
            <Field label="Password" sx={{ flex: 1 }}>
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                fullWidth
                required
                autoComplete="new-password"
              />
            </Field>
            <Field label="Home directory" sx={{ flex: 1.4 }}>
              <TextField
                value={home}
                onChange={(e) => setHome(e.target.value)}
                placeholder="/home/webdev"
                fullWidth
                required
                slotProps={{ input: { sx: { fontFamily: MONO, fontSize: "0.78rem" } } }}
              />
            </Field>
            <Button
              type="submit"
              variant="contained"
              disabled={running}
              startIcon={<PersonAddIcon sx={{ fontSize: 15 }} />}
              sx={{ flexShrink: 0 }}
            >
              {running ? "Working…" : "Create"}
            </Button>
          </Stack>
          <Typography sx={{ fontSize: "0.6875rem", color: "text.disabled" }}>
            The account is confined to this directory. It is a virtual pure-ftpd
            user, not a Linux account, and cannot be used to log in over SSH.
          </Typography>
        </Stack>
      </Panel>

      {(lines.length > 0 || running) && <LogPane lines={lines} running={running} />}

      <Panel label={`Accounts · ${accounts.length}`} padded={false}>
        {loading && (
          <Typography variant="body2" sx={{ p: 2, color: "text.disabled" }}>
            Loading…
          </Typography>
        )}
        {!loading && !accounts.length && (
          <Typography variant="body2" sx={{ p: 2, color: "text.disabled" }}>
            No FTP accounts.
          </Typography>
        )}
        {accounts.length > 0 && (
          <TableContainer sx={{ overflowX: "auto" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>UID / GID</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.username} hover>
                    <TableCell sx={{ fontFamily: MONO }}>{account.username}</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: "0.72rem" }}>
                      {/* pure-pw stores the chroot marker "/./" in the path; it is
                          an implementation detail, not part of the directory. */}
                      {(account.home ?? "").replace(/\/\.\/?$/, "") || "—"}
                    </TableCell>
                    <TableCell sx={{ fontFamily: MONO, color: "text.secondary" }}>
                      {account.uid ?? "—"} / {account.gid ?? "—"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        variant="filled"
                        color={account.enabled ? "success" : "warning"}
                        label={account.enabled ? "enabled" : "disabled"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                        <Tooltip title={account.enabled ? "Disable" : "Enable"} arrow>
                          <span>
                            <IconButton
                              disabled={running}
                              onClick={() =>
                                stream(
                                  `/accounts/${encodeURIComponent(account.username)}/${
                                    account.enabled ? "disable" : "enable"
                                  }`,
                                  "PUT",
                                )
                              }
                            >
                              {account.enabled ? (
                                <BlockIcon sx={{ fontSize: 15 }} />
                              ) : (
                                <CheckCircleIcon sx={{ fontSize: 15 }} />
                              )}
                            </IconButton>
                          </span>
                        </Tooltip>
                        <Tooltip title="Delete account" arrow>
                          <span>
                            <IconButton
                              color="error"
                              disabled={running}
                              onClick={() =>
                                stream(
                                  `/accounts/${encodeURIComponent(account.username)}`,
                                  "DELETE",
                                )
                              }
                            >
                              <DeleteIcon sx={{ fontSize: 15 }} />
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
      </Panel>
    </Stack>
  );
}
