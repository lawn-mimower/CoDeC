"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, ShieldCheck, Terminal } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        console.log("DEV HINT: Use admin@codec.ops / admin123 to log in.");
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy credentials check
        if (email === 'admin@codec.ops' && password === 'admin123') {
            setIsLoading(true);
            // Simulate network request
            setTimeout(() => {
                localStorage.setItem('isAuthenticated', 'true');
                router.push('/dashboard');
            }, 1500);
        } else {
            alert("ACCESS DENIED: Invalid Credentials");
        }
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
