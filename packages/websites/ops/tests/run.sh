#!/usr/bin/env bash
#
# Negative & arity test suite for hp-websites ops script.
#
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT="$DIR/hp-websites"

export HP_OPS_DRY_RUN=1

pass=0
fail=0

assert_exit() {
    local expected="$1"
    local desc="$2"
    shift 2
    local code=0
    set +e
    "$SCRIPT" "$@" >/dev/null 2>&1
    code=$?
    set -e
    if [ "$code" -eq "$expected" ]; then
        echo "  ✓ $desc (exit $expected)"
        pass=$((pass + 1))
    else
        echo "  ✗ $desc: expected exit $expected, got $code"
        fail=$((fail + 1))
    fi
}

echo ""
echo "hp-websites negative tests (dry-run mode)"
echo ""

echo "── dispatch ──────────────────────────────────────────────────────────────"
assert_exit 12 "unknown verb is rejected" unknown-verb
assert_exit 12 "no verb prints usage"

echo "── engine check ──────────────────────────────────────────────────────────"
assert_exit 0  "engine-check accepts 0 args" engine-check
assert_exit 12 "engine-check with extra args rejected" engine-check extra

echo "── vhost-list ────────────────────────────────────────────────────────────"
assert_exit 0  "vhost-list accepts 0 args" vhost-list
assert_exit 12 "vhost-list with extra args rejected" vhost-list extra

echo "── domain validation ─────────────────────────────────────────────────────"
assert_exit 12 "vhost-get with no args rejected" vhost-get
assert_exit 12 "vhost-delete with no args rejected" vhost-delete
assert_exit 12 "domain with space rejected" vhost-get "bad domain.com"
assert_exit 12 "domain with semicolon rejected" vhost-get "bad;domain.com"
assert_exit 12 "domain with uppercase rejected" vhost-get "BAD.COM"
assert_exit 14 "localhost domain rejected" vhost-get localhost
assert_exit 14 "cpanel domain rejected" vhost-get cpanel
assert_exit 14 "admin domain rejected" vhost-get admin

echo "── vhost create & update ─────────────────────────────────────────────────"
assert_exit 0  "vhost-create accepts valid static vhost" vhost-create example.com "" "/tmp/doc" static
assert_exit 0  "vhost-create accepts valid hybrid vhost" vhost-create example.com "" "/tmp/doc" hybrid_apache 8.3
assert_exit 12 "vhost-create with invalid mode rejected" vhost-create example.com "" "/tmp/doc" invalid_mode
assert_exit 0  "vhost-update accepts valid hybrid vhost" vhost-update example.com "" "/tmp/doc" hybrid_apache 8.3
assert_exit 0  "vhost-delete accepts valid domain" vhost-delete example.com

echo "── SSL & Security operations ─────────────────────────────────────────────"
assert_exit 0  "vhost-ssl-get accepts valid domain" vhost-ssl-get example.com
assert_exit 12 "vhost-ssl-get with no args rejected" vhost-ssl-get
assert_exit 0  "vhost-ssl-selfsigned accepts valid domain" vhost-ssl-selfsigned example.com
assert_exit 0  "vhost-security-get accepts valid domain" vhost-security-get example.com
assert_exit 0  "vhost-security-set accepts valid domain" vhost-security-set example.com
assert_exit 0  "vhost-php-get accepts valid domain" vhost-php-get example.com
assert_exit 0  "vhost-php-set accepts valid domain" vhost-php-set example.com
assert_exit 0  "vhost-htaccess-get accepts valid domain" vhost-htaccess-get example.com
assert_exit 12 "vhost-htaccess-get with no args rejected" vhost-htaccess-get
assert_exit 12 "vhost-htaccess-set with no args rejected" vhost-htaccess-set

echo ""
echo "$pass passed, $fail failed"
[ "$fail" -eq 0 ]
