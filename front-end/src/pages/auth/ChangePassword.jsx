import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ChangePassword = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = async (e) => {
    e.preventDefault();
    setError('');
    
    // Client-side validation
    if (passwords.newPassword !== passwords.confirmPassword) {
      return setError("New passwords do not match.");
    }
    if (passwords.newPassword.length < 8) {
      return setError("New password must be at least 8 characters.");
    }

    setLoading(true);
    try {
      // 6️⃣ Stage 6: POST /api/auth/change-password
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({
          oldPassword: passwords.oldPassword,
          newPassword: passwords.newPassword
        })
      });

      if (res.ok) {
        setSuccess(true);
        // Requirement: Logout after password change for security
        setTimeout(() => {
          logout(); 
        }, 3000);
      } else {
        const data = await res.json();
        setError(data.message || "Failed to update password. Check your old password.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">6️⃣ Change Password</h2>
      <p className="text-gray-600 mb-6 text-sm">Update your security credentials. You will be logged out after a successful change.</p>

      {success ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
          Password updated successfully! Redirecting to login...
        </div>
      ) : (
        <form onSubmit={handleChange} className="space-y-4">
          {error && <div className="p-2 bg-red-100 text-red-700 text-xs rounded text-center">{error}</div>}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPasswords({...passwords, oldPassword: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white p-2 rounded-md font-bold hover:bg-green-800 disabled:bg-gray-400"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;