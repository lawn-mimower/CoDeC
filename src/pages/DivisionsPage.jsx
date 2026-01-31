import React from 'react';
import { Terminal, Globe, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { divisions } from '../data/mockData';
import styles from './DivisionsPage.module.css';

const iconMap = {
    'Terminal': Terminal,
    'Globe': Globe,
    'Brain': Brain
};

const DivisionsPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Divisions
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Specialized units driving innovation across the technological spectrum.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {divisions.map((div, index) => {
                    const IconComponent = iconMap[div.icon];
                    return (
                        <motion.div
                            key={div.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <IconComponent size={32} />
                            </div>
                            <h2 className={styles.cardTitle}>{div.name}</h2>
                            <p className={styles.description}>{div.description}</p>

                            <div className={styles.details}>
                                <span className={styles.focus}>Mission: {div.focus}</span>
                                <div className={styles.tags}>
                                    {div.technologies.map(tech => (
                                        <span key={tech} className={styles.tag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default DivisionsPage;
