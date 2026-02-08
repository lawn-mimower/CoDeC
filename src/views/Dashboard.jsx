"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Award, Calendar, Plus, Trophy, TrendingUp, Radio, Repeat, Loader, LogOut } from 'lucide-react';
import { createClient } from '../utils/supabase/client';
import { EventManager } from '../utils/EventManager';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('tracker');
    const [isLoading, setIsLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const [dashboardData, setDashboardData] = useState({
        contests: [],
        meetings: [],
        announcements: [],
        discussions: []
    });

    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Check Auth
                const { data: { user }, error: authError } = await supabase.auth.getUser();
                if (authError || !user) {
                    router.push('/login');
                    return;
                }

                // 2. Fetch User Profile (from 'members' table as per user setup)
                // We assume 'members' table has 'user_id', 'name', 'role'
                let { data: profile, error: profileError } = await supabase
                    .from('members')
                    .select('*')
                    .eq('user_id', user.id)
                    .single();

                if (profileError && profileError.code !== 'PGRST116') {
                    console.error("Profile fetch error:", profileError);
                }

                // Fallback if no profile found (just use auth metadata or defaults)
                if (!profile) {
                    profile = {
                        name: user.user_metadata?.name || user.email.split('@')[0],
                        role: 'Member' // Default role
                    };
                }

                setUserProfile(profile);

                // 3. Fetch Data in Parallel
                const [
                    { data: contests },
                    { data: meetings }
                ] = await Promise.all([
                    supabase.from('contests').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
                    supabase.from('meetings').select('*').order('date', { ascending: true })
                ]);

                setDashboardData({
                    contests: contests || [],
                    meetings: meetings || []
                });

            } catch (err) {
                console.error("Dashboard data load failed:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [router]);

    if (isLoading) {
        return (
            <div className={styles.dashboardContainer} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#4ade80', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Loader size={48} className="animate-spin" />
                    <p>ESTABLISHING SECURE UPLINK...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.dashboardContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.userProfile}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>{(userProfile?.name || 'A').charAt(0).toUpperCase()}</div>

                    </div>
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>{userProfile?.name || 'Agent'}</h3>
                        <span className={styles.userRole}>{userProfile?.role || 'Member'} Class</span>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className={styles.navBtn}
                        style={{ marginTop: '0.5rem', justifyContent: 'center', color: '#ff4d4d', border: '1px solid #ff4d4d' }}
                    >
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>

                <nav className={styles.nav}>
                    <button
                        className={`${styles.navBtn} ${activeTab === 'tracker' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('tracker')}
                    >
                        <Award size={20} /> Combat Log
                    </button>

                    {/* Only show Event Architect for Admins */}
                    {userProfile?.role === 'admin' && (
                        <button
                            className={`${styles.navBtn} ${activeTab === 'manage-events' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('manage-events')}
                        >
                            <Radio size={20} /> Manage Events
                        </button>
                    )}

                    <button
                        className={`${styles.navBtn} ${activeTab === 'meetings' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('meetings')}
                    >
                        <Calendar size={20} /> Mission Briefs
                    </button>

                </nav>
            </aside>

            <main className={styles.content}>
                {activeTab === 'tracker' && <ContestTracker initialEntries={dashboardData.contests} user={userProfile} />}
                {activeTab === 'manage-events' && <EventArchitect user={userProfile} />}
                {activeTab === 'meetings' && <MeetingUpdates meetings={dashboardData.meetings} />}

            </main>
        </div>
    );
};

// Sub-components updated to accept props
const ContestTracker = ({ initialEntries = [], user }) => {
    const supabase = createClient();
    const [entries, setEntries] = useState(initialEntries);
    const [formData, setFormData] = useState({
        name: '',
        platform: 'Codeforces',
        problems: '',
        ratingChange: '',
        notes: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Optimistic update
        const newEntryLocal = {
            id: Date.now(),
            ...formData,
            problems: parseInt(formData.problems) || 0
        };
        setEntries([newEntryLocal, ...entries]);

        // Persist to Supabase
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        if (currentUser) {
            const { error } = await supabase.from('contests').insert([{
                user_id: currentUser.id,
                name: formData.name,
                platform: formData.platform,
                problems: parseInt(formData.problems) || 0,
                rating_change: formData.ratingChange, // Check schema column name snake_case
                notes: formData.notes
            }]);
            if (error) console.error("Error saving contest stats:", error);
        }

        setFormData({ name: '', platform: 'Codeforces', problems: '', ratingChange: '', notes: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Calculate stats
    const totalContests = entries.length;
    const totalProblems = entries.reduce((acc, curr) => acc + (parseInt(curr.problems) || 0), 0);
    const maxRatingChange = entries.length > 0 ? Math.max(...entries.map(e => parseInt(e.ratingChange || e.rating_change) || 0), 0) : 0;

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}><Trophy size={28} className="text-yellow-500" /> Operational Stats</h2>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>{totalContests}</span>
                    <span className={styles.statLabel}>Contests</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>{totalProblems}</span>
                    <span className={styles.statLabel}>Problems Solved</span>
                </div>
                <div className={styles.statCard}>
                    <span className={`${styles.statValue} ${styles.positive}`}>+{maxRatingChange}</span>
                    <span className={styles.statLabel}>Best Performance</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Contest Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <select name="platform" value={formData.platform} onChange={handleChange} className={styles.select}>
                    <option value="Codeforces">Codeforces</option>
                    <option value="CodeChef">CodeChef</option>
                    <option value="AtCoder">AtCoder</option>
                    <option value="LeetCode">LeetCode</option>
                </select>
                <input
                    className={styles.input}
                    type="number"
                    name="problems"
                    placeholder="Probs"
                    value={formData.problems}
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="ratingChange"
                    placeholder="+/-"
                    value={formData.ratingChange}
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="notes"
                    placeholder="Tactical Notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <button type="submit" className={styles.addBtn}><Plus size={20} /></button>
            </form>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Operation</th>
                            <th>Platform</th>
                            <th>Kills (Probs)</th>
                            <th>Rating Delta</th>
                            <th>Intel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map(e => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.platform}</td>
                                <td>{e.problems}</td>
                                <td className={(e.ratingChange || e.rating_change || '').startsWith('+') ? styles.positive : styles.negative}>
                                    {e.ratingChange || e.rating_change}
                                </td>
                                <td>{e.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const MeetingUpdates = ({ meetings = [] }) => (
    <div>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><Calendar size={28} /> Mission Briefs</h2>
        </div>
        <div className="updates-list">
            {meetings.length === 0 ? <p style={{ color: '#666', padding: '1rem' }}>No upcoming briefings.</p> : meetings.map(m => (
                <div key={m.id} className={styles.statCard} style={{ marginBottom: '1rem' }}>
                    <div className={styles.statLabel}>{m.date}</div>
                    <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{m.agenda}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{m.keyPoints || m.key_points}</p>
                </div>
            ))}
        </div>
    </div>
);



const EventArchitect = ({ user }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        isAllDay: false,
        recurrence: 'none',
        venue: '',
        category: 'cp',
        description: '',
        registrationLink: ''
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.date) {
            alert('Protocol Failed: Name and Date are required.');
            return;
        }

        const eventData = {
            ...formData,
            created_by: user?.user_id // Use user_id from profile or wait for backend to handle via auth.uid()
        };

        // Save Event
        // Note: EventManager might need updates to use Supabase, assuming it's still local or hybrid
        EventManager.addEvent(eventData)
            .then(() => {
                // Visual Feedback
                const btn = document.getElementById('publishBtn');
                if (btn) {
                    btn.innerHTML = "UPLINK ESTABLISHED...";
                    btn.style.background = "#4ade80";
                }

                setTimeout(() => {
                    alert("Event Uplink Established: Data successfully patched to the network.");
                    router.push('/events');
                }, 800);
            })
            .catch(err => {
                console.error('Error adding event:', err);
                alert('Event Uplink Failed. Check console for details.');
            });
    };

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <Radio size={28} className="text-pink-500 animate-pulse" />
                    Event Architect
                </h2>
            </div>

            <form className={styles.architectForm} onSubmit={handleSubmit}>
                <div className={styles.architectFormGroup}>
                    <label className={styles.architectLabel}>Operation Name</label>
                    <input
                        type="text"
                        name="name"
                        className={styles.neonInput}
                        placeholder="e.g. Cyberpunk Hackathon 2077"
                        value={formData.name}
                        onChange={handleChange}
                        autoFocus
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.architectFormGroup}>
                        <label className={styles.architectLabel}>Date</label>
                        <input
                            type="date"
                            name="date"
                            className={styles.neonInput}
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.architectFormGroup} style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '8px' }}>
                        <input
                            type="checkbox"
                            name="isAllDay"
                            id="isAllDay"
                            checked={formData.isAllDay}
                            onChange={handleChange}
                            style={{ width: '20px', height: '20px', accentColor: 'var(--accent-blue)' }}
                        />
                        <label htmlFor="isAllDay" className={styles.architectLabel} style={{ margin: 0, cursor: 'pointer' }}>All Day Event</label>
                    </div>

                    {!formData.isAllDay && (
                        <div className={styles.architectFormGroup}>
                            <label className={styles.architectLabel}>Time</label>
                            <input
                                type="time"
                                name="time"
                                className={styles.neonInput}
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.architectFormGroup}>
                    <label className={styles.architectLabel}><Repeat size={14} /> Recurrence Protocol</label>
                    <select
                        name="recurrence"
                        className={styles.neonSelect}
                        value={formData.recurrence}
                        onChange={handleChange}
                    >
                        <option value="none">Single Mission (No Repeat)</option>
                        <option value="weekly">Weekly Loop</option>
                        <option value="monthly">Monthly Cycle</option>
                    </select>
                </div>

                <div className={styles.row}>
                    <div className={styles.architectFormGroup}>
                        <label className={styles.architectLabel}>Venue / Sector</label>
                        <input
                            type="text"
                            name="venue"
                            className={styles.neonInput}
                            placeholder="e.g. Lab 3 or Google Meet"
                            value={formData.venue}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.architectFormGroup}>
                        <label className={styles.architectLabel}>Division / Category</label>
                        <select
                            name="category"
                            className={styles.neonSelect}
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="cp">Competitive Programming</option>
                            <option value="web">Web Development</option>
                            <option value="ml">Machine Learning</option>
                            <option value="other">General / Other</option>
                        </select>
                    </div>
                </div>

                <div className={styles.architectFormGroup}>
                    <label className={styles.architectLabel}>Mission Data (Description)</label>
                    <textarea
                        name="description"
                        className={styles.neonTextarea}
                        placeholder="Brief the operatives on the mission objectives..."
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.architectFormGroup}>
                    <label className={styles.architectLabel}>Uplink (Registration URL)</label>
                    <input
                        type="url"
                        name="registrationLink"
                        className={styles.neonInput}
                        placeholder="https://..."
                        value={formData.registrationLink}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    id="publishBtn"
                    className={styles.publishBtn}
                    style={{
                        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-orange))',
                        boxShadow: '0 4px 25px rgba(249, 115, 22, 0.4)'
                    }}
                >
                    INITIATE PUBLISH PROTOCOL
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
