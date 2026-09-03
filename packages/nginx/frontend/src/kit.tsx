import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

/**
 * The console keeps its own colours in both themes.
 *
 * A terminal that flips to a light background stops reading as a terminal, and
 * the output it carries is written for a dark ground anyway. That makes it the
 * one surface here which must NOT follow the palette: `text.primary` resolves to
 * near-black in light mode, and near-black on this near-black pane is invisible.
 */
export const CONSOLE = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72",
  meta: "#7ee787",
  accent: "#79c0ff",
  rule: "#21262d",
};


export function MicroLabel({ children, sx }: { children: React.ReactNode; sx?: object }) {
  return (
    <Typography
      sx={{
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "text.disabled",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export function Panel({
  label,
  action,
  padded = true,
  children,
  sx,
}: {
  label?: React.ReactNode;
  action?: React.ReactNode;
  padded?: boolean;
  children: React.ReactNode;
  sx?: object;
}) {
  return (
    <Paper sx={{ overflow: "hidden", ...sx }}>
      {(label || action) && (
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.25,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          {typeof label === "string" ? <MicroLabel>{label}</MicroLabel> : label}
          {action}
        </Stack>
      )}
      <Box sx={padded ? { p: 2 } : undefined}>{children}</Box>
    </Paper>
  );
}

export function Field({
  label,
  hint,
  sx,
  children,
}: {
  label: string;
  hint?: string;
  sx?: object;
  children: React.ReactNode;
}) {
  return (
    <Box sx={sx}>
      <Stack direction="row" spacing={0.75} sx={{ alignItems: "baseline", mb: 0.75 }}>
        <Typography
          component="label"
          sx={{ fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" }}
        >
          {label}
        </Typography>
        {hint && (
          <Typography sx={{ fontSize: "0.6875rem", color: "text.disabled" }}>
            {hint}
          </Typography>
        )}
      </Stack>
      {children}
    </Box>
  );
}

export function Readout({
  label,
  value,
  mono = true,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <Box sx={{ minWidth: 0 }}>
      <MicroLabel sx={{ mb: 0.5 }}>{label}</MicroLabel>
      <Typography
        sx={{
          fontFamily: mono ? MONO : undefined,
          fontSize: mono ? "0.75rem" : "0.8125rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
