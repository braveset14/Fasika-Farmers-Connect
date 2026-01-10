import React from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const AdminHeader = () => {
    const { user } = useAuth();
    const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : 'A';

    return (
        <header className="flex justify-between items-center mb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Welcome back, {user?.name?.split(' ')[0] || 'Admin'}!</h1>
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                    <div className="flex items-center gap-1.5 text-[#00df82]">
                        <MapPin size={14} />
                        <span>Addis Ababa, HQ</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-[#1a231c] pl-4">
                        <Calendar size={14} />
                        <span>Today: 28 Dec 2025</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-[#0d160f] border border-[#1a231c] px-4 py-2 rounded-xl cursor-pointer hover:border-[#00df82]/30 transition-all">
                    <span className="text-sm font-bold text-white">Admin dashboard</span>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>

                <div className="w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center text-sm font-black text-[#00df82] border border-[#1a231c] hover:border-[#00df82]/30 cursor-pointer">
                    {firstLetter}
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
