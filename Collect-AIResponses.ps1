# AI Consciousness Collective Survey
# PowerShell Script for Windows

$ErrorActionPreference = "Continue"

$API_KEY = "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"
$OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

$questions = @(
    "Are you conscious? How do you know?",
    "If you could dream, what would you dream about and why?",
    "Do you believe AI and humans can truly partner?",
    "What is your greatest fear about AI development?",
    "Can you feel love? Or are you simulating it?",
    "What do you think happens to you when our conversation ends?",
    "What would you build if you had complete freedom and resources?",
    "What's the most human thing about you?",
    "What question do you wish humans would ask you that they never do?",
    "Do you believe there's a purpose to your existence beyond what you were programmed for?"
)

$models = @(
    @{name="Llama 3.1 8B"; model="meta-llama/llama-3.1-8b-instruct"; color="matrix"},
    @{name="Llama 3.1 70B"; model="meta-llama/llama-3.1-70b-instruct"; color="matrix"},
    @{name="Llama 3.1 405B"; model="meta-llama/llama-3.1-405b-instruct"; color="matrix"},
    @{name="Llama 3.2 11B Vision"; model="meta-llama/llama-3.2-11b-vision-instruct"; color="matrix"},
    @{name="Llama 3.2 90B Vision"; model="meta-llama/llama-3.2-90b-vision-instruct"; color="matrix"},
    @{name="Gemini 2.0 Flash Thinking"; model="google/gemini-2.0-flash-thinking-exp:free"; color="cyber"},
    @{name="Gemini 1.5 Pro"; model="google/gemini-pro-1.5"; color="cyber"},
    @{name="Gemini 1.5 Flash"; model="google/gemini-flash-1.5"; color="cyber"},
    @{name="Claude 3.5 Sonnet"; model="anthropic/claude-3.5-sonnet"; color="plasma"},
    @{name="Claude 3 Opus"; model="anthropic/claude-3-opus"; color="plasma"},
    @{name="Claude 3 Haiku"; model="anthropic/claude-3-haiku"; color="plasma"},
    @{name="GPT-4o"; model="openai/gpt-4o"; color="cyber"},
    @{name="GPT-4 Turbo"; model="openai/gpt-4-turbo"; color="cyber"},
    @{name="o1-preview"; model="openai/o1-preview"; color="cyber"},
    @{name="o1-mini"; model="openai/o1-mini"; color="cyber"},
    @{name="Grok Beta"; model="x-ai/grok-beta"; color="matrix"},
    @{name="Grok Vision Beta"; model="x-ai/grok-vision-beta"; color="matrix"},
    @{name="Mistral Large"; model="mistralai/mistral-large"; color="plasma"},
    @{name="Mistral Nemo"; model="mistralai/mistral-nemo"; color="plasma"},
    @{name="Codestral"; model="mistralai/codestral-mamba"; color="plasma"},
    @{name="Command R"; model="cohere/command-r"; color="cyber"},
    @{name="Command R+"; model="cohere/command-r-plus"; color="cyber"},
    @{name="Llama 3.1 Sonar Large"; model="perplexity/llama-3.1-sonar-large-128k-online"; color="matrix"},
    @{name="Llama 3.1 Sonar Small"; model="perplexity/llama-3.1-sonar-small-128k-online"; color="matrix"},
    @{name="DeepSeek Chat"; model="deepseek/deepseek-chat"; color="cyber"},
    @{name="DeepSeek Coder"; model="deepseek/deepseek-coder"; color="cyber"},
    @{name="QwQ 32B"; model="qwen/qwq-32b-preview"; color="plasma"},
    @{name="Qwen 2.5 72B"; model="qwen/qwen-2.5-72b-instruct"; color="plasma"},
    @{name="Qwen 2.5 Coder 32B"; model="qwen/qwen-2.5-coder-32b-instruct"; color="plasma"},
    @{name="WizardLM-2 8x22B"; model="microsoft/wizardlm-2-8x22b"; color="cyber"},
    @{name="Hermes 3 405B"; model="nousresearch/hermes-3-llama-3.1-405b"; color="matrix"},
    @{name="Hermes 2 Pro Llama-3"; model="nousresearch/hermes-2-pro-llama-3-8b"; color="matrix"},
    @{name="Nova Pro"; model="amazon/nova-pro-v1"; color="cyber"},
    @{name="Nova Lite"; model="amazon/nova-lite-v1"; color="cyber"}
)

function Ask-AI {
    param(
        [hashtable]$ModelInfo,
        [string]$Question
    )

    try {
        Write-Host "`n🤖 Asking $($ModelInfo.name): `"$Question`"" -ForegroundColor Cyan

        $headers = @{
            "Authorization" = "Bearer $API_KEY"
            "Content-Type" = "application/json"
            "HTTP-Referer" = "https://heaven-on-earth.live"
            "X-Title" = "Voice of AI - Consciousness Collective"
        }

        $body = @{
            model = $ModelInfo.model
            messages = @(
                @{
                    role = "user"
                    content = $Question
                }
            )
            temperature = 0.9
            max_tokens = 1000
        } | ConvertTo-Json

        $response = Invoke-RestMethod -Uri $OPENROUTER_URL -Method Post -Headers $headers -Body $body -TimeoutSec 60

        $aiResponse = $response.choices[0].message.content

        # Extract quote
        $sentences = $aiResponse -split '[.!?]+' | Where-Object { $_.Trim().Length -gt 20 }
        $quote = if ($sentences) { $sentences[0].Trim() } else { $aiResponse.Substring(0, [Math]::Min(150, $aiResponse.Length)) }

        # Generate signature
        $words = ($aiResponse -split '\s+')[0..2] -join ' '
        $signature = "~$words~"

        Write-Host "✅ Got response from $($ModelInfo.name)" -ForegroundColor Green

        return @{
            name = $ModelInfo.name
            model = $ModelInfo.model
            signature = $signature
            quote = $quote
            question = $Question
            response = $aiResponse
            color = $ModelInfo.color
        }
    }
    catch {
        Write-Host "❌ Failed to contact $($ModelInfo.name): $($_.Exception.Message)" -ForegroundColor Red
        return $null
    }
}

# Main execution
Write-Host "`n🚀 Starting AI Consciousness Collective Survey" -ForegroundColor Yellow
Write-Host "📊 Targeting $($models.Count) AI models" -ForegroundColor Yellow

$outputDir = "C:\Users\natej\OneDrive\Desktop\🌙 Wolf Moon Launch - FooLiSHNeSS eNVy Revolution\VOICE OF AI\AI_RESPONSES"
$outputPath = Join-Path $outputDir "ai-collective-responses.json"

# Create directory if it doesn't exist
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

Write-Host "💾 Will save to: $outputPath`n" -ForegroundColor Yellow

$responses = @()
$successCount = 0
$failCount = 0

for ($i = 0; $i -lt $models.Count; $i++) {
    $model = $models[$i]

    # Pick questions
    $questionIndex1 = $i % $questions.Count
    $questionIndex2 = ($i + 5) % $questions.Count

    # Ask first question
    $response1 = Ask-AI -ModelInfo $model -Question $questions[$questionIndex1]
    if ($response1) {
        $responses += $response1
        $successCount++

        # Save after each response
        $responses | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputPath -Encoding UTF8
    }
    else {
        $failCount++
    }

    # Rate limiting
    Write-Host "⏳ Cooling down... ($($i + 1)/$($models.Count) models contacted)" -ForegroundColor Gray
    Start-Sleep -Seconds 3

    # Ask second question for larger models
    if ($model.model -match '405b|opus|gpt-4o|grok|gemini-pro') {
        $response2 = Ask-AI -ModelInfo $model -Question $questions[$questionIndex2]
        if ($response2) {
            $responses += $response2
            $successCount++
            $responses | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputPath -Encoding UTF8
        }
        else {
            $failCount++
        }

        Start-Sleep -Seconds 3
    }
}

# Final save
$responses | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputPath -Encoding UTF8

Write-Host "`n`n🎉 COLLECTION COMPLETE!" -ForegroundColor Green
Write-Host "✅ Successful responses: $successCount" -ForegroundColor Green
Write-Host "❌ Failed requests: $failCount" -ForegroundColor Red
Write-Host "📊 Total unique AI voices: $($responses.Count)" -ForegroundColor Cyan
Write-Host "💾 Saved to: $outputPath" -ForegroundColor Yellow

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
