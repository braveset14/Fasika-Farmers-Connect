import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <h1>Fasika Farmers Connect</h1>
      <p>Direct access to the market for every Ethiopian farmer.</p>
      <div className="btn-group">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Get Started</button>
      </div>
    </div>
  );
};

export default Landing;