import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('farmer');

  return (
    <form className="auth-form" onSubmit={(e) => { e.preventDefault(); localStorage.setItem("pendingRole", role); navigate('/verify-email'); }}>
      <h2>Create Account</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="farmer">I am a Farmer</option>
        <option value="buyer">I am a Buyer</option>
      </select>
      <button type="submit">Next</button>
    </form>
  );
};

export default RegisterForm;