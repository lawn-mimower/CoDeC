-- Supabase Schema for CoDeC Project
-- Run these statements in the Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id text,
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  role text DEFAULT 'member',
  created_at timestamptz DEFAULT now()
);

-- Divisions table
CREATE TABLE IF NOT EXISTS divisions (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  focus text,
  technologies text[],
  icon text
);

-- Events table (core)
CREATE TABLE IF NOT EXISTS events (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  date date NOT NULL,
  time time,
  is_all_day boolean DEFAULT false,
  recurrence text DEFAULT 'none',
  division_id text REFERENCES divisions(id),
  description text,
  registration_link text,
  created_by uuid REFERENCES users(id),
  is_custom boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  description text,
  date date,
  created_at timestamptz DEFAULT now()
);

-- Team Members table
CREATE TABLE IF NOT EXISTS team_members (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  position text,
  image text,
  bio text
);

-- Contests (dashboard)
CREATE TABLE IF NOT EXISTS contests (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  name text NOT NULL,
  platform text,
  problems integer,
  rating_change text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Meetings (dashboard)
CREATE TABLE IF NOT EXISTS meetings (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  date date,
  agenda text,
  key_points text,
  created_at timestamptz DEFAULT now()
);

-- Announcements (dashboard)
CREATE TABLE IF NOT EXISTS announcements (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  date date,
  content text,
  created_at timestamptz DEFAULT now()
);

-- Discussions (dashboard)
CREATE TABLE IF NOT EXISTS discussions (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  author text,
  content text,
  timestamp timestamptz DEFAULT now()
);

-- About page content
CREATE TABLE IF NOT EXISTS about_us (
  id bigserial PRIMARY KEY,
  heading text,
  content text,
  updated_at timestamptz DEFAULT now()
);

-- Set row level security (RLS) for public read access
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE divisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_us ENABLE ROW LEVEL SECURITY;

-- Public read policy for events
CREATE POLICY "events_public_read" ON events
  FOR SELECT USING (true);

CREATE POLICY "events_insert_anon" ON events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "events_delete_own" ON events
  FOR DELETE USING (auth.uid() = created_by OR created_by IS NULL);

-- Public read policy for divisions
CREATE POLICY "divisions_public_read" ON divisions
  FOR SELECT USING (true);

-- Public read policy for achievements
CREATE POLICY "achievements_public_read" ON achievements
  FOR SELECT USING (true);

-- Public read policy for team_members
CREATE POLICY "team_members_public_read" ON team_members
  FOR SELECT USING (true);

-- Public read policy for about_us
CREATE POLICY "about_us_public_read" ON about_us
  FOR SELECT USING (true);

-- Indexes for performance
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_events_created_by ON events(created_by);
CREATE INDEX idx_contests_user_id ON contests(user_id);
CREATE INDEX idx_meetings_user_id ON meetings(user_id);
CREATE INDEX idx_announcements_user_id ON announcements(user_id);
CREATE INDEX idx_discussions_user_id ON discussions(user_id);
-- Admin-Led Onboarding Security Configuration
-- Run this in Supabase SQL Editor

-- 1. Enable RLS on public.members if not already enabled
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- 2. Create the "members_update_own_password" policy
-- This allows users to update their own row, but enforces constraints via logic.
-- Note: 'password' is usually stored in auth.users, but 'members' might store profile data.

DROP POLICY IF EXISTS "members_update_own_password" ON public.members;

CREATE POLICY "members_update_own_password"
ON public.members
FOR UPDATE
TO authenticated
USING (
  -- Logic: Allow authenticated users to update their own row only if user_id = auth.uid()
  user_id = auth.uid()
)
WITH CHECK (
  -- Strict Constraint: Ensure user_id remains their own (prevent transfer)
  user_id = auth.uid()
  -- NOTE: To strictly prevent changes to 'role' or 'is_head' using standard RLS 'WITH CHECK' 
  -- without comparing to OLD values (which requires a trigger), we rely on the implementation 
  -- not sending those fields or the database rejecting if we add a trigger.
  -- However, for this policy, we enforce matching User ID.
);

-- 3. To strictly enforce no changes to 'role', 'user_id', 'is_head', 
-- we recommend a BEFORE UPDATE trigger.
-- The following function ensures restricted columns are not modified by the user.

CREATE OR REPLACE FUNCTION public.prevent_restricted_updates()
RETURNS TRIGGER AS $$
BEGIN
  -- Allow updates if the 'role' is not changed, OR if the user is a super-admin (bypassing RLS anyway)
  -- But here we are inside a trigger invoked by an RLS-constrained update.
  
  -- Check restricted columns
  IF (NEW.role IS DISTINCT FROM OLD.role) THEN
    RAISE EXCEPTION 'You are not allowed to change your role.';
  END IF;
  
  IF (NEW.user_id IS DISTINCT FROM OLD.user_id) THEN
    RAISE EXCEPTION 'You are not allowed to change your user_id.';
  END IF;
  
  -- Assuming 'is_head' exists
  -- IF (NEW.is_head IS DISTINCT FROM OLD.is_head) THEN
  --   RAISE EXCEPTION 'You are not allowed to change is_head status.';
  -- END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply the trigger
DROP TRIGGER IF EXISTS trigger_prevent_restricted_updates ON public.members;
CREATE TRIGGER trigger_prevent_restricted_updates
BEFORE UPDATE ON public.members
FOR EACH ROW
EXECUTE FUNCTION public.prevent_restricted_updates();

-- 4. Verification Note
-- Content: "Confirm Email" can be safely toggled off in Auth settings.
-- This allows creating users with "email_confirm: true" (auto-confirmed) 
-- effectively allowing instant login if you set a password for them.
-- Schema Refinements for Admin-Led Strategy
-- Run this in Supabase SQL Editor

-- 1. Leadership Identifiers for Members
ALTER TABLE public.members 
ADD COLUMN IF NOT EXISTS is_head boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS designation text;

-- 2. Media Support
ALTER TABLE public.achievements 
ADD COLUMN IF NOT EXISTS image_url text;

ALTER TABLE public.events 
ADD COLUMN IF NOT EXISTS image_url text;

-- 3. Initialize 'club-assets' Storage Bucket & Policies
-- Note: 'storage' schema is managed by Supabase Storage extension
INSERT INTO storage.buckets (id, name, public) 
VALUES ('club-assets', 'club-assets', true) 
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to club-assets
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'club-assets');

-- Allow authenticated upload (or restrict to admins as needed)
DROP POLICY IF EXISTS "Authenticated Upload" ON storage.objects;
CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'club-assets');

-- 4. Event Registrations Table
CREATE TABLE IF NOT EXISTS public.event_registrations (
  id bigserial PRIMARY KEY,
  event_id bigint REFERENCES public.events(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  registered_at timestamptz DEFAULT now(),
  status text DEFAULT 'confirmed', -- confirmed, cancelled, waitlist
  UNIQUE(event_id, user_id)
);

-- Enable RLS
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Policies for Event Registrations

-- Users can view their own registrations
CREATE POLICY "registrations_view_own" 
ON public.event_registrations FOR SELECT 
USING (auth.uid() = user_id);

-- Users can register themselves
CREATE POLICY "registrations_insert_own" 
ON public.event_registrations FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can cancel (delete) their own registration
CREATE POLICY "registrations_delete_own" 
ON public.event_registrations FOR DELETE 
USING (auth.uid() = user_id);

-- Admins/Heads can view all registrations (assuming is_admin function exists or using simple check)
-- For simplicity, if we don't have is_admin function accessible in RLS easily yet without joins, 
-- we can rely on a separate policy or the dashboard querying with a service role if needed.
-- But proper RLS would look like:
-- CREATE POLICY "admin_view_all_registrations" ON public.event_registrations FOR SELECT
-- USING ( EXISTS (SELECT 1 FROM public.members WHERE user_id = auth.uid() AND (role = 'admin' OR is_head = true)) );
-- Schema Enhancements (Post-Refinement)
-- Run this in Supabase SQL Editor

-- 1. Optimization: Index on members(user_id) for faster RLS lookups
CREATE INDEX IF NOT EXISTS idx_members_user_id ON public.members(user_id);

-- 2. Admin View Policy for Event Registrations
-- Allows Heads and Admins to view ALL registrations
CREATE POLICY "admin_view_all_registrations" 
ON public.event_registrations 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 
    FROM public.members 
    WHERE user_id = auth.uid() 
      AND (is_head = true OR role IN ('admin', 'super_admin'))
  )
);

-- 3. Data Integrity: Registration Status Enum
-- Create the enum type
DO $$ BEGIN
    CREATE TYPE registration_status AS ENUM ('confirmed', 'cancelled', 'waitlist');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Convert the column to use the enum
-- We drop the default first, convert, then re-apply default
ALTER TABLE public.event_registrations ALTER COLUMN status DROP DEFAULT;

ALTER TABLE public.event_registrations 
ALTER COLUMN status TYPE registration_status 
USING status::registration_status;

ALTER TABLE public.event_registrations ALTER COLUMN status SET DEFAULT 'confirmed';

-- 4. Confirmation
-- Bucket 'club-assets' remains PUBLIC as requested for website assets.
-- No change needed there.

-- 5. Public Event Registrations (No Auth Required)
CREATE TABLE IF NOT EXISTS public.public_event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id bigint REFERENCES public.events(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  prn text NOT NULL,
  department text NOT NULL,
  year_of_study text NOT NULL,
  registered_at timestamptz DEFAULT now()
);

-- Enable RLS for public_event_registrations
ALTER TABLE public.public_event_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Enable insert for anonymous users" 
ON public.public_event_registrations FOR INSERT 
WITH CHECK (true);

-- Allow admins/heads to select
CREATE POLICY "Enable select for admins" 
ON public.public_event_registrations FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.members 
    WHERE user_id = auth.uid() 
      AND (is_head = true OR role IN ('admin', 'super_admin'))
  )
);
