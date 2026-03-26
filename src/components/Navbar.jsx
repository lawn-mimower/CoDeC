"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
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

                <div className={styles.navActions}>
                    {member ? (
                        <UserMenu name={member.name} role={member.role} />
                    ) : (
                        <>
                            <Link href="/login" className={styles.memberLoginBtn}>
                                Member Login
                            </Link>
                            <Link href="/connect" className={styles.joinBtn}>
                                <span className={styles.joinText}>Join CoDeC</span>
                            </Link>
                        </>
                    )}
                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
                        <div className={styles.themeToggleInner}>
                            <Sun className={`${styles.themeIcon} ${theme === 'light' ? styles.themeIconActive : ''}`} size={24} />
                            <Moon className={`${styles.themeIcon} ${theme === 'dark' ? styles.themeIconActive : ''}`} size={24} />
                        </div>
                    </button>
                    <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
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
