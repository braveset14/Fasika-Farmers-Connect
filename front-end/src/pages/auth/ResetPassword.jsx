import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      setError("Please enter the full 6-digit code.");
      setLoading(false);
      return;
    }

    try {
      // 5️⃣ Stage 5: POST /api/auth/reset-password
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          otp: otpCode, 
          password: newPassword 
        })
      });

      if (res.ok) {
        alert("Password reset successful! Please login with your new password.");
        navigate('/login');
      } else {
        const data = await res.json();
        setError(data.message || "Invalid or expired code.");
      }
    } catch (err) {
      setError("Connection error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">5️⃣ Reset Password</h2>
        <p className="text-gray-600 text-center mb-6">Enter the code sent to you and choose a new password.</p>

        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded text-center">{error}</div>}

        <form onSubmit={handleReset} className="space-y-6">
          {/* OTP Input Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Verification Code</label>
            <div className="flex justify-center gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-10 h-12 border-2 rounded text-center text-xl font-bold focus:border-green-500 focus:outline-none"
                  value={data}
                  onChange={(e) => {
                    if (isNaN(e.target.value)) return;
                    let newOtp = [...otp];
                    newOtp[index] = e.target.value;
                    setOtp(newOtp);
                    // Move focus to next input
                    if (e.target.value && e.target.nextSibling) e.target.nextSibling.focus();
                  }}
                  onKeyDown={(e) => {
                    // Backspace to previous input
                    if (e.key === 'Backspace' && !otp[index] && index > 0) {
                      e.target.previousSibling.focus();
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* New Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              required
              placeholder="Minimum 8 characters"
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded-md font-bold hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Complete Reset'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;