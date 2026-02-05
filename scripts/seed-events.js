import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertSampleEvents() {
  console.log('📝 Inserting sample events into Supabase...');

  const sampleEvents = [
    {
      title: 'Tech Workshop 2026',
      description: 'Learn Next.js and React best practices',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      location: 'Tech Hub Downtown',
      category: 'Workshop',
    },
    {
      title: 'Club Hackathon',
      description: '24-hour coding competition and networking',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
      location: 'Innovation Center',
      category: 'Hackathon',
    },
    {
      title: 'Monthly Meetup',
      description: 'Community gathering and tech talks',
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
      location: 'Coffee & Code Cafe',
      category: 'Meetup',
    },
  ];

  try {
    const { data, error } = await supabase
      .from('events')
      .insert(sampleEvents)
      .select();

    if (error) {
      console.error('❌ Insert error:', error.message);
      console.error('Details:', error);
      return false;
    }

    console.log('✅ Successfully inserted', data.length, 'events');
    console.log('\n📊 Inserted Events:');
    data.forEach((event, i) => {
      console.log(`  ${i + 1}. ${event.title} - ${event.date}`);
    });

    return true;
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    return false;
  }
}

insertSampleEvents().then((success) => {
  if (success) {
    console.log('\n✨ Done! Refresh your website to see the events.');
  } else {
    console.log('\n⚠️  Verify:');
    console.log('  1. .env.local has correct NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    console.log('  2. "events" table exists in Supabase');
    console.log('  3. RLS policy allows INSERT (or is disabled)');
  }
  process.exit(success ? 0 : 1);
});
