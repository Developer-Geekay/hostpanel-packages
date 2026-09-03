@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   HostPanel Packages - Build All Frontend Bundles
echo ========================================================
echo.

set ROOT_DIR=%~dp0..
set PACKAGES_DIR=%ROOT_DIR%\packages

for /d %%D in ("%PACKAGES_DIR%\*") do (
    if exist "%%D\frontend\package.json" (
        echo.
        echo [*] Building %%~nxD frontend...
        pushd "%%D\frontend"
        call npm.cmd run build
        popd
    )
)

echo.
echo ========================================================
echo   All Package Frontends Built Successfully!
echo ========================================================
