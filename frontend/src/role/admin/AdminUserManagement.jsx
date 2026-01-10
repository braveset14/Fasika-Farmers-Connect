import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Plus,
    MoreVertical,
    Users,
    AlertTriangle,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Eye,
    Ban,
    CheckCircle2
} from 'lucide-react';

const AdminUserManagement = () => {
    // Mock Data
    const [usersList, setUsersList] = useState([
        { id: 'FM-2023-001', name: 'Abebe Bikila', role: 'Farmer', phone: '+251 91 123 4567', location: 'Oromia, Jimma', status: 'Active', lastActive: '2 mins ago', icon: 'A', color: 'bg-[#00df82]' },
        { id: 'BY-2023-042', name: 'Sara Tadesse', role: 'Buyer', phone: '+251 92 444 5555', location: 'Addis Ababa', status: 'Active', lastActive: 'Yesterday', icon: 'S', color: 'bg-blue-500' },
        { id: 'FM-2023-089', name: 'Kebede Alemu', role: 'Farmer', phone: '+251 93 888 9999', location: 'Amhara, Bahir Dar', status: 'Pending', lastActive: 'Just now', icon: 'K', color: 'bg-yellow-500' },
        { id: 'BY-2022-112', name: 'Dawit Haile', role: 'Buyer', phone: '+251 94 000 1111', location: 'Addis Ababa', status: 'Suspended', lastActive: '20 days ago', icon: 'D', color: 'bg-red-500' },
        { id: 'FM-2023-055', name: 'Meron Bekele', role: 'Farmer', phone: '+251 91 666 7777', location: 'SNNPR, Hawassa', status: 'Active', lastActive: '5 hours ago', icon: 'M', color: 'bg-[#00df82]' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setUsersList(usersList.map(u => u.id === id ? { ...u, status: newStatus } : u));
        alert(`User status updated to ${newStatus}`);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white">User Management</h1>
                    <p className="text-gray-400 mt-1">Manage farmer and buyer accounts across the platform</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1a231c] text-white font-bold hover:bg-[#1a231c] transition-all">
                        <Download size={18} /> Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20">
                        <Plus size={18} /> Add New User
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="432"
                    sub="+12 this week"
                    icon={<Users size={24} className="text-[#00df8280]" />}
                />
                <ProgressStatCard
                    title="Farmers"
                    value="380"
                    sub="(88%)"
                    progress="88%"
                    color="bg-[#00df82]"
                />
                <ProgressStatCard
                    title="Buyers"
                    value="52"
                    sub="(12%)"
                    progress="12%"
                    color="bg-blue-500"
                />
                <StatCard
                    title="Pending Approval"
                    value="8"
                    sub="Requires action"
                    isAlert
                    icon={<AlertTriangle size={24} className="text-yellow-500" />}
                />
            </div>

            {/* Filters */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full md:w-auto">
                    <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Search by name or phone" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#00df82]" />
                </div>
                <div className="flex gap-3 w-full md:w-auto overflow-x-auto">
                    <SelectButton label="All Roles" />
                    <SelectButton label="All Status" />
                    <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#050a06] border border-[#1a231c] text-white font-bold whitespace-nowrap hover:border-gray-500">
                        Last 30 Days <Calendar size={16} />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#050a06] text-[10px] font-black text-gray-500 uppercase tracking-widest">
                            <tr>
                                <th className="p-6 w-16 text-center"><input type="checkbox" className="rounded border-gray-600 bg-transparent" /></th>
                                <th className="p-6">Name</th>
                                <th className="p-6">Role</th>
                                <th className="p-6">Phone</th>
                                <th className="p-6">Location</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Last Active</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-[#1a231c]">
                            {usersList.map((user, idx) => (
                                <tr key={idx} className="hover:bg-[#1a231c]/30 transition-colors group">
                                    <td className="p-6 text-center"><input type="checkbox" className="rounded border-gray-600 bg-transparent" /></td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-[#050a06] ${user.color}`}>
                                                {user.icon}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{user.name}</div>
                                                <div className="text-xs text-gray-500">ID: {user.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${user.role === 'Farmer'
                                            ? 'border-[#00df82]/30 text-[#00df82]'
                                            : 'border-blue-500/30 text-blue-500'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-6 text-gray-300 font-medium">{user.phone}</td>
                                    <td className="p-6 text-gray-300 font-medium">{user.location}</td>
                                    <td className="p-6">
                                        <StatusBadge status={user.status} />
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {user.status !== 'Active' && <button onClick={() => handleStatusChange(user.id, 'Active')} className="p-2 hover:bg-[#00df82]/20 hover:text-[#00df82] rounded-lg transition-colors"><CheckCircle2 size={16} /></button>}
                                            {user.status !== 'Suspended' && <button onClick={() => handleStatusChange(user.id, 'Suspended')} className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors"><Ban size={16} /></button>}
                                            <button className="p-2 hover:bg-[#1a231c] text-gray-400 hover:text-white rounded-lg transition-colors"><MoreVertical size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="bg-[#050a06] border-t border-[#1a231c] p-4 flex justify-between items-center text-xs font-bold text-gray-500">
                    <div>Showing <span className="text-white">1</span> to <span className="text-white">5</span> of <span className="text-white">432</span> results</div>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]"><ChevronLeft size={16} /></button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#00df82] text-[#050a06]">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]">...</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]">42</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1a231c] hover:bg-[#1a231c]"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, sub, icon, isAlert }) => (
    <div className={`bg-[#0d160f] border ${isAlert ? 'border-yellow-900/50' : 'border-[#1a231c]'} rounded-2xl p-6 relative overflow-hidden group hover:border-[#00df82]/30 transition-all`}>
        <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xs font-bold uppercase tracking-widest ${isAlert ? 'text-yellow-500' : 'text-gray-500'}`}>{title}</h3>
            {icon}
        </div>
        <div className={`text-4xl font-black ${isAlert ? 'text-yellow-500' : 'text-white'} mb-2`}>{value}</div>
        <div className={`text-xs font-bold ${isAlert ? 'text-yellow-500/70' : 'text-[#00df82]'}`}>{sub}</div>
    </div>
);

const ProgressStatCard = ({ title, value, sub, progress, color }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 hover:border-[#00df82]/30 transition-all">
        <div className="mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{title}</h3>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
            <div className="text-4xl font-black text-white">{value}</div>
            <div className="text-sm font-bold text-gray-500">{sub}</div>
        </div>
        <div className="h-1.5 w-full bg-[#1a231c] rounded-full overflow-hidden">
            <div className={`h-full ${color}`} style={{ width: progress }}></div>
        </div>
    </div>
);

const SelectButton = ({ label }) => (
    <div className="relative">
        <button className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-[#050a06] border border-[#1a231c] text-white font-bold min-w-[140px] hover:border-gray-500">
            {label} <Filter size={16} />
        </button>
    </div>
);

const StatusBadge = ({ status }) => {
    const styles = {
        Active: 'bg-[#00df82]/10 text-[#00df82] dot-[#00df82]',
        Pending: 'bg-yellow-500/10 text-yellow-500 dot-yellow-500',
        Suspended: 'bg-red-500/10 text-red-500 dot-red-500',
    };

    // Default to active if unknown
    const style = styles[status] || styles.Active;

    return (
        <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2 w-fit ${style}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-[#00df82]' : status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
            {status}
        </span>
    );
};

export default AdminUserManagement;
