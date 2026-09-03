import React, { useEffect, useRef } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const MONO = {
  fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
};

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
          sx={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "text.secondary",
          }}
        >
          {label}
        </Typography>
        {hint && (
          <Typography
            component="span"
            sx={{ fontSize: "0.75rem", color: "text.disabled" }}
          >
            — {hint}
          </Typography>
        )}
      </Stack>
      {children}
    </Box>
  );
}

export interface Line {
  stream: "stdout" | "stderr" | "meta";
  text: string;
}

export function LogPane({
  lines,
  running,
  maxHeight = 320,
}: {
  lines: Line[];
  running?: boolean;
  maxHeight?: number;
}) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <Box
      sx={{
        backgroundColor: CONSOLE.bg,
        color: CONSOLE.fg,
        p: 1.5,
        borderRadius: 1,
        fontFamily: MONO.fontFamily,
        fontSize: "0.75rem",
        maxHeight,
        overflowY: "auto",
        border: "1px solid",
        borderColor: CONSOLE.rule,
      }}
    >
      {lines.length === 0 ? (
        <Typography sx={{ color: CONSOLE.dim, fontSize: "0.75rem", fontStyle: "italic" }}>
          {running ? "Waiting for stream output..." : "No log entries available."}
        </Typography>
      ) : (
        lines.map((l, i) => (
          <Box
            key={i}
            sx={{
              color: l.stream === "stderr" ? CONSOLE.err : l.stream === "meta" ? CONSOLE.accent : CONSOLE.fg,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              lineHeight: 1.4,
            }}
          >
            {l.text}
          </Box>
        ))
      )}
      <div ref={endRef} />
    </Box>
  );
}
