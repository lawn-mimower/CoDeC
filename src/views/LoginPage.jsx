"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, ShieldCheck, Terminal } from 'lucide-react';
import { createClient } from '../utils/supabase/client';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        // Build the current URL for redirect (handled by Supabase or manually)
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Successful login
            router.push('/dashboard');
            router.refresh();

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        router.push('/forgot-password');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1 className="glitch-text" data-text="ACCESS_CONTROL">ACCESS_CONTROL</h1>
                    <p className="status-text">
                        <Terminal size={14} className="inline-icon" /> System Status: ONLINE
                    </p>
                </div>

                <form onSubmit={handleLogin} className="login-form glass-panel">
                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

                    <div className="form-group">
                        <label htmlFor="email">AGENT_ID // EMAIL</label>
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

                    <div className="form-group">
                        <label htmlFor="password">SECURITY_KEY // PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="cyber-input"
                        />
                    </div>

                    <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <button type="button" onClick={handleForgotPassword} className="btn-link" style={{ background: 'none', border: 'none', color: '#00ff41', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}>
                            FORGOT PASSWORD?
                        </button>
                    </div>

                    <button type="submit" className={`btn-login ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                        {isLoading ? 'AUTHENTICATING...' : 'INITIALIZE_SESSION'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>UNAUTHORIZED ACCESS IS PROHIBITED</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
