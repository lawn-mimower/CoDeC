// src/components/EventRegistrationModal.jsx
'use client';
import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EventRegistrationModal.module.css';

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScb962rrOhbEC3waeyzNeCPQ2GaDhjLfoIKGBSk1P2PrHmHvA/viewform?embedded=true";
  let rawUrl = event.registration_link || event.registrationLink;
  
  // Fall back to default if no valid Google form URL is found in the event
  if (!rawUrl || !/^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/.test(rawUrl)) {
    rawUrl = DEFAULT_FORM_URL;
  }
  
  let googleFormUrl = rawUrl;

  // Ensure the link is properly formatted for embedding
  if (googleFormUrl.includes('viewform') && !googleFormUrl.includes('embedded=true')) {
      googleFormUrl = googleFormUrl.split('?')[0] + '?embedded=true';
  }
  
  const isGoogleForm = true;

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

              <div className={styles.iframeWrapper}>
                {isGoogleForm ? (
                  <iframe
                    src={googleFormUrl}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Registration Form"
                    className={styles.googleFrame}
                    onLoad={e => e.target.style.opacity = 1}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                  />
                ) : (
                  <p style={{ padding: '2rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                    Registration form unavailable. Please contact the organizers.
                  </p>
                )}
              </div>
            </>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
