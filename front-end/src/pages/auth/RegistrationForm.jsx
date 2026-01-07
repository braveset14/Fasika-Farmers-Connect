import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="auth-form">
      <h2>Complete Your Profile</h2>
      <input type="tel" placeholder="Phone Number (e.g. +251...)" />
      <input type="text" placeholder="Region/City" />
      <button>Submit Details</button>
    </div>
  );
};

export default RegistrationForm;