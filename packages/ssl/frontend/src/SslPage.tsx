import { useCallback, useEffect, useMemo, useState } from "react";
import {
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
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HttpsIcon from "@mui/icons-material/Https";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import type { CertificateItem, EngineStatus, PackageContext } from "./types";
import { CONSOLE, MONO, MicroLabel, Panel, Readout, Field, LogPane, type Line, appendEvent } from "./kit";

export function SslPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <SslPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function SslPageBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState<"certs" | "issue" | "custom" | "logs" | "service">("certs");
  const [engineStatus, setEngineStatus] = useState<EngineStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const [certs, setCerts] = useState<CertificateItem[]>([]);
  const [certSearch, setCertSearch] = useState("");
  const [issuerFilter, setIssuerFilter] = useState<"all" | "letsencrypt" | "custom" | "expiring">("all");

  // Issue Let's Encrypt State
  const [issueDomain, setIssueDomain] = useState("");
  const [issueEmail, setIssueEmail] = useState("");
  const [challengeType, setChallengeType] = useState<"http-01" | "dns-01">("http-01");
  const [staging, setStaging] = useState(false);
  const [agreeTos, setAgreeTos] = useState(true);
  const [issuing, setIssuing] = useState(false);
  const [issueLogs, setIssueLogs] = useState<Line[]>([]);

  // Upload Custom State
  const [customDomain, setCustomDomain] = useState("");
  const [customCertPem, setCustomCertPem] = useState("");
  const [customKeyPem, setCustomKeyPem] = useState("");
  const [customCaBundle, setCustomCaBundle] = useState("");
  const [customUploading, setCustomUploading] = useState(false);

  // View Certificate Modal State
  const [viewCertModalOpen, setViewCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [certLoading, setCertLoading] = useState(false);

  // Nginx SSL Directives Snippet Modal State
  const [snippetModalOpen, setSnippetModalOpen] = useState(false);
  const [snippetDomain, setSnippetDomain] = useState<string>("");
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [lastIssuedDomain, setLastIssuedDomain] = useState<string | null>(null);

  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingDomain, setDeletingDomain] = useState<string | null>(null);

  // Logs
  const [logType, setLogType] = useState<"acme" | "renewal" | "ssl">("acme");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [logCount, setLogCount] = useState(50);
  const [logsLoading, setLogsLoading] = useState(false);

  const [toast, setToast] = useState<string | null>(null);

  // API Wrapper
  const apiFetch = useCallback(
    async (path: string, options: RequestInit = {}) => {
      const res = await ctx.api(path, options);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        throw new Error(err.detail || err.message || `Request failed with status ${res.status}`);
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

  const loadCerts = useCallback(async () => {
    try {
      const data = await apiFetch("/certs");
      if (data && data.ok && Array.isArray(data.certs)) {
        setCerts(data.certs);
      }
    } catch {
      setCerts([]);
    }
  }, [apiFetch]);

  const loadLogs = useCallback(async () => {
    setLogsLoading(true);
    try {
      const data = await apiFetch(`/engine/logs?lines=${logCount}&log_type=${logType}`);
      if (data && data.ok && Array.isArray(data.lines)) {
        setLogLines(data.lines);
      }
    } catch (e: any) {
      setToast(e.message);
    } finally {
      setLogsLoading(false);
    }
  }, [apiFetch, logCount, logType]);

  const refreshAll = useCallback(async () => {
    await Promise.all([loadStatus(), loadCerts()]);
  }, [loadStatus, loadCerts]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  useEffect(() => {
    if (tab === "logs") {
      loadLogs();
    }
  }, [tab, loadLogs]);

  // Actions
  const handleRenewAll = async () => {
    setActionLoading(true);
    try {
      await apiFetch("/certs/renew", { method: "POST" });
      setToast("ACME auto-renewal check completed for all certificates.");
      await refreshAll();
    } catch (e: any) {
      setToast(`Renew all failed: ${e.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  const handleRenewSingle = async (domain: string) => {
    setActionLoading(true);
    try {
      await apiFetch(`/certs/${encodeURIComponent(domain)}/renew`, { method: "POST" });
      setToast(`Certificate for ${domain} renewed successfully.`);
      await loadCerts();
    } catch (e: any) {
      setToast(`Renew failed: ${e.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  const handleOpenNginxConfig = (domain: string) => {
    setSnippetDomain(domain);
    setCopiedSnippet(false);
    setSnippetModalOpen(true);
  };

  const getNginxSnippet = (domain: string) => {
    return `    #ssl start
    ssl_certificate     /opt/hostpanel/etc/ssl/certs/${domain}.crt;
    ssl_certificate_key /opt/hostpanel/etc/ssl/private/${domain}.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    add_header Strict-Transport-Security "max-age=31536000" always;
    #ssl end`;
  };

  const handleCopySnippet = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopiedSnippet(true);
      setToast("Nginx SSL directives copied to clipboard!");
      setTimeout(() => setCopiedSnippet(false), 2500);
    } catch {
      setToast("Failed to copy to clipboard.");
    }
  };

  const handleOpenViewCert = async (cert: CertificateItem) => {
    setSelectedCert(cert);
    setViewCertModalOpen(true);
    setCertLoading(true);
    try {
      const data = await apiFetch(`/certs/${encodeURIComponent(cert.domain)}`);
      if (data && data.ok) {
        setSelectedCert((prev) => (prev ? { ...prev, ...data } : data));
      }
    } catch {
      // Keep basic cert info
    } finally {
      setCertLoading(false);
    }
  };

  const handleDeleteCert = async () => {
    if (!deletingDomain) return;
    try {
      await apiFetch(`/certs/${encodeURIComponent(deletingDomain)}`, { method: "DELETE" });
      setToast(`Certificate for ${deletingDomain} deleted.`);
      setDeleteModalOpen(false);
      setDeletingDomain(null);
      await refreshAll();
    } catch (e: any) {
      setToast(`Delete failed: ${e.message}`);
    }
  };

  const handleIssueLetsEncrypt = async () => {
    if (!issueDomain.trim()) {
      setToast("Domain name is required.");
      return;
    }
    if (!agreeTos) {
      setToast("You must agree to Let's Encrypt Subscriber Agreement.");
      return;
    }

    setIssuing(true);
    setIssueLogs([]);
    setLastIssuedDomain(null);

    const payload = {
      domain: issueDomain.trim(),
      email: issueEmail.trim() || undefined,
      challenge_type: challengeType,
      staging,
      agree_tos: agreeTos,
    };

    let succeeded = false;

    try {
      if (ctx.run) {
        for await (const event of ctx.run("/certs/issue", {
          method: "POST",
          body: payload,
        })) {
          setIssueLogs((prev) => appendEvent(prev, event));
          if (event.kind === "result") {
            if (event.ok || event.exit_code === 0) {
              succeeded = true;
            }
          }
        }
      } else {
        const res = await apiFetch("/certs/issue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res && (res.ok || res.issued)) {
          succeeded = true;
          setIssueLogs([
            { stream: "stdout", text: `✓ Certificate issued for ${issueDomain}` },
            { stream: "meta", text: "✓ completed" },
          ]);
        }
      }

      if (succeeded) {
        setToast(`Let's Encrypt certificate issued for ${issueDomain}!`);
        setLastIssuedDomain(issueDomain.trim());
        await refreshAll();
      } else {
        setLastIssuedDomain(null);
        setToast(`Let's Encrypt issuance failed for ${issueDomain}.`);
      }
    } catch (e: any) {
      setLastIssuedDomain(null);
      setIssueLogs((prev) => [
        ...prev,
        { stream: "stderr", text: `Error: ${e.message}` },
      ]);
      setToast(`Issuance failed: ${e.message}`);
    } finally {
      setIssuing(false);
    }
  };

  const handleUploadCustom = async () => {
    if (!customDomain.trim() || !customCertPem.trim() || !customKeyPem.trim()) {
      setToast("Domain, Certificate PEM, and Private Key PEM are required.");
      return;
    }

    setCustomUploading(true);
    try {
      await apiFetch("/certs/custom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: customDomain.trim(),
          cert_pem: customCertPem,
          key_pem: customKeyPem,
          ca_bundle: customCaBundle.trim() || undefined,
        }),
      });
      setToast(`Custom SSL certificate for ${customDomain} installed successfully!`);
      setCustomDomain("");
      setCustomCertPem("");
      setCustomKeyPem("");
      setCustomCaBundle("");
      setTab("certs");
      await refreshAll();
    } catch (e: any) {
      setToast(`Upload failed: ${e.message}`);
    } finally {
      setCustomUploading(false);
    }
  };

  const isRunning = Boolean(engineStatus?.active ?? true);

  const filteredCerts = useMemo(() => {
    return certs.filter((c) => {
      const matchesSearch =
        !certSearch ||
        c.domain.toLowerCase().includes(certSearch.toLowerCase()) ||
        c.issuer.toLowerCase().includes(certSearch.toLowerCase());

      if (!matchesSearch) return false;

      if (issuerFilter === "letsencrypt") return c.issuer.toLowerCase().includes("encrypt");
      if (issuerFilter === "custom") return !c.issuer.toLowerCase().includes("encrypt");
      if (issuerFilter === "expiring") return c.days_left <= 30;
      return true;
    });
  }, [certs, certSearch, issuerFilter]);

  const expiringSoonCount = useMemo(
    () => certs.filter((c) => c.days_left <= 30).length,
    [certs]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Top Action Bar */}
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
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            hostpanel-ssld.service • User hp-ssl • Isolation /opt/hostpanel/etc/ssl
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
          {/* Refresh */}
          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={refreshAll}
                disabled={statusLoading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {statusLoading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Renew All */}
          <Tooltip title="Renew All Expiring Certificates" arrow>
            <span>
              <IconButton
                size="small"
                color="warning"
                onClick={handleRenewAll}
                disabled={actionLoading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <AutorenewIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </span>
          </Tooltip>

          {/* Upload Custom */}
          <Tooltip title="Upload Custom Certificate" arrow>
            <span>
              <IconButton
                size="small"
                onClick={() => setTab("custom")}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <FileUploadIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </span>
          </Tooltip>

          {/* Primary Action Button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SecurityIcon />}
            onClick={() => setTab("issue")}
            sx={{ ml: 1, whiteSpace: "nowrap" }}
          >
            Issue Let's Encrypt
          </Button>
        </Stack>
      </Stack>

      {/* 4 Overview Stat Cards */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>SSL DAEMON STATUS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {isRunning ? "Online" : "Offline"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {engineStatus?.version || "OpenSSL Core"}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>ACTIVE CERTIFICATES</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {certs.length} Installed
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {certs.filter((c) => c.issuer.includes("Encrypt")).length} Let's Encrypt /{" "}
              {certs.filter((c) => !c.issuer.includes("Encrypt")).length} Custom
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>EXPIRING SOON (&lt; 30 DAYS)</MicroLabel>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {expiringSoonCount}
              </Typography>
              {expiringSoonCount > 0 && (
                <Chip
                  size="small"
                  label="Attention Needed"
                  color="warning"
                  icon={<WarningAmberIcon sx={{ fontSize: "14px !important" }} />}
                  sx={{ height: 20, fontSize: "0.6875rem", fontWeight: 700 }}
                />
              )}
            </Stack>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {expiringSoonCount === 0 ? "All certificates healthy" : "Certificates need renewal"}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>ACME AUTO-RENEWAL</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, color: "success.main" }}>
              Active
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Automated Daily Cron Checks
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Bordered Paper with Tabs */}
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
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem" },
          }}
        >
          <Tab label={`Certificates (${certs.length})`} value="certs" />
          <Tab label="Issue Let's Encrypt" value="issue" />
          <Tab label="Upload Custom Cert" value="custom" />
          <Tab label="Live Logs" value="logs" />
          <Tab label="Service & Isolation" value="service" />
        </Tabs>

        <Box sx={{ p: 2.25 }}>
          {/* TAB 1: CERTIFICATES TABLE */}
          {tab === "certs" && (
            <Stack spacing={2}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}
              >
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ flex: 1, maxWidth: { sm: 480 } }}>
                  <TextField
                    size="small"
                    placeholder="Search by domain or issuer..."
                    value={certSearch}
                    onChange={(e) => setCertSearch(e.target.value)}
                    fullWidth
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <Select
                    size="small"
                    value={issuerFilter}
                    onChange={(e) => setIssuerFilter(e.target.value as any)}
                    sx={{ minWidth: 140 }}
                  >
                    <MenuItem value="all">All Issuers</MenuItem>
                    <MenuItem value="letsencrypt">Let's Encrypt</MenuItem>
                    <MenuItem value="custom">Custom Certs</MenuItem>
                    <MenuItem value="expiring">Expiring Soon</MenuItem>
                  </Select>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => setTab("issue")}
                  >
                    Issue New Cert
                  </Button>
                </Stack>
              </Stack>

              <TableContainer component={Paper} variant="outlined" sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <Table size="small" sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Domain</TableCell>
                      <TableCell>Issuer</TableCell>
                      <TableCell>Valid Until</TableCell>
                      <TableCell>Auto-Renew</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredCerts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 5, color: "text.secondary" }}>
                          <LockOpenIcon sx={{ fontSize: 32, mb: 1, color: "text.disabled", display: "block", mx: "auto" }} />
                          No SSL certificates found. Issue a free Let's Encrypt cert or upload a custom certificate.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredCerts.map((c) => {
                        const isLetsEncrypt = c.issuer.toLowerCase().includes("encrypt");
                        const isExpiringSoon = c.days_left <= 30 && c.days_left > 0;
                        const isExpired = c.days_left <= 0;

                        return (
                          <TableRow key={c.domain} hover>
                            <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                                <LockIcon sx={{ fontSize: 16, color: "success.main" }} />
                                <span>{c.domain}</span>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Chip
                                size="small"
                                label={c.issuer}
                                color={isLetsEncrypt ? "primary" : "default"}
                                icon={isLetsEncrypt ? <VerifiedUserIcon sx={{ fontSize: "12px !important" }} /> : undefined}
                                sx={{ height: 22, fontSize: "0.6875rem" }}
                              />
                            </TableCell>
                            <TableCell>
                              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                                <Typography variant="caption" sx={{ fontFamily: MONO, color: "text.secondary" }}>
                                  {c.valid_to || "90 days"}
                                </Typography>
                                <Chip
                                  size="small"
                                  label={`${c.days_left}d left`}
                                  color={isExpired ? "error" : isExpiringSoon ? "warning" : "success"}
                                  sx={{ height: 18, fontSize: "0.625rem", fontWeight: 700 }}
                                />
                              </Stack>
                            </TableCell>
                            <TableCell>
                              <Switch
                                size="small"
                                checked={c.auto_renew}
                                disabled={!isLetsEncrypt}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                                <Tooltip title="Nginx SSL Directives">
                                  <IconButton size="small" color="primary" onClick={() => handleOpenNginxConfig(c.domain)}>
                                    <CodeIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="View Certificate Details">
                                  <IconButton size="small" onClick={() => handleOpenViewCert(c)}>
                                    <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                                {isLetsEncrypt && (
                                  <Tooltip title="Renew Now">
                                    <IconButton size="small" color="primary" onClick={() => handleRenewSingle(c.domain)}>
                                      <AutorenewIcon sx={{ fontSize: 16 }} />
                                    </IconButton>
                                  </Tooltip>
                                )}
                                <Tooltip title="Delete Certificate">
                                  <IconButton
                                    size="small"
                                    color="error"
                                    onClick={() => {
                                      setDeletingDomain(c.domain);
                                      setDeleteModalOpen(true);
                                    }}
                                  >
                                    <DeleteIcon sx={{ fontSize: 16 }} />
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
            </Stack>
          )}

          {/* TAB 2: ISSUE LET'S ENCRYPT */}
          {tab === "issue" && (
            <Stack spacing={2.5} sx={{ maxWidth: 720 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Issue Let's Encrypt Certificate
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Automated ACME issuance. Certificates are valid for 90 days and auto-renewed automatically.
                </Typography>
              </Box>

              <Field label="Domain Name" hint="e.g. example.com or api.example.com">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="example.com"
                  value={issueDomain}
                  onChange={(e) => setIssueDomain(e.target.value)}
                  disabled={issuing}
                  slotProps={{ htmlInput: { style: { fontFamily: MONO, fontSize: "0.875rem" } } }}
                />
              </Field>

              <Field label="Notification Email" hint="For certificate expiration notices">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="admin@example.com"
                  value={issueEmail}
                  onChange={(e) => setIssueEmail(e.target.value)}
                  disabled={issuing}
                />
              </Field>

              <Field label="ACME Challenge Type">
                <Select
                  size="small"
                  value={challengeType}
                  onChange={(e) => setChallengeType(e.target.value as any)}
                  fullWidth
                  disabled={issuing}
                >
                  <MenuItem value="http-01">HTTP-01 Challenge (Automatic Webroot Validation - Recommended)</MenuItem>
                  <MenuItem value="dns-01" disabled>DNS-01 Challenge (DNS TXT Validation - Coming Soon)</MenuItem>
                </Select>
              </Field>

              <Stack spacing={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={staging}
                      onChange={(e) => setStaging(e.target.checked)}
                      disabled={issuing}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      Use Let's Encrypt Staging Environment (for testing / dry-run to avoid rate limits)
                    </Typography>
                  }
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={agreeTos}
                      onChange={(e) => setAgreeTos(e.target.checked)}
                      disabled={issuing}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the Let's Encrypt Subscriber Agreement Terms of Service
                    </Typography>
                  }
                />
              </Stack>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleIssueLetsEncrypt}
                  disabled={issuing || !agreeTos || !issueDomain.trim()}
                  startIcon={issuing ? <CircularProgress size={16} color="inherit" /> : <HttpsIcon />}
                >
                  {issuing ? "Issuing Certificate..." : "Issue Free Certificate"}
                </Button>
              </Box>

              {lastIssuedDomain && (
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: "rgba(34, 197, 94, 0.08)",
                    borderColor: "success.main",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "success.main" }}>
                      Certificate ready for {lastIssuedDomain}!
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      Copy the Nginx SSL directives to enable HTTPS in your web server configuration.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    startIcon={<CodeIcon />}
                    onClick={() => handleOpenNginxConfig(lastIssuedDomain)}
                  >
                    View Nginx Directives
                  </Button>
                </Paper>
              )}

              {issueLogs.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <MicroLabel sx={{ mb: 1 }}>ACME ISSUANCE STREAM</MicroLabel>
                  <LogPane lines={issueLogs} running={issuing} />
                </Box>
              )}
            </Stack>
          )}

          {/* TAB 3: UPLOAD CUSTOM CERT */}
          {tab === "custom" && (
            <Stack spacing={2.5} sx={{ maxWidth: 720 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Upload Custom SSL / TLS Certificate
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Install commercial SSL certificates (Comodo, DigiCert, Sectigo, Cloudflare Custom, etc.) with OpenSSL key-pair validation.
                </Typography>
              </Box>

              <Field label="Domain Name" hint="required">
                <TextField
                  fullWidth
                  size="small"
                  placeholder="example.com"
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  slotProps={{ htmlInput: { style: { fontFamily: MONO } } }}
                />
              </Field>

              <Field label="Certificate PEM (.crt / .pem)" hint="-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----">
                <TextField
                  multiline
                  fullWidth
                  minRows={6}
                  maxRows={12}
                  placeholder="-----BEGIN CERTIFICATE-----&#10;...&#10;-----END CERTIFICATE-----"
                  value={customCertPem}
                  onChange={(e) => setCustomCertPem(e.target.value)}
                  slotProps={{
                    htmlInput: {
                      style: { fontFamily: MONO, fontSize: "0.75rem", backgroundColor: CONSOLE.bg, color: CONSOLE.fg },
                    },
                  }}
                />
              </Field>

              <Field label="Private Key PEM (.key)" hint="Stored with 0600 permissions in /opt/hostpanel/etc/ssl/private/">
                <TextField
                  multiline
                  fullWidth
                  minRows={6}
                  maxRows={12}
                  placeholder="-----BEGIN PRIVATE KEY-----&#10;...&#10;-----END PRIVATE KEY-----"
                  value={customKeyPem}
                  onChange={(e) => setCustomKeyPem(e.target.value)}
                  slotProps={{
                    htmlInput: {
                      style: { fontFamily: MONO, fontSize: "0.75rem", backgroundColor: CONSOLE.bg, color: CONSOLE.fg },
                    },
                  }}
                />
              </Field>

              <Field label="CA Intermediate Bundle PEM (Optional)" hint="Intermediate / Chain certificates">
                <TextField
                  multiline
                  fullWidth
                  minRows={4}
                  maxRows={8}
                  placeholder="-----BEGIN CERTIFICATE-----&#10;... (Intermediate CA)&#10;-----END CERTIFICATE-----"
                  value={customCaBundle}
                  onChange={(e) => setCustomCaBundle(e.target.value)}
                  slotProps={{
                    htmlInput: {
                      style: { fontFamily: MONO, fontSize: "0.75rem", backgroundColor: CONSOLE.bg, color: CONSOLE.fg },
                    },
                  }}
                />
              </Field>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUploadCustom}
                  disabled={customUploading || !customDomain.trim() || !customCertPem.trim() || !customKeyPem.trim()}
                  startIcon={customUploading ? <CircularProgress size={16} color="inherit" /> : <FileUploadIcon />}
                >
                  {customUploading ? "Validating & Installing..." : "Validate & Install Certificate"}
                </Button>
              </Box>
            </Stack>
          )}

          {/* TAB 4: LIVE LOGS */}
          {tab === "logs" && (
            <Stack spacing={2}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 }}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <Select
                    size="small"
                    value={logType}
                    onChange={(e) => setLogType(e.target.value as any)}
                    sx={{ minWidth: 140 }}
                  >
                    <MenuItem value="acme">ACME Issuance Log</MenuItem>
                    <MenuItem value="renewal">Auto-Renewal Log</MenuItem>
                    <MenuItem value="ssl">SSL Daemon Log</MenuItem>
                  </Select>
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
                </Stack>
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
                ) : logLines.length === 0 ? (
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontStyle: "italic", textAlign: "center", py: 3 }}
                  >
                    No recent log entries in /opt/hostpanel/logs/ssl/{logType}.log
                  </Typography>
                ) : (
                  logLines.map((line, idx) => (
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
                  All SSL certificates, private keys, ACME challenges, logs, and PID locks reside strictly under{" "}
                  <code style={{ fontFamily: MONO }}>/opt/hostpanel</code>.
                </Typography>
                <Stack spacing={1.5}>
                  <Readout label="CONFIGURATION ROOT" value="/opt/hostpanel/etc/ssl" />
                  <Readout label="CERTIFICATES REPOSITORY" value="/opt/hostpanel/etc/ssl/certs" />
                  <Readout label="PRIVATE KEYS REPOSITORY" value="/opt/hostpanel/etc/ssl/private (mode 0700/0600)" />
                  <Readout label="ACME WORKING & CHALLENGE ROOT" value="/opt/hostpanel/data/acme" />
                  <Readout label="LOGS DIRECTORY" value="/opt/hostpanel/logs/ssl" />
                  <Readout label="RUN & SOCKETS" value="/opt/hostpanel/run/ssl" />
                </Stack>
              </Panel>

              <Panel label="SYSTEM SERVICE & CREDENTIALS" padded>
                <Stack spacing={1.5}>
                  <Readout label="SYSTEMD SERVICE UNIT" value="hostpanel-ssld.service" />
                  <Readout label="SERVICE USER ACCOUNT" value="hp-ssl" />
                  <Readout label="INTERNAL API BINDING" value="Isolated Loopback (127.0.0.1)" />
                  <Readout label="OPS HELPER SCRIPT" value="/opt/hostpanel/packages/ssl/ops/hp-ssl" />
                </Stack>
              </Panel>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* View Certificate Details Modal */}
      <Dialog
        open={viewCertModalOpen}
        onClose={() => setViewCertModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1, fontWeight: 600 }}>
          Certificate Details: {selectedCert?.domain}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2.5 }}>
          {certLoading ? (
            <Box sx={{ display: "grid", placeItems: "center", py: 4 }}>
              <CircularProgress size={24} />
            </Box>
          ) : selectedCert ? (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box sx={{ flex: 1 }}>
                  <Readout label="DOMAIN / COMMON NAME" value={selectedCert.domain} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Readout label="ISSUER" value={selectedCert.issuer} mono={false} />
                </Box>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box sx={{ flex: 1 }}>
                  <Readout label="VALID FROM" value={selectedCert.valid_from || "N/A"} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Readout label="VALID UNTIL" value={selectedCert.valid_to || "N/A"} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Readout label="DAYS REMAINING" value={`${selectedCert.days_left} days`} />
                </Box>
              </Stack>

              <Box>
                <MicroLabel sx={{ mb: 0.5 }}>SUBJECT ALTERNATIVE NAMES (SAN)</MicroLabel>
                <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", gap: 0.5 }}>
                  {(selectedCert.san || [selectedCert.domain]).map((name) => (
                    <Chip key={name} label={name} size="small" sx={{ fontFamily: MONO, fontSize: "0.75rem" }} />
                  ))}
                </Stack>
              </Box>

              {selectedCert.cert_pem && (
                <Box>
                  <MicroLabel sx={{ mb: 0.5 }}>CERTIFICATE PEM</MicroLabel>
                  <TextField
                    multiline
                    fullWidth
                    minRows={6}
                    maxRows={10}
                    value={selectedCert.cert_pem}
                    slotProps={{
                      htmlInput: {
                        readOnly: true,
                        style: { fontFamily: MONO, fontSize: "0.6875rem", backgroundColor: CONSOLE.bg, color: CONSOLE.fg },
                      },
                    }}
                  />
                </Box>
              )}
            </Stack>
          ) : null}
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
          {selectedCert ? (
            <Button
              variant="outlined"
              size="small"
              startIcon={<CodeIcon />}
              onClick={() => handleOpenNginxConfig(selectedCert.domain)}
            >
              Nginx SSL Directives
            </Button>
          ) : <Box />}
          <Button onClick={() => setViewCertModalOpen(false)} color="inherit">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Nginx SSL Directives Modal */}
      <Dialog
        open={snippetModalOpen}
        onClose={() => setSnippetModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1, fontWeight: 600 }}>
          Nginx SSL Directives: {snippetDomain}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2.5 }}>
          <Stack spacing={2}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              To enable SSL in Nginx, paste this block inside your existing{" "}
              <code style={{ fontFamily: MONO, color: "#38bdf8" }}>server &#123; ... &#125;</code> block
              in <code style={{ fontFamily: MONO }}>/opt/hostpanel/etc/nginx/vhosts/{snippetDomain}.conf</code> and change{" "}
              <code style={{ fontFamily: MONO, color: "#eab308" }}>listen 80;</code> to{" "}
              <code style={{ fontFamily: MONO, color: "#22c55e" }}>listen 443 ssl;</code>.
            </Typography>

            <Paper
              sx={{
                p: 2,
                bgcolor: CONSOLE.bg,
                color: CONSOLE.fg,
                fontFamily: MONO,
                fontSize: "0.8125rem",
                lineHeight: 1.6,
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                whiteSpace: "pre",
                overflowX: "auto",
              }}
            >
              {getNginxSnippet(snippetDomain)}
            </Paper>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={copiedSnippet ? <CheckIcon /> : <ContentCopyIcon />}
            onClick={() => handleCopySnippet(getNginxSnippet(snippetDomain))}
          >
            {copiedSnippet ? "Copied!" : "Copy Snippet"}
          </Button>
          <Button onClick={() => setSnippetModalOpen(false)} color="inherit">
            Close
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
        <DialogTitle sx={{ fontWeight: 600 }}>Delete SSL Certificate</DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          <Typography variant="body2">
            Are you sure you want to permanently delete the SSL certificate and private key for{" "}
            <strong>{deletingDomain}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteCert}>
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
