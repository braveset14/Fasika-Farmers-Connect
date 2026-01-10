import React from 'react';
import { Search, Check, X, Eye, Edit2, Calendar, Package } from 'lucide-react';
import Select from '../../components/ui/Select';
import { mockApi } from '../../services/mockApi';

const AdminProduceListings = () => {
    const [listings, setListings] = React.useState(mockApi.listings.getAll());
    const [crop, setCrop] = React.useState('All Crops');
    const [status, setStatus] = React.useState('All Status');
    const [region, setRegion] = React.useState('All Regions');

    const handleApprove = (id) => {
        mockApi.listings.update(id, { status: 'ACTIVE' });
        setListings(mockApi.listings.getAll());
        alert("Listing approved!");
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this listing?")) {
            mockApi.listings.delete(id);
            setListings(mockApi.listings.getAll());
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-white">Produce Listings Management</h1>
                <div className="w-10 h-10 rounded-full bg-[#00df82] flex items-center justify-center font-black text-[#050a06]">A</div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    title="Total Listings"
                    value="156"
                    icon={<Package size={24} className="text-gray-500" />}
                />
                <StatCard
                    title="Active Listings"
                    value="96"
                    sub="(62%)"
                    icon={<Check size={24} className="text-[#00df82]" />}
                    valueColor="text-[#00df82]"
                />
                <StatCard
                    title="Pending Approval"
                    value="12"
                    sub="(8%)"
                    icon={<div className="text-yellow-500">⏳</div>}
                    valueColor="text-yellow-500"
                />
                <StatCard
                    title="Suspended Listings"
                    value="48"
                    sub="(30%)"
                    icon={<div className="text-red-500">🚫</div>}
                    valueColor="text-red-500"
                />
            </div>

            {/* Filter Bar */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Search Farmer</label>
                    <div className="relative">
                        <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input type="text" placeholder="e.g. Abebe Kebede" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#00df82]" />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Crop</label>
                    <Select value={crop} onChange={setCrop} options={['All Crops', 'White Teff', 'Maize', 'Coffee', 'Wheat', 'Beans']} />
                </div>
                <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Status</label>
                    <Select value={status} onChange={setStatus} options={['All Status', 'Active', 'Pending', 'Suspended']} />
                </div>
                <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Region</label>
                    <Select value={region} onChange={setRegion} options={['All Regions', 'Amhara', 'Oromia', 'Sidama', 'SNNPR']} />
                </div>
                <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 mb-1 block">Date Posted</label>
                    <button className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#050a06] border border-[#1a231c] text-white font-bold hover:border-[#00df82]/30 transition-all text-sm group">
                        <span className="truncate">Last 30 Days</span> <Calendar size={16} className="text-gray-500 group-hover:text-[#00df82]" />
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
                                <th className="p-6">Crop</th>
                                <th className="p-6">Quantity</th>
                                <th className="p-6">Farmer</th>
                                <th className="p-6">Location</th>
                                <th className="p-6">Status</th>
                                <th className="p-6">Posted</th>
                                <th className="p-6 text-center">Views</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-[#1a231c]">
                            {listings.map((item, idx) => {
                                const statusLabel = item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase();
                                return (
                                    <tr key={item.id} className="hover:bg-[#1a231c]/30 transition-colors group">
                                        <td className="p-6 text-center"><input type="checkbox" className="rounded border-gray-600 bg-transparent" /></td>
                                        <td className="p-6 font-bold text-white">{item.crop}</td>
                                        <td className="p-6 text-gray-300">{item.quantity} {item.unit}</td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black bg-blue-900 text-blue-300`}>
                                                    {item.ownerId?.charAt(0).toUpperCase() || 'F'}
                                                </div>
                                                <span className="font-bold text-gray-300">{item.ownerId === 'farmer1' ? 'Abebe Kebede' : 'User ' + item.ownerId}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 text-gray-400 max-w-[120px]">{item.location}</td>
                                        <td className="p-6">
                                            <StatusBadge status={statusLabel} />
                                        </td>
                                        <td className="p-6">
                                            <div className="text-gray-300 font-bold">{item.postedDate}</div>
                                        </td>
                                        <td className="p-6 text-center font-bold text-white">{item.views || 0}</td>
                                        <td className="p-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                {item.status === 'PENDING' && (
                                                    <button
                                                        onClick={() => handleApprove(item.id)}
                                                        className="w-8 h-8 rounded-full bg-[#00df82] flex items-center justify-center text-[#050a06] hover:scale-110 transition-transform"
                                                    >
                                                        <Check size={14} strokeWidth={3} />
                                                    </button>
                                                )}
                                                <button className="w-8 h-8 rounded-full bg-[#1a231c] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a352c] transition-colors"><Eye size={14} /></button>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="w-8 h-8 rounded-full bg-[#1a231c] flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, sub, icon, valueColor }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 relative overflow-hidden group hover:border-[#00df82]/30 transition-all">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{title}</h3>
            {icon}
        </div>
        <div className="flex items-baseline gap-2">
            <div className={`text-4xl font-black ${valueColor || 'text-white'}`}>{value}</div>
            {sub && <div className="text-sm font-bold text-gray-500">{sub}</div>}
        </div>
    </div>
);

const SelectInput = ({ label }) => (
    <div className="relative">
        <button className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#050a06] border border-[#1a231c] text-white font-bold hover:border-gray-500 text-sm">
            <span className="truncate">{label}</span> <ChevronDown size={16} className="text-gray-500" />
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


export default AdminProduceListings;
