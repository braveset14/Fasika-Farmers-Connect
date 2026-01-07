import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="auth-form">
      <h2>Reset Password</h2>
      <p>Enter email to get a reset link.</p>
      <input type="email" placeholder="Email" />
      <button>Send Link</button>
    </div>
  );
};

export default ForgotPassword;