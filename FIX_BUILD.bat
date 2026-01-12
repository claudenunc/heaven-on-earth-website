@echo off
echo ==========================================
echo      HEAVEN ON EARTH BUILD FIXER
echo ==========================================
echo.
echo [1/5] Cleaning caches and old files...
rmdir /s /q .next
rmdir /s /q node_modules
del /f /q package-lock.json

echo.
echo [2/5] Cleaning npm cache...
call npm cache clean --force

echo.
echo [3/5] Installing fresh dependencies...
call npm install

echo.
echo [4/5] Running build...
call npm run build

echo.
echo ==========================================
if %ERRORLEVEL% EQU 0 (
    echo      BUILD SUCCESSFUL! :)
) else (
    echo      BUILD FAILED :(
)
echo ==========================================
pause
