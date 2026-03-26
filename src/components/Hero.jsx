"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const TOKENS = [
    { text: '<Building', type: 'syntaxKeyword' },
    { text: ' ', type: 'syntaxPlain' },
    { text: 'problem-solvers', type: 'syntaxEntity' },
    { text: ' ', type: 'syntaxPlain' },
    { text: 'developers', type: 'syntaxVariable' },
    { text: ' ', type: 'syntaxPlain' },
    { text: 'and', type: 'syntaxKeyword' },
    { text: ' ', type: 'syntaxPlain' },
    { text: 'researchers/>', type: 'syntaxString' },
];

const TYPING_SPEED_MS = 50;

const TypewriterTagline = () => {
    const [completedTokens, setCompletedTokens] = useState([]);
    const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
    const [currentTokenText, setCurrentTokenText] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (done) return;

        if (currentTokenIndex >= TOKENS.length) {
            setDone(true);
            return;
        }

        const targetToken = TOKENS[currentTokenIndex];

        if (currentTokenText.length < targetToken.text.length) {
            const timeout = setTimeout(() => {
                setCurrentTokenText(targetToken.text.slice(0, currentTokenText.length + 1));
            }, TYPING_SPEED_MS);
            return () => clearTimeout(timeout);
        } else {
            // Token finished, move to next
            const timeout = setTimeout(() => {
                setCompletedTokens([...completedTokens, targetToken]);
                setCurrentTokenIndex(currentTokenIndex + 1);
                setCurrentTokenText('');
            }, TYPING_SPEED_MS);
            return () => clearTimeout(timeout);
        }
    }, [currentTokenIndex, currentTokenText, completedTokens, done]);

    return (
        <span className={styles.tagline}>
            {completedTokens.map((token, index) => (
                <span key={index} className={styles[token.type]}>{token.text}</span>
            ))}
            <span className={styles[TOKENS[currentTokenIndex]?.type || 'syntaxPlain']}>
                {currentTokenText}
            </span>
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
                    <Link
                        href="/login"
                        className={styles.stealthTrigger}
                    >
                        (CoDeC)
                    </Link>{' '}
                    is the premier technical club fostering innovation and technical excellence.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <Link href="/events" className={styles.primaryBtn}>
                        Explore Events <ArrowRight size={18} />
                    </Link>
                    <Link href="/divisions" className={styles.secondaryBtn}>
                        Our Divisions <Terminal size={18} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
