'use server';

import { createClient } from '../utils/supabase/server';
import { sendRegistrationConfirmation } from '../utils/email';

export async function registerForEvent(formData, eventId) {
  const supabase = await createClient();

  const { name, email, phone, prn, branch, year } = formData;

  // Duplicate check
  const { data: existing } = await supabase
    .from('event_registrations')
    .select('id')
    .eq('event_id', eventId)
    .eq('email', email)
    .single();

  if (existing) {
    return { error: 'You have already registered for this event.' };
  }

  // Insert registration
  const { error: insertError } = await supabase
    .from('event_registrations')
    .insert({ event_id: eventId, name, email, phone, prn, branch, year });

  if (insertError) {
    console.error('Registration insert error:', insertError);
    return { error: 'Registration failed. Please try again.' };
  }

  // Fetch event details for the confirmation email
  const { data: event } = await supabase
    .from('events')
    .select('name, date, venue')
    .eq('id', eventId)
    .single();

  // Send confirmation email — failure doesn't block success
  try {
    await sendRegistrationConfirmation({
      to: email,
      name,
      eventName: event?.name ?? 'the event',
      eventDate: event?.date ? new Date(event.date).toLocaleDateString('en-IN', { dateStyle: 'long' }) : '',
      eventVenue: event?.venue ?? '',
    });
  } catch (emailErr) {
    console.error('Confirmation email failed (non-blocking):', emailErr);
  }

  return { success: true };
}
