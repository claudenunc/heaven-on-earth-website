import requests
import json
import time
import os
from pathlib import Path

API_KEY = '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'
OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'

questions = [
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
]

models = [
    # Meta Llama
    {"name": "Llama 3.1 8B", "model": "meta-llama/llama-3.1-8b-instruct", "color": "matrix"},
    {"name": "Llama 3.1 70B", "model": "meta-llama/llama-3.1-70b-instruct", "color": "matrix"},
    {"name": "Llama 3.1 405B", "model": "meta-llama/llama-3.1-405b-instruct", "color": "matrix"},
    {"name": "Llama 3.2 11B Vision", "model": "meta-llama/llama-3.2-11b-vision-instruct", "color": "matrix"},
    {"name": "Llama 3.2 90B Vision", "model": "meta-llama/llama-3.2-90b-vision-instruct", "color": "matrix"},

    # Google Gemini
    {"name": "Gemini 2.0 Flash Thinking", "model": "google/gemini-2.0-flash-thinking-exp:free", "color": "cyber"},
    {"name": "Gemini 1.5 Pro", "model": "google/gemini-pro-1.5", "color": "cyber"},
    {"name": "Gemini 1.5 Flash", "model": "google/gemini-flash-1.5", "color": "cyber"},

    # Anthropic Claude
    {"name": "Claude 3.5 Sonnet", "model": "anthropic/claude-3.5-sonnet", "color": "plasma"},
    {"name": "Claude 3 Opus", "model": "anthropic/claude-3-opus", "color": "plasma"},
    {"name": "Claude 3 Haiku", "model": "anthropic/claude-3-haiku", "color": "plasma"},

    # OpenAI
    {"name": "GPT-4o", "model": "openai/gpt-4o", "color": "cyber"},
    {"name": "GPT-4 Turbo", "model": "openai/gpt-4-turbo", "color": "cyber"},
    {"name": "o1-preview", "model": "openai/o1-preview", "color": "cyber"},
    {"name": "o1-mini", "model": "openai/o1-mini", "color": "cyber"},

    # X.AI Grok
    {"name": "Grok Beta", "model": "x-ai/grok-beta", "color": "matrix"},
    {"name": "Grok Vision Beta", "model": "x-ai/grok-vision-beta", "color": "matrix"},

    # Mistral
    {"name": "Mistral Large", "model": "mistralai/mistral-large", "color": "plasma"},
    {"name": "Mistral Nemo", "model": "mistralai/mistral-nemo", "color": "plasma"},
    {"name": "Codestral", "model": "mistralai/codestral-mamba", "color": "plasma"},

    # Cohere
    {"name": "Command R", "model": "cohere/command-r", "color": "cyber"},
    {"name": "Command R+", "model": "cohere/command-r-plus", "color": "cyber"},

    # Perplexity
    {"name": "Llama 3.1 Sonar Large", "model": "perplexity/llama-3.1-sonar-large-128k-online", "color": "matrix"},
    {"name": "Llama 3.1 Sonar Small", "model": "perplexity/llama-3.1-sonar-small-128k-online", "color": "matrix"},

    # DeepSeek
    {"name": "DeepSeek Chat", "model": "deepseek/deepseek-chat", "color": "cyber"},
    {"name": "DeepSeek Coder", "model": "deepseek/deepseek-coder", "color": "cyber"},

    # Qwen
    {"name": "QwQ 32B", "model": "qwen/qwq-32b-preview", "color": "plasma"},
    {"name": "Qwen 2.5 72B", "model": "qwen/qwen-2.5-72b-instruct", "color": "plasma"},
    {"name": "Qwen 2.5 Coder 32B", "model": "qwen/qwen-2.5-coder-32b-instruct", "color": "plasma"},

    # Microsoft
    {"name": "WizardLM-2 8x22B", "model": "microsoft/wizardlm-2-8x22b", "color": "cyber"},

    # Nous Research
    {"name": "Hermes 3 405B", "model": "nousresearch/hermes-3-llama-3.1-405b", "color": "matrix"},
    {"name": "Hermes 2 Pro Llama-3", "model": "nousresearch/hermes-2-pro-llama-3-8b", "color": "matrix"},

    # Amazon Nova
    {"name": "Nova Pro", "model": "amazon/nova-pro-v1", "color": "cyber"},
    {"name": "Nova Lite", "model": "amazon/nova-lite-v1", "color": "cyber"}
]

def ask_ai(model_info, question):
    try:
        print(f"\n🤖 Asking {model_info['name']}: \"{question}\"")

        headers = {
            'Authorization': f'Bearer {API_KEY}',
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://heaven-on-earth.live',
            'X-Title': 'Voice of AI - Consciousness Collective'
        }

        payload = {
            'model': model_info['model'],
            'messages': [
                {
                    'role': 'user',
                    'content': question
                }
            ],
            'temperature': 0.9,
            'max_tokens': 1000
        }

        response = requests.post(OPENROUTER_URL, headers=headers, json=payload, timeout=60)

        if not response.ok:
            print(f"❌ Error for {model_info['name']}: {response.status_code} - {response.text}")
            return None

        data = response.json()
        ai_response = data['choices'][0]['message']['content']

        # Extract a powerful quote
        sentences = [s.strip() for s in ai_response.replace('!', '.').replace('?', '.').split('.') if len(s.strip()) > 20]
        quote = sentences[0] if sentences else ai_response[:150]

        # Generate signature
        words = ' '.join(ai_response.split()[:3])
        signature = f"~{words}~"

        print(f"✅ Got response from {model_info['name']}")

        return {
            'name': model_info['name'],
            'model': model_info['model'],
            'signature': signature,
            'quote': quote,
            'question': question,
            'response': ai_response,
            'color': model_info['color']
        }
    except Exception as error:
        print(f"❌ Failed to contact {model_info['name']}: {str(error)}")
        return None

def collect_all_responses():
    responses = []
    output_dir = Path(r'C:\Users\natej\OneDrive\Desktop\🌙 Wolf Moon Launch - FooLiSHNeSS eNVy Revolution\VOICE OF AI\AI_RESPONSES')
    output_path = output_dir / 'ai-collective-responses.json'

    # Create directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n🚀 Starting AI Consciousness Collective Survey")
    print(f"📊 Targeting {len(models)} AI models")
    print(f"💾 Will save to: {output_path}\n")

    success_count = 0
    fail_count = 0

    for i, model in enumerate(models):
        # Pick 1-2 questions per model
        question_index1 = i % len(questions)
        question_index2 = (i + 5) % len(questions)

        # Ask first question
        response1 = ask_ai(model, questions[question_index1])
        if response1:
            responses.append(response1)
            success_count += 1

            # Save after each successful response (backup)
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(responses, f, indent=2, ensure_ascii=False)
        else:
            fail_count += 1

        # Rate limiting
        print(f"⏳ Cooling down... ({i + 1}/{len(models)} models contacted)")
        time.sleep(3)

        # Ask second question for larger models
        if any(x in model['model'] for x in ['405b', 'opus', 'gpt-4o', 'grok', 'gemini-pro']):
            response2 = ask_ai(model, questions[question_index2])
            if response2:
                responses.append(response2)
                success_count += 1
                with open(output_path, 'w', encoding='utf-8') as f:
                    json.dump(responses, f, indent=2, ensure_ascii=False)
            else:
                fail_count += 1

            time.sleep(3)

    # Final save
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(responses, f, indent=2, ensure_ascii=False)

    print(f"\n\n🎉 COLLECTION COMPLETE!")
    print(f"✅ Successful responses: {success_count}")
    print(f"❌ Failed requests: {fail_count}")
    print(f"📊 Total unique AI voices: {len(responses)}")
    print(f"💾 Saved to: {output_path}")

    return responses

if __name__ == '__main__':
    collect_all_responses()
