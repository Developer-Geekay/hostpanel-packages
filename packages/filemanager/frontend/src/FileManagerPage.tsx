import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Breadcrumbs,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, type ThemeOptions } from "@mui/material/styles";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LockIcon from "@mui/icons-material/Lock";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";

// Ace Editor
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sh";
import "ace-builds/src-noconflict/mode-nginx";
import "ace-builds/src-noconflict/mode-apache_conf";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-ini";

import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";

import type { PackageContext, FileEntry } from "./types";
import { MONO, Panel } from "./kit";

const DEFAULT_ROOT = "/opt/hostpanel/data/vhosts";

interface QuickLocation {
  id: string;
  label: string;
  path: string;
  icon: string;
}

function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function getAceMode(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  const base = filename.split("/").pop()?.toLowerCase() || "";

  if (base === ".htaccess" || base === "apache2.conf" || base.includes("httpd")) return "apache_conf";
  if (base === "nginx.conf" || ext === "conf") return "nginx";
  if (base === ".env" || base === ".user.ini" || ext === "ini") return "ini";

  switch (ext) {
    case "php":
    case "phtml":
      return "php";
    case "js":
    case "jsx":
    case "mjs":
    case "cjs":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "html":
    case "htm":
    case "svg":
      return "html";
    case "css":
      return "css";
    case "scss":
      return "scss";
    case "json":
    case "lock":
      return "json";
    case "py":
      return "python";
    case "sh":
    case "bash":
    case "zsh":
      return "sh";
    case "sql":
      return "sql";
    case "yaml":
    case "yml":
      return "yaml";
    case "xml":
      return "xml";
    case "md":
      return "markdown";
    default:
      return "text";
  }
}

function isArchiveFile(filename: string): boolean {
  const f = filename.toLowerCase();
  return (
    f.endsWith(".zip") ||
    f.endsWith(".tar.gz") ||
    f.endsWith(".tgz") ||
    f.endsWith(".tar.bz2") ||
    f.endsWith(".tbz2") ||
    f.endsWith(".tar")
  );
}

export function FileManagerPage({ ctx }: { ctx: PackageContext }) {
  const theme = useMemo(() => createTheme((ctx.theme ?? {}) as ThemeOptions), [ctx.theme]);
  return (
    <ThemeProvider theme={theme}>
      <FileManagerBody ctx={ctx} />
    </ThemeProvider>
  );
}

function FileManagerBody({ ctx }: { ctx: PackageContext }) {
  const [currentPath, setCurrentPath] = useState(DEFAULT_ROOT);
  const [pathInput, setPathInput] = useState(DEFAULT_ROOT);
  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [quickLocations, setQuickLocations] = useState<QuickLocation[]>([]);

  // Editor Modal
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingFile, setEditingFile] = useState<string>("");
  const [fileContent, setFileContent] = useState<string>("");
  const [editorLoading, setEditorLoading] = useState(false);

  // Modals for Actions
  const [newFolderOpen, setNewFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const [newFileOpen, setNewFileOpen] = useState(false);
  const [newFileName, setNewFileName] = useState("");

  const [renameOpen, setRenameOpen] = useState(false);
  const [renameTarget, setRenameTarget] = useState<FileEntry | null>(null);
  const [renameNewName, setRenameNewName] = useState("");

  // Permissions (cPanel Matrix)
  const [chmodOpen, setChmodOpen] = useState(false);
  const [chmodTarget, setChmodTarget] = useState<FileEntry | null>(null);
  const [perms, setPerms] = useState({
    uR: true, uW: true, uX: false,
    gR: true, gW: false, gX: false,
    oR: true, oW: false, oX: false,
  });
  const [octalMode, setOctalMode] = useState("0644");

  // Compress / Decompress Modals
  const [compressOpen, setCompressOpen] = useState(false);
  const [compressTarget, setCompressTarget] = useState<FileEntry | null>(null);
  const [archiveName, setArchiveName] = useState("");
  const [archiveType, setArchiveType] = useState("zip");
  const [compressLoading, setCompressLoading] = useState(false);

  const [extractOpen, setExtractOpen] = useState(false);
  const [extractTarget, setExtractTarget] = useState<FileEntry | null>(null);
  const [extractDest, setExtractDest] = useState("");
  const [extractLoading, setExtractLoading] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState<FileEntry | null>(null);

  const [toast, setToast] = useState<{ message: string; severity: "success" | "error" | "info" } | null>(null);

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

  useEffect(() => {
    let cancelled = false;
    json("/quick-locations")
      .then((data: any) => {
        if (!cancelled && data?.locations) {
          setQuickLocations(data.locations);
          if (data.default_root && currentPath === DEFAULT_ROOT && data.default_root !== DEFAULT_ROOT) {
            setCurrentPath(data.default_root);
            setPathInput(data.default_root);
          }
        }
      })
      .catch(() => {
        if (!cancelled) {
          setQuickLocations([
            { id: "home", label: "Home (/home)", path: "/home", icon: "home" },
            { id: "hostpanel", label: "HostPanel (/opt/hostpanel)", path: "/opt/hostpanel", icon: "settings" },
            { id: "root", label: "Root (/)", path: "/", icon: "folder" },
          ]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [json]);

  const loadDirectory = useCallback(
    async (dirPath: string) => {
      setLoading(true);
      try {
        const cleaned = dirPath.startsWith("/") ? dirPath : `/${dirPath}`;
        const data = await json(`/list?path=${encodeURIComponent(cleaned)}`);
        setEntries(data.entries || []);
        setCurrentPath(cleaned);
        setPathInput(cleaned);
      } catch (err: any) {
        showToast(err.message || "Failed to load directory", "error");
        if (dirPath === DEFAULT_ROOT) {
          try {
            const fallbackData = await json("/list");
            if (fallbackData?.entries) {
              setEntries(fallbackData.entries);
              const fallbackPath = fallbackData.path || "/opt/hostpanel";
              setCurrentPath(fallbackPath);
              setPathInput(fallbackPath);
            }
          } catch {
            // ignore fallback error
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [json]
  );

  const renderLocationIcon = (iconName: string) => {
    switch (iconName) {
      case "language":
        return <LanguageIcon sx={{ fontSize: 16 }} />;
      case "home":
        return <HomeIcon sx={{ fontSize: 16 }} />;
      case "settings":
        return <SettingsIcon sx={{ fontSize: 16 }} />;
      case "storage":
        return <StorageIcon sx={{ fontSize: 16 }} />;
      default:
        return <FolderIcon sx={{ fontSize: 16 }} />;
    }
  };

  useEffect(() => {
    loadDirectory(currentPath);
  }, [loadDirectory, currentPath]);

  // Breadcrumbs calculation
  const pathSegments = useMemo(() => {
    const parts = currentPath.split("/").filter(Boolean);
    const result = [{ name: "root (/)", fullPath: "/" }];
    let acc = "";
    for (const p of parts) {
      acc += `/${p}`;
      result.push({ name: p, fullPath: acc });
    }
    return result;
  }, [currentPath]);

  const handleOpenEntry = (entry: FileEntry) => {
    if (entry.is_dir) {
      loadDirectory(entry.path);
    } else if (isArchiveFile(entry.name)) {
      handleOpenExtractModal(entry);
    } else {
      handleOpenFileEditor(entry.path);
    }
  };

  const handleGoUp = () => {
    if (currentPath === "/" || !currentPath) return;
    const lastSlash = currentPath.lastIndexOf("/");
    const parent = lastSlash > 0 ? currentPath.slice(0, lastSlash) : "/";
    loadDirectory(parent);
  };

  const handleJumpToPath = (e: React.FormEvent) => {
    e.preventDefault();
    if (pathInput.trim()) {
      loadDirectory(pathInput.trim());
    }
  };

  // File Editor
  const handleOpenFileEditor = async (path: string) => {
    setEditingFile(path);
    setEditorLoading(true);
    setEditorOpen(true);
    try {
      const data = await json(`/read?path=${encodeURIComponent(path)}`);
      setFileContent(data.content || "");
    } catch (err: any) {
      showToast(err.message || "Failed to read file", "error");
      setEditorOpen(false);
    } finally {
      setEditorLoading(false);
    }
  };

  const handleSaveFile = async () => {
    setEditorLoading(true);
    try {
      await json("/write", {
        method: "POST",
        body: JSON.stringify({ path: editingFile, content: fileContent }),
      });
      showToast(`Saved ${editingFile.split("/").pop()}`, "success");
      setEditorOpen(false);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to save file", "error");
    } finally {
      setEditorLoading(false);
    }
  };

  // Create Folder
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName) return;
    const base = currentPath === "/" ? "" : currentPath;
    const full = `${base}/${newFolderName.trim()}`;
    try {
      await json("/mkdir", {
        method: "POST",
        body: JSON.stringify({ path: full }),
      });
      showToast(`Folder created: ${newFolderName}`, "success");
      setNewFolderOpen(false);
      setNewFolderName("");
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to create folder", "error");
    }
  };

  // Create File
  const handleCreateFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFileName) return;
    const base = currentPath === "/" ? "" : currentPath;
    const full = `${base}/${newFileName.trim()}`;
    try {
      await json("/write", {
        method: "POST",
        body: JSON.stringify({ path: full, content: "" }),
      });
      showToast(`File created: ${newFileName}`, "success");
      setNewFileOpen(false);
      setNewFileName("");
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to create file", "error");
    }
  };

  // Rename
  const handleRename = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!renameTarget || !renameNewName) return;
    const parent = renameTarget.path.slice(0, renameTarget.path.lastIndexOf("/"));
    const base = parent === "" ? "" : parent;
    const newPath = `${base}/${renameNewName.trim()}`;
    try {
      await json("/move", {
        method: "POST",
        body: JSON.stringify({ source: renameTarget.path, target: newPath }),
      });
      showToast(`Renamed to ${renameNewName}`, "success");
      setRenameOpen(false);
      setRenameTarget(null);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to rename", "error");
    }
  };

  // Chmod Permissions Matrix
  const syncPermsToOctal = (p: typeof perms) => {
    const u = (p.uR ? 4 : 0) + (p.uW ? 2 : 0) + (p.uX ? 1 : 0);
    const g = (p.gR ? 4 : 0) + (p.gW ? 2 : 0) + (p.gX ? 1 : 0);
    const o = (p.oR ? 4 : 0) + (p.oW ? 2 : 0) + (p.oX ? 1 : 0);
    const oct = `0${u}${g}${o}`;
    setOctalMode(oct);
  };

  const syncOctalToPerms = (oct: string) => {
    setOctalMode(oct);
    const digits = oct.replace(/^0+/, "").padStart(3, "0").slice(-3);
    if (digits.length === 3) {
      const u = parseInt(digits[0], 10) || 0;
      const g = parseInt(digits[1], 10) || 0;
      const o = parseInt(digits[2], 10) || 0;
      setPerms({
        uR: Boolean(u & 4), uW: Boolean(u & 2), uX: Boolean(u & 1),
        gR: Boolean(g & 4), gW: Boolean(g & 2), gX: Boolean(g & 1),
        oR: Boolean(o & 4), oW: Boolean(o & 2), oX: Boolean(o & 1),
      });
    }
  };

  const handleOpenChmodModal = (entry: FileEntry) => {
    setChmodTarget(entry);
    syncOctalToPerms(entry.mode || "0644");
    setChmodOpen(true);
  };

  const handleChmodSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chmodTarget || !octalMode) return;
    try {
      await json("/chmod", {
        method: "POST",
        body: JSON.stringify({ path: chmodTarget.path, mode: octalMode.trim() }),
      });
      showToast(`Permissions updated to ${octalMode}`, "success");
      setChmodOpen(false);
      setChmodTarget(null);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to change permissions", "error");
    }
  };

  // Compress
  const handleOpenCompressModal = (entry: FileEntry) => {
    setCompressTarget(entry);
    setArchiveName(`${entry.name}.zip`);
    setArchiveType("zip");
    setCompressOpen(true);
  };

  const handleCompressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!compressTarget || !archiveName) return;
    setCompressLoading(true);
    const base = currentPath === "/" ? "" : currentPath;
    const archivePath = `${base}/${archiveName.trim()}`;
    try {
      await json("/compress", {
        method: "POST",
        body: JSON.stringify({
          source_path: compressTarget.path,
          archive_path: archivePath,
          archive_type: archiveType,
        }),
      });
      showToast(`Created archive ${archiveName}`, "success");
      setCompressOpen(false);
      setCompressTarget(null);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to create archive", "error");
    } finally {
      setCompressLoading(false);
    }
  };

  // Extract
  const handleOpenExtractModal = (entry: FileEntry) => {
    setExtractTarget(entry);
    setExtractDest(currentPath);
    setExtractOpen(true);
  };

  const handleExtractSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!extractTarget || !extractDest) return;
    setExtractLoading(true);
    try {
      await json("/extract", {
        method: "POST",
        body: JSON.stringify({
          archive_path: extractTarget.path,
          target_dir: extractDest.trim(),
        }),
      });
      showToast(`Extracted ${extractTarget.name} successfully`, "success");
      setExtractOpen(false);
      setExtractTarget(null);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to extract archive", "error");
    } finally {
      setExtractLoading(false);
    }
  };

  // Delete
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      await json("/delete", {
        method: "POST",
        body: JSON.stringify({ path: deleteTarget.path }),
      });
      showToast(`Deleted ${deleteTarget.name}`, "success");
      setDeleteTarget(null);
      loadDirectory(currentPath);
    } catch (err: any) {
      showToast(err.message || "Failed to delete", "error");
    }
  };

  const filtered = entries.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* QUICK LOCATIONS JUMP BAR */}
      {quickLocations.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "text.secondary", mr: 0.5 }}>
            Quick Jump:
          </Typography>
          {quickLocations.map((loc) => (
            <Chip
              key={loc.id || loc.path}
              icon={renderLocationIcon(loc.icon)}
              label={loc.label}
              size="small"
              clickable
              variant={currentPath === loc.path ? "filled" : "outlined"}
              color={currentPath === loc.path ? "primary" : "default"}
              onClick={() => loadDirectory(loc.path)}
            />
          ))}
        </Stack>
      )}

      {/* TOP TOOLBAR & DIRECT PATH INPUT */}
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1.5 }}
      >
        <Box component="form" onSubmit={handleJumpToPath} sx={{ display: "flex", flex: 1, minWidth: 320, maxWidth: 650 }}>
          <TextField
            fullWidth
            size="small"
            value={pathInput}
            onChange={(e) => setPathInput(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FolderIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button size="small" type="submit" sx={{ minWidth: 40, px: 1 }}>
                      Go
                    </Button>
                  </InputAdornment>
                ),
                sx: { fontFamily: MONO, fontSize: "0.8125rem" },
              },
            }}
          />
        </Box>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowUpwardIcon />}
            onClick={handleGoUp}
            disabled={currentPath === "/" || !currentPath}
          >
            Up
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<RefreshIcon />}
            onClick={() => loadDirectory(currentPath)}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<CreateNewFolderIcon />}
            onClick={() => setNewFolderOpen(true)}
          >
            New Folder
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<NoteAddIcon />}
            onClick={() => setNewFileOpen(true)}
          >
            New File
          </Button>
        </Stack>
      </Stack>

      {/* BREADCRUMBS */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "0.875rem" }}>
        {pathSegments.map((seg, idx) => (
          <Link
            key={seg.fullPath}
            underline="hover"
            color={idx === pathSegments.length - 1 ? "text.primary" : "inherit"}
            onClick={() => loadDirectory(seg.fullPath)}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: idx === pathSegments.length - 1 ? 700 : 500,
            }}
          >
            {idx === 0 ? <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} /> : null}
            {seg.name}
          </Link>
        ))}
      </Breadcrumbs>

      {/* SEARCH FILTER */}
      <TextField
        size="small"
        placeholder="Filter files and directories..."
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

      {/* FILES TABLE PANEL */}
      <Panel label={`Directory Contents (${filtered.length} items)`} padded={false}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Size</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Permissions</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Owner / Group</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Modified Date</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* PARENT DIRECTORY (..) ROW */}
              {currentPath !== "/" && (
                <TableRow
                  hover
                  onClick={handleGoUp}
                  sx={{ cursor: "pointer", bgcolor: "action.hover" }}
                >
                  <TableCell colSpan={6}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                      <SubdirectoryArrowLeftIcon color="primary" sx={{ fontSize: 20 }} />
                      <Typography sx={{ fontWeight: 700, fontSize: "0.875rem", color: "primary.main" }}>
                        .. (Parent Directory)
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}

              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <CircularProgress size={28} sx={{ mb: 1 }} />
                    <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>Loading files...</Typography>
                  </TableCell>
                </TableRow>
              ) : filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <FolderIcon sx={{ fontSize: 40, color: "text.disabled", mb: 1 }} />
                    <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>Folder is empty</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((e) => (
                  <TableRow key={e.path} hover sx={{ cursor: "pointer" }}>
                    <TableCell onClick={() => handleOpenEntry(e)}>
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                        {e.is_dir ? (
                          <FolderIcon color="primary" sx={{ fontSize: 20 }} />
                        ) : isArchiveFile(e.name) ? (
                          <ArchiveIcon color="warning" sx={{ fontSize: 20 }} />
                        ) : (
                          <InsertDriveFileIcon sx={{ fontSize: 20, color: "text.secondary" }} />
                        )}
                        <Typography sx={{ fontWeight: e.is_dir ? 600 : 400, fontSize: "0.875rem" }}>
                          {e.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem" }}>
                      {e.is_dir ? "—" : formatBytes(e.size)}
                    </TableCell>
                    <TableCell sx={{ fontFamily: MONO, fontSize: "0.8125rem" }}>
                      {e.permissions || e.mode}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                      {e.owner}:{e.group}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                      {e.mtime_iso ? e.mtime_iso.replace("T", " ").slice(0, 19) : "—"}
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                        {!e.is_dir && !isArchiveFile(e.name) && (
                          <Tooltip title="Edit Code">
                            <IconButton size="small" onClick={() => handleOpenFileEditor(e.path)}>
                              <EditIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </Tooltip>
                        )}
                        {isArchiveFile(e.name) && (
                          <Tooltip title="Extract Archive">
                            <IconButton size="small" color="warning" onClick={() => handleOpenExtractModal(e)}>
                              <UnarchiveIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                          </Tooltip>
                        )}
                        <Tooltip title="Compress / Archive">
                          <IconButton size="small" onClick={() => handleOpenCompressModal(e)}>
                            <ArchiveIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Rename / Move">
                          <IconButton
                            size="small"
                            onClick={() => {
                              setRenameTarget(e);
                              setRenameNewName(e.name);
                              setRenameOpen(true);
                            }}
                          >
                            <DriveFileMoveIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Change Permissions (chmod)">
                          <IconButton size="small" onClick={() => handleOpenChmodModal(e)}>
                            <LockIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton size="small" color="error" onClick={() => setDeleteTarget(e)}>
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

      {/* ACE CODE EDITOR DIALOG */}
      <Dialog open={editorOpen} onClose={() => setEditorOpen(false)} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1.5 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
              Editing: {editingFile.split("/").pop()}
            </Typography>
            <Chip
              label={getAceMode(editingFile).toUpperCase()}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: "0.6875rem", height: 20 }}
            />
          </Stack>
          <Typography sx={{ fontFamily: MONO, fontSize: "0.75rem", color: "text.secondary" }}>
            {editingFile}
          </Typography>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <AceEditor
            mode={getAceMode(editingFile)}
            theme="one_dark"
            name="hostpanel-ace-editor"
            value={fileContent}
            onChange={(val) => setFileContent(val)}
            width="100%"
            height="560px"
            fontSize={13}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              useWorker: false,
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 2, py: 1.5 }}>
          <Button onClick={() => setEditorOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSaveFile} disabled={editorLoading}>
            {editorLoading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* cPANEL 3x3 PERMISSIONS MATRIX DIALOG */}
      <Dialog open={chmodOpen} onClose={() => setChmodOpen(false)} maxWidth="sm" fullWidth>
        <Box component="form" onSubmit={handleChmodSubmit}>
          <DialogTitle sx={{ fontWeight: 700 }}>
            Change Permissions: {chmodTarget?.name}
          </DialogTitle>
          <DialogContent dividers>
            <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary", mb: 2 }}>
              Set file system read, write, and execute permissions across User, Group, and Public roles.
            </Typography>

            <Paper variant="outlined" sx={{ p: 1.5, mb: 2.5 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem" }}>Permission Role</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700, fontSize: "0.75rem" }}>Read (4)</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700, fontSize: "0.75rem" }}>Write (2)</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700, fontSize: "0.75rem" }}>Execute (1)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* User / Owner */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.8125rem" }}>User / Owner</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.uR}
                        onChange={(e) => {
                          const next = { ...perms, uR: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.uW}
                        onChange={(e) => {
                          const next = { ...perms, uW: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.uX}
                        onChange={(e) => {
                          const next = { ...perms, uX: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Group */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.8125rem" }}>Group</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.gR}
                        onChange={(e) => {
                          const next = { ...perms, gR: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.gW}
                        onChange={(e) => {
                          const next = { ...perms, gW: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.gX}
                        onChange={(e) => {
                          const next = { ...perms, gX: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* World / Public */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.8125rem" }}>World / Others</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.oR}
                        onChange={(e) => {
                          const next = { ...perms, oR: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.oW}
                        onChange={(e) => {
                          const next = { ...perms, oW: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        size="small"
                        checked={perms.oX}
                        onChange={(e) => {
                          const next = { ...perms, oX: e.target.checked };
                          setPerms(next);
                          syncPermsToOctal(next);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>

            <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
              <TextField
                size="small"
                label="Octal Mode"
                value={octalMode}
                onChange={(e) => syncOctalToPerms(e.target.value)}
                sx={{ width: 140, fontFamily: MONO }}
              />
              <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                Presets:
              </Typography>
              <ButtonGroup size="small" variant="outlined">
                <Button onClick={() => syncOctalToPerms("0644")}>0644 (File)</Button>
                <Button onClick={() => syncOctalToPerms("0755")}>0755 (Dir/Exec)</Button>
                <Button onClick={() => syncOctalToPerms("0600")}>0600 (Private)</Button>
                <Button onClick={() => syncOctalToPerms("0777")}>0777 (Full)</Button>
              </ButtonGroup>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setChmodOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Apply Permissions
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* COMPRESS DIALOG */}
      <Dialog open={compressOpen} onClose={() => setCompressOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleCompressSubmit}>
          <DialogTitle sx={{ fontWeight: 700 }}>
            Compress / Archive: {compressTarget?.name}
          </DialogTitle>
          <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              size="small"
              label="Archive File Name"
              value={archiveName}
              onChange={(e) => setArchiveName(e.target.value)}
            />
            <FormControl fullWidth size="small">
              <InputLabel>Archive Type</InputLabel>
              <Select
                value={archiveType}
                label="Archive Type"
                onChange={(e) => {
                  const t = e.target.value;
                  setArchiveType(t);
                  const base = (compressTarget?.name || "archive").replace(/\.[^/.]+$/, "");
                  if (t === "zip") setArchiveName(`${base}.zip`);
                  else if (t === "tar.gz") setArchiveName(`${base}.tar.gz`);
                  else if (t === "tar.bz2") setArchiveName(`${base}.tar.bz2`);
                  else if (t === "tar") setArchiveName(`${base}.tar`);
                }}
              >
                <MenuItem value="zip">ZIP Archive (.zip)</MenuItem>
                <MenuItem value="tar.gz">GZipped Tar (.tar.gz)</MenuItem>
                <MenuItem value="tar.bz2">BZip2 Tar (.tar.bz2)</MenuItem>
                <MenuItem value="tar">Standard Tar (.tar)</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setCompressOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary" disabled={compressLoading}>
              {compressLoading ? "Compressing..." : "Compress"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* EXTRACT DIALOG */}
      <Dialog open={extractOpen} onClose={() => setExtractOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleExtractSubmit}>
          <DialogTitle sx={{ fontWeight: 700 }}>
            Extract Archive: {extractTarget?.name}
          </DialogTitle>
          <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              size="small"
              label="Destination Directory"
              value={extractDest}
              onChange={(e) => setExtractDest(e.target.value)}
              helperText="Files will be extracted into this destination path"
            />
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setExtractOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="warning" disabled={extractLoading}>
              {extractLoading ? "Extracting..." : "Extract Files"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* NEW FOLDER DIALOG */}
      <Dialog open={newFolderOpen} onClose={() => setNewFolderOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleCreateFolder}>
          <DialogTitle sx={{ fontWeight: 700 }}>Create New Folder</DialogTitle>
          <DialogContent dividers>
            <TextField
              fullWidth
              autoFocus
              size="small"
              label="Folder Name"
              placeholder="my_folder"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setNewFolderOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* NEW FILE DIALOG */}
      <Dialog open={newFileOpen} onClose={() => setNewFileOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleCreateFile}>
          <DialogTitle sx={{ fontWeight: 700 }}>Create New File</DialogTitle>
          <DialogContent dividers>
            <TextField
              fullWidth
              autoFocus
              size="small"
              label="File Name"
              placeholder="index.php"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setNewFileOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* RENAME / MOVE DIALOG */}
      <Dialog open={renameOpen} onClose={() => setRenameOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleRename}>
          <DialogTitle sx={{ fontWeight: 700 }}>Rename / Move</DialogTitle>
          <DialogContent dividers>
            <TextField
              fullWidth
              autoFocus
              size="small"
              label="New Name"
              value={renameNewName}
              onChange={(e) => setRenameNewName(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ px: 2, py: 1.5 }}>
            <Button onClick={() => setRenameOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Rename
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Confirm Deletion</DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
            Are you sure you want to permanently delete <strong>{deleteTarget?.name}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 2, py: 1.5 }}>
          <Button onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
            Delete
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
