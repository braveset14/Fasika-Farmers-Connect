import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar({ onMenuClick }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar">
      {/* SIDEBAR MENU BUTTON */}
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>

      <h2 className="navbar-logo">Fasika</h2>

      {/* GLOBAL SEARCH */}
      <input
        className="global-search"
        placeholder="Search crops, prices, advisory..."
      />

      {/* LOCATION SELECTOR */}
      <select className="location-selector">
        <option>Oromia</option>
        <option>Amhara</option>
        <option>Tigray</option>
        <option>SNNPR</option>
      </select>

      <div className="navbar-actions">
        {/* NOTIFICATION BELL - Now a Link to notifications page */}
        <Link to="/notifications" className="icon-btn">
          🔔
        </Link>

        {/* PROFILE */}
        <button 
          className="icon-btn"
          onClick={() => setShowProfile(!showProfile)}
        >
          👤
        </button>

        {showProfile && (
          <div className="dropdown">
            <div className="myLinks">
            <Link to="/profile">Account Info</Link>
            <Link to="/preferences">Preferences</Link>
            <Link to="/">Logout</Link>
         </div> </div>
        )}
      </div>
    </nav>
  );
}