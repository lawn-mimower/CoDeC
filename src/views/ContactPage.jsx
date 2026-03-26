"use client";
import React, { useState } from 'react';
import { Mail, Globe, Send } from 'lucide-react';
import styles from './ContactPage.module.css';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Query',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: 'General Query', message: '' });
    };

    return (
        <div className={styles.page}>
            <SectionHeader
                label="// Get in Touch"
                heading="Contact CoDeC"
                gradientWord="CoDeC"
            />

            <div className={styles.infoSection}>
                <p className={styles.desc}>
                    Whether you're looking to sponsor our next hackathon,
                    collaborate on a workshop, or just want to say hi — we're always listening.
                </p>

                <div className={styles.infoCards}>
                    <GlassCard className={styles.infoCard}>
                        <div className={styles.iconBox}><Mail size={22} /></div>
                        <div>
                            <div className={styles.cardTitle}>Email Us</div>
                            <a href="mailto:codecteam01@gmail.com" className={styles.cardLink}>codecteam01@gmail.com</a>
                        </div>
                    </GlassCard>
                    <GlassCard className={styles.infoCard}>
                        <div className={styles.iconBox}><Globe size={22} /></div>
                        <div>
                            <div className={styles.cardTitle}>Socials</div>
                            <a href="https://www.instagram.com/codecmitwpu/" className={styles.cardLink}>Instagram</a>
                            <a href="https://www.linkedin.com/company/codecmitwpu/" className={styles.cardLink}>LinkedIn</a>
                        </div>
                    </GlassCard>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name or Organization</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter name..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Subject</label>
                    <select
                        className={styles.input}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                        <option>General Query</option>
                        <option>Sponsorship Proposal</option>
                        <option>Collaboration Request</option>
                        <option>Technical Issue</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea
                        className={styles.textarea}
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Send Message <Send size={16} style={{ marginLeft: '0.4rem', verticalAlign: 'middle' }} />
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
