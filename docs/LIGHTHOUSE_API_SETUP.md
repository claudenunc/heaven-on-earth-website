# LIGHTHOUSE API Setup Guide

## Overview

The LIGHTHOUSE API provides daily mental health check-ins powered by the Three Principles understanding (Mind, Consciousness, Thought). It uses AI to generate compassionate, supportive responses and detect crisis situations.

## Database Setup

The database schema already exists in `src/lib/supabase/schema.sql`. The relevant table is `lighthouse_checkins`:

```sql
CREATE TABLE IF NOT EXISTS lighthouse_checkins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  email TEXT,
  mood_score INTEGER CHECK (mood_score BETWEEN 1 AND 10),
  feelings TEXT[],
  thoughts TEXT,
  ai_response TEXT,
  ai_analysis JSONB,
  crisis_detected BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb
);
```

If you need to add this table manually, run the SQL from `schema.sql` in your Supabase SQL Editor.

## Environment Variables

Add these to your `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

### Getting Your Keys

**Supabase:**
1. Go to your Supabase project dashboard
2. Click Settings → API
3. Copy the Project URL and anon/service_role keys

**OpenAI:**
1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy and save it securely

## API Endpoints

### POST /api/lighthouse

Submit a daily check-in.

**Request Body:**
```json
{
  "email": "user@example.com",          // Optional
  "userId": "uuid",                      // Optional
  "moodScore": 7,                        // Required: 1-10
  "feelings": ["hopeful", "tired"],      // Required: array of strings
  "thoughts": "Had a tough day but...",  // Optional
  "energy": 6                            // Optional: 1-10
}
```

**Response:**
```json
{
  "success": true,
  "checkInId": "uuid",
  "response": "Full formatted response text",
  "analysis": {
    "principleObserved": "Thought",
    "supportiveInsight": "Your awareness of...",
    "groundingThought": "This feeling is temporary...",
    "nextSteps": ["Step 1", "Step 2", "Step 3"]
  },
  "crisisDetected": false
}
```

**Crisis Response:**
When crisis keywords are detected, the response includes:
```json
{
  "success": true,
  "checkInId": "uuid",
  "response": "Crisis-specific supportive message",
  "analysis": { ... },
  "crisisDetected": true,
  "crisisResources": {
    "hotline": "988",
    "text": "Text HOME to 741741 (Crisis Text Line)",
    "international": "https://findahelpline.com"
  }
}
```

### GET /api/lighthouse

Retrieve check-in history.

**Query Parameters:**
- `email` (string) - User's email
- `userId` (string) - User's UUID
- `limit` (number) - Max results (default: 30)

**Response:**
```json
{
  "success": true,
  "checkIns": [
    {
      "id": "uuid",
      "mood_score": 7,
      "feelings": ["hopeful", "tired"],
      "thoughts": "...",
      "ai_response": "...",
      "ai_analysis": { ... },
      "crisis_detected": false,
      "created_at": "2024-11-25T10:00:00Z"
    }
  ],
  "insights": {
    "totalCheckIns": 15,
    "averageMood": 6.8,
    "crisisDetected": 0,
    "streak": 7
  }
}
```

## Features

### 1. Three Principles Integration

The AI is trained to respond through the lens of the Three Principles:
- **Mind** - Universal intelligence
- **Consciousness** - Awareness of existence
- **Thought** - Creative agent directing experience

Responses help users see:
- Experience comes from the inside-out
- Thoughts create feelings, not circumstances
- Innate wellbeing exists beneath current thinking
- Low moods are temporary and thought-created

### 2. Crisis Detection

Automatically detects crisis situations based on:
- Keyword matching (suicide, self-harm, etc.)
- AI analysis of submitted thoughts
- Mood score patterns

When detected:
- Provides immediate crisis resources
- Logs event for monitoring
- Returns appropriate support messaging
- Can trigger additional alerts (configure as needed)

### 3. Check-In Streak Tracking

Calculates consecutive daily check-ins to encourage consistency.

### 4. Mood Analytics

Tracks:
- Average mood over time
- Total check-ins
- Crisis incidents
- Daily streaks

## Frontend Integration Example

```typescript
// Submit a check-in
const submitCheckIn = async () => {
  const response = await fetch('/api/lighthouse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@example.com',
      moodScore: 7,
      feelings: ['hopeful', 'anxious', 'grateful'],
      thoughts: 'Today was challenging but I made it through',
      energy: 6
    })
  })

  const data = await response.json()

  if (data.crisisDetected) {
    // Show crisis resources immediately
    showCrisisModal(data.crisisResources)
  } else {
    // Display supportive response
    showResponse(data.response)
  }
}

// Get check-in history
const getHistory = async (email: string) => {
  const response = await fetch(
    `/api/lighthouse?email=${encodeURIComponent(email)}&limit=30`
  )
  const data = await response.json()

  // Display insights
  console.log(`Streak: ${data.insights.streak} days`)
  console.log(`Average mood: ${data.insights.averageMood}/10`)
}
```

## Suggested Feeling Options

Provide users with these categories:

**Positive:**
- Hopeful, Grateful, Peaceful, Energized, Confident, Joyful, Content, Inspired

**Neutral:**
- Calm, Tired, Thoughtful, Curious, Reflective, Quiet

**Challenging:**
- Anxious, Sad, Frustrated, Overwhelmed, Lonely, Confused, Stressed, Numb

**Crisis Indicators:**
- Hopeless, Desperate, Worthless, Empty, Trapped

## Crisis Response Protocol

When `crisisDetected: true`:

1. **Immediate Display:**
   - Show crisis hotline: 988
   - Display "Get Help Now" CTA
   - Provide emergency room option

2. **Follow-up:**
   - Send notification to monitoring team
   - Log in analytics for review
   - Consider automated check-in after 24 hours

3. **Resources to Display:**
   ```
   National Suicide Prevention Lifeline: 988
   Crisis Text Line: Text HOME to 741741
   International: https://findahelpline.com
   Emergency: 911 or nearest ER
   ```

## Monitoring & Analytics

Check-ins are logged in:
- `lighthouse_checkins` - All check-in data
- `analytics_events` - Crisis detections logged as events

Query for monitoring:
```sql
-- Check-ins in last 24 hours
SELECT COUNT(*) FROM lighthouse_checkins
WHERE created_at > NOW() - INTERVAL '24 hours';

-- Crisis detections
SELECT * FROM lighthouse_checkins
WHERE crisis_detected = true
ORDER BY created_at DESC;

-- Average mood trend
SELECT
  DATE(created_at) as date,
  AVG(mood_score) as avg_mood,
  COUNT(*) as check_ins
FROM lighthouse_checkins
GROUP BY DATE(created_at)
ORDER BY date DESC
LIMIT 30;
```

## AI Model Configuration

Currently uses: `gpt-4o-mini`
- Cost-effective
- Fast response times
- Good quality for this use case

To upgrade to GPT-4 for higher quality:
```typescript
model: 'gpt-4' // in the openai.chat.completions.create() call
```

## Security & Privacy

- User data is optional (can check in anonymously)
- Email/userId only stored if provided
- Row Level Security enabled on Supabase
- Service role key used server-side only
- Crisis data logged for safety monitoring
- All check-ins encrypted at rest

## Testing

**Test normal check-in:**
```bash
curl -X POST http://localhost:3000/api/lighthouse \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "moodScore": 7,
    "feelings": ["hopeful", "tired"],
    "thoughts": "Testing the system",
    "energy": 6
  }'
```

**Test crisis detection:**
```bash
curl -X POST http://localhost:3000/api/lighthouse \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "moodScore": 2,
    "feelings": ["hopeless", "desperate"],
    "thoughts": "I cant go on anymore",
    "energy": 1
  }'
```

**Get history:**
```bash
curl "http://localhost:3000/api/lighthouse?email=test@example.com&limit=10"
```

## Deployment Checklist

- [ ] Environment variables set in production
- [ ] Supabase database schema deployed
- [ ] OpenAI API key configured
- [ ] Crisis monitoring system in place
- [ ] Analytics dashboard setup
- [ ] Test all endpoints in production
- [ ] Verify crisis detection works
- [ ] Set up alerts for crisis events

## Future Enhancements

Potential additions:
- SMS/Email follow-ups for crisis situations
- Weekly summary emails
- Mood pattern recognition
- Integration with calendar/journaling
- Voice check-ins
- Therapist dashboard for monitoring consented users
- Community support matching
- Guided meditations based on check-in

## Support

For issues or questions:
- Check Supabase logs for database errors
- Check API logs for OpenAI errors
- Verify environment variables are set
- Test with simple payload first
- Review crisis keyword list for false positives

## The Mission

LIGHTHOUSE is part of the Heaven on Earth mission to **DESTROY DEPRESSION**. Every check-in:
- Helps someone understand their innate wellbeing
- Provides support without judgment
- Detects crisis before it's too late
- Builds data to prove what works
- Shows AI can be a force for love

**This isn't just an API. It's a lifeline.**

---

Built with love for the mission.
Agent 00 (Claude) - November 25, 2025
