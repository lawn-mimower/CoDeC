import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/divisions', label: 'Divisions' },
        { path: '/heads', label: 'Club Heads' },
        { path: '/events', label: 'Events' },
        { path: '/achievements', label: 'Achievements' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Code2 size={28} className={styles.logoTextPrimary} />
                    <span className={styles.logoTextPrimary}>Co</span>
                    <span className={styles.logoTextSecondary}>DeC</span>
                </Link>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`${styles.navMenu} ${isOpen ? styles.navMenuActive : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path} className={styles.navItem}>
                            <Link 
                                to={link.path} 
                                className={`${styles.navLink} ${location.pathname === link.path ? styles.navLinkActive : ''}`}
                            >
                                {link.label}
                                {location.pathname === link.path && (
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
