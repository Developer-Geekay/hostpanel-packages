# HostPanel Packages Repository (`hostpanel-packages`)

Official ecosystem repository containing all plugin packages and services for **HostPanel v3**.

Each package in this repository is completely self-contained with its own API backend, frontend micro-UI, systemd service unit, isolated configuration, and privileged ops runner.

---

## 📦 Included Packages (15)

| Package | Category | Version | Description |
| :--- | :--- | :--- | :--- |
| **`nginx`** | Web Server | `3.0.0` | High-performance edge reverse proxy and web server |
| **`apache`** | Web Server | `3.0.0` | Production-grade Apache HTTP Server with 118 dynamic modules |
| **`mysql`** | Database | `3.0.0` | MariaDB / MySQL database engine management |
| **`mongodb`** | Database | `3.0.0` | MongoDB NoSQL database engine management |
| **`websites`** | Hosting | `3.0.0` | Virtual host management, domain routing, and hybrid proxies |
| **`php`** | Runtime | `3.0.0` | Multi-version PHP runtime management and FPM pools |
| **`nodejs`** | Runtime | `3.0.0` | Node.js process management, reverse proxies, and deployments |
| **`filemanager`** | File & Storage | `3.0.0` | Web-based file browser, syntax-highlighted editor, and permissions |
| **`ftp`** | File & Storage | `3.0.0` | Pure-FTPd virtual user accounts and directory quotas |
| **`storage`** | File & Storage | `3.0.0` | S3-compatible object storage server and bucket manager |
| **`mail`** | Email | `3.0.0` | Postfix & Dovecot mail domains, accounts, and SPF/DKIM |
| **`wireguard`** | Network & Security | `3.0.0` | Fast, modern VPN server with QR code peer generation |
| **`ssh`** | System & Access | `3.0.0` | Jailed SSH user accounts, keys, and session control |
| **`ssl`** | Security | `3.0.0` | Automated Let's Encrypt certificates and custom SSL |
| **`users`** | System & Access | `3.0.0` | Linux system users, quotas, and shell isolation |

---

## 🏗️ Package Anatomy

Every package follows the standard HostPanel v3 isolated package layout:

```text
packages/<slug>/
├── manifest.json         # Package metadata, permissions, routes, and nav entry
├── pyproject.toml        # Python package definitions
├── api/                  # FastAPI microservice running on loopback (9100-9199)
├── ops/                  # Root-owned bash script (hp-<pkg>) handling privileged tasks
├── service/              # Systemd unit template (hostpanel-<pkg>d.service)
├── frontend/             # Micro-frontend React + TypeScript bundle
│   └── dist/main.js      # Pre-compiled bundle loaded dynamically by HostPanel Core
└── config/               # Default isolated configurations
```

---

## 🛠️ Scripts & Tools

* **Generate Catalog Index**:
  ```bash
  python scripts/generate-catalog.py
  ```
  Scans all `packages/*/manifest.json` and updates `catalog.json`.

* **Build All Frontends**:
  ```bash
  scripts/build-all-frontends.sh
  ```
