"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Globe, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { divisions } from '../data/mockData';
import styles from './DivisionsPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

const iconMap = {
    'Terminal': Terminal,
    'Globe': Globe,
    'Brain': Brain
};

const DivisionsPage = () => {
    const [divisionsData, setDivisionsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDivisions = async () => {
            try {
                const { createClient } = await import('../utils/supabase/client');
                const supabase = createClient();

                const { data, error } = await supabase.from('divisions').select('*');

                if (error) throw error;

                if (data && data.length > 0) {
                    setDivisionsData(data);
                } else {
                    // Fallback to mock data if DB is empty
                    setDivisionsData(divisions);
                }
            } catch (err) {
                console.warn('Failed to fetch divisions, using mock:', err);
                setDivisionsData(divisions);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDivisions();
    }, []);

    if (isLoading) {
        return <div style={{ color: 'white', textAlign: 'center', marginTop: '4rem' }}>Loading Divisions...</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <SectionHeader
                label="// Our Divisions"
                heading="Three pillars of CoDeC"
                gradientWord="CoDeC"
            />

            <div className={styles.grid}>
                {divisionsData.map((div, index) => {
                    const IconComponent = iconMap[div.icon] || Terminal; // Fallback icon
                    return (
                        <motion.div
                            key={div.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <GlassCard className={styles.divCard}>
                                <div className={styles.iconWrapper}>
                                    <IconComponent size={32} />
                                </div>
                                <h2 className={styles.cardTitle}>{div.name}</h2>
                                <p className={styles.description}>{div.description}</p>

                                <div className={styles.details}>
                                    <span className={styles.focus}>Mission: {div.focus}</span>
                                    <div className={styles.tags}>
                                        {div.technologies && div.technologies.map(tech => (
                                            <span key={tech} className={styles.tag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default DivisionsPage;
