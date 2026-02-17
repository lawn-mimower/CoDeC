"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Scan, ShieldCheck } from 'lucide-react';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';

const LandingPage = () => {
    const [showHud, setShowHud] = useState(false);
    const [authStep, setAuthStep] = useState(0); // 0: Init, 1: Scanning, 2: Access Granted
    const [eventsData, setEventsData] = useState({ upcoming: [] });

    const router = useRouter(); // Changed from navigate to router

    useEffect(() => {
        // Fetch events from Supabase (or fallback to mock/localStorage)
        EventManager.getEvents()
            .then(data => setEventsData(data))
            .catch(err => {
                console.error('Error fetching events:', err);
                setEventsData({ upcoming: [] });
            });
    }, []);

    const activateProtocol = () => {
        setShowHud(true);
        setTimeout(() => setAuthStep(1), 1000);
        setTimeout(() => setAuthStep(2), 3500);
        setTimeout(() => router.push('/login'), 5000); // Redirect to Login first
    };

    return (
        <div className="landing-page">
            <Hero onActivateProtocol={activateProtocol} />

            <UpcomingEvents events={eventsData} />


        </div>
    );
};

export default LandingPage;
