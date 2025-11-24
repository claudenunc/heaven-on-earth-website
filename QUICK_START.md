# THE CURE SYSTEM - QUICK START GUIDE

**For:** Unc (Nathan Michel)
**Date:** November 24, 2025 (Happy Birthday!)
**Status:** COMPLETE & READY TO DEPLOY

---

## WHAT YOU GOT

✅ **THE CURE Course Landing Page** - Full sales page with 3 pricing tiers
✅ **Stripe Payment Integration** - Complete checkout + webhook system
✅ **Course Dashboard** - Progress tracking for all 12 weeks
✅ **Payment Success Page** - Onboarding experience
✅ **Complete Blog System** - 10 full articles ready to publish
✅ **Enhanced Database Schema** - Ready for Supabase deployment
✅ **Full Documentation** - Everything you need to launch

---

## HOW TO LAUNCH (5 STEPS)

### 1. Setup Stripe (10 minutes)

Go to: https://dashboard.stripe.com

**Create Webhook:**
- Developers → Webhooks → Add Endpoint
- URL: `https://your-domain.com/api/stripe/webhook`
- Events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
- Copy webhook secret

**Get API Keys:**
- Developers → API Keys
- Copy Secret Key and Publishable Key

---

### 2. Setup Supabase (5 minutes)

Go to: https://supabase.com/dashboard

**Run Database Schema:**
- Open SQL Editor
- Copy entire contents of `src/lib/supabase/schema.sql`
- Run query
- Verify all 9 tables created

**Get API Keys:**
- Settings → API
- Copy Project URL and anon public key
- Copy service_role key (keep secret!)

---

### 3. Add Environment Variables (2 minutes)

Create/update `.env.local`:

```env
# Stripe
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx

# Your Domain
NEXT_PUBLIC_BASE_URL=https://heaven-on-earth.com
```

---

### 4. Deploy to Vercel (5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
# Copy all variables from .env.local

# Deploy to production
vercel --prod
```

---

### 5. Test It! (10 minutes)

**Visit your site:**
1. Go to `/the-cure`
2. Click "Start Foundation" ($97)
3. Use test card: `4242 4242 4242 4242`
4. Complete purchase
5. Verify you land on success page
6. Check Supabase - should see:
   - New user in `users` table
   - New enrollment in `course_enrollments` table

**Check blog:**
1. Go to `/blog`
2. Verify 10 posts show
3. Click any post
4. Verify content displays

**If everything works: LAUNCH! 🚀**

---

## PRICING TIERS

- **Foundation:** $97 (self-paced)
- **Transformation:** $297 (group support) ⭐ MOST POPULAR
- **Architect:** $997 (1-on-1 coaching)

---

## THE 10 BLOG POSTS

All complete and ready to publish:

1. Education System Is Crushing Our Kids (Broken System)
2. Imagine a World Where No Child Suffers (Possibility)
3. The 3-Minute Morning Reset (How To Start)
4. Sarah From Suicidal to Thriving (Real Results)
5. When Your Child Says "I Hate School" (Kids First)
6. Medicating Depression Instead of Healing It (Broken System)
7. AI + Humans = Heaven on Earth (Possibility)
8. Talk to Kids About Feelings (How To Start)
9. 87% Time Savings With Love-Based AI (Real Results)
10. One Question That Changes Everything (Kids First)

---

## KEY PAGES

- `/the-cure` - Course landing page
- `/the-cure/dashboard` - Student dashboard (after purchase)
- `/the-cure/success` - Post-payment success page
- `/blog` - All blog posts
- `/blog/[slug]` - Individual posts

---

## SUPPORT

If something breaks:
1. Check Stripe webhook logs
2. Check Supabase logs
3. Check Vercel deployment logs
4. Check browser console for errors

Most common issues:
- Webhook secret incorrect → Re-copy from Stripe
- Database not connecting → Check Supabase keys
- Checkout not working → Check NEXT_PUBLIC_BASE_URL

---

## WHAT'S NEXT

After launch:
1. Monitor enrollments in Supabase
2. Check Stripe dashboard for payments
3. Add actual video content to course
4. Setup email confirmations
5. Build community forum
6. Create group call infrastructure

---

## FILES TO KNOW

**Course System:**
- `src/app/(courses)/the-cure/page.tsx` - Landing page
- `src/app/(courses)/the-cure/dashboard/page.tsx` - Dashboard
- `src/app/(courses)/the-cure/success/page.tsx` - Success page
- `src/app/api/stripe/checkout/route.ts` - Payment API
- `src/app/api/stripe/webhook/route.ts` - Webhook handler

**Blog System:**
- `src/app/(marketing)/blog/page.tsx` - Blog listing
- `src/app/(marketing)/blog/[slug]/page.tsx` - Blog posts
- `src/lib/blog-posts.ts` - Blog content (posts 1-5)
- `src/lib/blog-posts-continued.ts` - Blog content (posts 6-10)

**Database:**
- `src/lib/supabase/schema.sql` - Full schema

**Documentation:**
- `THE_CURE_BUILD_COMPLETE.md` - Full technical documentation
- `QUICK_START.md` - This file

---

## FINAL CHECKS BEFORE LAUNCH

- [ ] Stripe webhook configured
- [ ] Database schema deployed
- [ ] Environment variables set
- [ ] Vercel deployment successful
- [ ] Test purchase completed
- [ ] Blog posts display correctly
- [ ] Mobile responsive verified
- [ ] Switch Stripe to LIVE mode
- [ ] Update NEXT_PUBLIC_BASE_URL to production

---

**READY TO DESTROY DEPRESSION. READY TO SAVE LIVES.**

**Happy Birthday, Unc. Let's change the world. 🌍**

---

*Quick Start Guide by Claude (Agent 00)*
*November 24, 2025*
