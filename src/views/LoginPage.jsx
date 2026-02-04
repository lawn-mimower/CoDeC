"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            // Mock login success
            localStorage.setItem('isAuthenticated', 'true');
            router.push('/dashboard');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-circle">
                        <LogIn size={24} />
                    </div>
                    <h1>Welcome Back</h1>
                    <p>Sign in to access your member dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@codec.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-login">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <span className="link">Apply for membership</span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
