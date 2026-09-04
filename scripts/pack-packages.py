#!/usr/bin/env python3
"""
pack-packages.py — Packages each package into a distribution tarball releases/<pkg>.tar.gz
Excludes node_modules, source frontend files (only bundles frontend/dist), __pycache__, etc.
"""
import os
import tarfile
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
PACKAGES_DIR = ROOT_DIR / "packages"
RELEASES_DIR = ROOT_DIR / "releases"

EXCLUDE_PATTERNS = {
    "node_modules",
    "__pycache__",
    ".pytest_cache",
    ".DS_Store",
    "Thumbs.db",
    "main.js.map"
}

def should_exclude(name: str) -> bool:
    for pat in EXCLUDE_PATTERNS:
        if pat in name or name.endswith(".pyc"):
            return True
    return False

def pack_package(pkg_dir: Path, output_tar: Path):
    with tarfile.open(output_tar, "w:gz") as tar:
        # Add manifest.json
        manifest_file = pkg_dir / "manifest.json"
        if manifest_file.is_file():
            tar.add(manifest_file, arcname="manifest.json")

        # Add other root config files
        for extra in ("pyproject.toml", "sudoers", "README.md"):
            extra_path = pkg_dir / extra
            if extra_path.is_file():
                tar.add(extra_path, arcname=extra)

        # Add directories: api, ops, service, bin, config, modules
        for sub in ("api", "ops", "service", "bin", "config", "modules"):
            sub_path = pkg_dir / sub
            if sub_path.is_dir():
                for root, dirs, files in os.walk(sub_path):
                    # Filter out unwanted directories
                    dirs[:] = [d for d in dirs if not should_exclude(d)]
                    for f in files:
                        if should_exclude(f):
                            continue
                        full_path = Path(root) / f
                        rel_path = full_path.relative_to(pkg_dir)
                        tar.add(full_path, arcname=str(rel_path).replace("\\", "/"))

        # Add frontend/dist only (skip frontend source and node_modules)
        dist_path = pkg_dir / "frontend" / "dist"
        if dist_path.is_dir():
            for root, dirs, files in os.walk(dist_path):
                for f in files:
                    if should_exclude(f):
                        continue
                    full_path = Path(root) / f
                    rel_path = full_path.relative_to(pkg_dir)
                    tar.add(full_path, arcname=str(rel_path).replace("\\", "/"))

def sync_catalog():
    catalog_path = ROOT_DIR / "catalog.json"
    if not catalog_path.is_file():
        return
    import json
    with open(catalog_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    pkg_map = {p["name"]: p for p in data.get("packages", [])}
    for pkg_dir in sorted(PACKAGES_DIR.iterdir()):
        if not pkg_dir.is_dir():
            continue
        mfile = pkg_dir / "manifest.json"
        if not mfile.is_file():
            continue
        try:
            with open(mfile, "r", encoding="utf-8") as mf:
                mdata = json.load(mf)
            pname = mdata.get("feature") or pkg_dir.name
            if pname in pkg_map:
                if "version" in mdata:
                    pkg_map[pname]["version"] = mdata["version"]
                if "label" in mdata:
                    pkg_map[pname]["label"] = mdata["label"]
        except Exception:
            pass

    with open(catalog_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")
    print("  [+] Synchronized manifest versions into catalog.json")

def main():
    RELEASES_DIR.mkdir(parents=True, exist_ok=True)
    count = 0

    print("Synchronizing catalog metadata and building package release archives:")
    sync_catalog()
    for pkg_dir in sorted(PACKAGES_DIR.iterdir()):
        if not pkg_dir.is_dir():
            continue
        manifest_file = pkg_dir / "manifest.json"
        if not manifest_file.is_file():
            continue

        pkg_name = pkg_dir.name
        output_tar = RELEASES_DIR / f"{pkg_name}.tar.gz"
        pack_package(pkg_dir, output_tar)
        size_kb = output_tar.stat().st_size / 1024
        print(f"  [+] {pkg_name} -> releases/{pkg_name}.tar.gz ({size_kb:.1f} KB)")
        count += 1

    print(f"\nSuccessfully packed {count} packages into {RELEASES_DIR}")

if __name__ == "__main__":
    main()
