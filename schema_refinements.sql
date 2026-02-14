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
