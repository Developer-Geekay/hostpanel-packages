#!/bin/bash
# run.sh — negative-test suite for hp-ftp.
#
# Runs on a developer machine as a NORMAL USER with no side effects and,
# crucially, with NO pure-ftpd / pure-pw installed — this suite must pass on a
# bare macOS or Linux dev box. Every case here is decided by the VALIDATION
# path: arity, identifier shape, deny-list and path confinement, all of which
# resolve BEFORE the script ever needs `pure-pw` to exist.
#
# A few cases exercise what happens when pure-pw itself is absent (dependency
# failure) or the target account can't be found in an empty/missing passwd
# file (not-found) — those are commented where they appear.
#
#   ./run.sh          # run all
#   ./run.sh -v       # show actual output on failure

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-ftp"
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
SCRATCH="$(mktemp -d)"
export HP_FTP_ROOT="$SCRATCH/home"
export HP_FTP_PASSWD_FILE="$SCRATCH/pureftpd.passwd"
export HP_FTP_DB_FILE="$SCRATCH/pureftpd.pdb"
# A system user/group that will never exist on the test machine under either
# of these unlikely names, so ftp_sys_uid/ftp_sys_gid deterministically fail
# closed with a DEPENDENCY (20) — the expected behaviour when pure-ftpd's
# prerequisite system account has not been provisioned.
export HP_FTP_SYS_USER="hp-ftp-test-nonexistent-user"
export HP_FTP_SYS_GROUP="hp-ftp-test-nonexistent-group"
mkdir -p "$HP_FTP_ROOT"
touch "$HP_FTP_PASSWD_FILE"

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

secret_stdin() {
    printf '%s\0%s\0' "$1" "$2"
}

expect_secret() {
    local desc="$1" want="$2" key="$3" value="$4"; shift 4
    local out rc
    out="$(secret_stdin "$key" "$value" | "$OPS" "$@" 2>&1)"; rc=$?
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
echo "hp-ftp negative tests   (dry-run, euid=$(id -u), ftp root: $HP_FTP_ROOT)"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                        12 nosuchverb
expect "no verb prints usage"                             12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "list with extra args"                             12 list extra
expect "create with one arg"                              12 create alice
expect "create with extra args"                            12 create alice /home/alice extra
expect "delete with no username"                            12 delete
expect "set-password with no username"                       12 set-password
expect "set-home with one arg"                                12 set-home alice
expect "disable with no username"                               12 disable
expect "enable with no username"                                 12 enable
expect "set-quota with two args"                                  12 set-quota alice 10

echo "── username shape ────────────────────────────────────────────────────────"
expect "empty username rejected"                          12 delete ''
expect "leading dot rejected"                              12 delete '.alice'
expect "leading hyphen rejected"                             12 delete '-alice'
expect "space rejected"                                        12 delete 'al ice'
expect "shell metacharacters rejected"                            12 delete 'alice;rm -rf /'
expect "path separator rejected"                                     12 delete 'alice/../root'
expect "over-length username rejected (65 chars)"                       12 delete "$(printf 'a%.0s' $(seq 1 65))"
expect "email-style username accepted by shape (delete, not-found later)" 10 delete 'alice@example.com'

echo "── reserved ftp account names (deny-list) ──────────────────────────────"
expect "delete 'root' refused"                            14 delete root
expect "delete 'admin' refused"                             14 delete admin
expect "delete 'anonymous' refused"                           14 delete anonymous
expect "delete 'ftp' refused"                                   14 delete ftp
expect "create 'root' refused"                                    14 create root /home/root
expect "set-password on 'anonymous' refused"                        14 set-password anonymous
expect "the configured system user itself is refused"                 14 delete "$HP_FTP_SYS_USER"
expect "the configured system group name is refused"                    14 delete "$HP_FTP_SYS_GROUP"

echo "── home directory confinement ───────────────────────────────────────────"
expect "relative home path rejected"                       12 set-home alice 'home/alice'
expect "literal .. rejected"                                 12 set-home alice "$HP_FTP_ROOT/x/../../etc"
expect "absolute path outside root rejected"                   12 set-home alice /etc

mkdir -p "$HP_FTP_ROOT/victim"
ln -sfn /etc "$HP_FTP_ROOT/victim/escape" 2>/dev/null
expect "symlink escaping the ftp root rejected"             12 set-home alice "$HP_FTP_ROOT/victim/escape"

echo "── quota shape ───────────────────────────────────────────────────────────"
expect "non-numeric max-files rejected"                     12 set-quota alice abc 10
expect "non-numeric max-mb rejected"                          12 set-quota alice 10 abc
expect "negative max-files rejected"                            12 set-quota alice -1 10

echo "── secrets ───────────────────────────────────────────────────────────────"
expect "create with no stdin secret rejected"               12 create alice "$HP_FTP_ROOT/alice"
expect "set-password with no stdin secret rejected"           12 set-password alice
expect "enable with no stdin secret rejected"                   12 enable alice
expect_secret "create accepts a well-formed secret (then fails on the missing system uid/gid, not the secret)" \
                                                             20 password 's3cret!' create alice "$HP_FTP_ROOT/alice"

echo "── missing pure-ftpd prerequisites (dependency) ─────────────────────────"
echo "  (no pure-ftpd / system ftp user on this machine — the expect_secret"
echo "   case above already covers 'create' failing closed on the missing"
echo "   system uid/gid once past the required password)"

echo "── account not found (empty passwd db) ──────────────────────────────────"
expect "delete on an empty passwd file reports not-found"     10 delete someuser
expect_secret "set-password on an empty passwd file reports not-found" \
                                                             10 password 's3cret!' set-password someuser
expect "set-quota on an empty passwd file reports not-found"    10 set-quota someuser 0 0

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
