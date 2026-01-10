import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail } from '../../utils/validation';
import { Store, Mail, Lock, ArrowRight } from 'lucide-react';
import { authService } from '../../api/services/auth.service';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return alert("Invalid Email");

    setLoading(true);
    try {
      const data = await authService.login({ email, password });

      // Store token and user data
      login(data, data.token);

      // Role-based redirection
      const path = data.role === 'admin' ? '/admin/dashboard' :
        data.role === 'buyer' ? '/buyer/dashboard' :
          '/farmer/dashboard';

      navigate(path);
    } catch (error) {
      alert(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-fasika-dark flex flex-col items-center justify-center px-6">
      <Link to="/" className="flex items-center gap-2 mb-10 group">
        <div className="w-10 h-10 bg-fasika-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <Store size={24} className="text-fasika-dark" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">Fasika</span>
      </Link>

      <div className="glass-card w-full max-w-md p-10 transform transition-all hover:border-fasika-accent/30">
        <h2 className="text-3xl font-black mb-2 text-white">Welcome back</h2>
        <p className="text-fasika-text-muted mb-8 text-sm">Enter your credentials to access your dashboard.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-fasika-text-muted uppercase tracking-widest mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-fasika-text-muted" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-fasika-dark border border-fasika-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-fasika-accent transition-colors"
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-fasika-text-muted cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-fasika-border bg-fasika-dark text-fasika-accent focus:ring-fasika-accent" />
              Remember me
            </label>
            <Link to="/forgot-password" size={18} className="text-fasika-accent font-bold hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-4 flex items-center justify-center gap-2"
          >
            {loading ? 'Signing in...' : 'Sign In'}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-fasika-text-muted">
          Don't have an account? {' '}
          <Link to="/register" className="text-fasika-accent font-bold hover:underline">Register now</Link>
        </p>
      </div>

      <p className="mt-10 text-xs text-fasika-text-muted">
        © 2024 Fasika Farmers’ Connect. All rights reserved.
      </p>
    </div>
  );
};

export default LoginForm;