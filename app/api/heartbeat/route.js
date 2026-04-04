import { createClient } from '@supabase/supabase-js';

export async function GET(request) {
  // Verify this is called by Vercel Cron (not a random public request)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase
    .from('site_config')
    .upsert({ key: 'last_active', value: new Date().toISOString() }, { onConflict: 'key' });

  if (error) {
    console.error('Heartbeat failed:', error);
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true, timestamp: new Date().toISOString() });
}
