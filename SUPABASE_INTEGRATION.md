# Supabase Integration Guide for CoDeC

## Overview

This guide walks you through integrating Supabase as your backend for the CoDeC project. We'll start by setting up the database schema, then connecting the Events module (smallest/easiest) to test the integration end-to-end.

---

## Step 1: Create Supabase Project & Tables

### 1.1 Create a Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Note your **Project URL** and **Anon Public Key** from the project settings

### 1.2 Create Database Tables
1. In your Supabase project, go to the **SQL Editor**
2. Create a new query
3. Copy the entire contents of [`supabase_schema.sql`](supabase_schema.sql) and paste it into the editor
4. Click **Run** to create all tables, indexes, and row-level security (RLS) policies

**Tables created:**
- `users` — User accounts & profiles
- `divisions` — Club technical divisions (CP, Web, ML)
- `events` — Events (upcoming/past, with recurrence support)
- `achievements` — Club milestones
- `team_members` — Club leadership
- `contests`, `meetings`, `announcements`, `discussions` — Dashboard data
- `about_us` — About page content

---

## Step 2: Configure Environment Variables

### 2.1 Update Root `.env.local`
In the project root, edit (or create) `.env.local`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
```

**Get these values from:**
- Supabase dashboard → Project Settings → API keys
- Copy the public **anon/public key** (NOT the service role key)

### 2.2 Verify `.gitignore`
Confirm `.env.local` is in `.gitignore` to prevent committing secrets:
```
node_modules
.env.local
.env.*.local
dist/
.next/
```

---

## Step 3: Install Dependencies & Start Dev Server

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000` (or similar).

---

## Step 4: Test Events Module Integration

The `EventManager` module has been updated to:
1. Try fetching events from Supabase
2. Fall back to mock data + localStorage if Supabase is unavailable
3. Support async `addEvent()` and `deleteEvent()` methods

### 4.1 Populate Test Data (Optional)
Insert sample events into Supabase manually:

1. Go to Supabase → **Table Editor**
2. Select `events` table
3. Click **Insert row** and add:
   ```
   name: "Introduction to React"
   date: 2026-02-15
   time: 14:00:00
   description: "Beginner-friendly React workshop"
   is_all_day: false
   recurrence: "none"
   is_custom: false
   ```

### 4.2 Test Read
1. Open your app in browser
2. Navigate to **Home** or **Events page**
3. Check browser console (DevTools → Console tab) for:
   - ✅ `"Fetched events from Supabase: X"` — Events loaded successfully
   - ⚠️ `"Using fallback: mock data + localStorage"` — Supabase unavailable, using fallback

Events should display on the page.

### 4.3 Test Write (Create Event)
1. Navigate to **Dashboard** (if login is available)
2. Create a new event (if UI supports it), or manually insert via Supabase Table Editor
3. Verify in browser console: `"Event inserted into Supabase"`
4. In Supabase Table Editor, refresh the `events` table and confirm the new row appears

### 4.4 Test Delete (Remove Event)
1. Delete the event from the UI (if supported)
2. Check console: `"Event deleted from Supabase"`
3. Refresh Supabase Table Editor and confirm row is gone

---

## Step 5: Troubleshooting

### Issue: "Supabase environment variables are not set"
**Solution:** Ensure `.env.local` exists in the project root (not in `server/`) with valid keys, then restart dev server.

### Issue: Fetch fails, using fallback
**Solution:** 
- Confirm `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check Supabase project is running and network is accessible
- Verify RLS policies allow public read (already set in `supabase_schema.sql`)

### Issue: Changes not appearing
**Solution:**
- Refresh the page in browser
- Check browser DevTools → Network tab for failed requests
- Verify database table has the correct columns (use Supabase Table Editor)

---

## Step 6: Scale to Other Modules

Once Events is working, integrate other modules similarly:

1. **Divisions** — Read-only; add `getDivisions()` to a new `DivisionManager.js`
2. **Achievements** — Read-only; add `getAchievements()` to `AchievementManager.js`
3. **TeamMembers** — Read-only; add `getTeamMembers()` to `TeamManager.js`
4. **Dashboard (Contests/Meetings/Announcements)** — User-scoped; requires auth integration
5. **About Page** — Read-only; fetch from `about_us` table

---

## Security Notes

- **`NEXT_PUBLIC_*` keys** are exposed to the browser; they are meant to be public (anon/public key only)
- **Never** put the service role key in any `NEXT_PUBLIC_*` variable
- The RLS policies in `supabase_schema.sql` restrict writes to authenticated users (adjust as needed)
- For production, set up proper authentication via Supabase Auth or external provider

---

## Files Modified

- **[`src/utils/EventManager.js`](src/utils/EventManager.js)** — Now fetches from Supabase; methods are now async
- **[`.env.local`](.env.local)** — Supabase credentials (not committed)
- **[`.gitignore`](.gitignore)** — Added `.env.local`
- **[`supabase_schema.sql`](supabase_schema.sql)** — Database schema & RLS policies

---

## Next Steps

1. ✅ Populate mock data in Supabase tables (divisions, achievements, team members, about_us)
2. ✅ Update components to use async `EventManager.getEvents()`
3. ✅ Implement user authentication (Supabase Auth or custom)
4. ✅ Migrate dashboard modules to Supabase
5. ✅ Set up CI/CD to manage database migrations

---

**Questions?** Check Supabase docs at https://supabase.com/docs
