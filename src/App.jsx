import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DivisionsPage from './pages/DivisionsPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ClubHeadsPage from './pages/ClubHeadsPage';

function App() {
    return (
        <Router>
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/divisions" element={<DivisionsPage />} />
                        <Route path="/heads" element={<ClubHeadsPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/achievements" element={<AchievementsPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
