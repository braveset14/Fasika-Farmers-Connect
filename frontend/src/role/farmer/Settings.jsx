import React, { useState } from 'react';
import {
    Bell,
    Globe,
    Type,
    Lock,
    Info,
    ChevronDown
} from 'lucide-react';

const Settings = () => {
    const [notifications, setNotifications] = useState({
        listings: true,
        price: false,
        messages: false
    });
    const [largeText, setLargeText] = useState(false);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-extrabold text-white">Settings</h1>
                <p className="text-xs text-gray-500 mt-1 font-medium">Manage your preferences and account security.</p>
            </div>

            {/* Notifications Section */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#1a231c] flex items-center justify-center">
                        <Bell size={20} className="text-[#00df82]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">Notifications</h3>
                </div>

                <div className="space-y-8">
                    <ToggleRow
                        title="New listings for my preferred crops"
                        desc="Get alerted when farmers post what you need."
                        checked={notifications.listings}
                        onChange={() => setNotifications({ ...notifications, listings: !notifications.listings })}
                    />
                    <ToggleRow
                        title="Price change alerts"
                        desc="Know immediately when prices drop."
                        checked={notifications.price}
                        onChange={() => setNotifications({ ...notifications, price: !notifications.price })}
                    />
                    <div className="flex justify-between items-center opacity-50">
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-white">Messages / contact replies</h4>
                                <span className="text-[8px] font-black uppercase tracking-widest bg-[#1a231c] text-gray-400 px-2 py-0.5 rounded-full border border-gray-700/50">Coming Soon</span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium mt-1">Notifications for direct messages.</p>
                        </div>
                        <div className="w-12 h-6 bg-[#1a231c] rounded-full p-1 cursor-not-allowed">
                            <div className="w-4 h-4 bg-gray-600 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Language & Display Section */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#1a231c] flex items-center justify-center">
                        <Globe size={20} className="text-[#00df82]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">Language & display</h3>
                </div>

                <div className="space-y-8">
                    <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-3">Language</label>
                        <div className="relative">
                            <select className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl appearance-none outline-none focus:border-[#00df82]/50 transition-all font-bold">
                                <option>English (Default)</option>
                                <option>Amharic</option>
                                <option>Oromiffa</option>
                                <option>Tigrinya</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={16} />
                        </div>
                        <p className="text-[10px] items-center font-bold text-gray-500 mt-3 flex gap-1">
                            More regional languages will be added soon.
                        </p>
                    </div>

                    <div className="border-t border-[#1a231c] pt-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Type size={20} className="text-[#00df82]" />
                                <div>
                                    <h4 className="text-sm font-bold text-white">Use large text</h4>
                                    <p className="text-xs text-gray-500 font-medium mt-1">Make words bigger and easier to read.</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setLargeText(!largeText)}
                                className={`w-12 h-6 rounded-full p-1 transition-colors ${largeText ? 'bg-[#00df82]' : 'bg-[#1a231c]'}`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${largeText ? 'translate-x-6' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#1a231c] flex items-center justify-center">
                        <Lock size={20} className="text-[#00df82]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">Change password</h3>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Current password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#00df82]/50 transition-all" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">New password</label>
                            <input type="password" placeholder="Min. 8 chars" className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#00df82]/50 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Confirm new password</label>
                            <input type="password" placeholder="Repeat password" className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#00df82]/50 transition-all" />
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button className="px-8 py-3 bg-[#00df82] text-[#050a06] text-sm font-black rounded-xl hover:bg-[#00df82]/90 transition-all shadow-lg">
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ToggleRow = ({ title, desc, checked, onChange }) => (
    <div className="flex justify-between items-center group">
        <div>
            <h4 className="text-sm font-bold text-white group-hover:text-[#00df82] transition-colors">{title}</h4>
            <p className="text-xs text-gray-500 font-medium mt-1">{desc}</p>
        </div>
        <button
            onClick={onChange}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${checked ? 'bg-[#00df82]' : 'bg-[#1a231c]'}`}
        >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : ''}`} />
        </button>
    </div>
);

export default Settings;
