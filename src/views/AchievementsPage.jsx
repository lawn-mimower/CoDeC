"use client";
import React from 'react';
import { Trophy, Medal, Star, Target, Crown, Award } from 'lucide-react';
import { achievements } from '../data/mockData';
import './AchievementsPage.css';

const AchievementsPage = () => {
    const [achievementsData, setAchievementsData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const { createClient } = await import('../utils/supabase/client');
                const supabase = createClient();
                const { data, error } = await supabase.from('achievements').select('*').order('date', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setAchievementsData(data);
                } else {
                    setAchievementsData(achievements);
                }
            } catch (err) {
                console.warn('Failed to fetch achievements, using mock:', err);
                setAchievementsData(achievements);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAchievements();
    }, []);

    if (isLoading) {
        return <div style={{ color: 'white', textAlign: 'center', marginTop: '4rem' }}>Loading Hall of Fame...</div>;
    }

    return (
        <div className="achievements-container">
            <div className="achievements-header">
                <h1 className="glitch-text" data-text="Hall of Fame">Hall of Fame</h1>
                <p className="subtitle">Celebrating our legacy of code and conquest</p>
            </div>

            <div className="timeline-container">
                {achievementsData.map((item, index) => (
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
