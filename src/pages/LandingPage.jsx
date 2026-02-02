import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scan, ShieldCheck } from 'lucide-react';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import './LandingPage.css';

const LandingPage = () => {
    const [showHud, setShowHud] = useState(false);
    const [authStep, setAuthStep] = useState(0); // 0: Init, 1: Scanning, 2: Access Granted
    const [eventsData, setEventsData] = useState({ upcoming: [] });

    const navigate = useNavigate();

    useEffect(() => {
        // Hydrate events from local storage/mock
        setEventsData(EventManager.getEvents());
    }, []);

    const activateProtocol = () => {
        setShowHud(true);
        setTimeout(() => setAuthStep(1), 1000);
        setTimeout(() => setAuthStep(2), 3500);
        setTimeout(() => navigate('/dashboard'), 5000); // Redirect to Dashboard on success!
    };

    return (
        <div className="landing-page">
            <Hero onActivateProtocol={activateProtocol} />

            <UpcomingEvents events={eventsData} />

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
