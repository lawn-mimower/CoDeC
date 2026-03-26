"use client";
import React from 'react';
import { facultyMentors, coreCouncil } from '../data/mockData';
import styles from './ClubHeadsPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

const ClubHeadsPage = () => {
    return (
        <div className={styles.page}>
            <SectionHeader
                label="// The Team"
                heading="Meet the minds behind CoDeC"
                gradientWord="CoDeC"
            />

            {/* Section 1: Faculty Mentors */}
            <p className={styles.sectionLabel}>Faculty Mentors</p>
            <div className={styles.grid}>
                {facultyMentors.map((mentor) => (
                    <GlassCard key={mentor.id} className={styles.card}>
                        <div className={styles.avatar}>
                            {mentor.image
                                ? <img src={mentor.image} alt={mentor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                : mentor.name?.charAt(0)}
                        </div>
                        <div className={styles.name}>{mentor.name}</div>
                        <div className={styles.role}>{mentor.position}</div>
                        {mentor.bio && <p className={styles.bio}>{mentor.bio}</p>}
                    </GlassCard>
                ))}
            </div>

            {/* Section 2: Core Council */}
            <p className={styles.sectionLabel}>Core Council</p>
            <div className={styles.grid}>
                {coreCouncil.map((head) => (
                    <GlassCard key={head.id} className={styles.card}>
                        <div className={styles.avatar}>
                            {head.image
                                ? <img src={head.image} alt={head.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                : head.name?.charAt(0)}
                        </div>
                        <div className={styles.name}>{head.name}</div>
                        <div className={styles.role}>{head.position}</div>
                        {head.year && <div className={styles.year}>{head.year}</div>}
                        {head.bio && <p className={styles.bio}>{head.bio}</p>}
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default ClubHeadsPage;
