const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState('');

  const handleResetRequest = async () => {
    // API Call: POST /api/auth/forgot-password [cite: 70]
    await fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ identifier })
    });
    alert("Reset code sent!");
  };

  return (
    <div className="p-10">
      <h2>4️⃣ Forgot Password</h2>
      <input type="text" placeholder="Phone or Email" onChange={e => setIdentifier(e.target.value)} className="border p-2 w-full my-4" />
      <button onClick={handleResetRequest} className="bg-green-600 text-white p-2">Send Code</button>
    </div>
  );
};