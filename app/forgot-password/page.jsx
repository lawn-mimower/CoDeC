"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Terminal, ArrowLeft } from 'lucide-react';
import { createClient } from '../../src/utils/supabase/client';
import '../../src/views/LoginPage.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();
    const supabase = createClient();

    const handleReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setMessage(null);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
            });

            if (error) throw error;

            setMessage("Recovery link sent! Check your inbox.");
            // Optional: Redirect back to login after a delay
            // setTimeout(() => router.push('/login'), 5000);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1 className="glitch-text" data-text="RECOVERY_MODE">RECOVERY_MODE</h1>
                    <p className="status-text">
                        <Terminal size={14} className="inline-icon" /> INITIALIZING RECOVERY PROTOCOL
                    </p>
                </div>

                <form onSubmit={handleReset} className="login-form glass-panel">
                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                    {message && <div className="success-message" style={{ color: '#00ff41', marginBottom: '1rem' }}>{message}</div>}

                    <div className="form-group">
                        <label htmlFor="email">TARGET_ID // EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="agent@codec.ops"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="cyber-input"
                        />
                    </div>

                    <button type="submit" className={`btn-login ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                        {isLoading ? 'SEND_RECOVERY_LINK' : 'INITIATE_RESET'}
                    </button>

                    <div className="form-actions" style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <button
                            type="button"
                            onClick={() => router.push('/login')}
                            className="btn-link"
                            style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
                        >
                            <ArrowLeft size={16} /> RETURN TO LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
