import { useAuth } from '../context/AuthContext'; // Ensure there are TWO dots (..)
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-green-800 text-white flex flex-col p-5 shadow-xl">
      <h1 className="text-2xl font-bold mb-10 border-b border-green-700 pb-2">Fasika Connect</h1>
      
      <nav className="flex-1 flex flex-col gap-4">
        <Link to="/dashboard" className="hover:bg-green-700 p-2 rounded">Dashboard</Link>
        <Link to="/settings/password" className="hover:bg-green-700 p-2 rounded">Change Password</Link>
        <Link to="/settings/mfa" className="hover:bg-green-700 p-2 rounded">MFA Setup</Link>
      </nav>

      <div className="mt-auto pt-5 border-t border-green-700">
        <p className="text-sm text-green-200 mb-2">Logged in as: {user?.role}</p>
        <button 
          onClick={logout} 
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
