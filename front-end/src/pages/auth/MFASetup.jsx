import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MFASetup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mfaType, setMfaType] = useState('SMS'); // Default
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleEnableMFA = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // 7️⃣ Stage 7: POST /api/auth/setup-mfa
      const res = await fetch('/api/auth/setup-mfa', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ mfaType })
      });

      if (res.ok) {
        setStatus({ type: 'success', message: `MFA via ${mfaType} enabled successfully!` });
        // Redirect back to settings or dashboard after 2 seconds
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        setStatus({ type: 'error', message: 'Failed to enable MFA. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Server connection error.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">7️⃣ MFA Setup</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Choose an additional layer of security for your account.
      </p>

      {status.message && (
        <div className={`mb-4 p-3 rounded text-sm text-center border ${
          status.type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
        }`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleEnableMFA} className="space-y-6">
        <div className="space-y-3">
          {/* SMS Option */}
          <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <input 
              type="radio" 
              name="mfa" 
              value="SMS" 
              checked={mfaType === 'SMS'}
              onChange={(e) => setMfaType(e.target.value)}
              className="h-4 w-4 text-green-600 focus:ring-green-500"
            />
            <span className="ml-3">
              <span className="block font-medium text-gray-900">SMS Verification</span>
              <span className="block text-xs text-gray-500">Receive a code on your mobile phone.</span>
            </span>
          </label>

          {/* Email Option */}
          <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <input 
              type="radio" 
              name="mfa" 
              value="Email" 
              checked={mfaType === 'Email'}
              onChange={(e) => setMfaType(e.target.value)}
              className="h-4 w-4 text-green-600 focus:ring-green-500"
            />
            <span className="ml-3">
              <span className="block font-medium text-gray-900">Email Verification</span>
              <span className="block text-xs text-gray-500">Receive a code in your inbox.</span>
            </span>
          </label>

          {/* Biometric Placeholder */}
          <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition opacity-60">
            <input 
              type="radio" 
              name="mfa" 
              value="Biometric" 
              disabled
              className="h-4 w-4 text-green-600"
            />
            <span className="ml-3">
              <span className="block font-medium text-gray-900">Biometric (Coming Soon)</span>
              <span className="block text-xs text-gray-500">Use Fingerprint or Face ID on mobile.</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white p-2 rounded-md font-bold hover:bg-green-800 disabled:bg-gray-400 transition shadow-sm"
        >
          {loading ? 'Activating...' : 'Enable Multi-Factor Auth'}
        </button>
      </form>
    </div>
  );
};

export default MFASetup;