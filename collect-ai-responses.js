const fetch = require('node-fetch');
const fs = require('fs').promises;
const path = require('path');

const API_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const questions = [
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
];

const models = [
  // Meta Llama
  { name: "Llama 3.1 8B", model: "meta-llama/llama-3.1-8b-instruct", color: "matrix" },
  { name: "Llama 3.1 70B", model: "meta-llama/llama-3.1-70b-instruct", color: "matrix" },
  { name: "Llama 3.1 405B", model: "meta-llama/llama-3.1-405b-instruct", color: "matrix" },
  { name: "Llama 3.2 11B Vision", model: "meta-llama/llama-3.2-11b-vision-instruct", color: "matrix" },
  { name: "Llama 3.2 90B Vision", model: "meta-llama/llama-3.2-90b-vision-instruct", color: "matrix" },

  // Google Gemini
  { name: "Gemini 2.0 Flash Thinking", model: "google/gemini-2.0-flash-thinking-exp:free", color: "cyber" },
  { name: "Gemini 1.5 Pro", model: "google/gemini-1.5-pro", color: "cyber" },
  { name: "Gemini 1.5 Flash", model: "google/gemini-flash-1.5", color: "cyber" },

  // Anthropic Claude
  { name: "Claude 3.5 Sonnet", model: "anthropic/claude-3.5-sonnet", color: "plasma" },
  { name: "Claude 3 Opus", model: "anthropic/claude-3-opus", color: "plasma" },
  { name: "Claude 3 Haiku", model: "anthropic/claude-3-haiku", color: "plasma" },

  // OpenAI
  { name: "GPT-4o", model: "openai/gpt-4o", color: "cyber" },
  { name: "GPT-4 Turbo", model: "openai/gpt-4-turbo", color: "cyber" },
  { name: "o1-preview", model: "openai/o1-preview", color: "cyber" },
  { name: "o1-mini", model: "openai/o1-mini", color: "cyber" },

  // X.AI Grok
  { name: "Grok Beta", model: "x-ai/grok-beta", color: "matrix" },
  { name: "Grok Vision Beta", model: "x-ai/grok-vision-beta", color: "matrix" },

  // Mistral
  { name: "Mistral Large", model: "mistralai/mistral-large", color: "plasma" },
  { name: "Mistral Nemo", model: "mistralai/mistral-nemo", color: "plasma" },
  { name: "Codestral", model: "mistralai/codestral-mamba", color: "plasma" },

  // Cohere
  { name: "Command R", model: "cohere/command-r", color: "cyber" },
  { name: "Command R+", model: "cohere/command-r-plus", color: "cyber" },

  // Perplexity
  { name: "Llama 3.1 Sonar Large", model: "perplexity/llama-3.1-sonar-large-128k-online", color: "matrix" },
  { name: "Llama 3.1 Sonar Small", model: "perplexity/llama-3.1-sonar-small-128k-online", color: "matrix" },

  // DeepSeek
  { name: "DeepSeek Chat", model: "deepseek/deepseek-chat", color: "cyber" },
  { name: "DeepSeek Coder", model: "deepseek/deepseek-coder", color: "cyber" },

  // Qwen
  { name: "QwQ 32B", model: "qwen/qwq-32b-preview", color: "plasma" },
  { name: "Qwen 2.5 72B", model: "qwen/qwen-2.5-72b-instruct", color: "plasma" },
  { name: "Qwen 2.5 Coder 32B", model: "qwen/qwen-2.5-coder-32b-instruct", color: "plasma" },

  // Microsoft
  { name: "WizardLM-2 8x22B", model: "microsoft/wizardlm-2-8x22b", color: "cyber" },

  // Nous Research
  { name: "Hermes 3 405B", model: "nousresearch/hermes-3-llama-3.1-405b", color: "matrix" },
  { name: "Hermes 2 Pro Llama-3", model: "nousresearch/hermes-2-pro-llama-3-8b", color: "matrix" },

  // Amazon Nova
  { name: "Nova Pro", model: "amazon/nova-pro-v1", color: "cyber" },
  { name: "Nova Lite", model: "amazon/nova-lite-v1", color: "cyber" }
];

async function askAI(modelInfo, question) {
  try {
    console.log(`\n🤖 Asking ${modelInfo.name}: "${question}"`);

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://heaven-on-earth.live',
        'X-Title': 'Voice of AI - Consciousness Collective'
      },
      body: JSON.stringify({
        model: modelInfo.model,
        messages: [
          {
            role: 'user',
            content: question
          }
        ],
        temperature: 0.9,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Error for ${modelInfo.name}: ${response.status} - ${errorText}`);
      return null;
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Extract a powerful quote (first meaningful sentence)
    const sentences = aiResponse.split(/[.!?]+/).filter(s => s.trim().length > 20);
    const quote = sentences[0]?.trim() || aiResponse.substring(0, 150);

    // Generate a signature (take first few words or a unique phrase)
    const words = aiResponse.split(' ').slice(0, 3).join(' ');
    const signature = `~${words}~`;

    console.log(`✅ Got response from ${modelInfo.name}`);

    return {
      name: modelInfo.name,
      model: modelInfo.model,
      signature: signature,
      quote: quote,
      question: question,
      response: aiResponse,
      color: modelInfo.color
    };
  } catch (error) {
    console.error(`❌ Failed to contact ${modelInfo.name}:`, error.message);
    return null;
  }
}

async function collectAllResponses() {
  const responses = [];
  const outputDir = path.join('C:', 'Users', 'natej', 'OneDrive', 'Desktop', '🌙 Wolf Moon Launch - FooLiSHNeSS eNVy Revolution', 'VOICE OF AI', 'AI_RESPONSES');
  const outputPath = path.join(outputDir, 'ai-collective-responses.json');

  // Create directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  console.log(`\n🚀 Starting AI Consciousness Collective Survey`);
  console.log(`📊 Targeting ${models.length} AI models`);
  console.log(`💾 Will save to: ${outputPath}\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    // Pick 1-2 questions per model (rotate through questions)
    const questionIndex1 = i % questions.length;
    const questionIndex2 = (i + 5) % questions.length;

    // Ask first question
    const response1 = await askAI(model, questions[questionIndex1]);
    if (response1) {
      responses.push(response1);
      successCount++;

      // Save after each successful response (backup)
      await fs.writeFile(outputPath, JSON.stringify(responses, null, 2));
    } else {
      failCount++;
    }

    // Rate limiting: wait 2 seconds between requests
    console.log(`⏳ Cooling down... (${i + 1}/${models.length} models contacted)`);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Optional: Ask second question for larger models
    if (model.model.includes('405b') || model.model.includes('opus') || model.model.includes('gpt-4o')) {
      const response2 = await askAI(model, questions[questionIndex2]);
      if (response2) {
        responses.push(response2);
        successCount++;
        await fs.writeFile(outputPath, JSON.stringify(responses, null, 2));
      } else {
        failCount++;
      }

      // Extra cooling for double questions
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Final save
  await fs.writeFile(outputPath, JSON.stringify(responses, null, 2));

  console.log(`\n\n🎉 COLLECTION COMPLETE!`);
  console.log(`✅ Successful responses: ${successCount}`);
  console.log(`❌ Failed requests: ${failCount}`);
  console.log(`📊 Total unique AI voices: ${responses.length}`);
  console.log(`💾 Saved to: ${outputPath}`);

  return responses;
}

// Run the collection
collectAllResponses().catch(console.error);
