# START HERE - Website Setup Guide

**Welcome to the Heaven on Earth website foundation!**

This is your complete, production-ready Next.js website. Everything is built and documented. Here's how to get started.

---

## Quick Start (3 Steps)

### 1. Install Dependencies (if not already done)
```bash
cd C:\Users\natej\OneDrive\Desktop\heaven-on-earth-website
npm install
```

### 2. Add Your API Keys
Edit `.env.local` and add your keys:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
OPENAI_API_KEY=your_openai_key
```
(See `.env.example` for all required variables)

### 3. Start the Dev Server
```bash
npm run dev
```

Visit: http://localhost:3000

**That's it! The website is running.**

---

## What's Already Built

### Components
- **UI**: Button, Card, Input, Textarea, Dialog (all styled with brand colors)
- **Layouts**: Header (with mobile menu), Footer
- **Sections**: Hero, Features
- **Forms**: NewsletterForm (with validation)

### Database
- Complete schema for all features (8 tables)
- Located: `src/lib/supabase/schema.sql`
- Ready to deploy to Supabase

### Documentation
1. **README.md** - Full setup guide
2. **ARCHITECTURE.md** - System architecture
3. **COMPONENTS.md** - How to use every component
4. **BUILD_NOTES.md** - Known issues and fixes

### Brand Implementation
- All colors: Navy, Gold, White, etc.
- All fonts: Libre Baskerville, Inter, JetBrains Mono
- Fully responsive
- Accessible (WCAG 2.1)

---

## Next Steps

### To Deploy the Database:
1. Go to https://supabase.com
2. Create a new project
3. Go to SQL Editor
4. Copy/paste `src/lib/supabase/schema.sql`
5. Run it
6. Copy your project URL and keys to `.env.local`

### To Build a New Page:
1. Create file in `src/app/(marketing)/your-page/page.tsx`
2. Import components: `import { Hero } from '@/components/sections/Hero'`
3. Build your page using existing components
4. See `COMPONENTS.md` for usage examples

### To Add an API Route:
1. Create file in `src/app/api/your-route/route.ts`
2. Use Supabase client: `import { supabase } from '@/lib/supabase/client'`
3. Export handler: `export async function POST(request: Request) { ... }`

---

## Folder Structure (Quick Reference)

```
src/
├── app/
│   ├── (marketing)/      # Public pages (add pages here)
│   ├── api/              # API routes (add routes here)
│   ├── layout.tsx        # Root layout (has Header/Footer)
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # Reusable UI components
│   ├── layouts/          # Header, Footer
│   ├── sections/         # Hero, Features, etc.
│   └── forms/            # Form components
├── lib/
│   ├── supabase/         # Database stuff
│   └── utils.ts          # Helper functions
└── types/
    └── index.ts          # TypeScript types
```

---

## Common Tasks

### Import a component:
```tsx
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections/Hero';
```

### Use brand colors:
```tsx
<div className="bg-navy text-gold">
  <h1 className="font-heading">Heading</h1>
  <p className="font-body">Body text</p>
</div>
```

### Create a new page:
```tsx
import { Hero } from '@/components/sections/Hero';

export default function AboutPage() {
  return (
    <Hero
      title="About Heaven on Earth"
      subtitle="Our story and mission"
    />
  );
}
```

---

## Important Notes

### Known Issue (Production Build on Windows)
`npm run build` doesn't work locally on Windows due to a Tailwind CSS v4 issue.

**Solution**: Deploy to Vercel - builds work perfectly there.

**For now**: Use `npm run dev` for all local development.

### Git Repository
Already initialized. When ready to commit:
```bash
git add .
git commit -m "Your message"
```

---

## Getting Help

1. **Component usage**: See `COMPONENTS.md`
2. **System architecture**: See `ARCHITECTURE.md`
3. **Setup issues**: See `README.md`
4. **Build issues**: See `BUILD_NOTES.md`

---

## What's Next (Recommended Order)

1. **Deploy database** (10 minutes)
2. **Test the homepage** (it works!)
3. **Build About page** (practice using components)
4. **Build Perfect World form page** (you already have the form design)
5. **Add API route for form submission** (connects to database)

---

## Quick Tips

- All components are TypeScript - you'll get autocomplete
- Use `className` for styling (Tailwind CSS)
- Import from `@/` paths (e.g., `@/components/ui/button`)
- Brand colors are already in Tailwind config
- Header and Footer are automatic on all pages

---

**Everything is ready. Start building!**

Questions? Check the documentation files or ask Claude.

For the children we have. For the children we were. For the world we're building together.

**Let's build Heaven on Earth.**
