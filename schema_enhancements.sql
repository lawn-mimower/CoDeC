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
