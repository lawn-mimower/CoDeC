import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Code2 size={28} style={{ color: '#f59e0b' }} />
                    <span style={{ color: '#f59e0b' }}>Co</span>
                    <span style={{ color: '#2563eb' }}>DeC</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className={`nav-links ${isActive('/')}`} onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/divisions" className={`nav-links ${isActive('/divisions')}`} onClick={toggleMenu}>
                            Divisions
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/heads" className={`nav-links ${isActive('/heads')}`} onClick={toggleMenu}>
                            Club Heads
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className={`nav-links ${isActive('/events')}`} onClick={toggleMenu}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/achievements" className={`nav-links ${isActive('/achievements')}`} onClick={toggleMenu}>
                            Achievements
                        </Link>
                    </li>
                    {/* Login removed for easter egg */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
