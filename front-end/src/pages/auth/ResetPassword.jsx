import React from 'react';

const ResetPassword = () => {
  return (
    <div className="auth-form">
      <h2>New Password</h2>
      <input type="password" placeholder="New Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Save New Password</button>
    </div>
  );
};

export default ResetPassword;