import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail } from '../../utils/validation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return alert("Invalid Email");
    // Mocking a successful login
    login({ name: "User", role: "farmer" }, "fake-token-123");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;