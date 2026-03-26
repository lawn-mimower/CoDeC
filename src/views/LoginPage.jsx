"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../utils/supabase/client';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login');
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

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            setError('Check your email to confirm your account.');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = activeTab === 'login' ? handleLogin : handleSignup;

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.logo} />
                    <h1 className={styles.title}>CoDeC</h1>
                    <p className={styles.subtitle}>
                        {activeTab === 'login' ? 'Sign in to your account' : 'Create a new account'}
                    </p>
                </div>

                <div className={styles.tabs}>
                    <button
                        type="button"
                        className={`${styles.tab} ${activeTab === 'login' ? styles.tabActive : ''}`}
                        onClick={() => { setActiveTab('login'); setError(null); }}
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className={`${styles.tab} ${activeTab === 'signup' ? styles.tabActive : ''}`}
                        onClick={() => { setActiveTab('signup'); setError(null); }}
                    >
                        Create Account
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isLoading}
                    >
                        {isLoading
                            ? (activeTab === 'login' ? 'Signing in...' : 'Creating account...')
                            : (activeTab === 'login' ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                {activeTab === 'login' && (
                    <Link href="/forgot-password" className={styles.link}>
                        Forgot password?
                    </Link>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
