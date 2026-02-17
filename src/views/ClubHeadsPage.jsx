"use client";
import React from 'react';
import { facultyMentors, coreCouncil } from '../data/mockData';
import './ClubHeadsPage.css';

const ClubHeadsPage = () => {
    // Using mock data directly for the "Real Data" update requirement
    // In a real app, we would fetch 'faculty' and 'council' from Supabase separately

    return (
        <div className="page-container">
            <div className="background">
                <div className="grid"></div>
                <div className="glowOrb"></div>
            </div>

            <div className="section-header">
            </div>

            {/* Section 1: Faculty Board (Unified Cyberpunk Style) */}
            <section className="heads-section">
                <h2 className="section-title faculty-title">Faculty Mentors</h2>
                <div className="faculty-grid">
                    {facultyMentors.map((mentor) => (
                        <div key={mentor.id} className="faculty-card">
                            <div className="faculty-image-placeholder">
                                {mentor.image ? <img src={mentor.image} alt={mentor.name} /> : <div className="placeholder-initials">{mentor.name.charAt(0)}</div>}
                            </div>
                            <div className="faculty-info">
                                <h3>{mentor.name}</h3>
                                <span className="faculty-role">{mentor.position}</span>
                                <p className="faculty-bio">{mentor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: Core Council (Unified Cyberpunk Style) */}
            <section className="heads-section">
                <h2 className="section-title council-title">Core Council</h2>
                <div className="council-grid">
                    {coreCouncil.map((head) => (
                        <div key={head.id} className="council-card">
                            <div className="council-image-wrapper">
                                <img
                                    src={head.image || `https://ui-avatars.com/api/?name=${head.name}&background=random`}
                                    alt={head.name}
                                    className="council-image"
                                />
                                {/* Neon ring is now handled via CSS pseudo-elements in the unified sheet, but keeping this wrapper structure is consistent */}
                            </div>
                            <div className="council-content">
                                <h3>{head.name}</h3>
                                <span className="council-role">{head.position}</span>
                                <span className="council-year">{head.year}</span>
                                <p className="council-bio">{head.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClubHeadsPage;
