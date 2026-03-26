'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/src/utils/supabase/client'

const supabase = createClient();

export default function TestDB() {
  const [status, setStatus] = useState('Testing...');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test 1: Basic Supabase connection
        if (!supabase) {
          throw new Error('Supabase client not initialized');
        }

        // Test 2: Fetch from 'events' table
        const { data: events, error: eventsError } = await supabase
          .from('events')
          .select('*')
          .limit(5);

        if (eventsError) {
          throw new Error(`Events query failed: ${eventsError.message}`);
        }

        setData({
          connected: true,
          eventsCount: events?.length || 0,
          sampleEvents: events?.slice(0, 3),
        });

        setStatus('✅ Database Connected Successfully!');
      } catch (err) {
        setError(err.message);
        setStatus('❌ Database Connection Failed');
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1>🗄️ Database Connection Test</h1>

      <div style={{ 
        background: status.includes('✅') ? '#d4edda' : '#f8d7da',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #ccc'
      }}>
        <h2>{status}</h2>
      </div>

      {data && (
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Connection Details:</h3>
          <pre style={{ background: '#f0f0f0', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div style={{ background: '#ffe0e0', padding: '20px', borderRadius: '8px', color: '#c00' }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
          <p>
            <strong>Troubleshooting:</strong>
            <ul>
              <li>Check if Supabase URL and ANON_KEY are correct in .env.local</li>
              <li>Verify the 'events' table exists in Supabase dashboard</li>
              <li>Check RLS (Row Level Security) policies allow public read access</li>
              <li>Ensure Supabase project is active and not paused</li>
            </ul>
          </p>
        </div>
      )}

      <div style={{ marginTop: '40px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h3>Next Steps:</h3>
        <ul>
          <li>If connected: Visit <a href="/dashboard">/dashboard</a> to see live data</li>
          <li>If connected: Visit <a href="/events">/events</a> to see all events</li>
          <li>If failed: Check Supabase dashboard credentials and table setup</li>
        </ul>
      </div>
    </div>
  );
}
