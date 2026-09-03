#!/bin/bash
# run.sh — negative-test suite for hp-php.
#
# Runs on a developer machine as a NORMAL USER with no side effects. Every
# mutating command is routed through act(), which under HP_OPS_DRYRUN prints
# WOULD-EXEC instead of executing.

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OPS="$HERE/../hp-php"
export HP_CORE_LIB="$HERE/../../../../hpcore/lib"
VERBOSE="${1:-}"

export HP_OPS_DRYRUN=1
export HP_PHP_ETC_ROOT="$(mktemp -d)/php"
export HP_PHP_RUN_ROOT="$(mktemp -d)/run/php"
export HP_PHP_LOG_ROOT="$(mktemp -d)/logs/php"

mkdir -p "$HP_PHP_ETC_ROOT/8.1/fpm/pool.d"
mkdir -p "$HP_PHP_ETC_ROOT/8.1/fpm/conf.d"
mkdir -p "$HP_PHP_ETC_ROOT/8.1/mods-available"
mkdir -p "$HP_PHP_RUN_ROOT"
mkdir -p "$HP_PHP_LOG_ROOT"

cat > "$HP_PHP_ETC_ROOT/8.1/fpm/pool.d/dupe.conf" <<'EOF'
[dupe]
user = www-data
php_admin_value[memory_limit] = 128M
php_admin_value[max_execution_time] = 30
EOF
cat > "$HP_PHP_ETC_ROOT/8.1/fpm/conf.d/20-curl.ini" <<'EOF'
extension=curl.so
EOF
cat > "$HP_PHP_ETC_ROOT/8.1/mods-available/redis.ini" <<'EOF'
extension=redis.so
EOF

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
echo "hp-php negative tests   (dry-run, euid=$(id -u), etc root: $HP_PHP_ETC_ROOT)"
echo

echo "── dispatch ──────────────────────────────────────────────────────────────"
expect "unknown verb is rejected"                      12 nosuchverb
expect "no verb prints usage"                          12

echo "── arity ─────────────────────────────────────────────────────────────────"
expect "list-versions with extra args"                 12 list-versions extra
expect "list-pools with extra args"                    12 list-pools 8.1 extra
expect "get-pool with no args"                          12 get-pool
expect "get-pool with extra args"                       12 get-pool a b
expect "create-pool with too few args"                  12 create-pool a 8.1
expect "create-pool with extra args"                     12 create-pool a 8.1 128M 30 extra
expect "delete-pool with no args"                        12 delete-pool
expect "set-pool-version with one arg"                   12 set-pool-version a
expect "set-pool-limits with too few args"               12 set-pool-limits a 128M
expect "restart-fpm with extra args"                     12 restart-fpm 8.1 extra
expect "list-extensions with extra args"                 12 list-extensions 8.1 extra
expect "toggle-extension with too few args"              12 toggle-extension 8.1 curl

echo "── pool name shape ───────────────────────────────────────────────────────"
expect "uppercase rejected"                             12 get-pool Example
expect "leading digit rejected"                         12 get-pool 1example
expect "shell metacharacters rejected"                  12 get-pool 'a;rm -rf /'
expect "command substitution rejected"                  12 get-pool 'a$(id)'
expect "path separator rejected"                        12 get-pool 'a/../etc'
expect "over-length name rejected"                      12 get-pool "$(printf 'a%.0s' $(seq 1 65))"
expect "empty name rejected"                             12 get-pool ''

echo "── version shape ─────────────────────────────────────────────────────────"
expect "missing minor version rejected"                  12 create-pool newpool 8 128M 30
expect "non-numeric version rejected"                     12 create-pool newpool 8.x 128M 30
expect "leading v rejected"                                12 create-pool newpool v8.1 128M 30
expect "patch-level version rejected"                       12 create-pool newpool 8.1.2 128M 30
expect "restart-fpm rejects a bad version"                    12 restart-fpm not-a-version

echo "── memory limit shape ────────────────────────────────────────────────────"
expect "missing suffix rejected"                          12 create-pool newpool 8.1 256 30
expect "unknown suffix rejected"                            12 create-pool newpool 8.1 256X 30
expect "leading dash rejected"                               12 create-pool newpool 8.1 -256M 30
expect "embedded space rejected"                              12 set-pool-limits dupe '256 M' 30

echo "── max execution time shape ──────────────────────────────────────────────"
expect "negative value rejected"                          12 set-pool-limits dupe 128M -1
expect "non-numeric value rejected"                          12 set-pool-limits dupe 128M thirty
expect "decimal value rejected"                                12 set-pool-limits dupe 128M 3.5

echo "── reserved pool (deny-list) ─────────────────────────────────────────────"
expect "create-pool on the distro default pool refused"    14 create-pool www 8.1 128M 30
expect "delete-pool on the distro default pool refused"      14 delete-pool www
expect "set-pool-version on the distro default pool refused"   14 set-pool-version www 8.1
expect "set-pool-limits on the distro default pool refused"      14 set-pool-limits www 128M 30

echo "── preconditions ─────────────────────────────────────────────────────────"
expect "get-pool on a pool that does not exist"             10 get-pool definitelynotarealpool
expect "delete-pool on a pool that does not exist"            10 delete-pool definitelynotarealpool
expect "set-pool-limits on a pool that does not exist"           10 set-pool-limits definitelynotarealpool 128M 30
expect "create-pool against an uninstalled version"                10 create-pool newpool 9.9 128M 30
expect "set-pool-version to an uninstalled version"                   10 set-pool-version dupe 9.9
expect "restart-fpm against an uninstalled version"                      10 restart-fpm 9.9
expect "list-pools filtered by an uninstalled version"                     10 list-pools 9.9
expect "list-extensions filtered by an uninstalled version"                 10 list-extensions 9.9
expect "toggle-extension against an uninstalled version"                     10 toggle-extension 9.9 curl true
expect "create-pool on a name that already exists"                           13 create-pool dupe 8.1 128M 30
expect "set-pool-version to the pool's current version"                        13 set-pool-version dupe 8.1

echo "── reads that should just work ───────────────────────────────────────────"
expect "list-versions runs cleanly"                         0 list-versions
expect "list-pools with no filter runs cleanly"               0 list-pools
expect "list-extensions with no filter runs cleanly"          0 list-extensions
expect "list-extensions for 8.1 runs cleanly"                 0 list-extensions 8.1
expect "get-pool on the seeded pool succeeds"                    0 get-pool dupe
expect "restart-fpm for all installed runs cleanly"               0 restart-fpm
expect "toggle-extension enable on 8.1 runs cleanly"              0 toggle-extension 8.1 redis true
expect "toggle-extension disable on 8.1 runs cleanly"             0 toggle-extension 8.1 curl false

echo
if [ "$FAIL" -eq 0 ]; then
    printf '\033[32m%d passed, 0 failed\033[0m\n\n' "$PASS"
    exit 0
else
    printf '\033[31m%d passed, %d FAILED\033[0m\n\n' "$PASS" "$FAIL"
    exit 1
fi
