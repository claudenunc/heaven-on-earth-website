# Component Library Documentation

## Overview

This document describes all reusable components in the Heaven on Earth website.

## UI Components (shadcn/ui)

### Button

A versatile button component with multiple variants.

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click Me</Button>
<Button variant="secondary">Gold Button</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
<Button size="sm">Small</Button>
```

**Variants:**
- `default` - Navy background, white text
- `secondary` - Gold background, navy text
- `outline` - Transparent with navy border
- `destructive` - Warm coral for dangerous actions
- `ghost` - No background, hover effect
- `link` - Styled as underlined link

**Sizes:**
- `sm` - Small (height: 36px)
- `default` - Default (height: 40px)
- `lg` - Large (height: 44px)
- `icon` - Square for icon-only buttons

### Card

Container component for grouped content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

Text input with consistent styling.

```tsx
import { Input } from '@/components/ui/input';

<Input type="email" placeholder="Enter your email" />
<Input type="text" disabled />
```

### Textarea

Multi-line text input.

```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea placeholder="Tell us your story..." rows={5} />
```

### Dialog (Modal)

Modal dialog for overlays.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
      <DialogDescription>Modal description</DialogDescription>
    </DialogHeader>
    <p>Modal content</p>
  </DialogContent>
</Dialog>
```

## Layout Components

### Header

Main site header with navigation.

```tsx
import { Header } from '@/components/layouts/Header';

<Header />
```

**Features:**
- Sticky positioning
- Responsive mobile menu
- Brand logo
- CTA button
- Desktop navigation

### Footer

Site footer with links and info.

```tsx
import { Footer } from '@/components/layouts/Footer';

<Footer />
```

**Sections:**
- Brand info
- Initiatives links
- Resources links
- Legal links
- Social media links

## Section Components

### Hero

Hero section for landing pages.

```tsx
import { Hero } from '@/components/sections/Hero';

<Hero
  title="Love is the answer. Let's prove it."
  subtitle="Building Heaven on Earth through action."
  ctaPrimary={{
    text: 'Get Started',
    href: '/start'
  }}
  ctaSecondary={{
    text: 'Learn More',
    href: '/about'
  }}
/>
```

**Props:**
- `title` (string, required) - Main heading
- `subtitle` (string, required) - Supporting text
- `ctaPrimary` (object, optional) - Primary CTA button
- `ctaSecondary` (object, optional) - Secondary CTA button
- `variant` ('default' | 'centered' | 'split') - Layout variant

### Features

Feature grid section.

```tsx
import { Features } from '@/components/sections/Features';

<Features
  title="Our Initiatives"
  subtitle="Building the future together"
  features={[
    {
      title: 'LIGHTHOUSE',
      description: 'Daily mental health check-ins',
      icon: <BrainIcon />
    },
    // ... more features
  ]}
/>
```

**Props:**
- `title` (string, optional) - Section heading
- `subtitle` (string, optional) - Section description
- `features` (array, required) - Array of feature objects
  - `title` (string) - Feature name
  - `description` (string) - Feature description
  - `icon` (ReactNode, optional) - Icon component

## Form Components

### NewsletterForm

Email capture form with validation.

```tsx
import { NewsletterForm } from '@/components/forms/NewsletterForm';

<NewsletterForm />
```

**Features:**
- Email validation with Zod
- Loading states
- Success message
- Error handling
- API integration (`/api/email/subscribe`)

## Utility Functions

### cn()

Tailwind CSS class name merger.

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', condition && 'conditional-class', className)} />
```

## Styling Guidelines

### Colors

Use brand color classes in Tailwind:

```tsx
// Primary colors
<div className="bg-navy text-white" />
<div className="bg-gold text-navy" />

// Secondary colors
<div className="bg-soft-sky" />
<div className="bg-living-green" />
<div className="bg-warm-coral" />

// Accent colors
<div className="bg-purple-dawn" />
<div className="bg-soft-orange" />
```

### Typography

```tsx
// Headings (use font-heading)
<h1 className="font-heading text-4xl font-bold text-navy" />

// Body text (default)
<p className="text-base text-navy-light" />

// Monospace (for data)
<code className="font-mono text-sm" />
```

### Spacing

Follow consistent spacing scale:
- 4px increments (p-1, p-2, p-3, etc.)
- Common values: p-4, p-6, p-8, p-12, p-16

### Responsive Design

Mobile-first approach:

```tsx
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl md:text-4xl lg:text-6xl">Responsive</h1>
</div>
```

## Accessibility

All components follow WCAG 2.1 guidelines:

- Semantic HTML
- Keyboard navigation
- Focus indicators (gold ring)
- Screen reader support
- ARIA labels where needed

### Focus States

Consistent focus styling across all interactive elements:

```tsx
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
```

## Animation

Use Framer Motion for animations (future):

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Best Practices

### Component Structure

```tsx
// 1. Imports
import React from 'react';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

// 3. Component
export function MyComponent({ title, onAction }: MyComponentProps) {
  // 4. Hooks
  const [state, setState] = React.useState(false);

  // 5. Handlers
  const handleClick = () => {
    onAction?.();
  };

  // 6. Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
```

### File Naming

- PascalCase for components: `MyComponent.tsx`
- camelCase for utilities: `myUtil.ts`
- kebab-case for routes: `about-us/page.tsx`

### Import Organization

```tsx
// 1. External libraries
import React from 'react';
import { motion } from 'framer-motion';

// 2. Internal components
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layouts/Header';

// 3. Utilities
import { cn } from '@/lib/utils';

// 4. Types
import type { User } from '@/types';

// 5. Styles (if needed)
import styles from './styles.module.css';
```

## Adding New Components

1. Create component file in appropriate directory
2. Follow TypeScript best practices
3. Add proper props interface
4. Include JSDoc comments
5. Export from index if creating multiple related components
6. Update this documentation
7. Add to Storybook (future)

## Future Enhancements

- [ ] Storybook for component documentation
- [ ] Visual regression testing
- [ ] Component performance metrics
- [ ] Automated accessibility testing
- [ ] Design tokens system

---

**Last Updated**: November 24, 2025
**Maintained By**: Heaven on Earth Development Team
