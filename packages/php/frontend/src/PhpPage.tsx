import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Switch,
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArticleIcon from "@mui/icons-material/Article";
import StorageIcon from "@mui/icons-material/Storage";
import TuneIcon from "@mui/icons-material/Tune";
import SecurityIcon from "@mui/icons-material/Security";

// Ace Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-ini";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import type {
  PackageContext,
  PhpDirectives,
  PhpEngineStatus,
  PhpExtension,
  PhpPool,
} from "./types";
import { CONSOLE, Dot, LogPane, MONO, MicroLabel, Panel, appendEvent, type Line } from "./kit";

const TIMEZONE_PRESETS = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Asia/Singapore",
  "Asia/Kolkata",
  "Asia/Dubai",
  "Australia/Sydney",
];

export function PhpPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <PhpPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function PhpPageBody({ ctx }: { ctx: PackageContext }) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  // Domain State
  const [engineStatus, setEngineStatus] = useState<PhpEngineStatus | null>(null);
  const [pools, setPools] = useState<PhpPool[]>([]);
  const [extensions, setExtensions] = useState<PhpExtension[]>([]);

  const [loading, setLoading] = useState(true);
  const [extLoading, setExtLoading] = useState(false);
  const [configLoading, setConfigLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Search & Filters
  const [extSearch, setExtSearch] = useState("");
  const [extCategory, setExtCategory] = useState<string>("All");
  const [poolSearch, setPoolSearch] = useState("");

  // Configuration State
  const [configMode, setConfigMode] = useState<"visual" | "raw">("visual");
  const [configTarget, setConfigTarget] = useState<"fpm" | "cli">("fpm");
  const [rawConfig, setRawConfig] = useState<string>("");
  const [directives, setDirectives] = useState<PhpDirectives>({
    version: "8.4",
    upload_max_filesize: "64M",
    post_max_size: "64M",
    memory_limit: "256M",
    max_execution_time: "120",
    max_input_time: "60",
    max_input_vars: "1000",
    timezone: "UTC",
    display_errors: "Off",
    opcache_enable: "1",
  });
  const [savingConfig, setSavingConfig] = useState(false);

  // Custom Extension Install Modal
  const [customExtModalOpen, setCustomExtModalOpen] = useState(false);
  const [customExtName, setCustomExtName] = useState("");

  // Create / Edit Pool Modal
  const [poolModalOpen, setPoolModalOpen] = useState(false);
  const [editingPool, setEditingPool] = useState<PhpPool | null>(null);
  const [formPoolName, setFormPoolName] = useState("");
  const [formMemoryLimit, setFormMemoryLimit] = useState("128M");
  const [formMaxExec, setFormMaxExec] = useState("30");
  const [savingPool, setSavingPool] = useState(false);

  // Delete Pool Modal
  const [deletePoolModalOpen, setDeletePoolModalOpen] = useState(false);
  const [poolToDelete, setPoolToDelete] = useState<PhpPool | null>(null);

  // Restart FPM Modal
  const [restartModalOpen, setRestartModalOpen] = useState(false);

  // Logs
  const [logType, setLogType] = useState<"error" | "slow">("error");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [logPath, setLogPath] = useState<string>("/opt/hostpanel/logs/php/php8.4-fpm.log");
  const [logsLoading, setLogsLoading] = useState(false);
  const [autoRefreshLogs, setAutoRefreshLogs] = useState(false);

  // Streaming Execution & Terminal Output
  const [streamLines, setStreamLines] = useState<Line[]>([]);
  const [running, setRunning] = useState(false);
  const [streamModalOpen, setStreamModalOpen] = useState(false);
  const [streamTitle, setStreamTitle] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => () => abortRef.current?.abort(), []);

  // API wrapper
  const apiFetch = useCallback(
    async (path: string, options: RequestInit = {}) => {
      const res = await ctx.api(path, options);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || data.error || `Request failed with status ${res.status}`);
      }
      return data;
    },
    [ctx]
  );

  // Load Overview & Engine Data
  const refreshAll = useCallback(async () => {
    setLoading(true);
    try {
      const [statusRes, poolsRes] = await Promise.allSettled([
        apiFetch("/status"),
        apiFetch("/pools"),
      ]);

      if (statusRes.status === "fulfilled" && statusRes.value) {
        setEngineStatus(statusRes.value);
      }

      if (poolsRes.status === "fulfilled" && poolsRes.value) {
        setPools(poolsRes.value.pools ?? []);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load PHP engine data");
    } finally {
      setLoading(false);
    }
  }, [apiFetch]);

  // Load Extensions for PHP 8.4
  const loadExtensions = useCallback(async () => {
    setExtLoading(true);
    try {
      const data = await apiFetch("/extensions?version=8.4");
      setExtensions(data.extensions ?? []);
    } catch (err: any) {
      setToast(`Error loading extensions: ${err.message}`);
    } finally {
      setExtLoading(false);
    }
  }, [apiFetch]);

  // Load Configuration & Directives for PHP 8.4
  const loadConfiguration = useCallback(
    async (target?: "fpm" | "cli") => {
      const targetFile = target || configTarget;
      setConfigLoading(true);
      try {
        const [dirData, rawData] = await Promise.all([
          apiFetch("/directives/8.4").catch(() => null),
          apiFetch(`/config/8.4?target=${targetFile}`).catch(() => null),
        ]);

        if (dirData) {
          setDirectives({
            version: "8.4",
            upload_max_filesize: dirData.upload_max_filesize || "64M",
            post_max_size: dirData.post_max_size || "64M",
            memory_limit: dirData.memory_limit || "256M",
            max_execution_time: dirData.max_execution_time ?? "120",
            max_input_time: dirData.max_input_time ?? "60",
            max_input_vars: dirData.max_input_vars ?? "1000",
            timezone: dirData.timezone || "UTC",
            display_errors: dirData.display_errors || "Off",
            opcache_enable: String(dirData.opcache_enable || "1"),
          });
        }

        if (rawData?.content_b64) {
          try {
            const decoded = atob(rawData.content_b64);
            setRawConfig(decoded);
          } catch {
            setRawConfig("");
          }
        }
      } catch (err: any) {
        setToast(`Error reading configuration: ${err.message}`);
      } finally {
        setConfigLoading(false);
      }
    },
    [apiFetch, configTarget]
  );

  // Load Logs
  const loadLogs = useCallback(async () => {
    setLogsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        version: "8.4",
        type: logType,
        lines: "100",
      });
      const data = await apiFetch(`/logs?${queryParams.toString()}`);
      setLogLines(data.lines ?? []);
      setLogPath(data.path ?? "");
    } catch (err: any) {
      setToast(`Error reading logs: ${err.message}`);
    } finally {
      setLogsLoading(false);
    }
  }, [apiFetch, logType]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  useEffect(() => {
    if (tabIndex === 1) {
      loadExtensions();
    } else if (tabIndex === 2) {
      loadConfiguration(configTarget);
    } else if (tabIndex === 4) {
      loadLogs();
    }
  }, [tabIndex, configTarget, loadExtensions, loadConfiguration, loadLogs]);

  // Auto refresh logs
  useEffect(() => {
    if (!autoRefreshLogs || tabIndex !== 4) return;
    const timer = setInterval(() => {
      loadLogs();
    }, 5000);
    return () => clearInterval(timer);
  }, [autoRefreshLogs, tabIndex, loadLogs]);

  // SSE Operation Runner using ctx.run
  const runOperation = async (title: string, path: string, body?: any) => {
    setStreamTitle(title);
    setStreamLines([]);
    setRunning(true);
    setStreamModalOpen(true);

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const generator = ctx.run(path, {
        method: "POST",
        body,
        signal: ctrl.signal,
      });

      for await (const event of generator) {
        setStreamLines((prev) => appendEvent(prev, event));
        if (event.kind === "result" && event.ok) {
          refreshAll();
        }
      }
    } catch (err: any) {
      if (!ctrl.signal.aborted) {
        setStreamLines((prev) => [
          ...prev,
          { ts: new Date().toISOString(), text: `[ERROR] ${err.message || String(err)}`, stream: "stderr" },
        ]);
      }
    } finally {
      setRunning(false);
    }
  };

  // Action Handlers
  const handleRestartFpm = async () => {
    setRestartModalOpen(false);
    try {
      await apiFetch("/fpm/8.4/restart", { method: "POST" });
      setToast("PHP-FPM 8.4 reloaded successfully.");
      await refreshAll();
    } catch (err: any) {
      setToast(`Failed to reload FPM: ${err.message}`);
    }
  };

  const handleToggleExtension = async (ext: PhpExtension) => {
    const nextState = !ext.enabled;
    try {
      await apiFetch("/extensions/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          version: "8.4",
          extension: ext.name,
          enabled: nextState,
        }),
      });
      setToast(`Extension "${ext.name}" ${nextState ? "enabled" : "disabled"}.`);
      await loadExtensions();
    } catch (err: any) {
      setToast(`Failed to toggle extension: ${err.message}`);
    }
  };

  const handleSaveDirectives = async () => {
    setSavingConfig(true);
    try {
      await apiFetch("/directives/8.4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(directives),
      });
      setToast("PHP 8.4 directives saved & FPM reloaded.");
      await loadConfiguration(configTarget);
    } catch (err: any) {
      setToast(`Failed to update directives: ${err.message}`);
    } finally {
      setSavingConfig(false);
    }
  };

  const handleSaveRawConfig = async () => {
    setSavingConfig(true);
    try {
      const contentB64 = btoa(rawConfig);
      await apiFetch("/config/8.4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content_b64: contentB64,
          target: configTarget,
        }),
      });
      setToast(`php.ini (${configTarget}) saved & PHP 8.4 FPM reloaded.`);
      await loadConfiguration(configTarget);
    } catch (err: any) {
      setToast(`Failed to save configuration: ${err.message}`);
    } finally {
      setSavingConfig(false);
    }
  };

  // Pools Handlers
  const handleOpenCreatePoolModal = () => {
    setEditingPool(null);
    setFormPoolName("");
    setFormMemoryLimit("128M");
    setFormMaxExec("30");
    setPoolModalOpen(true);
  };

  const handleOpenEditPoolModal = (pool: PhpPool) => {
    setEditingPool(pool);
    setFormPoolName(pool.pool);
    setFormMemoryLimit(pool.memory_limit || "128M");
    setFormMaxExec(pool.max_execution_time ? String(pool.max_execution_time) : "30");
    setPoolModalOpen(true);
  };

  const handleSavePool = async () => {
    if (!formPoolName.trim()) {
      setToast("Pool name is required.");
      return;
    }

    setSavingPool(true);
    try {
      if (editingPool) {
        await apiFetch(`/pools/${encodeURIComponent(editingPool.pool)}/limits`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            memory_limit: formMemoryLimit,
            max_execution_time: formMaxExec,
          }),
        });
        setToast(`Pool "${editingPool.pool}" updated successfully.`);
      } else {
        await apiFetch("/pools", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pool: formPoolName.trim(),
            version: "8.4",
            memory_limit: formMemoryLimit,
            max_execution_time: formMaxExec,
          }),
        });
        setToast(`Pool "${formPoolName.trim()}" created successfully.`);
      }
      setPoolModalOpen(false);
      await refreshAll();
    } catch (err: any) {
      setToast(`Error saving pool: ${err.message}`);
    } finally {
      setSavingPool(false);
    }
  };

  const handleDeletePool = async () => {
    if (!poolToDelete) return;
    try {
      await apiFetch(`/pools/${encodeURIComponent(poolToDelete.pool)}`, { method: "DELETE" });
      setToast(`Pool "${poolToDelete.pool}" removed.`);
      setDeletePoolModalOpen(false);
      setPoolToDelete(null);
      await refreshAll();
    } catch (err: any) {
      setToast(`Failed to delete pool: ${err.message}`);
    }
  };

  // Filtered Extensions
  const filteredExtensions = useMemo(() => {
    return extensions.filter((ext) => {
      const matchSearch =
        !extSearch ||
        ext.name.toLowerCase().includes(extSearch.toLowerCase()) ||
        ext.description?.toLowerCase().includes(extSearch.toLowerCase());
      const matchCategory = extCategory === "All" || ext.category === extCategory;
      return matchSearch && matchCategory;
    });
  }, [extensions, extSearch, extCategory]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    extensions.forEach((e) => e.category && set.add(e.category));
    return ["All", ...Array.from(set).sort()];
  }, [extensions]);

  // Filtered Pools
  const filteredPools = useMemo(() => {
    return pools.filter((p) => !poolSearch || p.pool.toLowerCase().includes(poolSearch.toLowerCase()));
  }, [pools, poolSearch]);

  const activePoolsCount = pools.length;
  const enabledExtensionsCount = useMemo(() => extensions.filter((e) => e.enabled).length, [extensions]);
  const isPhp84Active = engineStatus?.active ?? true;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }}>
      {/* ── Top Header Bar ─────────────────────────────────────────────────── */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
              PHP Manager
            </Typography>
            <Chip
              size="small"
              label={isPhp84Active ? "PHP 8.4 Active" : "Inactive"}
              variant="outlined"
              color={isPhp84Active ? "success" : "default"}
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
            />
          </Stack>
          <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }}>
            Isolated standalone PHP 8.4 runtime, FastCGI FPM pools, module catalog, and INI configuration
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexShrink: 0 }}>
          <Tooltip title="Restart PHP 8.4 FPM" arrow>
            <Button
              variant="outlined"
              size="small"
              startIcon={<RestartAltIcon sx={{ fontSize: 18 }} />}
              onClick={() => setRestartModalOpen(true)}
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              Restart FPM
            </Button>
          </Tooltip>

          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={refreshAll}
                disabled={loading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {loading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Error alert banner */}
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* ── 4 Overview Stat Cards ──────────────────────────────────────────── */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Card sx={{ flex: 1, minWidth: 180, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>PHP ENGINE STATUS</MicroLabel>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
              <Dot ok={isPhp84Active} size={10} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {isPhp84Active ? "Active · Running" : "Inactive"}
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: "text.disabled", fontFamily: MONO }}>
              hostpanel-phpd.service
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 180, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>STANDALONE RUNTIME</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
              PHP 8.4 (Latest Stable)
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              100% Isolated in /opt/hostpanel
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 180, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>ACTIVE FPM POOLS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {activePoolsCount} {activePoolsCount === 1 ? "Pool" : "Pools"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Unix socket in /opt/hostpanel/run/php
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 180, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>EXTENSION MODULES</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {enabledExtensionsCount} Enabled
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              MySQLnd, OPcache, cURL, GD, etc.
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Progress streaming pane if active */}
      {(streamLines.length > 0 || running) && !streamModalOpen && (
        <Panel
          label={streamTitle || "Operations Progress"}
          action={
            running && (
              <Button size="small" color="error" onClick={() => abortRef.current?.abort()}>
                Cancel
              </Button>
            )
          }
        >
          <LogPane lines={streamLines} running={running} />
        </Panel>
      )}

      {/* ── Main Unified Tabs Paper ────────────────────────────────────────── */}
      <Paper sx={{ overflow: "hidden" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, val) => setTabIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Runtime & Details" icon={<LayersIcon fontSize="small" />} iconPosition="start" />
            <Tab label="Extensions & Modules" icon={<ExtensionIcon fontSize="small" />} iconPosition="start" />
            <Tab label="Configuration (php.ini)" icon={<TuneIcon fontSize="small" />} iconPosition="start" />
            <Tab label={`FPM Pools (${pools.length})`} icon={<StorageIcon fontSize="small" />} iconPosition="start" />
            <Tab label="Logs" icon={<ArticleIcon fontSize="small" />} iconPosition="start" />
            <Tab label="Service & Isolation" icon={<SecurityIcon fontSize="small" />} iconPosition="start" />
          </Tabs>
        </Box>

        {/* ── TAB 0: RUNTIME & DETAILS ──────────────────────────────────────── */}
        {tabIndex === 0 && (
          <Box sx={{ p: 2.5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, mb: 2.5 }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  PHP 8.4 Standalone Runtime
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Official pre-compiled portable runtime bundled directly under /opt/hostpanel/runtimes/php/8.4.
                </Typography>
              </Box>
              <Button size="small" variant="outlined" startIcon={<RefreshIcon />} onClick={refreshAll}>
                Refresh Details
              </Button>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2.5,
              }}
            >
              <Card variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
                  Runtime Executables & Sockets
                </Typography>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      PHP CLI BINARY
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/runtimes/php/8.4/bin/php
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      PHP-FPM SERVICE DAEMON BINARY
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/runtimes/php/8.4/sbin/php-fpm
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      FASTCGI UNIX DOMAIN SOCKET
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/run/php/php8.4-fpm.sock
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      SYSTEMD SERVICE UNIT
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      hostpanel-php8.4-fpm.service
                    </Typography>
                  </Box>
                </Stack>
              </Card>

              <Card variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
                  Configuration & Log Locations
                </Typography>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      FPM CONFIGURATION (php.ini)
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/etc/php/8.4/fpm/php.ini
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      CLI CONFIGURATION (php.ini)
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/etc/php/8.4/cli/php.ini
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      FPM POOL DEFINITIONS DIRECTORY
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/etc/php/8.4/fpm/pool.d/
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block" }}>
                      FPM ERROR LOG SINK
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, color: "text.primary" }}>
                      /opt/hostpanel/logs/php/php8.4-fpm.log
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Box>
          </Box>
        )}

        {/* ── TAB 1: EXTENSIONS & MODULES ───────────────────────────────────── */}
        {tabIndex === 1 && (
          <Box sx={{ p: 2.5 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, mb: 2.5 }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                <TextField
                  size="small"
                  placeholder="Search PHP 8.4 modules..."
                  value={extSearch}
                  onChange={(e) => setExtSearch(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{ width: 260 }}
                />

                <Stack direction="row" spacing={0.5} sx={{ overflowX: "auto", py: 0.5 }}>
                  {categories.map((cat) => (
                    <Chip
                      key={cat}
                      size="small"
                      label={cat}
                      clickable
                      color={extCategory === cat ? "primary" : "default"}
                      onClick={() => setExtCategory(cat)}
                      sx={{ fontWeight: extCategory === cat ? 700 : 400 }}
                    />
                  ))}
                </Stack>
              </Stack>

              <Button
                size="small"
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setCustomExtModalOpen(true)}
              >
                Custom Module
              </Button>
            </Stack>

            {extLoading ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <CircularProgress size={32} />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
                  gap: 1.5,
                }}
              >
                {filteredExtensions.map((ext) => (
                  <Card key={ext.name} variant="outlined" sx={{ p: 1.5 }}>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                      <Box sx={{ pr: 1 }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.25 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700, fontFamily: MONO }}>
                            {ext.name}
                          </Typography>
                          {ext.category && (
                            <Chip size="small" label={ext.category} sx={{ height: 18, fontSize: 9 }} />
                          )}
                        </Stack>
                        <Typography variant="caption" sx={{ color: "text.secondary", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {ext.description || "PHP compiled module"}
                        </Typography>
                      </Box>
                      <Switch
                        size="small"
                        checked={ext.enabled}
                        onChange={() => handleToggleExtension(ext)}
                        color="success"
                      />
                    </Stack>
                  </Card>
                ))}
              </Box>
            )}
          </Box>
        )}

        {/* ── TAB 2: CONFIGURATION (PHP.INI) ─────────────────────────────────── */}
        {tabIndex === 2 && (
          <Box sx={{ p: 2.5 }}>
            {/* Clean Single Toolbar */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 2.5,
                pb: 2,
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant={configMode === "visual" ? "contained" : "outlined"}
                  startIcon={<TuneIcon />}
                  onClick={() => setConfigMode("visual")}
                >
                  Visual Directives
                </Button>
                <Button
                  size="small"
                  variant={configMode === "raw" ? "contained" : "outlined"}
                  startIcon={<CodeIcon />}
                  onClick={() => setConfigMode("raw")}
                >
                  Raw php.ini
                </Button>
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <FormControl size="small" sx={{ minWidth: 100 }}>
                  <Select
                    value={configTarget}
                    onChange={(e) => setConfigTarget(e.target.value as "fpm" | "cli")}
                  >
                    <MenuItem value="fpm">FPM (Web)</MenuItem>
                    <MenuItem value="cli">CLI (Cron)</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={configMode === "visual" ? handleSaveDirectives : handleSaveRawConfig}
                  disabled={savingConfig}
                  startIcon={savingConfig ? <CircularProgress size={16} /> : <CheckIcon />}
                >
                  {savingConfig ? "Saving..." : "Save Changes"}
                </Button>

                <Tooltip title="Reload configuration from disk">
                  <IconButton size="small" onClick={() => loadConfiguration(configTarget)} disabled={configLoading}>
                    <RefreshIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>

            {configLoading ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <CircularProgress size={32} />
              </Box>
            ) : configMode === "visual" ? (
              <Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 2.5,
                    mb: 3,
                  }}
                >
                  <TextField
                    label="Upload Max Filesize"
                    size="small"
                    value={directives.upload_max_filesize}
                    onChange={(e) => setDirectives({ ...directives, upload_max_filesize: e.target.value })}
                    helperText="e.g. 64M, 128M, 512M"
                  />
                  <TextField
                    label="Post Max Size"
                    size="small"
                    value={directives.post_max_size}
                    onChange={(e) => setDirectives({ ...directives, post_max_size: e.target.value })}
                    helperText="Must be >= upload_max_filesize"
                  />
                  <TextField
                    label="Memory Limit"
                    size="small"
                    value={directives.memory_limit}
                    onChange={(e) => setDirectives({ ...directives, memory_limit: e.target.value })}
                    helperText="e.g. 256M, 512M, 1024M"
                  />
                  <TextField
                    label="Max Execution Time"
                    size="small"
                    type="number"
                    value={directives.max_execution_time}
                    onChange={(e) => setDirectives({ ...directives, max_execution_time: e.target.value })}
                    helperText="Execution limit in seconds"
                  />
                  <TextField
                    label="Max Input Time"
                    size="small"
                    type="number"
                    value={directives.max_input_time}
                    onChange={(e) => setDirectives({ ...directives, max_input_time: e.target.value })}
                    helperText="Input parsing limit in seconds"
                  />
                  <TextField
                    label="Max Input Variables"
                    size="small"
                    type="number"
                    value={directives.max_input_vars}
                    onChange={(e) => setDirectives({ ...directives, max_input_vars: e.target.value })}
                    helperText="e.g. 1000, 3000, 5000"
                  />
                  <FormControl size="small" fullWidth>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      Timezone
                    </Typography>
                    <Select
                      value={directives.timezone}
                      onChange={(e) => setDirectives({ ...directives, timezone: e.target.value })}
                    >
                      {TIMEZONE_PRESETS.map((tz) => (
                        <MenuItem key={tz} value={tz}>
                          {tz}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl size="small" fullWidth>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      Display Errors
                    </Typography>
                    <Select
                      value={directives.display_errors}
                      onChange={(e) => setDirectives({ ...directives, display_errors: e.target.value })}
                    >
                      <MenuItem value="Off">Off (Production)</MenuItem>
                      <MenuItem value="On">On (Development)</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl size="small" fullWidth>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      Zend OPcache
                    </Typography>
                    <Select
                      value={String(directives.opcache_enable)}
                      onChange={(e) => setDirectives({ ...directives, opcache_enable: e.target.value })}
                    >
                      <MenuItem value="1">Enabled (Bytecode Caching)</MenuItem>
                      <MenuItem value="0">Disabled</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            ) : (
              <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1, overflow: "hidden" }}>
                <AceEditor
                  mode="ini"
                  theme="one_dark"
                  name="php_ini_editor"
                  value={rawConfig}
                  onChange={(val) => setRawConfig(val)}
                  width="100%"
                  height="500px"
                  fontSize={13}
                  showPrintMargin={false}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
              </Box>
            )}
          </Box>
        )}

        {/* ── TAB 3: FPM POOLS ──────────────────────────────────────────────── */}
        {tabIndex === 3 && (
          <Box sx={{ p: 2.5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, mb: 2.5 }}
            >
              <TextField
                size="small"
                placeholder="Filter pools..."
                value={poolSearch}
                onChange={(e) => setPoolSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ width: 260 }}
              />

              <Button
                size="small"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenCreatePoolModal}
              >
                New FPM Pool
              </Button>
            </Stack>

            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead sx={{ bgcolor: "action.hover" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Pool Name</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Runtime</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>FastCGI Unix Socket</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Memory Limit</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Max Execution</TableCell>
                    <TableCell sx={{ fontWeight: 700, textAlign: "right" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPools.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>
                        No FastCGI pools match your query.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPools.map((p) => {
                      const isDefault = p.pool === "www";
                      return (
                        <TableRow key={p.pool} hover>
                          <TableCell sx={{ fontFamily: MONO, fontWeight: 700 }}>
                            {p.pool} {isDefault && <Chip size="small" label="Default" sx={{ ml: 1, height: 18, fontSize: 10 }} />}
                          </TableCell>
                          <TableCell>
                            <Chip size="small" label="PHP 8.4" color="primary" variant="outlined" sx={{ height: 20, fontSize: 10 }} />
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: 12, color: "text.secondary" }}>
                            {p.socket}
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>
                            {p.memory_limit || "128M"}
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>
                            {p.max_execution_time || "30"}s
                          </TableCell>
                          <TableCell sx={{ textAlign: "right" }}>
                            <IconButton size="small" onClick={() => handleOpenEditPoolModal(p)}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                            {!isDefault && (
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => {
                                  setPoolToDelete(p);
                                  setDeletePoolModalOpen(true);
                                }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            )}
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

        {/* ── TAB 4: LOGS ───────────────────────────────────────────────────── */}
        {tabIndex === 4 && (
          <Box sx={{ p: 2.5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, mb: 2 }}
            >
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Error Log"
                  size="small"
                  clickable
                  color={logType === "error" ? "primary" : "default"}
                  onClick={() => setLogType("error")}
                />
                <Chip
                  label="Slow Log"
                  size="small"
                  clickable
                  color={logType === "slow" ? "primary" : "default"}
                  onClick={() => setLogType("slow")}
                />
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={autoRefreshLogs}
                      onChange={(e) => setAutoRefreshLogs(e.target.checked)}
                    />
                  }
                  label={<Typography variant="caption">Auto-refresh (5s)</Typography>}
                />
                <Button size="small" variant="outlined" startIcon={<RefreshIcon />} onClick={loadLogs} disabled={logsLoading}>
                  Refresh
                </Button>
              </Stack>
            </Stack>

            <Typography variant="caption" sx={{ fontFamily: MONO, color: "text.disabled", display: "block", mb: 1 }}>
              Path: {logPath || "/opt/hostpanel/logs/php/php8.4-fpm.log"}
            </Typography>

            <Paper variant="outlined" sx={{ p: 1.5, bgcolor: CONSOLE.bg, minHeight: 350, maxHeight: 600, overflow: "auto" }}>
              {logsLoading ? (
                <Box sx={{ py: 4, textAlign: "center" }}>
                  <CircularProgress size={24} />
                </Box>
              ) : logLines.length === 0 ? (
                <Typography variant="caption" sx={{ color: CONSOLE.dim, fontFamily: MONO }}>
                  No log entries recorded for PHP 8.4 ({logType}).
                </Typography>
              ) : (
                logLines.map((line, idx) => (
                  <Typography key={idx} variant="caption" sx={{ fontFamily: MONO, color: CONSOLE.fg, display: "block", whiteSpace: "pre-wrap" }}>
                    {line}
                  </Typography>
                ))
              )}
            </Paper>
          </Box>
        )}

        {/* ── TAB 5: SERVICE & ISOLATION ────────────────────────────────────── */}
        {tabIndex === 5 && (
          <Box sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              HostPanel 100% Filesystem Isolation Architecture
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
              All PHP daemons, sockets, configuration files, dumps, and runtimes reside exclusively under /opt/hostpanel.
            </Typography>

            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead sx={{ bgcolor: "action.hover" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Asset Class</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Isolated Path</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell sx={{ fontWeight: 600 }}>Runtimes Root</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>/opt/hostpanel/runtimes/php/8.4</TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>Standalone self-contained binaries (bin/php, sbin/php-fpm, lib/modules)</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell sx={{ fontWeight: 600 }}>Configuration Root</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>/opt/hostpanel/etc/php/8.4/fpm/php.ini</TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>Isolated INI directives, pool configurations, and module manifests</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell sx={{ fontWeight: 600 }}>Runtime Sockets</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>/opt/hostpanel/run/php/php8.4-fpm.sock</TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>FastCGI Unix domain sockets connecting Web Servers to FPM pools</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell sx={{ fontWeight: 600 }}>Log Stream Sink</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>/opt/hostpanel/logs/php/php8.4-fpm.log</TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>Dedicated error and slow query log captures</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell sx={{ fontWeight: 600 }}>Package Daemon</TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: 12 }}>/etc/systemd/system/hostpanel-phpd.service</TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>Dedicated FastAPI management daemon listening on isolated internal loopback</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Paper>

      {/* ── SSE Streaming Modal ────────────────────────────────────────────── */}
      <Dialog
        open={streamModalOpen}
        onClose={() => !running && setStreamModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {streamTitle}
          </Typography>
          {running && <CircularProgress size={18} />}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <LogPane lines={streamLines} running={running} />
        </DialogContent>
        <DialogActions>
          {running ? (
            <Button color="error" onClick={() => abortRef.current?.abort()}>
              Cancel Operation
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setStreamModalOpen(false)}>
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* ── Custom Module Modal ────────────────────────────────────────────── */}
      <Dialog open={customExtModalOpen} onClose={() => setCustomExtModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Add Custom Extension</DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Extension Name"
            size="small"
            fullWidth
            sx={{ mt: 1 }}
            value={customExtName}
            onChange={(e) => setCustomExtName(e.target.value)}
            helperText="e.g. redis, imagick, memcached"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCustomExtModalOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            disabled={!customExtName.trim()}
            onClick={() => {
              const name = customExtName.trim();
              setCustomExtModalOpen(false);
              setCustomExtName("");
              runOperation(`Installing extension ${name} for PHP 8.4`, "/extensions/install", {
                version: "8.4",
                extension: name,
              });
            }}
          >
            Install
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── FPM Pool Create / Edit Modal ───────────────────────────────────── */}
      <Dialog open={poolModalOpen} onClose={() => setPoolModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingPool ? `Edit Pool: ${editingPool.pool}` : "Create New FPM Pool"}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5} sx={{ mt: 1 }}>
            <TextField
              label="Pool Name"
              size="small"
              fullWidth
              disabled={!!editingPool}
              value={formPoolName}
              onChange={(e) => setFormPoolName(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
              helperText="Unique identifier for this FastCGI pool"
            />

            <TextField
              label="Memory Limit"
              size="small"
              fullWidth
              value={formMemoryLimit}
              onChange={(e) => setFormMemoryLimit(e.target.value)}
              helperText="e.g. 128M, 256M, 512M"
            />

            <TextField
              label="Max Execution Time (seconds)"
              size="small"
              type="number"
              fullWidth
              value={formMaxExec}
              onChange={(e) => setFormMaxExec(e.target.value)}
              helperText="e.g. 30, 60, 120"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPoolModalOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSavePool} disabled={savingPool}>
            {savingPool ? "Saving..." : editingPool ? "Save Changes" : "Create Pool"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Delete Pool Confirm Modal ──────────────────────────────────────── */}
      <Dialog open={deletePoolModalOpen} onClose={() => setDeletePoolModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Delete Pool?</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2">
            Are you sure you want to delete FastCGI pool <strong>{poolToDelete?.pool}</strong>? Any web server configurations listening on this socket will fail.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeletePoolModalOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDeletePool}>
            Delete Pool
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Restart FPM Modal ──────────────────────────────────────────────── */}
      <Dialog open={restartModalOpen} onClose={() => setRestartModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Restart PHP 8.4 FPM Service</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2">
            Are you sure you want to restart the <strong>hostpanel-php8.4-fpm.service</strong> daemon? Active worker processes will be gracefully reloaded.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRestartModalOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleRestartFpm}>
            Restart Daemon
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Toast Snackbar ─────────────────────────────────────────────────── */}
      <Snackbar
        open={!!toast}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        message={toast}
      />
    </Box>
  );
}
