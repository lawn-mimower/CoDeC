import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { achievements } from '../data/mockData';
import './AchievementsPage.css';

const AchievementsPage = () => {
    return (
        <div className="page-container">
            <div className="section-header">
                <h1>Achievements</h1>
                <p>Celebrating the milestones and victories of our members.</p>
            </div>

            <div className="achievements-timeline">
                {achievements.map((item, index) => (
                    <div key={item.id} className="achievement-item">
                        <div className="achievement-icon">
                            {index === 0 ? <Trophy /> : index === 1 ? <Medal /> : <Star />}
                        </div>
                        <div className="achievement-content">
                            <span className="achievement-date">{item.date}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsPage;
