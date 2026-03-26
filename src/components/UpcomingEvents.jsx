"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Calendar, ExternalLink, LogIn, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import EventRegistrationModal from './EventRegistrationModal';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = ({ events }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Split events into upcoming and past (archive)
    const upcoming = (events?.upcoming || []).slice(0, 3);
    const archive = (events?.past || []).slice(0, 6); // Show last 6 archived events

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

    // Helper to render an event card
    const renderEventCard = (event, index, isArchive = false) => (
        <motion.article
            key={event.id}
            className={`${styles.card} ${isArchive ? styles.archiveCard : ''}`}
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

                {!isArchive && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedEvent(event);
                            setIsModalOpen(true);
                        }}
                        className={styles.registerBtn}
                    >
                        Register
                    </button>
                )}

                {isArchive && (
                    <div className={styles.archiveLabel}>Event Concluded</div>
                )}
            </div>
        </motion.article>
    );

    return (
        <section className={styles.section} onMouseMove={handleMouseMove}>

            {/* Upcoming Section */}
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
                    {upcoming.map((event, index) => renderEventCard(event, index, false))}
                </div>
            ) : (
                <div className={styles.emptyState}>No events currently active. Standby.</div>
            )}

            {/* Mission Archive Section */}
            {archive.length > 0 && (
                <>
                    <motion.h2
                        className={styles.title}
                        style={{ marginTop: '4rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Past Events
                    </motion.h2>
                    <div className={styles.grid}>
                        {archive.map((event, index) => renderEventCard(event, index, true))}
                    </div>
                </>
            )}

            <EventRegistrationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                event={selectedEvent} 
            />
        </section>
    );
};

export default UpcomingEvents;
