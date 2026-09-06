import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert, Box, Button, Card, CardContent, Chip, CircularProgress,
  Dialog, DialogActions, DialogContent, DialogTitle,
  FormControl, IconButton, InputAdornment, MenuItem, Paper, Select,
  Snackbar, Stack, Tab, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Tabs, TextField, Tooltip, Typography,
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
import FolderIcon from "@mui/icons-material/Folder";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import type { CollectionItem, DatabaseItem, EngineStatus, MqlQueryResult, PackageContext, UserItem } from "./types";
import { LogPane, MONO, MicroLabel, appendEvent, type Line } from "./kit";

export function MongoDBPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <MongoDBPageBody ctx={ctx} />
    </ThemeProvider>
  );
}

function MongoDBPageBody({ ctx }: { ctx: PackageContext }) {
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
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [selectedCol, setSelectedCol] = useState<string>("");
  const [colsLoading, setColsLoading] = useState(false);
  const [mqlFilter, setMqlFilter] = useState("{}");
  const [queryLimit, setQueryLimit] = useState(50);
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryResult, setQueryResult] = useState<MqlQueryResult | null>(null);

  // Modals
  const [createDbOpen, setCreateDbOpen] = useState(false);
  const [newDbName, setNewDbName] = useState("");

  const [createColOpen, setCreateColOpen] = useState(false);
  const [newColName, setNewColName] = useState("");

  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserDb, setNewUserDb] = useState("admin");
  const [newUserRoles, setNewUserRoles] = useState("readWrite");

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [targetUser, setTargetUser] = useState<UserItem | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const [grantOpen, setGrantOpen] = useState(false);
  const [grantUser, setGrantUser] = useState<UserItem | null>(null);
  const [grantDb, setGrantDb] = useState("");
  const [grantRole, setGrantRole] = useState("readWrite");

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

  // Load Collections for Selected DB
  const loadCollections = useCallback(async (db: string) => {
    if (!db) return;
    try {
      setColsLoading(true);
      const res = await ctx.api(`/databases/${encodeURIComponent(db)}/collections`);
      if (res.ok) {
        const data = await res.json();
        const cols = data.collections || [];
        setCollections(cols);
        if (cols.length > 0) {
          setSelectedCol(cols[0].name);
        } else {
          setSelectedCol("");
        }
      }
    } catch {
      setCollections([]);
      setSelectedCol("");
    } finally {
      setColsLoading(false);
    }
  }, [ctx]);

  useEffect(() => {
    if (queryDb) {
      loadCollections(queryDb);
    }
  }, [queryDb, loadCollections]);

  const refreshAll = useCallback(() => {
    loadStatus();
    loadDatabases();
    loadUsers();
    if (queryDb) loadCollections(queryDb);
  }, [loadStatus, loadDatabases, loadUsers, loadCollections, queryDb]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  // Execute MQL Query
  const executeQuery = async (customCol?: string, customFilter?: string) => {
    const targetCol = customCol || selectedCol;
    const filter = customFilter || mqlFilter;
    if (!queryDb || !targetCol) {
      setToast("Please select a database and collection.");
      return;
    }
    setQueryRunning(true);
    try {
      const res = await ctx.api(`/databases/${encodeURIComponent(queryDb)}/collections/${encodeURIComponent(targetCol)}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filter: filter.trim() || "{}", limit: queryLimit }),
      });
      const data = await res.json();
      setQueryResult(data);
      if (!data.ok) {
        setToast(`Query Error: ${data.error || "Execution failed"}`);
      }
    } catch (err: any) {
      setQueryResult({ ok: false, error: err?.message || String(err) });
      setToast(`Network error: ${err?.message}`);
    } finally {
      setQueryRunning(false);
    }
  };

  const exportResultsJSON = () => {
    if (!queryResult || !queryResult.documents) return;
    const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(queryResult.documents, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", jsonContent);
    link.setAttribute("download", `${queryDb}_${selectedCol}_documents.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Engine Actions
  const runEngineAction = async (action: "start" | "stop" | "restart" | "reload") => {
    setActionLoading(true);
    setStreamTitle(`MongoDB: ${action.toUpperCase()}`);
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
    setStreamTitle(`MongoDB: Create Database '${newDbName}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/databases", {
        method: "POST",
        body: { name: newDbName },
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
    setStreamTitle(`MongoDB: Drop Database '${name}'`);
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

  const handleCreateCollection = async () => {
    if (!queryDb || !newColName) return;
    setCreateColOpen(false);
    setStreamTitle(`MongoDB: Create Collection '${newColName}' on '${queryDb}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/databases/${encodeURIComponent(queryDb)}/collections`, {
        method: "POST",
        body: { collection: newColName },
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
      setNewColName("");
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadCollections(queryDb);
    }
  };

  const handleDropCollection = async (col: string) => {
    if (!queryDb || !col) return;
    if (!confirm(`Are you sure you want to drop collection '${col}' on database '${queryDb}'?`)) return;
    setStreamTitle(`MongoDB: Drop Collection '${col}' on '${queryDb}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/databases/${encodeURIComponent(queryDb)}/collections/${encodeURIComponent(col)}`, {
        method: "DELETE",
      })) {
        setStreamLines((prev) => appendEvent(prev, event));
      }
    } catch (err: any) {
      setToast(`Error: ${err?.message || err}`);
    } finally {
      setStreamRunning(false);
      loadCollections(queryDb);
    }
  };

  const handleCreateUser = async () => {
    if (!newUsername || !newUserPassword) return;
    setCreateUserOpen(false);
    setStreamTitle(`MongoDB: Create User '${newUsername}' on db '${newUserDb}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/users", {
        method: "POST",
        body: { username: newUsername, password: newUserPassword, database: newUserDb, roles: newUserRoles },
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
    if (!confirm(`Drop user '${user.username}' from db '${user.database}'?`)) return;
    setStreamTitle(`MongoDB: Drop User '${user.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/users/${user.username}?database=${encodeURIComponent(user.database)}`, {
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
    setStreamTitle(`MongoDB: Reset Password for '${targetUser.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run(`/users/${targetUser.username}/password`, {
        method: "POST",
        body: { password: newPassword, database: targetUser.database },
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

  const handleGrant = async () => {
    if (!grantUser || !grantDb) return;
    setGrantOpen(false);
    setStreamTitle(`MongoDB: Set Role on '${grantDb}' for '${grantUser.username}'`);
    setStreamLines([]);
    setStreamRunning(true);
    setStreamModalOpen(true);
    try {
      for await (const event of ctx.run("/grants", {
        method: "POST",
        body: { username: grantUser.username, database: grantDb, roles: grantRole },
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
        setConfigPath(data.path || "/opt/hostpanel/etc/mongodb/mongod.conf");
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
            {engineStatus?.version || "MongoDB 8.0"} • Port 27017 • Socket: /opt/hostpanel/run/mongodb/mongodb-27017.sock
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", gap: 0.75 }}>
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
          <Tooltip title="MongoDB Configuration" arrow>
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
              <Tooltip title="Restart MongoDB" arrow>
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

              <Tooltip title="Stop MongoDB" arrow>
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
            <Tooltip title="Start MongoDB Engine" arrow>
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
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
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

        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>ENGINE VERSION</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {engineStatus?.version || "MongoDB 8.0"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Port: 27017 • Socket: /opt/hostpanel/run/mongodb/mongodb-27017.sock
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel>DATABASES & COLLECTIONS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {databases.length} DBs / {users.length} Users
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Active Connections: {engineStatus?.connections ?? 0}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Tabs */}
      <Paper>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}
        >
          <Tab value="databases" label={`Databases (${databases.length})`} />
          <Tab value="users" label={`Users & Roles (${users.length})`} />
          <Tab value="query" label="⚡ Collections & Documents" />
          <Tab value="service" label="Service & Configuration" />
        </Tabs>

        {/* Tab 1: Databases */}
        {tab === "databases" && (
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
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

            <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <Table size="small" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Database Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredDbs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center" sx={{ py: 3, color: "text.secondary" }}>
                        No MongoDB databases found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredDbs.map((db) => (
                      <TableRow key={db.name} hover>
                        <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>{db.name}</TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{db.size_human || "0 B"}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Query / Explore Documents">
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

        {/* Tab 2: Users & Roles */}
        {tab === "users" && (
          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
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

            <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <Table size="small" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Username</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Auth Database</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Assigned Roles</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 3, color: "text.secondary" }}>
                        No custom MongoDB users found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((u) => (
                      <TableRow key={`${u.username}@${u.database}`} hover>
                        <TableCell sx={{ fontFamily: MONO, fontWeight: 600 }}>{u.username}</TableCell>
                        <TableCell sx={{ fontFamily: MONO, color: "text.secondary" }}>{u.database}</TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{(u.roles || []).join(", ") || "readWrite"}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Set Roles / Privileges">
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

        {/* Tab 3: Document & Query Browser */}
        {tab === "query" && (
          <Box sx={{ p: 2 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              {/* Left Side: DB & Collections Explorer */}
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
                      COLLECTIONS ({collections.length})
                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                      <IconButton size="small" onClick={() => setCreateColOpen(true)} disabled={!queryDb} title="New Collection">
                        <AddIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                      <IconButton size="small" onClick={() => loadCollections(queryDb)} disabled={colsLoading} title="Refresh Collections">
                        <RefreshIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Stack>
                  </Stack>

                  {colsLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                      <CircularProgress size={20} />
                    </Box>
                  ) : collections.length === 0 ? (
                    <Typography variant="caption" sx={{ color: "text.disabled", display: "block", py: 1 }}>
                      No collections found in {queryDb || "database"}.
                    </Typography>
                  ) : (
                    <Box sx={{ maxHeight: 300, overflow: "auto" }}>
                      {collections.map((c) => (
                        <Box
                          key={c.name}
                          onClick={() => {
                            setSelectedCol(c.name);
                            executeQuery(c.name, mqlFilter);
                          }}
                          sx={{
                            p: 0.75,
                            borderRadius: 1,
                            cursor: "pointer",
                            bgcolor: selectedCol === c.name ? "action.selected" : "transparent",
                            "&:hover": { bgcolor: "action.hover" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Stack direction="row" spacing={1} sx={{ alignItems: "center", minWidth: 0 }}>
                            <FolderIcon sx={{ fontSize: 16, color: "secondary.main" }} />
                            <Typography variant="body2" sx={{ fontFamily: MONO, fontSize: "0.8125rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {c.name}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", flexShrink: 0 }}>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              {c.count} doc(s)
                            </Typography>
                            {c.name !== "_hp_init" && (
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDropCollection(c.name);
                                }}
                                sx={{ color: "text.disabled", "&:hover": { color: "error.main" }, p: 0.25 }}
                                title="Drop Collection"
                              >
                                <DeleteIcon sx={{ fontSize: 14 }} />
                              </IconButton>
                            )}
                          </Stack>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Paper>
              </Box>

              {/* Right Side: MQL Filter Editor & Document Inspector */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap", gap: 0.5 }}>
                  <Chip
                    size="small"
                    label="Find All: {}"
                    onClick={() => {
                      setMqlFilter("{}");
                      executeQuery(selectedCol, "{}");
                    }}
                    sx={{ cursor: "pointer", fontFamily: MONO, fontSize: "0.75rem" }}
                  />
                  <Chip
                    size="small"
                    label='{ "status": "active" }'
                    onClick={() => {
                      setMqlFilter('{\n  "status": "active"\n}');
                      executeQuery(selectedCol, '{\n  "status": "active"\n}');
                    }}
                    sx={{ cursor: "pointer", fontFamily: MONO, fontSize: "0.75rem" }}
                  />
                </Stack>

                {/* Filter Textarea */}
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  value={mqlFilter}
                  onChange={(e) => setMqlFilter(e.target.value)}
                  placeholder='Filter documents by MQL criteria (JSON format, e.g. { "type": "admin" })'
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
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={queryRunning ? <CircularProgress size={16} color="inherit" /> : <PlayArrowIcon />}
                      onClick={() => executeQuery()}
                      disabled={queryRunning || !queryDb || !selectedCol}
                    >
                      Find Documents
                    </Button>
                    <FormControl size="small" sx={{ width: 100 }}>
                      <Select value={queryLimit} onChange={(e) => setQueryLimit(Number(e.target.value))}>
                        <MenuItem value={20}>20 docs</MenuItem>
                        <MenuItem value={50}>50 docs</MenuItem>
                        <MenuItem value={100}>100 docs</MenuItem>
                        <MenuItem value={250}>250 docs</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  {queryResult && queryResult.ok && (
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {queryResult.count ?? (queryResult.documents?.length || 0)} total docs • {queryResult.execution_time_ms || 0} ms
                      </Typography>
                      <Button size="small" variant="outlined" startIcon={<DownloadIcon />} onClick={exportResultsJSON}>
                        Export JSON
                      </Button>
                    </Stack>
                  )}
                </Stack>

                {/* Result Display */}
                {queryResult && (
                  <Box>
                    {!queryResult.ok ? (
                      <Alert severity="error" sx={{ fontFamily: MONO }}>
                        {queryResult.error || "Find documents operation failed"}
                      </Alert>
                    ) : queryResult.documents && queryResult.documents.length > 0 ? (
                      <Stack spacing={1.5} sx={{ maxHeight: 450, overflow: "auto" }}>
                        {queryResult.documents.map((doc, idx) => (
                          <Paper key={idx} variant="outlined" sx={{ p: 1.5, position: "relative" }}>
                            <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                              <Tooltip title="Copy Document JSON">
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    navigator.clipboard.writeText(JSON.stringify(doc, null, 2));
                                    setToast("Document JSON copied to clipboard.");
                                  }}
                                >
                                  <ContentCopyIcon sx={{ fontSize: 14 }} />
                                </IconButton>
                              </Tooltip>
                            </Box>
                            <Typography
                              component="pre"
                              sx={{
                                m: 0,
                                fontFamily: MONO,
                                fontSize: "0.8125rem",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                color: "text.primary",
                              }}
                            >
                              {JSON.stringify(doc, null, 2)}
                            </Typography>
                          </Paper>
                        ))}
                      </Stack>
                    ) : (
                      <Alert severity="info">
                        No documents matched filter in collection &apos;{selectedCol}&apos;.
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
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/etc/mongodb/mongod.conf</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Data Directory:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/data/mongodb</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Log Directory:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/logs/mongodb/mongod.log</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Unix Domain Socket:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/run/mongodb/mongodb-27017.sock</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>Runtime Binaries:</Typography>
                    <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>/opt/hostpanel/runtimes/mongodb/bin/mongod</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Box>
        )}
      </Paper>

      {/* Create Database Dialog */}
      <Dialog open={createDbOpen} onClose={() => setCreateDbOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create New MongoDB Database</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Database Name"
              size="small"
              fullWidth
              value={newDbName}
              onChange={(e) => setNewDbName(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
              placeholder="e.g. app_database"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDbOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateDb} disabled={!newDbName}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Create Collection Dialog */}
      <Dialog open={createColOpen} onClose={() => setCreateColOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create Collection in &apos;{queryDb}&apos;</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Collection Name"
              size="small"
              fullWidth
              value={newColName}
              onChange={(e) => setNewColName(e.target.value.replace(/[^a-zA-Z0-9_.-]/g, ""))}
              placeholder="e.g. users, orders, logs"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateColOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateCollection} disabled={!newColName || !queryDb}>
            Create Collection
          </Button>
        </DialogActions>
      </Dialog>

      {/* Create User Dialog */}
      <Dialog open={createUserOpen} onClose={() => setCreateUserOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create New MongoDB User</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Username"
              size="small"
              fullWidth
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
              placeholder="e.g. appuser"
            />
            <TextField
              select
              label="Authentication Database"
              size="small"
              fullWidth
              value={newUserDb}
              onChange={(e) => setNewUserDb(e.target.value)}
            >
              <MenuItem value="admin">admin (Global Auth)</MenuItem>
              {databases.map((d) => (
                <MenuItem key={d.name} value={d.name}>
                  {d.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Initial Roles"
              size="small"
              fullWidth
              value={newUserRoles}
              onChange={(e) => setNewUserRoles(e.target.value)}
            >
              <MenuItem value="readWrite">readWrite</MenuItem>
              <MenuItem value="read">read (Read-Only)</MenuItem>
              <MenuItem value="dbAdmin">dbAdmin</MenuItem>
            </TextField>
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

      {/* Set Roles / Privileges Dialog */}
      <Dialog open={grantOpen} onClose={() => setGrantOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Assign Roles & Database Access</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Assigning roles to user <strong>{grantUser?.username}</strong>
            </Typography>
            <TextField
              select
              label="Target Database"
              size="small"
              fullWidth
              value={grantDb}
              onChange={(e) => setGrantDb(e.target.value)}
            >
              {databases.map((db) => (
                <MenuItem key={db.name} value={db.name}>
                  {db.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Assigned Role"
              size="small"
              fullWidth
              value={grantRole}
              onChange={(e) => setGrantRole(e.target.value)}
            >
              <MenuItem value="readWrite">readWrite</MenuItem>
              <MenuItem value="read">read (Read-Only)</MenuItem>
              <MenuItem value="dbAdmin">dbAdmin</MenuItem>
              <MenuItem value="dbOwner">dbOwner</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGrantOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleGrant} disabled={!grantDb}>
            Assign
          </Button>
        </DialogActions>
      </Dialog>

      {/* Config Editor Dialog */}
      <Dialog open={configOpen} onClose={() => setConfigOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit MongoDB Configuration ({configPath})</DialogTitle>
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
        <DialogTitle>MongoDB Service Logs</DialogTitle>
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
