export async function sendRegistrationConfirmation({ to, name, eventName, eventDate, eventVenue }) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[email] RESEND_API_KEY not set — skipping confirmation email');
    return;
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'CoDeC <noreply@codec.mitwpu.edu.in>',
      to,
      subject: `You're registered for ${eventName} — CoDeC`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 520px; margin: 0 auto; padding: 2rem;">
          <div style="background: linear-gradient(90deg, #4A8FE0, #F5C542); height: 4px; border-radius: 2px; margin-bottom: 2rem;"></div>
          <h2 style="color: #1a1a2e; font-size: 1.4rem; margin-bottom: 0.5rem;">You're in, ${name}! 🎉</h2>
          <p style="color: #6b7280; margin-bottom: 1.5rem;">Your registration for <strong style="color: #4A8FE0;">${eventName}</strong> has been confirmed.</p>
          <div style="background: rgba(74,143,224,0.06); border: 1px solid rgba(74,143,224,0.12); border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.5rem; font-size: 0.85rem; color: #6b7280;">📅 <strong>${eventDate}</strong></p>
            ${eventVenue ? `<p style="margin: 0; font-size: 0.85rem; color: #6b7280;">📍 <strong>${eventVenue}</strong></p>` : ''}
          </div>
          <p style="color: #6b7280; font-size: 0.9rem;">See you there! — <strong>CoDeC, MIT WPU</strong></p>
          <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 2rem; font-style: italic;">Community of Developers and Coders · Where Dreams Begin</p>
        </div>
      `,
    });
  } catch (err) {
    console.error('[email] Failed to send confirmation email:', err);
  }
}
