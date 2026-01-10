import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, ArrowDownRight, Minus, Calendar, Download } from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
    ReferenceDot
} from 'recharts';

const trendData = [
    { day: 'Mon', price: 3080 },
    { day: 'Tue', price: 3120 },
    { day: 'Wed', price: 3150 },
    { day: 'Thu', price: 3100 },
    { day: 'Fri', price: 3180 },
    { day: 'Sat', price: 3220 },
    { day: 'Sun', price: 3250 },
];

const BuyerMarketPrices = () => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-white mb-2">Market prices overview</h1>
                <p className="text-gray-400">Compare prices across markets to plan your purchases.</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-3 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Crop</label>
                        <div className="bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex justify-between items-center text-white text-sm cursor-pointer hover:border-[#00df82]/30 transition-all">
                            <span className="font-bold">Teff (White)</span>
                            <ChevronDown size={14} className="text-gray-500" />
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Market</label>
                        <div className="bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex justify-between items-center text-white text-sm cursor-pointer hover:border-[#00df82]/30 transition-all">
                            <span className="font-bold">All Markets</span>
                            <ChevronDown size={14} className="text-gray-500" />
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Period</label>
                        <div className="bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex justify-between items-center text-white text-sm cursor-pointer hover:border-[#00df82]/30 transition-all">
                            <span className="font-bold">Today</span>
                            <ChevronDown size={14} className="text-gray-500" />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <button className="w-full bg-[#00df82] text-[#050a06] py-3.5 rounded-xl font-black text-sm hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20">
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <PriceStatCard
                    label="Average price today"
                    value="3,180 ETB"
                    unit="/qtl"
                    subtext="Teff (White)"
                    icon={<div className="w-4 h-3 border-2 border-gray-500 rounded-sm mb-1"></div>}
                />
                <PriceStatCard
                    label="Highest market"
                    value="Addis Ababa"
                    highlight="3,250 ETB"
                    highlightColor="text-[#00df82]"
                    icon={<ArrowUpRight size={16} className="text-[#00df82] mb-1" />}
                />
                <PriceStatCard
                    label="Lowest market"
                    value="Regional (Adama)"
                    highlight="3,050 ETB"
                    highlightColor="text-[#00df82]"
                    icon={<ArrowDownRight size={16} className="text-[#00df82] mb-1" />}
                />
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
                        <Calendar size={14} /> Change vs last week
                    </div>
                    <div className="flex items-end gap-2 mb-1">
                        <ArrowUpRight size={24} className="text-[#00df82]" />
                        <span className="text-3xl font-black text-white">4%</span>
                    </div>
                    <p className="text-xs font-medium text-gray-500">Price Increasing</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Detailed Breakdown Table */}
                <div className="lg:col-span-5 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-extrabold text-white">Detailed Breakdown</h3>
                        <button className="flex items-center gap-1 text-xs font-bold text-[#00df82]">
                            Export <Download size={12} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-[9px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                                <tr>
                                    <th className="pb-3 pl-2">Market</th>
                                    <th className="pb-3 text-center">Crop</th>
                                    <th className="pb-3 text-right">Today</th>
                                    <th className="pb-3 text-right">Last Week</th>
                                    <th className="pb-3 text-right pr-2">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-bold text-white">
                                <BreakdownRow market="Addis Ababa" crop="Teff" today="3,250" last="3,100" trend="+4.8%" trendType="up" />
                                <BreakdownRow market="Adama" crop="Teff" today="3,180" last="3,150" trend="+0.9%" trendType="up" />
                                <BreakdownRow market="Bahir Dar" crop="Teff" today="3,080" last="3,100" trend="-0.6%" trendType="down" />
                                <BreakdownRow market="Hawassa" crop="Teff" today="3,120" last="3,050" trend="+2.3%" trendType="up" />
                                <BreakdownRow market="Jimma" crop="Teff" today="3,050" last="3,050" trend=" - 0%" trendType="flat" />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Price Trend Chart */}
                <div className="lg:col-span-7 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-lg font-extrabold text-white">Price Trend</h3>
                            <p className="text-xs font-medium text-gray-500 mt-1">Teff (White) - Last 7 Days</p>
                        </div>
                        <div className="flex gap-4 text-[10px] font-bold">
                            <div className="flex items-center gap-2 text-gray-400"><span className="w-2 h-2 rounded-full bg-[#00df82]"></span> Average</div>
                            <div className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 rounded-full bg-gray-600"></span> Addis Ababa</div>
                        </div>
                    </div>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a231c" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 10 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 10 }} domain={[3000, 3300]} tickCount={4} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050a06', border: '1px solid #1a231c', borderRadius: '8px' }}
                                    itemStyle={{ color: '#00df82', fontSize: '12px', fontWeight: 'bold' }}
                                />
                                <Line type="monotone" dataKey="price" stroke="#00df82" strokeWidth={3} dot={{ fill: '#050a06', stroke: '#00df82', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#00df82' }} />
                                {/* Dashed line for projection or comparison */}
                                <Line type="monotone" dataKey="price" stroke="#4b5563" strokeWidth={2} strokeDasharray="5 5" dot={false} data={trendData.map(d => ({ ...d, price: d.price - 50 }))} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PriceStatCard = ({ label, value, unit, subtext, highlight, highlightColor, icon }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
            {icon} {label}
        </div>
        <div className="flex items-end gap-1 mb-1">
            <span className="text-2xl font-black text-white">{highlight || value}</span>
            {unit && <span className="text-sm font-bold text-gray-500 mb-1">{unit}</span>}
        </div>
        {(subtext || value) && !highlight && <p className="text-xs font-medium text-gray-500">{subtext}</p>}
        {highlight && <p className={`text-sm font-black ${highlightColor}`}>{value}</p>} // Swapped for "Highest market" layout logic
    </div>
);

const BreakdownRow = ({ market, crop, today, last, trend, trendType }) => (
    <tr className="border-b border-[#1a231c]/50 hover:bg-white/5 transition-colors">
        <td className="py-4 pl-2 font-bold text-white">{market}</td>
        <td className="py-4 text-center text-gray-400">{crop}</td>
        <td className="py-4 text-right">{today}</td>
        <td className="py-4 text-right text-gray-500">{last}</td>
        <td className="py-4 text-right pr-2">
            <span className={`px-2 py-1 rounded-lg text-[10px] ${trendType === 'up' ? 'bg-[#00df82]/10 text-[#00df82]' :
                    trendType === 'down' ? 'bg-red-500/10 text-red-500' :
                        'bg-gray-800 text-gray-400'
                }`}>
                {trend}
            </span>
        </td>
    </tr>
);

export default BuyerMarketPrices;
