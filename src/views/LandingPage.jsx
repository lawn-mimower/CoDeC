"use client";
import React, { useState, useEffect } from 'react';
import { EventManager } from '../utils/EventManager';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';

const LandingPage = () => {
  const [eventsData, setEventsData] = useState({ upcoming: [] });

  useEffect(() => {
    EventManager.getEvents()
      .then(data => setEventsData(data))
      .catch(() => setEventsData({ upcoming: [] }));
  }, []);

  return (
    <div>
      <Hero />
      <UpcomingEvents events={eventsData} />
    </div>
  );
};

export default LandingPage;
