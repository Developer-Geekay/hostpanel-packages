import { useCallback, useEffect, useMemo, useState } from "react";
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
  IconButton,
  InputAdornment,
  LinearProgress,
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
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";
import MailIcon from "@mui/icons-material/Mail";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import StorageIcon from "@mui/icons-material/Storage";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import type {
  DkimInfo,
  MailAlias,
  MailDomain,
  Mailbox,
  MailQueueItem,
  MailStatus,
  PackageContext,
} from "./types";
import { CONSOLE, Field, MONO, MicroLabel, Panel, Readout } from "./kit";

export function MailPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <MailPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function MailPageBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState<"mailboxes" | "dns" | "aliases" | "domains" | "logs" | "service">("mailboxes");

  // Main State
  const [mailStatus, setMailStatus] = useState<MailStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [domains, setDomains] = useState<MailDomain[]>([]);
  const [mailboxes, setMailboxes] = useState<Mailbox[]>([]);
  const [aliases, setAliases] = useState<MailAlias[]>([]);
  const [queue, setQueue] = useState<MailQueueItem[]>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [logCount, setLogCount] = useState(50);
  const [logsLoading, setLogsLoading] = useState(false);

  // Deliverability / DKIM State
  const [selectedDkimDomain, setSelectedDkimDomain] = useState<string>("");
  const [dkimInfo, setDkimInfo] = useState<DkimInfo | null>(null);
  const [dkimLoading, setDkimLoading] = useState(false);

  // Search Filters
  const [mailboxSearch, setMailboxSearch] = useState("");
  const [domainSearch, setDomainSearch] = useState("");
  const [aliasSearch, setAliasSearch] = useState("");

  // Modals
  const [addDomainOpen, setAddDomainOpen] = useState(false);
  const [newDomainName, setNewDomainName] = useState("");

  const [addMailboxOpen, setAddMailboxOpen] = useState(false);
  const [newMailboxUser, setNewMailboxUser] = useState("");
  const [newMailboxDomain, setNewMailboxDomain] = useState("");
  const [newMailboxPassword, setNewMailboxPassword] = useState("");
  const [newMailboxQuota, setNewMailboxQuota] = useState(1024);

  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const [quotaModalOpen, setQuotaModalOpen] = useState(false);
  const [editQuotaEmail, setEditQuotaEmail] = useState<string | null>(null);
  const [editQuotaValue, setEditQuotaValue] = useState(1024);

  const [addAliasOpen, setAddAliasOpen] = useState(false);
  const [aliasSource, setAliasSource] = useState("");
  const [aliasDest, setAliasDest] = useState("");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteType, setDeleteType] = useState<"domain" | "mailbox" | "alias" | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // API helper
  const apiFetch = useCallback(
    async (path: string, options: RequestInit = {}) => {
      const res = await ctx.api(path, options);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }));
        throw new Error(err.message || err.detail || `Request failed with status ${res.status}`);
      }
      return res.json();
    },
    [ctx]
  );

  const loadStatus = useCallback(async () => {
    try {
      setStatusLoading(true);
      const data = await apiFetch("/status");
      setMailStatus(data);
    } catch {
      setMailStatus(null);
    } finally {
      setStatusLoading(false);
    }
  }, [apiFetch]);

  const loadDomains = useCallback(async () => {
    try {
      const data = await apiFetch("/domains");
      if (data && Array.isArray(data.domains)) {
        setDomains(data.domains);
        if (!selectedDkimDomain && data.domains.length > 0) {
          setSelectedDkimDomain(data.domains[0].domain);
        }
      }
    } catch {
      setDomains([]);
    }
  }, [apiFetch, selectedDkimDomain]);

  const loadMailboxes = useCallback(async () => {
    try {
      const data = await apiFetch("/mailboxes");
      if (data && Array.isArray(data.mailboxes)) {
        setMailboxes(data.mailboxes);
      }
    } catch {
      setMailboxes([]);
    }
  }, [apiFetch]);

  const loadAliases = useCallback(async () => {
    try {
      const data = await apiFetch("/aliases");
      if (data && Array.isArray(data.aliases)) {
        setAliases(data.aliases);
      }
    } catch {
      setAliases([]);
    }
  }, [apiFetch]);

  const loadQueue = useCallback(async () => {
    try {
      const data = await apiFetch("/queue");
      if (data && Array.isArray(data.messages)) {
        setQueue(data.messages);
      }
    } catch {
      setQueue([]);
    }
  }, [apiFetch]);

  const loadLogs = useCallback(async () => {
    setLogsLoading(true);
    try {
      const data = await apiFetch(`/logs?lines=${logCount}`);
      if (data && Array.isArray(data.lines)) {
        setLogLines(data.lines);
      }
    } catch (e: any) {
      setToast(e.message);
    } finally {
      setLogsLoading(false);
    }
  }, [apiFetch, logCount]);

  const loadDkim = useCallback(
    async (domain: string) => {
      if (!domain) return;
      setDkimLoading(true);
      try {
        const data = await apiFetch(`/domains/${encodeURIComponent(domain)}/dkim`);
        setDkimInfo(data);
      } catch (e: any) {
        setToast(`Error loading DKIM: ${e.message}`);
        setDkimInfo(null);
      } finally {
        setDkimLoading(false);
      }
    },
    [apiFetch]
  );

  const refreshAll = useCallback(async () => {
    await Promise.all([loadStatus(), loadDomains(), loadMailboxes(), loadAliases(), loadQueue()]);
  }, [loadStatus, loadDomains, loadMailboxes, loadAliases, loadQueue]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  useEffect(() => {
    if (tab === "dns" && selectedDkimDomain) {
      loadDkim(selectedDkimDomain);
    } else if (tab === "logs") {
      loadLogs();
      loadQueue();
    }
  }, [tab, selectedDkimDomain, loadDkim, loadLogs, loadQueue]);

  // Actions
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToast(`Copied ${label} to clipboard!`);
  };

  const handleAddDomain = async () => {
    if (!newDomainName.trim()) {
      setToast("Domain name is required.");
      return;
    }
    setSubmitting(true);
    try {
      await apiFetch("/domains", {
        method: "POST",
        body: JSON.stringify({ domain: newDomainName.trim() }),
      });
      setToast(`Domain ${newDomainName} added with DKIM keys generated.`);
      setAddDomainOpen(false);
      setNewDomainName("");
      await Promise.all([loadDomains(), loadStatus()]);
    } catch (e: any) {
      setToast(`Failed to add domain: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddMailbox = async () => {
    if (!newMailboxUser.trim() || !newMailboxDomain.trim()) {
      setToast("Username and Domain are required.");
      return;
    }
    if (!newMailboxPassword) {
      setToast("Password is required.");
      return;
    }
    const fullEmail = `${newMailboxUser.trim()}@${newMailboxDomain.trim()}`;
    setSubmitting(true);
    try {
      await apiFetch("/mailboxes", {
        method: "POST",
        body: JSON.stringify({
          email: fullEmail,
          password: newMailboxPassword,
          quota_mb: Number(newMailboxQuota) || 1024,
        }),
      });
      setToast(`Mailbox ${fullEmail} created successfully.`);
      setAddMailboxOpen(false);
      setNewMailboxUser("");
      setNewMailboxPassword("");
      await Promise.all([loadMailboxes(), loadStatus()]);
    } catch (e: any) {
      setToast(`Failed to create mailbox: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSetPassword = async () => {
    if (!selectedEmail || !newPassword) return;
    setSubmitting(true);
    try {
      await apiFetch(`/mailboxes/${encodeURIComponent(selectedEmail)}/password`, {
        method: "PUT",
        body: JSON.stringify({ password: newPassword }),
      });
      setToast(`Password updated for ${selectedEmail}.`);
      setPasswordModalOpen(false);
      setSelectedEmail(null);
      setNewPassword("");
    } catch (e: any) {
      setToast(`Failed to update password: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSetQuota = async () => {
    if (!editQuotaEmail) return;
    setSubmitting(true);
    try {
      await apiFetch(`/mailboxes/${encodeURIComponent(editQuotaEmail)}/quota`, {
        method: "PUT",
        body: JSON.stringify({ quota_mb: Number(editQuotaValue) }),
      });
      setToast(`Quota updated to ${editQuotaValue} MB for ${editQuotaEmail}.`);
      setQuotaModalOpen(false);
      setEditQuotaEmail(null);
      await loadMailboxes();
    } catch (e: any) {
      setToast(`Failed to update quota: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddAlias = async () => {
    if (!aliasSource.trim() || !aliasDest.trim()) {
      setToast("Source and Destination addresses are required.");
      return;
    }
    setSubmitting(true);
    try {
      await apiFetch("/aliases", {
        method: "POST",
        body: JSON.stringify({
          source: aliasSource.trim(),
          destination: aliasDest.trim(),
        }),
      });
      setToast(`Alias ${aliasSource} -> ${aliasDest} created.`);
      setAddAliasOpen(false);
      setAliasSource("");
      setAliasDest("");
      await Promise.all([loadAliases(), loadStatus()]);
    } catch (e: any) {
      setToast(`Failed to create alias: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget || !deleteType) return;
    setSubmitting(true);
    try {
      if (deleteType === "domain") {
        await apiFetch(`/domains/${encodeURIComponent(deleteTarget)}`, { method: "DELETE" });
        setToast(`Domain ${deleteTarget} deleted.`);
        await Promise.all([loadDomains(), loadMailboxes(), loadAliases(), loadStatus()]);
      } else if (deleteType === "mailbox") {
        await apiFetch(`/mailboxes/${encodeURIComponent(deleteTarget)}`, { method: "DELETE" });
        setToast(`Mailbox ${deleteTarget} deleted.`);
        await Promise.all([loadMailboxes(), loadStatus()]);
      } else if (deleteType === "alias") {
        await apiFetch(`/aliases/${encodeURIComponent(deleteTarget)}`, { method: "DELETE" });
        setToast(`Alias ${deleteTarget} deleted.`);
        await Promise.all([loadAliases(), loadStatus()]);
      }
      setDeleteModalOpen(false);
      setDeleteTarget(null);
      setDeleteType(null);
    } catch (e: any) {
      setToast(`Delete failed: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFlushQueue = async () => {
    setSubmitting(true);
    try {
      await apiFetch("/queue/flush", { method: "POST" });
      setToast("Postfix mail delivery queue flushed.");
      await Promise.all([loadQueue(), loadStatus()]);
    } catch (e: any) {
      setToast(`Failed to flush queue: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const isRunning = Boolean(mailStatus?.active);

  const filteredMailboxes = useMemo(() => {
    if (!mailboxSearch) return mailboxes;
    return mailboxes.filter(
      (m) =>
        m.email.toLowerCase().includes(mailboxSearch.toLowerCase()) ||
        m.domain.toLowerCase().includes(mailboxSearch.toLowerCase())
    );
  }, [mailboxes, mailboxSearch]);

  const filteredDomains = useMemo(() => {
    if (!domainSearch) return domains;
    return domains.filter((d) => d.domain.toLowerCase().includes(domainSearch.toLowerCase()));
  }, [domains, domainSearch]);

  const filteredAliases = useMemo(() => {
    if (!aliasSearch) return aliases;
    return aliases.filter(
      (a) =>
        a.source.toLowerCase().includes(aliasSearch.toLowerCase()) ||
        a.destination.toLowerCase().includes(aliasSearch.toLowerCase())
    );
  }, [aliases, aliasSearch]);

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
            label={isRunning ? "RUNNING" : "ACTIVE"}
            color={isRunning ? "success" : "default"}
            sx={{ fontWeight: 700, fontSize: "0.75rem" }}
          />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Postfix / Dovecot • 100% Isolated in /opt/hostpanel
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexShrink: 0 }}>
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

          {/* Flush Queue */}
          <Tooltip title="Flush Mail Queue" arrow>
            <span>
              <IconButton
                size="small"
                color="info"
                onClick={handleFlushQueue}
                disabled={submitting}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {submitting ? <CircularProgress size={16} color="inherit" /> : <SendIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Add Mail Domain */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => setAddDomainOpen(true)}
            sx={{ whiteSpace: "nowrap" }}
          >
            Add Domain
          </Button>

          {/* Primary Action Button */}
          <Button
            variant="contained"
            size="small"
            startIcon={<MailIcon />}
            onClick={() => {
              if (domains.length > 0 && !newMailboxDomain) {
                setNewMailboxDomain(domains[0].domain);
              }
              setAddMailboxOpen(true);
            }}
            sx={{ ml: 0.5, whiteSpace: "nowrap" }}
          >
            New Mailbox
          </Button>
        </Stack>
      </Stack>

      {/* 4 Overview Stat Cards */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>MAIL SERVER STATUS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {mailStatus?.postfix || "Online"} / {mailStatus?.dovecot || "Running"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              SMTP 25/587 • IMAP 993
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>ACTIVE DOMAINS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {domains.length} Domain{domains.length === 1 ? "" : "s"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              DKIM Keys Generated & Managed
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>TOTAL MAILBOXES</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {mailboxes.length} Account{mailboxes.length === 1 ? "" : "s"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {mailboxes.reduce((acc, m) => acc + (m.used_mb || 0), 0).toFixed(1)} MB Stored
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>QUEUE COUNT</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {mailStatus?.queue_count ?? queue.length} Queued
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Postfix Mail Spool
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Tabs Layout */}
      <Paper sx={{ border: "1px solid", borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem" },
          }}
        >
          <Tab label={`Mailboxes (${mailboxes.length})`} value="mailboxes" />
          <Tab label="DNS & Deliverability" value="dns" />
          <Tab label={`Aliases & Forwarders (${aliases.length})`} value="aliases" />
          <Tab label={`Mail Domains (${domains.length})`} value="domains" />
          <Tab label="Live Logs & Queue" value="logs" />
          <Tab label="Service & Isolation" value="service" />
        </Tabs>

        <Box sx={{ p: 2.25 }}>
          {/* TAB 1: MAILBOXES */}
          {tab === "mailboxes" && (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  placeholder="Search mailboxes..."
                  value={mailboxSearch}
                  onChange={(e) => setMailboxSearch(e.target.value)}
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
                  onClick={() => {
                    if (domains.length > 0 && !newMailboxDomain) {
                      setNewMailboxDomain(domains[0].domain);
                    }
                    setAddMailboxOpen(true);
                  }}
                >
                  New Mailbox
                </Button>
              </Stack>

              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Email Address</TableCell>
                      <TableCell>Domain</TableCell>
                      <TableCell sx={{ minWidth: 200 }}>Quota Usage</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredMailboxes.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 4, color: "text.secondary" }}>
                          No mailboxes configured. Click "New Mailbox" to create one.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredMailboxes.map((mb) => {
                        const pct = mb.quota_mb > 0 ? Math.min(100, Math.round((mb.used_mb / mb.quota_mb) * 100)) : 0;
                        return (
                          <TableRow key={mb.email} hover>
                            <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                              {mb.email}
                            </TableCell>
                            <TableCell sx={{ color: "text.secondary" }}>
                              {mb.domain}
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                                  <Typography variant="caption" sx={{ fontFamily: MONO, color: "text.secondary" }}>
                                    {mb.used_mb} MB / {mb.quota_mb} MB
                                  </Typography>
                                  <Typography variant="caption" sx={{ fontFamily: MONO, fontWeight: 600 }}>
                                    {pct}%
                                  </Typography>
                                </Stack>
                                <LinearProgress
                                  variant="determinate"
                                  value={pct}
                                  color={pct > 90 ? "error" : pct > 75 ? "warning" : "primary"}
                                  sx={{ height: 6, borderRadius: 1 }}
                                />
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={mb.status || "active"}
                                size="small"
                                color="success"
                                sx={{ textTransform: "capitalize" }}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                                <Tooltip title="Change Password">
                                  <IconButton
                                    size="small"
                                    onClick={() => {
                                      setSelectedEmail(mb.email);
                                      setPasswordModalOpen(true);
                                    }}
                                  >
                                    <KeyIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit Quota">
                                  <IconButton
                                    size="small"
                                    onClick={() => {
                                      setEditQuotaEmail(mb.email);
                                      setEditQuotaValue(mb.quota_mb);
                                      setQuotaModalOpen(true);
                                    }}
                                  >
                                    <StorageIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete Mailbox">
                                  <IconButton
                                    size="small"
                                    color="error"
                                    onClick={() => {
                                      setDeleteTarget(mb.email);
                                      setDeleteType("mailbox");
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

          {/* TAB 2: DNS & DELIVERABILITY HELPER */}
          {tab === "dns" && (
            <Stack spacing={2.5}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" } }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Select Mail Domain:
                </Typography>
                <Select
                  size="small"
                  value={selectedDkimDomain}
                  onChange={(e) => {
                    setSelectedDkimDomain(e.target.value);
                    loadDkim(e.target.value);
                  }}
                  sx={{ minWidth: 220 }}
                >
                  {domains.map((d) => (
                    <MenuItem key={d.domain} value={d.domain}>
                      {d.domain}
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<RefreshIcon />}
                  onClick={() => loadDkim(selectedDkimDomain)}
                  disabled={dkimLoading || !selectedDkimDomain}
                >
                  Reload DNS Records
                </Button>
              </Stack>

              {dkimLoading ? (
                <Box sx={{ display: "grid", placeItems: "center", py: 6 }}>
                  <CircularProgress size={28} />
                </Box>
              ) : !selectedDkimDomain ? (
                <Alert severity="info">Add or select a mail domain above to view its DNS records.</Alert>
              ) : (
                <Stack spacing={2}>
                  <Alert severity="success" icon={<VerifiedUserIcon />}>
                    DNS records for <strong>{selectedDkimDomain}</strong>. Add these records to your authoritative DNS zone to ensure 100% email deliverability and avoid spam folders.
                  </Alert>

                  {/* MX Record */}
                  <Panel label="1. MX RECORD (MAIL EXCHANGE)">
                    <Stack spacing={1.5}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <Readout label="HOST / NAME" value="@" />
                        <Readout label="RECORD TYPE" value="MX" />
                        <Readout label="PRIORITY" value="10" />
                        <Box sx={{ flex: 1 }}>
                          <Readout label="VALUE / TARGET" value={`mail.${selectedDkimDomain}.`} />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<ContentCopyIcon />}
                            onClick={() => handleCopy(`10 mail.${selectedDkimDomain}.`, "MX Record")}
                          >
                            Copy Value
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  </Panel>

                  {/* SPF Record */}
                  <Panel label="2. SPF RECORD (SENDER POLICY FRAMEWORK)">
                    <Stack spacing={1.5}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <Readout label="HOST / NAME" value="@" />
                        <Readout label="RECORD TYPE" value="TXT" />
                        <Box sx={{ flex: 1 }}>
                          <Readout label="VALUE" value="v=spf1 mx a ~all" />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<ContentCopyIcon />}
                            onClick={() => handleCopy("v=spf1 mx a ~all", "SPF Record")}
                          >
                            Copy Value
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  </Panel>

                  {/* DKIM Record */}
                  <Panel label="3. DKIM RECORD (DOMAINKEYS IDENTIFIED MAIL)">
                    <Stack spacing={1.5}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <Readout label="HOST / NAME" value={`default._domainkey.${selectedDkimDomain}`} />
                        <Readout label="RECORD TYPE" value="TXT" />
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<ContentCopyIcon />}
                            onClick={() =>
                              handleCopy(
                                dkimInfo?.dns_records?.dkim || `v=DKIM1; k=rsa; p=${dkimInfo?.public_key}`,
                                "DKIM Record"
                              )
                            }
                          >
                            Copy DKIM Value
                          </Button>
                        </Box>
                      </Stack>
                      <Box
                        sx={{
                          p: 1.5,
                          bgcolor: CONSOLE.bg,
                          color: CONSOLE.fg,
                          borderRadius: 1,
                          fontFamily: MONO,
                          fontSize: "0.75rem",
                          wordBreak: "break-all",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {dkimInfo?.dns_records?.dkim || `v=DKIM1; k=rsa; p=${dkimInfo?.public_key || "..."}`}
                      </Box>
                    </Stack>
                  </Panel>

                  {/* DMARC Record */}
                  <Panel label="4. DMARC RECORD">
                    <Stack spacing={1.5}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <Readout label="HOST / NAME" value={`_dmarc.${selectedDkimDomain}`} />
                        <Readout label="RECORD TYPE" value="TXT" />
                        <Box sx={{ flex: 1 }}>
                          <Readout
                            label="VALUE"
                            value={
                              dkimInfo?.dns_records?.dmarc ||
                              `v=DMARC1; p=quarantine; rua=mailto:postmaster@${selectedDkimDomain}`
                            }
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<ContentCopyIcon />}
                            onClick={() =>
                              handleCopy(
                                dkimInfo?.dns_records?.dmarc ||
                                  `v=DMARC1; p=quarantine; rua=mailto:postmaster@${selectedDkimDomain}`,
                                "DMARC Record"
                              )
                            }
                          >
                            Copy Value
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  </Panel>
                </Stack>
              )}
            </Stack>
          )}

          {/* TAB 3: ALIASES & FORWARDERS */}
          {tab === "aliases" && (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  placeholder="Search aliases..."
                  value={aliasSearch}
                  onChange={(e) => setAliasSearch(e.target.value)}
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
                  onClick={() => setAddAliasOpen(true)}
                >
                  New Alias / Forwarder
                </Button>
              </Stack>

              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Source Address</TableCell>
                      <TableCell>Domain</TableCell>
                      <TableCell>Destination Addresses (Forward To)</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAliases.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 4, color: "text.secondary" }}>
                          No mail aliases configured.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAliases.map((a) => (
                        <TableRow key={a.source} hover>
                          <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                            {a.source}
                          </TableCell>
                          <TableCell sx={{ color: "text.secondary" }}>
                            {a.domain}
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: "0.75rem" }}>
                            {a.destination}
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                              <Tooltip title="Edit Destinations">
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    setAliasSource(a.source);
                                    setAliasDest(a.destination);
                                    setAddAliasOpen(true);
                                  }}
                                >
                                  <EditIcon sx={{ fontSize: 16 }} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete Alias">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => {
                                    setDeleteTarget(a.source);
                                    setDeleteType("alias");
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

          {/* TAB 4: MAIL DOMAINS */}
          {tab === "domains" && (
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  placeholder="Search domains..."
                  value={domainSearch}
                  onChange={(e) => setDomainSearch(e.target.value)}
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
                  onClick={() => setAddDomainOpen(true)}
                >
                  Add Mail Domain
                </Button>
              </Stack>

              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Domain Name</TableCell>
                      <TableCell>DKIM Status</TableCell>
                      <TableCell>Mailboxes</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredDomains.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 4, color: "text.secondary" }}>
                          No mail domains configured. Click "Add Mail Domain" to start.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredDomains.map((d) => (
                        <TableRow key={d.domain} hover>
                          <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>
                            {d.domain}
                          </TableCell>
                          <TableCell>
                            <Chip
                              icon={<VpnKeyIcon sx={{ fontSize: "12px !important" }} />}
                              label={d.dkim_enabled ? "DKIM Ready" : "Configured"}
                              color={d.dkim_enabled ? "success" : "default"}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>
                            {d.mailboxes_count ?? mailboxes.filter((m) => m.domain === d.domain).length} accounts
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                              <Tooltip title="View Deliverability & DKIM DNS Records">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  onClick={() => {
                                    setSelectedDkimDomain(d.domain);
                                    setTab("dns");
                                  }}
                                  sx={{ mr: 1, textTransform: "none", fontSize: "0.75rem", py: 0.25 }}
                                >
                                  DNS Records
                                </Button>
                              </Tooltip>
                              <Tooltip title="Delete Domain">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => {
                                    setDeleteTarget(d.domain);
                                    setDeleteType("domain");
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

          {/* TAB 5: LIVE LOGS & QUEUE */}
          {tab === "logs" && (
            <Stack spacing={3}>
              {/* Mail Queue Section */}
              <Panel
                label={`ACTIVE MAIL QUEUE (${queue.length} MESSAGES)`}
                action={
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<SendIcon />}
                    onClick={handleFlushQueue}
                    disabled={submitting}
                  >
                    Flush Queue
                  </Button>
                }
              >
                {queue.length === 0 ? (
                  <Typography variant="body2" sx={{ color: "text.secondary", py: 1 }}>
                    Mail queue is clean. No outbound or delayed messages pending.
                  </Typography>
                ) : (
                  <TableContainer component={Paper} variant="outlined">
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Queue ID</TableCell>
                          <TableCell>Sender</TableCell>
                          <TableCell>Recipient</TableCell>
                          <TableCell>Size</TableCell>
                          <TableCell>Arrival</TableCell>
                          <TableCell>Status / Error</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {queue.map((q) => (
                          <TableRow key={q.id} hover>
                            <TableCell sx={{ fontFamily: MONO }}>{q.id}</TableCell>
                            <TableCell>{q.sender}</TableCell>
                            <TableCell>{q.recipient}</TableCell>
                            <TableCell>{q.size}</TableCell>
                            <TableCell>{q.arrival}</TableCell>
                            <TableCell sx={{ color: "warning.main" }}>{q.reason || "Queued"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Panel>

              {/* Live Mail Logs Section */}
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Live Mail Logs (/opt/hostpanel/logs/mail/mail.log)
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Select
                      size="small"
                      value={logCount}
                      onChange={(e) => setLogCount(Number(e.target.value))}
                      sx={{ minWidth: 110 }}
                    >
                      <MenuItem value={50}>50 lines</MenuItem>
                      <MenuItem value={100}>100 lines</MenuItem>
                      <MenuItem value={200}>200 lines</MenuItem>
                    </Select>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<RefreshIcon />}
                      onClick={loadLogs}
                      disabled={logsLoading}
                    >
                      {logsLoading ? "Refreshing..." : "Refresh Logs"}
                    </Button>
                  </Stack>
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
                  {logsLoading ? (
                    <Box sx={{ display: "grid", placeItems: "center", py: 4 }}>
                      <CircularProgress size={20} />
                    </Box>
                  ) : logLines.length === 0 ? (
                    <Typography variant="body2" sx={{ color: CONSOLE.dim, fontStyle: "italic", textAlign: "center", py: 3 }}>
                      No recent log entries in /opt/hostpanel/logs/mail/mail.log
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
            </Stack>
          )}

          {/* TAB 6: SERVICE & ISOLATION */}
          {tab === "service" && (
            <Stack spacing={2}>
              <Panel label="100% ISOLATION STRUCTURE (STRICT HOSTPANEL RULE)" padded>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  Mail configs, virtual user databases, DKIM keys, mailboxes, and sockets reside strictly under <code style={{ fontFamily: MONO }}>/opt/hostpanel</code>. No files in /var/mail or /etc/postfix.
                </Typography>
                <Stack spacing={1.5}>
                  <Readout label="CONFIGURATION ROOT" value="/opt/hostpanel/etc/mail" />
                  <Readout label="MAILBOX VIRTUAL STORE" value="/opt/hostpanel/data/mail" />
                  <Readout label="LOGS DIRECTORY" value="/opt/hostpanel/logs/mail" />
                  <Readout label="RUN & SOCKETS" value="/opt/hostpanel/run/mail" />
                  <Readout label="OPENDKIM KEYS DIRECTORY" value="/opt/hostpanel/etc/mail/dkim" />
                </Stack>
              </Panel>

              <Panel label="SYSTEM SERVICE & DAEMON SPECS" padded>
                <Stack spacing={1.5}>
                  <Readout label="SYSTEMD SERVICE UNIT" value="hostpanel-maild.service" />
                  <Readout label="SERVICE USER ACCOUNT" value="hp-mail" />
                  <Readout label="INTERNAL API BINDING" value="Isolated Loopback (127.0.0.1)" />
                  <Readout label="ROOT OPS HELPER SCRIPT" value="/opt/hostpanel/packages/mail/ops/hp-mail" />
                </Stack>
              </Panel>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* Add Domain Dialog */}
      <Dialog open={addDomainOpen} onClose={() => setAddDomainOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Add Mail Domain</DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Field label="Domain Name" hint="e.g. example.com">
            <TextField
              autoFocus
              fullWidth
              size="small"
              placeholder="example.com"
              value={newDomainName}
              onChange={(e) => setNewDomainName(e.target.value)}
              slotProps={{ htmlInput: { style: { fontFamily: MONO } } }}
            />
          </Field>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setAddDomainOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddDomain} disabled={submitting}>
            {submitting ? "Adding..." : "Add Domain"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Mailbox Dialog */}
      <Dialog open={addMailboxOpen} onClose={() => setAddMailboxOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Create New Mailbox</DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5}>
              <Box sx={{ flex: 1 }}>
                <Field label="Username / Local Part" hint="e.g. contact">
                  <TextField
                    autoFocus
                    fullWidth
                    size="small"
                    placeholder="user"
                    value={newMailboxUser}
                    onChange={(e) => setNewMailboxUser(e.target.value)}
                    slotProps={{ htmlInput: { style: { fontFamily: MONO } } }}
                  />
                </Field>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Field label="Mail Domain">
                  <Select
                    fullWidth
                    size="small"
                    value={newMailboxDomain}
                    onChange={(e) => setNewMailboxDomain(e.target.value)}
                  >
                    {domains.map((d) => (
                      <MenuItem key={d.domain} value={d.domain}>
                        @{d.domain}
                      </MenuItem>
                    ))}
                  </Select>
                </Field>
              </Box>
            </Stack>

            <Field label="Password" hint="Strong mailbox password">
              <TextField
                type="password"
                fullWidth
                size="small"
                placeholder="••••••••••••"
                value={newMailboxPassword}
                onChange={(e) => setNewMailboxPassword(e.target.value)}
              />
            </Field>

            <Field label="Storage Quota (MB)" hint="Default 1024 MB (1 GB)">
              <TextField
                type="number"
                fullWidth
                size="small"
                value={newMailboxQuota}
                onChange={(e) => setNewMailboxQuota(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 10, max: 102400 } }}
              />
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setAddMailboxOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddMailbox} disabled={submitting}>
            {submitting ? "Creating..." : "Create Mailbox"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={passwordModalOpen} onClose={() => setPasswordModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Change Password</DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Stack spacing={2}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Set a new password for <strong style={{ fontFamily: MONO }}>{selectedEmail}</strong>
            </Typography>
            <Field label="New Password">
              <TextField
                autoFocus
                type="password"
                fullWidth
                size="small"
                placeholder="••••••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setPasswordModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSetPassword} disabled={submitting}>
            {submitting ? "Updating..." : "Set Password"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Quota Dialog */}
      <Dialog open={quotaModalOpen} onClose={() => setQuotaModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Edit Storage Quota</DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Stack spacing={2}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Update storage limit for <strong style={{ fontFamily: MONO }}>{editQuotaEmail}</strong>
            </Typography>
            <Field label="Quota in MB">
              <TextField
                autoFocus
                type="number"
                fullWidth
                size="small"
                value={editQuotaValue}
                onChange={(e) => setEditQuotaValue(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 10, max: 102400 } }}
              />
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setQuotaModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSetQuota} disabled={submitting}>
            {submitting ? "Updating..." : "Save Quota"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Alias Dialog */}
      <Dialog open={addAliasOpen} onClose={() => setAddAliasOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>
          {aliasSource ? "Edit Alias / Forwarder" : "Create New Alias / Forwarder"}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 2.25 }}>
          <Stack spacing={2}>
            <Field label="Source Email Address" hint="e.g. sales@example.com">
              <TextField
                autoFocus
                fullWidth
                size="small"
                placeholder="sales@example.com"
                value={aliasSource}
                onChange={(e) => setAliasSource(e.target.value)}
                slotProps={{ htmlInput: { style: { fontFamily: MONO } } }}
              />
            </Field>
            <Field label="Destination Addresses" hint="Comma-separated forward targets">
              <TextField
                fullWidth
                size="small"
                placeholder="alice@example.com, bob@example.com"
                value={aliasDest}
                onChange={(e) => setAliasDest(e.target.value)}
                slotProps={{ htmlInput: { style: { fontFamily: MONO } } }}
              />
            </Field>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setAddAliasOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddAlias} disabled={submitting}>
            {submitting ? "Saving..." : "Save Alias"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Confirm Deletion</DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          <Typography variant="body2">
            Are you sure you want to delete {deleteType} <strong>{deleteTarget}</strong>?
            {deleteType === "domain" && " All associated mailboxes and aliases will be permanently removed."}
            {deleteType === "mailbox" && " All stored email files will be deleted."}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteModalOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete} disabled={submitting}>
            {submitting ? "Deleting..." : "Delete"}
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
