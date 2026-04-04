"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';

const AnnouncementBanner = () => (
  <div style={{
    background: 'linear-gradient(90deg, var(--bg-card, #111) 0%, rgba(200, 150, 0, 0.15) 50%, var(--bg-card, #111) 100%)',
    color: 'var(--text-primary, #fff)',
    textAlign: 'center',
    padding: '100px 20px 12px 20px', // increased top padding to prevent hiding under navbar
    borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
    fontSize: '0.95rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.05)'
  }}>
    <span style={{ fontWeight: '600', color: '#ffd700' }}>🚀 Trifecta Challenge</span>
    <span>Build. Predict. Solve. | 9-11th April | Prize ₹1,50,000+</span>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeU2CgfTtZx1KnvBbXWaVnVIY3v3sxlzLakuFcZMpXTZ4JuGg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" style={{
      marginLeft: '10px',
      background: '#ffd700',
      color: '#000',
      padding: '4px 12px',
      borderRadius: '20px',
      fontWeight: '600',
      textDecoration: 'none',
      fontSize: '0.85rem'
    }}>Register</a>
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
