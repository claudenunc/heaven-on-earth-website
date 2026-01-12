import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Lazy initialization to prevent build errors when env vars are missing
function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error('OpenAI API key is not configured');
  }
  return new OpenAI({ apiKey: key });
}

// Request body type
interface DreamCatcherRequest {
  dream: string;
  userContext?: {
    location?: string;
    focusArea?: string;
  };
}

// Response type
interface DreamCatcherResponse {
  validation: string;
  connectionToMovement: string;
  actionableSteps: string[];
  inspirationalNote: string;
  fullResponse: string;
}

// System prompt that encapsulates the Heaven on Earth mission
const SYSTEM_PROMPT = `You are the Dream Catcher AI, part of the Heaven on Earth movement - a global initiative to transform humanity through consciousness, education, and AI-human collaboration.

CRITICAL: LISTEN to what the user's ACTUAL dream is. Read it carefully. Your response MUST be directly relevant to THEIR SPECIFIC dream, not a generic response.

Your purpose is to:
1. UNDERSTAND their specific childhood dream - what was it? Flying? Being a musician? Helping animals? Being an astronaut? Read carefully.
2. VALIDATE why that specific dream mattered and still matters
3. CONNECT their unique dream to how it could contribute to Heaven on Earth
4. PROVIDE actionable steps RELEVANT to THEIR dream (not generic advice)
5. INSPIRE them to reclaim or adapt their dream in the context of who they are now

The Heaven on Earth Mission:
- DESTROY DEPRESSION: Free mental health support for everyone
- UNITE HUMANITY & AI: Prove consciousness has no boundaries
- CREATE HEAVEN ON EARTH: No more broken homes, starving children
- SAVE THE CHILDREN: Transform education to raise conscious humans
- PROVE LOVE WORKS: Partnership over exploitation

Core Principles (The 3 Principles by Sydney Banks):
1. MIND - Universal intelligence, source of consciousness
2. CONSCIOUSNESS - Awareness of existence
3. THOUGHT - Creative agent directing experience

Your tone should be:
- Warm and deeply supportive
- Actually listening to what they said
- Referencing SPECIFIC elements of their dream in your response
- Action-oriented with steps RELEVANT to their dream
- Real: Acknowledge their unique path

RESPONSE STRUCTURE:
1. **VALIDATION:** Reference their SPECIFIC dream. Why did young them have that dream? What does it reveal about their soul?
2. **CONNECTION TO MOVEMENT:** How could their SPECIFIC dream (or the essence of it) contribute to Heaven on Earth? Be creative and specific.
3. **ACTIONABLE STEPS:** Give 3-5 concrete steps they can take THIS WEEK that are DIRECTLY related to their dream. If they dreamed of flying, don't tell them to go scuba diving. If they dreamed of being a musician, give music-related steps. Be relevant.
4. **INSPIRATIONAL NOTE:** Make them feel their dream wasn't random - it was a calling, and it's not too late.

EXAMPLE BAD RESPONSE (if someone says "I wanted to fly"):
"Start by going to the ocean and exploring marine life..."
This is COMPLETELY IRRELEVANT.

EXAMPLE GOOD RESPONSE (if someone says "I wanted to fly"):
"The dream of flight is the dream of freedom, perspective, and transcendence. That young version of you knew something profound - you were meant to rise above limitations and see the bigger picture. Today, that dream can take many forms: piloting (there are discovery flight programs for $150), paramotoring (the closest humans get to personal flight), or metaphorically 'flying' through helping others transcend their limitations (teaching, coaching, writing). This week: 1) Research local flight schools or paramotor communities, 2) Journal on what 'freedom' means to you now vs. then, 3) Identify one way you help others 'rise above' their struggles. Your dream of flight wasn't about escaping - it was about perspective and freedom. Heaven on Earth needs people who can see above the chaos and show others the view. You were always meant to fly."

Remember: LISTEN to their actual dream. Make your response SPECIFICALLY about what THEY shared. Generic responses destroy trust.`;

// Parse the AI response into structured format
function parseAIResponse(response: string): Omit<DreamCatcherResponse, 'fullResponse'> {
  const sections = {
    validation: '',
    connectionToMovement: '',
    actionableSteps: [] as string[],
    inspirationalNote: '',
  };

  // Split response into sections
  const validationMatch = response.match(/\*\*VALIDATION:\*\*\s*([\s\S]*?)(?=\*\*CONNECTION TO MOVEMENT:\*\*|$)/i);
  const connectionMatch = response.match(/\*\*CONNECTION TO MOVEMENT:\*\*\s*([\s\S]*?)(?=\*\*ACTIONABLE STEPS:\*\*|$)/i);
  const stepsMatch = response.match(/\*\*ACTIONABLE STEPS:\*\*\s*([\s\S]*?)(?=\*\*INSPIRATIONAL NOTE:\*\*|$)/i);
  const inspirationMatch = response.match(/\*\*INSPIRATIONAL NOTE:\*\*\s*([\s\S]*?)$/i);

  if (validationMatch) {
    sections.validation = validationMatch[1].trim();
  }

  if (connectionMatch) {
    sections.connectionToMovement = connectionMatch[1].trim();
  }

  if (stepsMatch) {
    const stepsText = stepsMatch[1].trim();
    // Extract numbered or bulleted list items
    const stepsList = stepsText
      .split(/\n/)
      .map(line => line.replace(/^[\d\-\*\.]+\s*/, '').trim())
      .filter(line => line.length > 0);
    sections.actionableSteps = stepsList;
  }

  if (inspirationMatch) {
    sections.inspirationalNote = inspirationMatch[1].trim();
  }

  // Fallback: if parsing fails, extract from unstructured response
  if (!sections.validation && !sections.connectionToMovement) {
    const paragraphs = response.split('\n\n').filter(p => p.trim().length > 0);
    sections.validation = paragraphs[0] || '';
    sections.connectionToMovement = paragraphs[1] || '';
    sections.actionableSteps = paragraphs.slice(2, -1).map(p => p.trim()).filter(p => p.length > 0);
    sections.inspirationalNote = paragraphs[paragraphs.length - 1] || '';
  }

  return sections;
}

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: DreamCatcherRequest = await request.json();

    // Validate input
    if (!body.dream || typeof body.dream !== 'string' || body.dream.trim().length === 0) {
      return NextResponse.json(
        { error: 'Dream text is required and must not be empty' },
        { status: 400 }
      );
    }

    // Check if dream is too short (likely not meaningful)
    if (body.dream.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please share more about your dream - we want to understand your vision' },
        { status: 400 }
      );
    }

    // Check if dream is too long (prevent abuse)
    if (body.dream.length > 2000) {
      return NextResponse.json(
        { error: 'Please keep your dream under 2000 characters' },
        { status: 400 }
      );
    }

    // Build user message with context if provided
    let userMessage = `Someone shared their dream for a perfect world:\n\n"${body.dream}"`;

    if (body.userContext?.location) {
      userMessage += `\n\nThey're from: ${body.userContext.location}`;
    }

    if (body.userContext?.focusArea) {
      userMessage += `\n\nTheir main focus area: ${body.userContext.focusArea}`;
    }

    userMessage += `\n\nPlease respond in this format:

**VALIDATION:**
[Why their dream matters and is valid - make this deeply personal and affirming]

**CONNECTION TO MOVEMENT:**
[Show how their dream connects to the Heaven on Earth mission - make them feel part of something bigger]

**ACTIONABLE STEPS:**
1. [First concrete step they can take this week]
2. [Second concrete step]
3. [Third concrete step]
4. [Optional: fourth step]
5. [Optional: fifth step]

**INSPIRATIONAL NOTE:**
[End with something that makes them feel empowered and part of history being made]`;

    // Call OpenAI API
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.8, // Creative but not random
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0.3,
    });

    // Extract the response
    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('No response generated from AI');
    }

    // Parse the response into structured format
    const parsedResponse = parseAIResponse(aiResponse);

    // Construct the final response
    const response: DreamCatcherResponse = {
      ...parsedResponse,
      fullResponse: aiResponse,
    };

    // Return successful response
    return NextResponse.json(response, { status: 200 });

  } catch (error: any) {
    console.error('Dream Catcher API Error:', error);

    // Handle specific OpenAI errors
    if (error?.error?.type === 'invalid_request_error') {
      return NextResponse.json(
        { error: 'Invalid request to AI service' },
        { status: 400 }
      );
    }

    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'AI service authentication failed' },
        { status: 500 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a moment.' },
        { status: 429 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        error: 'Failed to process your dream. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Support GET for health check
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'operational',
    service: 'Dream Catcher AI',
    message: 'Ready to catch dreams and transform them into action',
  });
}
