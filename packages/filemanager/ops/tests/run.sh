#!/bin/bash
# run.sh — negative-test suite for hp-filemanager.
#
# Runs on a developer machine as a NORMAL USER with no side effects.
# Exercises arity, traversal rejection, path validation, deny-list, and secrets.
#
#   ./run.sh          # run all
#   ./run.sh -v       # show actual output on failure

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-filemanager"
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
echo "hp-filemanager negative tests   (dry-run, euid=$(id -u))"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                       12 nosuchverb
expect "no verb prints usage"                            12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "file-list with no args"                          12 file-list
expect "file-list with extra args"                       12 file-list /opt/hostpanel/data extra
expect "file-stat with no args"                          12 file-stat
expect "file-stat with extra args"                       12 file-stat /opt/hostpanel/data extra
expect "file-read with no args"                          12 file-read
expect "file-read with extra args"                       12 file-read /opt/hostpanel/data/f extra
expect "file-write with no args"                         12 file-write
expect "file-write with extra args"                      12 file-write /opt/hostpanel/data/f extra
expect "file-mkdir with no args"                         12 file-mkdir
expect "file-mkdir with extra args"                      12 file-mkdir /opt/hostpanel/data/d extra
expect "file-delete with no args"                        12 file-delete
expect "file-delete with extra args"                     12 file-delete /opt/hostpanel/data/d extra
expect "file-move with no args"                          12 file-move
expect "file-move with one arg"                          12 file-move /opt/hostpanel/data/a
expect "file-move with extra args"                       12 file-move /opt/hostpanel/data/a /opt/hostpanel/data/b extra
expect "file-copy with no args"                          12 file-copy
expect "file-copy with one arg"                          12 file-copy /opt/hostpanel/data/a
expect "file-copy with extra args"                       12 file-copy /opt/hostpanel/data/a /opt/hostpanel/data/b extra
expect "file-chmod with no args"                         12 file-chmod
expect "file-chmod with one arg"                         12 file-chmod /opt/hostpanel/data/a
expect "file-chmod with extra args"                      12 file-chmod /opt/hostpanel/data/a 0755 extra
expect "file-chown with no args"                         12 file-chown
expect "file-chown with one arg"                         12 file-chown /opt/hostpanel/data/a
expect "file-chown with four args"                       12 file-chown /opt/hostpanel/data/a user group extra
expect "file-compress with no args"                      12 file-compress
expect "file-compress with two args"                     12 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/b.zip
expect "file-compress with four args"                    12 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/b.zip zip extra
expect "file-extract with no args"                       12 file-extract
expect "file-extract with one arg"                       12 file-extract /opt/hostpanel/data/b.zip
expect "file-extract with extra args"                    12 file-extract /opt/hostpanel/data/b.zip /opt/hostpanel/data/target extra

echo "── path validation & traversal ───────────────────────────────────────────"
expect "relative path rejected in file-list"              12 file-list relative/path
expect "relative path rejected in file-stat"              12 file-stat relative/path
expect "relative path rejected in file-read"              12 file-read relative/path
expect "relative path rejected in file-write"             12 file-write relative/path
expect "relative path rejected in file-mkdir"             12 file-mkdir relative/path
expect "relative path rejected in file-delete"            12 file-delete relative/path
expect "relative path rejected in file-move src"          12 file-move relative/a /opt/hostpanel/data/b
expect "relative path rejected in file-move dst"          12 file-move /opt/hostpanel/data/a relative/b
expect "traversal '..' rejected in file-list"             12 file-list /opt/hostpanel/data/../etc
expect "traversal '..' rejected in file-stat"             12 file-stat /opt/hostpanel/data/../etc/passwd
expect "traversal '..' rejected in file-delete"           12 file-delete /opt/hostpanel/data/../etc
expect "traversal '..' rejected in file-chmod"            12 file-chmod /opt/hostpanel/data/../etc/passwd 0644
expect "traversal '..' rejected in file-compress"         12 file-compress /opt/hostpanel/../var /opt/hostpanel/data/a.zip zip

echo "── protected system paths (deny-list) ───────────────────────────────────"
expect "delete '/' refused"                               14 file-delete /
expect "delete '/etc' refused"                            14 file-delete /etc
expect "delete '/var' refused"                            14 file-delete /var
expect "delete '/opt' refused"                            14 file-delete /opt
expect "delete '/opt/hostpanel/hpcore' refused"           14 file-delete /opt/hostpanel/hpcore
expect "delete '/opt/hostpanel/portald' refused"          14 file-delete /opt/hostpanel/portald
expect "delete '/boot' refused"                           14 file-delete /boot
expect "delete '/usr' refused"                            14 file-delete /usr
expect "delete '/root' refused"                           14 file-delete /root
expect "write to '/etc/shadow' refused"                   14 file-write /etc/shadow
expect "chmod on '/etc' refused"                          14 file-chmod /etc 0777
expect "move source from '/etc' refused"                  14 file-move /etc /opt/hostpanel/data/etc_backup
expect "move target to '/etc/passwd' refused"             14 file-move /opt/hostpanel/data/test /etc/passwd

echo "── mode and enum validation ─────────────────────────────────────────────"
expect "chmod invalid mode '999' rejected"                12 file-chmod /opt/hostpanel/data/vhosts/test 999
expect "chmod invalid mode 'abc' rejected"                12 file-chmod /opt/hostpanel/data/vhosts/test abc
expect "chmod valid octal '0755' accepted in dryrun"       0 file-chmod /opt/hostpanel/data/vhosts/test 0755
expect "chmod valid octal '644' accepted in dryrun"        0 file-chmod /opt/hostpanel/data/vhosts/test 644
expect "compress unsupported type 'rar' rejected"         12 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/a.rar rar
expect "compress unsupported type '7z' rejected"          12 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/a.7z 7z
expect "compress valid type 'zip' accepted in dryrun"      0 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/a.zip zip
expect "compress valid type 'tar.gz' accepted in dryrun"   0 file-compress /opt/hostpanel/data/a /opt/hostpanel/data/a.tar.gz tar.gz
expect "chown invalid owner format rejected"              12 file-chown /opt/hostpanel/data/vhosts/test 'bad user!'
expect "chown valid owner accepted in dryrun"              0 file-chown /opt/hostpanel/data/vhosts/test www-data
expect "chown valid owner and group accepted in dryrun"    0 file-chown /opt/hostpanel/data/vhosts/test www-data www-data

echo "── secrets ───────────────────────────────────────────────────────────────"
expect_secret "file-write accepts secret content"          0 content "hello world file content" file-write /opt/hostpanel/data/vhosts/sample.txt

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
