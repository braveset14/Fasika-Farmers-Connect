import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, User, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const AdminRegister = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            // Redirect straight to admin dashboard after "registration"
            navigate('/admin/dashboard');
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#050a06] flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full"></div>

            <Link to="/" className="flex items-center gap-2 mb-10 group relative z-10 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={18} />
                <span className="text-sm font-bold">Back to Site</span>
            </Link>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-[#0d160f] border border-purple-500/20 rounded-3xl p-10 shadow-2xl shadow-purple-500/5">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/30">
                            <Shield size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white leading-tight">Admin Registration</h2>
                            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">Create Manager Account</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Internal Admin ID</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                <input
                                    type="text"
                                    placeholder="Fasika-ADM-001"
                                    className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Corporate Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                <input
                                    type="email"
                                    placeholder="corporate@fasika.com"
                                    className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Master Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20"
                        >
                            {loading ? 'Creating Admin...' : 'Request Authorization'}
                            {!loading && <ArrowRight size={18} />}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-[#1a231c] text-center">
                        <p className="text-sm text-gray-500 mb-4 font-medium italic">Already have admin rights?</p>
                        <Link to="/admin/login" className="text-purple-400 font-bold hover:underline underline-offset-4">
                            Access Admin Portal
                        </Link>
                    </div>
                </div>

                <p className="mt-10 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black">
                    Official Admin Registration • Node v2.4
                </p>
            </div>
        </div>
    );
};

export default AdminRegister;
