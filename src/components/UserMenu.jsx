"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, User, LogOut, LayoutDashboard, Trophy } from 'lucide-react';
import { createClient } from '../utils/supabase/client';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, role }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const router = useRouter();
    const supabase = createClient();

    // Close on outside click
    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
        router.refresh();
    };

    const initials = name
        ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
        : '?';

    return (
        <div className={styles.wrapper} ref={ref}>
            <button className={styles.trigger} onClick={() => setOpen(o => !o)} aria-label="User menu">
                <div className={styles.avatar}>{initials}</div>
                <span className={styles.name}>{name?.split(' ')[0]}</span>
                <ChevronDown size={14} className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
            </button>

            {open && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                        <span className={styles.dropdownName}>{name}</span>
                        <span className={styles.dropdownRole}>{role}</span>
                    </div>
                    <div className={styles.divider} />

                    {(role === 'admin') && (
                        <Link href="/dashboard" className={styles.item} onClick={() => setOpen(false)}>
                            <LayoutDashboard size={15} /> Admin Panel
                        </Link>
                    )}
                    {(role === 'contest_head') && (
                        <Link href="/dashboard" className={styles.item} onClick={() => setOpen(false)}>
                            <Trophy size={15} /> Contest Panel
                        </Link>
                    )}

                    <Link href="/profile" className={styles.item} onClick={() => setOpen(false)}>
                        <User size={15} /> Profile
                    </Link>

                    <div className={styles.divider} />
                    <button className={`${styles.item} ${styles.logoutItem}`} onClick={handleLogout}>
                        <LogOut size={15} /> Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
