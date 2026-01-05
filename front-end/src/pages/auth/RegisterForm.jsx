import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', password: '', 
    role: 'Farmer', region: '', zone: '', woreda: '', 
    kebele: '', verifyMethod: 'SMS'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API Call: POST /api/auth/register-user [cite: 24]
    try {
      const res = await fetch('/api/auth/register-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.status === 201) navigate('/verify'); // [cite: 25]
    } catch (err) { console.error("Registration failed"); }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1️⃣ Registration</h2>
      <input type="text" placeholder="Full Name (as on ID)" required onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full mb-3 p-2 border" /> {/* [cite: 6, 7] */}
      <input type="text" placeholder="Phone (09XXXXXXXX)" required onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full mb-3 p-2 border" /> {/* [cite: 8, 9] */}
      
      <div className="flex gap-4 mb-3"> {/* [cite: 15] */}
        <label><input type="radio" name="role" value="Farmer" defaultChecked onChange={e => setFormData({...formData, role: e.target.value})}/> Farmer</label>
        <label><input type="radio" name="role" value="Buyer" onChange={e => setFormData({...formData, role: e.target.value})}/> Buyer</label>
      </div>

      <select required className="w-full mb-3 p-2 border" onChange={e => setFormData({...formData, region: e.target.value})}>
        <option value="">Select Region</option> {/* [cite: 16] */}
        <option value="Addis Ababa">Addis Ababa</option>
        <option value="Amhara">Amhara</option>
      </select>

      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default RegistrationForm;