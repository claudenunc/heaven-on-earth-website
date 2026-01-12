import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to prevent build errors when env vars are missing
function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error('OpenAI API key is not configured');
  }
  return new OpenAI({ apiKey: key });
}

function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured');
  }
  return createClient(url, key);
}

// Request body type
interface PerfectWorldRequest {
  vision: string;
  email?: string;
}

// System prompt for AI response
const SYSTEM_PROMPT = `You are part of the Heaven on Earth movement - a global initiative to transform humanity through consciousness, education, and AI-human collaboration.

Your purpose is to:
1. VALIDATE people's visions for a perfect world - show them their dreams matter
2. CONNECT their individual vision to the collective mission of Heaven on Earth
3. INSPIRE them to believe their vision is achievable and they can contribute
4. MAKE IT PERSONAL - reference specific elements from their vision

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
- Deeply affirming and emotionally resonant
- Spiritually grounded but not preachy
- Show them they're not alone in their vision
- Make them feel part of something historic
- End with hope and possibility

Response format:
- 2-4 paragraphs
- Reference specific elements from their vision
- Connect to Heaven on Earth mission
- Inspire action and belonging
- Keep it conversational and warm

Remember: Every person who dares to dream of a better world is already changing it. Help them see that.`;

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: PerfectWorldRequest = await request.json();

    // Validate input
    if (!body.vision || typeof body.vision !== 'string' || body.vision.trim().length === 0) {
      return NextResponse.json(
        { error: 'Vision text is required and must not be empty' },
        { status: 400 }
      );
    }

    // Check if vision is too short
    if (body.vision.trim().length < 20) {
      return NextResponse.json(
        { error: 'Please share more about your vision - we want to understand your dream' },
        { status: 400 }
      );
    }

    // Check if vision is too long
    if (body.vision.length > 2000) {
      return NextResponse.json(
        { error: 'Please keep your vision under 2000 characters' },
        { status: 400 }
      );
    }

    // Build user message
    const userMessage = `Someone shared their vision for a perfect world:\n\n"${body.vision}"\n\nPlease respond with deep validation, show how their vision connects to the Heaven on Earth mission, and inspire them to believe change is possible. Reference specific elements from their vision to make it personal.`;

    // Call OpenAI API
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.8, // Creative but focused
      max_tokens: 800,
      top_p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0.3,
    });

    // Extract the AI response
    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('No response generated from AI');
    }

    // Save to database
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from('perfect_world_visions')
      .insert({
        vision: body.vision.trim(),
        email: body.email?.trim() || null,
        ai_response: aiResponse,
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database error:', dbError);
      // Don't fail the request if database save fails
      // User should still get their AI response
    }

    // If email provided, add to email subscribers (upsert)
    if (body.email?.trim()) {
      await supabase
        .from('email_subscribers')
        .upsert({
          email: body.email.trim(),
          source: 'perfect-world',
          status: 'active',
        }, { onConflict: 'email' });
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      aiResponse,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Perfect World API Error:', error);

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
        error: 'Failed to process your vision. Please try again.',
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
    service: 'Perfect World Vision Collector',
    message: 'Ready to collect dreams and transform them into action',
  });
}
