# Architecture Overview

## System Architecture

The Heaven on Earth website is built on a modern, scalable architecture designed for rapid development and easy maintenance.

### Tech Stack

```
┌─────────────────────────────────────────────────┐
│              Frontend (Next.js 14)               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  React   │  │Tailwind  │  │ TypeScript│     │
│  │Components│  │   CSS    │  │           │     │
│  └──────────┘  └──────────┘  └──────────┘     │
└─────────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│            API Layer (Next.js API)              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  Auth    │  │  Forms   │  │  OpenAI  │     │
│  │  Stripe  │  │  Email   │  │Analytics │     │
│  └──────────┘  └──────────┘  └──────────┘     │
└─────────────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
┌─────────────┐ ┌──────────┐ ┌──────────┐
│  Supabase   │ │  OpenAI  │ │  Stripe  │
│ (Database)  │ │  (AI)    │ │(Payments)│
└─────────────┘ └──────────┘ └──────────┘
```

## Directory Structure

### `/src/app`
Next.js 14 App Router structure with route groups:

- `(marketing)` - Public marketing pages
- `(tools)` - Interactive tools (LIGHTHOUSE, Dream Catcher, etc.)
- `(courses)` - THE CURE course pages
- `(community)` - Community/member pages
- `api/` - API routes for backend functionality

### `/src/components`

#### `/ui`
Base UI components using shadcn/ui (Radix UI primitives):
- Button, Card, Input, Dialog, etc.
- Fully typed with TypeScript
- Accessible by default (WCAG 2.1)
- Customized with brand colors

#### `/layouts`
Page layout components:
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer with links
- `Navigation.tsx` - Reusable navigation logic

#### `/sections`
Reusable page sections:
- `Hero.tsx` - Hero sections with variants
- `Features.tsx` - Feature grid sections
- `CTA.tsx` - Call-to-action sections
- `Testimonials.tsx` - Social proof sections

#### `/forms`
Form components with validation:
- `NewsletterForm.tsx` - Email capture
- `ContactForm.tsx` - Contact submissions
- React Hook Form + Zod for validation

### `/src/lib`

#### `/supabase`
Database client and schema:
- `client.ts` - Client-side Supabase client
- `server.ts` - Server-side admin client
- `schema.sql` - Complete database schema

#### `/utils`
Shared utility functions:
- `cn()` - Tailwind class merging utility
- Date formatting, string helpers, etc.

### `/src/types`
TypeScript type definitions:
- Database types (User, BlogPost, etc.)
- Component prop types
- API response types

## Data Flow

### Client-Side Rendering (CSR)
```
User Interaction → React Component → State Update → UI Re-render
```

### Server-Side Rendering (SSR)
```
Request → Next.js Server → Fetch Data → Render HTML → Send to Client
```

### API Routes
```
Client Request → API Route Handler → Database/External API → Response
```

## Database Schema

### Core Tables

#### `users`
User accounts for authenticated features

#### `perfect_world_responses`
Responses to the Perfect World survey

#### `dream_catcher_dreams`
Dream Catcher childhood dream submissions

#### `lighthouse_checkins`
LIGHTHOUSE daily mental health check-ins

#### `course_enrollments`
THE CURE course enrollments and tiers

#### `blog_posts`
Blog posts and articles

#### `email_subscribers`
Newsletter email subscribers

#### `analytics_events`
Site analytics and user events

See `src/lib/supabase/schema.sql` for complete schema with indexes and RLS policies.

## Authentication Strategy

Currently using Supabase Auth (can be extended):
- Email/password authentication
- OAuth providers (Google, GitHub, etc.)
- Row Level Security (RLS) for data protection

## API Integration Points

### OpenAI
- LIGHTHOUSE mood analysis
- Dream Catcher guidance generation
- Content generation helpers

### Stripe
- Course payment processing
- Webhook handling for subscription updates
- Customer portal for managing subscriptions

### Resend
- Transactional emails (welcome, confirmations)
- Newsletter campaigns
- Automated notifications

### Supabase
- PostgreSQL database
- Real-time subscriptions (optional)
- Storage for user uploads (future)

## Performance Optimizations

### Next.js Features
- App Router for optimal performance
- Automatic code splitting
- Image optimization with `next/image`
- Font optimization with `next/font`

### Caching Strategy
- Static generation for marketing pages
- Incremental Static Regeneration (ISR) for blog
- API route caching where appropriate

### Loading States
- Skeleton loaders for better UX
- Optimistic UI updates
- Error boundaries for graceful failures

## Security Considerations

### Environment Variables
- All secrets in `.env.local` (never committed)
- Separate keys for dev/staging/production

### Database Security
- Row Level Security (RLS) policies
- Service role key only on server
- Input validation with Zod

### API Security
- Rate limiting (implement via middleware)
- CORS configuration
- Input sanitization

## Deployment

### Recommended: Vercel
- Zero-config deployment
- Automatic HTTPS
- Edge network for global performance
- Preview deployments for PRs

### Alternative: Self-hosted
- Docker containerization (add Dockerfile)
- Nginx reverse proxy
- PM2 for process management

## Monitoring & Analytics

### Built-in
- Next.js analytics (Vercel)
- Custom analytics events table

### Future Integration
- Plausible Analytics (privacy-focused)
- Error tracking (Sentry)
- Performance monitoring

## Scalability Plan

### Current (MVP)
- Single Next.js instance
- Supabase free tier
- Suitable for 0-10k users

### Phase 2 (Growth)
- Vercel Pro plan
- Supabase Pro plan
- CDN for static assets
- Suitable for 10k-100k users

### Phase 3 (Scale)
- Multiple regions
- Database read replicas
- Redis caching layer
- Queue system for heavy operations
- Suitable for 100k+ users

## Development Workflow

1. Create feature branch
2. Develop locally (`npm run dev`)
3. Test thoroughly
4. Submit PR with description
5. Review & merge to main
6. Auto-deploy to production

## Testing Strategy (Future)

- Unit tests: Jest + React Testing Library
- Integration tests: Playwright
- E2E tests: Cypress
- Visual regression: Chromatic

## Documentation Standards

- README.md - Getting started
- ARCHITECTURE.md - This file
- COMPONENTS.md - Component library
- Inline comments for complex logic
- JSDoc for TypeScript functions

---

**Last Updated**: November 24, 2025
**Maintained By**: Heaven on Earth Development Team
