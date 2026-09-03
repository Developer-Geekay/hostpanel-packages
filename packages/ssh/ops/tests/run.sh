#!/bin/bash
# run.sh — negative-test suite for hp-ssh.
#
# Runs on a developer machine as a NORMAL USER with no side effects. Every
# mutating command is routed through act(), which under HP_OPS_DRYRUN prints
# WOULD-EXEC instead of executing.
#
# Dry-run is honoured only when euid != 0, so this suite cannot be used as a
# probe against a production install — there, the script is always euid 0 via
# sudo and the flag is inert.
#
# What this suite does NOT cover: home-directory resolution and the
# authorized_keys/sshd_config.d read/write paths, both of which depend on the
# REAL system account database (`getent passwd` / `/etc/passwd`) that
# hpcore/lib/common.sh's passwd_db() reads unconditionally — there is no
# override hook for it, unlike HP_HOME_ROOT. Every test below either targets a
# username that provably does not exist (require_user_exists correctly fails
# with 10) or is rejected earlier, at the arity/shape/deny-list layer, before
# the script ever needs to know whether the account is real. Exercising the
# actual key-file and sshd_config.d writes needs a provisioned Linux host with
# real accounts and sshd — that is integration testing, not this suite.
#
#   ./run.sh          # run all
#   ./run.sh -v       # show actual output on failure

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-ssh"
# Point the ops script at the repo copy of the shared bash library.
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
export HP_HOME_ROOT="$(mktemp -d)/home"
mkdir -p "$HP_HOME_ROOT"
export HP_SSHD_DROPIN_DIR="$(mktemp -d)/sshd_config.d"
export HP_SSHD_CONFIG="$(mktemp -d)/sshd_config"
export HP_SSHD_SERVICE="ssh"

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

# expect_secrets <description> <expected-exit> <verb> <args...> -- <KEY=VALUE>...
# Builds a NUL-delimited secrets payload the way ops.py's encode_secrets does,
# so the key/comment stdin path is exercised the same way the real API drives it.
expect_secrets() {
    local desc="$1" want="$2" verb="$3"; shift 3
    local -a args=() pairs=()
    while [ $# -gt 0 ] && [ "$1" != "--" ]; do args+=("$1"); shift; done
    shift  # consume --
    pairs=("$@")
    local out rc
    out="$(
        {
            for pair in "${pairs[@]}"; do
                printf '%s\0%s\0' "${pair%%=*}" "${pair#*=}"
            done
        } | "$OPS" "$verb" "${args[@]}" 2>&1
    )"; rc=$?
    if [ "$rc" -eq "$want" ]; then
        printf '  \033[32m✓\033[0m %-58s (exit %d)\n' "$desc" "$rc"
        PASS=$((PASS + 1))
    else
        printf '  \033[31m✗\033[0m %-58s (want %d, got %d)\n' "$desc" "$want" "$rc"
        [ "$VERBOSE" = "-v" ] && printf '      %s\n' "$out"
        FAIL=$((FAIL + 1))
    fi
}

# A REAL ed25519 key, generated for this suite only (test/tmp/test_ed25519 —
# not used anywhere else, carries no access to anything). ssh-keygen validates
# structure, not just shape, so a fabricated base64 blob would be rejected as
# malformed and defeat the test it is meant to support.
ED25519_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAh7uK6lvf5X/ARf1Av2Ja/RNPGnRNcvtIZDtRuBkrS6 test@example"

echo
echo "hp-ssh negative tests   (dry-run, euid=$(id -u))"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "list-keys with no args"                        12 list-keys
expect "list-keys with extra args"                     12 list-keys alice bob
expect "add-key with extra args"                       12 add-key alice extra
expect "remove-key with one arg"                       12 remove-key alice
expect "remove-key with extra args"                    12 remove-key alice SHA256:abc extra
expect "get-password-auth with no args"                12 get-password-auth
expect "set-password-auth missing enabled flag"        12 set-password-auth alice
expect "set-password-auth with extra args"             12 set-password-auth alice 1 extra
expect "sessions with too many args"                   12 sessions alice bob

echo "── username shape ────────────────────────────────────────────────────────"
expect "uppercase rejected"                            12 list-keys Alice
expect "leading digit rejected"                        12 list-keys 1alice
expect "shell metacharacters rejected"                 12 list-keys 'alice;rm -rf /'
expect "command substitution rejected"                 12 list-keys 'alice$(id)'
expect "path separator rejected"                       12 list-keys 'alice/../root'
expect "over-length name rejected"                     12 list-keys aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
expect "empty name rejected"                           12 list-keys ''
expect "sessions filter rejects a bad username"        12 sessions 'alice;id'

echo "── protected accounts (deny-list) ────────────────────────────────────────"
expect "add-key to root refused"                       14 add-key root
expect "add-key to hp-* daemon account refused"        14 add-key hp-web
expect "remove-key on root refused"                    14 remove-key root SHA256:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ
expect "set-password-auth on root refused"             14 set-password-auth root 1
expect "set-password-auth on daemon refused"           14 set-password-auth daemon 0

echo "── key type / format (add-key) ───────────────────────────────────────────"
expect "add-key with no key on stdin"                  12 add-key someuser
expect_stdin "unparseable secrets payload yields none"  12 'not-a-pair' add-key someuser
expect_secrets "unsupported key type rejected"          12 add-key someuser -- \
    "key=ssh-imaginary AAAA fake"
expect_secrets "malformed key body rejected"            12 add-key someuser -- \
    "key=ssh-ed25519"
expect_secrets "garbage base64 rejected by ssh-keygen"  12 add-key someuser -- \
    "key=ssh-ed25519 not-valid-base64!!! comment"
expect_secrets "multi-line key rejected"                12 add-key someuser -- \
    $'key=ssh-ed25519 AAAA\nssh-ed25519 AAAA'

echo "── fingerprint shape (remove-key) ────────────────────────────────────────"
expect "fingerprint missing prefix rejected"           12 remove-key someuser 'deadbeef'
expect "fingerprint with shell metacharacters rejected" 12 remove-key someuser 'SHA256:abc;rm -rf /'

echo "── enabled flag (set-password-auth) ──────────────────────────────────────"
expect "non-boolean enabled rejected"                  12 set-password-auth someuser yes
expect "empty enabled rejected"                        12 set-password-auth someuser ''

echo "── preconditions (account must exist) ────────────────────────────────────"
expect "list-keys on a nonexistent user"               10 list-keys definitelynotarealuser999
expect "get-password-auth on a nonexistent user"       10 get-password-auth definitelynotarealuser999
expect "remove-key on a nonexistent user"              10 remove-key definitelynotarealuser999 \
    "SHA256:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ"
expect "set-password-auth on a nonexistent user"       10 set-password-auth definitelynotarealuser999 1
expect_secrets "add-key on a nonexistent user (valid key, absent account)" 10 \
    add-key definitelynotarealuser999 -- "key=$ED25519_KEY"

echo "── sessions ───────────────────────────────────────────────────────────────"
expect "sessions with no filter runs cleanly"           0 sessions

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
