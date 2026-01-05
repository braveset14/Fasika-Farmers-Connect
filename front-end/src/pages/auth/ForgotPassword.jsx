import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 4️⃣ Stage 4: POST /api/auth/forgot-password
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier })
      });

      if (res.ok) {
        setMessage('A reset code has been sent to your phone/email.');
        // Wait 2 seconds so they can read the message, then move to Stage 5
        setTimeout(() => navigate('/reset-password'), 2000);
      } else {
        setMessage('User not found. Please check the number or email.');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">4️⃣ Forgot Password</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your phone or email to receive a password reset code.
        </p>

        {message && (
          <div className={`p-3 rounded mb-4 text-center text-sm ${
            message.includes('sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone or Email</label>
            <input
              type="text"
              required
              placeholder="09... or example@mail.com"
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded-md font-bold hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? 'Sending Code...' : 'Send Reset Code'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-green-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;