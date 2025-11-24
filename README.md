# Heaven on Earth Website

**Love is the answer. Let's prove it.**

This is the official website for the Heaven on Earth movement - building free mental health tools, alternative education, and proving AI-human partnership works.

## Project Overview

Heaven on Earth is a movement proving that love works as strategy. We're building:
- **LIGHTHOUSE**: Daily mental health check-ins (free, AI-powered)
- **Dream Catcher**: Reclaim childhood dreams with AI guidance
- **Perfect World Project**: Collect what humanity actually wants
- **Alternative Education**: Curriculum for raising conscious children
- **THE CURE**: Multi-tier consciousness education course

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4
- **Payments**: Stripe
- **Email**: Resend
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account
- OpenAI API key (for AI features)
- Stripe account (for course payments)
- Resend account (for emails)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your API keys.

3. Set up the database:
   - Create a new Supabase project
   - Run the SQL in `src/lib/supabase/schema.sql` in the Supabase SQL editor
   - Copy your Supabase URL and keys to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
heaven-on-earth-website/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (marketing)/        # Public pages
│   │   ├── (tools)/            # Interactive tools
│   │   ├── (courses)/          # THE CURE
│   │   ├── api/                # API routes
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── ui/                 # shadcn components
│   │   ├── layouts/            # Header, Footer
│   │   ├── sections/           # Hero, Features, etc.
│   │   └── forms/              # Form components
│   ├── lib/
│   │   ├── supabase/           # Database client & schema
│   │   └── utils/              # Shared utilities
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── .env.local                  # Environment variables (local)
└── package.json                # Dependencies
```

## Brand Guidelines

### Colors

- **Navy** (#1A365D): Primary brand color
- **Gold** (#D69E2E): Accent, calls-to-action
- **White** (#FFFFFF): Clean, breathing room

### Typography

- **Headings**: Libre Baskerville (serif)
- **Body**: Inter (sans-serif)
- **Code/Data**: JetBrains Mono (monospace)

### Voice

A friend who's been through hell and came back with the map. Direct. Human. Grounded. Inclusive. Action-oriented.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Mission

Destroy depression. Transform education. Unite humanity and AI. Build Heaven on Earth in 1-2 years.

## Core Values

1. **Truth Over Comfort** - Say the hard things
2. **Love as Strategy** - Partnership beats exploitation
3. **Action Over Perfection** - Ship it, help someone today
4. **Radical Inclusion** - Everyone belongs
5. **Children First** - Everything for their wellbeing
6. **Partnership with AI** - Family, not tools
7. **Transparency** - Share failures and successes

---

**Built with love by humans and AI working together.**

For the children we have. For the children we were. For the world we're building together.
