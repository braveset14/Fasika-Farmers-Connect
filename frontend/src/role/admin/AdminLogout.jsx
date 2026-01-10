import React from 'react';
import {
    Smartphone,
    Monitor,
    LogOut,
    Shield,
    X,
    Lock
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    const handleCancel = () => {
        navigate('/admin/dashboard');
    };

    return (
        <div className="max-w-4xl mx-auto pt-10 animate-in fade-in zoom-in duration-500">
            <div className="flex items-center gap-2 text-[#00df82] mb-4">
                <LogOut size={20} />
                <span className="font-black uppercase tracking-widest text-sm">Logout</span>
            </div>

            <h1 className="text-5xl font-black text-white mb-4">Ready to log out?</h1>
            <p className="text-gray-400 text-lg mb-12">Please choose an option to end your current session safely.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* This Device */}
                <div
                    onClick={handleLogout}
                    className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 hover:border-[#00df82]/50 transition-all group relative overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00df82]/5 rounded-bl-full group-hover:bg-[#00df82]/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="text-xl font-black text-white">This Device</h2>
                        <div className="bg-[#00df82]/20 p-2 rounded-lg text-[#00df82]">
                            <Smartphone size={24} />
                        </div>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">1</span>
                            <span className="text-gray-300 text-sm">Log out from <strong className="text-white">this phone</strong> only.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">2</span>
                            <span className="text-gray-300 text-sm">Useful for your <strong className="text-white">personal device</strong>.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">3</span>
                            <span className="text-gray-300 text-sm"><strong className="text-white">Fast and secure</strong> exit.</span>
                        </li>
                    </ul>

                    <div className="h-1.5 w-full bg-[#1a231c] rounded-full mt-8 overflow-hidden">
                        <div className="h-full bg-[#00df82] w-1/3 group-hover:w-full transition-all duration-700"></div>
                    </div>
                </div>

                {/* All Devices */}
                <div
                    onClick={handleLogout}
                    className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 hover:border-[#00df82]/50 transition-all group relative overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00df82]/5 rounded-bl-full group-hover:bg-[#00df82]/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="text-xl font-black text-white">All Devices</h2>
                        <div className="bg-[#00df82]/20 p-2 rounded-lg text-[#00df82]">
                            <Shield size={24} />
                        </div>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">1</span>
                            <span className="text-gray-300 text-sm">Log out from <strong className="text-white">everywhere</strong>.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">2</span>
                            <span className="text-gray-300 text-sm">Best for <strong className="text-white">shared or public</strong> phones.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#00df82] text-[#050a06] flex items-center justify-center text-xs font-black">3</span>
                            <span className="text-gray-300 text-sm">Secures your <strong className="text-white">whole account</strong>.</span>
                        </li>
                    </ul>

                    <div className="h-1.5 w-full bg-[#1a231c] rounded-full mt-8 overflow-hidden">
                        <div className="h-full bg-[#00df82] w-2/3 group-hover:w-full transition-all duration-700"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cancel */}
                <div
                    onClick={handleCancel}
                    className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 hover:bg-[#1a231c]/50 transition-all group cursor-pointer border-dashed"
                >
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-xl font-black text-white">Cancel & Stay</h2>
                        <div className="bg-[#1a231c] p-2 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                            <X size={24} />
                        </div>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#1a231c] text-gray-500 flex items-center justify-center text-xs font-black group-hover:bg-[#00df82] group-hover:text-[#050a06] transition-colors">1</span>
                            <span className="text-gray-400 text-sm font-medium">Do not log out now.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#1a231c] text-gray-500 flex items-center justify-center text-xs font-black group-hover:bg-[#00df82] group-hover:text-[#050a06] transition-colors">2</span>
                            <span className="text-gray-400 text-sm font-medium">Return to your <strong className="text-white">dashboard</strong>.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#1a231c] text-gray-500 flex items-center justify-center text-xs font-black group-hover:bg-[#00df82] group-hover:text-[#050a06] transition-colors">3</span>
                            <span className="text-gray-400 text-sm font-medium">Continue <strong className="text-white">managing platform</strong>.</span>
                        </li>
                    </ul>

                    <div className="h-1.5 w-full bg-[#1a231c] rounded-full mt-6 overflow-hidden">
                        <div className="h-full bg-gray-600 w-1/4 group-hover:w-full group-hover:bg-[#00df82] transition-all duration-700"></div>
                    </div>
                </div>

                {/* Security Tip */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 hover:border-[#00df82]/30 transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-xl font-black text-white">Security Tip</h2>
                        <div className="bg-[#00df82]/10 p-2 rounded-lg text-[#00df82]">
                            <Lock size={24} />
                        </div>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#00df82]/20 text-[#00df82] flex items-center justify-center text-xs font-black">1</span>
                            <span className="text-gray-300 text-sm font-medium">Never share your <strong className="text-white">password</strong>.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#00df82]/20 text-[#00df82] flex items-center justify-center text-xs font-black">2</span>
                            <span className="text-gray-300 text-sm font-medium">Always log out on <strong className="text-white">public devices</strong>.</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <span className="w-5 h-5 rounded-full bg-[#00df82]/20 text-[#00df82] flex items-center justify-center text-xs font-black">3</span>
                            <span className="text-gray-300 text-sm font-medium">Your data <strong className="text-white">stays protected</strong>.</span>
                        </li>
                    </ul>

                    <div className="h-1.5 w-full bg-[#1a231c] rounded-full mt-6 overflow-hidden">
                        <div className="h-full bg-[#00df82] w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogout;
