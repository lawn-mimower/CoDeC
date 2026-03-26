# CoDeC Website Redesign — Design Spec

**Date:** 2026-03-26
**Club:** Community of Developers and Coders — MIT WPU's official competitive programming club
**Tagline:** Where Dreams Begin
**Scope:** UI redesign aligned to logo, registration module fix, modularization & dead code cleanup

---

## 1. Design System & Tokens

### Color Palette

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--brand-blue` | `#4A8FE0` | `#5B9EEF` |
| `--brand-gold` | `#F5C542` | `#F7D060` |
| `--bg-primary` | `#f0f4ff` | `#0d1117` |
| `--bg-card` | `rgba(255,255,255,0.75)` | `rgba(20,28,48,0.75)` |
| `--bg-card-tint` | `rgba(74,143,224,0.06)` | `rgba(74,143,224,0.08)` |
| `--text-main` | `#1a1a2e` | `#e8edf5` |
| `--text-secondary` | `#6b7280` | `#8b98b0` |
| `--gradient-brand` | `linear-gradient(90deg, #4A8FE0, #F5C542)` | same |
| `--gradient-hero` | `linear-gradient(135deg, rgba(74,143,224,0.08), rgba(245,197,66,0.04))` | `linear-gradient(135deg, rgba(74,143,224,0.12), rgba(245,197,66,0.06))` |
| `--border-card` | `rgba(74,143,224,0.12)` | `rgba(74,143,224,0.15)` |
| `--border-card-hover` | `rgba(74,143,224,0.30)` | `rgba(74,143,224,0.35)` |

All existing cyberpunk tokens (`--accent-pink`, `--accent-orange`, `--primary-glow`, dark mode `--bg-primary: #020617`, etc.) are replaced entirely.

### Typography

- `--font-sans`: `'Inter', system-ui, sans-serif` — all headings, body text, labels
- `--font-mono`: `'JetBrains Mono', monospace` — accent labels, tags, dates, small category badges only

**Rules:**
- Headings: Inter 700–800, `var(--text-main)`
- Body: Inter 400, `var(--text-secondary)`
- Accent labels above section headings: JetBrains Mono 700, `var(--brand-blue)`, `letter-spacing: 2px`, e.g. `// UPCOMING EVENTS`
- Tags/badges: JetBrains Mono, small pill, brand-colored background tint
- No monospace in hero text, page headings, or body copy

### Theme Toggle

- Managed by Navbar component
- Reads/writes `localStorage` key `codec-theme`
- Sets `data-theme="dark"` on `document.documentElement`
- CSS custom properties on `[data-theme="dark"]` handle all overrides
- Sun/moon Lucide icon swap animation

---

## 2. Shared Components

### `src/components/SectionHeader.jsx`

Props: `label` (string, mono accent), `heading` (string), `subtitle` (string, optional), `className`

Renders:
```
// LABEL TEXT          ← JetBrains Mono, brand-blue, letter-spacing: 2px
Big Section Heading    ← Inter 800, text-main, optional gradient on last word
Optional subtitle      ← Inter 400, text-secondary
```

Used by every page's top section. Replaces duplicated header markup across all views.

### `src/components/GlassCard.jsx`

Props: `children`, `className`, `hover` (bool, default true)

Renders a `div` with:
- `background: var(--bg-card-tint)`
- `border: 1px solid var(--border-card)`
- `border-radius: 12px`
- `backdrop-filter: blur(8px)`
- On hover (when `hover=true`): border → `var(--border-card-hover)`, lift shadow

Used by event cards, division cards, achievement cards, team member cards.

---

## 3. Navbar Reskin

No structural changes. Pure reskin of `Navbar.module.css`:

- Pill background: `var(--bg-card)`, `backdrop-filter: blur(16px)`
- Pill border: `1px solid rgba(74,143,224,0.15)`
- Pill shadow: `0 4px 20px rgba(74,143,224,0.15)`
- Active link: `background: rgba(74,143,224,0.1)`, `color: var(--brand-blue)`
- Inactive links: `var(--text-secondary)`, hover → `var(--text-main)`
- "Join CoDeC" CTA button: `background: var(--gradient-brand)`, white text, `border-radius: 20px`
- Theme toggle icon replaces existing toggle, persists via localStorage

---

## 4. Page Redesigns

### Landing Page (Hero)

- Remove all cyberpunk/CLI copy (`ACCESS_CONTROL`, `INITIATE`, `AGENT_ID`, `data stream`, etc.)
- Headline: **"Community of Developers and Coders"** — "Coders" rendered with `var(--gradient-brand)` text
- Subheading: *"MIT WPU's official competitive programming club — where every line of code builds a dream."*
- Background: `var(--gradient-hero)` with two subtle floating blob shapes (CSS `border-radius` blobs, brand colors, low opacity, `filter: blur(80px)`)
- CTA row: primary gradient button "Explore Events" + outlined "Meet the Team"
- Stats row (members, events, placements): restyled as tinted glass cards using `GlassCard`

### Events Page

- `SectionHeader` with label `// UPCOMING EVENTS`
- Each event uses `GlassCard` with icon badge top-left (Lucide icon matching category: `Code2` for CP, `Globe` for Web, `Brain` for ML)
- Category tag: JetBrains Mono pill, brand-colored
- Date/venue: JetBrains Mono, `var(--text-secondary)`
- Register button: `var(--gradient-brand)` fill

### Divisions Page

- `SectionHeader` with label `// OUR DIVISIONS`
- Division cards: `GlassCard` with large icon, gradient accent on division name

### Achievements Page

- Migrate from global `AchievementsPage.css` → `AchievementsPage.module.css`
- `SectionHeader` with label `// ACHIEVEMENTS`
- Cards: `GlassCard`

### Club Heads Page

- Migrate from global CSS → `ClubHeadsPage.module.css`
- `SectionHeader` with label `// THE TEAM`
- Member cards: `GlassCard`, avatar circle with brand-blue ring

### Login / Auth Pages

- Remove cyberpunk CLI labels (`AGENT_ID // EMAIL` → "Email", etc.)
- Clean Inter labels
- Card: `GlassCard`, centered, max-width 420px
- Gradient CTA button for submit

### Dashboard

- Sidebar: `var(--bg-card-tint)` background, `border-right: 1px solid var(--border-card)`
- Active section: `border-left: 3px solid var(--brand-blue)`, `color: var(--brand-blue)`
- JetBrains Mono used only for contest platform names, dates, and stat numbers
- Tables: clean Inter, alternating row tint

### Contact Page

- Migrate from global CSS → `ContactPage.module.css`
- `SectionHeader` with label `// GET IN TOUCH`
- Input fields: `GlassCard` style borders

---

## 5. Registration Module Fix

### Per-Event Mode (set by admin in Event Architect)

The existing `registration_link` field in the `events` table is repurposed:

- `registration_link` is a Google Form URL → **Google Form mode**
- `registration_link` is null/empty → **Built-in form mode**

Event Architect UI gains a toggle: `[ ] Use Google Form` with a URL input that appears when checked.

### Mode 1 — Built-in Form (default)

**Form fields:** Full Name, College Email, Phone Number, PRN / Student ID, Branch (select), Year of Study (select)

**Submit flow (Server Action `registerForEvent`):**
1. Duplicate check: query `event_registrations` for matching `email + event_id`. If found → return error "Already registered for this event."
2. Insert row: `{ event_id, name, email, phone, prn, branch, year, registered_at: now() }`
3. Trigger confirmation email via Resend API (free tier): includes event name, date, venue, a "See you there!" message with CoDeC branding
4. Return success → modal shows animated success state

**Error handling:**
- Supabase insert fails → inline red error, modal stays open, button re-enables
- Email send fails → log error server-side but treat as success (registration saved is the critical part)

**Supabase table** (`event_registrations`):
```sql
id uuid primary key default gen_random_uuid(),
event_id uuid references events(id),
name text not null,
email text not null,
phone text not null,
prn text not null,
branch text not null,
year text not null,
registered_at timestamptz default now()
```
RLS: insert open to public (unauthenticated users can register), select restricted to admin role.

### Mode 2 — Google Form (embedded)

- Modal body renders `<iframe src={registration_link} width="100%" height="520px" frameBorder="0">`
- No Supabase write, no email — Google handles collection
- Close button overlaid top-right
- Loading spinner shown until iframe `onLoad` fires

### Modal improvements (both modes)

- Header: event name (Inter 700) + date + venue in JetBrains Mono below
- Remove all cyberpunk copy ("Operation Sign-Up", "data stream", "Stand by for further instructions", "Registration Initialized")
- New success copy: "You're registered for [event name]! Check your email for confirmation."
- Tinted glass card style matching rest of site
- Loading spinner on submit button, button disabled during request
- Inline error display (red, below submit button)

---

## 6. Modularization & Dead Code Cleanup

### CSS Migration

| File | Action |
|---|---|
| `src/views/AchievementsPage.css` | → `AchievementsPage.module.css`, update all class references |
| Login styles in `app/layout.jsx` imports | → `LoginPage.module.css` |
| `ClubHeadsPage` global styles | → `ClubHeadsPage.module.css` |
| `ContactPage` global styles | → `ContactPage.module.css` |

`app/layout.jsx` imports only `src/index.css` after migration.

### Dead Code Deletion

| File/Directory | Reason |
|---|---|
| `lib/supabaseClient.js` | Superseded by `src/utils/supabase/client.js` |
| `server/` directory | Legacy Express + MongoDB backend, unused by frontend |
| `app/login/actions.js` | `LoginPage.jsx` uses browser client directly; server action unused |
| `src/components/actions.js` | Old stub: `registerForEvent` only `console.log`s. **Overwrite** this file with the real Server Action (do not delete — the filename is reused). |

### New Files

| File | Purpose |
|---|---|
| `src/components/SectionHeader.jsx` + `.module.css` | Shared section header (label + heading + subtitle) |
| `src/components/GlassCard.jsx` + `.module.css` | Shared tinted glass card wrapper |
| `src/components/actions.js` (rewritten) | Real `registerForEvent` Server Action (Supabase write + email) |
| `src/utils/email.js` | Resend API wrapper for sending confirmation emails. Requires `RESEND_API_KEY` in `.env.local`. |

### .gitignore

Add `.superpowers/` to prevent brainstorm session files from being committed.

---

## 7. Out of Scope

- No changes to authentication flow or Supabase auth config
- No changes to `middleware.js` RBAC logic
- No changes to `EventManager.js` recurrence logic
- No new pages added
- No backend API routes added (Server Actions only)
- Legacy `server/` is deleted but not replaced with any new Express routes
