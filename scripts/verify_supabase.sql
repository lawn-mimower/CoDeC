-- COMPREHENSIVE SUPABASE VERIFICATION SCRIPT
-- Run this in the Supabase SQL Editor to check your current state.
-- It returns a list of missing items (if any) or confirms success.

DO $$
DECLARE
    missing_items text[] := ARRAY[]::text[];
    feature_check boolean;
BEGIN
    RAISE NOTICE 'Starting CoDeC Database Verification...';

    -- 1. CHECK MEMBERS TABLE COLUMNS
    -- Check for 'is_head'
    SELECT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = 'members' AND column_name = 'is_head'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'Column: members.is_head'); END IF;

    -- Check for 'designation'
    SELECT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = 'members' AND column_name = 'designation'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'Column: members.designation'); END IF;

    -- 2. CHECK MEDIA SUPPORT
    -- Check events.image_url
    SELECT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = 'events' AND column_name = 'image_url'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'Column: events.image_url'); END IF;

    -- Check achievements.image_url
    SELECT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = 'achievements' AND column_name = 'image_url'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'Column: achievements.image_url'); END IF;

    -- 3. CHECK EVENT REGISTRATIONS
    -- Check table existence
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'event_registrations'
    ) INTO feature_check;
    IF NOT feature_check THEN 
        missing_items := array_append(missing_items, 'Table: event_registrations'); 
    ELSE
        -- Check enum status type usage
        -- This is a bit complex to check via information_schema roughly, so we check if column exists
        SELECT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_schema = 'public' AND table_name = 'event_registrations' AND column_name = 'status'
        ) INTO feature_check;
        IF NOT feature_check THEN missing_items := array_append(missing_items, 'Column: event_registrations.status'); END IF;
    END IF;

    -- 4. CHECK STORAGE BUCKETS
    -- Requires accessing storage schema, might not be visible in all contexts, but usually is for postgres user
    SELECT EXISTS (
        SELECT 1 FROM storage.buckets WHERE id = 'club-assets' AND public = true
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'Storage Bucket: club-assets (Public)'); END IF;

    -- 5. CHECK RLS POLICIES (Sampling key ones)
    -- Check members policy
    SELECT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'members' AND policyname = 'members_update_own_password'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'RLS Policy: members_update_own_password'); END IF;

    -- Check admin view all registrations
    SELECT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'event_registrations' AND policyname = 'admin_view_all_registrations'
    ) INTO feature_check;
    IF NOT feature_check THEN missing_items := array_append(missing_items, 'RLS Policy: admin_view_all_registrations'); END IF;

    -- REPORT RESULTS
    IF array_length(missing_items, 1) > 0 THEN
        RAISE NOTICE '⚠️  VERIFICATION FAILED. The following items are MISSING:';
        FOR i IN 1 .. array_length(missing_items, 1) LOOP
            RAISE NOTICE '- %', missing_items[i];
        END LOOP;
        RAISE NOTICE 'Please run schema_refinements.sql and schema_enhancements.sql to fix.';
    ELSE
        RAISE NOTICE '✅  VERIFICATION SUCCESSFUL! All core schema elements for Admin-Led strategy are present.';
    END IF;
END $$;
