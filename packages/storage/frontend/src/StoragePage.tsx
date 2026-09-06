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
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
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
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

import type {
  AccessKey,
  Bucket,
  PackageContext,
  S3Object,
  ServiceMeta,
  StorageSettings,
} from "./types";
import {
  Dot,
  MicroLabel,
  MONO,
  Panel,
} from "./kit";

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
  const [accessKeys, setAccessKeys] = useState<AccessKey[]>([]);
  const [settings, setSettings] = useState<StorageSettings | null>(null);
  const [meta, setMeta] = useState<ServiceMeta | null>(null);

  // Settings tab form state
  const [editStoragePath, setEditStoragePath] = useState("");
  const [editS3Port, setEditS3Port] = useState<number | string>(9000);
  const [savingSettings, setSavingSettings] = useState(false);

  // Search filter
  const [searchFilter, setSearchFilter] = useState("");

  // ── Object Browser state ──────────────────────────────────────────────────
  const [browsingBucket, setBrowsingBucket] = useState<string | null>(null);
  const [browserPrefix, setBrowserPrefix] = useState<string>("");
  const [bucketObjects, setBucketObjects] = useState<S3Object[]>([]);
  const [objectsLoading, setObjectsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ── Modals state ──────────────────────────────────────────────────────────
  // Create Bucket
  const [createBucketOpen, setCreateBucketOpen] = useState(false);
  const [newBucketName, setNewBucketName] = useState("");
  const [newBucketQuota, setNewBucketQuota] = useState(5120);
  const [newBucketPublic, setNewBucketPublic] = useState(false);

  // Delete Bucket
  const [deleteBucketTarget, setDeleteBucketTarget] = useState<Bucket | null>(null);

  // Create Access Key
  const [createKeyOpen, setCreateKeyOpen] = useState(false);
  const [keyLabel, setKeyLabel] = useState("");
  const [keyBucketId, setKeyBucketId] = useState<number | "">("");
  const [createdKeySecret, setCreatedKeySecret] = useState<{ id: string; secret: string } | null>(null);

  // Delete Access Key
  const [deleteKeyTarget, setDeleteKeyTarget] = useState<AccessKey | null>(null);

  // Presigned URL
  const [presignTarget, setPresignTarget] = useState<{ bucket: string; key: string } | null>(null);
  const [presignExpires, setPresignExpires] = useState<number>(3600);
  const [generatedPresignUrl, setGeneratedPresignUrl] = useState<string | null>(null);

  // Delete Object
  const [deleteObjectTarget, setDeleteObjectTarget] = useState<string | null>(null);

  // Guide Sub-tab
  const [guideTab, setGuideTab] = useState(0);

  // ── Data Fetching ─────────────────────────────────────────────────────────
  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [bRes, kRes, sRes, mRes] = await Promise.all([
        ctx.api("/buckets"),
        ctx.api("/keys"),
        ctx.api("/settings"),
        ctx.api("/meta"),
      ]);

      if (bRes.ok) {
        const data = await bRes.json();
        setBuckets(data.buckets || []);
      }
      if (kRes.ok) {
        const data = await kRes.json();
        setAccessKeys(data.keys || []);
      }
      if (sRes.ok) {
        const data = await sRes.json();
        setSettings(data);
        if (data.storage_path) {
          setEditStoragePath((prev) => prev || data.storage_path);
        }
        if (data.s3_port) {
          setEditS3Port((prev) => prev || data.s3_port);
        }
      }
      if (mRes.ok) {
        const data = await mRes.json();
        setMeta(data);
        setEditStoragePath((prev) => prev || data.storage_root || "/data/storage/buckets");
        setEditS3Port((prev) => prev || data.s3_port || 9000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [ctx]);

  const handleSaveSettings = async () => {
    const trimmed = editStoragePath.trim();
    if (!trimmed) {
      setError("Bucket storage root path cannot be empty.");
      return;
    }
    setSavingSettings(true);
    try {
      const res = await ctx.api("/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storage_path: trimmed,
          s3_port: Number(editS3Port) || 9000,
        }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.detail ?? `HTTP ${res.status}`);
      }
      setToast("Storage settings updated successfully.");
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSavingSettings(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Fetch objects when browsing a bucket
  const loadObjects = useCallback(async (bucketName: string, prefix: string = "") => {
    setObjectsLoading(true);
    try {
      const q = new URLSearchParams({ prefix, delimiter: "/" });
      const res = await ctx.api(`/buckets/${bucketName}/objects?${q.toString()}`);
      if (!res.ok) {
        throw new Error(`Failed to list objects in bucket ${bucketName}`);
      }
      const data = await res.json();
      setBucketObjects(data.objects || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setObjectsLoading(false);
    }
  }, [ctx]);

  useEffect(() => {
    if (browsingBucket) {
      loadObjects(browsingBucket, browserPrefix);
    }
  }, [browsingBucket, browserPrefix, loadObjects]);

  // ── Actions: Buckets ──────────────────────────────────────────────────────
  const handleCreateBucket = async () => {
    if (!newBucketName.trim()) return;
    try {
      const res = await ctx.api("/buckets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newBucketName.trim(),
          quota_mb: Number(newBucketQuota) || 5120,
          public_access: newBucketPublic,
        }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.detail ?? `HTTP ${res.status}`);
      }
      setToast(`S3 Bucket '${newBucketName}' created successfully.`);
      setCreateBucketOpen(false);
      setNewBucketName("");
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleDeleteBucket = async () => {
    if (!deleteBucketTarget) return;
    try {
      const res = await ctx.api(`/buckets/${deleteBucketTarget.name}`, { method: "DELETE" });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.detail ?? `HTTP ${res.status}`);
      }
      setToast(`Bucket '${deleteBucketTarget.name}' deleted.`);
      if (browsingBucket === deleteBucketTarget.name) {
        setBrowsingBucket(null);
      }
      setDeleteBucketTarget(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Object Browser ───────────────────────────────────────────────
  const handleStartBrowse = (bucketName: string) => {
    setBrowsingBucket(bucketName);
    setBrowserPrefix("");
    setTabIndex(1);
  };

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !browsingBucket) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("prefix", browserPrefix);
      formData.append("file", file);

      const res = await ctx.api(`/buckets/${browsingBucket}/objects/upload`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.detail ?? `Upload failed`);
      }
      setToast(`Uploaded '${file.name}' to ${browsingBucket}.`);
      loadObjects(browsingBucket, browserPrefix);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDeleteObject = async () => {
    if (!browsingBucket || !deleteObjectTarget) return;
    try {
      const q = new URLSearchParams({ key: deleteObjectTarget });
      const res = await ctx.api(`/buckets/${browsingBucket}/objects?${q.toString()}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete object");
      setToast(`Deleted '${deleteObjectTarget}'`);
      setDeleteObjectTarget(null);
      loadObjects(browsingBucket, browserPrefix);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleToggleObjectAcl = async (obj: S3Object) => {
    if (!browsingBucket) return;
    try {
      const res = await ctx.api(`/buckets/${browsingBucket}/objects/acl`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          object_key: obj.key,
          is_public: !obj.is_public,
        }),
      });
      if (!res.ok) throw new Error("Failed to update access policy");
      setToast(`Object access set to ${!obj.is_public ? "Public" : "Private"}.`);
      loadObjects(browsingBucket, browserPrefix);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleGeneratePresign = async () => {
    if (!presignTarget) return;
    try {
      const res = await ctx.api(`/buckets/${presignTarget.bucket}/objects/presign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          object_key: presignTarget.key,
          expires_in: presignExpires,
        }),
      });
      if (!res.ok) throw new Error("Failed to generate presigned link");
      const data = await res.json();
      setGeneratedPresignUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  // ── Actions: Access Keys ──────────────────────────────────────────────────
  const handleCreateKey = async () => {
    try {
      const res = await ctx.api("/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: keyLabel.trim(),
          bucket_id: keyBucketId === "" ? null : Number(keyBucketId),
        }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.detail ?? `Failed to create key`);
      }
      const data = await res.json();
      setCreatedKeySecret({ id: data.access_key, secret: data.secret_key });
      setKeyLabel("");
      setKeyBucketId("");
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleToggleKeyStatus = async (key: AccessKey) => {
    const nextStatus = key.status === "active" ? "disabled" : "active";
    try {
      const res = await ctx.api(`/keys/${key.access_key}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!res.ok) throw new Error("Failed to update key status");
      setToast(`Access key is now ${nextStatus}.`);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleDeleteKey = async () => {
    if (!deleteKeyTarget) return;
    try {
      const res = await ctx.api(`/keys/${deleteKeyTarget.access_key}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete access key");
      setToast(`Access key '${deleteKeyTarget.access_key}' deleted.`);
      setDeleteKeyTarget(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const filteredBuckets = useMemo(() => {
    if (!searchFilter) return buckets;
    const q = searchFilter.toLowerCase();
    return buckets.filter((b) => b.name.toLowerCase().includes(q));
  }, [buckets, searchFilter]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setToast("Copied to clipboard!");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* ── Header ────────────────────────────────────────────────────────── */}
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
              Object Storage (S3)
            </Typography>
            <Chip
              icon={<Dot ok={true} size={8} />}
              label="S3 Active"
              size="small"
              sx={{ fontWeight: 600, bgcolor: "success.light", color: "success.contrastText" }}
            />
            <Chip
              label={`Port ${meta?.s3_port ?? 9000}`}
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
            AWS S3-compatible object storage with AWS SigV4 protocol, bucket quotas, access keys & object explorer.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<RefreshIcon />}
            onClick={() => refresh()}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<VpnKeyIcon />}
            onClick={() => {
              setCreatedKeySecret(null);
              setCreateKeyOpen(true);
            }}
          >
            New Access Key
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => setCreateBucketOpen(true)}
          >
            Create Bucket
          </Button>
        </Stack>
      </Stack>

      {/* Error alert banner */}
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* ── Top Stat Cards ─────────────────────────────────────────────────── */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
        <Card sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 }, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>S3 BUCKETS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {buckets.length} {buckets.length === 1 ? "Bucket" : "Buckets"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Total isolated buckets
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 }, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>TOTAL OBJECTS</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {settings?.total_objects ?? buckets.reduce((acc, b) => acc + (b.object_count || 0), 0)} Files
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Stored across all S3 buckets
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 }, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>STORAGE USED</MicroLabel>
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: MONO, mb: 0.5 }}>
              {settings?.total_size_formatted ?? "0 B"}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Under /opt/hostpanel/data/storage
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 }, bgcolor: "background.paper" }}>
          <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
            <MicroLabel sx={{ mb: 0.5 }}>S3 SERVICE STATUS</MicroLabel>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 0.5 }}>
              <Dot ok={true} size={10} />
              <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: MONO }}>
                Port {meta?.s3_port ?? 9000}
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              AWS SigV4 REST API Ready
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* ── Main Tab Navigation ────────────────────────────────────────────── */}
      <Paper sx={{ overflow: "hidden" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, val) => setTabIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab
              icon={<FolderIcon fontSize="small" />}
              iconPosition="start"
              label={`S3 Buckets (${buckets.length})`}
            />
            <Tab
              icon={<CloudQueueIcon fontSize="small" />}
              iconPosition="start"
              label={browsingBucket ? `Browser (${browsingBucket})` : "Object Browser"}
            />
            <Tab
              icon={<VpnKeyIcon fontSize="small" />}
              iconPosition="start"
              label={`Access Keys (${accessKeys.length})`}
            />
            <Tab
              icon={<MenuBookIcon fontSize="small" />}
              iconPosition="start"
              label="Connection Guide"
            />
            <Tab
              icon={<SettingsIcon fontSize="small" />}
              iconPosition="start"
              label="Settings & Service"
            />
          </Tabs>
        </Box>

        {/* ── Tab 0: S3 Buckets Table ────────────────────────────────────────── */}
        {tabIndex === 0 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <TextField
                size="small"
                placeholder="Search buckets by name..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                sx={{ width: { xs: "100%", sm: 320 } }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<AddIcon />}
                onClick={() => setCreateBucketOpen(true)}
              >
                New S3 Bucket
              </Button>
            </Stack>

            <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <Table size="small" sx={{ minWidth: 720 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Bucket Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Access Policy</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Storage Quota & Usage</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Objects</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>S3 URI</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
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
                          onClick={() => setCreateBucketOpen(true)}
                        >
                          Create First Bucket
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBuckets.map((bucket) => {
                      const quotaBytes = bucket.quota_mb * 1024 * 1024;
                      const pct = Math.min(100, Math.round((bucket.used_bytes / (quotaBytes || 1)) * 100));
                      return (
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
                              icon={bucket.public_access ? <LockOpenIcon fontSize="small" /> : <LockIcon fontSize="small" />}
                              label={bucket.public_access ? "Public Read" : "Private"}
                              size="small"
                              color={bucket.public_access ? "warning" : "default"}
                              sx={{ fontWeight: 600, fontSize: "0.6875rem" }}
                            />
                          </TableCell>
                          <TableCell sx={{ minWidth: 160 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                              <Typography variant="caption" sx={{ fontFamily: MONO }}>
                                {bucket.used_formatted || "0 B"}
                              </Typography>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontFamily: MONO }}>
                                {bucket.quota_mb} MB ({pct}%)
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={pct}
                              color={pct > 90 ? "error" : pct > 75 ? "warning" : "primary"}
                              sx={{ height: 4, borderRadius: 2 }}
                            />
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO }}>{bucket.object_count ?? 0}</TableCell>
                          <TableCell sx={{ fontFamily: MONO, fontSize: "0.75rem", color: "text.secondary" }}>
                            s3://{bucket.name}
                          </TableCell>
                          <TableCell sx={{ fontSize: "0.8125rem" }}>
                            {formatDate(bucket.created_at)}
                          </TableCell>
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() => handleStartBrowse(bucket.name)}
                              >
                                Browse
                              </Button>
                              <Tooltip title="Delete bucket">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => setDeleteBucketTarget(bucket)}
                                >
                                  <DeleteIcon fontSize="small" />
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
          </Box>
        )}

        {/* ── Tab 1: Interactive Object Browser ──────────────────────────────── */}
        {tabIndex === 1 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <InputLabel>Bucket</InputLabel>
                  <Select
                    value={browsingBucket || ""}
                    label="Bucket"
                    onChange={(e) => {
                      setBrowsingBucket(e.target.value);
                      setBrowserPrefix("");
                    }}
                  >
                    {buckets.map((b) => (
                      <MenuItem key={b.name} value={b.name}>
                        {b.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {browserPrefix && (
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => {
                      const parts = browserPrefix.replace(/\/$/, "").split("/");
                      parts.pop();
                      setBrowserPrefix(parts.length > 0 ? parts.join("/") + "/" : "");
                    }}
                  >
                    Up
                  </Button>
                )}

                <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>
                  s3://{browsingBucket}/{browserPrefix}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleUploadFile}
                />
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<UploadFileIcon />}
                  disabled={!browsingBucket || uploading}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {uploading ? "Uploading..." : "Upload Object"}
                </Button>
              </Stack>
            </Stack>

            {/* Objects table */}
            {!browsingBucket ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <CloudQueueIcon sx={{ fontSize: 48, color: "text.disabled", mb: 1 }} />
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Select a bucket from the dropdown or click "Browse" on the Buckets tab.
                </Typography>
              </Box>
            ) : objectsLoading ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <CircularProgress size={32} />
              </Box>
            ) : (
              <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <Table size="small" sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Access</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Last Modified</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bucketObjects.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                            This bucket prefix is empty.
                          </Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<UploadFileIcon />}
                            onClick={() => fileInputRef.current?.click()}
                          >
                            Upload Object Here
                          </Button>
                        </TableCell>
                      </TableRow>
                    ) : (
                      bucketObjects.map((obj) => (
                        <TableRow key={obj.key} hover>
                          <TableCell>
                            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                              {obj.is_dir ? (
                                <FolderIcon fontSize="small" sx={{ color: "warning.main" }} />
                              ) : (
                                <InsertDriveFileIcon fontSize="small" sx={{ color: "primary.main" }} />
                              )}
                              {obj.is_dir ? (
                                <Button
                                  size="small"
                                  sx={{ textTransform: "none", fontFamily: MONO, fontWeight: 600 }}
                                  onClick={() => setBrowserPrefix(obj.key)}
                                >
                                  {obj.name}
                                </Button>
                              ) : (
                                <Typography variant="body2" sx={{ fontFamily: MONO }}>
                                  {obj.name}
                                </Typography>
                              )}
                            </Stack>
                          </TableCell>
                          <TableCell sx={{ fontFamily: MONO }}>{obj.size_formatted}</TableCell>
                          <TableCell sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                            {obj.content_type}
                          </TableCell>
                          <TableCell>
                            {!obj.is_dir && (
                              <Chip
                                label={obj.is_public ? "Public" : "Private"}
                                size="small"
                                color={obj.is_public ? "warning" : "default"}
                                onClick={() => handleToggleObjectAcl(obj)}
                                sx={{ cursor: "pointer", fontWeight: 600, fontSize: "0.6875rem" }}
                              />
                            )}
                          </TableCell>
                          <TableCell sx={{ fontSize: "0.8125rem" }}>
                            {formatDate(obj.last_modified)}
                          </TableCell>
                          <TableCell align="right">
                            {!obj.is_dir && (
                              <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                                <Tooltip title="Download">
                                  <IconButton
                                    size="small"
                                    onClick={() => {
                                      window.open(
                                        `/api/packages/storage/buckets/${browsingBucket}/objects/download?key=${encodeURIComponent(obj.key)}`,
                                        "_blank",
                                      );
                                    }}
                                  >
                                    <DownloadIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Share Presigned Link">
                                  <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={() => {
                                      setPresignTarget({ bucket: browsingBucket, key: obj.key });
                                      setGeneratedPresignUrl(null);
                                    }}
                                  >
                                    <ShareIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                  <IconButton
                                    size="small"
                                    color="error"
                                    onClick={() => setDeleteObjectTarget(obj.key)}
                                  >
                                    <DeleteIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        )}

        {/* ── Tab 2: S3 Access Keys ──────────────────────────────────────────── */}
        {tabIndex === 2 && (
          <Box sx={{ p: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Access Key IDs and Secret Access Keys for AWS CLI, Boto3, and S3-compatible clients.
              </Typography>
              <Button
                variant="contained"
                size="small"
                startIcon={<AddIcon />}
                onClick={() => {
                  setCreatedKeySecret(null);
                  setCreateKeyOpen(true);
                }}
              >
                Create Access Key
              </Button>
            </Stack>

            <TableContainer sx={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <Table size="small" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Access Key ID</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Label</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Scope / Bucket</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accessKeys.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                          No S3 access keys created yet.
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={() => setCreateKeyOpen(true)}
                        >
                          Generate First Key Pair
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    accessKeys.map((k) => (
                      <TableRow key={k.access_key} hover>
                        <TableCell>
                          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                            <Typography variant="body2" sx={{ fontFamily: MONO, fontWeight: 600 }}>
                              {k.access_key}
                            </Typography>
                            <IconButton
                              size="small"
                              onClick={() => copyToClipboard(k.access_key)}
                            >
                              <ContentCopyIcon fontSize="inherit" />
                            </IconButton>
                          </Stack>
                        </TableCell>
                        <TableCell>{k.label || "\u2014"}</TableCell>
                        <TableCell>
                          {k.bucket_name ? (
                            <Chip label={k.bucket_name} size="small" variant="outlined" />
                          ) : (
                            <Chip label="All Buckets" size="small" color="primary" variant="outlined" />
                          )}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={k.status === "active" ? "Active" : "Disabled"}
                            size="small"
                            color={k.status === "active" ? "success" : "default"}
                            sx={{ fontWeight: 600, fontSize: "0.6875rem" }}
                          />
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.8125rem" }}>
                          {formatDate(k.created_at)}
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end" }}>
                            <Button
                              size="small"
                              variant="outlined"
                              color={k.status === "active" ? "warning" : "success"}
                              onClick={() => handleToggleKeyStatus(k)}
                            >
                              {k.status === "active" ? "Disable" : "Enable"}
                            </Button>
                            <Tooltip title="Delete key">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => setDeleteKeyTarget(k)}
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

        {/* ── Tab 3: Connection Guide ────────────────────────────────────────── */}
        {tabIndex === 3 && (
          <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                S3 Client Integration Details:
              </Typography>
              <Paper variant="outlined" sx={{ p: 1.5, bgcolor: "background.default", fontFamily: MONO, fontSize: "0.8125rem" }}>
                <Box>Endpoint URL: <strong>{meta?.s3_endpoint ?? "http://<server-ip>:9000"}</strong></Box>
                <Box>Region: <strong>us-east-1</strong></Box>
                <Box>Protocol: <strong>HTTP / AWS SigV4</strong></Box>
              </Paper>
            </Box>

            <Tabs
              value={guideTab}
              onChange={(_, v) => setGuideTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
            >
              <Tab label="AWS CLI" />
              <Tab label="Python (boto3)" />
              <Tab label="Node.js (AWS SDK v3)" />
              <Tab label="PHP / Laravel" />
              <Tab label="Cyberduck / Rclone" />
            </Tabs>

            {guideTab === 0 && (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                  Configure your AWS CLI to talk to this HostPanel S3 storage instance:
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: MONO, fontSize: "0.8125rem", overflowX: "auto" }}>
                  <pre style={{ margin: 0 }}>
{`# 1. Configure credentials
aws configure set aws_access_key_id YOUR_ACCESS_KEY
aws configure set aws_secret_access_key YOUR_SECRET_KEY
aws configure set default.region us-east-1

# 2. List buckets
aws --endpoint-url ${meta?.s3_endpoint ?? "http://<server-ip>:9000"} s3 ls

# 3. Copy files to bucket
aws --endpoint-url ${meta?.s3_endpoint ?? "http://<server-ip>:9000"} s3 cp ./file.txt s3://${buckets[0]?.name ?? "my-bucket"}/`}
                  </pre>
                </Paper>
              </Box>
            )}

            {guideTab === 1 && (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                  Use Python's boto3 library to connect to HostPanel S3:
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: MONO, fontSize: "0.8125rem", overflowX: "auto" }}>
                  <pre style={{ margin: 0 }}>
{`import boto3

s3 = boto3.client(
    "s3",
    endpoint_url="${meta?.s3_endpoint ?? "http://<server-ip>:9000"}",
    aws_access_key_id="YOUR_ACCESS_KEY",
    aws_secret_access_key="YOUR_SECRET_KEY",
    region_name="us-east-1",
)

# Upload file
s3.upload_file("photo.jpg", "${buckets[0]?.name ?? "my-bucket"}", "uploads/photo.jpg")

# List objects
response = s3.list_objects_v2(Bucket="${buckets[0]?.name ?? "my-bucket"}")
for item in response.get("Contents", []):
    print(item["Key"], item["Size"])`}
                  </pre>
                </Paper>
              </Box>
            )}

            {guideTab === 2 && (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                  Connect using @aws-sdk/client-s3 for Node.js / TypeScript:
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: MONO, fontSize: "0.8125rem", overflowX: "auto" }}>
                  <pre style={{ margin: 0 }}>
{`import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  endpoint: "${meta?.s3_endpoint ?? "http://<server-ip>:9000"}",
  region: "us-east-1",
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey: "YOUR_SECRET_KEY",
  },
  forcePathStyle: true,
});

// List bucket contents
const res = await client.send(new ListObjectsV2Command({ Bucket: "${buckets[0]?.name ?? "my-bucket"}" }));
console.log(res.Contents);`}
                  </pre>
                </Paper>
              </Box>
            )}

            {guideTab === 3 && (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                  Add this disk configuration in Laravel <code>config/filesystems.php</code>:
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: MONO, fontSize: "0.8125rem", overflowX: "auto" }}>
                  <pre style={{ margin: 0 }}>
{`'hostpanel_s3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => 'us-east-1',
    'bucket' => '${buckets[0]?.name ?? "my-bucket"}',
    'endpoint' => '${meta?.s3_endpoint ?? "http://<server-ip>:9000"}',
    'use_path_style_endpoint' => true,
    'throw' => true,
],`}
                  </pre>
                </Paper>
              </Box>
            )}

            {guideTab === 4 && (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                  Rclone configuration snippet (<code>~/.config/rclone/rclone.conf</code>):
                </Typography>
                <Paper sx={{ p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: MONO, fontSize: "0.8125rem", overflowX: "auto" }}>
                  <pre style={{ margin: 0 }}>
{`[hostpanel-s3]
type = s3
provider = Other
env_auth = false
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
endpoint = ${meta?.s3_endpoint ?? "http://<server-ip>:9000"}
acl = private`}
                  </pre>
                </Paper>
              </Box>
            )}
          </Box>
        )}

        {/* ── Tab 4: Settings & Service ──────────────────────────────────────── */}
        {tabIndex === 4 && (
          <Box sx={{ p: 2 }}>
            <Stack spacing={3} sx={{ maxWidth: 640 }}>
              <Panel label="S3 Storage & Protocol Configuration">
                <Stack spacing={2.5}>
                  <TextField
                    size="small"
                    label="Bucket Storage Root Path"
                    value={editStoragePath}
                    onChange={(e) => setEditStoragePath(e.target.value)}
                    helperText="Filesystem path where S3 bucket directories and objects are stored (e.g. /data/storage/buckets or /opt/hostpanel/data/storage/buckets)"
                    fullWidth
                    sx={{ "& input": { fontFamily: MONO, fontSize: "0.875rem" } }}
                  />
                  <TextField
                    size="small"
                    type="number"
                    label="S3 REST Port"
                    value={editS3Port}
                    onChange={(e) => setEditS3Port(e.target.value)}
                    helperText="Port for incoming AWS S3 REST API calls (Default: 9000)"
                    sx={{ maxWidth: 220 }}
                  />
                  <Box sx={{ pt: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      disabled={savingSettings || !editStoragePath.trim()}
                      onClick={handleSaveSettings}
                      startIcon={savingSettings ? <CircularProgress size={16} color="inherit" /> : <SettingsIcon />}
                    >
                      {savingSettings ? "Saving Settings..." : "Save Settings"}
                    </Button>
                  </Box>
                </Stack>
              </Panel>

              <Panel label="Storage Overview & System Isolation">
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                  HostPanel Object Storage is self-contained with isolated runtime permissions:
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: "0.8125rem", fontFamily: MONO, lineHeight: 1.8 }}>
                  <li>Active Storage Root: <strong>{settings?.storage_path || meta?.storage_root || "/data/storage/buckets"}</strong></li>
                  <li>Total Buckets: <strong>{settings?.bucket_count ?? buckets.length}</strong></li>
                  <li>Total Disk Used: <strong>{settings?.total_size_formatted || "0 B"}</strong> ({settings?.total_objects ?? 0} objects)</li>
                  <li>SQLite Database: /opt/hostpanel/data/storage/storage.db</li>
                  <li>Daemon Service: hostpanel-storaged.service (hp-storage)</li>
                  <li>S3 Protocol: AWS SigV4 Native on port {meta?.s3_port ?? 9000}</li>
                </Box>
              </Panel>
            </Stack>
          </Box>
        )}
      </Paper>

      {/* ── Modal: Create Bucket ───────────────────────────────────────────── */}
      <Dialog open={createBucketOpen} onClose={() => setCreateBucketOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Create S3 Bucket</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              size="small"
              label="Bucket Name"
              placeholder="e.g. static-assets"
              value={newBucketName}
              onChange={(e) => setNewBucketName(e.target.value.toLowerCase().replace(/[^a-z0-9.-]/g, ""))}
              helperText="Only lowercase letters, numbers, hyphens, and periods."
              fullWidth
            />
            <TextField
              size="small"
              type="number"
              label="Storage Quota (MB)"
              value={newBucketQuota}
              onChange={(e) => setNewBucketQuota(Number(e.target.value))}
              helperText="Maximum allowed storage size for this bucket (e.g. 5120 MB = 5 GB)"
              fullWidth
            />
            <FormControlLabel
              control={
                <Switch
                  checked={newBucketPublic}
                  onChange={(e) => setNewBucketPublic(e.target.checked)}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Public Read Access</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Allow anonymous read access without AWS signature.
                  </Typography>
                </Box>
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateBucketOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateBucket} disabled={!newBucketName.trim()}>
            Create Bucket
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Bucket ───────────────────────────────────────────── */}
      <Dialog open={!!deleteBucketTarget} onClose={() => setDeleteBucketTarget(null)}>
        <DialogTitle>Delete S3 Bucket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete bucket <strong>{deleteBucketTarget?.name}</strong>?
            This will permanently remove all stored files and records inside this bucket!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteBucketTarget(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDeleteBucket}>
            Delete Bucket
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Create Access Key ───────────────────────────────────────── */}
      <Dialog open={createKeyOpen} onClose={() => setCreateKeyOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create S3 Access Key</DialogTitle>
        <DialogContent>
          {!createdKeySecret ? (
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField
                size="small"
                label="Key Label / Description"
                placeholder="e.g. WordPress Uploads, Nextcloud Key"
                value={keyLabel}
                onChange={(e) => setKeyLabel(e.target.value)}
                fullWidth
              />
              <FormControl size="small" fullWidth>
                <InputLabel>Bucket Scope</InputLabel>
                <Select
                  value={keyBucketId}
                  label="Bucket Scope"
                  onChange={(e) => setKeyBucketId(e.target.value as any)}
                >
                  <MenuItem value="">
                    <em>All Buckets (Global S3 Access)</em>
                  </MenuItem>
                  {buckets.map((b) => (
                    <MenuItem key={b.id} value={b.id}>
                      {b.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          ) : (
            <Stack spacing={2} sx={{ mt: 1 }}>
              <Alert severity="warning">
                Save your <strong>Secret Access Key</strong> now! For security reasons, it cannot be retrieved again after this dialog is closed.
              </Alert>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: "background.default" }}>
                <Box sx={{ mb: 1.5 }}>
                  <MicroLabel>ACCESS KEY ID</MicroLabel>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography variant="body1" sx={{ fontFamily: MONO, fontWeight: 700 }}>
                      {createdKeySecret.id}
                    </Typography>
                    <IconButton size="small" onClick={() => copyToClipboard(createdKeySecret.id)}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>
                <Box>
                  <MicroLabel>SECRET ACCESS KEY</MicroLabel>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography variant="body1" sx={{ fontFamily: MONO, fontWeight: 700, wordBreak: "break-all" }}>
                      {createdKeySecret.secret}
                    </Typography>
                    <IconButton size="small" onClick={() => copyToClipboard(createdKeySecret.secret)}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>
              </Paper>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          {!createdKeySecret ? (
            <>
              <Button onClick={() => setCreateKeyOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleCreateKey}>
                Generate Key Pair
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={() => setCreateKeyOpen(false)}>
              Done & Closed
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Key ──────────────────────────────────────────────── */}
      <Dialog open={!!deleteKeyTarget} onClose={() => setDeleteKeyTarget(null)}>
        <DialogTitle>Revoke Access Key</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to revoke S3 access key <strong>{deleteKeyTarget?.access_key}</strong>?
            Any applications currently using this key will immediately lose access.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteKeyTarget(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDeleteKey}>
            Revoke Key
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Modal: Share Presigned URL ─────────────────────────────────────── */}
      <Dialog open={!!presignTarget} onClose={() => setPresignTarget(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Share Presigned Download URL</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography variant="body2">
              Generate a time-limited shareable download link for:
              <br />
              <strong style={{ fontFamily: MONO }}>{presignTarget?.key}</strong>
            </Typography>

            <FormControl size="small" fullWidth>
              <InputLabel>Expiration Duration</InputLabel>
              <Select
                value={presignExpires}
                label="Expiration Duration"
                onChange={(e) => setPresignExpires(Number(e.target.value))}
              >
                <MenuItem value={3600}>1 Hour</MenuItem>
                <MenuItem value={86400}>24 Hours (1 Day)</MenuItem>
                <MenuItem value={604800}>7 Days</MenuItem>
                <MenuItem value={0}>Never Expire (Permanent)</MenuItem>
              </Select>
            </FormControl>

            {generatedPresignUrl && (
              <Box>
                <MicroLabel sx={{ mb: 0.5 }}>PRESIGNED URL</MicroLabel>
                <Paper variant="outlined" sx={{ p: 1.5, bgcolor: "background.default" }}>
                  <Typography variant="body2" sx={{ fontFamily: MONO, fontSize: "0.75rem", wordBreak: "break-all" }}>
                    {generatedPresignUrl}
                  </Typography>
                </Paper>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  onClick={() => copyToClipboard(generatedPresignUrl)}
                  sx={{ mt: 1 }}
                >
                  Copy URL
                </Button>
              </Box>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPresignTarget(null)}>Close</Button>
          {!generatedPresignUrl && (
            <Button variant="contained" onClick={handleGeneratePresign}>
              Generate Link
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* ── Modal: Delete Object ───────────────────────────────────────────── */}
      <Dialog open={!!deleteObjectTarget} onClose={() => setDeleteObjectTarget(null)}>
        <DialogTitle>Delete Object</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete object <strong>{deleteObjectTarget}</strong> from {browsingBucket}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteObjectTarget(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDeleteObject}>
            Delete Object
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast notifications */}
      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={() => setToast(null)}
        message={toast}
      />
    </Box>
  );
}
