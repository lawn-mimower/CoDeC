"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Calendar, ExternalLink, LogIn, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createClient } from '../utils/supabase/client';
import { registerForEvent } from './actions';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = ({ events }) => {
    const [user, setUser] = useState(null);
    const [registering, setRegistering] = useState({});
    const router = useRouter();
    const supabase = createClient();
    const upcoming = (events?.upcoming || []).slice(0, 3);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();
    }, []);

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

    const handleRegister = async (eventId, e) => {
        e.preventDefault();

        if (!user) {
            router.push('/login');
            return;
        }

        setRegistering(prev => ({ ...prev, [eventId]: true }));
        try {
            const result = await registerForEvent(eventId);
            if (result.success) {
                alert(result.message);
            } else {
                alert("Registration Failed: " + result.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An unexpected error occurred.");
        } finally {
            setRegistering(prev => ({ ...prev, [eventId]: false }));
        }
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

                                {user ? (
                                    <button
                                        onClick={(e) => handleRegister(event.id, e)}
                                        className={styles.registerBtn}
                                        disabled={registering[event.id]}
                                    >
                                        {registering[event.id] ? 'Registering...' : 'Register Now'}
                                        {registering[event.id] ? null : <CheckCircle size={14} />}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => router.push('/login')}
                                        className={styles.registerBtn}
                                    >
                                        Login to Register <LogIn size={14} />
                                    </button>
                                )}
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
