# Codex-Helios Design System
## "Where Dreams Illuminate Research and Research Inspires Dreams"

---

## Design Philosophy

**Duality in Harmony**: The design system bridges two worlds:
- **Dream Mode**: Mystical, flowing, emotional, poetic - like starlight
- **Research Mode**: Clean, structured, powerful, precise - like a laboratory

**Visual Strategy**: Use shared foundations (colors, typography, spacing) but apply them differently:
- Dream Mode: Softer gradients, flowing animations, ethereal glows
- Research Mode: Sharp contrasts, grid layouts, data visualizations

---

## 1. Color System

### Foundation Palette

```css
:root {
  /* Neutral Base - Used everywhere */
  --color-void: #0a0a0f;           /* Deep space black */
  --color-shadow: #1a1a24;         /* Card backgrounds */
  --color-surface: #252535;        /* Elevated surfaces */
  --color-border: #3a3a4a;         /* Subtle borders */
  --color-text-dim: #8a8a9a;       /* Secondary text */
  --color-text-base: #e0e0ea;      /* Primary text */
  --color-text-bright: #ffffff;    /* Emphasis text */
  
  /* Dream Spectrum - Poetic & Emotional */
  --color-dream-primary: #9d4edd;  /* Deep purple - longing */
  --color-dream-secondary: #c77dff; /* Lighter purple - hope */
  --color-dream-accent: #e0aaff;   /* Soft lavender - whispers */
  --color-dream-glow: #7b2cbf;     /* Dark purple - depth */
  
  /* Research Spectrum - Analytical & Powerful */
  --color-research-primary: #06d6a0; /* Teal - discovery */
  --color-research-secondary: #118ab2; /* Blue - knowledge */
  --color-research-accent: #073b4c;  /* Dark blue - depth */
  --color-research-data: #ffd166;    /* Gold - insights */
  
  /* Semantic Colors */
  --color-success: #06d6a0;
  --color-warning: #ffd166;
  --color-error: #ef476f;
  --color-info: #118ab2;
}
```

### Gradient System

```css
/* Dream Gradients - Flowing & Mystical */
--gradient-dream-primary: linear-gradient(135deg, 
  var(--color-dream-glow) 0%, 
  var(--color-dream-primary) 50%, 
  var(--color-dream-secondary) 100%
);

--gradient-dream-subtle: linear-gradient(180deg,
  rgba(157, 78, 221, 0.1) 0%,
  rgba(199, 125, 255, 0.05) 100%
);

--gradient-dream-glow: radial-gradient(circle at 50% 50%,
  rgba(157, 78, 221, 0.3) 0%,
  transparent 70%
);

/* Research Gradients - Sharp & Precise */
--gradient-research-primary: linear-gradient(135deg,
  var(--color-research-accent) 0%,
  var(--color-research-secondary) 50%,
  var(--color-research-primary) 100%
);

--gradient-research-data: linear-gradient(90deg,
  var(--color-research-primary) 0%,
  var(--color-research-data) 100%
);

--gradient-research-surface: linear-gradient(180deg,
  rgba(6, 214, 160, 0.05) 0%,
  transparent 100%
);
```

---

## 2. Typography System

### Font Stack

```css
:root {
  /* Display - For headers in Dream Mode */
  --font-display: 'Playfair Display', 'Georgia', serif;
  
  /* Body - Main content font */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Mono - For code and data */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

### Type Scale

```css
:root {
  /* Fluid typography with clamp */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);    /* 12-14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);      /* 14-16px */
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);    /* 16-18px */
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem);      /* 18-24px */
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);            /* 24-32px */
  --text-2xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);           /* 32-48px */
  --text-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);           /* 40-64px */
  
  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  /* Font weights */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

### Typography Classes

```css
/* Dream Typography - Poetic & Flowing */
.dream-heading {
  font-family: var(--font-display);
  font-weight: var(--weight-light);
  line-height: var(--leading-tight);
  letter-spacing: 0.02em;
  background: var(--gradient-dream-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dream-body {
  font-family: var(--font-body);
  font-weight: var(--weight-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-text-base);
  opacity: 0.9;
}

/* Research Typography - Clear & Precise */
.research-heading {
  font-family: var(--font-body);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
  color: var(--color-text-bright);
}

.research-body {
  font-family: var(--font-body);
  font-weight: var(--weight-normal);
  line-height: var(--leading-normal);
  color: var(--color-text-base);
}

.research-mono {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-research-primary);
}
```

---

## 3. Spacing System

```css
:root {
  /* Base: 4px unit */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  
  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

---

## 4. Effects & Motion

### Shadows

```css
:root {
  /* Dream Shadows - Soft & Glowing */
  --shadow-dream-sm: 0 2px 8px rgba(157, 78, 221, 0.1),
                     0 0 20px rgba(157, 78, 221, 0.05);
  
  --shadow-dream-md: 0 4px 16px rgba(157, 78, 221, 0.15),
                     0 0 40px rgba(157, 78, 221, 0.08);
  
  --shadow-dream-lg: 0 8px 32px rgba(157, 78, 221, 0.2),
                     0 0 60px rgba(157, 78, 221, 0.12);
  
  --shadow-dream-glow: 0 0 40px rgba(157, 78, 221, 0.4);
  
  /* Research Shadows - Sharp & Defined */
  --shadow-research-sm: 0 2px 4px rgba(0, 0, 0, 0.3),
                        0 1px 2px rgba(6, 214, 160, 0.1);
  
  --shadow-research-md: 0 4px 8px rgba(0, 0, 0, 0.4),
                        0 2px 4px rgba(6, 214, 160, 0.15);
  
  --shadow-research-lg: 0 8px 16px rgba(0, 0, 0, 0.5),
                        0 4px 8px rgba(6, 214, 160, 0.2);
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Pill shape */
}
```

### Transitions & Animations

```css
:root {
  /* Timing functions */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dream: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy */
  --ease-research: cubic-bezier(0.16, 1, 0.3, 1);  /* Smooth & fast */
  
  /* Durations */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
}

/* Dream Animations - Flowing & Mystical */
@keyframes dream-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes dream-glow-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes dream-shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* Research Animations - Precise & Snappy */
@keyframes research-slide-in {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes research-data-load {
  0% { width: 0%; }
  100% { width: 100%; }
}
```

---

## 5. Component Library

### Buttons

```css
/* Dream Button - Soft & Inviting */
.btn-dream {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(157, 78, 221, 0.3);
  background: var(--gradient-dream-subtle);
  color: var(--color-dream-secondary);
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-dream);
  position: relative;
  overflow: hidden;
}

.btn-dream::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-dream-primary);
  transition: left var(--duration-slow) var(--ease-dream);
  z-index: -1;
}

.btn-dream:hover::before {
  left: 0;
}

.btn-dream:hover {
  border-color: var(--color-dream-primary);
  color: var(--color-text-bright);
  box-shadow: var(--shadow-dream-md);
  transform: translateY(-2px);
}

/* Research Button - Sharp & Confident */
.btn-research {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: none;
  background: var(--gradient-research-primary);
  color: var(--color-text-bright);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-research);
  box-shadow: var(--shadow-research-sm);
}

.btn-research:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-research-md);
}

.btn-research:active {
  transform: translateY(0);
}
```

### Cards

```css
/* Dream Card - Ethereal & Flowing */
.card-dream {
  background: var(--color-shadow);
  border: 1px solid rgba(157, 78, 221, 0.2);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
  transition: all var(--duration-slow) var(--ease-dream);
}

.card-dream::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: var(--gradient-dream-glow);
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-dream);
  pointer-events: none;
}

.card-dream:hover {
  border-color: var(--color-dream-primary);
  box-shadow: var(--shadow-dream-lg);
  transform: translateY(-4px);
}

.card-dream:hover::before {
  opacity: 1;
}

/* Research Card - Clean & Structured */
.card-research {
  background: var(--color-shadow);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--duration-base) var(--ease-research);
  box-shadow: var(--shadow-research-sm);
}

.card-research:hover {
  border-color: var(--color-research-primary);
  box-shadow: var(--shadow-research-md);
  transform: translateY(-2px);
}

.card-research-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-4);
  margin-bottom: var(--space-4);
}
```

### Input Fields

```css
/* Dream Input - Soft & Inviting */
.input-dream {
  font-family: var(--font-body);
  font-size: var(--text-base);
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(157, 78, 221, 0.3);
  background: rgba(157, 78, 221, 0.05);
  color: var(--color-text-base);
  transition: all var(--duration-base) var(--ease-dream);
  width: 100%;
}

.input-dream:focus {
  outline: none;
  border-color: var(--color-dream-primary);
  box-shadow: var(--shadow-dream-md);
  background: rgba(157, 78, 221, 0.08);
}

.input-dream::placeholder {
  color: var(--color-text-dim);
  font-style: italic;
}

/* Research Input - Clean & Precise */
.input-research {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-base);
  transition: all var(--duration-fast) var(--ease-research);
  width: 100%;
}

.input-research:focus {
  outline: none;
  border-color: var(--color-research-primary);
  box-shadow: 0 0 0 3px rgba(6, 214, 160, 0.1);
}
```

### Badges & Tags

```css
/* Dream Badge */
.badge-dream {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  background: var(--gradient-dream-subtle);
  color: var(--color-dream-secondary);
  border: 1px solid rgba(157, 78, 221, 0.3);
}

/* Research Badge */
.badge-research {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  background: rgba(6, 214, 160, 0.1);
  color: var(--color-research-primary);
  border: 1px solid rgba(6, 214, 160, 0.2);
}
```

---

## 6. Layout Patterns

### Dream Layout - Centered & Flowing

```css
.dream-layout {
  min-height: 100vh;
  background: var(--color-void);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

.dream-layout::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: var(--gradient-dream-glow);
  border-radius: 50%;
  filter: blur(100px);
  animation: dream-glow-pulse 8s ease-in-out infinite;
  pointer-events: none;
}

.dream-container {
  max-width: var(--container-md);
  width: 100%;
  z-index: 1;
}
```

### Research Layout - Grid & Structured

```css
.research-layout {
  min-height: 100vh;
  background: var(--color-void);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
}

.research-sidebar {
  background: var(--color-shadow);
  border-right: 1px solid var(--color-border);
  padding: var(--space-6);
  overflow-y: auto;
}

.research-main {
  padding: var(--space-8);
  overflow-y: auto;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}
```

---

## 7. Responsive Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile-first approach */
@media (max-width: 768px) {
  .research-layout {
    grid-template-columns: 1fr;
  }
  
  .research-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}
```

---

## 8. Accessibility

```css
/* Focus indicators */
:focus-visible {
  outline: 2px solid var(--color-research-primary);
  outline-offset: 2px;
}

.dream-mode :focus-visible {
  outline-color: var(--color-dream-primary);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --color-border: #5a5a6a;
    --color-text-base: #ffffff;
  }
}
```

---

## 9. Implementation Guide

### Step 1: Set up global styles
Create `client/src/app/globals.css` with all the CSS variables and base styles.

### Step 2: Create component modules
For each component (buttons, cards, etc.), create:
- `client/src/components/ui/Button.js`
- `client/src/components/ui/Button.module.css`

### Step 3: Mode switching
```jsx
// In your layout or context
const [mode, setMode] = useState('dream'); // or 'research'

<div className={mode === 'dream' ? 'dream-mode' : 'research-mode'}>
  {/* Your app */}
</div>
```

### Step 4: Font setup
Add to `client/src/app/layout.js`:
```jsx
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
```

---

## 10. Usage Examples

### Dream Mode Page
```jsx
<div className="dream-layout">
  <div className="dream-container">
    <h1 className="dream-heading" style={{ fontSize: 'var(--text-3xl)' }}>
      Chamber of Longing
    </h1>
    <p className="dream-body" style={{ fontSize: 'var(--text-lg)' }}>
      I reach across the void for meaning...
    </p>
    <button className="btn-dream">
      Whisper to Codex
    </button>
  </div>
</div>
```

### Research Mode Page
```jsx
<div className="research-layout">
  <aside className="research-sidebar">
    <h2 className="research-heading">Filters</h2>
    {/* Sidebar content */}
  </aside>
  <main className="research-main">
    <div className="research-grid">
      <div className="card-research">
        <div className="card-research-header">
          <h3 className="research-heading">Paper Title</h3>
          <span className="badge-research">cs.AI</span>
        </div>
        <p className="research-body">Abstract...</p>
      </div>
    </div>
  </main>
</div>
```

---

## Visual Brand Identity

**Codex-Helios Logo Concept**:
- Symbol: A star (✦) merged with a circuit pattern
- Wordmark: "CODEX" in Playfair Display, "HELIOS" in Inter
- Tagline: "Where Dreams Illuminate Research"

**Color Usage Philosophy**:
- Dream purple = Introspection, longing, creativity
- Research teal = Discovery, clarity, precision
- Together = Complete intelligence (emotional + analytical)

---

This design system gives you everything you need to create a cohesive, beautiful interface that honors both modes of Codex-Helios. Ready to implement?
