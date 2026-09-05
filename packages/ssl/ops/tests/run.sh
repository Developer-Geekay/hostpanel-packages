#!/bin/bash
# run.sh — negative-test suite for hp-ssl.

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-ssl"
chmod +x "$OPS" 2>/dev/null || true

export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
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

echo
echo "hp-ssl negative tests (dry-run, euid=$(id -u))"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── domain validation ─────────────────────────────────────────────────────"
expect "invalid domain with space rejected"            12 get "example .com"
expect "invalid domain with shell rejected"            12 get "example.com;id"
expect "empty domain rejected"                         12 get ""

echo "── arguments ─────────────────────────────────────────────────────────────"
expect "issue-letsencrypt invalid challenge rejected"   12 issue-letsencrypt example.com admin@example.com invalid-challenge
expect "issue-letsencrypt invalid staging rejected"     12 issue-letsencrypt example.com admin@example.com http-01 9
expect "force-https invalid boolean rejected"           12 force-https example.com 5

echo "── engine ────────────────────────────────────────────────────────────────"
expect "engine-status succeeds"                        0 engine-status
expect "engine-install succeeds in dry-run"            0 engine-install
expect "engine-uninstall succeeds in dry-run"          0 engine-uninstall
expect "engine-uninstall invalid mode rejected"        12 engine-uninstall invalid_mode

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
