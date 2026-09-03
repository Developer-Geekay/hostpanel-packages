#!/bin/bash
# run.sh — negative-test suite for hp-nodejs ops helper.
#
# Runs on a developer machine as a normal user with dry-run mode.

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-nodejs"
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
TEMP_ROOT="$(mktemp -d)"
export HP_NODE_ROOT="$TEMP_ROOT/runtimes/node"
export HP_APPS_ROOT="$TEMP_ROOT/data/apps"
export HP_ETC_ROOT="$TEMP_ROOT/etc/nodejs"
export HP_LOGS_ROOT="$TEMP_ROOT/logs/nodejs"
export HP_RUN_ROOT="$TEMP_ROOT/run/nodejs"

mkdir -p "$HP_NODE_ROOT" "$HP_APPS_ROOT" "$HP_ETC_ROOT/apps" "$HP_LOGS_ROOT" "$HP_RUN_ROOT"

PASS=0; FAIL=0

expect() {
    local desc="$1" want="$2"; shift 2
    local out rc
    out="$(bash "$OPS" "$@" 2>&1 </dev/null)"; rc=$?
    if [ "$rc" -eq "$want" ]; then
        printf '  \033[32m✓\033[0m %-58s (exit %d)\n' "$desc" "$rc"
        PASS=$((PASS + 1))
    else
        printf '  \033[31m✗\033[0m %-58s (want %d, got %d)\n' "$desc" "$want" "$rc"
        [ "$VERBOSE" = "-v" ] && printf '      %s\n' "$out"
        FAIL=$((FAIL + 1))
    fi
}

expect_stdin() {
    local desc="$1" want="$2" payload="$3"; shift 3
    local out rc
    out="$(printf '%s\n' "$payload" | bash "$OPS" "$@" 2>&1)"; rc=$?
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
echo "hp-nodejs negative tests   (dry-run, euid=$(id -u))"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "get-app with no args"                          12 get-app
expect "get-app with extra args"                       12 get-app myapp extra
expect "create-app with missing args"                  12 create-app myapp
expect "start-app with no args"                        12 start-app
expect "stop-app with no args"                         12 stop-app
expect "delete-app with no args"                       12 delete-app
expect "get-logs with missing args"                    12 get-logs myapp

echo "── app name validation ───────────────────────────────────────────────────"
expect "uppercase app name rejected"                   12 get-app MyApp
expect "leading dash rejected"                         12 get-app -myapp
expect "shell metacharacters rejected"                 12 get-app 'app;rm -rf /'
expect "empty app name rejected"                       12 get-app ''

echo "── directory path validation ─────────────────────────────────────────────"
expect "relative directory rejected"                   12 create-app myapp relative/path 20 index.js 31000
expect "traversal path rejected"                       12 create-app myapp /tmp/../etc 20 index.js 31000

echo "── port validation ───────────────────────────────────────────────────────"
expect "non-numeric port rejected"                     12 create-app myapp /tmp 20 index.js abc
expect "out of range port rejected"                    12 create-app myapp /tmp 20 index.js 80

echo "── non-existent app ──────────────────────────────────────────────────────"
expect "start non-existent app rejected"               10 start-app non_existent_app
expect "stop non-existent app rejected"                10 stop-app non_existent_app
expect "delete non-existent app rejected"              10 delete-app non_existent_app

echo "── runtimes ──────────────────────────────────────────────────────────────"
expect "install-runtime missing version rejected"      12 install-runtime
expect "invalid runtime version rejected"              12 install-runtime abc

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
