-- VERIFICATION SCRIPT
-- Run this in your Supabase SQL Editor

-- -------------------------------------------------------------
-- 1. Trigger Integrity Check
-- -------------------------------------------------------------
-- First, clean up if test user already exists
DELETE FROM auth.users WHERE email = 'test_student@codec.com';

-- Manually insert a test user into auth.users (simulate signup)
INSERT INTO auth.users (id, email, raw_user_meta_data)
VALUES (
  '00000000-0000-0000-0000-000000009999', 
  'test_student@codec.com', 
  '{"name":"Test Student"}'
);

-- CHECK RESULTS:
-- If the trigger works, this should return a row with role 'member'
SELECT * FROM public.members WHERE user_id = '00000000-0000-0000-0000-000000009999';

-- If no row appears, check the function definition:
-- \df handle_new_user

-- Clean up test data after check
-- DELETE FROM auth.users WHERE id = '00000000-0000-0000-0000-000000009999';

-- -------------------------------------------------------------
-- 2. RLS Policy Audit
-- -------------------------------------------------------------
-- List policies for relevant tables
SELECT schemaname, tablename, policyname, cmd, roles, qual, with_check 
FROM pg_policies 
WHERE tablename IN ('announcements', 'events', 'members');

-- Verify is_admin usage (Logic Check)
-- You should see policies like "Enable insert for admins" with logic containing `is_admin()`

-- Check Public Access
-- You should see policies like "Enable read access for all users" with `cmd` = SELECT

-- -------------------------------------------------------------
-- 3. Member Self-Service Security
-- -------------------------------------------------------------
-- Validates that users can only update specific columns
-- This is a manual review of the policy definition from the result above.
-- Look for a policy on 'members' for UPDATE using (auth.uid() = user_id).
-- IMPORTANT: Supabase Policies control access to ROWS, not COLUMNS directly.
-- To strictly prevent updating 'role', you typically need a Trigger BEFORE UPDATE that raises an exception if OLD.role <> NEW.role and auth.uid() != admin.
-- OR simple Policy: `USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id)` checks row access.
-- Column security is often better handled at the API level or with a stricter function.

-- -------------------------------------------------------------
-- 4. Performance Check
-- -------------------------------------------------------------
-- Check if index exists on user_id
SELECT * FROM pg_indexes 
WHERE tablename = 'members' AND indexdef LIKE '%user_id%';

-- If missing, create it:
-- CREATE INDEX IF NOT EXISTS idx_members_user_id ON public.members(user_id);
