import React from 'react';
import './LegalPages.css';

const TermsPage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms of Service</h1>
                <div className="legal-content">
                    <p>Welcome to CoDeC. By accessing our website and participating in our community, you agree to comply with and be bound by the following terms and conditions.</p>

                    <h2>1. Membership</h2>
                    <p>Membership is open to all students of MIT-WPU who share an interest in coding and technology. Members are expected to uphold the values of the club and participate typically.</p>

                    <h2>2. Code of Conduct</h2>
                    <p>We foster an inclusive and respectful environment. Harassment, discrimination, or disruptive behavior of any kind will not be tolerated and may result in revocation of membership.</p>

                    <h2>3. Intellectual Property</h2>
                    <p>Content published on this website, including code snippets, project documentation, and educational resources, remains the property of CoDeC or its respective authors.</p>

                    <h2>4. Limitation of Liability</h2>
                    <p>CoDeC is a student-run organization. We are not liable for any damages arising from your use of this website or participation in club activities.</p>

                    <h2>5. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.</p>

                    <div className="last-updated">
                        Last Updated: October 2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
