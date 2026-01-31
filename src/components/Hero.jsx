import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const TAGLINE = 'Building problem-solvers, developers, and researchers.';
const TYPING_SPEED_MS = 60;

const TypewriterTagline = () => {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (displayed.length >= TAGLINE.length) {
            setDone(true);
            return;
        }
        const t = setTimeout(() => {
            setDisplayed(TAGLINE.slice(0, displayed.length + 1));
        }, TYPING_SPEED_MS);
        return () => clearTimeout(t);
    }, [displayed]);

    return (
        <span className={styles.tagline}>
            {displayed}
            {!done && <span className={styles.cursor} />}
        </span>
    );
};

const Hero = ({ onActivateProtocol }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.grid}></div>
                <div className={styles.glowOrb}></div>
            </div>

            <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className={styles.title}>
                    <TypewriterTagline />
                </h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    Community of Developers and Coders
                    <span
                        className={styles.stealthTrigger}
                        onClick={onActivateProtocol}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onActivateProtocol()}
                    >
                        (CoDeC)
                    </span>{' '}
                    is the premier technical club fostering innovation and technical excellence.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <Link to="/events" className={styles.primaryBtn}>
                        Explore Events <ArrowRight size={18} />
                    </Link>
                    <Link to="/divisions" className={styles.secondaryBtn}>
                        Our Divisions <Terminal size={18} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
