"use client";
import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { createClient } from '../utils/supabase/client';
import { updateMemberProfile } from '../actions/memberActions';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import styles from './ProfilePage.module.css';

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const DEPARTMENTS = ['CSE', 'CSE-AI', 'CSE-DS', 'ECE', 'Mechanical', 'Civil', 'Other'];

const CP_HANDLES = [
    { key: 'cf_handle',  label: 'Codeforces',  placeholder: 'e.g. tourist' },
    { key: 'lc_handle',  label: 'LeetCode',    placeholder: 'e.g. neal_wu' },
    { key: 'cc_handle',  label: 'CodeChef',    placeholder: 'e.g. gennady' },
    { key: 'at_handle',  label: 'AtCoder',     placeholder: 'e.g. chokudai' },
    { key: 'hr_handle',  label: 'HackerRank',  placeholder: 'e.g. mihir' },
];

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        year: '', department: '',
        cf_handle: '', lc_handle: '', cc_handle: '', at_handle: '', hr_handle: '',
    });
    const [authEmail, setAuthEmail] = useState('');
    const [authName, setAuthName] = useState('');
    const [status, setStatus] = useState('idle'); // idle | saving | saved | error
    const [errorMsg, setErrorMsg] = useState('');
    const supabase = createClient();

    useEffect(() => {
        const load = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            setAuthEmail(user.email ?? '');

            const { data: member } = await supabase
                .from('members')
                .select('name, year, department, cf_handle, lc_handle, cc_handle, at_handle, hr_handle')
                .eq('user_id', user.id)
                .single();

            if (member) {
                setAuthName(member.name ?? '');
                setProfile({
                    year:        member.year        ?? '',
                    department:  member.department  ?? '',
                    cf_handle:   member.cf_handle   ?? '',
                    lc_handle:   member.lc_handle   ?? '',
                    cc_handle:   member.cc_handle   ?? '',
                    at_handle:   member.at_handle   ?? '',
                    hr_handle:   member.hr_handle   ?? '',
                });
            }
        };
        load();
    }, []);

    const handleChange = (key, value) => setProfile(prev => ({ ...prev, [key]: value }));

    const handleSave = async (e) => {
        e.preventDefault();
        setStatus('saving');
        setErrorMsg('');
        const result = await updateMemberProfile(profile);
        if (result.error) {
            setStatus('error');
            setErrorMsg(result.error);
        } else {
            setStatus('saved');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className={styles.page}>
            <SectionHeader label="// Member Profile" heading="Your Profile" />

            <form onSubmit={handleSave} className={styles.form}>
                {/* Identity (read-only) */}
                <GlassCard className={styles.section}>
                    <p className={styles.sectionLabel}>Identity</p>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Name</label>
                            <input className={`${styles.input} ${styles.readOnly}`} value={authName} readOnly />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input className={`${styles.input} ${styles.readOnly}`} value={authEmail} readOnly />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="year" className={styles.label}>Year</label>
                            <select id="year" className={styles.input} value={profile.year} onChange={e => handleChange('year', e.target.value)}>
                                <option value="" disabled>Select year</option>
                                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="department" className={styles.label}>Department</label>
                            <select id="department" className={styles.input} value={profile.department} onChange={e => handleChange('department', e.target.value)}>
                                <option value="" disabled>Select department</option>
                                {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>
                </GlassCard>

                {/* CP Handles */}
                <GlassCard className={styles.section}>
                    <p className={styles.sectionLabel}>Competitive Programming Handles</p>
                    <div className={styles.handlesGrid}>
                        {CP_HANDLES.map(({ key, label, placeholder }) => (
                            <div key={key} className={styles.inputGroup}>
                                <label htmlFor={key} className={styles.label}>{label}</label>
                                <input
                                    id={key}
                                    className={styles.input}
                                    value={profile[key]}
                                    onChange={e => handleChange(key, e.target.value)}
                                    placeholder={placeholder}
                                    autoComplete="off"
                                />
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}

                <button type="submit" className={styles.saveBtn} disabled={status === 'saving'}>
                    {status === 'saving' && <Loader2 size={17} className={styles.spinner} />}
                    {status === 'saved' && <CheckCircle2 size={17} />}
                    {status === 'saving' ? 'Saving...' : status === 'saved' ? 'Saved!' : 'Save Profile'}
                </button>
            </form>
        </div>
    );
};

export default ProfilePage;
