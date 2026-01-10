import React from 'react';
import {
    Cloud,
    Wifi,
    Database,
    MoreHorizontal,
    RefreshCcw,
    Plus,
    Edit2,
    Play
} from 'lucide-react';

const AdminAdvisoryWeather = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-white">Advisory & Weather Data</h1>
                    <p className="text-gray-400 mt-1">Manage external data streams, automated rules, and manual alerts.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d160f] border border-[#1a231c] text-[#00df82] text-xs font-black uppercase tracking-widest">
                    <Wifi size={14} /> System Online
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weather API Status */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-xl font-black text-white">Weather API Status</h2>
                            <p className="text-sm text-gray-500">OpenWeatherMap Connection</p>
                        </div>
                        <span className="bg-[#00df82]/10 text-[#00df82] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00df82] animate-pulse"></div> Connected
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#1a231c]/50 p-4 rounded-xl">
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Last Update</p>
                            <p className="text-white font-bold">5 min ago</p>
                        </div>
                        <div className="bg-[#1a231c]/50 p-4 rounded-xl">
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Data Freshness</p>
                            <p className="text-white font-bold">Dec 28, 10:15 AM</p>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-xs font-bold text-white">Recent Log</p>
                            <p className="text-[10px] text-gray-500">Last 3 entries</p>
                        </div>
                        <div className="bg-[#050a06] border border-[#1a231c] rounded-xl p-4 font-mono text-[10px] space-y-2 text-gray-400">
                            <div className="flex gap-2"><span className="text-gray-600">10:15:02</span> <span className="text-[#00df82]">GET /weather/region-4 200 OK</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">10:00:01</span> <span className="text-[#00df82]">GET /weather/region-4 200 OK</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">09:45:11</span> <span className="text-red-500">ERR /weather/region-4 502 Bad Gateway</span></div>
                        </div>
                    </div>

                    <button className="w-full mt-6 py-4 rounded-xl bg-[#1a231c] border border-[#1a231c] text-white font-bold hover:bg-[#2a352c] transition-all flex items-center justify-center gap-2">
                        <RefreshCcw size={16} /> Test Connection
                    </button>
                </div>

                {/* Alert Delivery Stats */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h2 className="text-xl font-black text-white">Alert Delivery Stats</h2>
                            <p className="text-sm text-gray-500">Broadcast performance today</p>
                        </div>
                        <MoreHorizontal className="text-gray-500" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#1a231c] p-4 rounded-xl text-center">
                            <div className="text-2xl font-black text-white">342</div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Alerts Sent</p>
                        </div>
                        <div className="bg-[#1a231c] p-4 rounded-xl text-center border-b-2 border-[#00df82]">
                            <div className="text-2xl font-black text-[#00df82]">98%</div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Success Rate</p>
                        </div>
                        <div className="bg-[#1a231c] p-4 rounded-xl text-center border-b-2 border-red-500">
                            <div className="text-2xl font-black text-red-500">7</div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase">Failed</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-white mb-4">Recent Alerts</p>
                        <table className="w-full text-left text-sm">
                            <thead className="text-[9px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                                <tr>
                                    <th className="pb-3">Type</th>
                                    <th className="pb-3 text-right">Reached</th>
                                    <th className="pb-3 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1a231c]">
                                <tr>
                                    <td className="py-3 font-bold text-white">Pest Alert: Locust</td>
                                    <td className="py-3 text-right text-gray-400">128 Farmers</td>
                                    <td className="py-3 text-right"><span className="bg-[#00df82]/10 text-[#00df82] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Sent</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-bold text-white">Heavy Rain Warning</td>
                                    <td className="py-3 text-right text-gray-400">214 Farmers</td>
                                    <td className="py-3 text-right"><span className="bg-[#00df82]/10 text-[#00df82] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Sent</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-bold text-white">Market Price Update</td>
                                    <td className="py-3 text-right text-gray-400">0 Farmers</td>
                                    <td className="py-3 text-right"><span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Failed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Advisory Rules Engine */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-xl font-black text-white">Advisory Rules Engine</h2>
                        <p className="text-sm text-gray-500">Automated logic triggers based on weather thresholds</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a231c] border border-[#1a231c] text-white font-bold text-sm hover:bg-[#2a352c] transition-all">
                        <Plus size={16} /> Add New Rule
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#050a06] text-[10px] font-black text-gray-500 uppercase tracking-widest">
                            <tr>
                                <th className="p-4 rounded-l-xl">Crop</th>
                                <th className="p-4">Rule Type</th>
                                <th className="p-4">Condition Threshold</th>
                                <th className="p-4">Action</th>
                                <th className="p-4">Last Modified</th>
                                <th className="p-4 text-right rounded-r-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-[#1a231c]">
                            <RuleRow
                                crop="Maize"
                                icon="🌽"
                                iconColor="text-yellow-500"
                                bg="bg-yellow-500/10"
                                type="Irrigation"
                                condition="Temp > 28°C & Humidity < 40%"
                                action='Advise "Irrigate Evening"'
                                actionColor="text-blue-400"
                                dotColor="bg-blue-400"
                                date="Dec 20, 2023"
                            />
                            <RuleRow
                                crop="Teff"
                                icon="🌾"
                                iconColor="text-[#00df82]"
                                bg="bg-[#00df82]/10"
                                type="Planting"
                                condition="Rainfall > 50mm (3 days)"
                                action='Advise "Safe to Plant"'
                                actionColor="text-[#00df82]"
                                dotColor="bg-[#00df82]"
                                date="Nov 15, 2023"
                            />
                            <RuleRow
                                crop="Coffee"
                                icon="☕"
                                iconColor="text-red-400"
                                bg="bg-red-400/10"
                                type="Pest Alert"
                                condition="Temp > 22°C & Humidity > 80%"
                                action='Warn "Fungal Risk High"'
                                actionColor="text-white"
                                dotColor="bg-red-500"
                                date="Dec 01, 2023"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const RuleRow = ({ crop, icon, iconColor, bg, type, condition, action, actionColor, dotColor, date }) => (
    <tr className="hover:bg-[#1a231c]/30 transition-colors">
        <td className="p-4">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center ${iconColor} font-bold`}>{icon}</div>
                <span className="font-bold text-white">{crop}</span>
            </div>
        </td>
        <td className="p-4 text-gray-400">{type}</td>
        <td className="p-4">
            <div className="bg-[#050a06] px-3 py-1.5 rounded-lg border border-[#1a231c] text-xs font-mono text-gray-300">
                {condition}
            </div>
        </td>
        <td className="p-4">
            <div className={`flex items-center gap-2 font-bold ${actionColor}`}>
                <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
                {action}
            </div>
        </td>
        <td className="p-4 text-gray-500 text-xs font-medium">{date}</td>
        <td className="p-4 text-right">
            <div className="flex justify-end gap-2 text-gray-500">
                <button className="hover:text-white transition-colors"><Play size={14} /></button>
                <button className="hover:text-white transition-colors"><Edit2 size={14} /></button>
            </div>
        </td>
    </tr>
);

export default AdminAdvisoryWeather;
