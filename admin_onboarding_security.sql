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
