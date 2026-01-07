import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import adminMenu from '../../menu/adminMenu';

const AdminNavbar = () => {
    const [showProfile, setShowProfile] = useState(false);

    const handleLogout = () => {
        console.log("Admin Logout triggered");
        window.location.href = '/login';
    };

    return (
        <nav className="navbar">
            {/* MENU BUTTON */}
            <button className="menu-btn">
                ☰
            </button>

            {/* Branding */}
            <h2 className="navbar-logo">Fasika Admin</h2>

            {/* GLOBAL SEARCH */}
            <input
                className="global-search"
                placeholder="Search crops, prices, advisory..."
            />

            {/* LOCATION SELECTOR */}
            <select className="location-selector">
                <option>Amhara</option>
                <option>Amhara</option>
                <option>Tigray</option>
                <option>SNNPR</option>
            </select>

            {/* Role-specific links */}
            <div className="navbar-actions">
                {adminMenu.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `myLinks ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

                {/* NOTIFICATION BELL */}
                <Link to="/notifications" className="icon-btn">
                    🔔
                </Link>

                {/* PROFILE */}
                <button className="icon-btn" onClick={() => setShowProfile(!showProfile)}>
                    👤
                </button>

                {showProfile && (
                    <div className="dropdown">
                        <div className="myLinks">
                            <Link to="/profile">Account Info</Link>
                            <Link to="/preferences">Preferences</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                )}

                {/* LOGOUT BUTTON */}
                <button className="icon-btn" onClick={handleLogout}>🚪</button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
