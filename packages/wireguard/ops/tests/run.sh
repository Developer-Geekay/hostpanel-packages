#!/bin/bash
# run.sh — negative and dryrun test suite for hp-wireguard.

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-wireguard"
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
TEMP_BASE="$(mktemp -d)"
export HP_WG_DIR="$TEMP_BASE/etc/wireguard"
export HP_WG_RUN="$TEMP_BASE/run/wireguard"
export HP_WG_LOGS="$TEMP_BASE/logs/wireguard"
# Runtime prefix is a temp dir, so the suite never sees a real installed engine
# and always exercises the not-installed paths.
export HP_WG_RUNTIME="$TEMP_BASE/runtimes/wireguard"
# The bundled binaries come from the checkout rather than the installed layout.
export HP_WG_PKG="$HERE/../.."

mkdir -p "$HP_WG_DIR" "$HP_WG_RUN" "$HP_WG_LOGS"

PASS=0; FAIL=0

expect() {
    local desc="$1" want="$2"; shift 2
    local out rc
    out="$("$OPS" "$@" 2>&1 </dev/null)"; rc=$?
    if [ "$rc" -eq "$want" ]; then
        printf '  \033[32m✓\033[0m %-58s (exit %d)\n' "$desc" "$rc"
        PASS=$((PASS + 1))
    else
        printf '  \033[31m✗\033[0m %-58s (want %d, got %d)\n' "$desc" "$want" "$rc"
        [ "$VERBOSE" = "-v" ] && printf '      %s\n' "$out"
        FAIL=$((FAIL + 1))
    fi
}

echo "Running hp-wireguard validation and dryrun tests..."

# Arity and unknown verbs
expect "no arguments gives usage" 12
expect "unknown verb rejected" 12 "fake-verb"

# Engine verbs
expect "engine-status succeeds" 0 "engine-status"
expect "engine-status rejects extra args" 12 "engine-status" "extra"
expect "engine-install succeeds" 0 "engine-install"
expect "engine-install rejects extra args" 12 "engine-install" "extra"
expect "engine-uninstall succeeds" 0 "engine-uninstall"

# engine-status must report not-installed while the runtime prefix is empty —
# the field the UI keys off to decide whether to offer "Install Engine".
if "$OPS" engine-status 2>/dev/null | grep -q '"installed":false'; then
    printf '  \033[32m✓\033[0m %-58s (exit 0)\n' "engine-status reports installed:false when absent"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "engine-status reports installed:false when absent"
    FAIL=$((FAIL + 1))
fi

# A missing bundled binary is a dependency failure, not a silent skip.
( HP_WG_PKG="$TEMP_BASE/empty" "$OPS" engine-install >/dev/null 2>&1 )
if [ $? -eq 20 ]; then
    printf '  \033[32m✓\033[0m %-58s (exit 20)\n' "engine-install fails when binaries are missing"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "engine-install fails when binaries are missing"
    FAIL=$((FAIL + 1))
fi

# A checksum that is computed but not enforced is worse than none, so prove the
# refusal fires on a tampered binary.
TAMPER="$TEMP_BASE/tampered"
mkdir -p "$TAMPER/bin"
cp "$HERE/../../bin/wg-quick" "$TAMPER/bin/wg-quick"
cp "$HERE/../../bin/wg" "$TAMPER/bin/wg"
printf 'x' >> "$TAMPER/bin/wg"
( HP_WG_PKG="$TAMPER" "$OPS" engine-install >/dev/null 2>&1 )
if [ $? -eq 12 ]; then
    printf '  \033[32m✓\033[0m %-58s (exit 12)\n' "engine-install refuses a sha256 mismatch"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "engine-install refuses a sha256 mismatch"
    FAIL=$((FAIL + 1))
fi

# Server verbs
expect "server-status succeeds" 0 "server-status"
expect "server-config succeeds" 0 "server-config"
expect "server-logs succeeds" 0 "server-logs"
expect "server-start succeeds" 0 "server-start"
expect "server-stop succeeds" 0 "server-stop"
expect "server-restart succeeds" 0 "server-restart"
expect "server-toggle with 1 succeeds" 0 "server-toggle" "1"
expect "server-toggle with 0 succeeds" 0 "server-toggle" "0"
expect "server-toggle with invalid value fails" 12 "server-toggle" "yes"

# Peer verbs
expect "list-peers succeeds" 0 "list-peers"
expect "create-peer with valid name succeeds" 0 "create-peer" "alice"
expect "create-peer duplicate name fails" 13 "create-peer" "alice"
expect "create-peer with invalid name fails" 12 "create-peer" "alice/bad@device"
expect "create-peer with invalid IP fails" 12 "create-peer" "bob" "192.168.1.1"

expect "get-peer-config for created peer succeeds" 0 "get-peer-config" "alice"
expect "get-peer-qr for created peer succeeds" 0 "get-peer-qr" "alice"
expect "get-peer-config for missing peer fails" 10 "get-peer-config" "nonexistent"

expect "delete-peer for created peer succeeds" 0 "delete-peer" "alice"
expect "delete-peer for nonexistent peer fails" 10 "delete-peer" "nonexistent"

# Peer persistence. `wg set` adds a peer to the LIVE interface, but only wg0.conf
# survives a restart. These previously diverged: the peer JSON is pretty-printed
# and the readers required the compact form, so wg0.conf was written with no
# [Peer] blocks and every peer vanished on restart while the panel still listed
# them. Assert on the generated file, not on the JSON that feeds it.
"$OPS" create-peer "persist1" >/dev/null 2>&1 </dev/null
"$OPS" create-peer "persist2" >/dev/null 2>&1 </dev/null

if [ "$(grep -c '^\[Peer\]' "$HP_WG_DIR/wg0.conf" 2>/dev/null || echo 0)" -eq 2 ]; then
    printf '  \033[32m✓\033[0m %-58s (exit 0)\n' "created peers are written into wg0.conf"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "created peers are written into wg0.conf"
    [ "$VERBOSE" = "-v" ] && cat "$HP_WG_DIR/wg0.conf"
    FAIL=$((FAIL + 1))
fi

# Each peer must get its OWN address. allocate_next_ip read the same malformed
# pattern, so it saw no existing peers and handed every client 10.8.0.2.
if grep -q 'AllowedIPs = 10.8.0.2/32' "$HP_WG_DIR/wg0.conf" 2>/dev/null \
   && grep -q 'AllowedIPs = 10.8.0.3/32' "$HP_WG_DIR/wg0.conf" 2>/dev/null; then
    printf '  \033[32m✓\033[0m %-58s (exit 0)\n' "each peer gets a distinct IP"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "each peer gets a distinct IP"
    [ "$VERBOSE" = "-v" ] && grep AllowedIPs "$HP_WG_DIR/wg0.conf"
    FAIL=$((FAIL + 1))
fi

# Deleting must remove the block again, or a revoked client stays authorised
# across the next restart.
"$OPS" delete-peer "persist1" >/dev/null 2>&1 </dev/null
if [ "$(grep -c '^\[Peer\]' "$HP_WG_DIR/wg0.conf" 2>/dev/null || echo 0)" -eq 1 ]; then
    printf '  \033[32m✓\033[0m %-58s (exit 0)\n' "deleted peer is removed from wg0.conf"
    PASS=$((PASS + 1))
else
    printf '  \033[31m✗\033[0m %-58s\n' "deleted peer is removed from wg0.conf"
    FAIL=$((FAIL + 1))
fi

echo "------------------------------------------------------------"
printf "Results: %d passed, %d failed\n" "$PASS" "$FAIL"
[ "$FAIL" -eq 0 ]
