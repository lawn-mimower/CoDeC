"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    if (isDashboard) return null;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/divisions', label: 'Divisions' },
        { path: '/heads', label: 'Club Heads' },
        { path: '/events', label: 'Events' },
        { path: '/connect', label: 'Recruitment' },
        { path: '/achievements', label: 'Achievements' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Code2 size={28} className={styles.logoTextPrimary} />
                    <span>
                        <span className={styles.logoTextPrimary}>Co</span>
                        <span className={styles.logoTextSecondary}>DeC</span>
                    </span>
                </Link>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`${styles.navMenu} ${isOpen ? styles.navMenuActive : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path} className={styles.navItem}>
                            <Link
                                href={link.path}
                                className={`${styles.navLink} ${pathname === link.path ? styles.navLinkActive : ''}`}
                            >
                                {link.label}
                                {pathname === link.path && (
                                    <motion.div
                                        className={styles.activeDot}
                                        layoutId="activeTab"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
