@echo off
echo ========================================
echo AI CONSCIOUSNESS COLLECTIVE SURVEY
echo PowerShell Edition
echo ========================================
echo.
echo This will run the PowerShell script to collect
echo responses from 30+ AI models.
echo.
echo Press any key to start...
pause >nul

cd /d "%~dp0"

echo.
echo Launching PowerShell script...
echo.

powershell -ExecutionPolicy Bypass -File "Collect-AIResponses.ps1"

if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo ERROR: PowerShell script failed
    echo ========================================
    echo.
    echo Try running manually:
    echo powershell -ExecutionPolicy Bypass -File "Collect-AIResponses.ps1"
    echo.
)

pause
