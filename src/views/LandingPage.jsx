"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';

const AnnouncementBanner = () => (
  <div style={{
    background: 'linear-gradient(90deg, var(--bg-card, #111) 0%, rgba(200, 150, 0, 0.18) 50%, var(--bg-card, #111) 100%)',
    color: 'var(--text-primary, #fff)',
    textAlign: 'center',
    padding: '100px 20px 12px 20px',
    borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
    fontSize: '0.95rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.05)'
  }}>
    <span>👋 Hey there! For answers of the puzzle:</span>
    <a href="/puzzle" style={{
      color: '#ffd700',
      fontWeight: '700',
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textUnderlineOffset: '3px',
      fontSize: '0.95rem',
      transition: 'opacity 0.2s',
    }}>click here</a>
  </div>
);

const LandingPage = () => {
  const [eventsData, setEventsData] = useState({ upcoming: [] });

  useEffect(() => {
    EventManager.getEvents()
      .then(data => setEventsData(data))
      .catch(() => setEventsData({ upcoming: [] }));
  }, []);

  return (
    <div>
      <AnnouncementBanner />
      <Hero />
      <UpcomingEvents events={eventsData} />
    </div>
  );
};

export default LandingPage;
