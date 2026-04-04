"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ArrowDown, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { createClient } from '../utils/supabase/client';
import UserMenu from './UserMenu';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('light');
    const [member, setMember] = useState(null); // { name, role } or null
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');

    // Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auth state
    useEffect(() => {
        const supabase = createClient();

        const fetchMember = async (userId) => {
            if (!userId) { setMember(null); return; }
            const { data } = await supabase
                .from('members')
                .select('name, role')
                .eq('user_id', userId)
                .single();
            setMember(data ?? { name: null, role: 'member' });
        };

        supabase.auth.getUser().then(({ data: { user } }) => fetchMember(user?.id ?? null));

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
            fetchMember(session?.user?.id ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setIsOpen(false); }, [pathname]);

    if (isDashboard) return null;

    const navLinks = [
        { path: '/divisions', label: 'Divisions' },
        { path: '/events', label: 'Events' },
        { path: '/achievements', label: 'Glory' },
        { path: '/heads', label: 'Team' },
        { path: '/connect', label: 'Join Us' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon} />
                    <span>CoDeC</span>
                </Link>

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
                    <li className={styles.mobileToggleWrapper}>
                        <div className={styles.mobileToggleContainer}>
                            <span style={{marginRight: '1rem', fontFamily: 'var(--font-sans)', fontWeight: '500', color: 'var(--text-secondary)'}}>Theme</span>
                            <button 
                                className={styles.themeTrack} 
                                onClick={toggleTheme} 
                                aria-label="Toggle Theme"
                                style={{ 
                                    justifyContent: theme === 'light' ? 'flex-start' : 'flex-end',
                                    background: theme === 'light' ? '#0ea5e9' : '#1e1b4b',
                                    borderColor: theme === 'light' ? '#38bdf8' : '#312e81'
                                }}
                            >
                                <motion.div 
                                    className={styles.themeThumb}
                                    layout
                                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                                >
                                    {theme === 'light' ? (
                                        <Sun size={12} color="#0ea5e9" strokeWidth={3} />
                                    ) : (
                                        <Moon size={12} color="#1e1b4b" strokeWidth={3} />
                                    )}
                                </motion.div>
                            </button>
                        </div>
                    </li>
                </ul>

                <div className={styles.mobileMenuContainer}>
                    <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <ArrowUp size={28} /> : <ArrowDown size={28} />}
                    </div>
                </div>

                <div className={styles.navActions}>
                    <button 
                        className={`${styles.themeTrack} ${styles.desktopToggle}`} 
                        onClick={toggleTheme} 
                        aria-label="Toggle Theme"
                        style={{ 
                            justifyContent: theme === 'light' ? 'flex-start' : 'flex-end',
                            background: theme === 'light' ? '#0ea5e9' : '#1e1b4b',
                            borderColor: theme === 'light' ? '#38bdf8' : '#312e81'
                        }}
                    >
                        <motion.div 
                            className={styles.themeThumb}
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                        >
                            {theme === 'light' ? (
                                <Sun size={12} color="#0ea5e9" strokeWidth={3} />
                            ) : (
                                <Moon size={12} color="#1e1b4b" strokeWidth={3} />
                            )}
                        </motion.div>
                    </button>
                    {member ? (
                        <UserMenu name={member.name} role={member.role} />
                    ) : (
                        <Link href="/login" className={styles.memberLoginBtn}>
                            Member Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
