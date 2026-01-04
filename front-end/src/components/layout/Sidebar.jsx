import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h3 className="sidebar-title">Farmer Panel</h3>

        <nav className="sidebar-nav">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/weather" onClick={onClose}>Weather</Link>
          <Link to="/market" onClick={onClose}>Market</Link>
          <Link to="/market/sell" onClick={onClose}>Sell Product</Link>
          <Link to="/advisory" onClick={onClose}>Advisory</Link>
          <Link to="/notifications" onClick={onClose}>Notifications</Link>
          <Link to="/help" onClick={onClose}>Help</Link>
        </nav>
      </aside>
    </>
  );
}
