#!/usr/bin/env bash
set -uo pipefail

SCRIPT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/hp-nginx"
FAILED=0
PASSED=0

pass() { echo "  ✓ $1"; ((PASSED++)); }
fail() { echo "  ✗ $1 (expected: $2, got: $3)"; ((FAILED++)); }

assert_exit() {
  local label="$1"
  local expected="$2"
  shift 2
  local code=0
  bash "$SCRIPT" "$@" >/dev/null 2>&1 || code=$?
  if [ "$code" -eq "$expected" ]; then
    pass "$label (exit $code)"
  else
    fail "$label" "exit $expected" "exit $code"
  fi
}

echo "── Nginx Ops Tests ────────────────────────────────"
assert_exit "no verb prints error" 12
assert_exit "unknown verb rejected" 11 unknown-verb
assert_exit "vhost-get with no args rejected" 12 vhost-get
assert_exit "vhost-delete with no args rejected" 12 vhost-delete
assert_exit "engine-status succeeds" 0 engine-status
assert_exit "vhost-list succeeds" 0 vhost-list
assert_exit "module-list succeeds" 0 module-list
assert_exit "engine-uninstall succeeds" 0 engine-uninstall

echo ""
echo "Results: $PASSED passed, $FAILED failed"
[ "$FAILED" -eq 0 ]
