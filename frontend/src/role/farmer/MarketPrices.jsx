import React, { useState } from 'react';
import {
    TrendingUp,
    ChevronDown,
    ArrowUpRight,
    ArrowDownRight,
    Minus,
    Search,
    Filter,
    Info,
    LayoutGrid,
    Wheat,
    Coffee,
    CloudRain
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const trendData = [
    { name: 'Mon', price: 3000 },
    { name: 'Tue', price: 3100 },
    { name: 'Wed', price: 3050 },
    { name: 'Thu', price: 3150 },
    { name: 'Fri', price: 3200 },
    { name: 'Sat', price: 3180 },
    { name: 'Sun', price: 3250 },
];

const MarketPrices = () => {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header & Filters */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-white">Market prices near you</h1>
                    <p className="text-xs text-gray-500 mt-1 font-medium">See current prices for your main crops.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex-grow max-w-sm">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Crop</label>
                        <div className="relative">
                            <select className="w-full bg-[#0d160f] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl appearance-none outline-none focus:border-[#00df82]/50 transition-all">
                                <option>All crops</option>
                                <option>Teff</option>
                                <option>Maize</option>
                                <option>Wheat</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="flex-grow max-w-sm">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Market</label>
                        <div className="relative">
                            <select className="w-full bg-[#0d160f] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl appearance-none outline-none focus:border-[#00df82]/50 transition-all">
                                <option>Nearest markets</option>
                                <option>Addis Ababa</option>
                                <option>Shashemene</option>
                                <option>Adama</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <button className="self-end px-8 py-3 bg-[#00df82] text-[#050a06] text-sm font-black rounded-xl hover:bg-[#00df82]/90 transition-all shadow-[0_0_20px_rgba(0,223,130,0.2)]">
                        Apply filters
                    </button>
                </div>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PriceCard
                    crop="Teff"
                    market="Addis Ababa"
                    price="3,200"
                    change="+5%"
                    trend="up"
                    icon={Wheat}
                />
                <PriceCard
                    crop="Maize"
                    market="Shashemene"
                    price="1,850"
                    change="-2%"
                    trend="down"
                    icon={LayoutGrid}
                    iconColor="text-yellow-500"
                />
                <PriceCard
                    crop="Wheat"
                    market="Local market"
                    price="2,100"
                    change="0%"
                    trend="stable"
                    icon={TrendingUp}
                    iconColor="text-orange-400"
                />
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Price Table */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden">
                    <div className="p-8 pb-0">
                        <h3 className="text-xl font-extrabold text-white">Latest Prices</h3>
                    </div>
                    <div className="p-8">
                        <table className="w-full text-left">
                            <thead className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                                <tr>
                                    <th className="pb-4">CROP</th>
                                    <th className="pb-4">MARKET</th>
                                    <th className="pb-4">TODAY</th>
                                    <th className="pb-4">LAST WEEK</th>
                                    <th className="pb-4 text-center">TREND</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <PriceRow crop="Teff" market="Addis Ababa" today="3,200 ETB" lastWeek="3,050 ETB" trend="up" />
                                <PriceRow crop="Maize" market="Shashemene" today="1,850 ETB" lastWeek="1,890 ETB" trend="down" />
                                <PriceRow crop="Wheat" market="Adama" today="2,100 ETB" lastWeek="2,100 ETB" trend="stable" />
                                <PriceRow crop="Coffee" market="Jimma" today="4,500 ETB" lastWeek="4,400 ETB" trend="up" />
                                <PriceRow crop="Barley" market="Local market" today="1,950 ETB" lastWeek="2,000 ETB" trend="down" />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Chart Sidebar */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-extrabold text-white leading-tight">Price trend for Teff</h3>
                        <div className="flex bg-[#050a06] p-0.5 rounded-lg border border-[#1a231c]">
                            <button className="px-3 py-1 bg-[#00df82] text-[#050a06] text-[10px] font-black rounded-md">7 days</button>
                            <button className="px-3 py-1 text-gray-500 text-[10px] font-black hover:text-white">30 days</button>
                        </div>
                    </div>

                    <div className="h-[200px] w-full relative">
                        <div className="absolute top-0 right-0 z-10">
                            <span className="text-[10px] font-black text-[#00df82] bg-[#050a06] px-2 py-0.5 rounded border border-[#1a231c]">3,250</span>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trendData}>
                                <defs>
                                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00df82" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#00df82" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a231c" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4b5563', fontSize: 10 }} dy={10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050a06', border: '1px solid #1a231c', borderRadius: '8px' }}
                                    labelStyle={{ color: '#9ca3af', fontSize: '10px' }}
                                />
                                <Area type="monotone" dataKey="price" stroke="#00df82" strokeWidth={3} fill="url(#priceGradient)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-[#050a06] border border-[#1a231c] rounded-2xl">
                        <div className="w-8 h-8 rounded-lg bg-[#00df82]/10 flex items-center justify-center shrink-0">
                            <Info size={14} className="text-[#00df82]" />
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 pt-1 leading-relaxed">
                            Highest price this month was <span className="text-white">3,250 ETB</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="flex justify-center">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 grayscale opacity-60">
                    <Info size={14} />
                    <span>Prices are approximate and may change at the market. Use as guidance only.</span>
                </div>
            </div>
        </div>
    );
};

const PriceCard = ({ crop, market, price, change, trend, icon: Icon, iconColor = "text-[#00df82]" }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 group hover:border-[#00df82]/30 transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h4 className="text-lg font-black text-white">{crop}</h4>
                <p className="text-[10px] text-gray-500 font-bold tracking-tight">{market}</p>
            </div>
            <div className={`w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center ${iconColor} group-hover:bg-[#00df82]/10 transition-colors`}>
                <Icon size={20} />
            </div>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-4xl font-black text-white">{price}</h3>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">ETB/qtl</span>
        </div>
        <div className={`flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full w-fit border
            ${trend === 'up' ? 'bg-green-900/20 text-green-400 border-green-800/20' :
                trend === 'down' ? 'bg-red-900/20 text-red-500 border-red-800/20' :
                    'bg-gray-800/20 text-gray-500 border-gray-700/20'}`}>
            {trend === 'up' && <ArrowUpRight size={14} />}
            {trend === 'down' && <ArrowDownRight size={14} />}
            {trend === 'stable' && <Minus size={14} />}
            <span>{change} {trend !== 'stable' && `vs. last week`} {trend === 'stable' && 'Stable'}</span>
        </div>
    </div>
);

const PriceRow = ({ crop, market, today, lastWeek, trend }) => (
    <tr className="border-t border-[#1a231c]/50 group hover:bg-white/5 transition-colors">
        <td className="py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1a231c] rounded-lg flex items-center justify-center text-[#00df82]/70 group-hover:text-[#00df82]">
                {crop === 'Coffee' ? <Coffee size={16} /> : <Wheat size={16} />}
            </div>
            <span className="font-bold text-white">{crop}</span>
        </td>
        <td className="py-4 text-gray-500 font-medium">{market}</td>
        <td className="py-4 font-black text-white">{today}</td>
        <td className="py-4 text-gray-500 font-bold">{lastWeek}</td>
        <td className="py-4 text-center">
            {trend === 'up' ? <ArrowUpRight className="inline text-green-500" size={18} /> :
                trend === 'down' ? <ArrowDownRight className="inline text-red-500" size={18} /> :
                    <Minus className="inline text-gray-500" size={18} />}
        </td>
    </tr>
);

export default MarketPrices;
