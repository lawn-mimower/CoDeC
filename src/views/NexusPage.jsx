"use client";
import React from 'react';
import styles from './NexusPage.module.css';

const NexusPage = () => {
    // Club Recruitment Form URL
    const recruitmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScIuc9Eim4yCe5m1FJRShovkf0AWtp-DxCGI3chbOWXEmq2Iw/viewform";

    return (
        <div className={styles.nexusContainer}>
            <div className={styles.heroSection}>
                <h1 className={styles.pageTitle}>RECRUITMENT</h1>
                <p className={styles.heroSubtitle}>Join the Ranks. Secure Your Legacy.</p>
            </div>

            <div className={styles.terminalContainer}>
                <div className={styles.tabHeader}>
                    <div className={styles.tabButton} style={{ color: 'var(--text-main)', borderBottom: '2px solid var(--primary-glow)', textAlign: 'center' }}>
                        Club Recruitment
                    </div>
                    <div className={styles.glitchLine}></div>
                </div>

                <div className={styles.iframeWrapper}>
                    <iframe
                        src={recruitmentFormUrl}
                        width="100%"
                        height="900" // Increased height slightly
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Club Recruitment Form"
                        className={styles.styledIframe}
                    >Loading...</iframe>
                </div>

                <div className={styles.terminalFooter}>
                    <span className={styles.statusBlink}>●</span> SYSTEM: WAITING FOR RECRUIT INPUT...
                </div>
            </div>
        </div>
    );
};

export default NexusPage;
