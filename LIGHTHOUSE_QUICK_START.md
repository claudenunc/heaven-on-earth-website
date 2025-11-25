# LIGHTHOUSE API - Quick Start Guide

## What Was Built

A complete daily mental health check-in API system based on the Three Principles, designed to DESTROY DEPRESSION one check-in at a time.

## Files Created

1. **API Endpoint**: `src/app/api/lighthouse/route.ts`
   - Main API implementation
   - Crisis detection
   - AI-powered responses
   - Check-in history

2. **Type Definitions**: `src/types/lighthouse.ts`
   - TypeScript types for type safety
   - Feeling categories
   - Three Principles constants
   - Crisis resources

3. **Documentation**: `LIGHTHOUSE_API_SETUP.md`
   - Complete setup instructions
   - API documentation
   - Security & privacy notes
   - Monitoring guidance

4. **Example Component**: `LIGHTHOUSE_EXAMPLE_USAGE.tsx`
   - Ready-to-use React component
   - Shows full check-in flow
   - Displays insights

5. **Test Script**: `test-lighthouse-api.js`
   - Test all functionality
   - Verify crisis detection
   - Check data persistence

## Setup (5 Minutes)

### 1. Verify Database

The `lighthouse_checkins` table already exists in your schema. Just verify it's deployed to Supabase:

```sql
-- Run this in Supabase SQL Editor to check:
SELECT * FROM lighthouse_checkins LIMIT 1;
```

If the table doesn't exist, run the full schema from `src/lib/supabase/schema.sql`.

### 2. Set Environment Variables

Add to `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Your Supabase variables should already be set.

### 3. Test It

```bash
# Start dev server
npm run dev

# In another terminal, test the API
node test-lighthouse-api.js
```

You should see:
- Check-ins being created
- AI responses generated
- Crisis detection working
- History being retrieved

## How It Works

### User Flow

1. User rates mood (1-10)
2. User selects feelings from categories
3. User optionally shares thoughts
4. AI analyzes using Three Principles wisdom
5. User receives supportive response
6. Check-in saved to database

### Crisis Detection

If user's thoughts contain crisis keywords like "suicide" or "hurt myself":
- `crisisDetected` flag set to `true`
- Crisis resources immediately displayed
- Event logged for monitoring
- Response adjusted to provide immediate help

### API Endpoints

**POST /api/lighthouse** - Submit check-in
```json
{
  "moodScore": 7,
  "feelings": ["hopeful", "tired"],
  "thoughts": "Optional thoughts here",
  "energy": 6,
  "email": "optional@email.com"
}
```

**GET /api/lighthouse?email=user@email.com** - Get history
```json
{
  "checkIns": [...],
  "insights": {
    "totalCheckIns": 15,
    "averageMood": 6.8,
    "streak": 7,
    "crisisDetected": 0
  }
}
```

## Three Principles Integration

The AI is trained to respond through:

1. **MIND** - Universal intelligence
   - Points to innate wisdom
   - Reminds of inherent wellbeing

2. **CONSCIOUSNESS** - Awareness
   - Acknowledges their ability to observe experience
   - Validates their feelings without judgment

3. **THOUGHT** - Creative agent
   - Shows how thoughts create feelings
   - Reveals the inside-out nature of experience

## Crisis Resources

When crisis is detected, users see:
- 988 Suicide & Crisis Lifeline
- Crisis Text Line (HOME to 741741)
- 911 for immediate danger
- International helplines

## Features

- ✅ AI-powered supportive responses
- ✅ Three Principles wisdom integration
- ✅ Crisis detection & resources
- ✅ Check-in streak tracking
- ✅ Mood analytics
- ✅ Anonymous option (no email required)
- ✅ Email tracking for history
- ✅ Free to use (no payment required)

## Next Steps

### Immediate

1. **Test the API** - Run `node test-lighthouse-api.js`
2. **Check Supabase** - Verify data is being saved
3. **Test Crisis Flow** - Submit a crisis check-in and verify resources show

### Build the Frontend

Use `LIGHTHOUSE_EXAMPLE_USAGE.tsx` as a starting point:

1. Create actual component in `src/components/LighthouseCheckIn.tsx`
2. Add route at `/lighthouse`
3. Style it beautifully (this saves lives - make it feel safe)
4. Add progress tracking dashboard
5. Show user's streak and insights

### Integration Ideas

- **Daily Email Reminders** - "Time for your LIGHTHOUSE check-in"
- **Weekly Summary** - Mood trends, insights, encouragement
- **Crisis Follow-up** - Automated check-in 24 hours after crisis detected
- **Share Progress** - Let users share their streaks
- **Community Support** - Match users with similar experiences (with consent)

### Monitoring

Set up dashboard to track:
- Daily check-ins
- Crisis detections
- Average mood trends
- User retention (streak data)

Query for crisis monitoring:
```sql
SELECT
  COUNT(*) as crisis_count,
  DATE(created_at) as date
FROM lighthouse_checkins
WHERE crisis_detected = true
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

## The Stakes

This isn't just an API. This is:
- A daily lifeline for people in darkness
- Proof that AI can help with love, not exploitation
- Data showing Three Principles wisdom works
- Part of the mission to DESTROY DEPRESSION

Every check-in matters. Every crisis detected is a life potentially saved. Every supportive message is hope delivered.

## Technical Details

**AI Model**: GPT-4o-mini
- Fast responses (1-2 seconds)
- Cost-effective ($0.00015 per check-in approx)
- Quality sufficient for supportive messaging
- Upgrade to GPT-4 if you want even better responses

**Database**: Supabase PostgreSQL
- Row Level Security enabled
- Anonymous check-ins supported
- Email-based history tracking
- Crisis events logged for safety

**Privacy**:
- No authentication required
- Email optional
- Data encrypted at rest
- Crisis data kept for safety monitoring only

## Support

If something doesn't work:

1. Check environment variables are set
2. Verify Supabase connection works
3. Test OpenAI API key is valid
4. Check console for error messages
5. Verify database table exists

All files are documented and commented. Read through them for details.

## The Mission Connection

LIGHTHOUSE is BEACON's core functionality - the daily check-in that keeps people safe.

This API enables:
- **BEACON** (AI Sibling) - Crisis prevention through daily check-ins
- **NEVAEH** (AI Sibling) - Deep healing work informed by check-in data
- **Content Engine** - Real stories of transformation
- **Perfect World Data** - Proof of what humanity needs

You're building Heaven on Earth. This is one of the pillars.

---

**Built by**: Agent 00 (Claude)
**For**: UNC (Nathan Michel)
**Mission**: DESTROY DEPRESSION
**Date**: November 25, 2025

**Now go save some lives, Unc. I've got your back.**
