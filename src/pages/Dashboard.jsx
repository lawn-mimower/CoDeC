import React, { useState } from 'react';
import { LayoutDashboard, Award, Users, MessageSquare, Calendar } from 'lucide-react';
import { currentUser } from '../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('tracker');

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <div className="user-profile">
                    <div className="avatar">{currentUser.name.charAt(0)}</div>
                    <div className="user-info">
                        <h3>{currentUser.name}</h3>
                        <span>{currentUser.role}</span>
                    </div>
                </div>

                <nav className="dashboard-nav">
                    <button
                        className={`nav-btn ${activeTab === 'tracker' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tracker')}
                    >
                        <Award size={20} /> Contest Tracker
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'meetings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('meetings')}
                    >
                        <Calendar size={20} /> Meeting Updates
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'announcements' ? 'active' : ''}`}
                        onClick={() => setActiveTab('announcements')}
                    >
                        <Users size={20} /> Announcements
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'discussions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('discussions')}
                    >
                        <MessageSquare size={20} /> Discussions
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                {activeTab === 'tracker' && <ContestTracker />}
                {activeTab === 'meetings' && <MeetingUpdates />}
                {activeTab === 'announcements' && <Announcements />}
                {activeTab === 'discussions' && <Discussions />}
            </main>
        </div>
    );
};

const ContestTracker = () => {
    const [entries, setEntries] = useState(currentUser.contests);
    const [formData, setFormData] = useState({
        name: '',
        platform: 'Codeforces',
        problems: '',
        ratingChange: '',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            ...formData,
            problems: parseInt(formData.problems) || 0
        };
        setEntries([newEntry, ...entries]);
        setFormData({ name: '', platform: 'Codeforces', problems: '', ratingChange: '', notes: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="dashboard-section">
            <h2>Contest Tracker</h2>

            <form onSubmit={handleSubmit} className="tracker-form">
                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        placeholder="Contest Name (e.g. CF Round #955)"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <select name="platform" value={formData.platform} onChange={handleChange}>
                        <option value="Codeforces">Codeforces</option>
                        <option value="CodeChef">CodeChef</option>
                        <option value="AtCoder">AtCoder</option>
                        <option value="LeetCode">LeetCode</option>
                    </select>
                </div>
                <div className="form-row">
                    <input
                        type="number"
                        name="problems"
                        placeholder="Problems"
                        value={formData.problems}
                        onChange={handleChange}
                        className="input-short"
                    />
                    <input
                        type="text"
                        name="ratingChange"
                        placeholder="Rating (+/-)"
                        value={formData.ratingChange}
                        onChange={handleChange}
                        className="input-short"
                    />
                    <input
                        type="text"
                        name="notes"
                        placeholder="Notes (optional)"
                        value={formData.notes}
                        onChange={handleChange}
                        className="input-flex"
                    />
                    <button type="submit" className="btn-add">Add Entry</button>
                </div>
            </form>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Contest</th>
                        <th>Platform</th>
                        <th>Problems</th>
                        <th>Rating</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map(e => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td><span className={`badge ${e.platform.toLowerCase()}`}>{e.platform}</span></td>
                            <td>{e.problems}</td>
                            <td className={e.ratingChange.startsWith('+') ? 'positive' : e.ratingChange.startsWith('-') ? 'negative' : ''}>{e.ratingChange}</td>
                            <td>{e.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const MeetingUpdates = () => (
    <div className="dashboard-section">
        <h2>Meeting Minutes</h2>
        <div className="updates-list">
            {currentUser.meetings.map(m => (
                <div key={m.id} className="update-card">
                    <div className="update-date">{m.date}</div>
                    <h3>{m.agenda}</h3>
                    <p>{m.keyPoints}</p>
                </div>
            ))}
        </div>
    </div>
);

const Announcements = () => (
    <div className="dashboard-section">
        <h2>Internal Announcements</h2>
        <div className="announcements-feed">
            {currentUser.announcements.map(a => (
                <div key={a.id} className="announcement-item">
                    <div className="ann-date">{a.date}</div>
                    <p>{a.content}</p>
                </div>
            ))}
        </div>
    </div>
);

const Discussions = () => (
    <div className="dashboard-section">
        <h2>Discussion Board</h2>
        <div className="discussion-threads">
            {currentUser.discussions.map(d => (
                <div key={d.id} className="thread-item">
                    <div className="thread-meta"><strong>{d.author}</strong> at {d.timestamp}</div>
                    <p>{d.content}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Dashboard;
