"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Globe, Send, MessageSquare } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Query',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Transmission Received. We will contact you shortly.');
        setFormData({ name: '', email: '', subject: 'General Query', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Let's Build<br />Together</h1>
                    <p className="contact-desc">
                        Whether you're looking to sponsor our next improved hackathon,
                        collaborate on a workshop, or just want to say hi — we're always listening.
                    </p>

                    <div className="info-cards">
                        <div className="info-card">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div className="card-content">
                                <h3>Email Us</h3>
                                <p><a href="mailto:codecteam01@gmail.com">codecteam01@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="icon-box"><Globe size={24} /></div>
                            <div className="card-content">
                                <h3>Socials</h3>
                                <p><a href="https://www.instagram.com/codecmitwpu/">Instagram</a></p>
                                <p><a href="https://www.linkedin.com/company/codecmitwpu/">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <div className="decoration-line"></div>
                    <div className="form-header">
                        <h2><MessageSquare size={20} /> TRANSMISSION_LINK</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="form-grid">
                        <div className="input-group">
                            <label>IDENTITY // NAME OR ORG</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Enter name..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>COMM_CHANNEL // EMAIL</label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>SUBJECT // TYPE</label>
                            <select
                                className="input-field"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            >
                                <option>General Query</option>
                                <option>Sponsorship Proposal</option>
                                <option>Collaboration Request</option>
                                <option>Technical Issue</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>DATA_PACKET // MESSAGE</label>
                            <textarea
                                className="input-field"
                                placeholder="Type your message here..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            SEND_TRANSMISSION <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
