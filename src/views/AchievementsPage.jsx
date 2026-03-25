"use client";
import React from 'react';
import { Trophy, Medal, Star, Target, Crown, Award, Code, Calendar } from 'lucide-react';
import { placements, flagshipEvents, clubGlory } from '../data/mockData';
import './AchievementsPage.css';

const formatDateToDDMMYYYY = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
};

const AchievementsPage = () => {
    // Direct usage of mock data for this task

    // Sort events by sortDate (Reverse Chronological: Newest First)
    const sortedEvents = [...flagshipEvents].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

    // Helper to check for premium package
    const isPremium = (pkg) => {
        const value = parseFloat(pkg.split(' ')[0]);
        return value >= 13;
    };

    return (
        <div className="achievements-container">
            <div className="achievements-header">
                <h1 className="glitch-text" data-text="High Performance">High Performance</h1>
                <p className="subtitle">Metrics. Milestones. Mastery.</p>
            </div>

            {/* Section 1: The Placement Wall (Trophy Cards) */}
            <section className="placement-section">
                <h2 className="section-heading"><Star className="heading-icon" /> PLACEMENT_LOGS_2025</h2>
                <div className="placement-grid">
                    {placements.map((p) => (
                        <div key={p.id} className={`placement-card ${isPremium(p.package) ? 'premium-card' : ''}`}>
                            <div className="card-inner">
                                <div className="placement-header">
                                    <h3 className="candidate-name">{p.name}</h3>
                                    <div className="company-badge">{p.company}</div>
                                </div>
                                <div className="package-display">
                                    <span className="package-value">{p.package.split(' ')[0]}</span>
                                    <span className="package-unit">LPA</span>
                                </div>
                                <div className="role-display">role::{p.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: Battle Scars (Sorted Timeline) */}
            <section className="timeline-section">
                <h2 className="section-heading"><Target className="heading-icon" /> EVENT_TIMELINE_V2</h2>
                <div className="timeline-container">
                    {sortedEvents.map((item, index) => (
                        <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content glass-panel">
                                <span className="achievement-date">[{formatDateToDDMMYYYY(item.date)}]</span>
                                <h3 className="achievement-title">{item.name}</h3>
                                <div className="event-stats">{item.stats}</div>
                                <p className="achievement-desc">{item.description}</p>
                                <div className="glow-corner"></div>
                            </div>
                            <div className="timeline-dot">
                                {item.type === 'flagship' ? <Crown size={20} /> :
                                    item.type === 'bootcamp' ? <Code size={20} /> :
                                        <Calendar size={20} />}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Glory (ICPC) */}
            <section className="glory-section">
                <h2 className="section-heading"><Trophy className="heading-icon" /> Club Glory</h2>
                <div className="glory-grid">
                    {clubGlory.map((glory) => (
                        <div key={glory.id} className={`glory-card ${glory.highlight ? 'highlight-glory' : ''}`}>
                            <div className="glory-icon-wrapper">
                                {glory.highlight ? <Trophy size={48} className="glory-icon gold" /> : <Award size={40} className="glory-icon silver" />}
                            </div>
                            <div className="glory-content">
                                <h3>{glory.title}</h3>
                                <div className="glory-metric">{glory.metric}</div>
                                <p>{glory.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AchievementsPage;
