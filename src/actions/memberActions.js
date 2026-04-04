'use server';

import { createServerClient } from '@supabase/ssr';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// ── helpers ──────────────────────────────────────────────────────────────────

function getServerSupabase(cookieStore) {
    return createServerClient(
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
}

function getAdminSupabase() {
    return createAdminClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
    );
}

// ── updateMemberProfile ───────────────────────────────────────────────────────
// Called from ProfilePage. Updates the current user's row in public.members.
// Fields: year, department, cf_handle, lc_handle, cc_handle, at_handle, hr_handle

export async function updateMemberProfile(fields) {
    const cookieStore = await cookies();
    const supabase = getServerSupabase(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) return { error: 'Not authenticated.' };

    const allowed = ['year', 'department', 'cf_handle', 'lc_handle', 'cc_handle', 'at_handle', 'hr_handle'];
    const update = Object.fromEntries(
        Object.entries(fields).filter(([k]) => allowed.includes(k))
    );

    const { error } = await supabase
        .from('members')
        .update(update)
        .eq('user_id', user.id);

    if (error) {
        console.error('Profile update error:', error);
        return { error: 'Failed to save profile. Please try again.' };
    }

    return { success: true };
}

// ── inviteMember ─────────────────────────────────────────────────────────────
// Admin-only. Invites a new member via Supabase magic link email,
// then inserts their row in public.members.
// role must be one of: 'admin' | 'contest_head' | 'member'

export async function inviteMember({ name, email, role }) {
    const cookieStore = await cookies();
    const supabase = getServerSupabase(cookieStore);

    // Verify caller is admin
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { error: 'Not authenticated.' };

    const { data: caller } = await supabase
        .from('members')
        .select('role')
        .eq('user_id', user.id)
        .single();

    if (caller?.role !== 'admin') return { error: 'Only admins can invite members.' };

    // Validate role value
    if (!['admin', 'contest_head', 'member'].includes(role)) {
        return { error: 'Invalid role.' };
    }

    const adminSupabase = getAdminSupabase();

    // Send invite email (Supabase creates the auth.users row)
    const { data: inviteData, error: inviteError } = await adminSupabase.auth.admin.inviteUserByEmail(
        email,
        { data: { name } }
    );

    if (inviteError) {
        console.error('Invite error:', inviteError);
        return { error: inviteError.message };
    }

    // Create member row with the new user's ID
    const { error: insertError } = await adminSupabase
        .from('members')
        .insert({ user_id: inviteData.user.id, name, email, role });

    if (insertError) {
        console.error('Member insert error:', insertError);
        // Auth user was created — log this for manual cleanup
        return { error: 'User invited but member record failed. Contact support.' };
    }

    return { success: true };
}
