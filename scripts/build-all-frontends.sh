#!/usr/bin/env bash
set -euo pipefail

echo "========================================================"
echo "  HostPanel Packages - Build All Frontend Bundles"
echo "========================================================"
echo ""

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGES_DIR="$(cd "$SCRIPT_DIR/../packages" && pwd)"

for pkg_dir in "$PACKAGES_DIR"/*; do
    if [ -d "$pkg_dir" ] && [ -f "$pkg_dir/frontend/package.json" ]; then
        pkg_name="$(basename "$pkg_dir")"
        echo ""
        echo "[*] Building $pkg_name frontend..."
        (cd "$pkg_dir/frontend" && npm run build)
    fi
done

echo ""
echo "========================================================"
echo "  All Package Frontends Built Successfully!"
echo "========================================================"
