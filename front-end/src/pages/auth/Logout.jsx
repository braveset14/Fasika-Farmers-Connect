import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios"; // ✅ Using your custom instance

const Logout = () => {
  const navigate = useNavigate();

  // 1️⃣ LOGOUT FROM THIS DEVICE
  const handleLogout = async () => {
    try {
      // Using relative path because 'api' instance has the baseURL
      const res = await api.post("/auth/logout-single", {}, { withCredentials: true });

      if (res.status === 200) {
        // Clear all items you set during login
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        localStorage.removeItem("isAuthenticated");
        
        // Optional: Clear everything if you want a total reset
        // localStorage.clear(); 

        navigate("/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
      // Force logout on frontend even if server is unreachable
      localStorage.clear();
      navigate("/login");
    }
  };

  // 2️⃣ TERMINATE ALL OTHER SESSIONS (Security Feature)
  const handleTerminateOthers = async () => {
    try {
      const res = await api.post("/auth/terminate-others", {}, { withCredentials: true });
      if (res.data.success) {
        alert("Success: All other devices have been logged out.");
      }
    } catch (err) {
      alert("Error: Could not terminate other sessions.");
    }
  };

  return (
    <div className="auth-actions-group">
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      
      <button onClick={handleTerminateOthers} className="security-btn">
        Log out of other devices
      </button>

      <style>{`
        .auth-actions-group { display: flex; gap: 10px; }
        .logout-btn { 
          padding: 10px 20px; 
          background: #c62828; 
          color: white; 
          border-radius: 8px; 
          border: none; 
          cursor: pointer;
          font-weight: 600;
        }
        .security-btn { 
          padding: 10px 20px; 
          background: #1b4d3e; 
          color: white; 
          border-radius: 8px; 
          border: none; 
          cursor: pointer;
          font-weight: 600;
        }
        .logout-btn:hover { background: #b71c1c; }
      `}</style>
    </div>
  );
};

export default Logout;
