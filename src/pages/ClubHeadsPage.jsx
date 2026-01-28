import React from 'react';
import { clubHeads } from '../data/mockData';
import './ClubHeadsPage.css';

const ClubHeadsPage = () => {
    return (
        <div className="page-container">
            <div className="section-header">
                <h1>Club Heads</h1>
                <p>Meet the leaders driving innovation at CoDeC.</p>
            </div>

            <div className="heads-grid">
                {clubHeads.map((head) => (
                    <div key={head.id} className="head-card">
                        <div className="head-image-wrapper">
                            <img src={head.image} alt={head.name} className="head-image" />
                        </div>
                        <div className="head-content">
                            <h2>{head.name}</h2>
                            <span className="head-position">{head.position}</span>
                            <p className="head-bio">{head.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubHeadsPage;
