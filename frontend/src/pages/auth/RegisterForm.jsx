import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Store, User, Mail, Shield, ArrowRight, Lock } from 'lucide-react';
import { authService } from '../../api/services/auth.service';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState('farmer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (role === 'farmer' && !location) {
      setError('Farm location is required for farmers');
      return;
    }

    setLoading(true);
    
    try {
      // Call real backend API for registration
      console.log('Registering user:', { name, email, role, location });
      
      const response = await authService.register({
        name,
        email,
        password,
        role,
        location: role === 'farmer' ? location : undefined
      });

      console.log('Registration response:', response);
      
      // Check if registration was successful
      if (response.data.success) {
        // Registration successful - now auto-login
        console.log('Registration successful, attempting auto-login...');
        
        try {
          // Auto-login with the same credentials
          const loginResponse = await authService.login({ 
            email, 
            password 
          });
          
          console.log('Auto-login response:', loginResponse);
          
          if (loginResponse.data.success) {
            const { user } = loginResponse.data;
            
            console.log('Auto-login successful, user:', user);
            
            // Store user data in auth context
            login(user);
            
            // Role-based redirection
            let redirectPath = '/';
            switch (user?.role || role) {
              case 'admin':
                redirectPath = '/admin/dashboard';
                break;
              case 'buyer':
                redirectPath = '/buyer/dashboard';
                break;
              case 'farmer':
                redirectPath = '/farmer/dashboard';
                break;
              default:
                redirectPath = '/dashboard';
            }
            
            console.log('Redirecting to:', redirectPath);
            navigate(redirectPath);
          } else {
            setError('Registration successful but auto-login failed: ' + (loginResponse.data.message || 'Please login manually.'));
          }
        } catch (loginError) {
          console.error('Auto-login failed:', loginError);
          setError('Registration successful! Please login with your credentials.');
        }
      } else {
        // Registration failed
        setError(response.data.message || 'Registration failed');
      }
      
    } catch (error) {
      console.error('Registration failed:', error);
      
      // Handle different error formats
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.data?.errors) {
        // Handle validation errors
        const errorMsg = error.response.data.errors.map(err => err.msg).join(', ');
        setError(errorMsg);
      } else if (error.response?.data) {
        // Handle other backend errors
        setError(error.response.data || 'Registration failed');
      } else if (error.request) {
        // Network error
        setError('Network error. Please check your connection.');
      } else {
        setError(error.message || 'Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-fasika-dark flex flex-col items-center justify-center px-6 py-20">
      <Link to="/" className="flex items-center gap-2 mb-10 group">
        <div className="w-10 h-10 bg-fasika-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <Store size={24} className="text-fasika-dark" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">Fasika</span>
      </Link>

      <div className="glass-card w-full max-w-md p-10 transform transition-all hover:border-fasika-accent/30">
        <h2 className="text-3xl font-black mb-2 text-white">Create Account</h2>
        <p className="text-fasika-text-muted mb-8 text-sm">Join the digital agriculture revolution today.</p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
              Registration Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole('farmer')}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${role === 'farmer'
                  ? 'bg-fasika-accent/10 border-fasika-accent text-fasika-accent'
                  : 'bg-fasika-dark border-fasika-border text-fasika-text-muted grayscale hover:grayscale-0'
                  }`}
              >
                <Store size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Farmer</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('buyer')}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${role === 'buyer'
                  ? 'bg-fasika-accent/10 border-fasika-accent text-fasika-accent'
                  : 'bg-fasika-dark border-fasika-border text-fasika-text-muted grayscale hover:grayscale-0'
                  }`}
              >
                <User size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Buyer</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${role === 'admin'
                  ? 'bg-purple-500/10 border-purple-500 text-purple-400'
                  : 'bg-fasika-dark border-fasika-border text-fasika-text-muted grayscale hover:grayscale-0'
                  }`}
              >
                <Shield size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Admin</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="text"
                placeholder="Abebe Bikila"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="password"
                placeholder="Create a secure password"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <p className="mt-1 text-xs text-fasika-text-muted">Minimum 6 characters</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </div>

          {role === 'farmer' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-500">
              <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">
                Farm Location
              </label>
              <div className="relative">
                <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
                <input
                  type="text"
                  placeholder="e.g. Arsi, Oromia"
                  className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required={role === 'farmer'}
                />
              </div>
            </div>
          )}

          <div className="flex items-start gap-3 mt-4">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 rounded border-fasika-border bg-fasika-dark text-fasika-accent focus:ring-fasika-accent" 
              required 
            />
            <p className="text-xs text-fasika-text-muted leading-tight">
              I agree to the <Link to="/terms" className="text-fasika-accent font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-fasika-accent font-bold hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Create Account'}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-fasika-text-muted">
          Already have an account? {' '}
          <Link to="/login" className="text-fasika-accent font-bold hover:underline">Sign in</Link>
        </p>
      </div>

      <p className="mt-10 text-xs text-fasika-text-muted">
        © 2024 Fasika Farmers' Connect. All rights reserved.
      </p>
    </div>
  );
};

export default RegisterForm;
