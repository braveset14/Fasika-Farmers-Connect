import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-form">
      <h2>Verify Your Email</h2>
      <p>Enter the 6-digit code we sent you.</p>
      <input type="text" maxLength="6" placeholder="000000" style={{textAlign: 'center', fontSize: '24px'}} />
      <button onClick={() => navigate('/login')}>Verify & Continue</button>
    </div>
  );
};

export default VerifyEmail;