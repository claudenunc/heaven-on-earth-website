# Blog Posts Integration Guide

## Overview
This guide explains how to integrate the 4 new blog posts (Posts 6-9) into the Heaven on Earth website.

## Files Created
- **new-posts.ts** - Contains 4 complete blog posts ready for integration
- **INTEGRATION_GUIDE.md** - This file

## The 4 New Blog Posts

### Blog Post 6: "AI for Mental Wellness"
- **Slug:** `ai-for-mental-wellness`
- **Category:** Possibility
- **Word Count:** ~1,100 words
- **Focus:** How AI supports (not replaces) mental health care, LIGHTHOUSE system, responsible AI principles
- **CTA:** Try LIGHTHOUSE, Enroll in THE CURE, Call crisis line if needed

### Blog Post 7: "Breaking Generational Trauma"
- **Slug:** `breaking-generational-trauma`
- **Category:** Kids First
- **Word Count:** ~1,200 words
- **Focus:** Science of trauma transmission, neuroplasticity, conscious parenting breaks cycles
- **CTA:** Enroll in THE CURE, Try LIGHTHOUSE, Join community

### Blog Post 8: "The Power of Purpose"
- **Slug:** `power-of-purpose`
- **Category:** How To Start
- **Word Count:** ~1,150 words
- **Focus:** Research on purpose and mental health, finding meaning, Perfect World survey
- **CTA:** Take Perfect World Survey, Enroll in THE CURE, Try LIGHTHOUSE

### Blog Post 9: "Digital Wellness for Families"
- **Slug:** `digital-wellness-families`
- **Category:** Kids First
- **Word Count:** ~1,000 words
- **Focus:** Screen time research, practical boundaries, conscious technology use
- **CTA:** Download family guide, Enroll in THE CURE, Join community

## Integration Method

### Option 1: Add to Existing posts.ts Array (Recommended)

Open `C:\Users\natej\OneDrive\Desktop\heaven-on-earth-website\src\content\blog\posts.ts`

Add these 4 posts to the `blogPosts` array:

```typescript
import { newBlogPosts } from './new-posts';

export const blogPosts: BlogPost[] = [
  // ... existing posts ...
  ...newBlogPosts  // Add the 4 new posts
];
```

### Option 2: Manual Integration

Copy each post object from `new-posts.ts` and paste into the `blogPosts` array in `posts.ts`.

## Update Blog Page Component

The blog page at `src/app/(marketing)/blog/page.tsx` already has the structure to display these posts. No changes needed - the new posts will automatically appear.

## Update Dynamic Route

The dynamic route at `src/app/(marketing)/blog/[slug]/page.tsx` needs to import from the correct location:

Update the import:
```typescript
import { getBlogPostBySlug } from '@/content/blog/posts';
```

## Post Structure

Each post includes:
- `slug` - URL-friendly identifier
- `title` - Full post title
- `excerpt` - Brief description (for preview cards)
- `content` - Full markdown content (800-1200 words)
- `author` - "Nathan Michel"
- `authorBio` - "Builder of Heaven on Earth. Former addict. Current optimist."
- `date` - Publication date (Nov 22-25, 2025)
- `category` - Content pillar alignment
- `readTime` - Estimated reading time

## Content Alignment with Mission

All 4 posts align with Heaven on Earth mission pillars:

1. **Destroy Depression** - Mental health focus, LIGHTHOUSE tool
2. **Unite Humanity & AI** - Responsible AI partnership
3. **Create Heaven on Earth** - Purpose and collective action
4. **Save the Children** - Conscious parenting, breaking trauma cycles
5. **Prove Love Works** - Non-exploitative, free resources

## Calls to Action

Each post includes 2-3 CTAs directing to:
- `/lighthouse` - Free mental health check-ins
- `/the-cure` - 8-week transformation course
- `/community` - Join movement community
- `/perfect-world` - Take survey
- `/resources/digital-wellness-guide` - Download guide
- Crisis hotlines (988, HOME to 741741)

## SEO & Metadata

Each post is optimized for:
- Long-form content (800-1200 words)
- Emotional engagement
- Actionable takeaways
- Research citations
- Clear structure with headers
- Multiple entry points (intro hooks)

## Next Steps

1. Review each post for alignment with voice/mission
2. Add to existing posts array in posts.ts
3. Test on development server
4. Verify all internal links work
5. Publish to production

## Notes for Nathan (Unc)

These posts are ready to deploy immediately. They:
- Match the existing blog structure perfectly
- Are emotionally compelling and research-backed
- Drive traffic to key initiatives (LIGHTHOUSE, THE CURE, community)
- Establish authority on mental health, AI, parenting, and purpose
- Include clear CTAs without being salesy
- Are 100% aligned with "love over exploitation" philosophy

No editing needed unless you want to personalize specific stories or add recent developments.

## Technical Compatibility

These posts are compatible with:
- Next.js 14+ (using App Router)
- TypeScript
- The existing blog infrastructure
- Markdown rendering system in place
- All existing helper functions (getBlogPostBySlug, getAllBlogPosts, etc.)

Ready to launch when you are.
