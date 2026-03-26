"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.blobs}>
        <div className={styles.blobBlue} />
        <div className={styles.blobGold} />
      </div>

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          // MIT WPU&apos;s Official Competitive Programming Club
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Community of Developers
          <br />
          and{' '}
          <span className={styles.gradientWord}>Coders</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          Where every line of code builds a dream. Join CoDeC and compete, build, and grow alongside the best at MIT WPU.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <Link href="/events" className={styles.primaryBtn}>
            Explore Events <ArrowRight size={17} />
          </Link>
          <Link href="/connect" className={styles.secondaryBtn}>
            <Users size={17} /> Join the Club
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
