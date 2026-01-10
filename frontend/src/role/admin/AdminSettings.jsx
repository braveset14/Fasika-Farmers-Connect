import React from 'react';
import {
    User,
    MessageSquare,
    Database,
    Zap,
    Save,
    Check,
    RefreshCcw,
    Activity
} from 'lucide-react';

const AdminSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-white">Admin Settings</h1>
                <p className="text-gray-400 mt-1">Manage platform-wide configurations and system health.</p>
            </div>

            {/* User Management Settings */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-[#00df82]">
                    <User size={24} />
                    <h2 className="text-lg font-black text-white">User Management Settings</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-[#050a06] p-4 rounded-xl border border-[#1a231c]">
                        <div>
                            <p className="font-bold text-white text-sm">Auto-approve Farmers</p>
                            <p className="text-xs text-gray-500">Automatically verify new farmer registrations without manual review.</p>
                        </div>
                        <div className="w-12 h-6 bg-[#1a231c] rounded-full relative cursor-pointer">
                            <div className="w-4 h-4 rounded-full bg-gray-500 absolute left-1 top-1"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Max listings per farmer / week</label>
                            <div className="relative">
                                <input type="text" value="25" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm font-bold" readOnly />
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 font-medium">Listings</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Account Suspension Rules</label>
                            <select className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm font-bold appearance-none outline-none">
                                <option>Moderate (5 strikes)</option>
                                <option>Strict (3 strikes)</option>
                                <option>Lenient (10 strikes)</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm">
                            <Save size={16} /> Save Changes
                        </button>
                    </div>
                </div>
            </div>

            {/* Communication Settings */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-blue-500">
                    <MessageSquare size={24} />
                    <h2 className="text-lg font-black text-white">Communication Settings</h2>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-6">
                    <div className="bg-[#050a06] border border-[#1a231c] rounded-2xl p-4">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">SMS Provider</p>
                        <div className="flex justify-between items-center">
                            <span className="font-black text-white text-lg">Twilio API</span>
                            <span className="bg-[#00df82]/10 text-[#00df82] px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                                <Check size={10} strokeWidth={4} /> Connected
                            </span>
                        </div>
                    </div>
                    <div className="bg-[#050a06] border border-[#1a231c] rounded-2xl p-4">
                        <div className="flex justify-between items-baseline mb-2">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Daily Quota</p>
                            <p className="text-xs font-bold text-white">1,200 / 2,000 SMS</p>
                        </div>
                        <div className="h-2 w-full bg-[#1a231c] rounded-full overflow-hidden">
                            <div className="h-full bg-[#00df82] w-[60%]"></div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Critical Alert Delivery Frequency (mins)</p>
                    <div className="flex items-center gap-4">
                        <div className="flex-grow bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex items-center gap-3">
                            <Activity size={16} className="text-blue-500" />
                            <span className="font-bold text-white text-sm">15</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>

            {/* Data & Backup */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-purple-500">
                    <Database size={24} />
                    <h2 className="text-lg font-black text-white">Data & Backup</h2>
                </div>

                <div className="bg-[#050a06] border border-[#1a231c] rounded-xl p-4 flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#00df82]/10 flex items-center justify-center text-[#00df82]">
                        <Cloud size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm">Database backup status</p>
                        <p className="text-[10px] text-[#00df82] font-bold">Last backup: 4 hours ago</p>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Data Retention Policy</label>
                    <select className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm font-bold appearance-none outline-none">
                        <option>1 year for active user data</option>
                        <option>3 years (Compliance)</option>
                        <option>Indefinite</option>
                    </select>
                </div>

                <div className="flex justify-end gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#1a231c] text-white font-bold hover:bg-[#1a231c] transition-all text-sm">
                        <RefreshCcw size={16} /> Run backup now
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>

            {/* Platform Features */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-orange-500">
                    <Zap size={24} />
                    <h2 className="text-lg font-black text-white">Platform Features</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="flex justify-between items-center bg-[#050a06] p-4 rounded-xl border border-[#1a231c]">
                        <div>
                            <p className="font-bold text-white text-sm">Marketplace</p>
                            <p className="text-[10px] text-gray-500">Allow buying/selling listings.</p>
                        </div>
                        <div className="w-12 h-6 bg-[#00df82] rounded-full relative cursor-pointer">
                            <div className="w-4 h-4 rounded-full bg-white absolute right-1 top-1"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-[#050a06] p-4 rounded-xl border border-[#1a231c]">
                        <div>
                            <p className="font-bold text-white text-sm">Advisories</p>
                            <p className="text-[10px] text-gray-500">Push farming tips to users.</p>
                        </div>
                        <div className="w-12 h-6 bg-[#00df82] rounded-full relative cursor-pointer">
                            <div className="w-4 h-4 rounded-full bg-white absolute right-1 top-1"></div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Beta Feature Flags</label>
                        <span className="bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded text-[8px] font-black uppercase">Experimental</span>
                    </div>
                    <input type="text" value="weather_forecasting_v2" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-gray-400 font-mono text-xs" readOnly />
                </div>

                <div className="flex justify-end">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

// Mock Cloud Icon for Data & Backup section since lucide-react Cloud is CloudSun in import sometimes or similar naming conflicts
// Re-using CloudSun import but aliasing or just using Cloud if available
import { Cloud } from 'lucide-react';

export default AdminSettings;
