import React from 'react';

const ResendCode = () => {
  const handleResend = () => alert("New code sent to your email!");
  return (
    <p>Didn't get a code? <span onClick={handleResend} style={{color: 'green', cursor: 'pointer'}}>Resend Code</span></p>
  );
};

export default ResendCode;