/**
 * HostPanel v3 — WireGuard VPN Management UI.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider, alpha, createTheme, type ThemeOptions } from "@mui/material/styles";

// Icons
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RouterIcon from "@mui/icons-material/Router";
import PeopleIcon from "@mui/icons-material/People";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsIcon from "@mui/icons-material/Settings";
import ShieldIcon from "@mui/icons-material/Shield";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  DNS_PRESETS,
  type CreatePeerRequest,
  type ImportPeerRequest,
  type PackageContext,
  type PeerItem,
  type ServerConfig,
  type ServiceMeta,
  type ServerStatus,
} from "./types";
import {
  CONSOLE,
  Dot,
  Field,
  LogPane,
  MONO,
  MicroLabel,
  Panel,
  Readout,
  appendEvent,
  type Line,
} from "./kit";
import { QRCodeCanvas } from "./qr";

function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function formatHandshake(timestamp: number): string {
  if (!timestamp || timestamp === 0) return "Never";
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function switchEndpointInConfig(confText: string, newEndpoint: string): string {
  if (!confText || !newEndpoint) return confText;
  return confText.replace(/^Endpoint\s*=\s*[^:\s\r\n]+(:51820)?/gm, `Endpoint = ${newEndpoint}:51820`);
}

/** Padding for a stat card's body.
 *
 *  MUI gives the last `CardContent` an extra 24px of bottom padding — a reading
 *  affordance that leaves a visibly lopsided gap under a three-line stat. The
 *  other package pages override it back to the horizontal value; so does this. */
const CARD_BODY = { p: 2, "&:last-child": { pb: 2 } } as const;

/** Padding inside a tab panel, matching the SSL and Nginx pages. */
const PANEL_PAD = 2.25;

export function WireguardPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <WireguardBody ctx={ctx} />
    </ThemeProvider>
  );
}

function WireguardBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState<number>(0);
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [config, setConfig] = useState<ServerConfig | null>(null);
  const [meta, setMeta] = useState<ServiceMeta | null>(null);
  const [peers, setPeers] = useState<PeerItem[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Streaming ops modal
  const [streamModalOpen, setStreamModalOpen] = useState(false);
  const [streamTitle, setStreamTitle] = useState("");
  const [streamLines, setStreamLines] = useState<Line[]>([]);
  const [streamRunning, setStreamRunning] = useState(false);

  const [peerForm, setPeerForm] = useState<CreatePeerRequest>({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: DNS_PRESETS[0].servers,
    preshared_key: "",
  });
  const [dnsPreset, setDnsPreset] = useState(DNS_PRESETS[0].id);
  const [allowedPreset, setAllowedPreset] = useState("all");
  const [peerMode, setPeerMode] = useState<"create" | "import">("create");
  const [importPublicKey, setImportPublicKey] = useState("");

  // Newly created peer modal
  const [createdPeer, setCreatedPeer] = useState<PeerItem | null>(null);

  // View QR modal
  const [qrModalPeer, setQrModalPeer] = useState<PeerItem | null>(null);
  const [qrModalConfig, setQrModalConfig] = useState<string>("");

  // Endpoint management & modal toggle state
  const [endpointInput, setEndpointInput] = useState("");
  const [savingEndpoint, setSavingEndpoint] = useState(false);
  const [createdPeerEndpoint, setCreatedPeerEndpoint] = useState("");
  const [qrModalEndpoint, setQrModalEndpoint] = useState("");

  // Delete peer confirm dialog
  const [deletePeerTarget, setDeletePeerTarget] = useState<PeerItem | null>(null);

  // Rename peer dialog
  const [renamePeerTarget, setRenamePeerTarget] = useState<PeerItem | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const json = useCallback(
    async (path: string, init?: RequestInit) => {
      const response = await ctx.api(path, init);
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.message ?? `HTTP ${response.status}`);
      return body;
    },
    [ctx]
  );

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const [st, cfg, prs, lg, mt] = await Promise.all([
        json("/server/status").catch(() => null),
        json("/server/config").catch(() => null),
        json("/peers").catch(() => ({ peers: [] })),
        json("/server/logs").catch(() => ({ logs: [] })),
        json("/meta").catch(() => null),
      ]);
      if (st) setStatus(st);
      if (cfg) setConfig(cfg);
      if (mt) setMeta(mt);
      setPeers(prs?.peers ?? []);
      setLogs(lg?.logs ?? []);
    } catch (e: any) {
      setToast(e.message || "Failed to load WireGuard data");
    } finally {
      setLoading(false);
    }
  }, [json]);

  useEffect(() => {
    loadAll();
    const interval = setInterval(loadAll, 15000);
    return () => clearInterval(interval);
  }, [loadAll]);

  // Run a streaming operation with live terminal output modal
  async function runStreamOp(title: string, path: string, method: string, body?: unknown) {
    setStreamTitle(title);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      for await (const event of ctx.run(path, { method, body, signal: controller.signal })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
      loadAll();
    } catch (err) {
      if (!controller.signal.aborted) {
        setStreamLines((prev) => [...prev, { stream: "stderr", text: String(err) }]);
      }
    } finally {
      setStreamRunning(false);
    }
  }

  // Handle server actions
  const handleServerStart = () => runStreamOp("Starting WireGuard Server", "/server/start", "POST");
  const handleServerStop = () => runStreamOp("Stopping WireGuard Server", "/server/stop", "POST");
  const handleServerRestart = () =>
    runStreamOp("Restarting WireGuard Server", "/server/restart", "POST");

  // Create or Import Peer Submit
  const handleCreatePeerSubmit = async () => {
    if (!peerForm.name.trim()) {
      setToast("Peer name is required");
      return;
    }
    if (peerMode === "import" && !importPublicKey.trim()) {
      setToast("Client public key is required for import");
      return;
    }
    setLoading(true);
    try {
      if (peerMode === "import") {
        const payload: ImportPeerRequest = {
          name: peerForm.name.trim(),
          public_key: importPublicKey.trim(),
          ip: peerForm.ip?.trim() || undefined,
          allowed_ips: peerForm.allowed_ips || "0.0.0.0/0, ::/0",
          dns: peerForm.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: peerForm.preshared_key ? peerForm.preshared_key : undefined,
        };

        const res = await json("/peers/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res?.peer) {
          setCreatedPeer(res.peer);
          setCreatedPeerEndpoint(config?.endpoint || "");
          setTab(0);
          setPeerForm({
            name: "",
            ip: "",
            allowed_ips: "0.0.0.0/0, ::/0",
            dns: DNS_PRESETS[0].servers,
            preshared_key: "",
          });
          setDnsPreset(DNS_PRESETS[0].id);
          setImportPublicKey("");
          loadAll();
        }
      } else {
        const payload: CreatePeerRequest = {
          name: peerForm.name.trim(),
          ip: peerForm.ip?.trim() || undefined,
          allowed_ips: peerForm.allowed_ips || "0.0.0.0/0, ::/0",
          dns: peerForm.dns || DNS_PRESETS[0].servers,
          preshared_key: peerForm.preshared_key ? peerForm.preshared_key : undefined,
        };

        const res = await json("/peers/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res?.peer) {
          setCreatedPeer(res.peer);
          setCreatedPeerEndpoint(config?.endpoint || "");
          setTab(0);
          setPeerForm({
            name: "",
            ip: "",
            allowed_ips: "0.0.0.0/0, ::/0",
            dns: DNS_PRESETS[0].servers,
            preshared_key: "",
          });
          setDnsPreset(DNS_PRESETS[0].id);
          loadAll();
        }
      }
    } catch (e: any) {
      setToast(e.message || "Failed to create or import client peer");
    } finally {
      setLoading(false);
    }
  };

  // Toggle Peer Enable/Disable
  const handleTogglePeer = async (peer: PeerItem) => {
    try {
      await json(`/peers/${encodeURIComponent(peer.id)}/toggle`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !peer.enabled }),
      });
      setToast(`Peer ${peer.name} ${peer.enabled ? "disabled" : "enabled"}`);
      loadAll();
    } catch (e: any) {
      setToast(e.message || "Failed to toggle peer");
    }
  };

  // Rename Peer Submit
  const handleRenamePeerSubmit = async () => {
    if (!renamePeerTarget || !renameValue.trim()) return;
    try {
      await json(`/peers/${encodeURIComponent(renamePeerTarget.id)}/rename`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ new_name: renameValue.trim() }),
      });
      setToast(`Peer renamed to ${renameValue.trim()}`);
      setRenamePeerTarget(null);
      setRenameValue("");
      loadAll();
    } catch (e: any) {
      setToast(e.message || "Failed to rename peer");
    }
  };

  // Delete Peer
  const handleDeletePeer = async (peer: PeerItem) => {
    setDeletePeerTarget(null);
    await runStreamOp(`Deleting Peer ${peer.name}`, `/peers/${encodeURIComponent(peer.id)}`, "DELETE");
  };

  // Save or reset server endpoint
  const handleSaveEndpoint = async (newEp: string) => {
    setSavingEndpoint(true);
    try {
      const res = await json("/server/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: newEp }),
      });
      setToast(`WireGuard server endpoint set to: ${res?.endpoint || newEp}`);
      setEndpointInput("");
      const updatedCfg = await json("/server/config");
      if (updatedCfg) setConfig(updatedCfg);
    } catch (e: any) {
      setToast(e.message || "Failed to update endpoint");
    } finally {
      setSavingEndpoint(false);
    }
  };

  // Open QR modal for existing peer
  const handleOpenQrModal = async (peer: PeerItem) => {
    setQrModalPeer(peer);
    setQrModalEndpoint(config?.endpoint || "");
    try {
      const res = await json(`/peers/${encodeURIComponent(peer.id)}/config`);
      setQrModalConfig(res?.config || "");
    } catch {
      setQrModalConfig("# Error loading peer configuration");
    }
  };

  // Download .conf file
  const downloadConfFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.conf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const isRunning = status?.status === "running";

  // The shell already supplies the page frame — `App.tsx` wraps every package in
  // `p: {xs:2, md:3}` with `maxWidth: 1280`. Declaring either one again here
  // doubled the gutter to 48px and nested a 1280 box inside a 1280 box, so the
  // root is a bare column and the `gap` replaces the per-section `mb`.
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* ── Top Action Bar ────────────────────────────────────────────────── */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <VpnKeyIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              WireGuard VPN
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              High-performance kernel VPN tunnels &amp; client access
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
          <Chip
            size="small"
            label={isRunning ? "RUNNING" : "STOPPED"}
            color={isRunning ? "success" : "default"}
            sx={{ fontWeight: 700, letterSpacing: "0.05em" }}
          />
          <Chip
            size="small"
            label={`PORT ${config?.listen_port ?? status?.listen_port ?? "—"}/UDP`}
            variant="outlined"
            sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
          />
          <Chip
            size="small"
            label={status?.endpoint || "127.0.0.1"}
            variant="outlined"
            sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
          />
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
          {/* Refresh */}
          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={loadAll}
                disabled={loading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {loading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Lifecycle: Start / Stop / Restart */}
          {isRunning ? (
            <>
              <Tooltip title="Restart WireGuard Server" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="warning"
                    onClick={handleServerRestart}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    <RestartAltIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Stop WireGuard Server" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={handleServerStop}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    <StopIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </span>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Start WireGuard Server" arrow>
              <span>
                <IconButton
                  size="small"
                  color="success"
                  onClick={handleServerStart}
                  sx={{ border: "1px solid", borderColor: "success.main", bgcolor: (t) => alpha(t.palette.success.main, 0.1) }}
                >
                  <PlayArrowIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </span>
            </Tooltip>
          )}

          {/* Primary Action Button */}
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => setTab(1)}
            sx={{ ml: 1, whiteSpace: "nowrap" }}
          >
            Add Client Peer
          </Button>
        </Stack>
      </Stack>

      {/* ── 4 Overview Stat Cards ─────────────────────────────────────────── */}
      {/* `variant="outlined"` and the surface colour already come from the theme,
          and `borderRadius: 2` meant 2 × the theme's 8px — a 16px corner that no
          other package draws. CARD_BODY restores MUI's last-child bottom padding
          to the same 16px as the other three sides. */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }}>
        <Card variant="outlined">
          <CardContent sx={CARD_BODY}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ minWidth: 0 }}>
                <MicroLabel>VPN Server Status</MicroLabel>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 0.5 }}>
                  <Dot ok={isRunning} size={10} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {isRunning ? `Active (${config?.interface || "wg0"})` : "Inactive"}
                  </Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: "text.disabled", fontFamily: MONO }}>
                  Port: {config?.listen_port ?? status?.listen_port ?? "—"} • UDP
                </Typography>
              </Box>
              <ShieldIcon sx={{ color: isRunning ? "success.main" : "text.disabled" }} />
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent sx={CARD_BODY}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ minWidth: 0 }}>
                <MicroLabel>Connected Peers</MicroLabel>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                  {status?.active_peers_count ?? 0}{" "}
                  <Typography component="span" variant="body2" sx={{ color: "text.secondary" }}>
                    / {peers.length} Total
                  </Typography>
                </Typography>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>
                  Active handshakes &lt; 3m
                </Typography>
              </Box>
              <PeopleIcon sx={{ color: "primary.main" }} />
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent sx={CARD_BODY}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ minWidth: 0 }}>
                <MicroLabel>Total Bandwidth</MicroLabel>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, fontFamily: MONO }}>
                  ↓ {formatBytes(status?.total_rx_bytes ?? 0)}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: MONO }}>
                  ↑ {formatBytes(status?.total_tx_bytes ?? 0)}
                </Typography>
              </Box>
              <DataUsageIcon sx={{ color: "info.main" }} />
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent sx={CARD_BODY}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ minWidth: 0 }}>
                <MicroLabel>VPN Subnet</MicroLabel>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, fontFamily: MONO }}>
                  {config?.subnet || status?.subnet || "—"}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.disabled", fontFamily: MONO }}>
                  Gateway: {config?.address || status?.address || "—"}
                </Typography>
              </Box>
              <RouterIcon sx={{ color: "warning.main" }} />
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {/* ── Bordered Paper with 5 Tabs ───────────────────────────────────── */}
      <Paper sx={{ overflow: "hidden" }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
          }}
        >
          <Tab icon={<PeopleIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="VPN Client Peers" />
          <Tab icon={<AddIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Add Client Peer" />
          <Tab icon={<SettingsIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Server Configuration" />
          <Tab icon={<TerminalIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Live Traffic Logs" />
          <Tab icon={<ShieldIcon sx={{ fontSize: 18 }} />} iconPosition="start" label="Service &amp; Isolation" />
        </Tabs>

        {/* ── Tab 1: VPN Client Peers Table ───────────────────────────────── */}
        {tab === 0 && (
          <Box>
            <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <Table size="medium" sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: "action.hover" }}>
                    <TableCell sx={{ width: 40 }}></TableCell>
                    <TableCell><MicroLabel>Peer Name</MicroLabel></TableCell>
                    <TableCell><MicroLabel>Assigned IP</MicroLabel></TableCell>
                    <TableCell><MicroLabel>Public Key</MicroLabel></TableCell>
                    <TableCell><MicroLabel>Last Handshake</MicroLabel></TableCell>
                    <TableCell><MicroLabel>Transfer (Rx / Tx)</MicroLabel></TableCell>
                    <TableCell align="right"><MicroLabel>Actions</MicroLabel></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {peers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center" sx={{ py: 5 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                          No VPN client peers configured yet.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={() => setTab(1)}
                        >
                          Create First Peer
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    peers.map((peer) => {
                      const hasRecentHandshake =
                        peer.last_handshake > 0 &&
                        Math.floor(Date.now() / 1000) - peer.last_handshake < 180;
                      return (
                        <TableRow key={peer.id} hover sx={{ opacity: peer.enabled ? 1 : 0.6 }}>
                          <TableCell>
                            <Dot ok={peer.enabled && hasRecentHandshake} size={8} />
                          </TableCell>
                          <TableCell>
                            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                              <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                                {peer.name}
                              </Typography>
                              {!peer.enabled && (
                                <Chip size="small" label="DISABLED" color="default" sx={{ fontSize: "0.65rem", height: 18 }} />
                              )}
                              {peer.imported && (
                                <Chip size="small" label="IMPORTED" color="info" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                              )}
                            </Stack>
                            <Typography variant="caption" sx={{ color: "text.disabled", fontFamily: MONO }}>
                              id: {peer.id}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              size="small"
                              label={peer.ip}
                              sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
                            />
                            {peer.dns ? (
                              <Typography
                                variant="caption"
                                sx={{
                                  display: "block",
                                  color: "text.secondary",
                                  fontFamily: MONO,
                                  fontSize: "0.6875rem",
                                  mt: 0.5,
                                  maxWidth: 160,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                                title={`DNS: ${peer.dns}`}
                              >
                                DNS: {peer.dns}
                              </Typography>
                            ) : null}
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fontFamily: MONO,
                                fontSize: "0.75rem",
                                color: "text.secondary",
                                maxWidth: 160,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {peer.public_key}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                              {formatHandshake(peer.last_handshake)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={{ fontFamily: MONO, fontSize: "0.75rem" }}>
                              ↓ {formatBytes(peer.rx_bytes)} / ↑ {formatBytes(peer.tx_bytes)}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                              <Tooltip title={peer.enabled ? "Disable Peer" : "Enable Peer"}>
                                <IconButton
                                  size="small"
                                  onClick={() => handleTogglePeer(peer)}
                                >
                                  {peer.enabled ? (
                                    <ToggleOnIcon fontSize="small" color="success" />
                                  ) : (
                                    <ToggleOffIcon fontSize="small" color="action" />
                                  )}
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="Rename Peer">
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    setRenamePeerTarget(peer);
                                    setRenameValue(peer.name);
                                  }}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="View QR Code & Config">
                                <IconButton
                                  size="small"
                                  color="primary"
                                  onClick={() => handleOpenQrModal(peer)}
                                >
                                  <QrCode2Icon fontSize="small" />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="Download .conf file">
                                <IconButton
                                  size="small"
                                  onClick={async () => {
                                    const res = await json(
                                      `/peers/${encodeURIComponent(peer.id)}/config`
                                    );
                                    if (res?.config) downloadConfFile(peer.name, res.config);
                                  }}
                                >
                                  <DownloadIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="Delete Peer">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => setDeletePeerTarget(peer)}
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* ── Tab 2: Add Client Peer View ─────────────────────────────────── */}
        {tab === 1 && (
          <Box sx={{ p: PANEL_PAD, maxWidth: 640 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {peerMode === "import" ? "Import Existing VPN Client Profile" : "Create New VPN Client Profile"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              {peerMode === "import"
                ? "Registers an existing client public key without storing private credentials on the server."
                : "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code."}
            </Typography>

            <Box sx={{ mb: 2.5 }}>
              <ButtonGroup size="small">
                <Button
                  variant={peerMode === "create" ? "contained" : "outlined"}
                  onClick={() => setPeerMode("create")}
                >
                  Generate New Keys
                </Button>
                <Button
                  variant={peerMode === "import" ? "contained" : "outlined"}
                  onClick={() => setPeerMode("import")}
                >
                  Import Existing Public Key
                </Button>
              </ButtonGroup>
            </Box>

            <Stack spacing={2.5}>
              <Field label="Peer / Device Name" hint="Alphanumeric (e.g. phone, macbook, router)">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="e.g. alice-iphone"
                  value={peerForm.name}
                  onChange={(e) => setPeerForm({ ...peerForm, name: e.target.value })}
                />
              </Field>

              {peerMode === "import" && (
                <Field label="Client Public Key" hint="Base64 Curve25519 public key (44 chars, e.g. from wg pubkey)">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="e.g. 7XpQ...="
                    value={importPublicKey}
                    onChange={(e) => setImportPublicKey(e.target.value)}
                    slotProps={{
                      input: {
                        sx: { fontFamily: MONO, fontSize: "0.8125rem" },
                      },
                    }}
                  />
                </Field>
              )}

              <Field label="Assigned Client IP" hint="Leave empty to auto-allocate next available 10.8.0.x">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Auto-allocated (e.g. 10.8.0.2)"
                  value={peerForm.ip}
                  onChange={(e) => setPeerForm({ ...peerForm, ip: e.target.value })}
                />
              </Field>

              <Field label="Traffic Routing (Allowed IPs)" hint="What traffic this client routes through VPN">
                <Select
                  fullWidth
                  size="small"
                  value={allowedPreset}
                  onChange={(e) => {
                    const v = e.target.value;
                    setAllowedPreset(v);
                    if (v === "all") setPeerForm({ ...peerForm, allowed_ips: "0.0.0.0/0, ::/0" });
                    else if (v === "subnet")
                      setPeerForm({ ...peerForm, allowed_ips: "10.8.0.0/24" });
                  }}
                >
                  <MenuItem value="all">Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)</MenuItem>
                  <MenuItem value="subnet">Split Tunnel (VPN Subnet Only: 10.8.0.0/24)</MenuItem>
                  <MenuItem value="custom">Custom Allowed IPs</MenuItem>
                </Select>
              </Field>

              {allowedPreset === "custom" && (
                <TextField
                  fullWidth
                  size="small"
                  placeholder="0.0.0.0/0, ::/0"
                  value={peerForm.allowed_ips}
                  onChange={(e) => setPeerForm({ ...peerForm, allowed_ips: e.target.value })}
                />
              )}

              <Field
                label="DNS Resolver Preset"
                hint="Curated privacy and security resolver presets or custom addresses"
              >
                <Select
                  fullWidth
                  size="small"
                  value={dnsPreset}
                  onChange={(e) => {
                    const v = e.target.value;
                    setDnsPreset(v);
                    const found = DNS_PRESETS.find((p) => p.id === v);
                    if (found && found.id !== "custom") {
                      setPeerForm({ ...peerForm, dns: found.servers });
                    }
                  }}
                >
                  {DNS_PRESETS.map((preset) => (
                    <MenuItem key={preset.id} value={preset.id}>
                      <Box sx={{ py: 0.5, width: "100%" }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {preset.name}
                          </Typography>
                          {preset.servers ? (
                            <Chip
                              size="small"
                              label={preset.servers}
                              variant="outlined"
                              sx={{ fontFamily: MONO, fontSize: "0.6875rem", height: 18 }}
                            />
                          ) : null}
                        </Stack>
                        <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 0.25 }}>
                          {preset.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>

                <Stack direction="row" spacing={0.75} sx={{ mt: 1, flexWrap: "wrap", gap: 0.5 }}>
                  {DNS_PRESETS.map((p) => (
                    <Chip
                      key={p.id}
                      size="small"
                      label={p.shortLabel}
                      variant={dnsPreset === p.id ? "filled" : "outlined"}
                      color={dnsPreset === p.id ? "primary" : "default"}
                      onClick={() => {
                        setDnsPreset(p.id);
                        if (p.id !== "custom") {
                          setPeerForm({ ...peerForm, dns: p.servers });
                        }
                      }}
                      sx={{ cursor: "pointer", fontSize: "0.75rem", height: 22 }}
                    />
                  ))}
                </Stack>
              </Field>

              <Field
                label="Client DNS Addresses"
                hint="Comma-separated DNS server IPs assigned to this client profile"
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="e.g. 1.1.1.1, 1.0.0.1"
                  value={peerForm.dns}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPeerForm({ ...peerForm, dns: val });
                    const match = DNS_PRESETS.find((p) => p.servers === val.trim());
                    setDnsPreset(match ? match.id : "custom");
                  }}
                  slotProps={{
                    input: {
                      sx: { fontFamily: MONO, fontSize: "0.8125rem" },
                    },
                  }}
                />
              </Field>

              <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCreatePeerSubmit}
                  disabled={loading || !peerForm.name.trim() || (peerMode === "import" && !importPublicKey.trim())}
                  startIcon={loading ? <CircularProgress size={16} /> : <CheckCircleIcon />}
                  sx={{ fontWeight: 700 }}
                >
                  {peerMode === "import" ? "Import Client Profile" : "Generate Peer Profile & QR Code"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        )}

        {/* ── Tab 3: Server Configuration ─────────────────────────────────── */}
        {tab === 2 && (
          <Box sx={{ p: PANEL_PAD }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              WireGuard Server Parameters
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
              <Box>
                <Panel label="Interface & Port">
                  <Stack spacing={2}>
                    <Readout label="Interface Device" value={config?.interface ?? "—"} />
                    <Readout label="Listen Port (UDP)" value={config?.listen_port ?? "—"} />
                    <Readout label="Interface IP Address" value={config?.address ?? "—"} />
                    <Readout label="Tunnel MTU" value={config?.mtu ?? "—"} />
                  </Stack>
                </Panel>
              </Box>

              <Box>
                <Panel label="Network & Public Keys">
                  <Stack spacing={2}>
                    <Readout label="VPN Subnet" value={config?.subnet ?? "—"} />
                    <Box>
                      <MicroLabel>Server Public Key</MicroLabel>
                      <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 0.5 }}>
                        <Typography
                          sx={{
                            fontFamily: MONO,
                            fontSize: "0.75rem",
                            bgcolor: "action.hover",
                            p: 1,
                            borderRadius: 1,
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {config?.public_key || "Loading..."}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => {
                            if (config?.public_key) {
                              navigator.clipboard.writeText(config.public_key);
                              setToast("Server public key copied to clipboard");
                            }
                          }}
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Stack>
                </Panel>
              </Box>

              <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
                <Panel label="Server Public Endpoint & Connection Routing">
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", fontFamily: MONO }}>
                        {config?.endpoint ?? "—"}
                      </Typography>
                      {config?.custom_endpoint ? (
                        <Chip label="Custom Override" size="small" color="primary" variant="outlined" />
                      ) : (
                        <Chip label="Auto-Detected" size="small" color="default" variant="outlined" />
                      )}
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Endpoint embedded in client profiles &amp; QR codes. When testing on local Wi-Fi without router NAT hairpinning, select <strong>LAN IP</strong>. For remote or cellular (4G/5G) connections, select <strong>WAN IP</strong> or enter a domain name.
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}>
                      {config?.lan_ip && (
                        <Button
                          size="small"
                          variant={config.endpoint === config.lan_ip ? "contained" : "outlined"}
                          onClick={() => handleSaveEndpoint(config.lan_ip!)}
                          disabled={savingEndpoint}
                          sx={{ textTransform: "none", fontWeight: 600 }}
                        >
                          Use LAN IP ({config.lan_ip})
                        </Button>
                      )}
                      {config?.wan_ip && config.wan_ip !== config.lan_ip && (
                        <Button
                          size="small"
                          variant={config.endpoint === config.wan_ip ? "contained" : "outlined"}
                          onClick={() => handleSaveEndpoint(config.wan_ip!)}
                          disabled={savingEndpoint}
                          sx={{ textTransform: "none", fontWeight: 600 }}
                        >
                          Use WAN IP ({config.wan_ip})
                        </Button>
                      )}
                      {config?.custom_endpoint && (
                        <Button
                          size="small"
                          variant="text"
                          color="secondary"
                          onClick={() => handleSaveEndpoint("auto")}
                          disabled={savingEndpoint}
                          sx={{ textTransform: "none" }}
                        >
                          Reset Auto-Detect
                        </Button>
                      )}
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{ mt: 1, maxWidth: 500 }}>
                      <TextField
                        size="small"
                        placeholder="Custom IP or Domain (e.g. vpn.example.com)"
                        value={endpointInput}
                        onChange={(e) => setEndpointInput(e.target.value)}
                        sx={{ flex: 1 }}
                        slotProps={{ input: { sx: { fontFamily: MONO, fontSize: "0.8125rem" } } }}
                      />
                      <Button
                        variant="contained"
                        size="small"
                        disabled={!endpointInput.trim() || savingEndpoint}
                        onClick={() => handleSaveEndpoint(endpointInput.trim())}
                        sx={{ fontWeight: 600, textTransform: "none" }}
                      >
                        Set Endpoint
                      </Button>
                    </Stack>
                  </Stack>
                </Panel>
              </Box>

              <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
                <Panel label="Configuration File on Disk">
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                    All WireGuard settings and keys live exclusively under HostPanel root:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: MONO,
                      fontSize: "0.8125rem",
                      bgcolor: "action.hover",
                      p: 1.5,
                      borderRadius: 1,
                    }}
                  >
                    {config?.config_path ?? "—"}
                  </Typography>
                </Panel>
              </Box>
            </Box>
          </Box>
        )}

        {/* ── Tab 4: Live Traffic Logs ────────────────────────────────────── */}
        {tab === 3 && (
          <Box sx={{ p: PANEL_PAD }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                WireGuard Tunnel &amp; Handshake Logs
              </Typography>
              <Button size="small" variant="outlined" startIcon={<RefreshIcon />} onClick={loadAll}>
                Refresh Logs
              </Button>
            </Stack>

            <Paper
              sx={{
                bgcolor: CONSOLE.bg,
                p: 2,
                maxHeight: "26rem",
                overflowY: "auto",
                fontFamily: MONO,
                fontSize: 12,
                lineHeight: 1.6,
                color: CONSOLE.fg,
              }}
            >
              {logs.length === 0 ? (
                <Typography sx={{ color: CONSOLE.dim, fontFamily: MONO }}>
                  No recent kernel or handshake events recorded.
                </Typography>
              ) : (
                logs.map((log, i) => (
                  <Box key={i} sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {log}
                  </Box>
                ))
              )}
            </Paper>
          </Box>
        )}

        {/* ── Tab 5: Service & Isolation ──────────────────────────────────── */}
        {tab === 4 && (
          <Box sx={{ p: PANEL_PAD }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Strict 100% Isolation Architecture
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              HostPanel v3 enforces full isolation under <code>/opt/hostpanel</code>. No configuration or socket is scattered across system <code>/etc/wireguard</code>.
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
              <Box>
                <Panel label="Daemon &amp; Sandbox Specs">
                  <Stack spacing={2}>
                    <Readout label="Systemd Unit" value={meta?.unit ?? "\u2014"} />
                    <Readout label="Run As User" value={meta?.run_as ?? "\u2014"} />
                    <Readout
                      label="Loopback Port"
                      value={meta?.port ? `${meta.port} (${meta.host})` : "\u2014"}
                    />
                    <Readout label="Root Ops Helper" value={meta?.ops_script ?? "\u2014"} />
                  </Stack>
                </Panel>
              </Box>

              <Box>
                <Panel label="Isolated Path Sandboxes">
                  <Stack spacing={2}>
                    <Readout label="Config Directory" value={config?.isolation_path ?? "\u2014"} />
                    <Readout label="Runtime / Sockets" value={config?.run_path ?? "\u2014"} />
                    <Readout label="Audit &amp; Traffic Logs" value={config?.logs_path ?? "\u2014"} />
                    <Readout label="Client Profiles Dir" value={config?.peers_path ?? "\u2014"} />
                    <Readout label="Engine Runtime" value={config?.runtime_path ?? "\u2014"} />
                  </Stack>
                </Panel>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>

      {/* ── Modal: Newly Created Peer (QR & Config Download) ─────────────── */}
      <Dialog
        open={Boolean(createdPeer)}
        onClose={() => setCreatedPeer(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>
          Client Peer Created: {createdPeer?.name}
        </DialogTitle>
        <DialogContent dividers>
          {(() => {
            const activeConfig = createdPeer?.config
              ? switchEndpointInConfig(createdPeer.config, createdPeerEndpoint || config?.endpoint || "")
              : "";
            const currentEp = createdPeerEndpoint || config?.endpoint || "";

            return (
              <Stack spacing={2.5} sx={{ alignItems: "center", py: 1 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
                  Scan this QR code with the WireGuard mobile app (iOS / Android) or download the <code>.conf</code> file for desktop.
                </Typography>

                {createdPeer?.imported && (
                  <Alert severity="info" sx={{ width: "100%", fontSize: "0.8125rem" }}>
                    <strong>Client-Side Keys:</strong> This peer was registered using an imported public key. The private key remains exclusively on the client device.
                  </Alert>
                )}

                {/* Connection Endpoint Switcher */}
                {(config?.lan_ip || config?.wan_ip) && (
                  <Box sx={{ width: "100%", bgcolor: "action.hover", p: 1.5, borderRadius: 1.5 }}>
                    <MicroLabel sx={{ mb: 0.75 }}>Connection Endpoint Destination</MicroLabel>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                      {config?.lan_ip && (
                        <Chip
                          label={`LAN Wi-Fi: ${config.lan_ip}`}
                          clickable
                          color={currentEp === config.lan_ip ? "primary" : "default"}
                          onClick={() => setCreatedPeerEndpoint(config.lan_ip!)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                      {config?.wan_ip && config.wan_ip !== config.lan_ip && (
                        <Chip
                          label={`WAN / 4G / 5G: ${config.wan_ip}`}
                          clickable
                          color={currentEp === config.wan_ip ? "primary" : "default"}
                          onClick={() => setCreatedPeerEndpoint(config.wan_ip!)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                      {config?.endpoint && config.endpoint !== config.lan_ip && config.endpoint !== config.wan_ip && (
                        <Chip
                          label={`Custom: ${config.endpoint}`}
                          clickable
                          color={currentEp === config.endpoint ? "primary" : "default"}
                          onClick={() => setCreatedPeerEndpoint(config.endpoint)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                    </Stack>
                    <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.75, display: "block" }}>
                      {currentEp === config?.lan_ip
                        ? "✓ Local LAN endpoint: Phone connects directly inside Wi-Fi (bypasses router NAT loopback drops)."
                        : "ℹ WAN IP endpoint: For cellular (4G/5G). Ensure your home router forwards UDP port 51820 to " + (config?.lan_ip || "the server") + "."}
                    </Typography>
                  </Box>
                )}

                {activeConfig && (
                  <QRCodeCanvas
                    text={activeConfig}
                    size={240}
                    filename={`${createdPeer?.name || "wireguard"}-profile`}
                  />
                )}

                <Chip
                  label={`Assigned IP: ${createdPeer?.ip || "10.8.0.x"}`}
                  color="primary"
                  sx={{ fontWeight: 700, fontFamily: MONO }}
                />

                <Box sx={{ width: "100%" }}>
                  <MicroLabel sx={{ mb: 0.5 }}>Client Configuration File</MicroLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    value={activeConfig}
                    slotProps={{
                      input: {
                        readOnly: true,
                        sx: { fontFamily: MONO, fontSize: "0.75rem" },
                      },
                    }}
                  />
                </Box>
              </Stack>
            );
          })()}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            startIcon={<ContentCopyIcon />}
            onClick={() => {
              const activeConfig = createdPeer?.config
                ? switchEndpointInConfig(createdPeer.config, createdPeerEndpoint || config?.endpoint || "")
                : "";
              if (activeConfig) {
                navigator.clipboard.writeText(activeConfig);
                setToast("Configuration copied to clipboard");
              }
            }}
          >
            Copy Text
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => {
              const activeConfig = createdPeer?.config
                ? switchEndpointInConfig(createdPeer.config, createdPeerEndpoint || config?.endpoint || "")
                : "";
              if (createdPeer?.name && activeConfig) {
                downloadConfFile(createdPeer.name, activeConfig);
              }
            }}
            sx={{ fontWeight: 700 }}
          >
            Download .conf
          </Button>
          <Button onClick={() => setCreatedPeer(null)}>Done</Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: View Peer QR Code & Config ─────────────────────────────── */}
      <Dialog
        open={Boolean(qrModalPeer)}
        onClose={() => {
          setQrModalPeer(null);
          setQrModalConfig("");
        }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>
          WireGuard Profile: {qrModalPeer?.name} ({qrModalPeer?.ip})
        </DialogTitle>
        <DialogContent dividers>
          {(() => {
            const activeConfig = qrModalConfig
              ? switchEndpointInConfig(qrModalConfig, qrModalEndpoint || config?.endpoint || "")
              : "";
            const currentEp = qrModalEndpoint || config?.endpoint || "";

            return (
              <Stack spacing={2} sx={{ alignItems: "center", py: 1 }}>
                {qrModalPeer?.imported && (
                  <Alert severity="info" sx={{ width: "100%", fontSize: "0.8125rem" }}>
                    <strong>Client-Side Keys:</strong> This peer uses an externally generated keypair. When using the config template below, replace <code>&lt;CLIENT_PRIVATE_KEY&gt;</code> with the client's private key.
                  </Alert>
                )}

                {/* Connection Endpoint Switcher */}
                {(config?.lan_ip || config?.wan_ip) && (
                  <Box sx={{ width: "100%", bgcolor: "action.hover", p: 1.5, borderRadius: 1.5 }}>
                    <MicroLabel sx={{ mb: 0.75 }}>Connection Endpoint Destination</MicroLabel>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                      {config?.lan_ip && (
                        <Chip
                          label={`LAN Wi-Fi: ${config.lan_ip}`}
                          clickable
                          color={currentEp === config.lan_ip ? "primary" : "default"}
                          onClick={() => setQrModalEndpoint(config.lan_ip!)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                      {config?.wan_ip && config.wan_ip !== config.lan_ip && (
                        <Chip
                          label={`WAN / 4G / 5G: ${config.wan_ip}`}
                          clickable
                          color={currentEp === config.wan_ip ? "primary" : "default"}
                          onClick={() => setQrModalEndpoint(config.wan_ip!)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                      {config?.endpoint && config.endpoint !== config.lan_ip && config.endpoint !== config.wan_ip && (
                        <Chip
                          label={`Custom: ${config.endpoint}`}
                          clickable
                          color={currentEp === config.endpoint ? "primary" : "default"}
                          onClick={() => setQrModalEndpoint(config.endpoint)}
                          sx={{ fontWeight: 600, fontFamily: MONO, fontSize: "0.75rem" }}
                        />
                      )}
                    </Stack>
                    <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.75, display: "block" }}>
                      {currentEp === config?.lan_ip
                        ? "✓ Local LAN endpoint: Phone connects directly inside Wi-Fi (bypasses router NAT loopback drops)."
                        : "ℹ WAN IP endpoint: For cellular (4G/5G). Ensure your home router forwards UDP port 51820 to " + (config?.lan_ip || "the server") + "."}
                    </Typography>
                  </Box>
                )}

                {activeConfig ? (
                  <QRCodeCanvas
                    text={activeConfig}
                    size={240}
                    filename={`${qrModalPeer?.name || "wireguard"}-profile`}
                  />
                ) : (
                  <CircularProgress size={32} />
                )}

                <Box sx={{ width: "100%" }}>
                  <MicroLabel sx={{ mb: 0.5 }}>Client Configuration (.conf)</MicroLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    value={activeConfig}
                    slotProps={{
                      input: {
                        readOnly: true,
                        sx: { fontFamily: MONO, fontSize: "0.75rem" },
                      },
                    }}
                  />
                </Box>
              </Stack>
            );
          })()}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            startIcon={<ContentCopyIcon />}
            onClick={() => {
              const activeConfig = qrModalConfig
                ? switchEndpointInConfig(qrModalConfig, qrModalEndpoint || config?.endpoint || "")
                : "";
              if (activeConfig) {
                navigator.clipboard.writeText(activeConfig);
                setToast("Configuration copied to clipboard");
              }
            }}
          >
            Copy
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => {
              const activeConfig = qrModalConfig
                ? switchEndpointInConfig(qrModalConfig, qrModalEndpoint || config?.endpoint || "")
                : "";
              if (qrModalPeer?.name && activeConfig) {
                downloadConfFile(qrModalPeer.name, activeConfig);
              }
            }}
            sx={{ fontWeight: 700 }}
          >
            Download .conf
          </Button>
          <Button
            onClick={() => {
              setQrModalPeer(null);
              setQrModalConfig("");
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Peer Confirmation ──────────────────────────────── */}
      <Dialog
        open={Boolean(deletePeerTarget)}
        onClose={() => setDeletePeerTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Delete Client Peer</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Are you sure you want to revoke and delete peer{" "}
            <strong>{deletePeerTarget?.name}</strong> ({deletePeerTarget?.ip})?
            This immediately severs VPN connectivity for this client.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeletePeerTarget(null)}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => deletePeerTarget && handleDeletePeer(deletePeerTarget)}
          >
            Revoke &amp; Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Rename Peer Dialog ────────────────────────────────────── */}
      <Dialog
        open={Boolean(renamePeerTarget)}
        onClose={() => {
          setRenamePeerTarget(null);
          setRenameValue("");
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Rename Client Peer</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Update display name for peer <code>{renamePeerTarget?.id}</code> ({renamePeerTarget?.ip}):
          </Typography>
          <TextField
            fullWidth
            autoFocus
            size="small"
            label="New Peer Name"
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            placeholder="e.g. alice-laptop"
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setRenamePeerTarget(null)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleRenamePeerSubmit}
            disabled={!renameValue.trim() || renameValue.trim() === renamePeerTarget?.name}
          >
            Save Name
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Live Ops Streaming Output ─────────────────────────────── */}
      <Dialog
        open={streamModalOpen}
        onClose={() => !streamRunning && setStreamModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>{streamTitle}</DialogTitle>
        <DialogContent dividers>
          <LogPane lines={streamLines} running={streamRunning} />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button disabled={streamRunning} onClick={() => setStreamModalOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Toast Snackbar ────────────────────────────────────────────────── */}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        message={toast}
      />
    </Box>
  );
}
