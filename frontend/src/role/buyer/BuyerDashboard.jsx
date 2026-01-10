import React from 'react';
import {
    List,
    Plus,
    TrendingDown,
    Star,
    BarChart2,
    Search,
    ChevronDown,
    Wheat,
    Filter,
    ArrowRight
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

const marketData = [
    { name: 'Week 1', price: 2800 },
    { name: 'Week 2', price: 2850 },
    { name: 'Week 3', price: 3450 },
    { name: 'Week 4', price: 3300 },
];

const BuyerDashboard = () => {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [cropFilter, setCropFilter] = React.useState('All Crops');
    const [regionFilter, setRegionFilter] = React.useState('All Regions');

    // Mock Data from Api
    const allListings = mockApi.listings.getAll();
    const activeListings = allListings.filter(l => l.status === 'ACTIVE');

    const filteredListings = activeListings.filter(l => {
        const matchesSearch = l.crop.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCrop = cropFilter === 'All Crops' || l.crop.includes(cropFilter);
        const matchesRegion = regionFilter === 'All Regions' || l.location.includes(regionFilter);
        return matchesSearch && matchesCrop && matchesRegion;
    });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Greeting */}
            <div>
                <h1 className="text-4xl font-black text-white">Welcome back, {user?.name?.split(' ')[0] || 'Buyer'}! 👋</h1>
                <p className="text-gray-400 mt-2 font-medium">Find the best produce directly from farmers.</p>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    icon={List}
                    label={`${filteredListings.length} listings`}
                    subtext="Matching your filters"
                    color="bg-[#1a231c]"
                    iconColor="text-[#00df82]"
                />
                <StatCard
                    icon={Plus}
                    label={`${activeListings.filter(l => new Date(l.postedDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length} new`}
                    subtext="This week in your region"
                    tag="NEW"
                    color="bg-[#1a231c]"
                    iconColor="text-white"
                />
                <StatCard
                    icon={TrendingDown}
                    label="Teff ↓ 3%"
                    subtext="vs last week in Addis"
                    color="bg-[#1a231c]"
                    iconColor="text-red-400"
                />
                <StatCard
                    icon={Star}
                    label="7 saved"
                    subtext="Review before contacting"
                    link="View all"
                    color="bg-[#1a231c]"
                    iconColor="text-yellow-400"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Market Overview Chart */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <BarChart2 className="text-[#00df82]" size={20} />
                            <h3 className="text-xl font-extrabold text-white">Market overview</h3>
                        </div>
                        <div className="flex bg-[#050a06] p-1 rounded-xl">
                            {['Teff', 'Maize', 'All'].map(tab => (
                                <button key={tab} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === 'Teff' ? 'bg-[#00df82] text-[#050a06]' : 'text-gray-500 hover:text-white'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={marketData}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
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
                                <Area type="monotone" dataKey="price" stroke="#00df82" strokeWidth={4} fillOpacity={1} fill="url(#colorPrice)" dot={{ fill: '#fff', stroke: '#00df82', strokeWidth: 2, r: 4 }} />
                                <ReferenceDot x="Week 3" y={3450} r={0} label={{ position: 'top', value: 'Peak: 3,450 ETB', fill: '#fff', fontSize: 10, fontWeight: 'bold', className: 'bg-[#0d160f] px-2 py-1 rounded' }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Listings Sidebar */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-extrabold text-white">Recent Listings</h3>
                        <Search className="text-gray-500 cursor-pointer hover:text-white" size={20} />
                    </div>
                    <div className="space-y-4">
                        <ListingItem
                            crop="Teff – 30 quintals"
                            location="Arsi • Grade A"
                            price="3,150"
                            unit="ETB/qtl"
                            initials="Te"
                        />
                        <ListingItem
                            crop="Maize – 50 quintals"
                            location="Jimma • Grade B"
                            price="1,800"
                            unit="ETB/qtl"
                            initials="Ma"
                        />
                        <ListingItem
                            crop="Coffee – 10 quintals"
                            location="Sidama • Grade A"
                            price="NEW"
                            unit=""
                            initials="Co"
                            isNew
                        />
                        <ListingItem
                            crop="Wheat – 100 quintals"
                            location="Bale • Grade A"
                            price="2,200"
                            unit="ETB/qtl"
                            initials="Wh"
                        />
                    </div>
                </div>
            </div>

            {/* Search & Listings Table Section */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden p-8">
                <div className="flex items-center gap-3 mb-8">
                    <Search className="text-[#00df82]" size={24} />
                    <h3 className="text-xl font-extrabold text-white">Search produce listings</h3>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="md:col-span-1 bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex items-center text-gray-500 text-sm">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent outline-none w-full placeholder-gray-600 border-none p-0 text-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <select
                            value={cropFilter}
                            onChange={(e) => setCropFilter(e.target.value)}
                            className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm outline-none appearance-none cursor-pointer"
                        >
                            <option>All Crops</option>
                            <option>Teff</option>
                            <option>Wheat</option>
                            <option>Maize</option>
                            <option>Coffee</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select
                            value={regionFilter}
                            onChange={(e) => setRegionFilter(e.target.value)}
                            className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm outline-none appearance-none cursor-pointer"
                        >
                            <option>All Regions</option>
                            <option>Amhara</option>
                            <option>Oromia</option>
                            <option>Sidama</option>
                            <option>Addis Ababa</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                    <button className="bg-[#00df82] text-[#050a06] font-black rounded-xl flex items-center justify-center gap-2 hover:bg-[#00df82]/90 transition-all text-xs">
                        <Filter size={16} />
                        Filter Results
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-[#1a231c]/50 rounded-xl">
                            <tr>
                                <th className="p-4 rounded-l-xl">Crop</th>
                                <th className="p-4">Qty (QTL)</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">Farmer / Co-op</th>
                                <th className="p-4">Price Indication</th>
                                <th className="p-4 text-right rounded-r-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {filteredListings.length > 0 ? filteredListings.map(l => (
                                <TableRow
                                    key={l.id}
                                    crop={l.crop}
                                    qty={l.quantity}
                                    location={l.location}
                                    farmer={l.ownerId === 'farmer1' ? 'Abebe Bikila' : 'Local Extension'}
                                    price={`${l.price} ETB`}
                                />
                            )) : (
                                <tr>
                                    <td colSpan="6" className="p-10 text-center text-gray-500 font-bold">No matches found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon: Icon, label, subtext, tag, link, color, iconColor }) => (
    <div className={`bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-[#00df82]/30 transition-all cursor-pointer group relative overflow-hidden`}>
        <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color} ${iconColor}`}>
                <Icon size={24} />
            </div>
            {link && <span className="text-[10px] font-bold text-[#00df82] hover:underline uppercase tracking-wide cursor-pointer">{link}</span>}
            {tag && <span className="text-[10px] font-black bg-[#00df82] text-[#050a06] px-2 py-0.5 rounded uppercase tracking-wider">{tag}</span>}
        </div>
        <h3 className="text-2xl font-black text-white mb-1">{label}</h3>
        <p className="text-xs font-bold text-gray-500">{subtext}</p>
    </div>
);

const ListingItem = ({ crop, location, price, unit, initials, isNew }) => (
    <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group border border-[#1a231c] hover:border-[#00df82]/30">
        <div className="w-10 h-10 bg-[#1a231c] rounded-full flex items-center justify-center text-gray-400 group-hover:text-white font-black text-xs border border-gray-800">
            {initials}
        </div>
        <div className="flex-grow">
            <h5 className="text-sm font-bold text-white leading-tight">{crop}</h5>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide">{location}</span>
        </div>
        <div className="text-right">
            {isNew ? (
                <span className="text-[10px] font-black bg-[#00df82]/20 text-[#00df82] px-2 py-1 rounded uppercase">NEW</span>
            ) : (
                <>
                    <p className="text-sm font-black text-white">{price}</p>
                    <p className="text-[9px] text-gray-500 uppercase">{unit}</p>
                </>
            )}
        </div>
    </div>
);

const TableRow = ({ crop, qty, location, farmer, price }) => (
    <tr className="border-b border-[#1a231c]/50 group hover:bg-[#1a231c]/30 transition-colors">
        <td className="p-4 flex items-center gap-3 font-bold text-white">
            <div className={`w-2 h-2 rounded-full ${crop.includes('Teff') ? 'bg-[#00df82]' : crop.includes('Maize') ? 'bg-yellow-500' : 'bg-red-500'}`} />
            {crop}
        </td>
        <td className="p-4 font-bold text-white">{qty}</td>
        <td className="p-4 text-gray-400">{location}</td>
        <td className="p-4 text-white font-medium">{farmer}</td>
        <td className="p-4 font-black text-white">{price}</td>
        <td className="p-4 text-right">
            <button className="bg-[#1a231c] border border-gray-700 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                View Details
            </button>
        </td>
    </tr>
);

export default BuyerDashboard;
