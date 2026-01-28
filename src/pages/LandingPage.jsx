import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Scan, Fingerprint, Lock, ShieldCheck } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
    const [showHud, setShowHud] = useState(false);
    const [authStep, setAuthStep] = useState(0); // 0: Init, 1: Scanning, 2: Access Granted
    const navigate = useNavigate();

    const activateProtocol = () => {
        setShowHud(true);
        // Sequence: 
        // 0s: HUD Opens
        // 1s: Scanning starts
        // 3s: Access Granted
        // 4s: Redirect
        setTimeout(() => setAuthStep(1), 1000);
        setTimeout(() => setAuthStep(2), 3500);
        setTimeout(() => navigate('/login'), 5000);
    };

    return (
        <div className="landing-page">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Building <span className="highlight">problem-solvers</span>, <span className="highlight">developers</span>, and <span className="highlight">researchers</span>.
                    </h1>
                    <p className="hero-subtitle">
                        Community of Developers and Coders
                        <span
                            className="stealth-trigger"
                            onClick={activateProtocol}
                        >
                            (CoDeC)
                        </span>{' '}
                        is the premier technical club fostering innovation and technical excellence.
                    </p>
                    <div className="cta-group">
                        <Link to="/events" className="btn btn-primary">
                            View Events <ArrowRight size={18} />
                        </Link>
                        {/* Stealth mode active */}
                    </div>
                </div>
            </section>

            {showHud && (
                <div className="ironman-overlay">
                    <div className="hud-container">
                        <div className="hud-circle-outer"></div>
                        <div className="hud-circle-inner"></div>
                        <div className="hud-lines"></div>

                        <div className="hud-content">
                            {authStep === 0 && (
                                <div className="hud-status blink">INITIALIZING PROTOCOL...</div>
                            )}
                            {authStep === 1 && (
                                <>
                                    <Scan size={64} className="hud-icon spin" />
                                    <div className="hud-status">BIOMETRIC SCAN IN PROGRESS</div>
                                    <div className="scan-line"></div>
                                </>
                            )}
                            {authStep === 2 && (
                                <>
                                    <ShieldCheck size={64} className="hud-icon pulse" />
                                    <div className="hud-status success">ACCESS GRANTED</div>
                                    <div className="hud-subtext">Welcome back, Sir.</div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="hud-overlay-grid"></div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
