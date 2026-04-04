'use client';
import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Users, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EventRegistrationModal from './EventRegistrationModal';
import styles from './EventDetailModal.module.css';

const EventDetailModal = ({ isOpen, onClose, event }) => {
  const [regOpen, setRegOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  const isRegistrationOpen = event.registration_open !== false;
  const spotsLeft = event.max_participants != null && event.registered_count != null
    ? event.max_participants - event.registered_count
    : event.max_participants ?? null;

  return (
    <>
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
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Banner */}
              <div className={styles.banner} style={event.banner_image ? { backgroundImage: `url(${event.banner_image})` } : {}}>
                <div className={styles.bannerOverlay} />
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                  <X size={18} />
                </button>
                <div className={styles.bannerContent}>
                  <div className={styles.tagRow}>
                    {event.category && <span className={`${styles.tag} ${styles.tagCategory}`}>{event.category}</span>}
                    {event.intercollege
                      ? <span className={`${styles.tag} ${styles.tagIntercollege}`}>Intercollege</span>
                      : <span className={`${styles.tag} ${styles.tagInhouse}`}>MIT WPU Only</span>}
                    {event.charges ? <span className={`${styles.tag} ${styles.tagPaid}`}>₹{event.charges}</span>
                      : <span className={`${styles.tag} ${styles.tagFree}`}>Free</span>}
                  </div>
                  <h2 className={styles.eventTitle}>{event.name}</h2>
                </div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                {/* Left: description + eligibility */}
                <div className={styles.left}>
                  <p className={styles.sectionLabel}>About</p>
                  <p className={styles.description}>{event.description ?? 'No description available.'}</p>

                  {event.eligibility && (
                    <>
                      <p className={styles.sectionLabel} style={{ marginTop: '1.25rem' }}>Eligibility</p>
                      <p className={styles.eligibilityText}>{event.eligibility}</p>
                    </>
                  )}
                </div>

                {/* Right: info card */}
                <div className={styles.infoCard}>
                  {event.date && (
                    <div className={styles.infoRow}>
                      <span className={styles.infoKey}>Date &amp; Time</span>
                      <span className={styles.infoVal}>
                        {new Date(event.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}
                        {event.time ? ` · ${event.time}` : ''}
                      </span>
                    </div>
                  )}
                  {event.venue && (
                    <>
                      <div className={styles.divider} />
                      <div className={styles.infoRow}>
                        <span className={styles.infoKey}>Venue</span>
                        <span className={styles.infoVal}>{event.venue}</span>
                      </div>
                    </>
                  )}
                  {event.registration_deadline && (
                    <>
                      <div className={styles.divider} />
                      <div className={styles.infoRow}>
                        <span className={styles.infoKey}>Registration closes</span>
                        <span className={styles.infoVal}>{new Date(event.registration_deadline).toLocaleDateString('en-IN', { dateStyle: 'long' })}</span>
                      </div>
                    </>
                  )}
                  <div className={styles.divider} />
                  <div className={styles.infoRow}>
                    <span className={styles.infoKey}>Entry fee</span>
                    <span className={styles.infoVal}>{event.charges ? `₹${event.charges}` : 'Free'}</span>
                  </div>
                  {spotsLeft != null && (
                    <>
                      <div className={styles.divider} />
                      <div className={styles.infoRow}>
                        <span className={styles.infoKey}>Spots remaining</span>
                        <span className={styles.infoVal}>{spotsLeft} / {event.max_participants}</span>
                      </div>
                    </>
                  )}

                  {isRegistrationOpen ? (
                    <button className={styles.registerBtn} onClick={() => setRegOpen(true)}>
                      Register Now →
                    </button>
                  ) : (
                    <button className={styles.registerBtn} disabled>
                      Registration Closed
                    </button>
                  )}

                  {event.registered_count != null && (
                    <p className={styles.spotsNote}>{event.registered_count} already registered</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EventRegistrationModal
        isOpen={regOpen}
        onClose={() => setRegOpen(false)}
        event={event}
      />
    </>
  );
};

export default EventDetailModal;
