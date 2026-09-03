import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
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
import { ThemeProvider, alpha, createTheme, type ThemeOptions } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import RefreshIcon from "@mui/icons-material/Refresh";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Ace Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-apache_conf";
import "ace-builds/src-noconflict/mode-nginx";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";

import type {
  PackageContext,
  VHostInfo,
  VHostDetail,
  VHostMode,
  SslInfo,
  EngineCheckResult,
} from "./types";
import { CONSOLE, Field, MONO, Panel } from "./kit";

// Rewrite Presets
const REWRITE_PRESETS: Record<string, string> = {
  custom: "# Custom Rewrite Rules\n",
  wordpress: `# WordPress Rewrite Rules
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>`,
  laravel: `# Laravel Rewrite Rules
<IfModule mod_rewrite.c>
<IfModule mod_negotiation.c>
    Options -MultiViews -Indexes
</IfModule>

RewriteEngine On

RewriteCond %{HTTP:Authorization} .
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [L,R=301]

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
</IfModule>`,
  thinkphp: `# ThinkPHP Rewrite Rules
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php?s=$1 [QSA,PT,L]
</IfModule>`,
  drupal: `# Drupal Clean URLs
<IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !=/favicon.ico
  RewriteRule ^ index.php [L]
</IfModule>`,
  joomla: `# Joomla SEF URLs
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_URI} !^/index\\.php
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule .* index.php [L]
</IfModule>`,
  spa: `# Single Page Application (SPA Fallback)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`,
};

export function WebsitesPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <WebsitesBody ctx={ctx} />
    </ThemeProvider>
  );
}

function WebsitesBody({ ctx }: { ctx: PackageContext }) {
  const [vhosts, setVhosts] = useState<VHostInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [engineStatus, setEngineStatus] = useState<EngineCheckResult | null>(null);

  // Deploy Wizard Modal
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState<"select_type" | "configure">("select_type");
  const [selectedType, setSelectedType] = useState<"static" | "php" | "node" | "proxy">("static");

  // Form State for Wizard
  const [wizDomain, setWizDomain] = useState("");
  const [wizAliases, setWizAliases] = useState("");
  const [wizDocRoot, setWizDocRoot] = useState("");
  const [wizMode, setWizMode] = useState<VHostMode>("static");
  const [wizPhpVer, setWizPhpVer] = useState("8.3");
  const [wizProxyTarget, setWizProxyTarget] = useState("http://127.0.0.1:3000");
  const [wizAutoSsl, setWizAutoSsl] = useState(false);

  // Node.js specific wizard fields (as per Node.js package form reference)
  const [wizAppName, setWizAppName] = useState("");
  const [wizAppDir, setWizAppDir] = useState("/opt/hostpanel/data/apps/");
  const [wizNodeVer, setWizNodeVer] = useState("20");
  const [wizNodeScript, setWizNodeScript] = useState("index.js");
  const [wizNodePort, setWizNodePort] = useState("0");
  const [wizNodeEnv, setWizNodeEnv] = useState("NODE_ENV=production\nPORT=31000\n");

  // Site Settings Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<VHostInfo | null>(null);
  const [drawerTab, setDrawerTab] = useState(0);
  const [drawerLoading, setDrawerLoading] = useState(false);

  // Drawer Form States
  const [siteAliases, setSiteAliases] = useState("");
  const [siteDocRoot, setSiteDocRoot] = useState("");
  const [siteMode, setSiteMode] = useState<VHostMode>("hybrid_apache");
  const [sitePhpVer, setSitePhpVer] = useState("8.3");
  const [siteProxyTarget, setSiteProxyTarget] = useState("");
  const [siteHtaccess, setSiteHtaccess] = useState("");
  const [sitePresetSelect, setSitePresetSelect] = useState("custom");

  // Drawer SSL
  const [siteSslInfo, setSiteSslInfo] = useState<SslInfo | null>(null);
  const [siteSslCert, setSiteSslCert] = useState("");
  const [siteSslKey, setSiteSslKey] = useState("");
  const [siteForceHttps, setSiteForceHttps] = useState(true);

  // Drawer Security
  const [siteBlockHidden, setSiteBlockHidden] = useState(true);
  const [siteHotlink, setSiteHotlink] = useState(false);
  const [siteIpAllow, setSiteIpAllow] = useState("");
  const [siteIpDeny, setSiteIpDeny] = useState("");
  const [siteBasicAuth, setSiteBasicAuth] = useState("");

  // Drawer PHP
  const [siteUploadMax, setSiteUploadMax] = useState("64M");
  const [sitePostMax, setSitePostMax] = useState("64M");
  const [siteMemLimit, setSiteMemLimit] = useState("256M");
  const [siteExecTime, setSiteExecTime] = useState("120");

  // Drawer Raw Config & Logs
  const [siteRawDetail, setSiteRawDetail] = useState<VHostDetail | null>(null);
  const [siteLogEngine, setSiteLogEngine] = useState<"nginx" | "apache">("nginx");
  const [siteLogType, setSiteLogType] = useState<"access" | "error">("access");
  const [siteLogCount, setSiteLogCount] = useState(50);
  const [siteLogLines, setSiteLogLines] = useState<string[]>([]);
  const [siteLogPath, setSiteLogPath] = useState("");
  const [siteLogSearch, setSiteLogSearch] = useState("");
  const [siteLogAutoRefresh, setSiteLogAutoRefresh] = useState(false);
  const [siteLogsLoading, setSiteLogsLoading] = useState(false);

  // Feedback & Confirm
  const [toast, setToast] = useState<{ message: string; severity: "success" | "error" | "info" } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const showToast = (message: string, severity: "success" | "error" | "info" = "success") => {
    setToast({ message, severity });
  };

  const json = useCallback(
    async (path: string, init?: RequestInit) => {
      const res = await ctx.api(path, init);
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || body.error || `HTTP ${res.status}`);
      return body;
    },
    [ctx]
  );

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [vRes, eRes] = await Promise.allSettled([
        json("/vhosts"),
        json("/engine/check"),
      ]);
      if (vRes.status === "fulfilled" && vRes.value?.vhosts) {
        setVhosts(vRes.value.vhosts);
      }
      if (eRes.status === "fulfilled") {
        setEngineStatus(eRes.value);
      }
    } catch (err: any) {
      showToast(err.message || "Failed to load data", "error");
    } finally {
      setLoading(false);
    }
  }, [json]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Package availability
  const isPhpAvailable = Boolean(engineStatus?.php_installed);
  const isNodeAvailable = Boolean(engineStatus?.nodejs_installed);
  const isApacheAvailable = Boolean(engineStatus?.apache_installed);
  const detectedPhpVersions = engineStatus?.php_versions && engineStatus.php_versions.length > 0
    ? engineStatus.php_versions
    : ["8.4", "8.3", "8.2", "8.1", "8.0", "7.4"];

  // Handle Wizard Selection
  const handleSelectAppType = (type: "static" | "php" | "node" | "proxy") => {
    if (type === "php" && !isPhpAvailable) {
      showToast("PHP runtime package is not installed on this server.", "info");
      return;
    }
    if (type === "node" && !isNodeAvailable) {
      showToast("Node.js runtime package is not installed on this server.", "info");
      return;
    }
    setSelectedType(type);
    if (type === "php") {
      setWizMode(isApacheAvailable ? "hybrid_apache" : "php");
      setWizPhpVer(detectedPhpVersions[0] || "8.3");
    } else if (type === "node") {
      setWizMode("node");
      setWizNodePort("0");
    } else if (type === "proxy") {
      setWizMode("proxy");
    } else {
      setWizMode("static");
    }
    setWizardStep("configure");
  };

  const handleOpenWizard = () => {
    setWizDomain("");
    setWizAliases("");
    setWizDocRoot("");
    setSelectedType("static");
    setWizMode("static");
    setWizPhpVer(detectedPhpVersions[0] || "8.3");
    setWizProxyTarget("http://127.0.0.1:3000");
    setWizAppName("");
    setWizAppDir("/opt/hostpanel/data/apps/");
    setWizNodeVer("20");
    setWizNodeScript("index.js");
    setWizNodePort("0");
    setWizNodeEnv("NODE_ENV=production\nPORT=31000\n");
    setWizAutoSsl(false);
    setWizardStep("select_type");
    setWizardOpen(true);
  };

  const handleCreateWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wizDomain) return;
    setLoading(true);
    try {
      let targetProxy = wizProxyTarget.trim();
      let targetDocRoot = wizDocRoot.trim();

      if (selectedType === "node") {
        const portNum = wizNodePort && parseInt(wizNodePort, 10) > 0 ? parseInt(wizNodePort, 10) : 31000;
        targetProxy = `http://127.0.0.1:${portNum}`;
        targetDocRoot = wizAppDir.trim() || `/opt/hostpanel/data/apps/${wizAppName.trim() || wizDomain.trim()}`;
      }

      await json("/vhosts", {
        method: "POST",
        body: JSON.stringify({
          domain: wizDomain.trim().toLowerCase(),
          aliases: wizAliases.trim(),
          doc_root: targetDocRoot,
          mode: wizMode,
          php_version: wizPhpVer,
          proxy_target: targetProxy,
        }),
      });

      if (wizAutoSsl) {
        await json(`/vhosts/${encodeURIComponent(wizDomain.trim().toLowerCase())}/ssl/selfsigned`, {
          method: "POST",
        }).catch(() => {});
      }

      showToast(
        selectedType === "node"
          ? `Node.js project ${wizDomain} deployed successfully!`
          : `Website ${wizDomain} deployed successfully!`,
        "success"
      );
      setWizardOpen(false);
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to deploy website", "error");
    } finally {
      setLoading(false);
    }
  };

  // Load site logs for drawer
  const loadSiteLogs = useCallback(async () => {
    if (!selectedSite) return;
    setSiteLogsLoading(true);
    try {
      const data = await json(
        `/vhosts/${encodeURIComponent(selectedSite.domain)}/logs?lines=${siteLogCount}&log_type=${siteLogType}&engine=${siteLogEngine}`
      );
      if (data && data.lines) {
        setSiteLogLines(data.lines);
        if (data.path) setSiteLogPath(data.path);
      }
    } catch {
      setSiteLogLines([]);
    } finally {
      setSiteLogsLoading(false);
    }
  }, [json, selectedSite, siteLogCount, siteLogType, siteLogEngine]);

  useEffect(() => {
    if (drawerOpen && drawerTab === 7) {
      loadSiteLogs();
      if (siteLogAutoRefresh) {
        const t = setInterval(() => {
          loadSiteLogs();
        }, 3000);
        return () => clearInterval(t);
      }
    }
  }, [drawerOpen, drawerTab, loadSiteLogs, siteLogAutoRefresh]);

  // Drawer Management
  const handleOpenDrawer = async (vh: VHostInfo, tabIndex: number = 0) => {
    setSelectedSite(vh);
    setDrawerTab(tabIndex);
    setDrawerOpen(true);
    setDrawerLoading(true);

    setSiteAliases(vh.aliases || "");
    setSiteDocRoot(vh.doc_root || "");
    setSiteMode(vh.mode);
    setSitePhpVer(vh.php_version || "8.3");
    setSiteProxyTarget(vh.proxy_target || "http://127.0.0.1:3000");
    setSiteSslCert("");
    setSiteSslKey("");

    try {
      const [sslData, secData, phpData, htData, rawData] = await Promise.allSettled([
        json(`/vhosts/${encodeURIComponent(vh.domain)}/ssl`),
        json(`/vhosts/${encodeURIComponent(vh.domain)}/security`),
        json(`/vhosts/${encodeURIComponent(vh.domain)}/php`),
        json(`/vhosts/${encodeURIComponent(vh.domain)}/htaccess`),
        json(`/vhosts/${encodeURIComponent(vh.domain)}`),
      ]);

      if (sslData.status === "fulfilled") {
        setSiteSslInfo(sslData.value);
        setSiteForceHttps(sslData.value.force_https ?? true);
      }
      if (secData.status === "fulfilled") {
        setSiteBlockHidden(secData.value.block_hidden ?? true);
        setSiteHotlink(secData.value.hotlink_protection ?? false);
        setSiteIpAllow(secData.value.ip_allow || "");
        setSiteIpDeny(secData.value.ip_deny || "");
      }
      if (phpData.status === "fulfilled") {
        setSiteUploadMax(phpData.value.upload_max_filesize || "64M");
        setSitePostMax(phpData.value.post_max_size || "64M");
        setSiteMemLimit(phpData.value.memory_limit || "256M");
        setSiteExecTime(phpData.value.max_execution_time || "120");
      }
      if (htData.status === "fulfilled") {
        setSiteHtaccess(htData.value.content || "");
      }
      if (rawData.status === "fulfilled") {
        setSiteRawDetail(rawData.value);
      }
    } catch (err: any) {
      console.error("Failed to load site details", err);
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleSaveGeneral = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}`, {
        method: "PUT",
        body: JSON.stringify({
          aliases: siteAliases.trim(),
          doc_root: siteDocRoot.trim(),
          mode: siteMode,
          php_version: sitePhpVer,
          proxy_target: siteProxyTarget.trim(),
        }),
      });
      showToast(`Website configuration for ${selectedSite.domain} updated`, "success");
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to update configuration", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleSaveHtaccess = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}/htaccess`, {
        method: "POST",
        body: JSON.stringify({ content: siteHtaccess }),
      });
      showToast(`Rewrite rules saved & web server reloaded`, "success");
    } catch (err: any) {
      showToast(err.message || "Failed to save rewrite rules", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleSaveSsl = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}/ssl`, {
        method: "POST",
        body: JSON.stringify({
          cert: siteSslCert,
          key: siteSslKey,
          force_https: siteForceHttps,
        }),
      });
      showToast(`SSL certificate installed successfully`, "success");
      handleOpenDrawer(selectedSite, 3);
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to install SSL", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleGenerateSelfSigned = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}/ssl/selfsigned`, { method: "POST" });
      showToast(`Self-Signed certificate generated for ${selectedSite.domain}`, "success");
      handleOpenDrawer(selectedSite, 3);
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to generate self-signed certificate", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleSaveSecurity = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}/security`, {
        method: "POST",
        body: JSON.stringify({
          block_hidden: siteBlockHidden,
          hotlink: siteHotlink,
          ip_allow: siteIpAllow.trim(),
          ip_deny: siteIpDeny.trim(),
          basic_auth: siteBasicAuth.trim(),
        }),
      });
      showToast(`Site security directives updated`, "success");
    } catch (err: any) {
      showToast(err.message || "Failed to save security directives", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleSavePhp = async () => {
    if (!selectedSite) return;
    setDrawerLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(selectedSite.domain)}/php`, {
        method: "POST",
        body: JSON.stringify({
          upload_max_filesize: siteUploadMax,
          post_max_size: sitePostMax,
          memory_limit: siteMemLimit,
          max_execution_time: siteExecTime,
        }),
      });
      showToast(`PHP limits updated`, "success");
    } catch (err: any) {
      showToast(err.message || "Failed to save PHP limits", "error");
    } finally {
      setDrawerLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setLoading(true);
    try {
      await json(`/vhosts/${encodeURIComponent(deleteTarget)}`, { method: "DELETE" });
      showToast(`Website ${deleteTarget} deleted`, "success");
      if (selectedSite?.domain === deleteTarget) {
        setDrawerOpen(false);
        setSelectedSite(null);
      }
      refresh();
    } catch (err: any) {
      showToast(err.message || "Failed to delete website", "error");
    } finally {
      setLoading(false);
      setDeleteTarget(null);
    }
  };

  const filtered = vhosts.filter(
    (v) =>
      v.domain.toLowerCase().includes(search.toLowerCase()) ||
      v.mode.toLowerCase().includes(search.toLowerCase())
  );

  const filteredLogLines = useMemo(() => {
    if (!siteLogSearch.trim()) return siteLogLines;
    const q = siteLogSearch.toLowerCase();
    return siteLogLines.filter((l) => l.toLowerCase().includes(q));
  }, [siteLogLines, siteLogSearch]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      {/* Missing Web Server Banner */}
      {engineStatus && (!engineStatus.nginx_installed || !engineStatus.nginx_active) && (
        <Alert
          severity="warning"
          icon={<WarningAmberIcon />}
          action={
            <Button
              color="inherit"
              size="small"
              variant="outlined"
              onClick={() => {
                if (ctx.openUrl) ctx.openUrl("/packages");
              }}
            >
              Manage Web Server
            </Button>
          }
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
            Web Server Engine is not running or not installed
          </Typography>
          <Typography sx={{ fontSize: "0.8125rem", opacity: 0.9 }}>
            The Website Manager requires Nginx to route domains and serve live HTTP traffic. You can still configure websites, but traffic routing will activate once the Web Server package is running.
          </Typography>
        </Alert>
      )}

      {/* Main Header & Actions */}
      <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <TextField
          size="small"
          placeholder="Search websites by domain or execution mode..."
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
          sx={{ width: 340 }}
        />

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Tooltip title="Refresh Websites" arrow>
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={handleOpenWizard}
            sx={{ whiteSpace: "nowrap" }}
          >
            Deploy Website
          </Button>
        </Stack>
      </Stack>

      {/* Websites Table Panel */}
      <Panel label={`Configured Websites (${filtered.length})`} padded={false}>
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Domain & Aliases</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Execution Profile</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Document Root / Upstream</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>SSL Security</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <LanguageIcon sx={{ fontSize: 40, color: "text.disabled", mb: 1 }} />
                    <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                      No Websites Found
                    </Typography>
                    <Typography sx={{ fontSize: "0.8125rem", color: "text.disabled", mb: 2 }}>
                      Click "Deploy Website" to set up your first application.
                    </Typography>
                    <Button variant="outlined" size="small" onClick={handleOpenWizard}>
                      Deploy Website
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((vh) => (
                  <TableRow key={vh.domain} hover>
                    <TableCell>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.875rem", color: "text.primary" }}>
                          {vh.domain}
                        </Typography>
                        <Tooltip title="Open site in new tab">
                          <IconButton
                            size="small"
                            component="a"
                            href={`http://${vh.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ p: 0.25 }}
                          >
                            <OpenInNewIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                      {vh.aliases && (
                        <Typography sx={{ fontSize: "0.75rem", color: "text.disabled" }}>
                          {vh.aliases}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={
                          vh.mode === "hybrid_apache" ? "Hybrid (.htaccess)" :
                          vh.mode === "php" ? `PHP-FPM (${vh.php_version || "8.3"})` :
                          vh.mode === "node" ? "Node.js (App)" :
                          vh.mode === "proxy" ? "Reverse Proxy" :
                          "Static / SPA"
                        }
                        color={
                          vh.mode === "hybrid_apache" ? "primary" :
                          vh.mode === "php" ? "secondary" :
                          vh.mode === "node" ? "success" :
                          vh.mode === "proxy" ? "warning" :
                          "default"
                        }
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell sx={{ ...MONO, fontSize: "0.8125rem", color: "text.secondary" }}>
                      {vh.mode === "proxy" || vh.mode === "node" ? vh.proxy_target : vh.doc_root}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        startIcon={vh.ssl_enabled ? <LockIcon color="success" sx={{ fontSize: 14 }} /> : <LockOpenIcon color="disabled" sx={{ fontSize: 14 }} />}
                        onClick={() => handleOpenDrawer(vh, 3)}
                        sx={{ fontSize: "0.75rem", textTransform: "none" }}
                      >
                        {vh.ssl_enabled ? "HTTPS Active" : "Setup SSL"}
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<SettingsIcon sx={{ fontSize: 14 }} />}
                          onClick={() => handleOpenDrawer(vh, 0)}
                          sx={{ fontSize: "0.75rem" }}
                        >
                          Settings
                        </Button>
                        <Tooltip title="View Logs">
                          <IconButton size="small" onClick={() => handleOpenDrawer(vh, 7)}>
                            <ArticleIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Website">
                          <IconButton size="small" color="error" onClick={() => setDeleteTarget(vh.domain)}>
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
      </Panel>

      {/* SETUP WIZARD MODAL */}
      <Dialog
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        maxWidth={wizardStep === "select_type" ? "md" : "sm"}
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
            {wizardStep === "select_type"
              ? "Welcome to Setup Wizard — Let's set up your project"
              : selectedType === "node"
              ? "Deploy Node.js Application"
              : "Deploy Application"}
          </Typography>
          <IconButton size="small" onClick={() => setWizardOpen(false)}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {wizardStep === "select_type" ? (
            <Box sx={{ py: 1 }}>
              <Typography sx={{ fontSize: "0.875rem", color: "text.secondary", mb: 2.5 }}>
                Choose the architecture and execution profile for your website or web service:
              </Typography>

              {/* 2x2 Grid of Profile Cards */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                {/* 1. Static / SPA Site Card (ALWAYS AVAILABLE & DEFAULT) */}
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    border: "2px solid",
                    borderColor: selectedType === "static" ? "primary.main" : "divider",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": { borderColor: "primary.main", transform: "translateY(-2px)", boxShadow: 3 },
                  }}
                >
                  <CardActionArea onClick={() => handleSelectAppType("static")} sx={{ p: 2, height: "100%" }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: (t) => alpha(t.palette.info.main, 0.1), color: "info.main", display: "flex" }}>
                        <LanguageIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                            Create Static / SPA site
                          </Typography>
                          <Chip size="small" label="Default" color="primary" sx={{ height: 20, fontSize: "0.65rem", fontWeight: 700 }} />
                        </Stack>
                        <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                          Deploy static HTML, CSS, JavaScript, or Single Page Applications (React, Vue, Vite).
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>

                {/* 2. PHP Site Card (Conditional on PHP availability) */}
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    opacity: isPhpAvailable ? 1 : 0.6,
                    transition: "all 0.2s ease-in-out",
                    ...(isPhpAvailable && {
                      "&:hover": { borderColor: "primary.main", transform: "translateY(-2px)", boxShadow: 3 },
                    }),
                  }}
                >
                  <CardActionArea
                    onClick={() => handleSelectAppType("php")}
                    disabled={!isPhpAvailable}
                    sx={{ p: 2, height: "100%" }}
                  >
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: (t) => alpha(t.palette.primary.main, 0.1), color: "primary.main", display: "flex" }}>
                        <CodeIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                            Create PHP site
                          </Typography>
                          {!isPhpAvailable && (
                            <Chip size="small" label="Requires PHP package" color="warning" sx={{ height: 20, fontSize: "0.65rem" }} />
                          )}
                        </Stack>
                        <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                          Instantly deploy PHP sites with Apache/PHP-FPM hybrid execution and native .htaccess support.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>

                {/* 3. Node.js Project Card (Conditional on Node.js availability) */}
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    opacity: isNodeAvailable ? 1 : 0.6,
                    transition: "all 0.2s ease-in-out",
                    ...(isNodeAvailable && {
                      "&:hover": { borderColor: "success.main", transform: "translateY(-2px)", boxShadow: 3 },
                    }),
                  }}
                >
                  <CardActionArea
                    onClick={() => handleSelectAppType("node")}
                    disabled={!isNodeAvailable}
                    sx={{ p: 2, height: "100%" }}
                  >
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: (t) => alpha(t.palette.success.main, 0.1), color: "success.main", display: "flex" }}>
                        <CodeIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                            Create Node.js project
                          </Typography>
                          {!isNodeAvailable && (
                            <Chip size="small" label="Requires Node.js package" color="warning" sx={{ height: 20, fontSize: "0.65rem" }} />
                          )}
                        </Stack>
                        <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                          Quickly route Next.js, Express, NestJS, or Remix apps running on persistent background ports.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>

                {/* 4. Reverse Proxy Card (Universal proxy) */}
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": { borderColor: "warning.main", transform: "translateY(-2px)", boxShadow: 3 },
                  }}
                >
                  <CardActionArea onClick={() => handleSelectAppType("proxy")} sx={{ p: 2, height: "100%" }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: (t) => alpha(t.palette.warning.main, 0.1), color: "warning.main", display: "flex" }}>
                        <SwapHorizIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                          Create Reverse Proxy
                        </Typography>
                        <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mt: 0.5 }}>
                          Proxy public domain requests to your local ports, Docker containers, or upstream servers.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>
              </Box>
            </Box>
          ) : selectedType === "node" ? (
            /* NODE.JS APPLICATION DEPLOY FORM (Matching reference screenshot) */
            <Box component="form" onSubmit={handleCreateWebsite} sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
              <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mb: 0.5 }}>
                Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port.
              </Typography>

              <Field label="Domain Name" hint="e.g. app.example.com or mysite.local">
                <TextField
                  fullWidth
                  required
                  size="small"
                  placeholder="app.mysite.com"
                  value={wizDomain}
                  onChange={(e) => {
                    const d = e.target.value;
                    setWizDomain(d);
                    const slug = d.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "-");
                    if (!wizAppName || wizAppName.startsWith("app-") || wizAppName === "") {
                      setWizAppName(slug || "my-app");
                    }
                    if (!wizAppDir || wizAppDir.startsWith("/opt/hostpanel/data/apps/")) {
                      setWizAppDir(`/opt/hostpanel/data/apps/${slug || ""}`);
                    }
                  }}
                />
              </Field>

              <Field label="Domain Aliases" hint="Optional space-separated aliases (e.g. www.app.mysite.com)">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="www.app.mysite.com"
                  value={wizAliases}
                  onChange={(e) => setWizAliases(e.target.value)}
                />
              </Field>

              <Field label="Application Name" hint="Unique identifier, e.g. 'my-app' or 'api-service'">
                <TextField
                  fullWidth
                  required
                  size="small"
                  placeholder="e.g. backend-api"
                  value={wizAppName}
                  onChange={(e) => {
                    setWizAppName(e.target.value);
                    if (!wizAppDir || wizAppDir.startsWith("/opt/hostpanel/data/apps/")) {
                      setWizAppDir(`/opt/hostpanel/data/apps/${e.target.value.trim()}`);
                    }
                  }}
                />
              </Field>

              <Field label="Application Directory" hint="Root path containing package.json and entrypoint">
                <TextField
                  fullWidth
                  required
                  size="small"
                  value={wizAppDir}
                  onChange={(e) => setWizAppDir(e.target.value)}
                  slotProps={{ input: { sx: { ...MONO, fontSize: "0.8125rem" } } }}
                />
              </Field>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <Field label="Node.js Version" hint="Installed runtime">
                  <FormControl fullWidth size="small">
                    <Select value={wizNodeVer} onChange={(e) => setWizNodeVer(e.target.value)}>
                      <MenuItem value="20">Node.js 20 LTS (Iron - Recommended)</MenuItem>
                      <MenuItem value="22">Node.js 22 LTS (Jod)</MenuItem>
                      <MenuItem value="18">Node.js 18 LTS (Hydrogen)</MenuItem>
                      <MenuItem value="16">Node.js 16 LTS (Gallium)</MenuItem>
                    </Select>
                  </FormControl>
                </Field>

                <Field label="Start Script / Entrypoint" hint="e.g. index.js or dist/server.js">
                  <TextField
                    fullWidth
                    required
                    size="small"
                    placeholder="index.js"
                    value={wizNodeScript}
                    onChange={(e) => setWizNodeScript(e.target.value)}
                  />
                </Field>
              </Box>

              <Field label="Port Assignment (31000–31999)" hint="Set to 0 for automatic port allocation">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="0"
                  value={wizNodePort}
                  onChange={(e) => setWizNodePort(e.target.value)}
                />
              </Field>

              <Field label="Environment Variables" hint="KEY=VALUE format, one per line">
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  value={wizNodeEnv}
                  onChange={(e) => setWizNodeEnv(e.target.value)}
                  slotProps={{ input: { sx: { ...MONO, fontSize: "0.8125rem", bgcolor: CONSOLE.bg, color: CONSOLE.fg } } }}
                />
              </Field>

              <FormControlLabel
                control={
                  <Switch
                    checked={wizAutoSsl}
                    onChange={(e) => setWizAutoSsl(e.target.checked)}
                    color="primary"
                  />
                }
                label="Auto-generate local Self-Signed SSL Certificate"
                sx={{ mt: 0.5 }}
              />

              <Stack direction="row" spacing={1.5} sx={{ justifyContent: "flex-end", mt: 2 }}>
                <Button variant="outlined" onClick={() => setWizardStep("select_type")}>
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                  {loading ? "Deploying..." : "Deploy Application"}
                </Button>
              </Stack>
            </Box>
          ) : (
            /* STATIC, PHP, AND REVERSE PROXY FORMS */
            <Box component="form" onSubmit={handleCreateWebsite} sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
              <Field label="Domain Name" hint="e.g. example.com or app.example.com">
                <TextField
                  fullWidth
                  required
                  size="small"
                  placeholder="mysite.com"
                  value={wizDomain}
                  onChange={(e) => {
                    setWizDomain(e.target.value);
                    if (!wizDocRoot || wizDocRoot.startsWith("/opt/hostpanel/data/vhosts/")) {
                      setWizDocRoot(`/opt/hostpanel/data/vhosts/${e.target.value.trim().toLowerCase()}/public_html`);
                    }
                  }}
                />
              </Field>

              <Field label="Domain Aliases" hint="Optional space-separated aliases (e.g. www.mysite.com)">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="www.mysite.com"
                  value={wizAliases}
                  onChange={(e) => setWizAliases(e.target.value)}
                />
              </Field>

              {selectedType === "php" && (
                <>
                  {isApacheAvailable && (
                    <Field label="Execution Architecture" hint="Web server routing backend">
                      <FormControl fullWidth size="small">
                        <Select
                          value={wizMode}
                          onChange={(e) => setWizMode(e.target.value as VHostMode)}
                        >
                          <MenuItem value="hybrid_apache">Hybrid Apache (Nginx reverse proxy + Apache .htaccess & mod_rewrite)</MenuItem>
                          <MenuItem value="php">Pure Nginx FastCGI (Direct proxy to PHP-FPM socket)</MenuItem>
                        </Select>
                      </FormControl>
                    </Field>
                  )}

                  <Field label="PHP Version" hint="Target PHP-FPM pool">
                    <FormControl fullWidth size="small">
                      <Select value={wizPhpVer} onChange={(e) => setWizPhpVer(e.target.value)}>
                        {detectedPhpVersions.map((v) => (
                          <MenuItem key={v} value={v}>
                            PHP {v} {v === "8.3" ? "(Default)" : ""}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Field>
                </>
              )}

              {selectedType === "proxy" && (
                <Field label="Upstream Proxy URL" hint="Local application port or container address">
                  <TextField
                    fullWidth
                    required
                    size="small"
                    placeholder="http://127.0.0.1:3000"
                    value={wizProxyTarget}
                    onChange={(e) => setWizProxyTarget(e.target.value)}
                  />
                </Field>
              )}

              {selectedType !== "proxy" && (
                <Field label="Document Root" hint="Absolute directory path for website files">
                  <TextField
                    fullWidth
                    size="small"
                    value={wizDocRoot}
                    onChange={(e) => setWizDocRoot(e.target.value)}
                    slotProps={{ input: { sx: { ...MONO, fontSize: "0.8125rem" } } }}
                  />
                </Field>
              )}

              <FormControlLabel
                control={
                  <Switch
                    checked={wizAutoSsl}
                    onChange={(e) => setWizAutoSsl(e.target.checked)}
                    color="primary"
                  />
                }
                label="Auto-generate local Self-Signed SSL Certificate"
                sx={{ mt: 1 }}
              />

              <Stack direction="row" spacing={1.5} sx={{ justifyContent: "flex-end", mt: 2 }}>
                <Button variant="outlined" onClick={() => setWizardStep("select_type")}>
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                  {loading ? "Deploying..." : "Deploy Website"}
                </Button>
              </Stack>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* SITE SETTINGS SLIDE-OVER DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: { xs: "100%", md: 800 }, p: 0 } }}
      >
        {selectedSite && (
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            {/* Drawer Header */}
            <Stack
              direction="row"
              sx={{
                p: 2,
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  Site Settings: {selectedSite.domain}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "text.disabled" }}>
                  Profile: {selectedSite.mode} | Ports: 80 / 443
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setDrawerOpen(false)}>
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>

            {/* Drawer Body: Vertical Tabs Layout */}
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
              <Tabs
                orientation="vertical"
                value={drawerTab}
                onChange={(_, val) => setDrawerTab(val)}
                sx={{
                  borderRight: "1px solid",
                  borderColor: "divider",
                  minWidth: 175,
                  "& .MuiTab-root": { alignItems: "flex-start", textAlign: "left", fontSize: "0.8125rem", py: 1.5 },
                }}
              >
                <Tab label="📌 Domain Bindings" />
                <Tab label="📁 Site Directory" />
                <Tab label="📝 URL Rewrite (.htaccess)" />
                <Tab label="🔒 SSL / HTTPS" />
                <Tab label="🐘 PHP Limits" />
                <Tab label="🔄 Reverse Proxy" />
                <Tab label="🛡️ Site Security" />
                <Tab label="📋 Live Logs" />
                <Tab label="🔍 Config Inspector" />
              </Tabs>

              {/* Tab Content Panes */}
              <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
                {drawerLoading && <CircularProgress size={24} sx={{ mb: 2 }} />}

                {/* TAB 0: Domain Bindings */}
                {drawerTab === 0 && (
                  <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Domain Bindings</Typography>
                    <Field label="Primary Domain" hint="Primary hostname">
                      <TextField fullWidth size="small" disabled value={selectedSite.domain} />
                    </Field>
                    <Field label="Domain Aliases" hint="Alternative domains (space-separated)">
                      <TextField
                        fullWidth
                        size="small"
                        value={siteAliases}
                        onChange={(e) => setSiteAliases(e.target.value)}
                      />
                    </Field>
                    <Button variant="contained" onClick={handleSaveGeneral} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Save Domain Changes
                    </Button>
                  </Stack>
                )}

                {/* TAB 1: Site Directory */}
                {drawerTab === 1 && (
                  <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Document Root Directory</Typography>
                    <Field label="Document Root" hint="Filesystem path for site assets">
                      <TextField
                        fullWidth
                        size="small"
                        value={siteDocRoot}
                        onChange={(e) => setSiteDocRoot(e.target.value)}
                        slotProps={{ input: { sx: { ...MONO, fontSize: "0.8125rem" } } }}
                      />
                    </Field>
                    <Button variant="contained" onClick={handleSaveGeneral} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Save Directory
                    </Button>
                  </Stack>
                )}

                {/* TAB 2: URL Rewrite (.htaccess) */}
                {drawerTab === 2 && (
                  <Stack spacing={2}>
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Rewrite Rules (.htaccess)</Typography>
                      <FormControl size="small" sx={{ minWidth: 150 }}>
                        <Select
                          value={sitePresetSelect}
                          onChange={(e) => {
                            setSitePresetSelect(e.target.value);
                            if (REWRITE_PRESETS[e.target.value]) {
                              setSiteHtaccess(REWRITE_PRESETS[e.target.value]);
                            }
                          }}
                        >
                          <MenuItem value="custom">Custom Template</MenuItem>
                          <MenuItem value="wordpress">WordPress</MenuItem>
                          <MenuItem value="laravel">Laravel</MenuItem>
                          <MenuItem value="thinkphp">ThinkPHP</MenuItem>
                          <MenuItem value="drupal">Drupal</MenuItem>
                          <MenuItem value="joomla">Joomla</MenuItem>
                          <MenuItem value="spa">SPA Fallback</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>

                    <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflow: "hidden" }}>
                      <AceEditor
                        mode="apache_conf"
                        theme="one_dark"
                        name="site-htaccess-ace-editor"
                        value={siteHtaccess}
                        onChange={(val) => setSiteHtaccess(val)}
                        width="100%"
                        height="320px"
                        fontSize={13}
                        showPrintMargin={false}
                        showGutter={true}
                        highlightActiveLine={true}
                        setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          showLineNumbers: true,
                          tabSize: 4,
                          useWorker: false,
                        }}
                      />
                    </Box>

                    <Button variant="contained" color="primary" onClick={handleSaveHtaccess} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Save Rewrite Rules & Reload
                    </Button>
                  </Stack>
                )}

                {/* TAB 3: SSL / HTTPS */}
                {drawerTab === 3 && (
                  <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>SSL / TLS Certificate Binding</Typography>
                    {siteSslInfo?.ssl_enabled ? (
                      <Alert severity="success" icon={<CheckCircleIcon />}>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>Active SSL Certificate Bound</Typography>
                        <Typography sx={{ fontSize: "0.75rem" }}>Issuer: {siteSslInfo.issuer} | Expiry: {siteSslInfo.expiry}</Typography>
                      </Alert>
                    ) : (
                      <Alert severity="info">
                        No SSL certificate bound to this website. You can generate a self-signed dev certificate or install custom keys below.
                      </Alert>
                    )}

                    <Button variant="outlined" onClick={handleGenerateSelfSigned} disabled={drawerLoading}>
                      Generate Local Self-Signed Certificate
                    </Button>

                    <Field label="Custom Certificate (CRT / PEM)" hint="Paste certificate and CA chain">
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="-----BEGIN CERTIFICATE-----"
                        value={siteSslCert}
                        onChange={(e) => setSiteSslCert(e.target.value)}
                        slotProps={{ input: { sx: { ...MONO, fontSize: "0.75rem" } } }}
                      />
                    </Field>

                    <Field label="Private Key (KEY)" hint="Paste unencrypted private key">
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="-----BEGIN PRIVATE KEY-----"
                        value={siteSslKey}
                        onChange={(e) => setSiteSslKey(e.target.value)}
                        slotProps={{ input: { sx: { ...MONO, fontSize: "0.75rem" } } }}
                      />
                    </Field>

                    <FormControlLabel
                      control={<Switch checked={siteForceHttps} onChange={(e) => setSiteForceHttps(e.target.checked)} />}
                      label="Force HTTPS Redirect (301 Permanent)"
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSaveSsl}
                      disabled={drawerLoading || !siteSslCert || !siteSslKey}
                      sx={{ alignSelf: "flex-end" }}
                    >
                      Install SSL Certificate
                    </Button>
                  </Stack>
                )}

                {/* TAB 4: PHP Limits */}
                {drawerTab === 4 && (
                  <Stack spacing={2}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>PHP Configuration & Limits</Typography>
                    <Field label="PHP Version" hint="PHP-FPM Pool">
                      <FormControl fullWidth size="small">
                        <Select value={sitePhpVer} onChange={(e) => setSitePhpVer(e.target.value)}>
                          {detectedPhpVersions.map((v) => (
                            <MenuItem key={v} value={v}>PHP {v}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Field>
                    <Field label="Upload Max Filesize" hint="e.g. 64M, 128M">
                      <TextField fullWidth size="small" value={siteUploadMax} onChange={(e) => setSiteUploadMax(e.target.value)} />
                    </Field>
                    <Field label="Post Max Size" hint="e.g. 64M, 128M">
                      <TextField fullWidth size="small" value={sitePostMax} onChange={(e) => setSitePostMax(e.target.value)} />
                    </Field>
                    <Field label="Memory Limit" hint="e.g. 256M, 512M">
                      <TextField fullWidth size="small" value={siteMemLimit} onChange={(e) => setSiteMemLimit(e.target.value)} />
                    </Field>
                    <Button variant="contained" onClick={handleSavePhp} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Save PHP Limits
                    </Button>
                  </Stack>
                )}

                {/* TAB 5: Reverse Proxy */}
                {drawerTab === 5 && (
                  <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Reverse Proxy & Upstream Mapping</Typography>
                    <Alert severity="info">
                      Application backends (Node.js, Python, Go, Docker) run on dedicated loopback ports. The web server proxies public domain requests to your application port.
                    </Alert>
                    <Field label="Upstream Target URL" hint="Local application port (e.g. http://127.0.0.1:3000)">
                      <TextField
                        fullWidth
                        size="small"
                        value={siteProxyTarget}
                        onChange={(e) => setSiteProxyTarget(e.target.value)}
                      />
                    </Field>
                    <Button variant="contained" onClick={handleSaveGeneral} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Save Upstream Proxy
                    </Button>
                  </Stack>
                )}

                {/* TAB 6: Site Security */}
                {drawerTab === 6 && (
                  <Stack spacing={2}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Site Security & Directives</Typography>
                    <FormControlLabel
                      control={<Switch checked={siteBlockHidden} onChange={(e) => setSiteBlockHidden(e.target.checked)} />}
                      label="Block Sensitive & Hidden Files (.git, .env, .htaccess)"
                    />
                    <FormControlLabel
                      control={<Switch checked={siteHotlink} onChange={(e) => setSiteHotlink(e.target.checked)} />}
                      label="Hotlink Protection (Block external media bandwidth theft)"
                    />
                    <Field label="IP Allow List" hint="Allowed IPs or CIDRs">
                      <TextField fullWidth size="small" value={siteIpAllow} onChange={(e) => setSiteIpAllow(e.target.value)} />
                    </Field>
                    <Field label="IP Deny List" hint="Blocked IPs or CIDRs">
                      <TextField fullWidth size="small" value={siteIpDeny} onChange={(e) => setSiteIpDeny(e.target.value)} />
                    </Field>
                    <Button variant="contained" onClick={handleSaveSecurity} disabled={drawerLoading} sx={{ alignSelf: "flex-end" }}>
                      Apply Security Directives
                    </Button>
                  </Stack>
                )}

                {/* TAB 7: Live Logs */}
                {drawerTab === 7 && (
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
                      <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
                        <Select
                          size="small"
                          value={siteLogEngine}
                          onChange={(e) => setSiteLogEngine(e.target.value as "nginx" | "apache")}
                          sx={{ minWidth: 130 }}
                        >
                          <MenuItem value="nginx">Nginx Frontend</MenuItem>
                          <MenuItem value="apache">Apache Backend</MenuItem>
                        </Select>

                        <Select
                          size="small"
                          value={siteLogType}
                          onChange={(e) => setSiteLogType(e.target.value as "access" | "error")}
                          sx={{ minWidth: 120 }}
                        >
                          <MenuItem value="access">Access Log</MenuItem>
                          <MenuItem value="error">Error Log</MenuItem>
                        </Select>

                        <Select
                          size="small"
                          value={siteLogCount}
                          onChange={(e) => setSiteLogCount(Number(e.target.value))}
                          sx={{ minWidth: 90 }}
                        >
                          <MenuItem value={50}>50 lines</MenuItem>
                          <MenuItem value={100}>100 lines</MenuItem>
                          <MenuItem value={200}>200 lines</MenuItem>
                          <MenuItem value={500}>500 lines</MenuItem>
                        </Select>

                        <TextField
                          size="small"
                          placeholder="Filter logs..."
                          value={siteLogSearch}
                          onChange={(e) => setSiteLogSearch(e.target.value)}
                          slotProps={{
                            input: {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                                </InputAdornment>
                              ),
                            },
                          }}
                          sx={{ width: 140 }}
                        />
                      </Stack>

                      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                        <FormControlLabel
                          control={
                            <Switch
                              size="small"
                              checked={siteLogAutoRefresh}
                              onChange={(e) => setSiteLogAutoRefresh(e.target.checked)}
                            />
                          }
                          label={<Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>Auto (3s)</Typography>}
                        />
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<RefreshIcon />}
                          onClick={loadSiteLogs}
                          disabled={siteLogsLoading}
                        >
                          {siteLogsLoading ? "Refreshing..." : "Refresh"}
                        </Button>
                      </Stack>
                    </Stack>

                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", px: 0.5 }}>
                      <Typography variant="caption" sx={{ fontFamily: MONO, color: "text.secondary" }}>
                        {siteLogPath || `/opt/hostpanel/logs/${siteLogEngine}/${selectedSite.domain}_${siteLogType}.log`}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        Showing <strong>{filteredLogLines.length}</strong> of {siteLogLines.length} lines
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
                        maxHeight: 400,
                        overflowY: "auto",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {siteLogsLoading ? (
                        <Box sx={{ display: "grid", placeItems: "center", py: 4 }}>
                          <CircularProgress size={20} />
                        </Box>
                      ) : filteredLogLines.length === 0 ? (
                        <Typography variant="body2" sx={{ color: CONSOLE.dim, fontStyle: "italic", textAlign: "center", py: 3 }}>
                          {siteLogSearch ? `No log entries matching "${siteLogSearch}"` : `No recent log entries in ${siteLogPath || "log file"}`}
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

                {/* TAB 8: Config Inspector */}
                {drawerTab === 8 && (
                  <Stack spacing={2}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>Generated Server Configurations</Typography>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "primary.main" }}>
                      Nginx Frontend VHost (/opt/hostpanel/etc/nginx/vhosts/{selectedSite.domain}.conf):
                    </Typography>
                    <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflow: "hidden" }}>
                      <AceEditor
                        mode="nginx"
                        theme="one_dark"
                        name="site-raw-nginx-config"
                        value={siteRawDetail?.nginx_config || "# No Nginx config loaded"}
                        readOnly={true}
                        width="100%"
                        height="260px"
                        fontSize={12}
                        showPrintMargin={false}
                        showGutter={true}
                        setOptions={{ showLineNumbers: true, tabSize: 4, useWorker: false }}
                      />
                    </Box>

                    {siteRawDetail?.apache_config && (
                      <>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "secondary.main", mt: 1 }}>
                          Apache Backend VHost (/opt/hostpanel/etc/apache/sites-available/{selectedSite.domain}.conf):
                        </Typography>
                        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: "8px", overflow: "hidden" }}>
                          <AceEditor
                            mode="apache_conf"
                            theme="one_dark"
                            name="site-raw-apache-config"
                            value={siteRawDetail.apache_config}
                            readOnly={true}
                            width="100%"
                            height="240px"
                            fontSize={12}
                            showPrintMargin={false}
                            showGutter={true}
                            setOptions={{ showLineNumbers: true, tabSize: 4, useWorker: false }}
                          />
                        </Box>
                      </>
                    )}
                  </Stack>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Drawer>

      {/* DELETE CONFIRMATION DIALOG */}
      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Delete Website?</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
            Are you sure you want to delete website <strong>{deleteTarget}</strong>? Domain routing and SSL bindings will be removed. Your files in Document Root will remain preserved.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
            Delete Website
          </Button>
        </DialogActions>
      </Dialog>

      {/* SNACKBAR FEEDBACK */}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {toast ? (
          <Alert severity={toast.severity} onClose={() => setToast(null)} sx={{ width: "100%" }}>
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}

