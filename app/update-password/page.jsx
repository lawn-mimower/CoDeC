"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../src/utils/supabase/client';
import '../../src/views/LoginPage.css'; // Reusing login styles

const UpdatePasswordPage = () => {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();
    const supabase = createClient();

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setMessage(null);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            });

            if (error) throw error;

            setMessage("Password updated successfully! Redirecting...");
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);

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
                    <h1 className="glitch-text" data-text="SECURITY_UPDATE">SECURITY_UPDATE</h1>
                    <p className="status-text">ENTER NEW CREDENTIALS</p>
                </div>

                <form onSubmit={handleUpdatePassword} className="login-form glass-panel">
                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                    {message && <div className="success-message" style={{ color: '#00ff41', marginBottom: '1rem' }}>{message}</div>}

                    <div className="form-group">
                        <label htmlFor="password">NEW_SECURITY_KEY // NEW PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="cyber-input"
                            minLength={6}
                        />
                    </div>

                    <button type="submit" className={`btn-login ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                        {isLoading ? 'UPDATING...' : 'UPDATE_CREDENTIALS'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePasswordPage;
