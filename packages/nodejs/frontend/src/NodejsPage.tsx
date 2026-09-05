import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  MenuItem,
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

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import TerminalIcon from "@mui/icons-material/Terminal";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DnsIcon from "@mui/icons-material/Dns";
import CodeIcon from "@mui/icons-material/Code";
import CloseIcon from "@mui/icons-material/Close";

import type {
  PackageContext,
  NodeApp,
  NodeRuntime,
  NodeDaemonStatus,
  AppLogs,
} from "./types";
import { Dot, Field, LogPane, MONO, Panel, Readout, type Line, appendEvent } from "./kit";

export const RUNTIME_METADATA: Record<
  string,
  { title: string; status: string; desc: string }
> = {
  "18": {
    title: "Node.js 18 LTS (Hydrogen)",
    status: "Active LTS",
    desc: "Stable for legacy frameworks and LTS maintenance",
  },
  "20": {
    title: "Node.js 20 LTS (Iron)",
    status: "Active LTS",
    desc: "Enterprise LTS with high performance and security",
  },
  "22": {
    title: "Node.js 22 LTS (Jod)",
    status: "Latest LTS",
    desc: "Modern V8 engine with native WebSocket & fetch",
  },
  "24": {
    title: "Node.js 24 (Current)",
    status: "Current",
    desc: "Cutting edge features and latest ECMAScript syntax",
  },
};

export function NodejsPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(
    () => createTheme((ctx.theme ?? {}) as ThemeOptions),
    [ctx.theme]
  );
  return (
    <ThemeProvider theme={theme}>
      <NodejsBody ctx={ctx} />
    </ThemeProvider>
  );
}

function NodejsBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statusData, setStatusData] = useState<NodeDaemonStatus | null>(null);
  const [apps, setApps] = useState<NodeApp[]>([]);
  const [runtimes, setRuntimes] = useState<NodeRuntime[]>([]);
  const [search, setSearch] = useState("");

  const installedRuntimes = useMemo(
    () => runtimes.filter((r) => r.installed),
    [runtimes]
  );

  // Deploy New App Form State
  const [deployDialogOpen, setDeployDialogOpen] = useState(false);
  const [deployName, setDeployName] = useState("");
  const [deployDir, setDeployDir] = useState("/opt/hostpanel/data/apps/");
  const [deployVersion, setDeployVersion] = useState("22");
  const [deployScript, setDeployScript] = useState("index.js");
  const [deployPort, setDeployPort] = useState("0");
  const [deployEnv, setDeployEnv] = useState("NODE_ENV=production\nPORT=31000\n");
  const [deployLoading, setDeployLoading] = useState(false);

  // Edit App Form State
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editAppTarget, setEditAppTarget] = useState<NodeApp | null>(null);
  const [editDir, setEditDir] = useState("");
  const [editVersion, setEditVersion] = useState("22");
  const [editScript, setEditScript] = useState("index.js");
  const [editPort, setEditPort] = useState("0");
  const [editLoading, setEditLoading] = useState(false);

  const handleOpenEdit = (app: NodeApp) => {
    setEditAppTarget(app);
    setEditDir(app.directory);
    setEditVersion(app.node_version || (installedRuntimes[0]?.major ?? "22"));
    setEditScript(app.script || "index.js");
    setEditPort(String(app.port || "0"));
    setEditDialogOpen(true);
  };

  // Automatically update deployVersion when installed runtimes load or change
  useEffect(() => {
    if (installedRuntimes.length > 0) {
      if (!installedRuntimes.some((r) => r.major === deployVersion)) {
        setDeployVersion(installedRuntimes[0].major);
      }
    }
  }, [installedRuntimes, deployVersion]);

  const handleOpenDeploy = () => {
    if (installedRuntimes.length > 0 && !installedRuntimes.some((r) => r.major === deployVersion)) {
      setDeployVersion(installedRuntimes[0].major);
    }
    setDeployDialogOpen(true);
  };

  // Runtime Install Dialog
  const [runtimeDialogOpen, setRuntimeDialogOpen] = useState(false);
  const [installVer, setInstallVer] = useState("22");
  const [runtimeInstalling, setRuntimeInstalling] = useState(false);
  const [runtimeCompleted, setRuntimeCompleted] = useState(false);
  const [runtimeLogs, setRuntimeLogs] = useState<Line[]>([]);

  // Environment Editor Drawer
  const [envDrawerOpen, setEnvDrawerOpen] = useState(false);
  const [envAppName, setEnvAppName] = useState("");
  const [envContent, setEnvContent] = useState("");
  const [envSaving, setEnvSaving] = useState(false);

  // Live Logs Viewer
  const [selectedLogApp, setSelectedLogApp] = useState("");
  const [logType, setLogType] = useState<"all" | "out" | "err">("all");
  const [logLinesCount] = useState(100);
  const [appLogLines, setAppLogLines] = useState<Line[]>([]);
  const [logStreaming] = useState(false);

  // Delete Confirm Modal
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Toast feedback
  const [toast, setToast] = useState<{
    message: string;
    severity: "success" | "error" | "info";
  } | null>(null);

  const showToast = (
    message: string,
    severity: "success" | "error" | "info" = "success"
  ) => {
    setToast({ message, severity });
  };

  const json = useCallback(
    async (path: string, init?: RequestInit) => {
      const res = await ctx.api(path, init);
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.message || body.error || `HTTP ${res.status}`);
      }
      return body;
    },
    [ctx]
  );

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [sRes, aRes, rRes] = await Promise.allSettled([
        json("/status"),
        json("/apps"),
        json("/runtimes"),
      ]);

      if (sRes.status === "fulfilled" && sRes.value) {
        setStatusData(sRes.value);
      }
      if (aRes.status === "fulfilled" && aRes.value?.apps) {
        setApps(aRes.value.apps);
      }
      if (rRes.status === "fulfilled" && rRes.value?.runtimes) {
        setRuntimes(rRes.value.runtimes);
      }
    } catch (err: any) {
      showToast(err.message || "Failed to load Node.js service data", "error");
    } finally {
      setLoading(false);
    }
  }, [json]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Set default selected log app when apps load
  useEffect(() => {
    if (apps.length > 0 && !selectedLogApp) {
      setSelectedLogApp(apps[0].name);
    }
  }, [apps, selectedLogApp]);

  // Fetch logs when app or log type changes in Tab 3
  const fetchLogs = useCallback(
    async (appName: string, lines = 100, type = "all") => {
      if (!appName) return;
      try {
        const data: AppLogs = await json(
          `/apps/${encodeURIComponent(appName)}/logs?lines=${lines}&type=${type}`
        );
        const rawText =
          type === "out"
            ? data.stdout
            : type === "err"
            ? data.stderr
            : data.logs;

        const formatted: Line[] = rawText
          ? rawText.split("\n").map((text) => ({
              stream: type === "err" ? "stderr" : "stdout",
              text,
            }))
          : [];
        setAppLogLines(formatted);
      } catch (err: any) {
        console.error("Failed to load logs", err);
      }
    },
    [json]
  );

  useEffect(() => {
    if (tab === 2 && selectedLogApp) {
      fetchLogs(selectedLogApp, logLinesCount, logType);
    }
  }, [tab, selectedLogApp, logType, logLinesCount, fetchLogs]);

  // App Actions: Start, Stop, Restart
  const handleStartApp = async (name: string) => {
    try {
      await json(`/apps/${encodeURIComponent(name)}/start`, { method: "POST" });
      showToast(`Application '${name}' started`, "success");
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to start ${name}`, "error");
    }
  };

  const handleStopApp = async (name: string) => {
    try {
      await json(`/apps/${encodeURIComponent(name)}/stop`, { method: "POST" });
      showToast(`Application '${name}' stopped`, "info");
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to stop ${name}`, "error");
    }
  };

  const handleRestartApp = async (name: string) => {
    try {
      await json(`/apps/${encodeURIComponent(name)}/restart`, { method: "POST" });
      showToast(`Application '${name}' restarted`, "success");
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to restart ${name}`, "error");
    }
  };

  const handleDeleteApp = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await json(`/apps/${encodeURIComponent(deleteTarget)}`, {
        method: "DELETE",
      });
      showToast(`Application '${deleteTarget}' deleted`, "success");
      setDeleteTarget(null);
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to delete ${deleteTarget}`, "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  // Open Environment Drawer
  const handleOpenEnv = async (name: string) => {
    setEnvAppName(name);
    setEnvDrawerOpen(true);
    setEnvContent("");
    try {
      const data = await json(`/apps/${encodeURIComponent(name)}/env`);
      setEnvContent(data.env || "");
    } catch (err: any) {
      showToast(err.message || "Failed to load environment variables", "error");
    }
  };

  const handleSaveEnv = async () => {
    if (!envAppName) return;
    setEnvSaving(true);
    try {
      await json(`/apps/${encodeURIComponent(envAppName)}/env`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ env: envContent }),
      });
      showToast(`Environment variables updated for '${envAppName}'`, "success");
      setEnvDrawerOpen(false);
    } catch (err: any) {
      showToast(err.message || "Failed to save environment variables", "error");
    } finally {
      setEnvSaving(false);
    }
  };

  // Deploy New Application
  const handleDeployAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deployName) return;
    setDeployLoading(true);
    try {
      const fullDir = deployDir.endsWith("/")
        ? `${deployDir}${deployName}`
        : deployDir;

      const created = await json("/apps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: deployName.trim().toLowerCase(),
          directory: fullDir.trim(),
          node_version: deployVersion,
          script: deployScript.trim() || "index.js",
          port: parseInt(deployPort, 10) || 0,
        }),
      });

      if (deployEnv.trim()) {
        await json(`/apps/${encodeURIComponent(deployName)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: deployEnv }),
        }).catch(() => {});
      }

      showToast(
        `Application '${deployName}' deployed on port ${created.port || "allocated"}!`,
        "success"
      );
      setDeployName("");
      setDeployDialogOpen(false);
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to create application", "error");
    } finally {
      setDeployLoading(false);
    }
  };

  // Edit Existing Application
  const handleEditAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editAppTarget) return;
    setEditLoading(true);
    try {
      await json(`/apps/${encodeURIComponent(editAppTarget.name)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          directory: editDir.trim(),
          node_version: editVersion,
          script: editScript.trim() || "index.js",
          port: parseInt(editPort, 10) || 0,
        }),
      });

      showToast(`Application '${editAppTarget.name}' updated successfully!`, "success");
      setEditDialogOpen(false);
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to update application", "error");
    } finally {
      setEditLoading(false);
    }
  };

  // Install Node Runtime
  const handleInstallRuntime = async (targetVer?: string) => {
    const v = targetVer || installVer;
    setInstallVer(v);
    setRuntimeInstalling(true);
    setRuntimeCompleted(false);
    setRuntimeLogs([]);
    try {
      if (ctx.run) {
        for await (const ev of ctx.run("/runtimes/install", {
          method: "POST",
          body: { version: v },
        })) {
          setRuntimeLogs((prev) => appendEvent(prev, ev));
        }
      } else {
        await json("/runtimes/install", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version: v }),
        });
      }
      setRuntimeCompleted(true);
      showToast(`Node.js v${v} installed successfully!`, "success");
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to install Node.js v${v}`, "error");
    } finally {
      setRuntimeInstalling(false);
    }
  };

  const handleRemoveRuntime = async (version: string) => {
    try {
      await json(`/runtimes/${encodeURIComponent(version)}`, {
        method: "DELETE",
      });
      showToast(`Node.js v${version} removed`, "success");
      refresh();
    } catch (err: any) {
      showToast(err.message || `Failed to remove Node.js v${version}`, "error");
    }
  };

  const filteredApps = apps.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.directory.toLowerCase().includes(search.toLowerCase()) ||
      String(a.port).includes(search)
  );

  const runningAppsCount = apps.filter((a) => a.status === "running").length;
  const totalMemory = apps.reduce(
    (acc, a) => acc + (parseFloat(String(a.memory_mb)) || 0),
    0
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }}>
      {/* Top Action Bar */}
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
              Node.js Application Manager
            </Typography>
            <Chip
              size="small"
              icon={<Dot ok={Boolean(statusData?.healthy)} size={8} />}
              label={statusData?.healthy ? "Daemon Active" : "Daemon Inactive"}
              variant="outlined"
              color={statusData?.healthy ? "success" : "default"}
              sx={{ fontWeight: 600, fontSize: "0.75rem" }}
            />
          </Stack>
          <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }}>
            Process supervisor, isolated runtimes, reverse proxy port allocator (31000–31999)
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexShrink: 0 }}>
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

          {/* Primary Action Button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={handleOpenDeploy}
            sx={{ ml: 0.5, whiteSpace: "nowrap" }}
          >
            Deploy Application
          </Button>
        </Stack>
      </Stack>

      {/* 4 Overview Stat Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {/* Card 1: Daemon Status */}
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1.5,
                  bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                  color: "primary.main",
                  display: "flex",
                }}
              >
                <DnsIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Node Daemon Status
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  {statusData?.healthy ? "Active · Running" : "Stopped"}
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
              Service: hostpanel-nodejsd • User: hp-nodejs
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2: Running Apps */}
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1.5,
                  bgcolor: (t) => alpha(t.palette.success.main, 0.1),
                  color: "success.main",
                  display: "flex",
                }}
              >
                <TerminalIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Running Apps
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  {runningAppsCount} / {apps.length} Online
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
              {apps.length === 0 ? "No applications deployed" : `${apps.length - runningAppsCount} stopped or paused`}
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3: Node Runtimes */}
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1.5,
                  bgcolor: (t) => alpha(t.palette.warning.main, 0.1),
                  color: "warning.main",
                  display: "flex",
                }}
              >
                <CodeIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Runtime Versions
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  {installedRuntimes.length} Installed
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
              {installedRuntimes.length > 0
                ? installedRuntimes.map((r) => `v${r.major}`).join(", ") + " active"
                : "No runtimes installed"}
            </Typography>
          </CardContent>
        </Card>

        {/* Card 4: Resource Usage & Port Allocator */}
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1.5,
                  bgcolor: (t) => alpha(t.palette.secondary.main, 0.1),
                  color: "secondary.main",
                  display: "flex",
                }}
              >
                <MemoryIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Total Memory / CPU
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  {totalMemory.toFixed(1)} MB
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
              {runningAppsCount} active app process{runningAppsCount === 1 ? "" : "es"}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Main Bordered Tabs Container */}
      <Panel padded={false}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label={`Applications (${apps.length})`} />
            <Tab label="Node Runtimes" />
            <Tab label="Live Console Logs" />
            <Tab label="Service & Isolation" />
          </Tabs>
        </Box>

        {/* Tab 0: Applications Table */}
        {tab === 0 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
            >
              <TextField
                size="small"
                placeholder="Search apps by name, path, or port..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: 18, color: "text.disabled" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ maxWidth: 360, width: "100%" }}
              />
            </Stack>

            <TableContainer>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      App Name & Path
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Runtime
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Assigned Port
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Memory / CPU
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredApps.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                        <TerminalIcon sx={{ fontSize: 40, color: "text.disabled", mb: 1 }} />
                        <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                          No Node.js Applications Deployed
                        </Typography>
                        <Typography sx={{ fontSize: "0.8125rem", color: "text.disabled", mb: 2 }}>
                          Deploy an Express, Next.js, Fastify, or custom Node.js application to get started.
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={handleOpenDeploy}
                        >
                          Deploy First App
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredApps.map((app) => (
                      <TableRow key={app.name} hover>
                        <TableCell>
                          <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                            {app.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: MONO,
                              fontSize: "0.75rem",
                              color: "text.disabled",
                            }}
                          >
                            {app.directory}/{app.script}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            icon={<Dot ok={app.status === "running"} size={7} />}
                            label={app.status === "running" ? `Running (PID ${app.pid})` : "Stopped"}
                            color={app.status === "running" ? "success" : "default"}
                            variant="outlined"
                            sx={{ fontWeight: 500 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            label={`Node ${app.node_version}`}
                            variant="outlined"
                            sx={{ fontFamily: MONO, fontSize: "0.75rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <Tooltip title="Copy local reverse proxy address">
                            <Chip
                              size="small"
                              label={`http://127.0.0.1:${app.port}`}
                              onClick={() => {
                                navigator.clipboard.writeText(`http://127.0.0.1:${app.port}`);
                                showToast(`Copied http://127.0.0.1:${app.port}`, "info");
                              }}
                              icon={<ContentCopyIcon sx={{ fontSize: "13px !important" }} />}
                              sx={{
                                fontFamily: MONO,
                                fontSize: "0.75rem",
                                cursor: "pointer",
                              }}
                            />
                          </Tooltip>
                        </TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem", color: "text.secondary" }}>
                          {app.status === "running" ? `${app.memory_mb} MB • ${app.cpu_pct}%` : "—"}
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                            {app.status === "running" ? (
                              <>
                                <Tooltip title="Restart Application">
                                  <IconButton size="small" onClick={() => handleRestartApp(app.name)}>
                                    <RestartAltIcon sx={{ fontSize: 18 }} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Stop Application">
                                  <IconButton size="small" color="warning" onClick={() => handleStopApp(app.name)}>
                                    <StopIcon sx={{ fontSize: 18 }} />
                                  </IconButton>
                                </Tooltip>
                              </>
                            ) : (
                              <Tooltip title="Start Application">
                                <IconButton size="small" color="success" onClick={() => handleStartApp(app.name)}>
                                  <PlayArrowIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                              </Tooltip>
                            )}
                            <Tooltip title="Edit Application">
                              <IconButton size="small" onClick={() => handleOpenEdit(app)}>
                                <EditIcon sx={{ fontSize: 18 }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Environment Variables">
                              <IconButton size="small" onClick={() => handleOpenEnv(app.name)}>
                                <SettingsIcon sx={{ fontSize: 18 }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="View Logs">
                              <IconButton
                                size="small"
                                onClick={() => {
                                  setSelectedLogApp(app.name);
                                  setTab(2);
                                }}
                              >
                                <ArticleIcon sx={{ fontSize: 18 }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete Application">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => setDeleteTarget(app.name)}
                              >
                                <DeleteIcon sx={{ fontSize: 18 }} />
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

        {/* Tab 1: Node Runtimes Manager */}
        {tab === 1 && (
          <Box sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  Node.js Runtimes Manager
                </Typography>
                <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                  Isolated standalone binaries under /opt/hostpanel/runtimes/node/
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
              {[
                { major: "18", title: "Node.js 18 LTS (Hydrogen)", status: "Active LTS", desc: "Stable for legacy frameworks and LTS maintenance" },
                { major: "20", title: "Node.js 20 LTS (Iron)", status: "Active LTS", desc: "Enterprise LTS with high performance and security" },
                { major: "22", title: "Node.js 22 LTS (Jod)", status: "Latest LTS", desc: "Modern V8 engine with native WebSocket & fetch" },
                { major: "24", title: "Node.js 24 (Current)", status: "Current", desc: "Cutting edge features and latest ECMAScript syntax" },
              ].map((ver) => {
                const rt = runtimes.find((r) => r.major === ver.major);
                const isInstalled = rt ? Boolean(rt.installed) : false;
                const appsUsing = apps.filter((a) => a.node_version === ver.major).length;

                return (
                  <Card key={ver.major} variant="outlined" sx={{ borderRadius: 2 }}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Stack direction="row" spacing={1.5} sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
                            {ver.title}
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "text.secondary", mt: 0.25 }}>
                            {ver.desc}
                          </Typography>
                        </Box>
                        <Chip
                          size="small"
                          label={isInstalled ? "Installed" : "Available"}
                          color={isInstalled ? "success" : "default"}
                          variant="outlined"
                        />
                      </Stack>

                      <Divider sx={{ my: 1.5 }} />

                      <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                        <Readout
                          label="Binary Path"
                          value={
                            isInstalled ? (
                              `/opt/hostpanel/runtimes/node/v${ver.major}/bin/node`
                            ) : (
                              <Typography component="span" sx={{ color: "text.disabled", fontStyle: "italic", fontSize: "0.75rem" }}>
                                Not installed
                              </Typography>
                            )
                          }
                        />
                        <Readout
                          label="Active Apps"
                          value={isInstalled ? `${appsUsing} Apps` : "—"}
                          mono={false}
                        />
                      </Stack>

                      <Stack direction="row" spacing={1}>
                        {isInstalled ? (
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            disabled={appsUsing > 0}
                            onClick={() => handleRemoveRuntime(ver.major)}
                          >
                            {appsUsing > 0 ? "In Use by Apps" : "Remove"}
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => {
                              setInstallVer(ver.major);
                              setRuntimeCompleted(false);
                              setRuntimeLogs([]);
                              setRuntimeDialogOpen(true);
                            }}
                          >
                            Install v{ver.major}
                          </Button>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        )}

        {/* Tab 2: Live Console Logs */}
        {tab === 2 && (
          <Box sx={{ p: 3 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                  Application:
                </Typography>
                <Select
                  size="small"
                  value={selectedLogApp}
                  onChange={(e) => setSelectedLogApp(e.target.value)}
                  sx={{ minWidth: 200 }}
                >
                  {apps.map((a) => (
                    <MenuItem key={a.name} value={a.name}>
                      {a.name} ({a.status})
                    </MenuItem>
                  ))}
                </Select>

                <Select
                  size="small"
                  value={logType}
                  onChange={(e) => setLogType(e.target.value as any)}
                >
                  <MenuItem value="all">All (Stdout + Stderr)</MenuItem>
                  <MenuItem value="out">Stdout Only</MenuItem>
                  <MenuItem value="err">Stderr Only</MenuItem>
                </Select>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={() => fetchLogs(selectedLogApp, logLinesCount, logType)}
                >
                  Refresh
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => setAppLogLines([])}
                >
                  Clear
                </Button>
              </Stack>
            </Stack>

            <LogPane lines={appLogLines} running={logStreaming} />
          </Box>
        )}

        {/* Tab 3: Service & Isolation */}
        {tab === 3 && (
          <Box sx={{ p: 3 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }}>
              100% HostPanel Isolation Architecture
            </Typography>
            <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mb: 3 }}>
              Strict isolation under /opt/hostpanel. No scatter into system /var, /etc, or /tmp.
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
              <Panel label="Filesystem Sandboxes (/opt/hostpanel)" padded={false}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem" }}>Sandbox Purpose</TableCell>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem" }}>Enforced Path</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { purpose: "Node Runtime Binaries", path: "/opt/hostpanel/runtimes/node/" },
                      { purpose: "Application Data & Roots", path: "/opt/hostpanel/data/apps/" },
                      { purpose: "Configuration & Env Files", path: "/opt/hostpanel/etc/nodejs/" },
                      { purpose: "Application Logs", path: "/opt/hostpanel/logs/nodejs/" },
                      { purpose: "Daemon & App PIDs", path: "/opt/hostpanel/run/nodejs/" },
                      { purpose: "Reverse Proxy Ports", path: "31000 – 31999 (Allocated)" },
                    ].map((row) => (
                      <TableRow key={row.path}>
                        <TableCell sx={{ fontSize: "0.8125rem" }}>{row.purpose}</TableCell>
                        <TableCell sx={{ fontFamily: MONO, fontSize: "0.75rem", color: "text.secondary" }}>
                          {row.path}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Panel>

              <Panel label="System Daemon & Security Grant" padded={true}>
                <Stack spacing={2}>
                  <Readout label="Service Unit" value="hostpanel-nodejsd.service" />
                  <Readout label="Service Linux User" value="hp-nodejs (Unprivileged)" />
                  <Readout label="Service Daemon Binding" value="Isolated Loopback (127.0.0.1)" />
                  <Readout label="Privileged Root Ops Helper" value="/opt/hostpanel/packages/nodejs/ops/hp-nodejs" />
                  <Readout label="Sudoers Rule" value="hp-nodejs ALL=(root) NOPASSWD: /opt/hostpanel/packages/nodejs/ops/hp-nodejs *" />
                </Stack>
              </Panel>
            </Box>
          </Box>
        )}
      </Panel>

      {/* Environment Editor Drawer */}
      <Drawer
        anchor="right"
        open={envDrawerOpen}
        onClose={() => setEnvDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: { xs: "100%", sm: 520 }, p: 3 } } }}
      >
        <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
            Environment Variables: {envAppName}
          </Typography>
          <IconButton size="small" onClick={() => setEnvDrawerOpen(false)}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>

        <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mb: 2 }}>
          Variables are injected into the application process on startup. Format: KEY=VALUE (one per line).
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={16}
          value={envContent}
          onChange={(e) => setEnvContent(e.target.value)}
          placeholder="PORT=31000&#10;NODE_ENV=production&#10;DATABASE_URL=mongodb://localhost:27017/app"
          slotProps={{
            input: {
              sx: { fontFamily: MONO, fontSize: "0.8125rem" },
            },
          }}
          sx={{ mb: 3 }}
        />

        <Stack direction="row" spacing={1.5}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEnv}
            disabled={envSaving}
            startIcon={envSaving ? <CircularProgress size={16} /> : <CheckCircleIcon />}
          >
            {envSaving ? "Saving…" : "Save Variables"}
          </Button>
          <Button variant="outlined" onClick={() => setEnvDrawerOpen(false)}>
            Cancel
          </Button>
        </Stack>
      </Drawer>

      {/* Deploy Application Dialog */}
      <Dialog
        open={deployDialogOpen}
        onClose={() => !deployLoading && setDeployDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <AddIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
              Deploy Node.js Application
            </Typography>
          </Stack>
          <IconButton size="small" onClick={() => setDeployDialogOpen(false)} disabled={deployLoading}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </DialogTitle>
        <Box component="form" onSubmit={handleDeployAppSubmit}>
          <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
              Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port.
            </Typography>

            {installedRuntimes.length === 0 && (
              <Alert severity="warning">
                No Node.js runtimes are currently installed. Please install a version from the <strong>Node Runtimes</strong> tab first before deploying an application.
              </Alert>
            )}

            <Field label="Application Name" hint="Unique identifier, e.g. 'my-app' or 'api-service'">
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. backend-api"
                value={deployName}
                onChange={(e) => {
                  const val = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                  setDeployName(val);
                  if (!deployDir || deployDir.startsWith("/opt/hostpanel/data/apps/")) {
                    setDeployDir(`/opt/hostpanel/data/apps/${val}`);
                  }
                }}
                required
              />
            </Field>

            <Field label="Application Directory" hint="Root path containing package.json and entrypoint">
              <TextField
                fullWidth
                size="small"
                placeholder="/opt/hostpanel/data/apps/my-app"
                value={deployDir}
                onChange={(e) => setDeployDir(e.target.value)}
                required
              />
            </Field>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Field
                label="Node.js Version"
                hint={installedRuntimes.length > 0 ? "Target installed runtime" : "No runtimes installed"}
                sx={{ flex: 1 }}
              >
                <Select
                  fullWidth
                  size="small"
                  value={installedRuntimes.length > 0 ? deployVersion : ""}
                  onChange={(e) => setDeployVersion(e.target.value)}
                  disabled={installedRuntimes.length === 0}
                  displayEmpty
                >
                  {installedRuntimes.length === 0 ? (
                    <MenuItem value="" disabled>
                      <em>No runtimes installed (install via Node Runtimes tab)</em>
                    </MenuItem>
                  ) : (
                    installedRuntimes.map((rt) => {
                      const meta = RUNTIME_METADATA[rt.major];
                      const title = meta ? meta.title : `Node.js v${rt.major}`;
                      return (
                        <MenuItem key={rt.major} value={rt.major}>
                          {title}
                        </MenuItem>
                      );
                    })
                  )}
                </Select>
              </Field>

              <Field label="Start Script / Entrypoint" hint="e.g. index.js or dist/server.js" sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="index.js"
                  value={deployScript}
                  onChange={(e) => setDeployScript(e.target.value)}
                  required
                />
              </Field>
            </Stack>

            <Field label="Port Assignment (31000–31999)" hint="Set to 0 for automatic port allocation">
              <TextField
                fullWidth
                size="small"
                placeholder="0 (Auto-allocate next free port in 31000-31999)"
                value={deployPort}
                onChange={(e) => setDeployPort(e.target.value)}
              />
            </Field>

            <Field label="Environment Variables" hint="KEY=VALUE format, one per line">
              <TextField
                fullWidth
                multiline
                rows={4}
                size="small"
                value={deployEnv}
                onChange={(e) => setDeployEnv(e.target.value)}
                slotProps={{
                  input: {
                    sx: { fontFamily: MONO, fontSize: "0.8125rem" },
                  },
                }}
              />
            </Field>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setDeployDialogOpen(false)} disabled={deployLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={deployLoading || !deployName || installedRuntimes.length === 0}
              startIcon={deployLoading ? <CircularProgress size={16} /> : <CheckCircleIcon />}
            >
              {deployLoading ? "Deploying Application…" : "Deploy Application"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Edit Application Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => !editLoading && setEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <EditIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
              Edit Application: {editAppTarget?.name}
            </Typography>
          </Stack>
          <IconButton size="small" onClick={() => setEditDialogOpen(false)} disabled={editLoading}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </DialogTitle>
        <Box component="form" onSubmit={handleEditAppSubmit}>
          <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
              Modify application directory, runtime version, entrypoint script, and allocated reverse proxy port.
              {editAppTarget?.status === "running" && (
                <span style={{ color: "#38bdf8", display: "block", marginTop: 4 }}>
                  ⚡ This application is currently running. Saving changes will automatically restart the process to apply the new configuration.
                </span>
              )}
            </Typography>

            <Field label="Application Name" hint="Unique identifier cannot be modified">
              <TextField
                fullWidth
                size="small"
                value={editAppTarget?.name || ""}
                disabled
              />
            </Field>

            <Field label="Application Directory" hint="Root path containing package.json and entrypoint">
              <TextField
                fullWidth
                size="small"
                placeholder="/opt/hostpanel/data/apps/my-app"
                value={editDir}
                onChange={(e) => setEditDir(e.target.value)}
                required
              />
            </Field>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Field
                label="Node.js Version"
                hint={installedRuntimes.length > 0 ? "Target installed runtime" : "No runtimes installed"}
                sx={{ flex: 1 }}
              >
                <Select
                  fullWidth
                  size="small"
                  value={editVersion}
                  onChange={(e) => setEditVersion(e.target.value)}
                  disabled={installedRuntimes.length === 0}
                >
                  {installedRuntimes.map((rt) => {
                    const meta = RUNTIME_METADATA[rt.major];
                    const title = meta ? meta.title : `Node.js v${rt.major}`;
                    return (
                      <MenuItem key={rt.major} value={rt.major}>
                        {title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Field>

              <Field label="Start Script / Entrypoint" hint="e.g. index.js or dist/server.js" sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="index.js"
                  value={editScript}
                  onChange={(e) => setEditScript(e.target.value)}
                  required
                />
              </Field>
            </Stack>

            <Field label="Assigned Port (31000–31999)" hint="Reverse proxy port for this application">
              <TextField
                fullWidth
                size="small"
                placeholder="31000"
                value={editPort}
                onChange={(e) => setEditPort(e.target.value)}
                required
              />
            </Field>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setEditDialogOpen(false)} disabled={editLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={editLoading || !editDir}
              startIcon={editLoading ? <CircularProgress size={16} /> : <CheckCircleIcon />}
            >
              {editLoading ? "Saving Changes…" : "Save Changes"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Runtime Install Dialog */}
      <Dialog
        open={runtimeDialogOpen}
        onClose={() => !runtimeInstalling && setRuntimeDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <MemoryIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
              Install Node.js v{installVer} Runtime
            </Typography>
          </Stack>
          <IconButton size="small" onClick={() => setRuntimeDialogOpen(false)} disabled={runtimeInstalling}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mb: 2 }}>
            Downloads and provisions standalone Node.js and NPM binaries into <code>/opt/hostpanel/runtimes/node/v{installVer}/</code>.
          </Typography>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
            <Chip
              icon={<MemoryIcon sx={{ fontSize: 16 }} />}
              label={`Target Runtime: Node.js v${installVer}`}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 600 }}
            />
          </Stack>

          {runtimeCompleted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Node.js v{installVer} runtime was successfully installed and verified!
            </Alert>
          )}

          {runtimeLogs.length > 0 ? (
            <Box sx={{ mt: 1 }}>
              <LogPane lines={runtimeLogs} running={runtimeInstalling} />
            </Box>
          ) : (
            <Box sx={{ p: 2.5, bgcolor: "background.default", borderRadius: 1.5, textAlign: "center" }}>
              <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
                Ready to download and install <strong>Node.js v{installVer}</strong>. Click below to begin live execution.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          {runtimeCompleted ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setRuntimeDialogOpen(false);
                setRuntimeCompleted(false);
                setRuntimeLogs([]);
              }}
            >
              Done
            </Button>
          ) : (
            <>
              <Button onClick={() => setRuntimeDialogOpen(false)} disabled={runtimeInstalling}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleInstallRuntime(installVer)}
                disabled={runtimeInstalling}
                startIcon={runtimeInstalling ? <CircularProgress size={16} /> : <CloudUploadIcon />}
              >
                {runtimeInstalling ? "Installing…" : `Start Installation (Node ${installVer})`}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
          Delete Application?
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "0.875rem" }}>
            Are you sure you want to stop and delete application <strong>{deleteTarget}</strong>? This will remove its daemon configuration and process state.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteTarget(null)} disabled={deleteLoading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteApp}
            disabled={deleteLoading}
          >
            {deleteLoading ? "Deleting…" : "Delete Application"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Notifications */}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {toast ? (
          <Alert severity={toast.severity} onClose={() => setToast(null)}>
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}
