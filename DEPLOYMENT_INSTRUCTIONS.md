# DEPLOYMENT INSTRUCTIONS - HEAVEN ON EARTH WEBSITE

**For:** Unc (Nathan Michel)
**Purpose:** Step-by-step guide to deploy your birthday present to production
**Time Required:** 30-60 minutes

---

## BEFORE YOU START

This guide assumes:
- You have basic command line knowledge
- You can access email for verification
- You have a credit card for service signups (most have free tiers)

**Don't worry - I'll walk you through everything.**

---

## STEP 1: CREATE ACCOUNTS (15 minutes)

### 1.1 Supabase (Database)
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email
4. Create new project:
   - Name: `heaven-on-earth`
   - Database password: [Choose strong password - SAVE THIS]
   - Region: Choose closest to you
5. Wait 2-3 minutes for project to initialize

### 1.2 Vercel (Hosting)
1. Go to https://vercel.com
2. Click "Sign Up"
3. **Important:** Sign up with GitHub (makes deployment easier)
4. Authorize Vercel to access your repositories

### 1.3 Resend (Email)
1. Go to https://resend.com
2. Click "Get Started"
3. Sign up with email
4. Verify your email address
5. Complete onboarding survey (skip if you want)

---

## STEP 2: DEPLOY DATABASE (10 minutes)

### 2.1 Get Database Connection String
1. In Supabase dashboard, click your project
2. Go to Settings (gear icon) → Database
3. Scroll to "Connection string"
4. Copy the URI (starts with `postgresql://`)
5. Replace `[YOUR-PASSWORD]` with the password you chose

### 2.2 Run Database Schema

**Option A: Using Supabase SQL Editor (Easier)**
1. In Supabase, go to "SQL Editor" (left sidebar)
2. Click "New query"
3. Open file: `C:\Users\natej\OneDrive\Desktop\heaven-on-earth-website\database\schema.sql`
4. Copy all contents
5. Paste into SQL Editor
6. Click "Run" (or press Ctrl+Enter)
7. Should see "Success. No rows returned"

**Option B: Using Command Line**
```bash
# Install PostgreSQL client if needed
# Then connect and run schema
psql [YOUR_CONNECTION_STRING] -f database/schema.sql
```

### 2.3 Verify Tables Created
1. In Supabase, go to "Table Editor"
2. You should see tables: `profiles`, `lighthouse_checkins`, `contact_messages`, etc.
3. Click each table to verify structure

---

## STEP 3: GET API KEYS (5 minutes)

### 3.1 Supabase Keys
1. In Supabase dashboard, go to Settings → API
2. Copy these values:
   - **Project URL** (starts with `https://`)
   - **anon public key** (starts with `eyJ...`)
   - **service_role key** (starts with `eyJ...`)
3. Save these - you'll need them in Step 4

### 3.2 Resend API Key
1. In Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Name it: `heaven-on-earth-production`
4. Copy the key (starts with `re_...`)
5. **Important:** Save this immediately - you can't see it again

---

## STEP 4: CONFIGURE VERCEL PROJECT (10 minutes)

### 4.1 Connect Repository
1. In Vercel dashboard, click "Add New..." → "Project"
2. Import your Git repository (or upload folder)
3. Framework preset should auto-detect: "Next.js"
4. Root directory: `./`
5. **Don't deploy yet** - click "Environment Variables" first

### 4.2 Add Environment Variables
Click "Add" for each variable:

**Supabase (from Step 3.1):**
```
NEXT_PUBLIC_SUPABASE_URL = [your project URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [your anon key]
SUPABASE_SERVICE_ROLE_KEY = [your service role key]
```

**Resend (from Step 3.2):**
```
RESEND_API_KEY = [your Resend key]
```

**App URL:**
```
NEXT_PUBLIC_APP_URL = https://heavenonearthmovement.com
```

**Optional (for future features):**
```
OPENAI_API_KEY = [get from openai.com when ready]
STRIPE_SECRET_KEY = [get from stripe.com when ready]
STRIPE_WEBHOOK_SECRET = [get from stripe.com when ready]
```

### 4.3 Deploy
1. Click "Deploy"
2. Wait 3-5 minutes for build
3. You'll get a URL like: `heaven-on-earth-xyz.vercel.app`
4. Click "Visit" to see your site!

---

## STEP 5: CONFIGURE CUSTOM DOMAIN (10 minutes)

### 5.1 Add Domain to Vercel
1. In Vercel project, go to Settings → Domains
2. Enter: `heavenonearthmovement.com`
3. Click "Add"
4. Vercel will show DNS records you need to add

### 5.2 Update DNS at Domain Registrar
1. Log in to where you bought the domain (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add these records (from Vercel):
   - **A Record:**
     - Name: `@`
     - Value: `76.76.21.21`
     - TTL: 3600
   - **CNAME Record:**
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: 3600
4. Save DNS changes
5. Wait 5-60 minutes for propagation

### 5.3 Verify Domain
1. Back in Vercel, click "Refresh"
2. When verified, SSL certificate is auto-generated
3. Your site is now live at: https://heavenonearthmovement.com

---

## STEP 6: VERIFY EMAIL SENDING (5 minutes)

### 6.1 Add Domain to Resend
1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter: `heavenonearthmovement.com`
4. Resend shows DNS records to add

### 6.2 Add DNS Records
1. Back to your domain registrar DNS settings
2. Add the TXT, CNAME, and MX records Resend provided
3. Save changes
4. In Resend, click "Verify"
5. May take 5-30 minutes

### 6.3 Test Email
1. Go to your deployed site
2. Visit: `/contact`
3. Fill out the form
4. Submit
5. Check your email - you should receive notification
6. Check sender's email - they should receive confirmation

---

## STEP 7: FINAL VERIFICATION (5 minutes)

### 7.1 Test All Pages
Visit each page and verify it loads:
- [ ] https://heavenonearthmovement.com/ (homepage)
- [ ] https://heavenonearthmovement.com/about
- [ ] https://heavenonearthmovement.com/depression
- [ ] https://heavenonearthmovement.com/resources
- [ ] https://heavenonearthmovement.com/faq
- [ ] https://heavenonearthmovement.com/contact
- [ ] https://heavenonearthmovement.com/community
- [ ] https://heavenonearthmovement.com/legal/privacy
- [ ] https://heavenonearthmovement.com/legal/terms
- [ ] https://heavenonearthmovement.com/legal/cookies
- [ ] https://heavenonearthmovement.com/legal/refund

### 7.2 Test Functionality
- [ ] Contact form submits successfully
- [ ] All internal links work
- [ ] Mobile responsive (test on phone)
- [ ] Images load
- [ ] No console errors (F12 → Console tab)

### 7.3 SEO Check
- [ ] Visit: https://heavenonearthmovement.com/sitemap.xml
- [ ] Visit: https://heavenonearthmovement.com/robots.txt
- [ ] Visit: https://heavenonearthmovement.com/manifest.json
- [ ] Share link on social media - preview image should show

---

## TROUBLESHOOTING

### "Can't connect to database"
- Verify Supabase URL in environment variables
- Check that schema.sql ran successfully
- Ensure RLS policies are enabled in Supabase

### "Email not sending"
- Verify Resend API key is correct
- Check Resend domain verification status
- Look at Resend logs for error messages
- Ensure sender email matches verified domain

### "Site not loading"
- Check DNS propagation: https://dnschecker.org
- Verify domain is added in Vercel
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing

### "Build failed"
- Check Vercel build logs
- Verify all environment variables are set
- Ensure Node.js version is compatible (18+)

### "Contact form not working"
- Open browser console (F12)
- Check for error messages
- Verify API endpoint is deployed
- Test API directly: POST to /api/contact

---

## POST-DEPLOYMENT TASKS

### Immediate (Today)
- [ ] Update Discord server ID in `/community` page
- [ ] Create and upload PDF resources to `/public` folder
- [ ] Create social media images (OG images, icons)
- [ ] Set up Google Search Console
- [ ] Set up Plausible Analytics (optional)

### This Week
- [ ] Monitor contact form submissions
- [ ] Respond to any inquiries
- [ ] Test on multiple devices/browsers
- [ ] Share site with trusted friends for feedback
- [ ] Create first blog post

### This Month
- [ ] Set up Stripe for course payments
- [ ] Build LIGHTHOUSE tool page
- [ ] Build Dream Catcher tool page
- [ ] Launch Perfect World form
- [ ] Start content engine (daily posts)

---

## GETTING HELP

### If You Get Stuck
1. Check error messages carefully
2. Search the error in Google
3. Check service status pages:
   - Vercel: status.vercel.com
   - Supabase: status.supabase.com
   - Resend: status.resend.com

### Support Channels
- Vercel: vercel.com/support
- Supabase: supabase.com/support
- Resend: resend.com/support

### Documentation
- Next.js: nextjs.org/docs
- Supabase: supabase.com/docs
- Vercel: vercel.com/docs
- Resend: resend.com/docs

---

## YOU'VE GOT THIS

This might feel overwhelming, but you've done harder things. You've survived near-death experiences. You've conquered depression. You've built an AI family.

Deploying a website is nothing compared to those battles.

Take it step by step. Don't rush. If something doesn't work, troubleshoot calmly. The website is already built - deployment is just getting it online.

**And when it goes live, the mission truly begins.**

---

## AFTER LAUNCH

Once live, update coordination files:

### Update MISSION_STATE.md
```markdown
## RECENT WINS
- Website deployed to production
- All 10 pages live
- Contact form functional
- SEO optimized
- Ready for traffic
```

### Update FOR_UNC/DECISIONS_NEEDED.md
```markdown
## Decisions After Launch
1. Which content to post first?
2. When to film first video?
3. Discord server setup?
4. Perfect World form deployment timing?
```

---

**You're about to launch Heaven on Earth.**

**The world is ready. Let's go.**

---

**Created:** November 24, 2025
**By:** Claude (Agent 00)
**For:** Unc - Happy Birthday
**Mission:** Change the world, one deployment at a time
