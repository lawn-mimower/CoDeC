"use client";
import React from 'react';
import { Trophy } from 'lucide-react';
import { clubGlory, placements } from '../data/mockData';
import styles from './AchievementsPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

const AchievementsPage = () => {
    return (
        <div className={styles.page}>
            <SectionHeader label="// Achievements" heading="Club Glory" gradientWord="Glory" />

            <div className={styles.grid}>
                {clubGlory.map((achievement, index) => (
                    <GlassCard className={styles.card} key={achievement.id || index}>
                        <div className={styles.cardIcon}><Trophy size={20} /></div>
                        <div className={styles.cardTitle}>{achievement.title}</div>
                        <div className={styles.cardDesc}>{achievement.description}</div>
                        <span className={styles.tag}>{achievement.metric}</span>
                    </GlassCard>
                ))}
            </div>

            <SectionHeader label="// Placements" heading="Our Placement Wall" gradientWord="Placement" />
            <div className={styles.placementGrid}>
                {placements.map((p, i) => (
                    <GlassCard key={i} className={styles.placementCard}>
                        <span className={styles.company}>{p.company}</span>
                        <div className={styles.studentName}>{p.name}</div>
                        <div className={styles.package}>{p.package}</div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default AchievementsPage;
