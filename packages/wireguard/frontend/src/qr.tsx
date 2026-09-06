/**
 * Standard ISO/IEC 18004 compliant QR Code Canvas renderer for WireGuard profiles.
 * Generates true binary/byte-mode QR codes that are 100% equivalent to running
 * `qrencode < tunnel.conf` or `qrencode -t ansiutf8 < tunnel.conf`, instantly
 * scannable by the WireGuard mobile app (iOS / Android) and device cameras.
 */

import { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import QRCode from "qrcode";

export function QRCodeCanvas({
  text,
  size = 240,
  filename = "wireguard-tunnel",
}: {
  text: string;
  size?: number;
  filename?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !text) return;

    // Render ISO/IEC 18004 compliant QR code directly onto the canvas
    QRCode.toCanvas(
      canvas,
      text,
      {
        width: size,
        margin: 2, // Standard quiet zone for crisp edge detection
        errorCorrectionLevel: "M", // 15% error recovery: optimal balance of high module contrast and scan reliability
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      },
      (err) => {
        if (err) {
          console.error("QR Code generation error:", err);
          setError(err.message || "Failed to generate QR code");
        } else {
          setError(null);
        }
      }
    );
  }, [text, size]);

  const handleDownloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.png`;
      a.click();
    } catch (e) {
      console.error("Failed to download QR code image", e);
    }
  };

  if (error) {
    return (
      <Box sx={{ p: 2, color: "error.main", textAlign: "center" }}>
        <Typography variant="caption">{error}</Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={1} sx={{ alignItems: "center" }}>
      <Box
        sx={{
          p: 1.5,
          bgcolor: "#ffffff",
          borderRadius: "8px",
          display: "inline-block",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        }}
      >
        <canvas ref={canvasRef} style={{ display: "block" }} />
      </Box>
      <Button
        size="small"
        variant="text"
        startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
        onClick={handleDownloadPng}
        sx={{ fontSize: "0.75rem", textTransform: "none", color: "text.secondary" }}
      >
        Download QR Image (.png)
      </Button>
    </Stack>
  );
}
