// src/components/EventRegistrationModal.jsx
'use client';
import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerForEvent } from './actions';
import styles from './EventRegistrationModal.module.css';

const BRANCHES = ['CSE', 'CSE-AI', 'CSE-DS', 'ECE', 'Mechanical', 'Civil', 'Other'];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', prn: '', branch: '', year: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !event) return null;

  const isGoogleForm = Boolean(event.registration_link || event.registrationLink);
  const googleFormUrl = event.registration_link || event.registrationLink;

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const result = await registerForEvent(
      { name: formData.fullName, email: formData.email, phone: formData.phone, prn: formData.prn, branch: formData.branch, year: formData.year },
      event.id
    );

    if (result.error) {
      setStatus('error');
      setErrorMsg(result.error);
    } else {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ fullName: '', email: '', phone: '', prn: '', branch: '', year: '' });
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            {status === 'success' ? (
              <motion.div className={styles.successState} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={52} className={styles.successIcon} />
                <h3 className={styles.successTitle}>You&apos;re registered!</h3>
                <p className={styles.successDesc}>Check your email for confirmation details for <strong>{event.name}</strong>.</p>
              </motion.div>
            ) : (
              <>
                <div className={styles.modalHeader}>
                  <span className={styles.eventLabel}>{event.category ?? 'Event'}</span>
                  <h2 className={styles.eventName}>{event.name}</h2>
                  {event.date && (
                    <p className={styles.eventMeta}>
                      {new Date(event.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}
                      {event.venue ? ` · ${event.venue}` : ''}
                    </p>
                  )}
                </div>

                {isGoogleForm ? (
                  <div className={styles.iframeWrapper}>
                    <iframe
                      src={googleFormUrl}
                      width="100%"
                      height="520"
                      frameBorder="0"
                      title="Registration Form"
                      className={styles.googleFrame}
                      onLoad={e => e.target.style.opacity = 1}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                    />
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Full Name</label>
                      <input className={styles.input} name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>College Email</label>
                      <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input className={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>PRN / Student ID</label>
                      <input className={styles.input} name="prn" value={formData.prn} onChange={handleChange} required />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Branch</label>
                        <select className={styles.input} name="branch" value={formData.branch} onChange={handleChange} required>
                          <option value="" disabled>Select Branch</option>
                          {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Year</label>
                        <select className={styles.input} name="year" value={formData.year} onChange={handleChange} required>
                          <option value="" disabled>Select Year</option>
                          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                    {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                      {status === 'loading' ? <Loader2 size={18} className={styles.spinner} /> : 'Register'}
                    </button>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
