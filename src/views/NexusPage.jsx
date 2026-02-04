"use client";
import React, { useState } from 'react';
import styles from './NexusPage.module.css';

const NexusPage = () => {
    const [activeTab, setActiveTab] = useState('recruitment');

    // Generic Google Form placeholder URLs (replace with real ones later)
    const forms = {
        recruitment: "https://docs.google.com/forms/d/e/1FAIpQLSdXwZ4yW8kZ5t2z6xQ4yJ7g3J8k9l0mN1oP2qR3sT4uV5w/viewform?embedded=true",
        contest: "https://docs.google.com/forms/d/e/1FAIpQLSf3Y3PGIDfVv-Xu75YMC6mWl1XDkxUvKHPEgntef42o0_GUtA/viewform?usp=publish-editor"
    };

    return (
        <div className={styles.nexusContainer}>
            <div className={styles.heroSection}>
                <p className={styles.heroSubtitle}>Join the Ranks / Report Victory.</p>
            </div>

            <div className={styles.terminalContainer}>
                <div className={styles.tabHeader}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'recruitment' ? styles.active : ''}`}
                        onClick={() => setActiveTab('recruitment')}
                    >
                        Club Recruitment
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'contest' ? styles.active : ''}`}
                        onClick={() => setActiveTab('contest')}
                    >
                        Victory Report
                    </button>
                    <div className={styles.glitchLine}></div>
                </div>

                <div className={styles.iframeWrapper}>
                    <iframe
                        src={activeTab === 'recruitment' ? forms.recruitment : forms.contest}
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Nexus Form"
                        className={styles.styledIframe}
                    >Loading...</iframe>
                </div>

                <div className={styles.terminalFooter}>
                    <span className={styles.statusBlink}>●</span> SYSTEM: WAITING FOR INPUT...
                </div>
            </div>
        </div>
    );
};

export default NexusPage;
