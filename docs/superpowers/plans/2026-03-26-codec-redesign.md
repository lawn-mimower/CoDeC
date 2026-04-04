# CoDeC Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand CoDeC's website to match the blue+gold logo, fix the registration module with Supabase persistence + Google Form embed support, and modularize the CSS architecture.

**Architecture:** Layered incremental — Phase A (design tokens + shared components) ripples the new palette site-wide immediately; Phase B (page-by-page reskins + CSS module migrations) applies the new card/layout style; Phase C (registration fix) adds real backend persistence.

**Tech Stack:** Next.js 16 (App Router), React 19, Supabase (`@supabase/ssr`), Framer Motion, Lucide React, CSS Modules, Resend (email), JetBrains Mono + Inter fonts.

---

## Phase A — Foundation

### Task 1: Replace design tokens in `src/index.css`

**Files:**
- Modify: `src/index.css` (full replacement of `:root` and `[data-theme='dark']` blocks and `body` background)

- [ ] **Step 1: Replace the `:root` block**

Replace everything from `:root {` through the closing `}` of `:root` (lines 3–90) with:

```css
:root {
  /* Brand */
  --brand-blue: #4A8FE0;
  --brand-gold: #F5C542;
  --gradient-brand: linear-gradient(90deg, #4A8FE0, #F5C542);
  --gradient-brand-deep: linear-gradient(90deg, #4A8FE0, #6366f1);

  /* Backgrounds */
  --bg-primary: #f0f4ff;
  --bg-card: rgba(255, 255, 255, 0.78);
  --bg-card-tint: rgba(74, 143, 224, 0.06);
  --gradient-hero: linear-gradient(135deg, rgba(74, 143, 224, 0.08) 0%, rgba(245, 197, 66, 0.04) 100%);

  /* Text */
  --text-main: #1a1a2e;
  --text-secondary: #6b7280;

  /* Borders */
  --border-card: rgba(74, 143, 224, 0.12);
  --border-card-hover: rgba(74, 143, 224, 0.32);

  /* Shadows */
  --shadow-card: 0 4px 16px rgba(74, 143, 224, 0.08);
  --shadow-card-hover: 0 12px 32px rgba(74, 143, 224, 0.16);

  /* Fonts */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Nav */
  --nav-bg: rgba(255, 255, 255, 0.75);
  --nav-bg-scrolled: rgba(255, 255, 255, 0.92);
  --nav-border: 1px solid rgba(74, 143, 224, 0.15);
  --nav-link-color: #6b7280;
  --nav-link-hover: #1a1a2e;
  --nav-icon-color: #1a1a2e;

  /* Kept for legacy component compatibility — map to brand */
  --primary-glow: #4A8FE0;
  --secondary-glow: #F5C542;
  --accent-blue: #4A8FE0;
  --bg-glass: rgba(255, 255, 255, 0.7);
  --border-glass: 1px solid rgba(74, 143, 224, 0.12);

  /* Footer */
  --footer-bg-end: #e8eef8;
  --footer-border: rgba(74, 143, 224, 0.1);
}
```

- [ ] **Step 2: Replace the `[data-theme='dark']` block**

Replace everything from `[data-theme='dark'] {` through its closing `}` with:

```css
[data-theme='dark'] {
  --bg-primary: #0d1117;
  --bg-card: rgba(20, 28, 48, 0.78);
  --bg-card-tint: rgba(74, 143, 224, 0.08);
  --gradient-hero: linear-gradient(135deg, rgba(74, 143, 224, 0.12) 0%, rgba(245, 197, 66, 0.06) 100%);

  --text-main: #e8edf5;
  --text-secondary: #8b98b0;

  --border-card: rgba(74, 143, 224, 0.15);
  --border-card-hover: rgba(74, 143, 224, 0.38);

  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.4);

  --nav-bg: rgba(13, 17, 23, 0.78);
  --nav-bg-scrolled: rgba(13, 17, 23, 0.95);
  --nav-border: 1px solid rgba(74, 143, 224, 0.18);
  --nav-link-color: #8b98b0;
  --nav-link-hover: #e8edf5;
  --nav-icon-color: #e8edf5;

  --primary-glow: #5B9EEF;
  --secondary-glow: #F7D060;
  --accent-blue: #5B9EEF;
  --bg-glass: rgba(20, 28, 48, 0.7);
  --border-glass: 1px solid rgba(74, 143, 224, 0.15);

  --footer-bg-end: #0d1117;
  --footer-border: rgba(74, 143, 224, 0.08);
}
```

- [ ] **Step 3: Update the `body` background-image radial gradients**

Find the `body` block and update `background-image` to:
```css
background-image:
  radial-gradient(circle at 15% 50%, rgba(74, 143, 224, 0.07), transparent 25%),
  radial-gradient(circle at 85% 30%, rgba(245, 197, 66, 0.07), transparent 25%);
```

- [ ] **Step 4: Check the site in the browser**

Open http://localhost:3000 — you should see the nav pill shift from the old blue/amber cyberpunk glow to the cleaner brand-blue palette. The body background tint changes too.

- [ ] **Step 5: Commit**
```bash
git add src/index.css
git commit -m "feat: replace design tokens with CoDeC brand blue+gold palette"
```

---

### Task 2: Create `GlassCard` shared component

**Files:**
- Create: `src/components/GlassCard.jsx`
- Create: `src/components/GlassCard.module.css`

- [ ] **Step 1: Create the CSS module**

```css
/* src/components/GlassCard.module.css */
.card {
  background: var(--bg-card-tint);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.hover:hover {
  border-color: var(--border-card-hover);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}
```

- [ ] **Step 2: Create the component**

```jsx
// src/components/GlassCard.jsx
import styles from './GlassCard.module.css';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
```

- [ ] **Step 3: Commit**
```bash
git add src/components/GlassCard.jsx src/components/GlassCard.module.css
git commit -m "feat: add GlassCard shared component"
```

---

### Task 3: Create `SectionHeader` shared component

**Files:**
- Create: `src/components/SectionHeader.jsx`
- Create: `src/components/SectionHeader.module.css`

- [ ] **Step 1: Create the CSS module**

```css
/* src/components/SectionHeader.module.css */
.header {
  text-align: center;
  margin-bottom: 3rem;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-blue);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: block;
}

.heading {
  font-family: var(--font-sans);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.15;
  margin-bottom: 0.75rem;
}

.gradientWord {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.6;
}
```

- [ ] **Step 2: Create the component**

```jsx
// src/components/SectionHeader.jsx
import styles from './SectionHeader.module.css';

const SectionHeader = ({ label, heading, gradientWord, subtitle, className = '' }) => {
  const renderHeading = () => {
    if (!gradientWord) return heading;
    const parts = heading.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className={styles.gradientWord}>{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${styles.header} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.heading}>{renderHeading()}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
```

- [ ] **Step 3: Commit**
```bash
git add src/components/SectionHeader.jsx src/components/SectionHeader.module.css
git commit -m "feat: add SectionHeader shared component"
```

---

### Task 4: Reskin Navbar

**Files:**
- Modify: `src/components/Navbar.module.css`
- Modify: `src/components/Navbar.jsx` (logo + CTA button only)

- [ ] **Step 1: Replace `Navbar.module.css` with reskinned version**

```css
/* src/components/Navbar.module.css */
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  border-radius: 16px;
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: var(--nav-border);
  box-shadow: var(--shadow-card);
  z-index: 1000;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.navbarScrolled {
  background: var(--nav-bg-scrolled);
  box-shadow: var(--shadow-card-hover);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
  color: var(--text-main);
  letter-spacing: -0.03em;
}

.logoIcon {
  width: 28px;
  height: 28px;
  background: var(--gradient-brand);
  border-radius: 6px;
  flex-shrink: 0;
}

.navActions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.joinBtn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.1rem;
  background: var(--gradient-brand-deep);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: var(--font-sans);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.joinBtn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.themeToggle {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--nav-icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.themeToggle:hover {
  background: var(--bg-card-tint);
}

.themeToggleInner {
  position: relative;
  width: 20px;
  height: 20px;
}

.themeIcon {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  opacity: 0;
  transform: rotate(-90deg) scale(0);
}

.themeIconActive {
  opacity: 1;
  transform: rotate(0) scale(1);
}

.menuIcon {
  display: none;
  cursor: pointer;
  color: var(--nav-icon-color);
}

.navMenu {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navLink {
  position: relative;
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--nav-link-color);
  text-decoration: none;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  transition: color 0.2s ease, background 0.2s ease;
}

.navLink:hover {
  color: var(--nav-link-hover);
  background: var(--bg-card-tint);
}

.navLinkActive {
  color: var(--brand-blue);
}

.activeDot {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: rgba(74, 143, 224, 0.1);
}

@media (max-width: 768px) {
  .navbar {
    top: 0;
    width: 100%;
    max-width: none;
    border-radius: 0;
    padding: 1rem 1.5rem;
  }

  .joinText {
    display: none;
  }

  .joinBtn {
    padding: 0.45rem 0.7rem;
  }

  .menuIcon {
    display: block;
  }

  .navMenu {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 4rem;
    gap: 2rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .navMenuActive {
    transform: translateX(0%);
  }
}
```

- [ ] **Step 2: Update the logo and CTA button in `Navbar.jsx`**

Find the logo JSX (around line 59) and replace with:
```jsx
<Link href="/" className={styles.logo}>
  <div className={styles.logoIcon} />
  <span>CoDeC</span>
</Link>
```

Find the login button JSX and replace with:
```jsx
<Link href="/connect" className={styles.joinBtn}>
  <span className={styles.joinText}>Join CoDeC</span>
</Link>
```

Remove the `import { ... Code2, ... LogIn } from 'lucide-react'` entries that are no longer used (keep `Menu`, `X`, `Sun`, `Moon`).

- [ ] **Step 3: Check navbar in browser at http://localhost:3000**

The pill should now show with brand-blue borders, a gradient square logo icon, and the "Join CoDeC" gradient button.

- [ ] **Step 4: Commit**
```bash
git add src/components/Navbar.jsx src/components/Navbar.module.css
git commit -m "feat: reskin navbar with brand blue+gold palette"
```

---

## Phase B — Page Reskins

### Task 5: Reskin Hero

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Hero.module.css`

- [ ] **Step 1: Replace Hero.jsx**

```jsx
// src/components/Hero.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.blobs}>
        <div className={styles.blobBlue} />
        <div className={styles.blobGold} />
      </div>

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          // MIT WPU&apos;s Official Competitive Programming Club
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Community of Developers
          <br />
          and{' '}
          <span className={styles.gradientWord}>Coders</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          Where every line of code builds a dream. Join CoDeC and compete, build, and grow alongside the best at MIT WPU.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <Link href="/events" className={styles.primaryBtn}>
            Explore Events <ArrowRight size={17} />
          </Link>
          <Link href="/connect" className={styles.secondaryBtn}>
            <Users size={17} /> Join the Club
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Replace Hero.module.css**

```css
/* src/components/Hero.module.css */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--gradient-hero);
  padding: 6rem 2rem 4rem;
}

.blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blobBlue {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 480px;
  height: 480px;
  background: rgba(74, 143, 224, 0.18);
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  filter: blur(80px);
  animation: morphBlue 12s ease-in-out infinite alternate;
}

.blobGold {
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 380px;
  height: 380px;
  background: rgba(245, 197, 66, 0.15);
  border-radius: 40% 60% 30% 70% / 60% 40% 50% 50%;
  filter: blur(80px);
  animation: morphGold 14s ease-in-out infinite alternate;
}

@keyframes morphBlue {
  0% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
  100% { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
}

@keyframes morphGold {
  0% { border-radius: 40% 60% 30% 70% / 60% 40% 50% 50%; }
  100% { border-radius: 60% 40% 70% 30% / 40% 60% 40% 60%; }
}

.heroContent {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 760px;
}

.eyebrow {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--brand-blue);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.title {
  font-family: var(--font-sans);
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.12;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.gradientWord {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto 2.5rem;
}

.ctaGroup {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primaryBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--gradient-brand-deep);
  color: white;
  border-radius: 10px;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.primaryBtn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.secondaryBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-card);
  border-radius: 10px;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.secondaryBtn:hover {
  border-color: var(--border-card-hover);
  transform: translateY(-2px);
}
```

- [ ] **Step 3: Update `LandingPage.jsx` — remove the cyberpunk HUD protocol**

Replace `src/views/LandingPage.jsx` with:

```jsx
// src/views/LandingPage.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';

const LandingPage = () => {
  const [eventsData, setEventsData] = useState({ upcoming: [] });

  useEffect(() => {
    EventManager.getEvents()
      .then(data => setEventsData(data))
      .catch(() => setEventsData({ upcoming: [] }));
  }, []);

  return (
    <div>
      <Hero />
      <UpcomingEvents events={eventsData} />
    </div>
  );
};

export default LandingPage;
```

- [ ] **Step 4: Check http://localhost:3000 — hero should show clean Inter headline with gradient "Coders", blob shapes, and updated CTA buttons**

- [ ] **Step 5: Commit**
```bash
git add src/components/Hero.jsx src/components/Hero.module.css src/views/LandingPage.jsx
git commit -m "feat: reskin hero with brand identity and updated copy"
```

---

### Task 6: Reskin EventsPage

**Files:**
- Modify: `src/views/EventsPage.jsx`
- Modify: `src/views/EventsPage.module.css`

- [ ] **Step 1: Fix the Register button logic in EventsPage.jsx**

The current code hides the Register button when `registration_link` is empty — but we're now repurposing that field for Google Form URL. Update the button condition so upcoming events always show Register (the modal handles mode internally):

```jsx
// Before (old logic — remove this):
{(event.registrationLink || event.registration_link) ? (
  <button ...>Register Now</button>
) : (
  <button disabled>Registration Closed</button>
)}

// After (new logic):
<button
  className={styles.registerBtn}
  onClick={() => { setSelectedEvent(event); setIsModalOpen(true); }}
>
  Register Now
</button>
```

Only show "Registration Closed" for past events (the page already separates upcoming vs past — past events section should keep the disabled button).

- [ ] **Step 2: Update EventsPage.jsx — use SectionHeader + GlassCard**

At the top of `EventsPage.jsx`, add these imports:
```jsx
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
```

Replace the existing page header JSX (the `<div className={styles.header}>` block) with:
```jsx
<SectionHeader
  label="// Upcoming Events"
  heading="What's happening at CoDeC"
  gradientWord="CoDeC"
  subtitle="Contests, workshops, and meetups — all in one place."
/>
```

For each event card, wrap the existing card `<motion.div>` contents inside `<GlassCard>` and remove the old `styles.eventCard` background/border styles from CSS (keep layout classes).

- [ ] **Step 2: Update EventsPage.module.css card styles**

Find the `.eventCard` rule and replace its background/border with:
```css
.eventCard {
  overflow: hidden;
  border-radius: 12px;
}
```

Find `.eventHeader` and update:
```css
.eventHeader {
  background: var(--gradient-brand-deep);
  padding: 1.25rem 1.5rem;
  color: white;
}
```

Find `.registerBtn` and update:
```css
.registerBtn {
  background: var(--gradient-brand-deep);
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.registerBtn:hover { opacity: 0.88; }
.registerBtn:disabled { background: var(--bg-card-tint); color: var(--text-secondary); cursor: not-allowed; }
```

Find any category/tag badge styles and update:
```css
.categoryBadge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--brand-blue);
  background: rgba(74, 143, 224, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

- [ ] **Step 3: Check http://localhost:3000/events**

- [ ] **Step 4: Commit**
```bash
git add src/views/EventsPage.jsx src/views/EventsPage.module.css
git commit -m "feat: reskin events page with GlassCard and SectionHeader"
```

---

### Task 7: Reskin DivisionsPage

**Files:**
- Modify: `src/views/DivisionsPage.jsx`
- Modify: `src/views/DivisionsPage.module.css`

- [ ] **Step 1: Add SectionHeader + GlassCard imports to DivisionsPage.jsx**

```jsx
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
```

Replace page header block with:
```jsx
<SectionHeader
  label="// Our Divisions"
  heading="Three pillars of CoDeC"
  gradientWord="CoDeC"
/>
```

Wrap each division card's content in `<GlassCard>`.

- [ ] **Step 2: Update `.divCard` in DivisionsPage.module.css**

```css
.divCard {
  overflow: hidden;
  border-radius: 12px;
  padding: 2rem;
}
```

Update division icon/accent color to use `var(--brand-blue)` instead of any hardcoded cyberpunk colors.

- [ ] **Step 3: Check http://localhost:3000/divisions**

- [ ] **Step 4: Commit**
```bash
git add src/views/DivisionsPage.jsx src/views/DivisionsPage.module.css
git commit -m "feat: reskin divisions page"
```

---

### Task 8: Migrate AchievementsPage to CSS Modules + reskin

**Files:**
- Modify: `src/views/AchievementsPage.jsx`
- Create: `src/views/AchievementsPage.module.css` (new)
- Delete: `src/views/AchievementsPage.css`

- [ ] **Step 1: Create `AchievementsPage.module.css`**

```css
/* src/views/AchievementsPage.module.css */
.page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  padding: 2rem;
  border-radius: 12px;
}

.cardIcon {
  width: 44px;
  height: 44px;
  background: var(--gradient-brand-deep);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
}

.cardTitle {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.cardDesc {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--brand-blue);
  background: rgba(74, 143, 224, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 0.75rem;
}
```

- [ ] **Step 2: Update AchievementsPage.jsx**

Remove the old global CSS import (e.g. `import './AchievementsPage.css'`) and replace with:
```jsx
import styles from './AchievementsPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
```

Replace the page header block with:
```jsx
<SectionHeader label="// Achievements" heading="Club Glory" gradientWord="Glory" />
```

Replace each achievement card with:
```jsx
<GlassCard className={styles.card}>
  <div className={styles.cardIcon}><Trophy size={20} /></div>
  <div className={styles.cardTitle}>{achievement.title}</div>
  <div className={styles.cardDesc}>{achievement.description}</div>
  <span className={styles.tag}>{achievement.year}</span>
</GlassCard>
```

Update all `className="achievement-xyz"` references to use `styles.xyz`.

- [ ] **Step 3: Delete `src/views/AchievementsPage.css`**
```bash
rm src/views/AchievementsPage.css
```

Remove the corresponding import from `app/layout.jsx` if present.

- [ ] **Step 4: Check http://localhost:3000/achievements**

- [ ] **Step 5: Commit**
```bash
git add src/views/AchievementsPage.jsx src/views/AchievementsPage.module.css
git rm src/views/AchievementsPage.css
git commit -m "feat: migrate AchievementsPage to CSS modules, reskin"
```

---

### Task 9: Migrate ClubHeadsPage + ContactPage to CSS Modules + reskin

**Files:**
- Modify: `src/views/ClubHeadsPage.jsx`
- Create: `src/views/ClubHeadsPage.module.css`
- Modify: `src/views/ContactPage.jsx`
- Create: `src/views/ContactPage.module.css`

- [ ] **Step 1: Create `ClubHeadsPage.module.css`**

```css
/* src/views/ClubHeadsPage.module.css */
.page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.75rem;
  text-align: center;
  border-radius: 12px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--bg-card-tint);
  border: 2px solid var(--brand-blue);
  margin: 0 auto 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-blue);
}

.name {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--brand-blue);
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

- [ ] **Step 2: Update ClubHeadsPage.jsx**

Remove global CSS import, add:
```jsx
import styles from './ClubHeadsPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
```

Replace header with:
```jsx
<SectionHeader label="// The Team" heading="Meet the minds behind CoDeC" gradientWord="CoDeC" />
```

Wrap each member card in `<GlassCard className={styles.card}>` and update all class references to `styles.*`.

- [ ] **Step 3: Create `ContactPage.module.css`**

```css
/* src/views/ContactPage.module.css */
.page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  max-width: 640px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-blue);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.input,
.textarea {
  background: var(--bg-card-tint);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-main);
  transition: border-color 0.2s ease;
  outline: none;
  width: 100%;
}

.input:focus,
.textarea:focus {
  border-color: var(--brand-blue);
}

.submitBtn {
  background: var(--gradient-brand-deep);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 2rem;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
  align-self: flex-start;
}

.submitBtn:hover { opacity: 0.88; }
```

- [ ] **Step 4: Update ContactPage.jsx** — same pattern: remove global import, add module import + SectionHeader, update all `className` references.

- [ ] **Step 5: Remove old global CSS files and their imports from `app/layout.jsx`**
```bash
# Check which files are imported in layout.jsx then remove the ones migrated
git rm src/views/ClubHeadsPage.css 2>/dev/null || true
git rm src/views/ContactPage.css 2>/dev/null || true
```

- [ ] **Step 6: Commit**
```bash
git add src/views/ClubHeadsPage.jsx src/views/ClubHeadsPage.module.css
git add src/views/ContactPage.jsx src/views/ContactPage.module.css
git add app/layout.jsx
git commit -m "feat: migrate ClubHeadsPage and ContactPage to CSS modules, reskin"
```

---

### Task 10: Migrate LoginPage to CSS Modules + reskin

**Files:**
- Modify: `src/views/LoginPage.jsx`
- Create: `src/views/LoginPage.module.css`

- [ ] **Step 1: Create `LoginPage.module.css`**

```css
/* src/views/LoginPage.module.css */
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--gradient-hero);
}

.card {
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  border-radius: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(12px);
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 48px;
  height: 48px;
  background: var(--gradient-brand);
  border-radius: 12px;
  margin: 0 auto 1rem;
}

.title {
  font-family: var(--font-sans);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.label {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

.input {
  background: var(--bg-card-tint);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-main);
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;
}

.input:focus { border-color: var(--brand-blue); }

.submitBtn {
  width: 100%;
  background: var(--gradient-brand-deep);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s ease;
}

.submitBtn:hover { opacity: 0.88; }

.error {
  font-size: 0.85rem;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
}

.link {
  font-size: 0.85rem;
  color: var(--brand-blue);
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 0.75rem;
}

.divider {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0.5rem 0;
}
```

- [ ] **Step 2: Update LoginPage.jsx**

Remove the old global CSS import and all CLI-style labels (`AGENT_ID // EMAIL` etc). Replace with clean `styles.*` classnames and the new module. Labels become plain "Email", "Password". Remove any cyberpunk decorative elements.

- [ ] **Step 3: Remove old login CSS import from `app/layout.jsx`**

- [ ] **Step 4: Check http://localhost:3000/login**

- [ ] **Step 5: Commit**
```bash
git add src/views/LoginPage.jsx src/views/LoginPage.module.css app/layout.jsx
git commit -m "feat: migrate LoginPage to CSS modules, remove cyberpunk copy"
```

---

### Task 11: Reskin Dashboard

**Files:**
- Modify: `src/views/Dashboard.module.css`

- [ ] **Step 1: Update sidebar and active state styles in Dashboard.module.css**

Find `.sidebar` and update:
```css
.sidebar {
  width: 280px;
  background: var(--bg-card-tint);
  border-right: 1px solid var(--border-card);
  padding: 2rem 1rem;
  flex-shrink: 0;
}
```

Find `.navItem` (or equivalent active tab style) and update:
```css
.navItemActive {
  border-left: 3px solid var(--brand-blue);
  color: var(--brand-blue);
  background: rgba(74, 143, 224, 0.08);
  border-radius: 0 8px 8px 0;
}
```

Find any hardcoded glow/cyberpunk colors (e.g. `#3b82f6` glow, `rgba(245, 158, 11, ...)`) and replace with `var(--brand-blue)` / `var(--brand-gold)`.

- [ ] **Step 2: Check http://localhost:3000/dashboard (requires login)**

- [ ] **Step 3: Commit**
```bash
git add src/views/Dashboard.module.css
git commit -m "feat: reskin dashboard sidebar with brand tokens"
```

---

## Phase C — Registration Module

### Task 12: Create `event_registrations` Supabase table

**Files:**
- Create: `scripts/create-event-registrations.sql`

- [ ] **Step 1: Create the SQL migration file**

```sql
-- scripts/create-event-registrations.sql
create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  prn text not null,
  branch text not null,
  year text not null,
  registered_at timestamptz default now()
);

-- Prevent duplicate registrations
create unique index if not exists event_registrations_unique_email_event
  on public.event_registrations(event_id, email);

-- RLS: anyone can insert, only admins can select
alter table public.event_registrations enable row level security;

create policy "Anyone can register for events"
  on public.event_registrations
  for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view registrations"
  on public.event_registrations
  for select
  to authenticated
  using (
    exists (
      select 1 from public.members
      where user_id = auth.uid() and role = 'admin'
    )
  );
```

- [ ] **Step 2: Run the SQL in Supabase Dashboard**

Go to Supabase → SQL Editor → paste and run the contents of `scripts/create-event-registrations.sql`.

- [ ] **Step 3: Commit the migration file**
```bash
git add scripts/create-event-registrations.sql
git commit -m "feat: add event_registrations table SQL migration"
```

---

### Task 13: Create email utility and `registerForEvent` Server Action

**Files:**
- Create: `src/utils/email.js`
- Modify: `src/components/actions.js` (overwrite the stub)

- [ ] **Step 1: Install Resend**
```bash
npm install resend
```

- [ ] **Step 2: Add `RESEND_API_KEY` to `.env.local`**

```
RESEND_API_KEY=re_your_key_here
```

Get a free key at https://resend.com — free tier allows 3,000 emails/month.

- [ ] **Step 3: Create `src/utils/email.js`**

```js
// src/utils/email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationConfirmation({ to, name, eventName, eventDate, eventVenue }) {
  await resend.emails.send({
    from: 'CoDeC <noreply@yourdomain.com>', // replace with your verified Resend domain
    to,
    subject: `You're registered for ${eventName} — CoDeC`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 2rem;">
        <div style="background: linear-gradient(90deg, #4A8FE0, #F5C542); height: 4px; border-radius: 2px; margin-bottom: 2rem;"></div>
        <h2 style="color: #1a1a2e; font-size: 1.4rem; margin-bottom: 0.5rem;">You're in, ${name}! 🎉</h2>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">Your registration for <strong style="color: #4A8FE0;">${eventName}</strong> has been confirmed.</p>
        <div style="background: rgba(74,143,224,0.06); border: 1px solid rgba(74,143,224,0.12); border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
          <p style="margin: 0 0 0.5rem; font-size: 0.85rem; color: #6b7280;">📅 <strong>${eventDate}</strong></p>
          ${eventVenue ? `<p style="margin: 0; font-size: 0.85rem; color: #6b7280;">📍 <strong>${eventVenue}</strong></p>` : ''}
        </div>
        <p style="color: #6b7280; font-size: 0.9rem;">See you there! — <strong>CoDeC, MIT WPU</strong></p>
        <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 2rem; font-style: italic;">Community of Developers and Coders · Where Dreams Begin</p>
      </div>
    `,
  });
}
```

- [ ] **Step 4: Overwrite `src/components/actions.js` with the real Server Action**

```js
// src/components/actions.js
'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { sendRegistrationConfirmation } from '../utils/email';

export async function registerForEvent(formData, eventId) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );

  const { name, email, phone, prn, branch, year } = formData;

  // Duplicate check
  const { data: existing } = await supabase
    .from('event_registrations')
    .select('id')
    .eq('event_id', eventId)
    .eq('email', email)
    .single();

  if (existing) {
    return { error: 'You have already registered for this event.' };
  }

  // Insert registration
  const { error: insertError } = await supabase
    .from('event_registrations')
    .insert({ event_id: eventId, name, email, phone, prn, branch, year });

  if (insertError) {
    console.error('Registration insert error:', insertError);
    return { error: 'Registration failed. Please try again.' };
  }

  // Fetch event details for the confirmation email
  const { data: event } = await supabase
    .from('events')
    .select('name, date, venue')
    .eq('id', eventId)
    .single();

  // Send confirmation email — failure doesn't block success
  try {
    await sendRegistrationConfirmation({
      to: email,
      name,
      eventName: event?.name ?? 'the event',
      eventDate: event?.date ? new Date(event.date).toLocaleDateString('en-IN', { dateStyle: 'long' }) : '',
      eventVenue: event?.venue ?? '',
    });
  } catch (emailErr) {
    console.error('Confirmation email failed (non-blocking):', emailErr);
  }

  return { success: true };
}
```

- [ ] **Step 5: Commit**
```bash
git add src/utils/email.js src/components/actions.js
git commit -m "feat: add registerForEvent server action with Supabase write and email confirmation"
```

---

### Task 14: Update EventRegistrationModal

**Files:**
- Modify: `src/components/EventRegistrationModal.jsx`
- Modify: `src/components/EventRegistrationModal.module.css`

- [ ] **Step 1: Replace EventRegistrationModal.jsx**

```jsx
// src/components/EventRegistrationModal.jsx
'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerForEvent } from './actions';
import styles from './EventRegistrationModal.module.css';

const BRANCHES = ['CSE', 'CSE-AI', 'CSE-DS', 'ECE', 'Mechanical', 'Civil', 'Other'];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', prn: '', branch: '', year: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !event) return null;

  const isGoogleForm = Boolean(event.registration_link || event.registrationLink);
  const googleFormUrl = event.registration_link || event.registrationLink;

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const result = await registerForEvent(
      { name: formData.fullName, email: formData.email, phone: formData.phone, prn: formData.prn, branch: formData.branch, year: formData.year },
      event.id
    );

    if (result.error) {
      setStatus('error');
      setErrorMsg(result.error);
    } else {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ fullName: '', email: '', phone: '', prn: '', branch: '', year: '' });
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            {status === 'success' ? (
              <motion.div className={styles.successState} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={52} className={styles.successIcon} />
                <h3 className={styles.successTitle}>You&apos;re registered!</h3>
                <p className={styles.successDesc}>Check your email for confirmation details for <strong>{event.name}</strong>.</p>
              </motion.div>
            ) : (
              <>
                <div className={styles.modalHeader}>
                  <span className={styles.eventLabel}>{event.category ?? 'Event'}</span>
                  <h2 className={styles.eventName}>{event.name}</h2>
                  {event.date && (
                    <p className={styles.eventMeta}>
                      {new Date(event.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}
                      {event.venue ? ` · ${event.venue}` : ''}
                    </p>
                  )}
                </div>

                {isGoogleForm ? (
                  <div className={styles.iframeWrapper}>
                    <iframe
                      src={googleFormUrl}
                      width="100%"
                      height="520"
                      frameBorder="0"
                      title="Registration Form"
                      className={styles.googleFrame}
                      onLoad={e => e.target.style.opacity = 1}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                    />
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Full Name</label>
                      <input className={styles.input} name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>College Email</label>
                      <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input className={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>PRN / Student ID</label>
                      <input className={styles.input} name="prn" value={formData.prn} onChange={handleChange} required />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Branch</label>
                        <select className={styles.input} name="branch" value={formData.branch} onChange={handleChange} required>
                          <option value="" disabled>Select Branch</option>
                          {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Year</label>
                        <select className={styles.input} name="year" value={formData.year} onChange={handleChange} required>
                          <option value="" disabled>Select Year</option>
                          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                    {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                      {status === 'loading' ? <Loader2 size={18} className={styles.spinner} /> : 'Register'}
                    </button>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
```

- [ ] **Step 2: Replace EventRegistrationModal.module.css**

```css
/* src/components/EventRegistrationModal.module.css */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(12px);
}

.closeBtn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--bg-card-tint);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.35rem;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  transition: color 0.2s, border-color 0.2s;
}

.closeBtn:hover { color: var(--text-main); border-color: var(--border-card-hover); }

.modalHeader {
  margin-bottom: 1.5rem;
  padding-right: 2.5rem;
}

.eventLabel {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--brand-blue);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.eventName {
  font-family: var(--font-sans);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.eventMeta {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.label {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
}

.input {
  background: var(--bg-card-tint);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.6rem 0.85rem;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;
}

.input:focus { border-color: var(--brand-blue); }

.submitBtn {
  background: var(--gradient-brand-deep);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submitBtn:hover { opacity: 0.88; }
.submitBtn:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.errorMsg {
  font-size: 0.85rem;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
}

.iframeWrapper {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-card);
}

.googleFrame {
  display: block;
}

.successState {
  text-align: center;
  padding: 2rem 1rem;
}

.successIcon {
  color: #22c55e;
  margin-bottom: 1rem;
}

.successTitle {
  font-family: var(--font-sans);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.successDesc {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

- [ ] **Step 3: Check http://localhost:3000/events — click Register on an event, verify the modal appears with clean styling**

- [ ] **Step 4: Commit**
```bash
git add src/components/EventRegistrationModal.jsx src/components/EventRegistrationModal.module.css
git commit -m "feat: fix registration modal — Supabase write, email confirm, Google Form embed mode"
```

---

### Task 15: Update Event Architect (admin) for per-event form toggle

**Files:**
- Modify: `src/views/Dashboard.jsx` (EventArchitect sub-component only)

- [ ] **Step 1: Find the `EventArchitect` component inside `Dashboard.jsx`**

In the `EventArchitect` form state, add `useGoogleForm: false, googleFormUrl: ''` to the initial state object.

- [ ] **Step 2: Add the toggle UI to the form — after the existing form fields, before the submit button**

```jsx
<div className={styles.inputGroup}>
  <label className={styles.inputLabel}>
    <input
      type="checkbox"
      checked={formData.useGoogleForm}
      onChange={e => setFormData(prev => ({ ...prev, useGoogleForm: e.target.checked, googleFormUrl: '' }))}
      style={{ marginRight: '0.5rem' }}
    />
    Use Google Form for registration
  </label>
</div>
{formData.useGoogleForm && (
  <div className={styles.inputGroup}>
    <label className={styles.inputLabel}>Google Form URL</label>
    <input
      type="url"
      className={styles.inputField}
      value={formData.googleFormUrl}
      onChange={e => setFormData(prev => ({ ...prev, googleFormUrl: e.target.value }))}
      placeholder="https://forms.gle/..."
      required={formData.useGoogleForm}
    />
  </div>
)}
```

- [ ] **Step 3: Update the event submission to pass `registration_link` correctly**

In the `handleAddEvent` function (or wherever `EventManager.addEvent` is called), update the data object:

```js
const eventData = {
  // ... existing fields ...
  registration_link: formData.useGoogleForm ? formData.googleFormUrl : null,
};
```

- [ ] **Step 4: Commit**
```bash
git add src/views/Dashboard.jsx
git commit -m "feat: add Google Form toggle to Event Architect admin panel"
```

---

## Phase D — Cleanup

### Task 16: Remove dead code

**Files:**
- Delete: `lib/supabaseClient.js`
- Delete: `server/` directory
- Delete: `app/login/actions.js`

- [ ] **Step 1: Verify nothing imports the legacy files**
```bash
grep -r "lib/supabaseClient" src/ app/ --include="*.js" --include="*.jsx"
grep -r "app/login/actions" src/ app/ --include="*.js" --include="*.jsx"
```
Both should return no results. If any file imports them, update the import to use `src/utils/supabase/client.js` instead.

- [ ] **Step 2: Delete the files**
```bash
git rm lib/supabaseClient.js
git rm -r server/
git rm app/login/actions.js
```

- [ ] **Step 3: Commit**
```bash
git commit -m "chore: remove legacy Express/MongoDB server, unused Supabase client, dead login action"
```

---

### Task 17: Final checks and push

- [ ] **Step 1: Check all pages load without errors**
```
http://localhost:3000         — landing page
http://localhost:3000/events  — events with new cards
http://localhost:3000/divisions
http://localhost:3000/achievements
http://localhost:3000/heads
http://localhost:3000/login
http://localhost:3000/connect
```

- [ ] **Step 2: Check dark mode toggle works on every page**

Click the sun/moon toggle in the navbar — entire site should smoothly transition between light and dark with brand colors preserved.

- [ ] **Step 3: Push branch**
```bash
git push origin mihirm/refinements
```

- [ ] **Step 4: Done — open a PR from `mihirm/refinements` → `main`**
