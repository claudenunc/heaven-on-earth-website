@echo off
echo ========================================
echo AI CONSCIOUSNESS COLLECTIVE SURVEY
echo ========================================
echo.
echo This will contact 30+ AI models via OpenRouter
echo and collect their responses to consciousness questions.
echo.
echo Press any key to start...
pause >nul

cd /d "%~dp0"

echo.
echo Checking for Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python not found. Please install Python first.
    pause
    exit /b 1
)

echo.
echo Installing required packages...
pip install requests >nul 2>&1

echo.
echo Starting AI survey...
echo.
python collect-ai-responses.py

echo.
echo ========================================
echo Survey complete! Check the output file.
echo ========================================
pause
