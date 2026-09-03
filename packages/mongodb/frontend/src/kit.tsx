/**
 * Shared presentation kit for package UIs.
 *
 * COPIED into each package, not imported from the shell. Importing would couple
 * a package's build to the shell's source tree, which is exactly what the
 * runtime-mount design removes — a package must be buildable on its own, against
 * its own MUI version, with the shell absent.
 *
 * The duplication is deliberate and bounded: this file is presentation only, it
 * has no behaviour a package could diverge on silently, and a package that wants
 * to look different is free to. If it ever grows logic, that logic belongs in
 * the package's own code, not here.
 *
 * Keep in sync with portald/frontend/src/shell/Panel.tsx.
 */

import { useEffect, useRef } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const MONO =
  '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

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


/** A small uppercase label — the panel's structural voice. */
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

/** A bordered section with an optional header strip and right-hand action. */
export function Panel({
  label,
  action,
  padded = true,
  children,
  sx,
}: {
  label?: React.ReactNode;
  action?: React.ReactNode;
  /** false when the body is a table, which brings its own edge-to-edge padding */
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

/**
 * Label above the control, as plain text.
 *
 * Material's floating notched label is the most dated thing in the library and
 * makes every form taller without adding information.
 */
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

/** Label above, value below — the read-only counterpart to a Field. */
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

/** A coloured dot. Used wherever a row has a binary health state. */
export function Dot({ ok, size = 7 }: { ok: boolean; size?: number }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        bgcolor: ok ? "success.main" : "error.main",
      }}
    />
  );
}

export interface Line {
  stream: "stdout" | "stderr" | "meta";
  text: string;
}

/** Fold a stream event into the line list. */
export function appendEvent(lines: Line[], event: any): Line[] {
  switch (event?.kind) {
    case "log": {
      const text = event.line ?? "";
      if (text.trim().startsWith('{"ok":') || text.trim().startsWith('{"error":')) {
        return lines;
      }
      return [...lines, { stream: event.stream ?? "stdout", text }];
    }
    case "error":
      return [...lines, { stream: "stderr", text: event.message ?? "failed" }];
    case "result":
      return [
        ...lines,
        {
          stream: "meta",
          text: event.ok
            ? `✓ completed (${event.code})`
            : `✗ ${event.code}: ${event.message ?? "failed"}` +
              (event.exit_code !== undefined ? ` [exit ${event.exit_code}]` : ""),
        },
      ];
    default:
      return lines;
  }
}

/**
 * The terminal view: bash output as it arrives.
 *
 * Deliberately not dressed up in Material components. It is terminal output, and
 * the operator's ability to recognise it as such — and to copy it verbatim into
 * a bug report — matters more than visual consistency with the rest of the page.
 */
export function LogPane({ lines, running }: { lines: Line[]; running: boolean }) {
  const endRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const pinned = useRef(true);

  // Follow the tail, but stop the moment the operator scrolls up: yanking the
  // view back down while someone is reading an error is the single most
  // irritating thing a log pane can do.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const onScroll = () => {
      pinned.current = box.scrollHeight - box.scrollTop - box.clientHeight < 40;
    };
    box.addEventListener("scroll", onScroll);
    return () => box.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pinned.current) endRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  if (!lines.length && !running) return null;

  return (
    <Paper
      ref={boxRef}
      role="log"
      aria-live="polite"
      sx={{
        bgcolor: CONSOLE.bg,
        color: CONSOLE.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: MONO,
        fontSize: 12,
        lineHeight: 1.55,
        // Preserve the script's own spacing: bash output is aligned with spaces,
        // and collapsing them turns readable output into a wall of text.
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {lines.map((line, i) => (
        <Box
          key={i}
          sx={{
            color:
              line.stream === "stderr" ? CONSOLE.err
              : line.stream === "meta" ? CONSOLE.dim
              : CONSOLE.fg,
          }}
        >
          {line.text || " "}
        </Box>
      ))}
      {running && <Box sx={{ color: CONSOLE.dim }}>▍running…</Box>}
      <div ref={endRef} />
    </Paper>
  );
}
