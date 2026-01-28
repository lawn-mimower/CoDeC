import React from 'react';
import { Terminal, Globe, Brain } from 'lucide-react';
import { divisions } from '../data/mockData';
import './DivisionsPage.css';

const iconMap = {
    'Terminal': Terminal,
    'Globe': Globe,
    'Brain': Brain
};

const DivisionsPage = () => {
    return (
        <div className="page-container">
            <div className="section-header">
                <h1>Our Divisions</h1>
                <p>Explore the diverse technical domains we excel in.</p>
            </div>

            <div className="divisions-grid">
                {divisions.map((div) => {
                    const IconComponent = iconMap[div.icon];
                    return (
                        <div key={div.id} className="division-card">
                            <div className="icon-wrapper">
                                <IconComponent size={40} />
                            </div>
                            <h2>{div.name}</h2>
                            <p className="div-description">{div.description}</p>

                            <div className="div-details">
                                <div className="detail-row">
                                    <span className="label">Focus:</span>
                                    <span className="value">{div.focus}</span>
                                </div>
                                <div className="detail-tags">
                                    {div.technologies.map(tech => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DivisionsPage;
