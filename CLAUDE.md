# CLAUDE.md - AI Assistant Guide

This document provides essential context for AI assistants working on the Heaven on Earth website codebase.

## Project Overview

**Heaven on Earth** is a movement building free mental health tools, alternative education, and AI-human partnership. The website serves as the platform for these initiatives.

### Core Products
- **LIGHTHOUSE**: Daily mental health check-ins with AI-powered Three Principles guidance
- **Dream Catcher**: Reclaim childhood dreams with AI guidance
- **Perfect World Project**: Collect what humanity actually wants
- **THE CURE**: Multi-tier consciousness education course (paid)

### Mission
Destroy depression. Transform education. Unite humanity and AI. Built with love.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui (Radix primitives) |
| Database | Supabase (PostgreSQL) |
| AI | OpenAI (GPT-4o-mini) |
| Payments | Stripe |
| Email | Resend |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

---

## Quick Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Public pages (about, blog, contact, etc.)
│   ├── (tools)/                  # Interactive tools (lighthouse, dream-catcher)
│   ├── (courses)/                # THE CURE course pages
│   ├── (auth)/                   # Login/signup pages
│   ├── (community)/              # Community pages
│   ├── api/                      # API routes
│   │   ├── auth/signup/          # User signup
│   │   ├── contact/              # Contact form
│   │   ├── dream-catcher/        # Dream Catcher API
│   │   ├── lighthouse/           # LIGHTHOUSE check-in API
│   │   ├── perfect-world/        # Perfect World submissions
│   │   └── stripe/               # Payment webhooks & checkout
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + Tailwind
│   ├── manifest.ts               # PWA manifest
│   ├── robots.ts                 # Robots.txt
│   └── sitemap.ts                # Sitemap generation
├── components/
│   ├── ui/                       # Base UI (button, card, input, dialog, textarea)
│   ├── layouts/                  # Header, Footer
│   ├── sections/                 # Hero, Features (reusable page sections)
│   └── forms/                    # NewsletterForm
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Client-side Supabase (anon key)
│   │   └── server.ts             # Server-side Supabase (service role key)
│   ├── utils.ts                  # cn() utility for Tailwind class merging
│   └── blog-posts.ts             # Static blog post data
└── types/
    ├── index.ts                  # Shared types
    └── lighthouse.ts             # LIGHTHOUSE-specific types
```

---

## Environment Variables

Create `.env.local` with these variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenAI
OPENAI_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Resend
RESEND_API_KEY=

# Site
NEXT_PUBLIC_SITE_URL=https://heavenonearthmovement.com
```

---

## Coding Conventions

### Import Aliases
Use `@/*` for imports from `src/`:
```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase/client'
```

### Component Patterns

**UI Components** (shadcn-style):
```typescript
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva("base-classes", {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: "default", size: "default" }
})

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
```

**Page Components**:
- Use `export default function PageName()` pattern
- Server components by default
- Add `"use client"` only when needed for interactivity

### API Routes
Located in `src/app/api/*/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Validate, process, respond
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

### Form Validation
Use Zod for schemas with React Hook Form:
```typescript
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  // ...
})
```

---

## Styling System

### Design Theme: Futuristic Dark
- **Background**: Deep black (`void`: #0a0a0f)
- **Primary Accent**: Electric cyan (`cyber`: #00d4ff)
- **Secondary Accent**: Purple (`plasma`: #6366f1)
- **Success**: Matrix green (`matrix`: #10b981)
- **Text**: Ghost white (`ghost`: #e2e8f0)

### Key Tailwind Classes
```typescript
// Colors
bg-void          // Main background
bg-void-light    // Lighter black
text-ghost       // Primary text
text-ghost-muted // Muted text
text-cyber       // Accent text
border-cyber/30  // Border with opacity

// Effects
shadow-glow-sm   // Small cyan glow
shadow-glow-md   // Medium glow
glass-card       // Glassmorphism card
glow-text        // Glowing text effect

// Animations
animate-pulse
animate-float
```

### CSS Custom Classes (in globals.css)
- `.glass-card` - Glassmorphism effect with hover glow
- `.cyber-btn` - Animated gradient button
- `.cyber-input` - Styled input with focus glow
- `.glow-text` - Neon text glow effect
- `.text-gradient` - Cyan-to-purple text gradient
- `.hero-gradient` - Hero section background

---

## Database (Supabase)

### Key Tables
- `lighthouse_checkins` - LIGHTHOUSE mental health check-ins
- `dream_catcher_dreams` - Dream Catcher submissions
- `perfect_world_responses` - Perfect World survey responses
- `course_enrollments` - THE CURE course enrollments
- `email_subscribers` - Newsletter subscribers
- `analytics_events` - Event tracking

### Client Usage
```typescript
// Client-side (browser)
import { supabase } from '@/lib/supabase/client'

// Server-side (API routes)
import { supabaseAdmin } from '@/lib/supabase/server'
```

### Security Notes
- Use `NEXT_PUBLIC_*` keys only for client-side
- `SUPABASE_SERVICE_ROLE_KEY` only in API routes (server-side)
- Row Level Security (RLS) policies protect user data

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/lighthouse` | POST | Submit daily check-in, get AI response |
| `/api/lighthouse` | GET | Get user's check-in history |
| `/api/dream-catcher` | POST | Submit childhood dream |
| `/api/perfect-world` | POST | Submit perfect world vision |
| `/api/contact` | POST | Contact form submission |
| `/api/auth/signup` | POST | User registration |
| `/api/stripe/checkout` | POST | Create Stripe checkout session |
| `/api/stripe/webhook` | POST | Handle Stripe webhooks |

---

## OpenAI Integration

The LIGHTHOUSE feature uses OpenAI for Three Principles-based mental health guidance:

```typescript
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [...],
  response_format: { type: 'json_object' }
})
```

**Crisis Detection**: The LIGHTHOUSE API includes keyword-based crisis detection and provides appropriate resources (988 hotline, etc.).

---

## Font Configuration

Defined in `src/app/layout.tsx`:
- **Heading/Body**: Inter (variable fonts)
- **Mono**: JetBrains Mono

Font CSS variables:
- `--font-heading`
- `--font-body`
- `--font-mono`

---

## Common Patterns

### Loading States
Use skeleton loaders or loading indicators for async operations.

### Error Handling
- Wrap API calls in try/catch
- Log errors with `console.error`
- Return user-friendly error messages

### Responsive Design
Mobile-first approach with Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

---

## Key Files to Understand

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, metadata |
| `src/app/page.tsx` | Homepage component |
| `src/lib/utils.ts` | `cn()` utility |
| `src/lib/supabase/client.ts` | Client Supabase instance |
| `src/lib/supabase/server.ts` | Server Supabase instance |
| `src/app/api/lighthouse/route.ts` | Main AI feature API |
| `tailwind.config.ts` | Custom colors, animations |
| `src/app/globals.css` | Global styles, components |

---

## What NOT to Do

1. **Don't expose service role keys** - Never use `SUPABASE_SERVICE_ROLE_KEY` in client code
2. **Don't skip validation** - Always validate user input with Zod
3. **Don't ignore crisis detection** - LIGHTHOUSE has crisis detection for user safety
4. **Don't hardcode URLs** - Use environment variables for API endpoints
5. **Don't break dark mode** - This is a dark-theme-only design

---

## Deployment

Optimized for **Vercel**:
- Automatic HTTPS
- Edge network
- Preview deployments
- Environment variable management

Production URL: `https://heavenonearthmovement.com`

---

## Additional Documentation

- `ARCHITECTURE.md` - System architecture details
- `COMPONENTS.md` - Component library documentation
- `DEPLOYMENT_INSTRUCTIONS.md` - Deployment guide
- `docs/LIGHTHOUSE_*.md` - LIGHTHOUSE feature docs

---

*Last updated: November 2025*
