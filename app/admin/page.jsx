import React from 'react';
import { postAnnouncement } from './actions';

export default function AdminPage() {
    return (
        <div style={{ padding: '4rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Admin Command Center</h1>

            <section style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ marginBottom: '1rem', color: '#4ade80' }}>Post Global Announcement</h2>
                <form action={postAnnouncement} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>TITLE</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g. System Maintenance"
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid #333',
                                color: 'white',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>CONTENT</label>
                        <textarea
                            name="content"
                            placeholder="Announcement details..."
                            required
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid #333',
                                color: 'white',
                                borderRadius: '4px',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            alignSelf: 'flex-start',
                            padding: '0.8rem 2rem',
                            background: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        TRANSMIT
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
                        * This action will invoke the server-side function to insert directly into the Supabase database.
                    </p>
                </form>
            </section>
        </div>
    );
}
