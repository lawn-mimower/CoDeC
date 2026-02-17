import React, { useRef } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = ({ events }) => {
    const upcoming = (events?.upcoming || []).slice(0, 3);

    // Mouse move effect for card glow
    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName(styles.card);
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <section className={styles.section} onMouseMove={handleMouseMove}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Upcoming Events
            </motion.h2>

            {upcoming.length > 0 ? (
                <div className={styles.grid}>
                    {upcoming.map((event, index) => (
                        <motion.article
                            key={event.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardGlow}></div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{event.name}</h3>
                                <div className={styles.date}>
                                    <Calendar size={16} />
                                    <span>{formatDate(event.date)}</span>
                                </div>
                                <p className={styles.description}>{event.description}</p>
                                <a
                                    href={event.registrationLink || '#'}
                                    className={styles.registerBtn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            ) : (
                <div className={styles.emptyState}>No operations currently active. Standby.</div>
            )}
        </section>
    );
};

export default UpcomingEvents;
