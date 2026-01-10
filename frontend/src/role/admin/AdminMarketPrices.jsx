import React from 'react';
import {
    Download,
    Plus,
    Store,
    Wifi,
    Clock,
    Filter,
    ChevronDown,
    Play,
    Check,
    Edit2,
    X,
    AlertTriangle,
    SlidersHorizontal
} from 'lucide-react';

const AdminMarketPrices = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-white">Market Prices Management</h1>
                    <p className="text-gray-400 mt-1">Monitor and verify agricultural price data sources and updates.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1a231c] text-white font-bold hover:bg-[#1a231c] transition-all text-sm">
                        <Download size={16} /> Export Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm">
                        <Plus size={16} /> New Price
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Markets covered"
                    value="15"
                    sub="+2 new"
                    subColor="bg-[#00df82]/20 text-[#00df82]"
                    icon={<Store size={48} className="text-[#1a231c]" />}
                />
                <StatCard
                    title="Price sources"
                    value="8"
                    sub="active reporters"
                    subColor="text-[#00df82]"
                    isTextSub
                    icon={<Wifi size={48} className="text-[#1a231c]" />}
                />
                <StatCard
                    title="Last update"
                    value="2h ago"
                    sub="Bahir Dar Market"
                    subColor="text-gray-500"
                    isTextSub
                    icon={<Clock size={48} className="text-[#1a231c]" />}
                />
            </div>

            {/* Filters */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-[#00df82]">
                    <SlidersHorizontal size={18} />
                    <span className="font-bold text-sm">Filter Updates</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Crop</label>
                        <SelectInput label="All Crops" />
                    </div>
                    <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Market</label>
                        <SelectInput label="All Markets" />
                    </div>
                    <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Date Range</label>
                        <SelectInput label="mm/dd/yyyy" icon="calendar" />
                    </div>
                    <div>
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Status</label>
                        <SelectInput label="Pending" />
                    </div>
                    <div>
                        <button className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 text-sm h-[46px]">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-black text-white">Latest Price Submissions</h2>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#00df82]">
                        <div className="w-2 h-2 rounded-full bg-[#00df82] animate-pulse"></div> Live updates enabled
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                            <tr>
                                <th className="pb-4">Market</th>
                                <th className="pb-4">Crop</th>
                                <th className="pb-4">Reported Price</th>
                                <th className="pb-4">Source</th>
                                <th className="pb-4">Submitted</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-[#1a231c]">
                            <PriceRow
                                market="Bahir Dar"
                                crop="Teff (White)"
                                price="4,500 ETB"
                                source="Fasika Agent"
                                initial="F"
                                sourceColor="bg-blue-600"
                                time="10:00 AM"
                                status="Pending"
                            />
                            <PriceRow
                                market="Gondar"
                                crop="Wheat"
                                price="3,200 ETB"
                                source="Market Rep"
                                initial="M"
                                sourceColor="bg-purple-600"
                                time="09:45 AM"
                                status="Approved"
                            />
                            <PriceRow
                                market="Adama"
                                crop="Maize"
                                price="6,200 ETB"
                                priceTrend="up"
                                source="New Reporter"
                                initial="N"
                                sourceColor="bg-gray-600"
                                time="09:30 AM"
                                status="Review"
                            />
                            <PriceRow
                                market="Jimma"
                                crop="Coffee (Dried)"
                                price="12,500 ETB"
                                source="Fasika Agent"
                                initial="F"
                                sourceColor="bg-blue-600"
                                time="08:15 AM"
                                status="Pending"
                            />
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Add New Source */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <h2 className="text-lg font-black text-white mb-1">Add New Price Source</h2>
                    <p className="text-gray-500 text-sm mb-6">Register a new trusted reporter or market.</p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400">Market Name</label>
                            <input type="text" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00df82]" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400">Location</label>
                            <input type="text" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00df82]" />
                        </div>
                    </div>
                </div>

                {/* Anomalies */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-lg font-black text-white mb-1 flex items-center gap-2"><AlertTriangle className="text-orange-500" size={20} /> Price Anomalies</h2>
                            <p className="text-gray-500 text-sm">&gt;20% variance from 7-day average</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-wider border border-orange-500/20">2 Alerts</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center group">
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                                <div>
                                    <p className="text-sm font-bold text-white">Maize in Adama</p>
                                    <p className="text-xs text-red-400">6,208 ETB <span className="text-gray-500">(Avg: 4,800)</span></p>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 rounded-lg border border-[#1a231c] text-xs font-bold text-gray-300 hover:bg-[#1a231c] transition-all flex items-center gap-2">
                                <SlidersHorizontal size={12} /> Manual Override
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, sub, subColor, icon, isTextSub }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 relative overflow-hidden flex justify-between items-center group hover:border-[#00df82]/30 transition-all">
        <div>
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{title}</h3>
            <div className="text-4xl font-black text-white mb-1">{value}</div>
            {isTextSub ? (
                <div className={`text-xs font-bold ${subColor}`}>{sub}</div>
            ) : (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${subColor}`}>{sub}</span>
            )}
        </div>
        <div className="opacity-50 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    </div>
);

const SelectInput = ({ label }) => (
    <div className="relative">
        <button className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#050a06] border border-[#1a231c] text-white font-bold hover:border-gray-500 text-sm">
            <span className="truncate">{label}</span> <ChevronDown size={16} className="text-gray-500" />
        </button>
    </div>
);

const PriceRow = ({ market, crop, price, priceTrend, source, initial, sourceColor, time, status }) => (
    <tr className="hover:bg-[#1a231c]/30 transition-colors group">
        <td className="py-4 font-bold text-white">{market}</td>
        <td className="py-4 text-gray-300">{crop}</td>
        <td className="py-4 font-bold text-white flex items-center gap-1">
            {price}
            {priceTrend === 'up' && <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-red-500"></div>}
        </td>
        <td className="py-4">
            <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white ${sourceColor}`}>
                    {initial}
                </div>
                <span className="text-sm text-gray-400">{source}</span>
            </div>
        </td>
        <td className="py-4 text-gray-500 font-mono text-xs">{time}</td>
        <td className="py-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${status === 'Approved' ? 'border-[#00df82]/30 text-[#00df82] bg-[#00df82]/10' :
                status === 'Review' ? 'border-red-500/30 text-red-500 bg-red-500/10' :
                    'border-yellow-600/30 text-yellow-600 bg-yellow-600/10'
                }`}>
                {status}
            </span>
        </td>
        <td className="py-4 text-right">
            <div className="flex justify-end gap-2 text-gray-500 opacity-60 group-hover:opacity-100 transition-opacity">
                {status !== 'Approved' && <button className="hover:text-[#00df82]"><Check size={16} strokeWidth={3} /></button>}
                <button className="hover:text-white"><Edit2 size={16} /></button>
                {status !== 'Approved' && <button className="hover:text-red-500"><X size={16} strokeWidth={3} /></button>}
            </div>
        </td>
    </tr>
);

export default AdminMarketPrices;
