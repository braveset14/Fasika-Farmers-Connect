import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 3️⃣ Stage 3: POST /api/auth/login-user
  const handleLoginSubmit = async (formData) => {
    setLoading(true);
    setError('');
    
    try {
      // Connect to your backend API
      const response = await fetch('/api/auth/login-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Issue Access Token & Save User State
        login(result.user, result.token);
        
        // Stage 3 Requirement: Check for new device alert
        if (result.isNewDevice) {
          alert("New device detected! An email notification has been sent.");
        }

        navigate('/dashboard');
      } else {
        // Handle 401 (Invalid Credentials) or 403 (Locked)
        setError(result.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Server connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Branding */}
        <h1 className="text-center text-4xl font-extrabold text-green-700">Fasika</h1>
        <h2 className="mt-2 text-center text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Farmers Connect
        </h2>
        <p className="mt-4 text-center text-xl font-bold text-gray-900">
          3️⃣ Login to your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {/* Error Message Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
              {error}
            </div>
          )}

          {/* THE UI COMPONENT */}
          <LoginForm onSubmit={handleLoginSubmit} loading={loading} />

          {/* Footer Links (Stage 4 & Stage 1) */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Links</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link 
                to="/forgot-password" 
                className="text-center text-sm font-medium text-green-600 hover:text-green-500"
              >
                4️⃣ Forgot your password?
              </Link>
              
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-green-600 hover:text-green-500 underline">
                  1️⃣ Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;