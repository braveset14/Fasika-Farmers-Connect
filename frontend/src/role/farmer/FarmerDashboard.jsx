import React from 'react';
import {
    CloudSun,
    Lightbulb,
    TrendingUp,
    ShoppingBag,
    Droplets,
    CloudRain,
    Bug,
    DollarSign,
    Cloud,
    Search,
    ChevronRight,
    ArrowUpRight,
    ArrowDownRight,
    Minus,
    Wheat
} from 'lucide-react';
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

import { useAuth } from '../../hooks/useAuth';
import { mockApi } from '../../services/mockApi';

const weatherData = [
    { name: 'Mon', temp: 22 },
    { name: 'Tue', temp: 24 },
    { name: 'Wed', temp: 21 },
    { name: 'Thu', temp: 25 },
    { name: 'Fri', temp: 23 },
    { name: 'Sat', temp: 22 },
    { name: 'Sun', temp: 24 },
];

const FarmerDashboard = () => {
    const { user } = useAuth();
    const myListings = mockApi.listings.getByFarmer(user?.id || 'farmer1');
    const activeCount = myListings.filter(l => l.status === 'ACTIVE').length;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Greeting */}
            <div>
                <h1 className="text-4xl font-black text-white">Hello, {user?.name?.split(' ')[0] || 'Farmer'}! 🌾</h1>
                <p className="text-gray-400 mt-2 font-medium">Here's what's happening on your farm today.</p>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    icon={CloudSun}
                    label="Weather now"
                    value="23°C • Sunny"
                    subtext="Rain expected tonight"
                    subIcon={Droplets}
                />
                <StatCard
                    icon={Lightbulb}
                    label="Advisories"
                    value="3 new tips"
                    subtext="1 urgent for maize"
                    tag="Action needed"
                />
                <StatCard
                    icon={TrendingUp}
                    label="Market snapshot"
                    value="Teff: 3,200 ETB"
                    subtext="+5% this week"
                    trend="up"
                />
                <StatCard
                    icon={ShoppingBag}
                    label="My listings"
                    value={`${activeCount} active`}
                    link="View all listings"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Analytics Chart */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <Droplets className="text-[#00df82]" size={20} />
                            <h3 className="text-xl font-extrabold text-white">Weather & advice for {user?.location?.split(',')[0] || 'your farm'}</h3>
                        </div>
                        <div className="flex bg-[#050a06] p-1 rounded-xl">
                            {['Today', '7 days', '30 days'].map(tab => (
                                <button key={tab} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === 'Today' ? 'bg-[#00df82] text-[#050a06]' : 'text-gray-500 hover:text-white'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={weatherData}>
                                <defs>
                                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00df82" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00df82" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a231c" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4b5563', fontSize: 12 }} dy={10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050a06', border: '1px solid #1a231c', borderRadius: '12px' }}
                                    itemStyle={{ color: '#00df82' }}
                                />
                                <Area type="monotone" dataKey="temp" stroke="#00df82" strokeWidth={4} fillOpacity={1} fill="url(#colorTemp)" dot={{ fill: '#fff', stroke: '#00df82', strokeWidth: 2, r: 4 }} />

                                {/* Custom Callouts */}
                                <ReferenceDot x="Thu" y={25} r={0} label={{ position: 'top', value: 'Irrigate Now', fill: '#00df82', fontSize: 10, fontWeight: 'bold', className: 'bg-[#0d160f] p-1 rounded' }} />
                                <ReferenceDot x="Sat" y={22} r={0} label={{ position: 'top', value: 'Fertilize', fill: '#9ca3af', fontSize: 10, fontWeight: 'bold' }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Alerts Sidebar */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-extrabold text-white">Recent alerts</h3>
                        <Search className="text-gray-500 cursor-pointer hover:text-white" size={20} />
                    </div>
                    <div className="space-y-4">
                        <AlertItem
                            icon={CloudRain}
                            title="Heavy rain expected"
                            time="10:00"
                            tags={[{ text: 'Maize', color: 'orange' }, { text: 'High Urgency', color: 'red' }]}
                        />
                        <AlertItem
                            icon={Bug}
                            title="Pest outbreak warning"
                            time="Yesterday"
                            tags={[{ text: 'Wheat', color: 'orange' }, { text: 'Medium', color: 'yellow' }]}
                        />
                        <AlertItem
                            icon={DollarSign}
                            title="Teff price surge"
                            time="26 Dec"
                            tags={[{ text: 'Market', color: 'green' }, { text: 'Info', color: 'blue' }]}
                        />
                        <AlertItem
                            icon={Cloud}
                            title="Dry spell ending"
                            time="25 Dec"
                            tags={[{ text: 'General', color: 'gray' }]}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Market Table */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden">
                    <div className="p-8 pb-0 flex justify-between items-center">
                        <h3 className="text-xl font-extrabold text-white">Market prices near you</h3>
                        <div className="flex gap-2">
                            <select className="bg-[#050a06] text-white text-xs px-3 py-1.5 rounded-lg border border-[#1a231c] outline-none">
                                <option>Teff (All)</option>
                            </select>
                            <select className="bg-[#050a06] text-white text-xs px-3 py-1.5 rounded-lg border border-[#1a231c] outline-none">
                                <option>All Markets</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-8">
                        <table className="w-full text-left">
                            <thead className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                                <tr>
                                    <th className="pb-4">Crop</th>
                                    <th className="pb-4">Market</th>
                                    <th className="pb-4">Today's Price</th>
                                    <th className="pb-4 text-center">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <MarketRow crop="Teff" market="Addis Ababa" price="3,200 ETB" trend="up" />
                                <MarketRow crop="Maize" market="Shashemene" price="1,850 ETB" trend="down" />
                                <MarketRow crop="Wheat" market="Adama" price="2,100 ETB" trend="stable" />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* My Active Listings */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-extrabold text-white">My Active Listings</h3>
                        <button className="text-xs font-bold text-[#00df82] hover:underline">Manage all</button>
                    </div>
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-[#00df82]/30 transition-all cursor-pointer group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#1a231c] rounded-2xl flex items-center justify-center text-[#00df82]">
                                <Wheat size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Teff – 20 quintals</h4>
                                <p className="text-[10px] text-gray-500 font-medium">{user?.location?.split(',')[0] || 'Arsi'} • Grade A • Posted Dec 20</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="bg-[#1a231c] text-white py-2 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">Edit</button>
                            <button className="bg-[#1a231c] text-white py-2 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">View buyers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon: Icon, label, value, subtext, subIcon: SubIcon, tag, trend, link }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-[#00df82]/30 transition-all cursor-pointer group">
        <div className="bg-[#1a231c] w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00df82]/10 transition-colors">
            <Icon className="text-[#00df82]" size={20} />
        </div>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-center justify-between mb-1">
            <h4 className="text-xl font-black text-white">{value}</h4>
            {tag && <span className="text-[8px] font-black uppercase tracking-tighter bg-orange-900/40 text-orange-400 px-2 py-0.5 rounded-full border border-orange-800/40">{tag}</span>}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold">
            {SubIcon && <SubIcon size={12} className="text-[#00df82]" />}
            <span className={trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}>
                {subtext}
            </span>
            {trend === 'up' && <ArrowUpRight size={12} className="text-green-500" />}
            {link && <button className="text-gray-500 hover:text-white underline">{link}</button>}
        </div>
    </div>
);

const AlertItem = ({ icon: Icon, title, time, tags }) => (
    <div className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group">
        <div className="mt-1 w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white">
            <Icon size={20} />
        </div>
        <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
                <h5 className="text-[13px] font-extrabold text-white leading-tight">{title}</h5>
                <span className="text-[10px] text-gray-500 font-medium">{time}</span>
            </div>
            <div className="flex gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className={`text-[8px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full border 
                        ${tag.color === 'red' ? 'bg-red-900/40 text-red-400 border-red-800/40' :
                            tag.color === 'orange' ? 'bg-orange-900/40 text-orange-400 border-orange-800/40' :
                                tag.color === 'green' ? 'bg-green-900/40 text-green-400 border-green-800/40' :
                                    tag.color === 'yellow' ? 'bg-yellow-900/40 text-yellow-400 border-yellow-800/40' :
                                        tag.color === 'blue' ? 'bg-blue-900/40 text-blue-400 border-blue-800/40' :
                                            'bg-gray-800/40 text-gray-400 border-gray-700/40'}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const MarketRow = ({ crop, market, price, trend }) => (
    <tr className="border-t border-[#1a231c]/50 group hover:bg-white/5 transition-colors">
        <td className="py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1a231c] rounded-lg flex items-center justify-center text-[#00df82]/70 group-hover:text-[#00df82]">
                <Wheat size={16} />
            </div>
            <span className="font-bold text-white">{crop}</span>
        </td>
        <td className="py-4 text-gray-500 font-medium">{market}</td>
        <td className="py-4 font-black text-white">{price}</td>
        <td className="py-4 text-center">
            {trend === 'up' ? <ArrowUpRight className="inline text-green-500" size={18} /> :
                trend === 'down' ? <ArrowDownRight className="inline text-red-500" size={18} /> :
                    <Minus className="inline text-gray-500" size={18} />}
        </td>
    </tr>
);

export default FarmerDashboard;
