import React, { useState } from 'react';

const VerificationPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // [cite: 35]

  const handleVerify = async () => {
    // API Call: POST /api/auth/verify-user [cite: 37]
    const response = await fetch('/api/auth/verify-user', {
      method: 'POST',
      body: JSON.stringify({ code: otp.join("") })
    });
    if (response.ok) window.location.href = '/login'; // [cite: 38]
  };

  return (
    <div className="text-center p-10">
      <h2 className="text-xl font-bold mb-4">2️⃣ Verification</h2>
      <p>Enter the 6-digit code sent to your device.</p>
      <div className="flex justify-center gap-2 my-4">
        {otp.map((data, index) => (
          <input key={index} type="text" maxLength="1" className="w-10 h-12 border text-center text-xl" 
            onChange={e => {
              let newOtp = [...otp];
              newOtp[index] = e.target.value;
              setOtp(newOtp);
            }} 
          />
        ))}
      </div>
      <button onClick={handleVerify} className="bg-blue-600 text-white px-6 py-2 rounded">Verify</button>
    </div>
  );
};
export default VerificationPage;