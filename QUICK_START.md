# 🚀 Supabase Integration - Quick Reference

## TL;DR - Get Started in 5 Minutes

### Step 1: Set Up Supabase
```
1. Go to supabase.com → Sign up → Create project
2. Copy Project URL & Anon Public Key from Settings → API
3. Open .env.local and paste:
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
4. Save & restart dev server
```

### Step 2: Create Database
```
1. In Supabase Dashboard → SQL Editor → New Query
2. Copy entire supabase_schema.sql
3. Paste & Run
4. Done! ✅
```

### Step 3: Test It
```bash
npm run dev
```
Then open http://localhost:3000 → Events page → Check browser console for "Fetched events from Supabase"

---

## What Changed?

| What | Where | Impact |
|------|-------|--------|
| EventManager | `src/utils/EventManager.js` | Now async, uses Supabase ✅ |
| Components | 3 files updated | Handle async calls ✅ |
| Database | `supabase_schema.sql` | Ready to run ✅ |
| Env Vars | `.env.local` | Fill with your keys ✅ |

---

## Files You Need to Know

| File | What It Is | Action |
|------|-----------|--------|
| `supabase_schema.sql` | Database setup | Run in Supabase SQL Editor |
| `.env.local` | Config (git-ignored) | Fill with Supabase credentials |
| `src/utils/EventManager.js` | Business logic | Already updated ✅ |
| `SUPABASE_INTEGRATION.md` | Full guide | Read for details |
| `TEST_SUPABASE.md` | Test checklist | Use to verify |

---

## Troubleshooting

### "Supabase not configured"
- [ ] Check `.env.local` exists at project root
- [ ] Verify both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are filled
- [ ] Restart dev server: `npm run dev`

### "Using fallback: mock data..."
- This is OK! Your app still works.
- Check if Supabase project is running.
- Verify internet connection.

### No events appear
- [ ] Did you run `supabase_schema.sql`?
- [ ] Open Supabase → Table Editor → `events` table → any rows?
- [ ] If empty, manually insert test data via Table Editor

### Events appear but not changing
- [ ] Refresh page in browser
- [ ] Check browser console for errors (DevTools → Console)
- [ ] Verify Supabase RLS policies exist (re-run schema if needed)

---

## Next Steps

1. ✅ Fill `.env.local`
2. ✅ Run `supabase_schema.sql`
3. ✅ Run `npm run dev` & test
4. 📈 **Next:** Add Divisions, Achievements, TeamMembers (read-only, 5 min each)
5. 🔐 **Later:** Integrate Supabase Auth for user dashboard

---

## Key Concepts

- **Supabase** = Backend DB (PostgreSQL) + Auth + Real-time
- **NEXT_PUBLIC_*** = Public keys (safe to expose in browser)
- **RLS** = Row-Level Security (database-enforced access control)
- **Fallback** = If Supabase fails, use mock data (graceful degradation)
- **Async** = EventManager methods now return Promises (use `.then()` or `await`)

---

## Architecture at a Glance

```
Browser
  ↓ (useEffect calls)
LandingPage / EventsPage / Dashboard
  ↓ (calls async methods)
EventManager
  ↓ (tries first)
Supabase (primary) → Falls back to → Mock Data + localStorage
  ↓ (on error)
Console logs for debugging
```

---

## Common Commands

```bash
# Start dev
npm run dev

# Install deps
npm install

# Build for production
npm run build

# Check for errors
npm run lint
```

---

## Getting Help

1. **Setup issues?** → See `SUPABASE_INTEGRATION.md` Step 1-2
2. **Testing?** → See `TEST_SUPABASE.md` checklist
3. **Component updates?** → Already done, components handle async ✅
4. **Next modules?** → See `SUPABASE_INTEGRATION.md` Step 6

---

**Status:** ✅ Ready to use. Fill `.env.local` and run `supabase_schema.sql` to activate.
