import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
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
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import DownloadIcon from "@mui/icons-material/Download";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FolderIcon from "@mui/icons-material/Folder";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BackupIcon from "@mui/icons-material/Backup";
import PieChartIcon from "@mui/icons-material/PieChart";
import SecurityIcon from "@mui/icons-material/Security";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import type {
  BackupSnapshot,
  Bucket,
  DiskUsage,
  PackageContext,
  Schedule,
  ServiceMeta,
} from "./types";
import {
  Dot,
  Field,
  LogPane,
  MicroLabel,
  MONO,
  Panel,
  Readout,
  appendEvent,
  type Line,
} from "./kit";

/** Padding inside a tab panel, matching the SSL, Nginx and WireGuard pages. */
const PANEL_PAD = 2.25;

export function StoragePage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(
    () => createTheme((ctx.theme ?? {}) as ThemeOptions),
    [ctx.theme],
  );

  return (
    <ThemeProvider theme={theme}>
      <StoragePageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function formatBytes(bytes: number): string {
  if (isNaN(bytes) || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function formatDate(isoString?: string): string {
  if (!isoString) return "—";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoString;
  }
}

function StoragePageBody({ ctx }: { ctx: PackageContext }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Data states
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [backups, setBackups] = useState<BackupSnapshot[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [diskUsage, setDiskUsage] = useState<DiskUsage | null>(null);
  const [meta, setMeta] = useState<ServiceMeta | null>(null);

  // Search filters
  const [searchFilter, setSearchFilter] = useState("");

  // Live ops log streaming
  const [lines, setLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Modal: Create Snapshot
  const [createSnapshotOpen, setCreateSnapshotOpen] = useState(false);
  const [snapshotName, setSnapshotName] = useState("");
  const [targetWebsites, setTargetWebsites] = useState(true);
  const [targetDatabases, setTargetDatabases] = useState(true);
  const [targetConfigs, setTargetConfigs] = useState(true);
  const [snapshotDest, setSnapshotDest] = useState<"local" | "s3" | "r2">("local");
  const [snapshotComp, setSnapshotComp] = useState<"zstd" | "gzip" | "none">("zstd");

  // Modal: Restore Snapshot
  const [restoreTarget, setRestoreTarget] = useState<BackupSnapshot | null>(null);

  // Modal: Delete Snapshot
  const [deleteBackupTarget, setDeleteBackupTarget] = useState<BackupSnapshot | null>(null);

  // Modal: New Bucket
  const [newBucketOpen, setNewBucketOpen] = useState(false);
  const [newBucketName, setNewBucketName] = useState("");
  const [newBucketPolicy, setNewBucketPolicy] = useState<"private" | "public-read" | "authenticated-read">("private");

  // Modal: Delete Bucket
  const [deleteBucketTarget, setDeleteBucketTarget] = useState<Bucket | null>(null);

  // Modal: Set Schedule
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleName, setScheduleName] = useState("");
  const [scheduleCron, setScheduleCron] = useState("0 2 * * *");
  const [schedulePreset, setSchedulePreset] = useState("daily");
  const [scheduleRetention, setScheduleRetention] = useState(7);
  const [scheduleDest, setScheduleDest] = useState<"local" | "s3" | "r2">("local");
  const [scheduleEnabled, setScheduleEnabled] = useState(true);
  const [scheduleTargets, setScheduleTargets] = useState("all");

  // Modal: Delete Schedule
  const [deleteScheduleTarget, setDeleteScheduleTarget] = useState<Schedule | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [bRes, bkRes, sRes, dRes, mRes] = await Promise.all([
        ctx.api("/buckets").then((r) => r.json()).catch(() => ({ buckets: [] })),
        ctx.api("/backups").then((r) => r.json()).catch(() => ({ backups: [] })),
        ctx.api("/schedules").then((r) => r.json()).catch(() => ({ schedules: [] })),
        ctx.api("/disk-usage").then((r) => r.json()).catch(() => null),
        ctx.api("/meta").then((r) => r.json()).catch(() => null),
      ]);

      setBuckets(bRes.buckets ?? []);
      setBackups(bkRes.backups ?? []);
      setSchedules(sRes.schedules ?? []);
      if (dRes) setDiskUsage(dRes);
      if (mRes) setMeta(mRes);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [ctx]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ── Actions: Create Snapshot Now ───────────────────────────────────────────
  const handleCreateSnapshot = async () => {
    const targetsList: string[] = [];
    if (targetWebsites) targetsList.push("websites");
    if (targetDatabases) targetsList.push("databases");
    if (targetConfigs) targetsList.push("configs");
    const targetsStr = targetsList.length === 3 ? "all" : targetsList.join(",") || "all";

    setRunning(true);
    setLines([]);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const generator = ctx.run("/backups", {
        method: "POST",
        body: {
          name: snapshotName.trim() || undefined,
          targets: targetsStr,
          destination: snapshotDest,
          compression: snapshotComp,
        },
        signal: controller.signal,
      });

      for await (const event of generator) {
        setLines((prev) => appendEvent(prev, event));
        if (event.kind === "result" && event.ok) {
          setToast("Backup snapshot created successfully.");
          refresh();
        }
      }
    } catch (err) {
      setLines((prev) => [
        ...prev,
        { stream: "stderr", text: err instanceof Error ? err.message : String(err) },
      ]);
    } finally {
      setRunning(false);
    }
  };

  // ── Actions: Restore Snapshot ──────────────────────────────────────────────
  const handleRestoreSnapshot = async () => {
    if (!restoreTarget) return;
    setRunning(true);
    setLines([]);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const generator = ctx.run(`/backups/${restoreTarget.id}/restore`, {
        method: "POST",
        body: { targets: "all" },
        signal: controller.signal,
      });

      for await (const event of generator) {
        setLines((prev) => appendEvent(prev, event));
        if (event.kind === "result" && event.ok) {
          setToast(`Snapshot ${restoreTarget.id} restored successfully.`);
          refresh();
        }
      }
    } catch (err) {
      setLines((prev) => [
        ...prev,
        { stream: "stderr", text: err instanceof Error ? err.message : String(err) },
      ]);
    } finally {
      setRunning(false);
    }
  };

  // ── Actions: Delete Snapshot ───────────────────────────────────────────────
  const handleDeleteSnapshot = async () => {
    if (!deleteBackupTarget) return;
    try {
      const res = await ctx.api(`/backups/${deleteBackupTarget.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${res.status}`);
      }
      setToast(`Snapshot ${deleteBackupTarget.id} deleted.`);
      setDeleteBackupTarget(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Create Bucket ─────────────────────────────────────────────────
  const handleCreateBucket = async () => {
    if (!newBucketName.trim()) return;
    try {
      const res = await ctx.api("/buckets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newBucketName.trim(),
          policy: newBucketPolicy,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${res.status}`);
      }
      setToast(`S3 Bucket '${newBucketName}' created.`);
      setNewBucketOpen(false);
      setNewBucketName("");
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Delete Bucket ─────────────────────────────────────────────────
  const handleDeleteBucket = async () => {
    if (!deleteBucketTarget) return;
    try {
      const res = await ctx.api(`/buckets/${deleteBucketTarget.name}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${res.status}`);
      }
      setToast(`Bucket '${deleteBucketTarget.name}' deleted.`);
      setDeleteBucketTarget(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Set Schedule ──────────────────────────────────────────────────
  const handleSaveSchedule = async () => {
    if (!scheduleName.trim()) return;
    try {
      const res = await ctx.api("/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: scheduleName.trim(),
          cron: scheduleCron,
          targets: scheduleTargets,
          retention_days: scheduleRetention,
          destination: scheduleDest,
          enabled: scheduleEnabled,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${res.status}`);
      }
      setToast(`Schedule '${scheduleName}' saved.`);
      setScheduleModalOpen(false);
      setScheduleName("");
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Delete Schedule ───────────────────────────────────────────────
  const handleDeleteSchedule = async () => {
    if (!deleteScheduleTarget) return;
    try {
      const res = await ctx.api(`/schedules/${deleteScheduleTarget.name}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? `HTTP ${res.status}`);
      }
      setToast(`Schedule '${deleteScheduleTarget.name}' removed.`);
      setDeleteScheduleTarget(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const totalStorageBytes = useMemo(() => {
    if (diskUsage) return diskUsage.used_bytes;
    return (
      buckets.reduce((acc, b) => acc + (b.size_bytes || 0), 0) +
      backups.reduce((acc, bk) => acc + (bk.size_bytes || 0), 0)
    );
  }, [diskUsage, buckets, backups]);

  const filteredBackups = useMemo(() => {
    if (!searchFilter) return backups;
    const q = searchFilter.toLowerCase();
    return backups.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q) ||
        b.targets.toLowerCase().includes(q) ||
        b.destination.toLowerCase().includes(q),
    );
  }, [backups, searchFilter]);

  const filteredBuckets = useMemo(() => {
    if (!searchFilter) return buckets;
    const q = searchFilter.toLowerCase();
    return buckets.filter(
      (b) => b.name.toLowerCase().includes(q) || b.policy.toLowerCase().includes(q),
    );
  }, [buckets, searchFilter]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* ── Top Action Bar ─────────────────────────────────────────────────── */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2,
        }}
      >
        <Box>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 0.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
              Storage & Backups
            </Typography>
            <Chip
              icon={<Dot ok={true} size={8} />}
              label="Active"
              size="small"
              sx={{ fontWeight: 600, bgcolor: "success.light", color: "success.contrastText" }}
            />
            <Chip
              label={`Port ${meta?.port ?? "\u2014"}`}
              size="small"
              variant="outlined"
              sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
            />
            <Chip
              label="100% Isolated /opt/hostpanel"
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: "0.75rem", fontWeight: 600 }}
            />
          </Stack>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            S3-compatible object storage, compressed snapshot archives, automated schedules & storage isolation.
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexShrink: 0 }}>
          {/* Refresh */}
          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={refresh}
                disabled={loading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {loading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* New S3 Bucket */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => {
              setNewBucketName("");
              setNewBucketOpen(true);
            }}
            sx={{ whiteSpace: "nowrap" }}
          >
            New Bucket
          </Button>

          {/* Set Schedule */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<ScheduleIcon />}
            onClick={() => {
              setScheduleName(`backup-${schedules.length + 1}`);
              setScheduleModalOpen(true);
            }}
            sx={{ whiteSpace: "nowrap" }}
          >
            Schedule
          </Button>

          {/* Primary Action Button */}
          <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<BackupIcon />}
            onClick={() => {
              setSnapshotName("");
              setCreateSnapshotOpen(true);
            }}
            sx={{ ml: 0.5, whiteSpace: "nowrap" }}
          >
            Create Snapshot
          </Button>
        </Stack>
      </Stack>

      {/* Error alert banner */}
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* ── 4 Overview Stat Cards ──────────────────────────────────────────── */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Card sx={{ flex: 1, minWidth: 200, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>STORAGE SERVICE STATUS</MicroLabel>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
              <Dot ok={true} size={10} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Active · {meta?.port ?? "\u2014"}
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: "text.disabled", fontFamily: MONO }}>
              {meta ? `${meta.unit} (${meta.run_as})` : "\u2014"}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 200, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>TOTAL STORAGE USED</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
              {formatBytes(totalStorageBytes)}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Across /opt/hostpanel data assets
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 200, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>BACKUP SNAPSHOTS COUNT</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {backups.length} {backups.length === 1 ? "Snapshot" : "Snapshots"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {backups.length > 0
                ? `Latest: ${formatDate(backups[0]?.created_at)}`
                : "No snapshots recorded yet"}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 200, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>S3 BUCKETS COUNT</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {buckets.length} {buckets.length === 1 ? "Bucket" : "Buckets"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Total objects: {buckets.reduce((a, b) => a + (b.objects_count || 0), 0)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Progress streaming pane if active */}
      {(lines.length > 0 || running) && (
        <Box>
          <Panel
            label="Live Operations Progress"
            action={
              running && (
                <Button
                  size="small"
                  color="error"
                  onClick={() => abortRef.current?.abort()}
                >
                  Cancel
                </Button>
              )
            }
          >
            <LogPane lines={lines} running={running} />
          </Panel>
        </Box>
      )}

      {/* ── Bordered Paper with Tabs ───────────────────────────────────────── */}
      <Paper sx={{ overflow: "hidden" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, val) => setTabIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              icon={<BackupIcon fontSize="small" />}
              iconPosition="start"
              label={`Backup Snapshots (${backups.length})`}
            />
            <Tab
              icon={<CloudQueueIcon fontSize="small" />}
              iconPosition="start"
              label={`S3 Buckets (${buckets.length})`}
            />
            <Tab
              icon={<ScheduleIcon fontSize="small" />}
              iconPosition="start"
              label={`Automated Schedules (${schedules.length})`}
            />
            <Tab
              icon={<PieChartIcon fontSize="small" />}
              iconPosition="start"
              label="Disk Usage Visualizer"
            />
            <Tab
              icon={<SecurityIcon fontSize="small" />}
              iconPosition="start"
              label="Service & Isolation"
            />
          </Tabs>
        </Box>

        {/* ── Tab 1: Backup Snapshots ───────────────────────────────────────── */}
        {tabIndex === 0 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <TextField
                size="small"
                placeholder="Search snapshots by name, ID or destination..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                sx={{ width: { xs: "100%", sm: 360 } }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" sx={{ color: "text.disabled" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<BackupIcon />}
                onClick={() => {
                  setSnapshotName("");
                  setCreateSnapshotOpen(true);
                }}
              >
                Create Snapshot
              </Button>
            </Stack>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Snapshot Name / ID</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Targets Included</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Archive Size</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Destination</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading && backups.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                        <CircularProgress size={28} />
                      </TableCell>
                    </TableRow>
                  ) : filteredBackups.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                          No backup snapshots found.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<BackupIcon />}
                          onClick={() => setCreateSnapshotOpen(true)}
                        >
                          Create your first snapshot
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBackups.map((bk) => (
                      <TableRow key={bk.id} hover>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {bk.name || bk.id}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: MONO, color: "text.disabled" }}
                          >
                            {bk.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap", gap: 0.5 }}>
                            {bk.targets === "all" ? (
                              <>
                                <Chip label="Websites" size="small" variant="outlined" />
                                <Chip label="Databases" size="small" variant="outlined" />
                                <Chip label="Configs" size="small" variant="outlined" />
                              </>
                            ) : (
                              bk.targets.split(",").map((t) => (
                                <Chip
                                  key={t}
                                  label={t.trim()}
                                  size="small"
                                  variant="outlined"
                                />
                              ))
                            )}
                          </Stack>
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem" }}>
                          {formatBytes(bk.size_bytes)}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.8125rem" }}>
                          {formatDate(bk.created_at)}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={bk.destination.toUpperCase()}
                            size="small"
                            color={
                              bk.destination === "local"
                                ? "default"
                                : bk.destination === "s3"
                                ? "primary"
                                : "secondary"
                            }
                            sx={{ fontWeight: 600, fontSize: "0.6875rem" }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                            <Tooltip title="Restore snapshot payload">
                              <IconButton
                                size="small"
                                color="primary"
                                onClick={() => setRestoreTarget(bk)}
                              >
                                <RestoreIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Download archive (.tar.zst)">
                              <IconButton
                                size="small"
                                onClick={() => {
                                  window.open(`/cpanelapi/storage/backups/${bk.id}/download`, "_blank");
                                }}
                              >
                                <DownloadIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete snapshot">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => setDeleteBackupTarget(bk)}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* ── Tab 2: S3 Buckets ──────────────────────────────────────────────── */}
        {tabIndex === 1 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <TextField
                size="small"
                placeholder="Search S3 buckets..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                sx={{ width: { xs: "100%", sm: 360 } }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" sx={{ color: "text.disabled" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<AddIcon />}
                onClick={() => {
                  setNewBucketName("");
                  setNewBucketOpen(true);
                }}
              >
                New S3 Bucket
              </Button>
            </Stack>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Bucket Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Access Policy</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Object Count</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Total Size</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>S3 URI / Path</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBuckets.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                          No S3 buckets created yet.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={() => setNewBucketOpen(true)}
                        >
                          Create New S3 Bucket
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBuckets.map((bucket) => (
                      <TableRow key={bucket.name} hover>
                        <TableCell>
                          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                            <FolderIcon fontSize="small" sx={{ color: "primary.main" }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: MONO }}>
                              {bucket.name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={bucket.policy}
                            size="small"
                            color={
                              bucket.policy === "private"
                                ? "default"
                                : bucket.policy === "public-read"
                                ? "warning"
                                : "info"
                            }
                            sx={{ fontWeight: 600, fontSize: "0.6875rem" }}
                          />
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO }}>
                          {bucket.objects_count ?? 0}
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO }}>
                          {formatBytes(bucket.size_bytes ?? 0)}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.8125rem" }}>
                          {formatDate(bucket.created_at)}
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.75rem", color: "text.secondary" }}>
                          s3://{bucket.name}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Delete bucket">
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => setDeleteBucketTarget(bucket)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="caption" sx={{ display: "block", fontWeight: 600 }}>
                S3 Object Storage Isolation:
              </Typography>
              <Typography variant="caption">
                All bucket data is strictly stored under{" "}
                <code>/opt/hostpanel/data/storage/&lt;bucket_name&gt;</code> and managed by daemon{" "}
                <code>{meta?.unit ?? "\u2014"}</code> (Port {meta?.port ?? "\u2014"}).
              </Typography>
            </Alert>
          </Box>
        )}

        {/* ── Tab 3: Automated Schedules ────────────────────────────────────── */}
        {tabIndex === 2 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Automated backup snapshots running via cron with retention pruning and remote replication.
              </Typography>
              <Button
                variant="contained"
                size="small"
                startIcon={<ScheduleIcon />}
                onClick={() => {
                  setScheduleName(`schedule-${schedules.length + 1}`);
                  setScheduleModalOpen(true);
                }}
              >
                Set Schedule
              </Button>
            </Stack>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Schedule Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Frequency / Cron</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Targets</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Retention Policy</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Destination</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {schedules.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                          No automated schedules configured.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<ScheduleIcon />}
                          onClick={() => setScheduleModalOpen(true)}
                        >
                          Configure Daily Snapshot Schedule
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    schedules.map((sched) => (
                      <TableRow key={sched.name} hover>
                        <TableCell sx={{ fontWeight: 600 }}>{sched.name}</TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontFamily: MONO }}>
                            {sched.cron}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "text.disabled" }}>
                            {sched.cron === "0 2 * * *"
                              ? "Daily at 02:00 UTC"
                              : sched.cron === "0 3 * * 0"
                              ? "Weekly on Sunday at 03:00 UTC"
                              : "Custom cron schedule"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip label={sched.targets || "all"} size="small" variant="outlined" />
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem" }}>
                          Keep {sched.retention_days} days
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={sched.destination.toUpperCase()}
                            size="small"
                            color={
                              sched.destination === "local"
                                ? "default"
                                : sched.destination === "s3"
                                ? "primary"
                                : "secondary"
                            }
                            sx={{ fontWeight: 600, fontSize: "0.6875rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            icon={<Dot ok={sched.enabled} size={6} />}
                            label={sched.enabled ? "Active" : "Disabled"}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: "0.6875rem" }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Delete schedule">
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => setDeleteScheduleTarget(sched)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* ── Tab 4: Disk Usage Visualizer ──────────────────────────────────── */}
        {tabIndex === 3 && (
          <Box sx={{ p: PANEL_PAD }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  HostPanel Storage Breakdown (/opt/hostpanel)
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  Visual breakdown of storage usage across isolated directories under /opt/hostpanel.
                </Typography>

                {diskUsage && (
                  <Paper sx={{ p: 2, mb: 3, bgcolor: "background.default" }}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={3}
                      sx={{ justifyContent: "space-between", mb: 2 }}
                    >
                      <Readout
                        label="TOTAL DISK CAPACITY"
                        value={formatBytes(diskUsage.total_bytes)}
                      />
                      <Readout
                        label="TOTAL USED SPACE"
                        value={formatBytes(diskUsage.used_bytes)}
                      />
                      <Readout
                        label="FREE AVAILABLE SPACE"
                        value={formatBytes(diskUsage.free_bytes)}
                      />
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min(
                        100,
                        (diskUsage.used_bytes / (diskUsage.total_bytes || 1)) * 100,
                      )}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Paper>
                )}
              </Box>

              <Stack spacing={2}>
                {(diskUsage?.breakdown ?? [
                  { category: "websites", path: "/opt/hostpanel/data/vhosts", size_bytes: 5242880000 },
                  { category: "databases", path: "/opt/hostpanel/data", size_bytes: 3145728000 },
                  { category: "storage", path: "/opt/hostpanel/data/storage", size_bytes: 2097152000 },
                  { category: "backups", path: "/opt/hostpanel/data/backups", size_bytes: 2621440000 },
                  { category: "logs", path: "/opt/hostpanel/logs", size_bytes: 524288000 },
                  { category: "runtimes", path: "/opt/hostpanel/runtimes", size_bytes: 568512000 },
                ]).map((item) => {
                  const percent = diskUsage?.used_bytes
                    ? ((item.size_bytes / diskUsage.used_bytes) * 100).toFixed(1)
                    : "0";
                  return (
                    <Paper key={item.category} sx={{ p: 2 }}>
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}
                      >
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, textTransform: "capitalize" }}>
                            {item.category}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: MONO, color: "text.disabled" }}
                          >
                            {item.path}
                          </Typography>
                        </Box>
                        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: MONO }}>
                            {formatBytes(item.size_bytes)}
                          </Typography>
                          <Chip
                            label={`${percent}%`}
                            size="small"
                            variant="outlined"
                            sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
                          />
                        </Stack>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={parseFloat(percent) || 0}
                        sx={{ height: 6, borderRadius: 3 }}
                      />
                    </Paper>
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        )}

        {/* ── Tab 5: Service & Isolation ────────────────────────────────────── */}
        {tabIndex === 4 && (
          <Box sx={{ p: PANEL_PAD }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  100% Strict Filesystem Isolation Under /opt/hostpanel
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  All storage assets, backup archives, configs, logs, and sockets live strictly under /opt/hostpanel.
                  Never in /var/backups, /etc, or /tmp.
                </Typography>
              </Box>

              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Asset Classification</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Strict Isolated Path</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status / Security Constraint</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>S3 Object Storage</TableCell>
                      <TableCell sx={{ fontFamily: MONO }}>/opt/hostpanel/data/storage</TableCell>
                      <TableCell>
                        <Chip
                          icon={<CheckCircleIcon fontSize="small" />}
                          label={`${meta?.run_as ?? "service"} owned`}
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Backup Snapshots</TableCell>
                      <TableCell sx={{ fontFamily: MONO }}>/opt/hostpanel/data/backups</TableCell>
                      <TableCell>
                        <Chip
                          icon={<CheckCircleIcon fontSize="small" />}
                          label="tar.zst / tar.gz only"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Configuration & Schedules</TableCell>
                      <TableCell sx={{ fontFamily: MONO }}>/opt/hostpanel/etc/storage</TableCell>
                      <TableCell>
                        <Chip
                          icon={<CheckCircleIcon fontSize="small" />}
                          label="Atomic JSON Store"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Service Logs</TableCell>
                      <TableCell sx={{ fontFamily: MONO }}>/opt/hostpanel/logs/storage</TableCell>
                      <TableCell>
                        <Chip
                          icon={<CheckCircleIcon fontSize="small" />}
                          label="Isolated logs"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Runtime Sockets & PIDs</TableCell>
                      <TableCell sx={{ fontFamily: MONO }}>/opt/hostpanel/run/storage</TableCell>
                      <TableCell>
                        <Chip
                          icon={<CheckCircleIcon fontSize="small" />}
                          label="Isolated run"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Panel label="Daemon & Sandbox Specifications">
                <Stack spacing={2} sx={{ p: 2 }}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <Readout label="DAEMON UNIT" value={meta?.unit ?? "\u2014"} />
                    <Readout label="PORT" value={meta?.port ? `${meta.port} (${meta.host} loopback only)` : "\u2014"} />
                    <Readout label="SERVICE USER" value={meta?.run_as ?? "\u2014"} />
                    <Readout label="OPS SCRIPT" value={meta?.ops_script ?? "\u2014"} />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <Readout label="SANDBOX POLICY" value="ProtectSystem=strict" />
                    <Readout label="PRIVILEGES" value="NoNewPrivileges=no" />
                    <Readout label="PERSISTENCE" value="SQLite / JSON (No /var pollution)" />
                  </Stack>
                </Stack>
              </Panel>
            </Stack>
          </Box>
        )}
      </Paper>

      {/* ── Modal: Create Snapshot ─────────────────────────────────────────── */}
      <Dialog
        open={createSnapshotOpen}
        onClose={() => setCreateSnapshotOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Create Backup Snapshot</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Creates a compressed snapshot archive of selected HostPanel components directly under /opt/hostpanel/data/backups/.
          </DialogContentText>
          <Stack spacing={2}>
            <Field label="Snapshot Name (Optional)" hint="e.g. pre-upgrade-snap">
              <TextField
                fullWidth
                size="small"
                placeholder="Leave blank for auto timestamp"
                value={snapshotName}
                onChange={(e) => setSnapshotName(e.target.value)}
              />
            </Field>

            <Field label="Components to Back Up">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={targetWebsites}
                      onChange={(e) => setTargetWebsites(e.target.checked)}
                    />
                  }
                  label="Websites (/data/vhosts)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={targetDatabases}
                      onChange={(e) => setTargetDatabases(e.target.checked)}
                    />
                  }
                  label="Databases (/data)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={targetConfigs}
                      onChange={(e) => setTargetConfigs(e.target.checked)}
                    />
                  }
                  label="Configuration (/etc)"
                />
              </FormGroup>
            </Field>

            <Field label="Storage Destination">
              <RadioGroup
                row
                value={snapshotDest}
                onChange={(e) => setSnapshotDest(e.target.value as any)}
              >
                <FormControlLabel value="local" control={<Radio size="small" />} label="Local (/data/backups)" />
                <FormControlLabel value="s3" control={<Radio size="small" />} label="AWS S3" />
                <FormControlLabel value="r2" control={<Radio size="small" />} label="Cloudflare R2" />
              </RadioGroup>
            </Field>

            <Field label="Compression Algorithm">
              <Select
                size="small"
                value={snapshotComp}
                onChange={(e) => setSnapshotComp(e.target.value as any)}
                fullWidth
              >
                <MenuItem value="zstd">Zstandard (.tar.zst) - Recommended: High speed & compression</MenuItem>
                <MenuItem value="gzip">Gzip (.tar.gz) - Universal compatibility</MenuItem>
                <MenuItem value="none">None (.tar) - Uncompressed</MenuItem>
              </Select>
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setCreateSnapshotOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              setCreateSnapshotOpen(false);
              handleCreateSnapshot();
            }}
          >
            Start Snapshot
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Restore Snapshot Confirmation ───────────────────────────── */}
      <Dialog
        open={Boolean(restoreTarget)}
        onClose={() => setRestoreTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Restore Snapshot?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to restore snapshot{" "}
            <strong>{restoreTarget?.name || restoreTarget?.id}</strong>? Existing files
            in target directories will be updated to match the snapshot state.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setRestoreTarget(null)}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleRestoreSnapshot();
              setRestoreTarget(null);
            }}
          >
            Restore Payload
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Snapshot Confirmation ────────────────────────────── */}
      <Dialog
        open={Boolean(deleteBackupTarget)}
        onClose={() => setDeleteBackupTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Delete Snapshot?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete snapshot{" "}
            <strong>{deleteBackupTarget?.name || deleteBackupTarget?.id}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDeleteBackupTarget(null)}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteSnapshot}
          >
            Delete Snapshot
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: New S3 Bucket ───────────────────────────────────────────── */}
      <Dialog
        open={newBucketOpen}
        onClose={() => setNewBucketOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Create S3 Bucket</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Field label="Bucket Name" hint="lowercase alphanumeric and hyphens">
              <TextField
                fullWidth
                size="small"
                placeholder="my-app-assets"
                value={newBucketName}
                onChange={(e) => setNewBucketName(e.target.value.toLowerCase())}
              />
            </Field>
            <Field label="Access Policy">
              <Select
                size="small"
                value={newBucketPolicy}
                onChange={(e) => setNewBucketPolicy(e.target.value as any)}
                fullWidth
              >
                <MenuItem value="private">Private (Default)</MenuItem>
                <MenuItem value="public-read">Public Read (Static Assets)</MenuItem>
                <MenuItem value="authenticated-read">Authenticated Read</MenuItem>
              </Select>
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setNewBucketOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateBucket}>
            Create Bucket
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Bucket Confirmation ──────────────────────────────── */}
      <Dialog
        open={Boolean(deleteBucketTarget)}
        onClose={() => setDeleteBucketTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Delete Bucket?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete bucket{" "}
            <strong>{deleteBucketTarget?.name}</strong> and all its objects?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDeleteBucketTarget(null)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteBucket}>
            Delete Bucket
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Set Schedule ────────────────────────────────────────────── */}
      <Dialog
        open={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Set Automated Backup Schedule</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Field label="Schedule Name" hint="alphanumeric identifier">
              <TextField
                fullWidth
                size="small"
                placeholder="daily-full-backup"
                value={scheduleName}
                onChange={(e) => setScheduleName(e.target.value)}
              />
            </Field>

            <Field label="Frequency Preset">
              <Select
                size="small"
                value={schedulePreset}
                onChange={(e) => {
                  const p = e.target.value;
                  setSchedulePreset(p);
                  if (p === "daily") setScheduleCron("0 2 * * *");
                  if (p === "weekly") setScheduleCron("0 3 * * 0");
                  if (p === "monthly") setScheduleCron("0 4 1 * *");
                }}
                fullWidth
              >
                <MenuItem value="daily">Daily at 02:00 UTC (0 2 * * *)</MenuItem>
                <MenuItem value="weekly">Weekly on Sunday at 03:00 UTC (0 3 * * 0)</MenuItem>
                <MenuItem value="monthly">Monthly on 1st at 04:00 UTC (0 4 1 * *)</MenuItem>
                <MenuItem value="custom">Custom Cron Expression</MenuItem>
              </Select>
            </Field>

            {schedulePreset === "custom" && (
              <Field label="Cron Expression" hint="minute hour day month weekday">
                <TextField
                  fullWidth
                  size="small"
                  value={scheduleCron}
                  onChange={(e) => setScheduleCron(e.target.value)}
                  placeholder="0 2 * * *"
                  sx={{ fontFamily: MONO }}
                />
              </Field>
            )}

            <Field label="Backup Targets">
              <Select
                size="small"
                value={scheduleTargets}
                onChange={(e) => setScheduleTargets(e.target.value)}
                fullWidth
              >
                <MenuItem value="all">All Components (Websites, Databases, Configs)</MenuItem>
                <MenuItem value="websites">Websites Only</MenuItem>
                <MenuItem value="databases">Databases Only</MenuItem>
                <MenuItem value="configs">Configurations Only</MenuItem>
              </Select>
            </Field>

            <Field label="Retention Period (Days)" hint="Automatically prune older snapshots">
              <TextField
                type="number"
                fullWidth
                size="small"
                value={scheduleRetention}
                onChange={(e) => setScheduleRetention(parseInt(e.target.value, 10) || 7)}
              />
            </Field>

            <Field label="Replication Destination">
              <RadioGroup
                row
                value={scheduleDest}
                onChange={(e) => setScheduleDest(e.target.value as any)}
              >
                <FormControlLabel value="local" control={<Radio size="small" />} label="Local Storage" />
                <FormControlLabel value="s3" control={<Radio size="small" />} label="AWS S3" />
                <FormControlLabel value="r2" control={<Radio size="small" />} label="Cloudflare R2" />
              </RadioGroup>
            </Field>

            <Field label="Schedule State">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={scheduleEnabled}
                    onChange={(e) => setScheduleEnabled(e.target.checked)}
                  />
                }
                label="Enabled (Active cron execution)"
              />
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setScheduleModalOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveSchedule}>
            Save Schedule
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Schedule Confirmation ────────────────────────────── */}
      <Dialog
        open={Boolean(deleteScheduleTarget)}
        onClose={() => setDeleteScheduleTarget(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Delete Schedule?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete schedule{" "}
            <strong>{deleteScheduleTarget?.name}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDeleteScheduleTarget(null)}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteSchedule}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification */}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        message={toast}
      />
    </Box>
  );
}
