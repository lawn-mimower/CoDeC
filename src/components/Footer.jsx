import React from 'react';
import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandColumn}>
                    <div className={styles.brandLogo}>
                        <Code2 className="text-blue-500" size={24} />
                        CoDeC
                    </div>
                    <p className={styles.brandDesc}>
                        The premier competitive programming and technical club.
                        Building the future of tech, one line of code at a time.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}><Github size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Mail size={20} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Discover</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/divisions" className={styles.link}>Our Divisions</Link></li>
                        <li><Link href="/events" className={styles.link}>Upcoming Events</Link></li>
                        <li><Link href="/achievements" className={styles.link}>Hall of Fame</Link></li>
                        <li><Link href="/heads" className={styles.link}>Leadership</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Collaborate</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/login" className={styles.link}>Member Login</Link></li>
                        <li><a href="#" className={styles.link}>Join Discord</a></li>
                        <li><a href="#" className={styles.link}>Sponsorships</a></li>
                        <li><a href="#" className={styles.link}>Contact Us</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Legal</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                        <li><a href="#" className={styles.link}>Terms of Service</a></li>
                        <li><a href="#" className={styles.link}>Code of Conduct</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} CoDeC. All rights reserved.</p>
                <p>Made with <Heart size={14} className={styles.heart} /> by CoDeC Web Team</p>
            </div>
        </footer>
    );
};

export default Footer;
