import React, { useState } from 'react';
import { X, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './EventRegistrationModal.module.css';

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
    if (!isOpen || !event) return null;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        prn: '',
        branch: '',
        year: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend only
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                prn: '',
                branch: '',
                year: ''
            });
        }, 3000);
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={24} />
                </button>
                
                {isSubmitted ? (
                    <motion.div 
                        className={styles.successState}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
                        >
                            <CheckCircle2 size={64} className={styles.successIcon} />
                        </motion.div>
                        <h3 className={styles.successTitle}>Registration Initialized!</h3>
                        <p className={styles.successDesc}>Your data stream for {event.name} has been processed. Stand by for further instructions.</p>
                    </motion.div>
                ) : (
                    <>
                        <div className={styles.modalHeader}>
                            <h2><Target className={styles.headerIcon} /> Operation Sign-Up</h2>
                            <p className={styles.eventName}>{event.name}</p>
                        </div>

                        <form className={styles.registrationForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} required className={styles.inputField} onChange={handleChange} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>College Email</label>
                        <input type="email" name="email" value={formData.email} required className={styles.inputField} onChange={handleChange} />
                    </div>

                     <div className={styles.inputGroup}>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} required className={styles.inputField} onChange={handleChange} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>PRN / Student ID</label>
                        <input type="text" name="prn" value={formData.prn} required className={styles.inputField} onChange={handleChange} />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <label>Branch / Dept</label>
                            <select name="branch" value={formData.branch} required className={styles.inputField} onChange={handleChange}>
                                <option value="" disabled>Select Branch</option>
                                <option value="CSE">CSE Core</option>
                                <option value="CSE-SPEC">CSE Specialization (AI/DS/etc)</option>
                                <option value="ECE">ECE</option>
                                <option value="MECH">Mechanical</option>
                                <option value="CIVIL">Civil</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label>Year of Study</label>
                            <select name="year" value={formData.year} required className={styles.inputField} onChange={handleChange}>
                                <option value="" disabled>Select Year</option>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Confirm Registration
                    </button>
                    </form>
                </>
                )}
            </div>
        </div>
    );
};

export default EventRegistrationModal;
