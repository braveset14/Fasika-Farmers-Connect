import { Link } from 'react-router-dom';

const linksByRole = {
  farmer: [
    { name: "Home", path: "/" },
    { name: "Weather", path: "/weather" },
    { name: "Market", path: "/market" },
    { name: "Sell Product", path: "/market/sell" },
    { name: "Advisory", path: "/advisory" },
    { name: "Notifications", path: "/notifications" },
    { name: "Help", path: "/help" },
  ],
  buyer: [
    { name: "Dashboard", path: "/buyer/dashboard" },
    { name: "Market", path: "/buyer/product" },
    { name: "Weather", path: "/buyer/weather" },
    { name: "Notifications", path: "/notifications" },
  ],
  admin: [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Management", path: "/admin/management" },
    { name: "Products", path: "/admin/product" },
    { name: "Users", path: "/admin/user" },
    { name: "Weather", path: "/admin/weather" },
    { name: "Tips", path: "/admin/tips" },
  ],
};

export default function Sidebar({ role, isOpen, onClose }) {
  const links = linksByRole[role] || [];

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>✕</button>

        {/* Dynamic panel title */}
        <h3 className="sidebar-title">
          {(role ? role.charAt(0).toUpperCase() + role.slice(1) : "User")} Panel
        </h3>

        {/* Navigation links */}
        <nav className="sidebar-nav">
          {links.map(link => (
            <Link key={link.name} to={link.path} onClick={onClose}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
