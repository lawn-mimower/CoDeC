-- scripts/extend-members-table.sql
-- Run in Supabase Dashboard → SQL Editor

-- Add profile and CP handle columns
alter table public.members
  add column if not exists email       text,
  add column if not exists year        text,
  add column if not exists department  text,
  add column if not exists cf_handle   text,
  add column if not exists lc_handle   text,
  add column if not exists cc_handle   text,
  add column if not exists at_handle   text,
  add column if not exists hr_handle   text;

-- Enforce the three valid roles
alter table public.members
  drop constraint if exists members_role_check;

alter table public.members
  add constraint members_role_check
  check (role in ('admin', 'contest_head', 'member'));

-- RLS: each member can read and update their own row
drop policy if exists "Members can view own profile" on public.members;
drop policy if exists "Members can update own profile" on public.members;

create policy "Members can view own profile"
  on public.members for select
  to authenticated
  using (user_id = auth.uid());

create policy "Members can update own profile"
  on public.members for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
