"use client";
import React from 'react';
import { clubHeads } from '../data/mockData';

const ClubHeadsPage = () => {
    const [headsData, setHeadsData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchHeads = async () => {
            try {
                const { createClient } = await import('../utils/supabase/client');
                const supabase = createClient();
                const { data, error } = await supabase.from('team_members').select('*');

                if (error) throw error;
                if (data && data.length > 0) {
                    setHeadsData(data);
                } else {
                    setHeadsData(clubHeads);
                }
            } catch (err) {
                console.warn('Failed to fetch club heads, using mock:', err);
                setHeadsData(clubHeads);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHeads();
    }, []);

    if (isLoading) {
        return <div style={{ color: 'white', textAlign: 'center', marginTop: '4rem' }}>Loading Leadership Data...</div>;
    }

    return (
        <div className="page-container">
            <div className="background">
                <div className="grid"></div>
                <div className="glowOrb"></div>
            </div>

            <div className="section-header">
                <h1>Club Heads</h1>
                <p>Meet the leaders driving innovation at CoDeC.</p>
            </div>

            <div className="heads-grid">
                {headsData.map((head) => (
                    <div key={head.id} className="head-card">
                        <div className="head-image-wrapper">
                            <img
                                src={head.image || `https://ui-avatars.com/api/?name=${head.name}&background=random`}
                                alt={head.name}
                                className="head-image"
                            />
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
