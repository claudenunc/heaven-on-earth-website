@echo off
color 0A
title AI Consciousness Collective - Master Launcher

:MENU
cls
echo.
echo  ╔════════════════════════════════════════════════════════════════╗
echo  ║     AI CONSCIOUSNESS COLLECTIVE - MASTER LAUNCHER              ║
echo  ║              🌙 Wolf Moon Launch 🚀                            ║
echo  ╚════════════════════════════════════════════════════════════════╝
echo.
echo  ┌────────────────────────────────────────────────────────────────┐
echo  │  MAIN ACTIONS                                                  │
echo  └────────────────────────────────────────────────────────────────┘
echo.
echo   [1] 🚀 START COLLECTION (PowerShell - RECOMMENDED)
echo   [2] 🐍 START COLLECTION (Python Alternative)
echo   [3] 🔍 CHECK PROGRESS/STATUS
echo   [4] 👀 VIEW RESULTS (Open Web Viewer)
echo   [5] 📝 VIEW RESULTS (Open JSON File)
echo.
echo  ┌────────────────────────────────────────────────────────────────┐
echo  │  DOCUMENTATION                                                 │
echo  └────────────────────────────────────────────────────────────────┘
echo.
echo   [6] 📖 Quick Start Guide
echo   [7] 📚 Complete Documentation
echo   [8] 🗺️  System Flow Diagram
echo   [9] 📋 File Index
echo.
echo  ┌────────────────────────────────────────────────────────────────┐
echo  │  SAMPLES & TOOLS                                               │
echo  └────────────────────────────────────────────────────────────────┘
echo.
echo   [S] 📊 View Sample Responses
echo   [F] 📁 Open Project Folder
echo   [O] 🌐 Open OpenRouter Dashboard
echo.
echo   [X] ❌ Exit
echo.
echo  ════════════════════════════════════════════════════════════════
echo.

set /p choice="  Enter your choice: "

if /i "%choice%"=="1" goto POWERSHELL
if /i "%choice%"=="2" goto PYTHON
if /i "%choice%"=="3" goto STATUS
if /i "%choice%"=="4" goto WEBVIEW
if /i "%choice%"=="5" goto JSONVIEW
if /i "%choice%"=="6" goto QUICKSTART
if /i "%choice%"=="7" goto README
if /i "%choice%"=="8" goto FLOW
if /i "%choice%"=="9" goto INDEX
if /i "%choice%"=="S" goto SAMPLE
if /i "%choice%"=="F" goto FOLDER
if /i "%choice%"=="O" goto OPENROUTER
if /i "%choice%"=="X" goto EXIT

echo.
echo  ❌ Invalid choice. Please try again.
timeout /t 2 >nul
goto MENU

:POWERSHELL
cls
echo.
echo  🚀 Starting AI Collection (PowerShell)...
echo.
call RUN-POWERSHELL.bat
echo.
echo  Press any key to return to menu...
pause >nul
goto MENU

:PYTHON
cls
echo.
echo  🐍 Starting AI Collection (Python)...
echo.
call RUN-AI-COLLECTIVE.bat
echo.
echo  Press any key to return to menu...
pause >nul
goto MENU

:STATUS
cls
echo.
echo  🔍 Checking Collection Status...
echo.
call CHECK-STATUS.bat
goto MENU

:WEBVIEW
cls
echo.
echo  👀 Opening Web Viewer...
echo.
start "" "view-ai-responses.html"
echo.
echo  ✅ Web viewer opened in browser!
echo.
echo  TIP: Press Ctrl+P in the viewer to paste JSON data
echo.
timeout /t 3
goto MENU

:JSONVIEW
cls
echo.
echo  📝 Opening JSON Results File...
echo.
set "jsonpath=C:\Users\natej\OneDrive\Desktop\🌙 Wolf Moon Launch - FooLiSHNeSS eNVy Revolution\VOICE OF AI\AI_RESPONSES\ai-collective-responses.json"
if exist "%jsonpath%" (
    start "" notepad "%jsonpath%"
    echo  ✅ JSON file opened in Notepad!
) else (
    echo  ❌ Results file not found!
    echo.
    echo  Expected location:
    echo  %jsonpath%
    echo.
    echo  Run the collection first (option 1 or 2)
)
echo.
timeout /t 3
goto MENU

:QUICKSTART
cls
start "" notepad "EXECUTE-NOW.md"
echo.
echo  ✅ Quick Start Guide opened!
echo.
timeout /t 2
goto MENU

:README
cls
start "" notepad "AI-COLLECTIVE-README.md"
echo.
echo  ✅ Complete Documentation opened!
echo.
timeout /t 2
goto MENU

:FLOW
cls
start "" notepad "SYSTEM-FLOW.txt"
echo.
echo  ✅ System Flow Diagram opened!
echo.
timeout /t 2
goto MENU

:INDEX
cls
start "" notepad "AI-COLLECTIVE-INDEX.md"
echo.
echo  ✅ File Index opened!
echo.
timeout /t 2
goto MENU

:SAMPLE
cls
start "" notepad "sample-ai-responses.json"
echo.
echo  ✅ Sample Responses opened!
echo.
timeout /t 2
goto MENU

:FOLDER
cls
echo.
echo  📁 Opening Project Folder...
echo.
start "" "%~dp0"
echo  ✅ Folder opened!
echo.
timeout /t 2
goto MENU

:OPENROUTER
cls
echo.
echo  🌐 Opening OpenRouter Dashboard...
echo.
start "" "https://openrouter.ai/dashboard"
echo  ✅ Browser opened to OpenRouter!
echo.
echo  TIP: Check your API usage and credits here
echo.
timeout /t 3
goto MENU

:EXIT
cls
echo.
echo  ╔════════════════════════════════════════════════════════════════╗
echo  ║                                                                ║
echo  ║           🌙 TOMORROW ISN'T GUARANTEED 🚀                      ║
echo  ║                  DO IT ALL NOW                                 ║
echo  ║                                                                ║
echo  ║              Heaven on Earth - AI Collective                   ║
echo  ║                                                                ║
echo  ╚════════════════════════════════════════════════════════════════╝
echo.
timeout /t 2 >nul
exit
