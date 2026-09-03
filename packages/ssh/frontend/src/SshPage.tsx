/**
 * SSH access management.
 *
 * Two things per account: which public keys may log in, and whether password
 * authentication is allowed at all. Both are edits to files sshd reads, so both
 * go through the ops script and both stream.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert, Box, Button, Chip, IconButton, Stack, Switch, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import KeyIcon from "@mui/icons-material/VpnKey";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import type { PackageContext, SshKey, SshSession } from "./types";
import { Dot, Field, LogPane, MONO, Panel, appendEvent, type Line } from "./kit";

export function SshPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <Body ctx={ctx} />
    </ThemeProvider>
  );
}

function Body({ ctx }: { ctx: PackageContext }) {
  const [target, setTarget] = useState("");
  const [loadedUser, setLoadedUser] = useState<string | null>(null);
  const [keys, setKeys] = useState<SshKey[]>([]);
  const [passwordAuth, setPasswordAuth] = useState<boolean | null>(null);
  const [sessions, setSessions] = useState<SshSession[]>([]);
  const [newKey, setNewKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);
  const abort = useRef<AbortController | null>(null);

  useEffect(() => () => abort.current?.abort(), []);

  const json = useCallback(
    async (path: string, init?: RequestInit) => {
      const response = await ctx.api(path, init);
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.message ?? `HTTP ${response.status}`);
      return body;
    },
    [ctx],
  );

  const loadSessions = useCallback(() => {
    json("/ssh/sessions")
      .then((b) => setSessions(b.sessions ?? []))
      .catch(() => undefined);
  }, [json]);

  useEffect(() => {
    loadSessions();
    const timer = setInterval(loadSessions, 15000);
    return () => clearInterval(timer);
  }, [loadSessions]);

  const loadAccount = useCallback(
    async (username: string) => {
      setError(null);
      try {
        const [k, p] = await Promise.all([
          json(`/ssh/${encodeURIComponent(username)}/keys`),
          json(`/ssh/${encodeURIComponent(username)}/password-auth`).catch(() => null),
        ]);
        setKeys(k.keys ?? []);
        setPasswordAuth(p && p.password_auth !== null ? !!p.password_auth : null);
        setLoadedUser(username);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
        setLoadedUser(null);
      }
    },
    [json],
  );

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
      if (loadedUser) loadAccount(loadedUser);
    }
  }

  async function addKey(event: React.FormEvent) {
    event.preventDefault();
    if (!loadedUser) return;
    await stream(`/ssh/${encodeURIComponent(loadedUser)}/keys`, "POST", { key: newKey });
    setNewKey("");
  }

  async function removeKey(fingerprint: string) {
    if (!loadedUser) return;
    // Fingerprint in the BODY, not the path: SHA256 fingerprints are base64 and
    // legitimately contain "/", and an ASGI server decodes %2F back to a literal
    // slash before routing — so a valid fingerprint would 404 in a path segment.
    await stream(`/ssh/${encodeURIComponent(loadedUser)}/keys/remove`, "POST", {
      fingerprint,
    });
  }

  async function togglePasswordAuth(enabled: boolean) {
    if (!loadedUser) return;
    setPasswordAuth(enabled);
    await stream(`/ssh/${encodeURIComponent(loadedUser)}/password-auth`, "PUT", { enabled });
  }

  return (
    <Stack spacing={2}>
      {error && <Alert severity="error">{error}</Alert>}

      <Panel label="Account">
        <Stack
          component="form"
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ alignItems: { sm: "flex-end" } }}
          onSubmit={(e) => {
            e.preventDefault();
            if (target) loadAccount(target);
          }}
        >
          <Field label="Linux username" sx={{ flex: 1, maxWidth: 320 }}>
            <TextField
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="webdev"
              fullWidth
              required
            />
          </Field>
          <Button type="submit" variant="contained" startIcon={<SearchIcon sx={{ fontSize: 14 }} />}>
            Load
          </Button>
        </Stack>
      </Panel>

      {(lines.length > 0 || running) && <LogPane lines={lines} running={running} />}

      {loadedUser && (
        <>
          <Panel
            label={`Authorized keys · ${loadedUser}`}
            action={
              passwordAuth !== null && (
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                    Password auth
                  </Typography>
                  <Switch
                    size="small"
                    checked={passwordAuth}
                    disabled={running}
                    onChange={(e) => togglePasswordAuth(e.target.checked)}
                  />
                </Stack>
              )
            }
            padded={false}
          >
            {!keys.length && (
              <Typography variant="body2" sx={{ p: 2, color: "text.disabled" }}>
                No keys installed. This account cannot log in by key.
              </Typography>
            )}
            {keys.length > 0 && (
              <TableContainer sx={{ overflowX: "auto" }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Fingerprint</TableCell>
                      <TableCell>Comment</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {keys.map((key) => (
                      <TableRow key={key.fingerprint} hover>
                        <TableCell>
                          <Chip size="small" variant="filled" color="primary"
                                label={`${key.type}${key.bits ? ` ${key.bits}` : ""}`} />
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.7rem" }}>
                          {key.fingerprint}
                        </TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>
                          {key.comment || "—"}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Remove key" arrow>
                            <span>
                              <IconButton
                                color="error"
                                disabled={running}
                                onClick={() => removeKey(key.fingerprint)}
                              >
                                <DeleteIcon sx={{ fontSize: 15 }} />
                              </IconButton>
                            </span>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Panel>

          <Panel label="Add a public key">
            <Stack component="form" spacing={1.5} onSubmit={addKey}>
              <Field
                label="Public key"
                hint="the contents of a .pub file — never a private key"
              >
                <TextField
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  placeholder="ssh-ed25519 AAAAC3Nza… user@laptop"
                  fullWidth
                  required
                  multiline
                  minRows={2}
                  slotProps={{ input: { sx: { fontFamily: MONO, fontSize: "0.72rem" } } }}
                />
              </Field>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={running || !newKey.trim()}
                  startIcon={<KeyIcon sx={{ fontSize: 14 }} />}
                >
                  {running ? "Working…" : "Add key"}
                </Button>
              </Box>
            </Stack>
          </Panel>
        </>
      )}

      <Panel label={`Active sessions · ${sessions.length}`} padded={false}>
        {!sessions.length && (
          <Typography variant="body2" sx={{ p: 2, color: "text.disabled" }}>
            No active SSH sessions.
          </Typography>
        )}
        {sessions.length > 0 && (
          <TableContainer sx={{ overflowX: "auto" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>TTY</TableCell>
                  <TableCell>Since</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sessions.map((session, i) => (
                  <TableRow key={`${session.user}-${session.tty}-${i}`} hover>
                    <TableCell>
                      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                        <Dot ok />
                        <Box sx={{ fontFamily: MONO }}>{session.user}</Box>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontFamily: MONO }}>{session.from || "—"}</TableCell>
                    <TableCell sx={{ fontFamily: MONO }}>{session.tty || "—"}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>
                      {session.login_time || "—"}
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
