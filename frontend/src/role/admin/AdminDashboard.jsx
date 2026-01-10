import React, { useState, useEffect } from 'react';
import {
    Users,
    FileText,
    Activity,
    AlertTriangle,
    ChevronDown,
    Search,
    Filter,
    MoreVertical,
    Check,
    X,
    Eye
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

import { useAuth } from '../../hooks/useAuth';
import { mockApi } from '../../services/mockApi';

const AdminDashboard = () => {
    const { user } = useAuth();
    const stats = mockApi.getAdminStats();
    const [activeTab, setActiveTab] = useState('Users');

    // Mock Data based on Screenshot
    const chartData = [
        { day: 'Mon', users: 150 },
        { day: 'Tue', users: 220 },
        { day: 'Wed', users: 200 },
        { day: 'Thu', users: 350 }, // Planting Season Peak
        { day: 'Fri', users: 280 },
        { day: 'Sat', users: 190 },
        { day: 'Sun', users: 400 },
    ];

    const pendingApprovals = mockApi.listings.getAll().filter(l => l.status === 'PENDING').map(l => ({
        id: l.id,
        name: l.crop,
        role: 'Listing',
        location: l.location,
        type: 'New Post',
        iconColor: 'bg-green-600'
    }));

    const usersList = [
        { id: 1, name: 'Dawit Haile', role: 'Farmer', location: 'Gondar, Amhara', status: 'Active', statusColor: 'bg-[#00df82]/20 text-[#00df82]', lastActive: '2 mins ago', avatar: 'https://ui-avatars.com/api/?name=Dawit+Haile&background=random' },
        { id: 2, name: 'Sara Yohannes', role: 'Buyer', location: 'Addis Ababa', status: 'Pending', statusColor: 'bg-yellow-500/20 text-yellow-500', lastActive: '1 day ago', avatar: 'https://ui-avatars.com/api/?name=Sara+Yohannes&background=random' },
        { id: 3, name: 'Oromia Co-op', role: 'Farmer', location: 'Adama, Oromia', status: 'Active', statusColor: 'bg-[#00df82]/20 text-[#00df82]', lastActive: '4 hours ago', avatar: 'https://ui-avatars.com/api/?name=Oromia+Co-op&background=random' },
    ];

    return (
        <div className="p-8 bg-[#050a06] min-h-screen font-sans text-white">
            {/* Greeting */}
            <div className="mb-10">
                <h1 className="text-4xl font-black text-white">Hello, {user?.name?.split(' ')[0] || 'Admin'} 🛠️</h1>
                <p className="text-gray-500 mt-2 font-medium">Control center overview for Fasika Farmers Connect.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Users overview"
                    value={stats.totalUsers}
                    icon={<Users size={18} className="text-[#00df82]" />}
                    subOne={<><span className='text-[#00df82] font-bold bg-[#00df82]/10 px-1.5 py-0.5 rounded mr-2'>+12</span> new</>}
                    subTwo="380 farmers · 52 buyers"
                />
                <StatCard
                    title="Active listings"
                    value={stats.activeListings}
                    icon={<FileText size={18} className="text-white" />}
                    subOne={<><span className='text-yellow-500 font-bold bg-yellow-500/10 px-1.5 py-0.5 rounded mr-2'>{stats.pendingApprovals}</span> pending</>}
                    subTwo="awaiting approval"
                />
                <StatCard
                    title="System health"
                    value="API: OK"
                    icon={<Activity size={18} className="text-[#00df82]" />}
                    valueSize="text-2xl"
                    subOne={<><span className='text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded mr-2'>2 errors</span></>}
                    subTwo="in last 24h"
                />
                <StatCard
                    title="Alerts & reports"
                    value="5"
                    icon={<AlertTriangle size={18} className="text-yellow-500" />}
                    subOne={<><span className='text-gray-400 font-bold border border-gray-600 px-1.5 py-0.5 rounded mr-2 text-[10px] uppercase'>Open</span></>}
                    subTwo="3 abuse · 2 errors"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Platform Activity Chart */}
                <div className="lg:col-span-2 bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-extrabold text-white">Platform Activity</h3>
                            <p className="text-xs font-medium text-gray-500 mt-1">Active Users <span className="text-[#00df82] text-sm font-bold ml-1">+12%</span></p>
                        </div>
                        <div className="flex bg-[#050a06] rounded-xl p-1 border border-[#1a231c]">
                            <button className="px-3 py-1.5 text-xs font-bold bg-[#1a231c] text-white rounded-lg shadow-sm">7 days</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors">30 days</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors">90 days</button>
                        </div>
                    </div>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00df82" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00df82" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a231c" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 10 }} dy={10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050a06', border: '1px solid #1a231c', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                                    itemStyle={{ color: '#00df82', fontSize: '12px', fontWeight: 'bold' }}
                                    labelStyle={{ color: '#9ca3af', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                                />
                                <Area type="monotone" dataKey="users" stroke="#00df82" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" activeDot={{ r: 6, fill: '#00df82', stroke: '#050a06', strokeWidth: 2 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pending Approvals Widget */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-lg font-extrabold text-white w-24 leading-tight">Pending Approvals</h3>
                        <div className="flex gap-4 text-xs font-bold">
                            <button className="text-[#00df82] border-b-2 border-[#00df82] pb-1">Users (3)</button>
                            <button className="text-gray-500 hover:text-gray-300 transition-colors pb-1">Listings (12)</button>
                        </div>
                    </div>

                    <div className="space-y-4 flex-grow">
                        {pendingApprovals.map(item => (
                            <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#050a06] border border-[#1a231c] hover:border-[#1a231c]/80 transition-all group">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${item.iconColor || 'bg-blue-600'}`}>
                                    {item.role === 'Farmer' ? <Users size={16} /> : <FileText size={16} />}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                                        <span className="text-[9px] font-black bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded uppercase tracking-wider">{item.type}</span>
                                    </div>
                                    <p className="text-[10px] font-medium text-gray-500 truncate">{item.role} · {item.location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-lg bg-[#1a231c] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a352c] transition-colors"><X size={14} /></button>
                                    <button className="px-3 py-1.5 rounded-lg bg-[#00df82] text-[#050a06] text-xs font-black hover:bg-[#00df82]/90 transition-colors shadow-lg shadow-[#00df82]/20">Approve</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-4 py-3 rounded-xl text-xs font-bold text-gray-500 hover:text-white hover:bg-[#1a231c] transition-all">
                        View all pending requests
                    </button>
                </div>
            </div>

            {/* User Management Table */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h3 className="text-lg font-extrabold text-white">User Management</h3>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="px-4 py-2.5 rounded-xl bg-[#050a06] border border-[#1a231c] text-xs font-bold text-gray-300 hover:text-white hover:border-gray-600 transition-all">All Roles</button>
                        <button className="px-4 py-2.5 rounded-xl bg-[#050a06] border border-[#1a231c] text-xs font-bold text-gray-300 hover:text-white hover:border-gray-600 transition-all">Any Status</button>
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input type="text" placeholder="Search name..." className="w-full md:w-64 bg-[#050a06] border border-[#1a231c] rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none focus:border-[#00df82]" />
                        </div>
                        <button className="px-5 py-2.5 rounded-xl bg-[#1a231c] text-white text-xs font-bold hover:bg-[#2a352c] transition-colors">Apply</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-[9px] font-black text-gray-500 uppercase tracking-widest border-b border-[#1a231c]">
                            <tr>
                                <th className="pb-4 pl-4">User</th>
                                <th className="pb-4">Role</th>
                                <th className="pb-4">Location</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Last Active</th>
                                <th className="pb-4 pr-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {usersList.map(user => (
                                <tr key={user.id} className="border-b border-[#1a231c]/50 hover:bg-white/5 transition-colors group">
                                    <td className="py-4 pl-4">
                                        <div className="flex items-center gap-3">
                                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                                            <span className="font-bold text-white">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-gray-400 font-medium">{user.role}</td>
                                    <td className="py-4 text-gray-400 font-medium">{user.location}</td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${user.statusColor}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-gray-500 font-medium text-xs">{user.lastActive}</td>
                                    <td className="py-4 pr-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-[#00df82]/20 hover:text-[#00df82] rounded-lg transition-colors"><Eye size={14} /></button>
                                            <button className="p-2 hover:bg-[#1a231c] text-gray-400 hover:text-white rounded-lg transition-colors"><MoreVertical size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, subOne, subTwo, valueSize }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-[#00df82]/30 transition-all group relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{title}</h3>
            <div className="w-8 h-8 rounded-lg bg-[#1a231c] flex items-center justify-center group-hover:bg-[#1a231c]/80 transition-colors">
                {icon}
            </div>
        </div>
        <div className={`font-black text-white mb-4 ${valueSize || 'text-4xl'}`}>{value}</div>
        <div className="flex items-center text-xs font-medium text-gray-500">
            {subOne}
            {subTwo}
        </div>
    </div>
);

export default AdminDashboard;
