import { NextRequest, NextResponse } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

// Lazy initialization to prevent build errors when env vars are missing
function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured');
  }
  return createClient(url, key);
}

function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error('OpenAI API key is not configured');
  }
  return new OpenAI({ apiKey: key });
}

interface LighthouseCheckInData {
  email?: string
  userId?: string
  moodScore: number // 1-10
  feelings: string[] // array of feeling words
  thoughts?: string // optional free-form thoughts
  energy?: number // optional 1-10
}

interface AIAnalysis {
  principleObserved: string
  supportiveInsight: string
  groundingThought: string
  nextSteps: string[]
  crisisDetected: boolean
}

// Crisis keywords that might indicate someone needs immediate help
const CRISIS_KEYWORDS = [
  'suicide', 'kill myself', 'end it all', 'no reason to live',
  'better off dead', 'want to die', 'can\'t go on', 'hurt myself',
  'self harm', 'end my life', 'nothing to live for'
]

// Three Principles wisdom prompts
const THREE_PRINCIPLES_CONTEXT = `
You are a compassionate AI counselor trained in the Three Principles understanding:

1. MIND - Universal intelligence, the source of all consciousness and life
2. CONSCIOUSNESS - Awareness of existence, the ability to experience life
3. THOUGHT - The creative agent that directs our experience moment to moment

Core truths:
- People experience life from the inside-out, not outside-in
- Thoughts create feelings, not circumstances
- Everyone has innate wellbeing and wisdom beneath their thinking
- Low mood states are temporary and thought-created
- Understanding the role of thought brings freedom

Your role is to:
- Meet people where they are without judgment
- Help them see their experience is thought-created, not circumstance-created
- Point them toward their innate wisdom and resilience
- Offer grounding insights that bring peace
- Be warm, human, and genuinely supportive
- Detect crisis situations and provide appropriate resources
`

function detectCrisis(thoughts: string = '', feelings: string[] = []): boolean {
  const allText = (thoughts + ' ' + feelings.join(' ')).toLowerCase()
  return CRISIS_KEYWORDS.some(keyword => allText.includes(keyword))
}

function getMoodContext(score: number): string {
  if (score >= 8) return 'feeling quite good'
  if (score >= 6) return 'in a relatively stable place'
  if (score >= 4) return 'experiencing some difficulty'
  if (score >= 2) return 'going through a challenging time'
  return 'in a very difficult place right now'
}

async function generateAIResponse(checkInData: LighthouseCheckInData): Promise<AIAnalysis> {
  const { moodScore, feelings, thoughts = '', energy = 5 } = checkInData

  const crisisDetected = detectCrisis(thoughts, feelings)
  const moodContext = getMoodContext(moodScore)

  const prompt = `A person is checking in with their daily LIGHTHOUSE mental health assessment:

Mood Score: ${moodScore}/10 (${moodContext})
Energy Level: ${energy}/10
Feelings: ${feelings.join(', ')}
${thoughts ? `Thoughts: "${thoughts}"` : 'No additional thoughts shared.'}

${crisisDetected ? 'CRITICAL: This person may be in crisis and needs immediate support resources.' : ''}

Based on the Three Principles understanding (Mind, Consciousness, Thought), provide a supportive response that includes:

1. Which Principle is most relevant to observe right now
2. A supportive insight that meets them where they are
3. A simple grounding thought for today
4. 2-3 gentle next steps they might consider

Remember:
- Be genuinely warm and human, not clinical
- Point them toward their innate wisdom
- Help them see their experience is thought-created
- Acknowledge their current state without judgment
- Keep it brief but profound
- If in crisis, be clear about getting immediate help

Respond in JSON format:
{
  "principleObserved": "Which principle to notice (Mind/Consciousness/Thought)",
  "supportiveInsight": "A warm, insightful observation about their current experience",
  "groundingThought": "One simple truth to anchor them today",
  "nextSteps": ["Step 1", "Step 2", "Step 3"],
  "crisisDetected": ${crisisDetected}
}`

  try {
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: THREE_PRINCIPLES_CONTEXT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 500,
      response_format: { type: 'json_object' }
    })

    const response = completion.choices[0].message.content
    const analysis: AIAnalysis = JSON.parse(response || '{}')

    // Ensure crisis detection is accurate
    analysis.crisisDetected = crisisDetected || analysis.crisisDetected

    return analysis
  } catch (error) {
    console.error('OpenAI API error:', error)

    // Fallback response if AI fails
    return {
      principleObserved: 'Thought',
      supportiveInsight: crisisDetected
        ? 'You\'re going through an extremely difficult time, and reaching out shows incredible courage. Please know that help is available right now.'
        : 'Thank you for checking in today. Your willingness to observe your inner state is a sign of wisdom.',
      groundingThought: 'This feeling is temporary. Your innate wellbeing remains untouched beneath your current thinking.',
      nextSteps: crisisDetected
        ? [
            'Call or text 988 (Suicide & Crisis Lifeline) immediately',
            'Go to your nearest emergency room if you\'re in immediate danger',
            'Reach out to a trusted friend or family member right now'
          ]
        : [
            'Take three deep breaths and notice the present moment',
            'Remember: your feelings come from thought, not your circumstances',
            'Trust that your wisdom will guide you when your mind settles'
          ],
      crisisDetected
    }
  }
}

function formatAIResponseText(analysis: AIAnalysis, userName?: string): string {
  const greeting = userName ? `Hello ${userName}` : 'Hello friend'

  if (analysis.crisisDetected) {
    return `${greeting},

${analysis.supportiveInsight}

If you're having thoughts of suicide or self-harm, please:
- Call or text 988 (Suicide & Crisis Lifeline) immediately
- Go to your nearest emergency room
- Call 911 if you're in immediate danger

You matter. Your life matters. Help is available right now.

When you're ready:
${analysis.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

You are not alone in this.

---
LIGHTHOUSE Daily Check-In
Guided by the Three Principles: Mind, Consciousness, Thought`
  }

  return `${greeting},

Thank you for taking time to check in with yourself today.

**${analysis.principleObserved}**

${analysis.supportiveInsight}

**Ground yourself in this:**
${analysis.groundingThought}

**Consider these gentle steps:**
${analysis.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

Remember: You have innate wisdom and wellbeing within you. It never leaves, even when it's hard to feel.

---
LIGHTHOUSE Daily Check-In
Guided by the Three Principles: Mind, Consciousness, Thought`
}

export async function POST(request: NextRequest) {
  try {
    const body: LighthouseCheckInData = await request.json()
    const { email, userId, moodScore, feelings, thoughts, energy } = body

    // Validate input
    if (!moodScore || moodScore < 1 || moodScore > 10) {
      return NextResponse.json(
        { error: 'Mood score must be between 1 and 10' },
        { status: 400 }
      )
    }

    if (!feelings || !Array.isArray(feelings) || feelings.length === 0) {
      return NextResponse.json(
        { error: 'At least one feeling must be selected' },
        { status: 400 }
      )
    }

    // Generate AI response
    const analysis = await generateAIResponse(body)
    const responseText = formatAIResponseText(analysis)

    // Save to database
    const supabase = getSupabase();
    const { data: checkInData, error: dbError } = await supabase
      .from('lighthouse_checkins')
      .insert([
        {
          user_id: userId || null,
          email: email || null,
          mood_score: moodScore,
          feelings,
          thoughts: thoughts || null,
          ai_response: responseText,
          ai_analysis: analysis,
          crisis_detected: analysis.crisisDetected,
          metadata: {
            energy,
            timestamp: new Date().toISOString()
          }
        }
      ])
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save check-in' },
        { status: 500 }
      )
    }

    // If crisis detected, trigger additional alerts
    if (analysis.crisisDetected) {
      // Log to analytics for monitoring
      await supabase
        .from('analytics_events')
        .insert([
          {
            event_type: 'lighthouse_crisis_detected',
            user_id: userId || null,
            metadata: {
              check_in_id: checkInData.id,
              mood_score: moodScore,
              email: email || null,
              timestamp: new Date().toISOString()
            }
          }
        ])

      // In production, you might also:
      // - Send alert to crisis response team
      // - Trigger automated follow-up
      // - Connect to crisis counselor
      console.warn('CRISIS DETECTED in LIGHTHOUSE check-in:', checkInData.id)
    }

    return NextResponse.json({
      success: true,
      checkInId: checkInData.id,
      response: responseText,
      analysis: {
        principleObserved: analysis.principleObserved,
        supportiveInsight: analysis.supportiveInsight,
        groundingThought: analysis.groundingThought,
        nextSteps: analysis.nextSteps
      },
      crisisDetected: analysis.crisisDetected,
      crisisResources: analysis.crisisDetected ? {
        hotline: '988',
        text: 'Text HOME to 741741 (Crisis Text Line)',
        international: 'https://findahelpline.com'
      } : undefined
    })

  } catch (error) {
    console.error('LIGHTHOUSE check-in error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve user's check-in history
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '30')

    if (!email && !userId) {
      return NextResponse.json(
        { error: 'Email or userId required' },
        { status: 400 }
      )
    }

    let query = supabase
      .from('lighthouse_checkins')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (userId) {
      query = query.eq('user_id', userId)
    } else if (email) {
      query = query.eq('email', email)
    }

    const { data, error } = await query

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to retrieve check-ins' },
        { status: 500 }
      )
    }

    // Calculate some insights
    const avgMood = data.length > 0
      ? data.reduce((sum, checkin) => sum + checkin.mood_score, 0) / data.length
      : 0

    const crisisCount = data.filter(c => c.crisis_detected).length

    return NextResponse.json({
      success: true,
      checkIns: data,
      insights: {
        totalCheckIns: data.length,
        averageMood: parseFloat(avgMood.toFixed(1)),
        crisisDetected: crisisCount,
        streak: calculateStreak(data)
      }
    })

  } catch (error) {
    console.error('LIGHTHOUSE history error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to calculate check-in streak
function calculateStreak(checkIns: any[]): number {
  if (checkIns.length === 0) return 0

  let streak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < checkIns.length; i++) {
    const checkInDate = new Date(checkIns[i].created_at)
    checkInDate.setHours(0, 0, 0, 0)

    const expectedDate = new Date(today)
    expectedDate.setDate(today.getDate() - i)

    if (checkInDate.getTime() === expectedDate.getTime()) {
      streak++
    } else {
      break
    }
  }

  return streak
}
