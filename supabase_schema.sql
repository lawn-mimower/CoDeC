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
