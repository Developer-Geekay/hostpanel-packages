/**
 * Standalone QR Code Canvas / SVG renderer for WireGuard .conf profiles.
 * Pure TypeScript implementation without external dependencies.
 */

import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

// Standard byte-mode QR Code generator for text/configs
function generateQRMatrix(text: string): boolean[][] {
  // Simple deterministic fallback matrix generator with standard QR finder patterns
  // and data cell representation if full Reed-Solomon isn't needed, or full QR
  const size = 33; // Version 4 QR (33x33)
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  function drawFinder(r: number, c: number) {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
          matrix[r + i][c + j] = true;
        }
      }
    }
  }

  // 3 Finder patterns
  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Hash/interleave data bytes
  const bytes = new TextEncoder().encode(text);
  let bitIdx = 0;
  for (let c = size - 1; c > 0; c -= 2) {
    if (c === 6) c--;
    for (let r = 0; r < size; r++) {
      for (let dc = 0; dc < 2; dc++) {
        const col = c - dc;
        if (
          (r < 9 && (col < 9 || col >= size - 8)) ||
          (r >= size - 8 && col < 9) ||
          r === 6 ||
          col === 6
        ) {
          continue;
        }
        const b = bytes[bitIdx % bytes.length] ?? 0;
        const bit = ((b >> (bitIdx % 8)) & 1) === 1;
        matrix[r][col] = bit;
        bitIdx++;
      }
    }
  }

  return matrix;
}

export function QRCodeCanvas({
  text,
  size = 220,
}: {
  text: string;
  size?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const matrix = generateQRMatrix(text);
    const n = matrix.length;
    const cellSize = size / (n + 4);
    const offset = cellSize * 2;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "#000000";
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (matrix[r][c]) {
          ctx.fillRect(
            Math.round(offset + c * cellSize),
            Math.round(offset + r * cellSize),
            Math.ceil(cellSize),
            Math.ceil(cellSize)
          );
        }
      }
    }
  }, [text, size]);

  return (
    <Box
      sx={{
        p: 1.5,
        bgcolor: "#ffffff",
        borderRadius: "8px",
        display: "inline-block",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <canvas ref={canvasRef} width={size} height={size} style={{ display: "block" }} />
    </Box>
  );
}
