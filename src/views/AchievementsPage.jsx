import React from 'react';
import { Trophy, Medal, Star, Target, Crown, Award } from 'lucide-react';
import { achievements } from '../data/mockData';
import './AchievementsPage.css';

const AchievementsPage = () => {
    return (
        <div className="achievements-container">
            <div className="achievements-header">
                <h1 className="glitch-text" data-text="Hall of Fame">Hall of Fame</h1>
                <p className="subtitle">Celebrating our legacy of code and conquest</p>
            </div>

            <div className="timeline-container">
                {achievements.map((item, index) => (
                    <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content glass-panel">
                            <div className="achievement-date">{item.date}</div>
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-desc">{item.description}</p>
                            <div className="glow-corner"></div>
                        </div>
                        <div className="timeline-dot">
                            {index === 0 ? <Trophy size={20} /> :
                                index === 1 ? <Medal size={20} /> :
                                    index === 2 ? <Crown size={20} /> :
                                        <Star size={20} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsPage;
