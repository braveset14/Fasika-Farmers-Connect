import React, { useState } from 'react';
import { Smartphone, Shield, X, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuyerLogout = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/buyer/dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <div className="flex items-center gap-2 mb-2 text-[#00df82]">
                    <div className="w-4 h-4 border-l-2 border-b-2 border-[#00df82] transform rotate-45"></div> {/* Logout icon mock */}
                    <span className="text-xs font-black uppercase tracking-widest">Logout</span>
                </div>
                <h1 className="text-4xl font-black text-white mb-3">Ready to log out?</h1>
                <p className="text-gray-400 text-lg">Please choose an option to end your current session safely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LogoutCard
                    title="This Device"
                    icon={<Smartphone size={24} fill="#00df82" className="text-[#050a06]" />}
                    iconBg="bg-[#00df82]"
                    points={[
                        "Log out from this phone only.",
                        "Useful for your personal device.",
                        "Fast and secure exit."
                    ]}
                    onClick={handleLogout}
                    primary
                />
                <LogoutCard
                    title="All Devices"
                    icon={<Shield size={24} fill="#00df82" className="text-[#050a06]" />}
                    iconBg="bg-[#050a06] border border-[#00df82]"
                    iconColor="text-[#00df82]"
                    points={[
                        "Log out from everywhere.",
                        "Best for shared or public phones.",
                        "Secures your whole account."
                    ]}
                    onClick={handleLogout}
                />
                <LogoutCard
                    title="Cancel & Stay"
                    icon={<div className="grid grid-cols-2 gap-0.5 w-5 h-5"><div className="bg-[#00df82] rounded-[1px]"></div><div className="bg-[#00df82] rounded-[1px]"></div><div className="bg-[#00df82] rounded-[1px]"></div><div className="bg-[#00df82] rounded-[1px]"></div></div>}
                    iconBg="bg-[#1a231c]"
                    points={[
                        "Do not log out now.",
                        "Return to your dashboard.",
                        "Continue managing your crops."
                    ]}
                    onClick={handleCancel}
                />
                <LogoutCard
                    title="Security Tip"
                    icon={<Lock size={20} fill="#050a06" className="text-[#050a06]" />}
                    iconBg="bg-[#00df82]"
                    points={[
                        "Never share your password.",
                        "Always log out on public devices.",
                        "Your data stays protected."
                    ]}
                    isInfo
                />
            </div>
        </div>
    );
};

const LogoutCard = ({ title, icon, iconBg, iconColor, points, primary, onClick, isInfo }) => (
    <div
        onClick={onClick}
        className={`bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 relative overflow-hidden group transition-all h-full ${onClick ? 'cursor-pointer hover:border-[#00df82]/50 hover:bg-[#0d160f]/80' : ''}`}
    >
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
            <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center ${iconColor}`}>
                {icon}
            </div>
        </div>

        <div className="space-y-4 relative z-10">
            {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                    <div className={`w-5 h-5 rounded-full ${isInfo ? '' : 'bg-[#00df82]/10'} text-[#00df82] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        {isInfo ? idx + 1 : idx + 1}
                    </div>
                    <p className={`text-sm font-bold ${isInfo ? 'text-gray-300' : 'text-gray-300'} ${idx === 1 && !isInfo ? 'text-white' : ''}`}>
                        {/* Highlight bold words logic simplified for speed */}
                        {point.split(' ').map((word, i) => (
                            <span key={i} className={['this', 'personal', 'Fast', 'everywhere.', 'shared', 'whole', 'password.', 'public', 'stays', 'not', 'dashboard.', 'managing', 'protected.', 'exit.', 'account.', 'crops.'].includes(word.replace(/[.,]/g, '')) ? 'text-white' : ''}>{word} </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>

        {/* Progress bar line at bottom */}
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#1a231c] rounded-full overflow-hidden">
            <div className={`h-full bg-[#00df82] rounded-full ${primary ? 'w-1/3' : isInfo ? 'w-full' : 'w-1/2'}`}></div>
        </div>
    </div>
);

export default BuyerLogout;
