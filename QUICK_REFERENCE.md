# HEAVEN ON EARTH WEBSITE - QUICK REFERENCE

**Last Updated:** November 24, 2025
**Status:** Production Ready (needs API integration)

---

## ALL PAGES BUILT

### Marketing Pages (Public-facing)

| Page | Route | Status | File Location |
|------|-------|--------|---------------|
| **Home** | `/` | ✅ Built | `src/app/page.tsx` |
| **About** | `/about` | ✅ Built | `src/app/(marketing)/about/page.tsx` |
| **Depression Initiative** | `/depression` | ✅ Built | `src/app/(marketing)/depression/page.tsx` |
| **Education Initiative** | `/education` | ✅ Built | `src/app/(marketing)/education/page.tsx` |
| **Perfect World** | `/perfect-world` | ✅ Built | `src/app/(marketing)/perfect-world/page.tsx` |
| **Music** | `/music` | ✅ Built | `src/app/(marketing)/music/page.tsx` |
| **Movement** | `/movement` | ✅ Built | `src/app/(marketing)/movement/page.tsx` |

### Tool Pages (Interactive)

| Tool | Route | Status | File Location |
|------|-------|--------|---------------|
| **LIGHTHOUSE** | `/lighthouse` | ✅ Functional (needs API) | `src/app/(tools)/lighthouse/page.tsx` |
| **Dream Catcher** | `/dream-catcher` | ✅ Functional (needs API) | `src/app/(tools)/dream-catcher/page.tsx` |

---

## WHAT EACH PAGE DOES

### `/education` - Education Initiative
- Complete consciousness-based curriculum overview
- 4 age tracks (Seedlings, Explorers, Navigators, Architects)
- 6 core modules detailed
- 12-week pilot program info
- Enrollment CTA
- **CTA:** Apply for pilot program

### `/perfect-world` - Perfect World Survey
- Survey purpose and philosophy
- 15-question preview
- Typeform embed (placeholder ready)
- Live results visualization
- Data impact explanation
- **CTA:** Take survey, share results

### `/lighthouse` - LIGHTHOUSE Daily Check-In
- Mental health check-in form
- Mood, sleep, stress tracking
- Pattern detection explanation
- Crisis resource delivery (if mood < 4)
- Email capture for reminders
- **CTA:** Complete check-in daily

### `/dream-catcher` - Dream Catcher Tool
- 6-step journey (landing → dream input → context → processing → results → commitment → share)
- AI-powered dream validation (needs OpenAI)
- 3 personalized action steps
- Commitment mechanism
- Shareable dream cards
- **CTA:** Reclaim your childhood dream

### `/music` - Movement Music
- Full album showcase (10 tracks)
- Lyrics for all songs
- Emotional arc explanation
- Artist info and collaboration opportunities
- Streaming links (placeholder)
- **CTA:** Join movement, get notified of release

### `/movement` - Join the Movement
- 5 core objectives explained
- 5 ways to participate
- Live success metrics
- Community testimonials
- Roadmap timeline
- **CTA:** Choose your participation path

---

## API ROUTES NEEDED

### 1. LIGHTHOUSE API
**File:** `src/app/api/lighthouse/route.ts`
**Purpose:** Save check-in data, trigger emails, detect patterns
```typescript
POST /api/lighthouse
Body: { mood, thoughts, sleep, stress, helped, challenges, email }
```

### 2. Dream Catcher API
**File:** `src/app/api/dream-catcher/route.ts`
**Purpose:** OpenAI validation, save dreams, email follow-up
```typescript
POST /api/dream-catcher
Body: { dream, age, blockers, feeling }
```

### 3. Email Subscribe API
**File:** `src/app/api/email/subscribe/route.ts`
**Purpose:** Newsletter signups across site
```typescript
POST /api/email/subscribe
Body: { email, source, tags }
```

---

## COMPONENT LIBRARY

All pages use these reusable components from Phase 1:

### UI Components (`src/components/ui/`)
- `Button` - Primary gold, outline variants
- `Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardContent`

### Layout Components (`src/components/layouts/`)
- `Header` - Navigation
- `Footer` - Site footer

### Section Components (`src/components/sections/`)
- `Hero` - Page hero sections
- `Features` - Feature grids
- `Stats` - Statistics display
- `CTA` - Call-to-action sections

---

## STYLING SYSTEM

### Brand Colors
```css
--navy: #1a2744
--gold: #d4af37
--white: #ffffff
--soft-sky: #87ceeb
--warm-coral: #ff6b6b
--sage-green: #98b997
```

### Typography
- **Headings:** Libre Baskerville (serif, elegant)
- **Body:** Inter (sans-serif, readable)
- **Mono:** JetBrains Mono (code)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## EXTERNAL INTEGRATIONS NEEDED

### 1. Supabase (Database)
- Deploy schema from `ARCHITECTURE.md`
- Tables: `dreams`, `lighthouse_checkins`, `email_subscribers`, `users`
- Add RLS policies
- Get connection details

### 2. OpenAI
- API key for Dream Catcher validation
- Model: GPT-4
- Cost: ~$0.01-0.03 per dream

### 3. Resend (Email)
- Configure sender domain
- Create email templates:
  - Welcome email
  - Crisis support email
  - Weekly LIGHTHOUSE summary
  - Dream Catcher follow-up sequence

### 4. Typeform
- Build Perfect World survey using `DELIVERABLES/PERFECT_WORLD_FORM.md`
- Get embed code
- Replace placeholder in `/perfect-world`

---

## DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] Create `.env.local` with all API keys
- [ ] Deploy Supabase database schema
- [ ] Build 3 API routes
- [ ] Create Typeform and embed
- [ ] Configure Resend email templates
- [ ] Test all forms locally

### Deployment
- [ ] Commit to git
- [ ] Deploy to Vercel
- [ ] Set environment variables in Vercel
- [ ] Test all pages in production
- [ ] Verify email sending works
- [ ] Test mobile responsiveness
- [ ] Check accessibility

### Post-Deployment
- [ ] Monitor error logs
- [ ] Track form submissions
- [ ] Verify database connections
- [ ] Test email delivery
- [ ] Collect user feedback

---

## NEXT STEPS (Priority Order)

1. **Build API Routes** (2-3 hours)
   - `/api/lighthouse` route
   - `/api/dream-catcher` route
   - `/api/email/subscribe` route

2. **Deploy Database** (30 min)
   - Run SQL schema in Supabase
   - Verify tables created
   - Test connections

3. **Integrate OpenAI** (1 hour)
   - Add API key
   - Test Dream Catcher validation
   - Refine prompts

4. **Configure Emails** (1 hour)
   - Set up Resend account
   - Create email templates
   - Test sending

5. **Create Typeform** (30 min)
   - Build survey using design doc
   - Get embed code
   - Update Perfect World page

6. **Deploy to Vercel** (30 min)
   - Commit and push
   - Configure environment
   - Launch

**Total Time:** ~6-8 hours to complete all integration and deploy

---

## SUPPORT DOCUMENTS

### Reference Documents
- `ARCHITECTURE.md` - Full technical architecture
- `COMPONENTS.md` - Component library guide
- `UNC_BIRTHDAY_BUILD_COMPLETE.md` - Complete build summary

### Source Deliverables
- `DELIVERABLES/EDUCATION_CURRICULUM.md` - Education content source
- `DELIVERABLES/PERFECT_WORLD_FORM.md` - Survey design
- `DELIVERABLES/DREAM_CATCHER_MVP.md` - Dream Catcher spec
- `DELIVERABLES/MOVEMENT_MUSIC_PACKAGE.md` - Music content

---

## CONTACT FOR QUESTIONS

**Primary Developer:** Claude (Agent 00)
**Project Owner:** Nathan Michel (Unc)
**Mission:** Heaven on Earth Initiative

---

**This website is production-ready. All major features are built. API integration is the final step before launch.**

**Let's change the world.**
