import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { ThemeProvider, alpha, createTheme, type ThemeOptions } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StopIcon from "@mui/icons-material/Stop";
import CheckIcon from "@mui/icons-material/Check";
import LockIcon from "@mui/icons-material/Lock";
import CachedIcon from "@mui/icons-material/Cached";
import LanguageIcon from "@mui/icons-material/Language";
import SpeedIcon from "@mui/icons-material/Speed";
import PublicIcon from "@mui/icons-material/Public";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

// Ace Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-apache_conf";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";

import type { EngineStatus, ModuleItem, PackageContext, VhostItem } from "./types";
import { CONSOLE, MONO, Panel, Readout, Field } from "./kit";

type TemplatePreset = "static" | "php" | "proxy" | "spa" | "custom";

const TEMPLATES: Record<Exclude<TemplatePreset, "custom">, (domain: string) => string> = {
  static: (d: string) => {
    const domain = d.trim() || "example.com";
    return `# /opt/hostpanel/etc/apache/sites-available/${domain}.conf
<VirtualHost 127.0.0.1:8088 [::1]:8088>
    ServerName ${domain}
    ServerAlias www.${domain}

    DocumentRoot /opt/hostpanel/data/vhosts/${domain}/public_html

    <Directory /opt/hostpanel/data/vhosts/${domain}/public_html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /opt/hostpanel/logs/apache/${domain}_error.log
    CustomLog /opt/hostpanel/logs/apache/${domain}_access.log combined
</VirtualHost>
`;
  },
  php: (d: string) => {
    const domain = d.trim() || "example.com";
    return `# /opt/hostpanel/etc/apache/sites-available/${domain}.conf
<VirtualHost 127.0.0.1:8088 [::1]:8088>
    ServerName ${domain}
    ServerAlias www.${domain}

    DocumentRoot /opt/hostpanel/data/vhosts/${domain}/public_html
    DirectoryIndex index.php index.html

    <Directory /opt/hostpanel/data/vhosts/${domain}/public_html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    <FilesMatch \\.php$>
        SetHandler "proxy:unix:/run/php/php8.3-fpm.sock|fcgi://localhost"
    </FilesMatch>

    ErrorLog /opt/hostpanel/logs/apache/${domain}_error.log
    CustomLog /opt/hostpanel/logs/apache/${domain}_access.log combined
</VirtualHost>
`;
  },
  proxy: (d: string) => {
    const domain = d.trim() || "example.com";
    return `# /opt/hostpanel/etc/apache/sites-available/${domain}.conf
<VirtualHost 127.0.0.1:8088 [::1]:8088>
    ServerName ${domain}
    ServerAlias www.${domain}

    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    ErrorLog /opt/hostpanel/logs/apache/${domain}_error.log
    CustomLog /opt/hostpanel/logs/apache/${domain}_access.log combined
</VirtualHost>
`;
  },
  spa: (d: string) => {
    const domain = d.trim() || "example.com";
    return `# /opt/hostpanel/etc/apache/sites-available/${domain}.conf
<VirtualHost 127.0.0.1:8088 [::1]:8088>
    ServerName ${domain}
    ServerAlias www.${domain}

    DocumentRoot /opt/hostpanel/data/vhosts/${domain}/public_html

    <Directory /opt/hostpanel/data/vhosts/${domain}/public_html>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ index.html [QSA,L]
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /opt/hostpanel/logs/apache/${domain}_error.log
    CustomLog /opt/hostpanel/logs/apache/${domain}_access.log combined
</VirtualHost>
`;
  },
};

export function ApachePage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <ApachePageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function ApachePageBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState<"vhosts" | "modules" | "config" | "logs" | "service">("vhosts");
  const [engineStatus, setEngineStatus] = useState<EngineStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<"start" | "stop" | "restart" | "reload" | "test" | null>(null);

  const [vhosts, setVhosts] = useState<VhostItem[]>([]);
  const [modules, setModules] = useState<ModuleItem[]>([]);
  const [vhostSearch, setVhostSearch] = useState("");
  const [moduleSearch, setModuleSearch] = useState("");

  // VHost Modals
  const [vhostModalOpen, setVhostModalOpen] = useState(false);
  const [editingDomain, setEditingDomain] = useState<string | null>(null);
  const [vhostDomain, setVhostDomain] = useState("");
  const [vhostContent, setVhostContent] = useState("");
  const [vhostSaving, setVhostSaving] = useState(false);
  const [vhostPreset, setVhostPreset] = useState<TemplatePreset>("static");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingDomain, setDeletingDomain] = useState<string | null>(null);

  // Global Config
  const [configContent, setConfigContent] = useState("");
  const [configLoading, setConfigLoading] = useState(false);
  const [configSaving, setConfigSaving] = useState(false);
  const [syntaxResult, setSyntaxResult] = useState<{ ok: boolean; output: string } | null>(null);

  // Logs
  const [logDomain, setLogDomain] = useState<string>("global");
  const [logType, setLogType] = useState<"error" | "access">("error");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [logCount, setLogCount] = useState(50);
  const [logsLoading, setLogsLoading] = useState(false);
  const [logSearch, setLogSearch] = useState("");
  const [autoRefreshLogs, setAutoRefreshLogs] = useState(false);
  const [logPath, setLogPath] = useState("");

  const [toast, setToast] = useState<string | null>(null);

  // API Wrapper
  const apiFetch = useCallback(
    async (path: string, options: RequestInit = {}) => {
      const res = await ctx.api(path, options);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        throw new Error(err.detail || `Request failed with status ${res.status}`);
      }
      return res.json();
    },
    [ctx]
  );

  const loadStatus = useCallback(async () => {
    try {
      setStatusLoading(true);
      const data = await apiFetch("/engine/status");
      if (data && data.ok) {
        setEngineStatus(data);
      }
    } catch {
      setEngineStatus(null);
    } finally {
      setStatusLoading(false);
    }
  }, [apiFetch]);

  const loadVhosts = useCallback(async () => {
    try {
      const data = await apiFetch("/vhosts");
      if (data.ok && Array.isArray(data.vhosts)) {
        setVhosts(data.vhosts);
      }
    } catch {
      setVhosts([]);
    }
  }, [apiFetch]);

  const loadModules = useCallback(async () => {
    try {
      const data = await apiFetch("/modules");
      if (data.ok && Array.isArray(data.modules)) {
        setModules(data.modules);
      }
    } catch {
      setModules([]);
    }
  }, [apiFetch]);

  const loadConfig = useCallback(async () => {
    setConfigLoading(true);
    try {
      const data = await apiFetch("/engine/config");
      if (data.ok) {
        setConfigContent(data.content || "");
      }
    } catch (e: any) {
      setToast(e.message);
    } finally {
      setConfigLoading(false);
    }
  }, [apiFetch]);

  const loadLogs = useCallback(async () => {
    setLogsLoading(true);
    try {
      const domainParam = logDomain !== "global" ? `&domain=${encodeURIComponent(logDomain)}` : "";
      const data = await apiFetch(`/engine/logs?lines=${logCount}&log_type=${logType}${domainParam}`);
      if (data.ok && Array.isArray(data.lines)) {
        setLogLines(data.lines);
        if (data.path) setLogPath(data.path);
      }
    } catch (e: any) {
      setToast(e.message);
    } finally {
      setLogsLoading(false);
    }
  }, [apiFetch, logCount, logType, logDomain]);

  useEffect(() => {
    if (tab === "logs" && autoRefreshLogs) {
      const timer = setInterval(() => {
        loadLogs();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [tab, autoRefreshLogs, loadLogs]);

  const refreshAll = useCallback(async () => {
    await Promise.all([loadStatus(), loadVhosts(), loadModules()]);
  }, [loadStatus, loadVhosts, loadModules]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  useEffect(() => {
    if (tab === "config") loadConfig();
    else if (tab === "logs") loadLogs();
  }, [tab, loadConfig, loadLogs]);

  // Lifecycle Actions
  const handleStart = async () => {
    setActionLoading("start");
    try {
      await apiFetch("/engine/start", { method: "POST" });
      setToast("Apache HTTP server started successfully.");
      await loadStatus();
    } catch (e: any) {
      setToast(`Error starting Apache: ${e.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleStop = async () => {
    setActionLoading("stop");
    try {
      await apiFetch("/engine/stop", { method: "POST" });
      setToast("Apache HTTP server stopped.");
      await loadStatus();
    } catch (e: any) {
      setToast(`Error stopping Apache: ${e.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleRestart = async () => {
    setActionLoading("restart");
    try {
      await apiFetch("/engine/restart", { method: "POST" });
      setToast("Apache HTTP server restarted successfully.");
      await loadStatus();
    } catch (e: any) {
      setToast(`Error restarting Apache: ${e.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReload = async () => {
    setActionLoading("reload");
    try {
      await apiFetch("/engine/reload", { method: "POST" });
      setToast("Apache configuration gracefully reloaded (0-downtime).");
      await loadStatus();
    } catch (e: any) {
      setToast(`Error reloading Apache: ${e.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleTestSyntax = async () => {
    setActionLoading("test");
    try {
      const body = tab === "config" && configContent ? { content: configContent } : {};
      const res = await apiFetch("/engine/test", {
        method: "POST",
        body: JSON.stringify(body),
      });
      setSyntaxResult({ ok: res.valid, output: res.output });
      if (res.valid) {
        setToast("Apache configuration syntax is OK.");
      }
    } catch (e: any) {
      setSyntaxResult({ ok: false, output: e.message });
      setToast(`Syntax Error: ${e.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleSaveConfig = async () => {
    setConfigSaving(true);
    try {
      await apiFetch("/engine/config", {
        method: "POST",
        body: JSON.stringify({ content: configContent }),
      });
      setToast("Global apache2.conf saved and service gracefully reloaded.");
      setSyntaxResult(null);
    } catch (e: any) {
      setToast(`Save failed: ${e.message}`);
    } finally {
      setConfigSaving(false);
    }
  };

  // VHost Actions
  const handleOpenNewVhost = () => {
    setEditingDomain(null);
    setVhostDomain("");
    setVhostPreset("static");
    setVhostContent(TEMPLATES.static("example.com"));
    setVhostModalOpen(true);
  };

  const handleOpenEditVhost = async (vh: VhostItem) => {
    setEditingDomain(vh.domain);
    setVhostDomain(vh.domain);
    setVhostPreset("custom");
    setVhostSaving(true);
    try {
      const res = await apiFetch(`/vhosts/${encodeURIComponent(vh.domain)}`);
      setVhostContent(res.content || "");
      setVhostModalOpen(true);
    } catch (e: any) {
      setToast(`Error reading vhost config: ${e.message}`);
    } finally {
      setVhostSaving(false);
    }
  };

  const handleDomainChange = (newDomain: string) => {
    setVhostDomain(newDomain);
    if (!editingDomain && vhostPreset !== "custom") {
      const gen = TEMPLATES[vhostPreset];
      if (gen) {
        setVhostContent(gen(newDomain));
      }
    }
  };

  const handlePresetChange = (preset: TemplatePreset) => {
    setVhostPreset(preset);
    if (preset !== "custom") {
      const gen = TEMPLATES[preset];
      if (gen) {
        setVhostContent(gen(vhostDomain));
      }
    }
  };

  const handleEditorChange = (newVal: string) => {
    setVhostContent(newVal);
    if (vhostPreset !== "custom") {
      const expected = TEMPLATES[vhostPreset]?.(vhostDomain);
      if (expected && newVal.trim() !== expected.trim()) {
        setVhostPreset("custom");
      }
    }
  };

  const handleSaveVhost = async () => {
    if (!vhostDomain.trim()) {
      setToast("Domain name is required.");
      return;
    }
    setVhostSaving(true);
    try {
      await apiFetch("/vhosts", {
        method: "POST",
        body: JSON.stringify({ domain: vhostDomain.trim(), content: vhostContent }),
      });
      setToast(`VirtualHost for ${vhostDomain} saved successfully.`);
      setVhostModalOpen(false);
      await loadVhosts();
    } catch (e: any) {
      setToast(`Failed to save VirtualHost: ${e.message}`);
    } finally {
      setVhostSaving(false);
    }
  };

  const handleToggleVhost = async (vh: VhostItem) => {
    const action = vh.enabled ? "disable" : "enable";
    try {
      await apiFetch(`/vhosts/${encodeURIComponent(vh.domain)}/${action}`, { method: "POST" });
      setToast(`VirtualHost ${vh.domain} ${action}d.`);
      await loadVhosts();
    } catch (e: any) {
      setToast(`Failed to ${action} VirtualHost: ${e.message}`);
    }
  };

  const handleDeleteVhost = async () => {
    if (!deletingDomain) return;
    try {
      await apiFetch(`/vhosts/${encodeURIComponent(deletingDomain)}`, { method: "DELETE" });
      setToast(`VirtualHost ${deletingDomain} deleted.`);
      setDeleteModalOpen(false);
      setDeletingDomain(null);
      await loadVhosts();
    } catch (e: any) {
      setToast(`Failed to delete VirtualHost: ${e.message}`);
    }
  };

  // Module Actions
  const handleToggleModule = async (m: ModuleItem) => {
    const action = m.enabled ? "disable" : "enable";
    try {
      await apiFetch(`/modules/${action}`, {
        method: "POST",
        body: JSON.stringify({ module: m.name }),
      });
      setToast(`Apache module mod_${m.name} ${action}d.`);
      await loadModules();
    } catch (e: any) {
      setToast(`Failed to ${action} module: ${e.message}`);
    }
  };

  const isRunning = Boolean(engineStatus?.active);
  const filteredVhosts = useMemo(() => {
    if (!vhostSearch) return vhosts;
    return vhosts.filter((vh) => vh.domain.toLowerCase().includes(vhostSearch.toLowerCase()));
  }, [vhosts, vhostSearch]);

  const filteredModules = useMemo(() => {
    if (!moduleSearch) return modules;
    return modules.filter((m) => m.name.toLowerCase().includes(moduleSearch.toLowerCase()));
  }, [modules, moduleSearch]);

  const filteredLogLines = useMemo(() => {
    if (!logSearch.trim()) return logLines;
    const q = logSearch.toLowerCase();
    return logLines.filter((l) => l.toLowerCase().includes(q));
  }, [logLines, logSearch]);

  const activeSitesCount = useMemo(() => {
    if (typeof engineStatus?.active_sites === "number") return engineStatus.active_sites;
    return vhosts.filter((vh) => vh.enabled).length;
  }, [engineStatus, vhosts]);

  const totalSitesCount = useMemo(() => {
    if (typeof engineStatus?.total_sites === "number" && engineStatus.total_sites > 0) return engineStatus.total_sites;
    return vhosts.length;
  }, [engineStatus, vhosts]);

  const displayPorts = useMemo(() => {
    if (engineStatus?.ports) return engineStatus.ports;
    if (engineStatus?.port) return String(engineStatus.port);
    return isRunning ? "8088" : "—";
  }, [engineStatus, isRunning]);

  const displayInstances = useMemo(() => {
    if (engineStatus?.instances) {
      return `${engineStatus.instances} (${engineStatus.workers || engineStatus.instances} worker${(engineStatus.workers || engineStatus.instances) === 1 ? "" : "s"})`;
    }
    if (engineStatus?.workers) {
      return `${engineStatus.workers} worker${engineStatus.workers === 1 ? "" : "s"}`;
    }
    return isRunning ? "1 active" : "0";
  }, [engineStatus, isRunning]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Top Lifecycle Action Bar */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Chip
            size="small"
            label={isRunning ? "RUNNING" : "STOPPED"}
            color={isRunning ? "success" : "error"}
            sx={{ fontWeight: 700, fontSize: "0.75rem" }}
          />
          {engineStatus?.version && (
            <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: MONO, fontSize: "0.8125rem" }}>
              {engineStatus.version}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
          {/* Refresh */}
          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={refreshAll}
                disabled={statusLoading || Boolean(actionLoading)}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {statusLoading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Test Syntax */}
          <Tooltip title="Test Configuration Syntax" arrow>
            <span>
              <IconButton
                size="small"
                onClick={handleTestSyntax}
                disabled={Boolean(actionLoading)}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {actionLoading === "test" ? <CircularProgress size={16} color="inherit" /> : <CheckIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Graceful Reload */}
          <Tooltip title="Graceful Reload (0-Downtime)" arrow>
            <span>
              <IconButton
                size="small"
                color="info"
                onClick={handleReload}
                disabled={!isRunning || Boolean(actionLoading)}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {actionLoading === "reload" ? <CircularProgress size={16} color="inherit" /> : <CachedIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Lifecycle: Start / Stop / Restart */}
          {isRunning ? (
            <>
              <Tooltip title="Restart Apache" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="warning"
                    onClick={handleRestart}
                    disabled={Boolean(actionLoading)}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    {actionLoading === "restart" ? <CircularProgress size={16} color="inherit" /> : <RestartAltIcon sx={{ fontSize: 18 }} />}
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Stop Apache" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={handleStop}
                    disabled={Boolean(actionLoading)}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    {actionLoading === "stop" ? <CircularProgress size={16} color="inherit" /> : <StopIcon sx={{ fontSize: 18 }} />}
                  </IconButton>
                </span>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Start Apache Engine" arrow>
              <span>
                <IconButton
                  size="small"
                  color="success"
                  onClick={handleStart}
                  disabled={Boolean(actionLoading)}
                  sx={{ border: "1px solid", borderColor: "success.main", bgcolor: (t) => alpha(t.palette.success.main, 0.1) }}
                >
                  {actionLoading === "start" ? <CircularProgress size={16} color="inherit" /> : <PlayArrowIcon sx={{ fontSize: 18 }} />}
                </IconButton>
              </span>
            </Tooltip>
          )}
        </Stack>
      </Stack>

      {/* 4 Stat Overview Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {/* 1. Running Port */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: (t) => alpha(t.palette.background.paper, 0.6),
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary" }}>
              RUNNING PORTS
            </Typography>
            <LanguageIcon sx={{ fontSize: 18, color: isRunning ? "success.main" : "text.disabled" }} />
          </Stack>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
            {isRunning ? displayPorts : "—"}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {isRunning ? "Backend HTTP / HTTPS Application Listeners" : "Engine stopped"}
          </Typography>
        </Paper>

        {/* 2. Active Instances */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: (t) => alpha(t.palette.background.paper, 0.6),
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary" }}>
              ACTIVE INSTANCES
            </Typography>
            <SpeedIcon sx={{ fontSize: 18, color: isRunning ? "primary.main" : "text.disabled" }} />
          </Stack>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
            {isRunning ? displayInstances : "0"}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {isRunning ? `Master PID: ${engineStatus?.pid || "—"} • MPM: ${engineStatus?.mpm || "event"}` : "No active processes"}
          </Typography>
        </Paper>

        {/* 3. Active Sites */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: (t) => alpha(t.palette.background.paper, 0.6),
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary" }}>
              ACTIVE SITES
            </Typography>
            <PublicIcon sx={{ fontSize: 18, color: activeSitesCount > 0 ? "info.main" : "text.disabled" }} />
          </Stack>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
            {activeSitesCount} <Typography component="span" variant="body2" sx={{ color: "text.secondary" }}>/ {totalSitesCount} Total</Typography>
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {activeSitesCount === 1 ? "1 virtual host enabled" : `${activeSitesCount} virtual hosts enabled`}
          </Typography>
        </Paper>

        {/* 4. Reverse Proxy Flow */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            bgcolor: (t) => alpha(t.palette.background.paper, 0.6),
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary" }}>
              REVERSE PROXY FLOW
            </Typography>
            <SwapHorizIcon sx={{ fontSize: 18, color: "secondary.main" }} />
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
            Nginx ➔ Apache
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Edge (80/443) ➔ Backend (8088)
          </Typography>
        </Paper>
      </Box>

      {/* Syntax Alert if tested */}
      {syntaxResult && (
        <Alert
          severity={syntaxResult.ok ? "success" : "error"}
          onClose={() => setSyntaxResult(null)}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            {syntaxResult.ok ? "apachectl -t: Syntax OK" : "apachectl -t: Syntax validation failed"}
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: MONO, display: "block", mt: 0.5, whiteSpace: "pre-wrap" }}>
            {syntaxResult.output}
          </Typography>
        </Alert>
      )}

      {/* Tabs */}
      <Paper sx={{ border: "1px solid", borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem", whiteSpace: "nowrap" },
          }}
        >
          <Tab label={`Virtual Hosts (${totalSitesCount})`} value="vhosts" />
          <Tab label={`Modules (${modules.length})`} value="modules" />
          <Tab label="Global Configuration" value="config" />
          <Tab label="Live Logs" value="logs" />
          <Tab label="Service & Isolation" value="service" />
        </Tabs>

        <Box sx={{ p: 2.25 }}>
          {/* TAB 1: VIRTUAL HOSTS */}
          {tab === "vhosts" && (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  placeholder="Search VirtualHosts..."
                  value={vhostSearch}
                  onChange={(e) => setVhostSearch(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{ width: { xs: "100%", sm: 280 } }}
                />
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<AddIcon />}
                  onClick={handleOpenNewVhost}
                >
                  New VirtualHost
                </Button>
              </Stack>

              <TableContainer component={Paper} variant="outlined" sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <Table size="small" sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>ServerName / Domain</TableCell>
                      <TableCell>Port</TableCell>
                      <TableCell>SSL</TableCell>
                      <TableCell>Document Root</TableCell>
                      <TableCell>Enabled (a2ensite)</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredVhosts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} align="center" sx={{ py: 4, color: "text.secondary" }}>
                          No Apache VirtualHosts found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredVhosts.map((vh) => (
                        <TableRow key={vh.domain} hover>
                          <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                            {vh.domain}
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO }}>
                            {vh.port || 8088}
                          </TableCell>
                          <TableCell>
                            {vh.ssl ? (
                              <Chip
                                icon={<LockIcon sx={{ fontSize: "12px !important" }} />}
                                label="HTTPS"
                                color="success"
                                size="small"
                              />
                            ) : (
                              <Chip label="HTTP" size="small" />
                            )}
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: "0.75rem", color: "text.secondary" }}>
                            {vh.root || "/opt/hostpanel/data/vhosts/" + vh.domain}
                          </TableCell>
                          <TableCell>
                            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                              <Switch
                                size="small"
                                checked={vh.enabled}
                                onChange={() => handleToggleVhost(vh)}
                              />
                              <Typography variant="caption" sx={{ color: vh.enabled ? "success.main" : "text.secondary", fontWeight: 600 }}>
                                {vh.enabled ? "Enabled" : "Disabled"}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                              <Tooltip title="Edit Config">
                                <IconButton size="small" onClick={() => handleOpenEditVhost(vh)}>
                                  <EditIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => {
                                    setDeletingDomain(vh.domain);
                                    setDeleteModalOpen(true);
                                  }}
                                >
                                  <DeleteIcon sx={{ fontSize: 16 }} />
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
            </Stack>
          )}

          {/* TAB 2: MODULES */}
          {tab === "modules" && (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}>
                <TextField
                  size="small"
                  placeholder="Search Apache modules..."
                  value={moduleSearch}
                  onChange={(e) => setModuleSearch(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{ width: { xs: "100%", sm: 280 } }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Total Apache Modules: <strong>{modules.length}</strong> ({modules.filter((m) => m.enabled).length} Enabled)
                </Typography>
              </Stack>

              <TableContainer component={Paper} variant="outlined" sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <Table size="small" sx={{ minWidth: 500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Module Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Toggle (a2enmod / a2dismod)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredModules.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} align="center" sx={{ py: 4, color: "text.secondary" }}>
                          No matching modules found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredModules.map((m) => (
                        <TableRow key={m.name} hover>
                          <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                            mod_{m.name}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={m.enabled ? "Enabled" : "Available"}
                              color={m.enabled ? "success" : "default"}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Switch
                              size="small"
                              checked={m.enabled}
                              onChange={() => handleToggleModule(m)}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          )}

          {/* TAB 3: GLOBAL CONFIGURATION */}
          {tab === "config" && (
            <Stack spacing={2}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    /opt/hostpanel/etc/apache/apache2.conf
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Isolated Apache main configuration file. Validated with apachectl -t prior to saving.
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleTestSyntax}
                    disabled={configLoading || actionLoading === "test"}
                    startIcon={<CheckIcon />}
                  >
                    {actionLoading === "test" ? "Testing..." : "Test Syntax"}
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={loadConfig}
                    disabled={configLoading}
                    startIcon={<RefreshIcon />}
                  >
                    Reload File
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleSaveConfig}
                    disabled={configSaving || configLoading}
                  >
                    {configSaving ? "Saving..." : "Save & Reload"}
                  </Button>
                </Stack>
              </Stack>

              {configLoading ? (
                <Box sx={{ display: "grid", placeItems: "center", py: 8 }}>
                  <CircularProgress size={28} />
                </Box>
              ) : (
                <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflow: "hidden" }}>
                  <AceEditor
                    mode="apache_conf"
                    theme="one_dark"
                    name="apache-global-config-ace-editor"
                    value={configContent}
                    onChange={(val) => setConfigContent(val)}
                    width="100%"
                    height="540px"
                    fontSize={13}
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                      tabSize: 4,
                      useWorker: false,
                    }}
                  />
                </Box>
              )}
            </Stack>
          )}

          {/* TAB 4: LIVE LOGS */}
          {tab === "logs" && (
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
                  {/* Log Domain Target */}
                  <Select
                    size="small"
                    value={logDomain}
                    onChange={(e) => setLogDomain(e.target.value)}
                    sx={{ minWidth: 160 }}
                  >
                    <MenuItem value="global">Global Logs</MenuItem>
                    {vhosts.map((vh) => (
                      <MenuItem key={vh.domain} value={vh.domain}>
                        {vh.domain}
                      </MenuItem>
                    ))}
                  </Select>

                  {/* Log Type */}
                  <Select
                    size="small"
                    value={logType}
                    onChange={(e) => setLogType(e.target.value as "error" | "access")}
                    sx={{ minWidth: 130 }}
                  >
                    <MenuItem value="error">Error Log</MenuItem>
                    <MenuItem value="access">Access Log</MenuItem>
                  </Select>

                  {/* Line Count */}
                  <Select
                    size="small"
                    value={logCount}
                    onChange={(e) => setLogCount(Number(e.target.value))}
                    sx={{ minWidth: 100 }}
                  >
                    <MenuItem value={50}>50 lines</MenuItem>
                    <MenuItem value={100}>100 lines</MenuItem>
                    <MenuItem value={200}>200 lines</MenuItem>
                    <MenuItem value={500}>500 lines</MenuItem>
                  </Select>

                  {/* Search / Filter */}
                  <TextField
                    size="small"
                    placeholder="Filter logs..."
                    value={logSearch}
                    onChange={(e) => setLogSearch(e.target.value)}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{ width: 170 }}
                  />
                </Stack>

                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={autoRefreshLogs}
                        onChange={(e) => setAutoRefreshLogs(e.target.checked)}
                      />
                    }
                    label={<Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Auto (3s)</Typography>}
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<RefreshIcon />}
                    onClick={loadLogs}
                    disabled={logsLoading}
                  >
                    {logsLoading ? "Refreshing..." : "Refresh"}
                  </Button>
                </Stack>
              </Stack>

              {/* Log File Path & Stats */}
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", px: 0.5 }}>
                <Typography variant="caption" sx={{ fontFamily: MONO, color: "text.secondary" }}>
                  {logPath || `/opt/hostpanel/logs/apache/${logDomain !== "global" ? `${logDomain}_` : ""}${logType}.log`}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Showing <strong>{filteredLogLines.length}</strong> of {logLines.length} lines
                </Typography>
              </Stack>

              <Paper
                sx={{
                  p: 2,
                  bgcolor: CONSOLE.bg,
                  color: CONSOLE.fg,
                  fontFamily: MONO,
                  fontSize: "0.75rem",
                  lineHeight: 1.55,
                  borderRadius: "8px",
                  maxHeight: 480,
                  overflowY: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                {logsLoading ? (
                  <Box sx={{ display: "grid", placeItems: "center", py: 4 }}>
                    <CircularProgress size={20} />
                  </Box>
                ) : filteredLogLines.length === 0 ? (
                  <Typography variant="body2" sx={{ color: CONSOLE.dim, fontStyle: "italic", textAlign: "center", py: 3 }}>
                    {logSearch ? `No log entries matching "${logSearch}"` : `No recent log entries in ${logPath || `/opt/hostpanel/logs/apache/${logType}.log`}`}
                  </Typography>
                ) : (
                  filteredLogLines.map((line, idx) => (
                    <div key={idx} style={{ lineHeight: 1.55 }}>
                      {line}
                    </div>
                  ))
                )}
              </Paper>
            </Stack>
          )}

          {/* TAB 5: SERVICE & ISOLATION */}
          {tab === "service" && (
            <Stack spacing={2}>
              <Panel label="100% ISOLATION STRUCTURE" padded>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  All configuration, virtual hosts, logs, modules, and PID locks reside strictly under <code style={{ fontFamily: MONO }}>/opt/hostpanel</code>.
                </Typography>
                <Stack spacing={1.5}>
                  <Readout label="CONFIGURATION ROOT" value="/opt/hostpanel/etc/apache" />
                  <Readout label="SITES AVAILABLE / ENABLED" value="/opt/hostpanel/etc/apache/sites-available" />
                  <Readout label="VIRTUAL HOST DOCUMENT ROOTS" value="/opt/hostpanel/data/vhosts" />
                  <Readout label="LOGS DIRECTORY" value="/opt/hostpanel/logs/apache" />
                  <Readout label="RUN & PID SOCKETS" value="/opt/hostpanel/run/apache" />
                </Stack>
              </Panel>

              <Panel label="SYSTEM SERVICE & CREDENTIALS" padded>
                <Stack spacing={1.5}>
                  <Readout label="SYSTEMD SERVICE UNIT" value="hostpanel-apached.service" />
                  <Readout label="SERVICE USER ACCOUNT" value="hp-apache" />
                  <Readout label="INTERNAL API BINDING" value="Isolated Loopback (127.0.0.1)" />
                  <Readout label="OPS HELPER SCRIPT" value="/opt/hostpanel/packages/apache/ops/hp-apache" />
                </Stack>
              </Panel>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* VirtualHost Editor Modal */}
      <Dialog
        open={vhostModalOpen}
        onClose={() => setVhostModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1, fontWeight: 600 }}>
          {editingDomain ? `Edit VirtualHost: ${editingDomain}` : "New Apache VirtualHost"}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Stack spacing={2}>
            {!editingDomain && (
              <>
                <Field label="Domain / ServerName" hint="e.g. app.mydomain.com">
                  <TextField
                    placeholder="example.com"
                    value={vhostDomain}
                    onChange={(e) => handleDomainChange(e.target.value)}
                    fullWidth
                    size="small"
                    slotProps={{ htmlInput: { style: { fontFamily: MONO, fontSize: "0.875rem" } } }}
                  />
                </Field>

                <Field label="Preset Template" hint="Auto-generates Apache config">
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 0.75 }}>
                    <Chip
                      label="Static HTML"
                      clickable
                      color={vhostPreset === "static" ? "primary" : "default"}
                      variant={vhostPreset === "static" ? "filled" : "outlined"}
                      onClick={() => handlePresetChange("static")}
                      size="small"
                    />
                    <Chip
                      label="PHP-FPM FastCGI"
                      clickable
                      color={vhostPreset === "php" ? "primary" : "default"}
                      variant={vhostPreset === "php" ? "filled" : "outlined"}
                      onClick={() => handlePresetChange("php")}
                      size="small"
                    />
                    <Chip
                      label="Reverse Proxy (Node/Go/Python)"
                      clickable
                      color={vhostPreset === "proxy" ? "primary" : "default"}
                      variant={vhostPreset === "proxy" ? "filled" : "outlined"}
                      onClick={() => handlePresetChange("proxy")}
                      size="small"
                    />
                    <Chip
                      label="SPA (React/Vue/Angular)"
                      clickable
                      color={vhostPreset === "spa" ? "primary" : "default"}
                      variant={vhostPreset === "spa" ? "filled" : "outlined"}
                      onClick={() => handlePresetChange("spa")}
                      size="small"
                    />
                    <Chip
                      label="Custom / Manual"
                      clickable
                      color={vhostPreset === "custom" ? "secondary" : "default"}
                      variant={vhostPreset === "custom" ? "filled" : "outlined"}
                      onClick={() => handlePresetChange("custom")}
                      size="small"
                    />
                  </Stack>
                </Field>

                <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: MONO, display: "block" }}>
                  Root: /opt/hostpanel/data/vhosts/{vhostDomain || "example.com"}/public_html
                </Typography>
              </>
            )}

            <Field label="VirtualHost Configuration (.conf)" hint="Validated with apachectl -t">
              <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflow: "hidden" }}>
                <AceEditor
                  mode="apache_conf"
                  theme="one_dark"
                  name="apache-vhost-editor-modal"
                  value={vhostContent}
                  onChange={handleEditorChange}
                  width="100%"
                  height="340px"
                  fontSize={13}
                  showPrintMargin={false}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                    useWorker: false,
                  }}
                />
              </Box>
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setVhostModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveVhost}
            disabled={vhostSaving}
          >
            {vhostSaving ? "Saving..." : "Save VirtualHost"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Delete VirtualHost</DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          <Typography variant="body2">
            Are you sure you want to permanently delete the VirtualHost for <strong>{deletingDomain}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteVhost}
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
}
