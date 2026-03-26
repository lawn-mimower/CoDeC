"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Activity, History, Repeat, Trash2, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventManager } from '../utils/EventManager';
import EventRegistrationModal from '../components/EventRegistrationModal';
import styles from './EventsPage.module.css';

const formatDateToDDMMYYYY = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
};

const EventsPage = () => {
    const [eventsData, setEventsData] = useState({ upcoming: [], past: [] });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        // Fetch events on mount
        EventManager.getEvents()
            .then(data => setEventsData(data))
            .catch(err => {
                console.error('Error fetching events:', err);
                setEventsData({ upcoming: [], past: [] });
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Confirm Deletion Protocol? This action is irreversible.')) {
            try {
                const updated = await EventManager.deleteEvent(id);
                if (updated) setEventsData(updated);
            } catch (err) {
                console.error('Error deleting event:', err);
            }
        }
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
                    Events
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
                <h2 className={styles.sectionTitle}><Activity style={{ color: 'var(--accent-blue)' }} /> Active Events</h2>
                {/* Debug Log */}
                <div style={{ display: 'none' }}>{console.log('EventsPage Data:', eventsData)}</div>

                <div
                    className={styles.list}
                >
                    {eventsData.upcoming.length > 0 ? (
                        eventsData.upcoming.map((event, index) => (
                            <motion.div
                                key={event.id}
                                className={`${styles.card} ${styles.upcomingCard}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.dateBox}>
                                    <Calendar size={24} />
                                    <span>{formatDateToDDMMYYYY(event.date)}</span>
                                    {!event.isAllDay && event.time && (
                                        <div style={{ fontSize: '0.8em', marginTop: '4px', opacity: 0.8 }}>{event.time}</div>
                                    )}
                                    {event.isAllDay && (
                                        <div style={{ fontSize: '0.7em', marginTop: '4px', opacity: 0.6, textTransform: 'uppercase' }}>All Day</div>
                                    )}
                                    {event.recurrence && event.recurrence !== 'none' && (
                                        <div style={{ marginTop: '8px', color: 'var(--accent-orange)' }} title="Recurring Event">
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
                                        {event.venue && <span className={styles.metaTag} style={{ background: 'var(--div-tag-bg)', color: 'var(--text-secondary)', border: '1px solid var(--div-tag-border)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem' }}>📍 {event.venue}</span>}
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
                                        {(event.registrationLink || event.registration_link) ? (
                                            <button
                                                className={styles.registerBtn}
                                                onClick={() => {
                                                    setSelectedEvent(event);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                Register Now
                                            </button>
                                        ) : (
                                            <button
                                                className={styles.registerBtn}
                                                disabled
                                            >
                                                Registration Closed
                                            </button>
                                        )}
                                        {!(event.registrationLink || event.registration_link) && <span className={styles.infoText}>// Access Restricted</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className={styles.emptyState}>No active events detected.</p>
                    )}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><History style={{ color: 'var(--text-secondary)' }} /> Past Events</h2>
                <div className={styles.list}>
                    {eventsData.past.map(event => (
                        <div key={event.id} className={`${styles.card} ${styles.pastCard}`}>
                            <div className={styles.dateBox}>
                                <Clock size={24} />
                                <span>{formatDateToDDMMYYYY(event.date)}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{event.name}</h3>
                                <p className={styles.description}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <EventRegistrationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                event={selectedEvent} 
            />
        </div>
    );
};

export default EventsPage;
