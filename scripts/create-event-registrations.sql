-- scripts/create-event-registrations.sql
create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  prn text not null,
  branch text not null,
  year text not null,
  registered_at timestamptz default now()
);

-- Prevent duplicate registrations
create unique index if not exists event_registrations_unique_email_event
  on public.event_registrations(event_id, email);

-- RLS: anyone can insert, only admins can select
alter table public.event_registrations enable row level security;

create policy "Anyone can register for events"
  on public.event_registrations
  for insert
  to anon, authenticated
  with check (true);

create policy "Admins can view registrations"
  on public.event_registrations
  for select
  to authenticated
  using (
    exists (
      select 1 from public.members
      where user_id = auth.uid() and role = 'admin'
    )
  );
