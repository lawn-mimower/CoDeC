import React from 'react';
import './LegalPages.css';

const PrivacyPage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>
                <div className="legal-content">
                    <p>At CoDeC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>

                    <h2>1. Information Collection</h2>
                    <p>We collect information that you voluntarily provide to us when you register for membership, sign up for events, or contact us. This may include your name, email address, student ID, and other contact details.</p>

                    <h2>2. Use of Information</h2>
                    <p>The information we collect is used to:</p>
                    <ul>
                        <li>Manage your club membership and access to resources.</li>
                        <li>Communicate with you about upcoming events, workshops, and opportunities.</li>
                        <li>Improve our website and services.</li>
                    </ul>

                    <h2>3. Data Protection</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

                    <h2>4. Third-Party Sharing</h2>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by college authorities or law.</p>

                    <div className="last-updated">
                        Last Updated: October 2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
