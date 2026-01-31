import React from 'react';
import { Calendar, Clock, Activity, History } from 'lucide-react';
import { motion } from 'framer-motion';
import { events } from '../data/mockData';
import styles from './EventsPage.module.css';

const EventsPage = () => {
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
                    {events.upcoming.map(event => (
                        <motion.div
                            key={event.id}
                            className={`${styles.card} ${styles.upcomingCard}`}
                            variants={itemVariants}
                        >
                            <div className={styles.dateBox}>
                                <Calendar size={24} />
                                <span>{event.date}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{event.name}</h3>
                                <p className={styles.description}>{event.description}</p>
                                <div className={styles.actions}>
                                    <button className={styles.registerBtn} disabled>Register Now</button>
                                    <span className={styles.infoText}>// Access Restricted: Coming soon</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><History className="text-slate-400" /> Mission Archive</h2>
                <div className={styles.list}>
                    {events.past.map(event => (
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
