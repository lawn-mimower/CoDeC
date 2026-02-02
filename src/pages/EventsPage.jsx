import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Activity, History, Repeat, Trash2, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventManager } from '../utils/EventManager';
import styles from './EventsPage.module.css';

const EventsPage = () => {
    const [eventsData, setEventsData] = useState({ upcoming: [], past: [] });

    useEffect(() => {
        // Fetch events on mount
        const data = EventManager.getEvents();
        setEventsData(data);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Confirm Deletion Protocol? This action is irreversible.')) {
            const updated = EventManager.deleteEvent(id);
            if (updated) setEventsData(updated);
        }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Event Log
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Workshops, Hackathons, and Tech Talks.
                </motion.p>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><Activity className="text-blue-500" /> Active Operations</h2>
                <motion.div
                    className={styles.list}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {eventsData.upcoming.length > 0 ? (
                        eventsData.upcoming.map(event => (
                            <motion.div
                                key={event.id}
                                className={`${styles.card} ${styles.upcomingCard}`}
                                variants={itemVariants}
                            >
                                <div className={styles.dateBox}>
                                    <Calendar size={24} />
                                    <span>{event.date}</span>
                                    {!event.isAllDay && event.time && (
                                        <div style={{ fontSize: '0.8em', marginTop: '4px', opacity: 0.8 }}>{event.time}</div>
                                    )}
                                    {event.isAllDay && (
                                        <div style={{ fontSize: '0.7em', marginTop: '4px', opacity: 0.6, textTransform: 'uppercase' }}>All Day</div>
                                    )}
                                    {event.recurrence && event.recurrence !== 'none' && (
                                        <div style={{ marginTop: '8px', color: 'var(--accent-orange)' }} title="Recurring Mission">
                                            <Repeat size={16} />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <h3 className={styles.cardTitle}>{event.name}</h3>
                                        {event.isCustom && (
                                            <button
                                                onClick={() => handleDelete(event.id)}
                                                style={{
                                                    background: 'rgba(239, 68, 68, 0.2)',
                                                    border: 'none',
                                                    color: '#ef4444',
                                                    padding: '6px',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer',
                                                    marginTop: '-5px',
                                                    transition: 'all 0.2s'
                                                }}
                                                title="Delete Event"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        )}
                                    </div>

                                    <p className={styles.description}>{event.description}</p>

                                    <div className={styles.meta} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                                        {event.venue && <span className={styles.metaTag} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem' }}>📍 {event.venue}</span>}
                                        {event.category && (
                                            <span className={styles.metaTag} style={{
                                                background: 'rgba(59, 130, 246, 0.2)',
                                                color: 'var(--primary-glow)',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                                textTransform: 'uppercase',
                                                fontWeight: '600'
                                            }}>
                                                {event.category}
                                            </span>
                                        )}
                                    </div>

                                    <div className={styles.actions}>
                                        <a
                                            href={event.registrationLink || '#'}
                                            className={styles.registerBtn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => !event.registrationLink && e.preventDefault()}
                                        >
                                            {event.registrationLink ? 'Register Now' : 'Registration Closed'}
                                        </a>
                                        {!event.registrationLink && <span className={styles.infoText}>// Access Restricted</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className={styles.emptyState}>No active operations detected.</p>
                    )}
                </motion.div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><History className="text-slate-400" /> Mission Archive</h2>
                <div className={styles.list}>
                    {eventsData.past.map(event => (
                        <div key={event.id} className={`${styles.card} ${styles.pastCard}`}>
                            <div className={styles.dateBox}>
                                <Clock size={24} />
                                <span>{event.date}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{event.name}</h3>
                                <p className={styles.description}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
