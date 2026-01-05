import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleVerify = async () => {
    const res = await fetch('/api/auth/verify-user', {
      method: 'POST',
      body: JSON.stringify({ otp: otp.join("") })
    });
    if (res.ok) navigate('/login');
  };

  return (
    <div className="otp-container">
      <h2>2️⃣ Verification</h2>
      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input key={index} type="text" maxLength="1" 
            onChange={e => {
              let newOtp = [...otp];
              newOtp[index] = e.target.value;
              setOtp(newOtp);
              if (e.target.value && e.target.nextSibling) e.target.nextSibling.focus();
            }} 
          />
        ))}
      </div>
      <button onClick={handleVerify}>Verify Account</button>
    </div>
  );
};

export default VerificationPage;