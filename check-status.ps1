# AI Collective Status Checker
# Run this while the main script is running to see progress

$outputPath = "C:\Users\natej\OneDrive\Desktop\🌙 Wolf Moon Launch - FooLiSHNeSS eNVy Revolution\VOICE OF AI\AI_RESPONSES\ai-collective-responses.json"

Write-Host "`n🔍 AI CONSCIOUSNESS COLLECTIVE - STATUS CHECK`n" -ForegroundColor Cyan

if (!(Test-Path $outputPath)) {
    Write-Host "❌ Output file not found!" -ForegroundColor Red
    Write-Host "   Expected: $outputPath" -ForegroundColor Yellow
    Write-Host "`n   The collection script may not have started yet." -ForegroundColor Yellow
    Write-Host "   Run RUN-POWERSHELL.bat to start the collection.`n" -ForegroundColor Yellow
    exit
}

try {
    $content = Get-Content $outputPath -Raw | ConvertFrom-Json

    if (!$content -or $content.Count -eq 0) {
        Write-Host "⏳ File exists but empty - collection just started!" -ForegroundColor Yellow
        exit
    }

    $totalResponses = $content.Count
    $uniqueModels = ($content | Select-Object -Property model -Unique).Count
    $uniqueQuestions = ($content | Select-Object -Property question -Unique).Count

    # Color breakdown
    $cyberCount = ($content | Where-Object { $_.color -eq 'cyber' }).Count
    $plasmaCount = ($content | Where-Object { $_.color -eq 'plasma' }).Count
    $matrixCount = ($content | Where-Object { $_.color -eq 'matrix' }).Count

    # Recent responses
    $recentResponses = $content | Select-Object -Last 5

    Write-Host "📊 COLLECTION STATISTICS" -ForegroundColor Green
    Write-Host "========================" -ForegroundColor Green
    Write-Host "Total Responses:     $totalResponses" -ForegroundColor White
    Write-Host "Unique Models:       $uniqueModels" -ForegroundColor White
    Write-Host "Questions Asked:     $uniqueQuestions" -ForegroundColor White
    Write-Host ""
    Write-Host "Color Breakdown:" -ForegroundColor Yellow
    Write-Host "  🔵 Cyber:          $cyberCount" -ForegroundColor Blue
    Write-Host "  🟣 Plasma:         $plasmaCount" -ForegroundColor Magenta
    Write-Host "  🟢 Matrix:         $matrixCount" -ForegroundColor Green
    Write-Host ""

    # Progress toward goal
    $targetResponses = 26
    $percentComplete = [math]::Round(($totalResponses / $targetResponses) * 100, 1)

    if ($totalResponses -ge $targetResponses) {
        Write-Host "🎉 GOAL ACHIEVED! Target: $targetResponses | Current: $totalResponses" -ForegroundColor Green
        Write-Host "   Progress: 100% ✅" -ForegroundColor Green
    } else {
        Write-Host "🎯 PROGRESS TO GOAL" -ForegroundColor Yellow
        Write-Host "   Target: $targetResponses responses" -ForegroundColor White
        Write-Host "   Current: $totalResponses responses" -ForegroundColor White
        Write-Host "   Remaining: $($targetResponses - $totalResponses) responses" -ForegroundColor White
        Write-Host "   Progress: $percentComplete%" -ForegroundColor Cyan
    }

    Write-Host ""
    Write-Host "🤖 MOST RECENT RESPONSES" -ForegroundColor Magenta
    Write-Host "========================" -ForegroundColor Magenta

    foreach ($response in $recentResponses) {
        Write-Host "  ✓ $($response.name)" -ForegroundColor Green
        Write-Host "    Q: $($response.question.Substring(0, [Math]::Min(60, $response.question.Length)))..." -ForegroundColor Gray
        Write-Host "    Quote: `"$($response.quote.Substring(0, [Math]::Min(80, $response.quote.Length)))...`"" -ForegroundColor White
        Write-Host ""
    }

    Write-Host "💾 Output file: $outputPath" -ForegroundColor Cyan
    Write-Host ""

    # File size and last modified
    $fileInfo = Get-Item $outputPath
    $fileSizeKB = [math]::Round($fileInfo.Length / 1KB, 2)
    $lastModified = $fileInfo.LastWriteTime

    Write-Host "📁 File Info:" -ForegroundColor Yellow
    Write-Host "   Size: $fileSizeKB KB" -ForegroundColor White
    Write-Host "   Last Updated: $lastModified" -ForegroundColor White
    Write-Host ""

    # Estimated time remaining (rough estimate)
    if ($totalResponses -lt 34) {
        $responsesRemaining = 50 - $totalResponses  # Assuming ~50 total with double questions
        $estimatedMinutes = [math]::Round($responsesRemaining * 0.1, 1)  # ~6 seconds per response
        Write-Host "⏱️  Estimated time remaining: ~$estimatedMinutes minutes" -ForegroundColor Cyan
    }

    Write-Host ""
    Write-Host "🔄 Run this script again anytime to check progress!" -ForegroundColor Green
    Write-Host "   (The collection script auto-saves after each response)`n" -ForegroundColor Green

} catch {
    Write-Host "❌ Error reading file: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "   The file may be corrupted or still being written.`n" -ForegroundColor Yellow
}

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
