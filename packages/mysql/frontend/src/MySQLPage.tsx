import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert, Box, Button, Card, CardContent, Checkbox, Chip, CircularProgress,
  Dialog, DialogActions, DialogContent, DialogTitle,
  FormControl, FormControlLabel, IconButton, InputAdornment, MenuItem, Paper, Select,
  Snackbar, Stack, Tab, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, Tabs, TextField, Tooltip, Typography,
} from "@mui/material";
import { ThemeProvider, alpha, createTheme, type ThemeOptions } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StopIcon from "@mui/icons-material/Stop";
import CodeIcon from "@mui/icons-material/Code";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SecurityIcon from "@mui/icons-material/Security";
import TerminalIcon from "@mui/icons-material/Terminal";
import TableChartIcon from "@mui/icons-material/TableChart";
import DownloadIcon from "@mui/icons-material/Download";

import type { DatabaseItem, EngineStatus, PackageContext, QueryResult, TableItem, UserItem } from "./types";
import { LogPane, MONO, MicroLabel, appendEvent, type Line } from "./kit";

export const MYSQL_PRIVILEGES: { key: string; label: string; desc: string; category: "data" | "structure" | "admin" }[] = [
  { key: "SELECT", label: "SELECT", desc: "Retrieve data from tables", category: "data" },
  { key: "INSERT", label: "INSERT", desc: "Insert new rows into tables", category: "data" },
  { key: "UPDATE", label: "UPDATE", desc: "Modify existing rows in tables", category: "data" },
  { key: "DELETE", label: "DELETE", desc: "Delete rows from tables", category: "data" },
  { key: "CREATE", label: "CREATE", desc: "Create new tables and databases", category: "structure" },
  { key: "DROP", label: "DROP", desc: "Drop databases, tables, and views", category: "structure" },
  { key: "ALTER", label: "ALTER", desc: "Alter existing table structures", category: "structure" },
  { key: "INDEX", label: "INDEX", desc: "Create and drop table indexes", category: "structure" },
  { key: "REFERENCES", label: "REFERENCES", desc: "Create foreign key constraints", category: "structure" },
  { key: "CREATE TEMPORARY TABLES", label: "CREATE TEMPORARY TABLES", desc: "Create temporary session tables", category: "structure" },
  { key: "LOCK TABLES", label: "LOCK TABLES", desc: "Lock tables for thread", category: "admin" },
  { key: "EXECUTE", label: "EXECUTE", desc: "Execute stored procedures & routines", category: "admin" },
  { key: "CREATE VIEW", label: "CREATE VIEW", desc: "Create new views", category: "structure" },
  { key: "SHOW VIEW", label: "SHOW VIEW", desc: "Inspect view definitions", category: "data" },
  { key: "CREATE ROUTINE", label: "CREATE ROUTINE", desc: "Create stored routines & functions", category: "structure" },
  { key: "ALTER ROUTINE", label: "ALTER ROUTINE", desc: "Modify/drop stored routines", category: "structure" },
  { key: "EVENT", label: "EVENT", desc: "Create and manage scheduled events", category: "admin" },
  { key: "TRIGGER", label: "TRIGGER", desc: "Create and manage table triggers", category: "structure" },
];

export function MySQLPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <MySQLPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function MySQLPageBody({ ctx }: { ctx: PackageContext }) {
  const [tab, setTab] = useState<"databases" | "users" | "query" | "service">("databases");
  const [engineStatus, setEngineStatus] = useState<EngineStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const [databases, setDatabases] = useState<DatabaseItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [dbSearch, setDbSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  // Query Browser state
  const [queryDb, setQueryDb] = useState<string>("");
  const [tables, setTables] = useState<TableItem[]>([]);
  const [tablesLoading, setTablesLoading] = useState(false);
  const [sqlQuery, setSqlQuery] = useState("SELECT 1 as test, 'HostPanel MySQL' as server;");
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryResult, setQueryResult] = useState<QueryResult | null>(null);
  const [queryPage, setQueryPage] = useState(0);
  const [queryRowsPerPage, setQueryRowsPerPage] = useState(25);

  // Modals
  const [createDbOpen, setCreateDbOpen] = useState(false);
  const [newDbName, setNewDbName] = useState("");
  const [newDbCharset, setNewDbCharset] = useState("utf8mb4");

  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserHost, setNewUserHost] = useState("%");

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [targetUser, setTargetUser] = useState<UserItem | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const [grantOpen, setGrantOpen] = useState(false);
  const [grantUser, setGrantUser] = useState<UserItem | null>(null);
  const [grantDb, setGrantDb] = useState("");
  const [selectedPrivs, setSelectedPrivs] = useState<string[]>(MYSQL_PRIVILEGES.map((p) => p.key));

  const [configOpen, setConfigOpen] = useState(false);
  const [configContent, setConfigContent] = useState("");
  const [configPath, setConfigPath] = useState("");
  const [configLoading, setConfigLoading] = useState(false);
  const [configSaving, setConfigSaving] = useState(false);

  const [logOpen, setLogOpen] = useState(false);
  const [logContent, setLogContent] = useState("");
  const [logLines] = useState(50);
  const [logLoading, setLogLoading] = useState(false);

  // Streaming Operation Modal
  const [streamModalOpen, setStreamModalOpen] = useState(false);
  const [streamLines, setStreamLines] = useState<Line[]>([]);
  const [streamRunning, setStreamRunning] = useState(false);
  const [streamTitle, setStreamTitle] = useState("");

  const [toast, setToast] = useState<string | null>(null);

  // Load Status
  const loadStatus = useCallback(async () => {
    try {
      setStatusLoading(true);
      const res = await ctx.api("/engine/status");
      if (res.ok) {
        const data = await res.json();
        setEngineStatus(data);
      }
    } catch {
      // ignore
    } finally {
      setStatusLoading(false);
    }
  }, [ctx]);

  // Load Databases
  const loadDatabases = useCallback(async () => {
    try {
      const res = await ctx.api("/databases");
      if (res.ok) {
        const data = await res.json();
        const dbs = data.databases || [];
        setDatabases(dbs);
        if (dbs.length > 0 && !queryDb) {
          setQueryDb(dbs[0].name);
        }
      }
    } catch {
      // ignore
    }
  }, [ctx, queryDb]);

  // Load Users
  const loadUsers = useCallback(async () => {
    try {
      const res = await ctx.api("/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch {
      // ignore
    }
  }, [ctx]);

  // Load Tables for Selected DB
  const loadTables = useCallback(async (db: string) => {
    if (!db) return;
    try {
      setTablesLoading(true);
      const res = await ctx.api(`/databases/${encodeURIComponent(db)}/tables`);
      if (res.ok) {
        const data = await res.json();
        setTables(data.tables || []);
      }
    } catch {
      setTables([]);
    } finally {
      setTablesLoading(false);
    }
  }, [ctx]);

  useEffect(() => {
    if (queryDb) {
      loadTables(queryDb);
    }
  }, [queryDb, loadTables]);

  const refreshAll = useCallback(() => {
    loadStatus();
    loadDatabases();
    loadUsers();
    if (queryDb) loadTables(queryDb);
  }, [loadStatus, loadDatabases, loadUsers, loadTables, queryDb]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  // Execute SQL Query
  const executeQuery = async (customQuery?: string) => {
    const q = customQuery || sqlQuery;
    if (!queryDb || !q.trim()) return;
    setQueryRunning(true);
    setQueryPage(0);
    try {
      const res = await ctx.api(`/databases/${encodeURIComponent(queryDb)}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      setQueryResult(data);
      if (!data.ok) {
        setToast(`Query Error: ${data.error || "Execution failed"}`);
      }
    } catch (err: any) {
      setQueryResult({ ok: false, error: err?.message || String(err) });
      setToast(`Network error executing query: ${err?.message}`);
    } finally {
      setQueryRunning(false);
    }
  };

  const exportResultsCSV = () => {
    if (!queryResult || !queryResult.columns || !queryResult.rows) return;
    const header = queryResult.columns.join(",");
    const body = queryResult.rows.map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(header + "\n" + body);
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", `${queryDb}_query_results.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportResultsJSON = () => {
    if (!queryResult || !queryResult.columns || !queryResult.rows) return;
    const items = queryResult.rows.map((row) => {
      const obj: Record<string, any> = {};
      queryResult.columns!.forEach((col, i) => {
        obj[col] = row[i];
      });
      return obj;
    });
    const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", jsonContent);
    link.setAttribute("download", `${queryDb}_query_results.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Engine Actions
  const runEngineAction = async (action: "start" | "stop" | "restart" | "reload") => {
    setActionLoading(true);
    setStreamTitle(`MySQL: ${action.toUpperCase()}`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/engine/${action}`, { method: "POST" })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      setActionLoading(false);
      refreshAll();
    }
  };

  const handleCreateDb = async () => {
    if (!newDbName) return;
    setCreateDbOpen(false);
    setStreamTitle(`MySQL: Create Database '${newDbName}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/databases", {
        method: "POST",
        body: { name: newDbName, charset: newDbCharset },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
      setNewDbName("");
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadDatabases();
    }
  };

  const handleDropDb = async (name: string) => {
    if (!confirm(`Are you sure you want to permanently drop database '${name}'?`)) return;
    setStreamTitle(`MySQL: Drop Database '${name}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/databases/${name}`, { method: "DELETE" })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadDatabases();
    }
  };

  const handleCreateUser = async () => {
    if (!newUsername || !newUserPassword) return;
    setCreateUserOpen(false);
    setStreamTitle(`MySQL: Create User '${newUsername}'@'${newUserHost}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/users", {
        method: "POST",
        body: { username: newUsername, password: newUserPassword, host: newUserHost },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
      setNewUsername("");
      setNewUserPassword("");
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadUsers();
    }
  };

  const handleDropUser = async (user: UserItem) => {
    if (!confirm(`Drop user '${user.username}'@'${user.host}'?`)) return;
    setStreamTitle(`MySQL: Drop User '${user.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/users/${user.username}?host=${encodeURIComponent(user.host)}`, {
        method: "DELETE",
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadUsers();
    }
  };

  const handleSetPassword = async () => {
    if (!targetUser || !newPassword) return;
    setPasswordOpen(false);
    setStreamTitle(`MySQL: Reset Password for '${targetUser.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/users/${targetUser.username}/password`, {
        method: "POST",
        body: { password: newPassword, host: targetUser.host },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
      setNewPassword("");
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
    }
  };

  const togglePriv = (key: string) => {
    setSelectedPrivs((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleAllToggle = (checked: boolean) => {
    if (checked) {
      setSelectedPrivs(MYSQL_PRIVILEGES.map((p) => p.key));
    } else {
      setSelectedPrivs([]);
    }
  };

  const setPrivPreset = (preset: "all" | "readonly" | "readwrite" | "ddl" | "clear") => {
    switch (preset) {
      case "all":
        setSelectedPrivs(MYSQL_PRIVILEGES.map((p) => p.key));
        break;
      case "readonly":
        setSelectedPrivs(["SELECT", "SHOW VIEW"]);
        break;
      case "readwrite":
        setSelectedPrivs(["SELECT", "INSERT", "UPDATE", "DELETE"]);
        break;
      case "ddl":
        setSelectedPrivs([
          "SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "INDEX",
          "CREATE TEMPORARY TABLES", "LOCK TABLES", "CREATE VIEW", "SHOW VIEW",
          "CREATE ROUTINE", "ALTER ROUTINE", "EXECUTE", "EVENT", "TRIGGER",
        ]);
        break;
      case "clear":
        setSelectedPrivs([]);
        break;
    }
  };

  const handleGrant = async () => {
    if (!grantUser || !grantDb) return;
    if (selectedPrivs.length === 0) {
      setToast("Please select at least one privilege to grant, or use Revoke.");
      return;
    }
    const privString =
      selectedPrivs.length === MYSQL_PRIVILEGES.length
        ? "ALL PRIVILEGES"
        : selectedPrivs.join(", ");
    setGrantOpen(false);
    setStreamTitle(`MySQL: Grant Privileges on '${grantDb}' to '${grantUser.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/grants", {
        method: "POST",
        body: { username: grantUser.username, database: grantDb, privileges: privString, host: grantUser.host },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
    }
  };

  const handleRevoke = async () => {
    if (!grantUser || !grantDb) return;
    setGrantOpen(false);
    setStreamTitle(`MySQL: Revoke Privileges on '${grantDb}' from '${grantUser.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/grants/revoke", {
        method: "POST",
        body: { username: grantUser.username, database: grantDb, host: grantUser.host },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
    }
  };

  const openConfigModal = async () => {
    setConfigOpen(true);
    setConfigLoading(true);
    try {
      const res = await ctx.api("/engine/config");
      if (res.ok) {
        const data = await res.json();
        setConfigPath(data.path || "/opt/hostpanel/etc/mysql/my.cnf");
        setConfigContent(data.content || "");
      }
    } catch {
      // ignore
    } finally {
      setConfigLoading(false);
    }
  };

  const saveConfig = async () => {
    setConfigSaving(true);
    try {
      const res = await ctx.api("/engine/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: configContent }),
      });
      if (res.ok) {
        setToast("Configuration saved successfully.");
        setConfigOpen(false);
      } else {
        const err = await res.json();
        setToast(`Error saving config: ${err?.error || "Unknown error"}`);
      }
    } catch (e: any) {
      setToast(`Failed to save config: ${e.message}`);
    } finally {
      setConfigSaving(false);
    }
  };

  const openLogModal = async () => {
    setLogOpen(true);
    setLogLoading(true);
    try {
      const res = await ctx.api(`/engine/logs?lines=${logLines}`);
      if (res.ok) {
        const data = await res.json();
        setLogContent(data.content || "No logs available.");
      }
    } catch {
      // ignore
    } finally {
      setLogLoading(false);
    }
  };

  const filteredDbs = useMemo(() => {
    if (!dbSearch) return databases;
    return databases.filter((d) => d.name.toLowerCase().includes(dbSearch.toLowerCase()));
  }, [databases, dbSearch]);

  const filteredUsers = useMemo(() => {
    if (!userSearch) return users;
    return users.filter((u) => u.username.toLowerCase().includes(userSearch.toLowerCase()));
  }, [users, userSearch]);

  const isRunning = engineStatus?.active === true || engineStatus?.status === "running";

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
            {engineStatus?.version || "MariaDB 11.8"} • Port 3306 • Socket: /opt/hostpanel/run/mysql/mysqld.sock
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexShrink: 0 }}>
          {/* Refresh */}
          <Tooltip title="Refresh Status" arrow>
            <span>
              <IconButton
                size="small"
                onClick={refreshAll}
                disabled={statusLoading || actionLoading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                {statusLoading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon sx={{ fontSize: 18 }} />}
              </IconButton>
            </span>
          </Tooltip>

          {/* Config */}
          <Tooltip title="MySQL Configuration" arrow>
            <span>
              <IconButton
                size="small"
                onClick={openConfigModal}
                disabled={actionLoading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <CodeIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </span>
          </Tooltip>

          {/* Logs */}
          <Tooltip title="Engine Logs" arrow>
            <span>
              <IconButton
                size="small"
                onClick={openLogModal}
                disabled={actionLoading}
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <ListAltIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </span>
          </Tooltip>

          {/* Lifecycle: Start / Stop / Restart */}
          {isRunning ? (
            <>
              <Tooltip title="Restart MySQL" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="warning"
                    onClick={() => runEngineAction("restart")}
                    disabled={actionLoading}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    <RestartAltIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="Stop MySQL" arrow>
                <span>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => runEngineAction("stop")}
                    disabled={actionLoading}
                    sx={{ border: "1px solid", borderColor: "divider" }}
                  >
                    <StopIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </span>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Start MySQL Engine" arrow>
              <span>
                <IconButton
                  size="small"
                  color="success"
                  onClick={() => runEngineAction("start")}
                  disabled={actionLoading}
                  sx={{ border: "1px solid", borderColor: "success.main", bgcolor: (t) => alpha(t.palette.success.main, 0.1) }}
                >
                  <PlayArrowIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </span>
            </Tooltip>
          )}

          {/* Primary Action Buttons */}
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => setCreateDbOpen(true)}
            sx={{ ml: 1, whiteSpace: "nowrap" }}
          >
            New Database
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<PersonAddIcon />}
            onClick={() => setCreateUserOpen(true)}
            sx={{ whiteSpace: "nowrap" }}
          >
            New User
          </Button>
        </Stack>
      </Stack>

      {/* Overview Stat Cards */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>DAEMON STATUS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {isRunning ? "Online" : "Offline"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              PID: {engineStatus?.pid || 0} • Uptime: {engineStatus?.uptime || "0s"}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>ENGINE VERSION</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {engineStatus?.version || "MariaDB 11.8"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Port: 3306 • Socket: /opt/hostpanel/run/mysql/mysqld.sock
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>DATABASES & USERS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {databases.length} DBs / {users.length} Users
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Active Sessions: {engineStatus?.connections ?? 0}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Tabs */}
      <Paper>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}>
          <Tab value="databases" label={`Databases (${databases.length})`} />
          <Tab value="users" label={`Users & Privileges (${users.length})`} />
          <Tab value="query" label="⚡ SQL Query Browser" />
          <Tab value="service" label="Service & Configuration" />
        </Tabs>

        {/* Tab 1: Databases */}
        {tab === "databases" && (
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <TextField
                size="small"
                placeholder="Search databases..."
                value={dbSearch}
                onChange={(e) => setDbSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ width: { xs: "100%", sm: 280 } }}
              />
              <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={() => setCreateDbOpen(true)}>
                New Database
              </Button>
            </Stack>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Database Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Charset / Collation</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Tables</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredDbs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ py: 3, color: "text.secondary" }}>
                        No databases found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredDbs.map((db) => (
                      <TableRow key={db.name} hover>
                        <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>{db.name}</TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{db.charset || "utf8mb4"}</TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{db.tables_count ?? 0}</TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{db.size_human || "0 B"}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Query Database">
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => {
                                setQueryDb(db.name);
                                setTab("query");
                              }}
                            >
                              <TerminalIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Drop Database">
                            <IconButton size="small" color="error" onClick={() => handleDropDb(db.name)}>
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

        {/* Tab 2: Users & Privileges */}
        {tab === "users" && (
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <TextField
                size="small"
                placeholder="Search users..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ width: { xs: "100%", sm: 280 } }}
              />
              <Button variant="contained" size="small" startIcon={<PersonAddIcon />} onClick={() => setCreateUserOpen(true)}>
                New User
              </Button>
            </Stack>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Username</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Allowed Host</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center" sx={{ py: 3, color: "text.secondary" }}>
                        No custom database users found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((u) => (
                      <TableRow key={`${u.username}@${u.host}`} hover>
                        <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>{u.username}</TableCell>
                        <TableCell sx={{ fontFamily: MONO, color: "text.secondary" }}>{u.host}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Grant Privileges">
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() => {
                                setGrantUser(u);
                                setGrantOpen(true);
                              }}
                            >
                              <SecurityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Change Password">
                            <IconButton
                              size="small"
                              color="warning"
                              onClick={() => {
                                setTargetUser(u);
                                setPasswordOpen(true);
                              }}
                            >
                              <VpnKeyIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Drop User">
                            <IconButton size="small" color="error" onClick={() => handleDropUser(u)}>
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

        {/* Tab 3: SQL Query Browser */}
        {tab === "query" && (
          <Box sx={{ p: 2 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              {/* Left Side: DB & Table Explorer */}
              <Box sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0 }}>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    Target Database
                  </Typography>
                  <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <Select value={queryDb} onChange={(e) => setQueryDb(e.target.value)}>
                      {databases.map((d) => (
                        <MenuItem key={d.name} value={d.name}>
                          {d.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary" }}>
                      TABLES ({tables.length})
                    </Typography>
                    <IconButton size="small" onClick={() => loadTables(queryDb)} disabled={tablesLoading}>
                      <RefreshIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Stack>

                  {tablesLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                      <CircularProgress size={20} />
                    </Box>
                  ) : tables.length === 0 ? (
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block", py: 1 }}>
                      No tables found in {queryDb || "selected database"}.
                    </Typography>
                  ) : (
                    <Box sx={{ maxHeight: 300, overflow: "auto" }}>
                      {tables.map((t) => (
                        <Box
                          key={t.name}
                          onClick={() => {
                            const sampleSql = `SELECT * FROM \`${t.name}\` LIMIT 50;`;
                            setSqlQuery(sampleSql);
                            executeQuery(sampleSql);
                          }}
                          sx={{
                            p: 0.75,
                            borderRadius: 1,
                            cursor: "pointer",
                            "&:hover": { bgcolor: "action.hover" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Stack direction="row" spacing={1} sx={{ alignItems: "center", minWidth: 0 }}>
                            <TableChartIcon sx={{ fontSize: 16, color: "primary.main" }} />
                            <Typography variant="body2" sx={{ fontFamily: MONO, fontSize: "0.8125rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {t.name}
                            </Typography>
                          </Stack>
                          <Typography variant="caption" sx={{ color: "text.secondary", ml: 1, flexShrink: 0 }}>
                            {t.rows} r
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Paper>
              </Box>

              {/* Right Side: Query Editor & Results Grid */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                {/* Shortcuts */}
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap", gap: 0.5 }}>
                  <Chip
                    size="small"
                    label="SHOW TABLES"
                    onClick={() => {
                      setSqlQuery("SHOW TABLES;");
                      executeQuery("SHOW TABLES;");
                    }}
                    sx={{ cursor: "pointer", fontFamily: MONO, fontSize: "0.75rem" }}
                  />
                  <Chip
                    size="small"
                    label="SHOW PROCESSLIST"
                    onClick={() => {
                      setSqlQuery("SHOW FULL PROCESSLIST;");
                      executeQuery("SHOW FULL PROCESSLIST;");
                    }}
                    sx={{ cursor: "pointer", fontFamily: MONO, fontSize: "0.75rem" }}
                  />
                  <Chip
                    size="small"
                    label="SHOW STATUS"
                    onClick={() => {
                      setSqlQuery("SHOW STATUS LIKE '%threads%';");
                      executeQuery("SHOW STATUS LIKE '%threads%';");
                    }}
                    sx={{ cursor: "pointer", fontFamily: MONO, fontSize: "0.75rem" }}
                  />
                </Stack>

                {/* SQL Textarea */}
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  placeholder="Enter SQL statement (e.g. SELECT * FROM users LIMIT 25;)"
                  slotProps={{
                    input: {
                      sx: { fontFamily: MONO, fontSize: "0.875rem", bgcolor: "background.paper" },
                    },
                  }}
                  onKeyDown={(e) => {
                    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                      e.preventDefault();
                      executeQuery();
                    }
                  }}
                />

                <Stack direction="row" spacing={1.5} sx={{ mt: 1.5, mb: 2, alignItems: "center", justifyContent: "space-between" }}>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={queryRunning ? <CircularProgress size={16} color="inherit" /> : <PlayArrowIcon />}
                    onClick={() => executeQuery()}
                    disabled={queryRunning || !queryDb || !sqlQuery.trim()}
                  >
                    Execute Query
                  </Button>

                  {queryResult && queryResult.ok && (
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {queryResult.total_rows ?? (queryResult.rows?.length || 0)} rows • {queryResult.execution_time_ms || 0} ms
                      </Typography>
                      <Button size="small" variant="outlined" startIcon={<DownloadIcon />} onClick={exportResultsCSV}>
                        CSV
                      </Button>
                      <Button size="small" variant="outlined" startIcon={<DownloadIcon />} onClick={exportResultsJSON}>
                        JSON
                      </Button>
                    </Stack>
                  )}
                </Stack>

                {/* Result Display */}
                {queryResult && (
                  <Box>
                    {!queryResult.ok ? (
                      <Alert severity="error" sx={{ fontFamily: MONO }}>
                        {queryResult.error || "Query failed"}
                      </Alert>
                    ) : queryResult.columns && queryResult.columns.length > 0 ? (
                      <Paper variant="outlined">
                        <TableContainer sx={{ maxHeight: 400 }}>
                          <Table size="small" stickyHeader>
                            <TableHead>
                              <TableRow>
                                {queryResult.columns.map((col) => (
                                  <TableCell key={col} sx={{ fontWeight: 700, fontFamily: MONO, fontSize: "0.75rem", bgcolor: "action.hover" }}>
                                    {col}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {queryResult.rows && queryResult.rows.length === 0 ? (
                                <TableRow>
                                  <TableCell colSpan={queryResult.columns.length} align="center" sx={{ py: 3, color: "text.secondary" }}>
                                    Empty result set (0 rows returned).
                                  </TableCell>
                                </TableRow>
                              ) : (
                                (queryResult.rows || [])
                                  .slice(queryPage * queryRowsPerPage, queryPage * queryRowsPerPage + queryRowsPerPage)
                                  .map((row, rIdx) => (
                                    <TableRow key={rIdx} hover>
                                      {row.map((val, cIdx) => (
                                        <TableCell key={cIdx} sx={{ fontFamily: MONO, fontSize: "0.8125rem", whiteSpace: "nowrap" }}>
                                          {val === null ? <em style={{ color: "gray" }}>NULL</em> : String(val)}
                                        </TableCell>
                                      ))}
                                    </TableRow>
                                  ))
                              )}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        {queryResult.rows && queryResult.rows.length > queryRowsPerPage && (
                          <TablePagination
                            component="div"
                            count={queryResult.rows.length}
                            page={queryPage}
                            onPageChange={(_, p) => setQueryPage(p)}
                            rowsPerPage={queryRowsPerPage}
                            onRowsPerPageChange={(e) => {
                              setQueryRowsPerPage(parseInt(e.target.value, 10));
                              setQueryPage(0);
                            }}
                            rowsPerPageOptions={[10, 25, 50, 100]}
                          />
                        )}
                      </Paper>
                    ) : (
                      <Alert severity="success">
                        Query executed successfully in {queryResult.execution_time_ms || 0} ms. (0 columns returned)
                      </Alert>
                    )}
                  </Box>
                )}
              </Box>
            </Stack>
          </Box>
        )}

        {/* Tab 4: Service & Configuration */}
        {tab === "service" && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Isolation & Environment Parameters
            </Typography>
            <Stack spacing={2}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stack spacing={1}>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Configuration File:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/etc/mysql/my.cnf</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Data Directory:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/data/mysql</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Log Directory:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/logs/mysql/mariadb.log</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Unix Domain Socket:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/run/mysql/mysqld.sock</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Box>
        )}
      </Paper>

      {/* Create Database Dialog */}
      <Dialog open={createDbOpen} onClose={() => setCreateDbOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create New Database</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Database Name"
              size="small"
              fullWidth
              value={newDbName}
              onChange={(e) => setNewDbName(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
              placeholder="e.g. app_production"
            />
            <TextField
              select
              label="Character Set"
              size="small"
              fullWidth
              value={newDbCharset}
              onChange={(e) => setNewDbCharset(e.target.value)}
            >
              <MenuItem value="utf8mb4">utf8mb4 (Recommended)</MenuItem>
              <MenuItem value="utf8">utf8</MenuItem>
              <MenuItem value="latin1">latin1</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDbOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateDb} disabled={!newDbName}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Create User Dialog */}
      <Dialog open={createUserOpen} onClose={() => setCreateUserOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create New MySQL User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Username"
              size="small"
              fullWidth
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
              placeholder="e.g. dbuser"
            />
            <TextField
              label="Host"
              size="small"
              fullWidth
              value={newUserHost}
              onChange={(e) => setNewUserHost(e.target.value)}
              helperText="% for any host, localhost for local only"
            />
            <TextField
              label="Password"
              size="small"
              type="password"
              fullWidth
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateUserOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateUser} disabled={!newUsername || !newUserPassword}>
            Create User
          </Button>
        </DialogActions>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={passwordOpen} onClose={() => setPasswordOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Reset Password for {targetUser?.username}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="New Password"
              size="small"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPasswordOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSetPassword} disabled={!newPassword}>
            Save Password
          </Button>
        </DialogActions>
      </Dialog>

      {/* Manage User Privileges Dialog (cPanel Style) */}
      <Dialog open={grantOpen} onClose={() => setGrantOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Manage User Privileges
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Assigning database permissions for user <strong style={{ fontFamily: MONO }}>{grantUser?.username}</strong>@{grantUser?.host}
          </Typography>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 2.5 }}>
          <Stack spacing={2.5}>
            {/* Target Database Selection */}
            <FormControl fullWidth size="small">
              <TextField
                select
                label="Target Database"
                size="small"
                fullWidth
                value={grantDb}
                onChange={(e) => setGrantDb(e.target.value)}
                helperText="Select the database to apply these privileges to"
              >
                {databases.map((db) => (
                  <MenuItem key={db.name} value={db.name}>
                    {db.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>

            {/* Master ALL PRIVILEGES Checkbox and Quick Presets */}
            <Paper
              variant="outlined"
              sx={{
                p: 1.5,
                borderRadius: 1.5,
                bgcolor: (t) => selectedPrivs.length === MYSQL_PRIVILEGES.length ? alpha(t.palette.primary.main, 0.08) : "transparent",
                borderColor: selectedPrivs.length === MYSQL_PRIVILEGES.length ? "primary.main" : "divider",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                gap: 1.5,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPrivs.length === MYSQL_PRIVILEGES.length}
                    indeterminate={selectedPrivs.length > 0 && selectedPrivs.length < MYSQL_PRIVILEGES.length}
                    onChange={(e) => handleAllToggle(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem" }}>
                      ALL PRIVILEGES
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      Grant full administrative and data control over the target database
                    </Typography>
                  </Box>
                }
                sx={{ m: 0 }}
              />

              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 0.5 }}>
                <Chip
                  size="small"
                  label="Select All"
                  onClick={() => setPrivPreset("all")}
                  color={selectedPrivs.length === MYSQL_PRIVILEGES.length ? "primary" : "default"}
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                />
                <Chip
                  size="small"
                  label="Read Only"
                  onClick={() => setPrivPreset("readonly")}
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                />
                <Chip
                  size="small"
                  label="Read / Write"
                  onClick={() => setPrivPreset("readwrite")}
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                />
                <Chip
                  size="small"
                  label="Clear"
                  onClick={() => setPrivPreset("clear")}
                  sx={{ cursor: "pointer" }}
                />
              </Stack>
            </Paper>

            {/* Individual Privileges Checkbox Grid */}
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", letterSpacing: "0.05em", mb: 1, display: "block" }}>
                INDIVIDUAL PRIVILEGES ({selectedPrivs.length} OF {MYSQL_PRIVILEGES.length} SELECTED)
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                  gap: 1,
                  maxHeight: "320px",
                  overflowY: "auto",
                  p: 0.5,
                }}
              >
                {MYSQL_PRIVILEGES.map((priv) => {
                  const isChecked = selectedPrivs.includes(priv.key);
                  return (
                    <Paper
                      key={priv.key}
                      variant="outlined"
                      onClick={() => togglePriv(priv.key)}
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        cursor: "pointer",
                        borderColor: isChecked ? "primary.main" : "divider",
                        bgcolor: (t) => isChecked ? alpha(t.palette.primary.main, 0.06) : "transparent",
                        transition: "all 0.15s ease",
                        "&:hover": { borderColor: "primary.main", bgcolor: "action.hover" },
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Checkbox
                        size="small"
                        checked={isChecked}
                        onChange={() => togglePriv(priv.key)}
                        sx={{ p: 0.25, mr: 0.75, mt: -0.25 }}
                      />
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "0.8125rem", fontFamily: MONO }}>
                          {priv.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.6875rem", display: "block", lineHeight: 1.2 }}>
                          {priv.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 2.5, py: 1.5, justifyContent: "space-between" }}>
          <Button
            color="error"
            variant="outlined"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={handleRevoke}
            disabled={!grantDb}
          >
            Revoke All Privileges
          </Button>

          <Stack direction="row" spacing={1.5}>
            <Button onClick={() => setGrantOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={handleGrant}
              disabled={!grantDb || selectedPrivs.length === 0}
            >
              Save Privileges
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      {/* Config Editor Dialog */}
      <Dialog open={configOpen} onClose={() => setConfigOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit MySQL Configuration ({configPath})</DialogTitle>
        <DialogContent>
          {configLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress size={28} />
            </Box>
          ) : (
            <TextField
              multiline
              rows={15}
              fullWidth
              value={configContent}
              onChange={(e) => setConfigContent(e.target.value)}
              sx={{ mt: 1, fontFamily: MONO }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfigOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={saveConfig} disabled={configSaving || configLoading}>
            {configSaving ? "Saving..." : "Save Configuration"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Logs Dialog */}
      <Dialog open={logOpen} onClose={() => setLogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>MySQL Service Logs</DialogTitle>
        <DialogContent>
          {logLoading ? (
            <CircularProgress size={24} sx={{ my: 3 }} />
          ) : (
            <Paper
              sx={{
                p: 2,
                bgcolor: "grey.900",
                color: "grey.100",
                fontFamily: MONO,
                fontSize: "0.8125rem",
                maxHeight: 400,
                overflow: "auto",
                whiteSpace: "pre-wrap",
              }}
            >
              {logContent}
            </Paper>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Live Stream Operation Terminal Modal */}
      <Dialog
        open={streamModalOpen}
        onClose={() => {
          if (!streamRunning) setStreamModalOpen(false);
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{streamTitle}</DialogTitle>
        <DialogContent>
          <LogPane lines={streamLines} running={streamRunning} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStreamModalOpen(false)} disabled={streamRunning}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification Snackbar */}
      <Snackbar
        open={!!toast}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        message={toast}
      />
    </Box>
  );
}
