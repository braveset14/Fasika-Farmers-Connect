import React, { useState } from 'react';
// Note: We move the logic to the LoginPage, so we pass onSubmit as a prop
const LoginForm = ({ onSubmit, loading }) => {
  const [identifier, setIdentifier] = useState(''); // Handles both Email or Phone
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: Check if it's a 10-digit Ethiopian phone or a valid email
    const isPhone = /^[0-9]{10}$/.test(identifier);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

    if (!isPhone && !isEmail) {
      return alert("Please enter a valid Phone Number (09...) or Email");
    }

    // Pass the clean data to the parent (LoginPage)
    onSubmit({ identifier, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form space-y-4">
      <div className="input-group">
        <label className="block text-sm font-medium text-gray-700">Phone or Email</label>
        <input 
          type="text" 
          placeholder="09... or example@mail.com" 
          value={identifier}
          onChange={e => setIdentifier(e.target.value)} 
          required 
          className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="input-group">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={e => setPassword(e.target.value)} 
          required 
          className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className={`w-full p-2 rounded text-white font-bold transition ${
          loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {loading ? 'Authenticating...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;