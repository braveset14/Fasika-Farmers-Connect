import React from 'react';
import {
    Smartphone,
    Globe,
    X,
    Shield,
    LogOut,
    LayoutGrid
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center animate-in fade-in zoom-in duration-300">
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-2">
                    <LogOut size={16} className="text-[#00df82]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#00df82]">Logout</span>
                </div>
                <h1 className="text-5xl font-black text-white mb-4">Ready to log out?</h1>
                <p className="text-gray-500 font-medium text-lg">Please choose an option to end your current session safely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {/* This Device */}
                <LogoutOption
                    title="This Device"
                    icon={Smartphone}
                    color="bg-[#00df82]"
                    iconColor="text-[#050a06]"
                    steps={[
                        { text: "Log out from this phone only.", bold: "this phone" },
                        { text: "Useful for your personal device.", bold: "personal device" },
                        { text: "Fast and secure exit.", bold: "Fast and secure" }
                    ]}
                    onClick={handleLogout}
                    active
                />

                {/* All Devices */}
                <LogoutOption
                    title="All Devices"
                    icon={Shield}
                    color="bg-[#1a231c]"
                    iconText="text-[#00df82]"
                    steps={[
                        { text: "Log out from everywhere.", bold: "everywhere" },
                        { text: "Best for shared or public phones.", bold: "shared or public" },
                        { text: "Secures your whole account.", bold: "whole account" }
                    ]}
                    onClick={handleLogout}
                />

                {/* Cancel */}
                <LogoutOption
                    title="Cancel & Stay"
                    icon={LayoutGrid}
                    color="bg-[#1a231c]"
                    iconText="text-[#00df82]"
                    steps={[
                        { text: "Do not log out now.", bold: "Do not" },
                        { text: "Return to your dashboard.", bold: "dashboard" },
                        { text: "Continue managing your crops.", bold: "managing your crops" }
                    ]}
                    onClick={() => navigate('/farmer/dashboard')}
                />

                {/* Security Tip */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-8">
                        <h3 className="text-xl font-black text-white">Security Tip</h3>
                        <div className="w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center text-[#00df82]">
                            <Shield size={20} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Step number="1" text="Never share your password." bold="password" />
                        <Step number="2" text="Always log out on public devices." bold="public devices" />
                        <Step number="3" text="Your data stays protected." bold="stays protected" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00df82]" />
                </div>
            </div>
        </div>
    );
};

const LogoutOption = ({ title, icon: Icon, color, iconColor, iconText, steps, onClick, active }) => (
    <button onClick={onClick} className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 text-left hover:border-[#00df82]/50 hover:bg-white/5 transition-all group relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-xl font-black text-white">{title}</h3>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} ${iconColor} ${iconText}`}>
                <Icon size={20} />
            </div>
        </div>
        <div className="space-y-4 relative z-10">
            {steps.map((step, i) => (
                <Step key={i} number={i + 1} text={step.text} bold={step.bold} />
            ))}
        </div>
        {active && <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#00df82]" />}
        {!active && <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-transparent group-hover:bg-[#00df82] transition-colors" />}
    </button>
);

const Step = ({ number, text, bold }) => {
    const parts = text.split(bold);
    return (
        <div className="flex items-start gap-4">
            <div className={`w-6 h-6 rounded-full font-black flex items-center justify-center text-[10px] shrink-0 mt-0.5 bg-[#050a06] text-[#00df82]`}>
                {number}
            </div>
            <p className="text-sm font-medium text-gray-400">
                {parts[0]}
                <span className="text-white font-bold">{bold}</span>
                {parts[1]}
            </p>
        </div>
    );
};

export default Logout;
