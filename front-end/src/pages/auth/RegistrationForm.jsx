import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    role: 'farmer', // Default role
    region: '',
    zone: '',
    woreda: '',
    kebele: ''
  });

  const regions = ["Addis Ababa", "Amhara", "Oromia", "Tigray", "Sidama", "SNNPR", "Somali", "Afar", "Benishangul-Gumuz", "Gambela"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Stage 1: POST /api/auth/register-user
      const res = await fetch('/api/auth/register-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        // Move to Stage 2: Verification
        navigate('/verify');
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
        {/* ROLE SELECTION (RADIO) */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
  <div className="flex gap-6">
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="role"
        value="farmer"
        checked={formData.role === 'farmer'}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="w-4 h-4 text-green-600 focus:ring-green-500"
      />
      <span className="ml-2 text-gray-700">Farmer</span>
    </label>

    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="role"
        value="buyer"
        checked={formData.role === 'buyer'}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="w-4 h-4 text-green-600 focus:ring-green-500"
      />
      <span className="ml-2 text-gray-700">Buyer</span>
    </label>
  </div>
</div>

          {/* Location Fields */}
          <div className="grid grid-cols-2 gap-2">
            <select required className="p-2 border rounded text-sm"
              onChange={e => setFormData({...formData, region: e.target.value})}>
              <option value="">Region</option>
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <input type="text" placeholder="Zone" required className="p-2 border rounded text-sm"
              onChange={e => setFormData({...formData, zone: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Woreda" required className="p-2 border rounded text-sm"
              onChange={e => setFormData({...formData, woreda: e.target.value})} />
            <input type="text" placeholder="Kebele" required className="p-2 border rounded text-sm"
              onChange={e => setFormData({...formData, kebele: e.target.value})} />
          </div>

          <input type="password" placeholder="Password" required className="w-full p-2 border rounded"
            onChange={e => setFormData({...formData, password: e.target.value})} />

          <button type="submit" disabled={loading} className="w-full bg-green-600 text-white p-3 rounded font-bold hover:bg-green-700 transition">
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;