#!/usr/bin/env python3
"""
generate-catalog.py — Scans all packages/*/manifest.json and builds root catalog.json.
"""
import json
import os
from pathlib import Path
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).resolve().parent.parent
PACKAGES_DIR = ROOT_DIR / "packages"
OUTPUT_FILE = ROOT_DIR / "catalog.json"

CATEGORIES = {
    "nginx": "Web Server",
    "apache": "Web Server",
    "mysql": "Database",
    "mongodb": "Database",
    "websites": "Hosting",
    "php": "Runtime",
    "nodejs": "Runtime",
    "ftp": "File & Storage",
    "filemanager": "File & Storage",
    "storage": "File & Storage",
    "mail": "Email",
    "dns": "Network",
    "wireguard": "Network & Security",
    "ssh": "System & Access",
    "ssl": "Security",
    "users": "System & Access",
}

def main():
    packages = []
    if not PACKAGES_DIR.is_dir():
        print(f"Error: {PACKAGES_DIR} not found")
        return

    for pkg_dir in sorted(PACKAGES_DIR.iterdir()):
        if not pkg_dir.is_dir():
            continue
        manifest_file = pkg_dir / "manifest.json"
        if not manifest_file.is_file():
            continue

        try:
            with open(manifest_file, "r", encoding="utf-8") as f:
                man = json.load(f)

            pkg_name = man.get("name", pkg_dir.name)
            label = man.get("label", pkg_name.capitalize())
            version = man.get("version", "3.0.0")
            category = CATEGORIES.get(pkg_name, "General")

            desc = f"HostPanel {label} package"
            if pkg_name in ("mysql", "mongodb"):
                desc = f"High-performance {label} database engine package"
            elif pkg_name in ("nginx", "apache"):
                desc = f"Production-grade {label} web server package"
            elif pkg_name == "websites":
                desc = "Host and manage isolated web applications and virtual hosts"
            elif pkg_name == "filemanager":
                desc = "Web-based file browser, syntax-highlighted code editor, and asset manager"
            elif pkg_name == "wireguard":
                desc = "Fast, modern VPN server with automated peer management and QR codes"

            packages.append({
                "name": pkg_name,
                "label": label,
                "version": version,
                "category": category,
                "description": desc,
                "unit": man.get("unit", f"hostpanel-{pkg_name}d.service"),
                "run_as": man.get("run_as", f"hp-{pkg_name}"),
                "has_frontend": (pkg_dir / "frontend").is_dir(),
                "has_service": (pkg_dir / "service").is_dir(),
                "has_ops": (pkg_dir / "ops").is_dir(),
                "manifest_path": f"packages/{pkg_name}/manifest.json",
                "archive_url": f"https://raw.githubusercontent.com/Developer-Geekay/hostpanel-packages/master/releases/{pkg_name}.tar.gz",
                "raw_base_url": f"https://raw.githubusercontent.com/Developer-Geekay/hostpanel-packages/master/packages/{pkg_name}"
            })
            print(f"  [+] {pkg_name} ({version}) - {category}")
        except Exception as e:
            print(f"  [-] Error reading {manifest_file}: {e}")

    catalog_data = {
        "schema_version": "1.0",
        "repository": "Developer-Geekay/hostpanel-packages",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total_packages": len(packages),
        "packages": packages
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(catalog_data, f, indent=2)

    print(f"\nSuccessfully generated {OUTPUT_FILE} with {len(packages)} packages.")

if __name__ == "__main__":
    main()
