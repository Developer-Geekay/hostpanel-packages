#!/bin/bash
# run.sh — negative-test suite for hp-users.
#
# Runs on a developer machine as a NORMAL USER with no side effects. Every
# mutating command is routed through act(), which under HP_OPS_DRYRUN prints
# WOULD-EXEC instead of executing.
#
# Dry-run is honoured only when euid != 0, so this suite cannot be used as a
# probe against a production install — there, the script is always euid 0 via
# sudo and the flag is inert.
#
# This is the only part of the privileged surface that is cheaply testable off
# the server, so it should carry as much of the validation logic as possible.
#
#   ./run.sh          # run all
#   ./run.sh -v       # show actual output on failure

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-users"
# Point the ops script at the repo copy of the shared bash library.
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
export HP_HOME_ROOT="$(mktemp -d)/home"
mkdir -p "$HP_HOME_ROOT"

PASS=0; FAIL=0

# expect <description> <expected-exit> <verb> [args...]
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

# expect_stdin <description> <expected-exit> <stdin> <verb> [args...]
expect_stdin() {
    local desc="$1" want="$2" payload="$3"; shift 3
    local out rc
    out="$(printf '%s\n' "$payload" | "$OPS" "$@" 2>&1)"; rc=$?
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
echo "hp-users negative tests   (dry-run, euid=$(id -u), home root: $HP_HOME_ROOT)"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "get with no args"                              12 get
expect "get with extra args"                           12 get alice bob
expect "create with one arg"                           12 create alice
expect "create with extra args"                        12 create alice /bin/bash extra
expect "delete missing remove-home flag"               12 delete alice
expect "chown-home with extra args"                    12 chown-home alice /home/alice x

echo "── username shape ────────────────────────────────────────────────────────"
expect "uppercase rejected"                            12 get Alice
expect "leading digit rejected"                        12 get 1alice
expect "shell metacharacters rejected"                 12 'get' 'alice;rm -rf /'
expect "command substitution rejected"                 12 'get' 'alice$(id)'
expect "path separator rejected"                       12 'get' 'alice/../root'
expect "over-length name rejected"                     12 get aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
expect "empty name rejected"                           12 get ''

echo "── protected accounts (deny-list) ────────────────────────────────────────"
expect "create root refused"                           14 create root /bin/bash
expect "create hostpanel refused"                      14 create hostpanel /bin/bash
expect "create daemon account (hp-*) refused"          14 create hp-web /bin/bash
expect "delete root refused"                           14 delete root 1
expect "delete ubuntu refused"                         14 delete ubuntu 1
expect "lock root refused"                             14 lock root
expect "set-password on root refused"                  14 set-password root

echo "── shell allow-list ──────────────────────────────────────────────────────"
expect "arbitrary shell rejected"                      12 create newuser /usr/bin/python3
expect "relative shell rejected"                       12 create newuser bash

echo "── remove-home flag ──────────────────────────────────────────────────────"
expect "non-boolean remove-home rejected"              12 delete someuser yes

echo "── path traversal (chown-home) ───────────────────────────────────────────"
expect "literal .. rejected"                           12 chown-home someuser "$HP_HOME_ROOT/x/../../etc"
expect "absolute path outside root rejected"           12 chown-home someuser /etc
expect "relative path rejected"                        12 chown-home someuser home/someuser

# The symlink case: a path that passes the raw prefix check but resolves out.
# This is the test that proves the realpath RE-check, which the '..' test alone
# would not catch.
mkdir -p "$HP_HOME_ROOT/victim"
ln -sfn /etc "$HP_HOME_ROOT/victim/escape" 2>/dev/null
expect "symlink escaping the home root rejected"       12 chown-home someuser "$HP_HOME_ROOT/victim/escape"

echo "── secrets ───────────────────────────────────────────────────────────────"
expect "set-password with no stdin secret rejected"    12 set-password someuser
expect_stdin "unparseable secrets payload yields none"  12 'not-a-pair' set-password someuser

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
