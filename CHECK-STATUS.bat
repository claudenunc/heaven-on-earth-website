@echo off
echo ========================================
echo AI COLLECTIVE - STATUS CHECKER
echo ========================================
echo.
echo This will show current collection progress.
echo Run anytime during or after collection.
echo.

cd /d "%~dp0"

powershell -ExecutionPolicy Bypass -File "check-status.ps1"
