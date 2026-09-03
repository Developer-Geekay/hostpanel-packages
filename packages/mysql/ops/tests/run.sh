#!/usr/bin/env bash
#
# Tests for packages/mysql/ops/hp-mysql
#
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPS="${SCRIPT_DIR}/../hp-mysql"

PASSED=0
FAILED=0

assert_exit() {
  local desc="$1"
  local expected="$2"
  shift 2
  local output
  local actual=0
  output="$("$@" 2>&1)" || actual=$?
  if [[ "$actual" -eq "$expected" ]]; then
    printf "  \033[32m✓\033[0m %-60s (exit %d)\n" "$desc" "$actual"
    ((PASSED++))
  else
    printf "  \033[31m✗\033[0m %-60s (expected %d, got %d)\n" "$desc" "$expected" "$actual"
    echo "    Output: $output"
    ((FAILED++))
  fi
}

assert_json_field() {
  local desc="$1"
  local field="$2"
  local expected="$3"
  shift 3
  local output
  output="$("$@" 2>/dev/null)" || true
  local actual
  actual="$(echo "$output" | python3 -c "import sys, json; data=json.load(sys.stdin); print(data.get('$field', ''))" 2>/dev/null || echo "")"
  if [[ "$actual" == "$expected" ]]; then
    printf "  \033[32m✓\033[0m %-60s (%s=%s)\n" "$desc" "$field" "$actual"
    ((PASSED++))
  else
    printf "  \033[31m✗\033[0m %-60s (%s: expected '%s', got '%s')\n" "$desc" "$field" "$expected" "$actual"
    ((FAILED++))
  fi
}

echo "── Usage & Input Validation ────────────────────────────────"
assert_exit "no verb prints error" 12 "$OPS"
assert_exit "unknown verb rejected" 11 "$OPS" non-existent-verb
assert_exit "db-list with extra args rejected" 12 "$OPS" db-list extra
assert_exit "db-create with no args rejected" 12 "$OPS" db-create
assert_exit "db-drop with no args rejected" 12 "$OPS" db-drop
assert_exit "db-size with no args rejected" 12 "$OPS" db-size
assert_exit "user-create with no args rejected" 12 "$OPS" user-create
assert_exit "user-drop with no args rejected" 12 "$OPS" user-drop
assert_exit "grant with insufficient args rejected" 12 "$OPS" grant user
assert_exit "revoke with insufficient args rejected" 12 "$OPS" revoke user
assert_exit "table-list with no args rejected" 12 "$OPS" table-list
assert_exit "db-query with no args rejected" 12 "$OPS" db-query

echo "── Name Validation & Security ──────────────────────────────"
assert_exit "leading digit database rejected" 12 "$OPS" db-create "1invalid"
assert_exit "space in database name rejected" 12 "$OPS" db-create "my db"
assert_exit "semicolon injection rejected" 12 "$OPS" db-create "test;drop"
assert_exit "drop protected db 'mysql' forbidden" 14 "$OPS" db-drop "mysql"
assert_exit "drop protected db 'information_schema' forbidden" 14 "$OPS" db-drop "information_schema"
assert_exit "drop protected db 'performance_schema' forbidden" 14 "$OPS" db-drop "performance_schema"
assert_exit "drop protected db 'sys' forbidden" 14 "$OPS" db-drop "sys"
assert_exit "drop protected user 'root' forbidden" 14 "$OPS" user-drop "root"

echo "── Engine Lifecycle Verbs ──────────────────────────────────"
assert_exit "engine-status succeeds" 0 "$OPS" engine-status
assert_json_field "engine-status returns mysql" "engine" "mysql" "$OPS" engine-status
assert_exit "engine-config-get succeeds" 0 "$OPS" engine-config-get
assert_exit "engine-logs succeeds" 0 "$OPS" engine-logs 10

echo
echo "Results: $PASSED passed, $FAILED failed"
[[ "$FAILED" -eq 0 ]]
