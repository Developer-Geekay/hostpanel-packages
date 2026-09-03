#!/bin/bash
# run.sh — negative-test suite for hp-storage.
#
# Runs on a developer machine as a NORMAL USER with no side effects. Every
# mutating command is routed through act(), which under HP_OPS_DRYRUN prints
# WOULD-EXEC instead of executing.
#
#   ./run.sh          # run all
#   ./run.sh -v       # show actual output on failure

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-storage"
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
export HP_STORAGE_ROOT="$(mktemp -d)/storage"
export HP_BACKUP_ROOT="$(mktemp -d)/backups"
export HP_ETC_STORAGE="$(mktemp -d)/etc"
mkdir -p "$HP_STORAGE_ROOT" "$HP_BACKUP_ROOT" "$HP_ETC_STORAGE"

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

echo
echo "hp-storage negative tests   (dry-run, euid=$(id -u))"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── buckets ───────────────────────────────────────────────────────────────"
expect "create-bucket missing name"                    12 create-bucket
expect "create-bucket extra args"                      12 create-bucket b1 private extra
expect "create-bucket invalid name uppercase"          12 create-bucket Bucket1
expect "create-bucket invalid name traversal"          12 create-bucket '../bucket'
expect "create-bucket invalid policy"                  12 create-bucket b1 invalidpol
expect "delete-bucket missing name"                    12 delete-bucket
expect "delete-bucket extra args"                      12 delete-bucket b1 b2

echo "── backups ───────────────────────────────────────────────────────────────"
expect "create-backup invalid destination"             12 create-backup snap1 all dropbox
expect "create-backup invalid compression"             12 create-backup snap1 all local rar
expect "create-backup extra args"                      12 create-backup snap1 all local zstd extra
expect "restore-backup missing backup_id"              12 restore-backup
expect "restore-backup invalid backup_id"              12 restore-backup '../bad_id'
expect "delete-backup missing backup_id"               12 delete-backup
expect "delete-backup extra args"                      12 delete-backup b1 b2

echo "── schedules ─────────────────────────────────────────────────────────────"
expect "set-schedule missing args"                     12 set-schedule
expect "set-schedule invalid name"                     12 set-schedule 'bad/name' '0 2 * * *' all 7 local 1
expect "set-schedule invalid retention"                12 set-schedule s1 '0 2 * * *' all abc local 1
expect "set-schedule invalid destination"              12 set-schedule s1 '0 2 * * *' all 7 gdrive 1
expect "set-schedule invalid enabled flag"             12 set-schedule s1 '0 2 * * *' all 7 local maybe
expect "delete-schedule missing name"                  12 delete-schedule
expect "delete-schedule extra args"                    12 delete-schedule s1 s2

echo "── positive dryrun cases ─────────────────────────────────────────────────"
expect "list-buckets dryrun"                           0 list-buckets
expect "create-bucket dryrun"                          0 create-bucket testbucket private
expect "delete-bucket dryrun"                          0 delete-bucket testbucket
expect "list-backups dryrun"                           0 list-backups
expect "create-backup dryrun"                          0 create-backup test-snap all local zstd
expect "restore-backup dryrun"                         0 restore-backup test-backup-123 all
expect "delete-backup dryrun"                          0 delete-backup test-backup-123
expect "list-schedules dryrun"                         0 list-schedules
expect "set-schedule dryrun"                           0 set-schedule daily-snap '0 2 * * *' all 7 local 1
expect "delete-schedule dryrun"                        0 delete-schedule daily-snap
expect "disk-usage dryrun"                             0 disk-usage

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
