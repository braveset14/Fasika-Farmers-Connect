import React from 'react';
import {
    AlertCircle,
    Server,
    Zap,
    Bell,
    Filter,
    Download,
    Eye,
    Ban,
    ChevronLeft,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';
import { mockApi } from '../../services/mockApi';

const AdminAlertsReports = () => {
    const [tickets, setTickets] = React.useState(mockApi.tickets.getAll());

    const handleStatusChange = (id, status) => {
        mockApi.tickets.updateStatus(id, status);
        setTickets(mockApi.tickets.getAll());
        alert(`Ticket status updated to ${status}`);
    };

    const handleDelete = (id) => {
        // simulation
        alert("Ticket archived");
    };
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-white">Alerts & Reports</h1>
                <p className="text-gray-400 mt-1">Manage system health, review user abuse reports, and monitor critical platform alerts.</p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-[#1a231c]">
                <TabButton label="Abuse reports" count={3} active icon={<AlertCircle size={18} />} />
                <TabButton label="System errors" icon={<Server size={18} />} />
                <TabButton label="API failures" icon={<Zap size={18} />} />
                <TabButton label="Platform alerts" icon={<Bell size={18} />} />
            </div>

            {/* Main Content Area */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-white">Active Abuse Reports</h2>
                        <p className="text-sm text-gray-500">Review user-submitted reports requiring moderation.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#1a231c] text-gray-300 font-bold hover:text-white hover:bg-[#1a231c] transition-all text-sm">
                            <Filter size={14} /> Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00df82] text-[#050a06] font-black hover:bg-[#00df82]/90 transition-all text-sm">
                            <Download size={14} /> Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#0c120e] text-[10px] font-black text-gray-500 uppercase tracking-widest">
                            <tr>
                                <th className="p-4">Reporter</th>
                                <th className="p-4">Reported User</th>
                                <th className="p-4">Reason</th>
                                <th className="p-4">Listing ID</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-[#1a231c]">
                            {tickets.length > 0 ? tickets.map(ticket => (
                                <tr key={ticket.id} className="hover:bg-[#1a231c]/30 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-xs">
                                                {ticket.userId?.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="font-bold text-white uppercase text-[10px] tracking-widest">{ticket.userId}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-300 font-medium">System Role</td>
                                    <td className="p-4 text-gray-300 font-bold">{ticket.type}</td>
                                    <td className="p-4">
                                        <p className="max-w-xs truncate text-[10px] text-gray-500">{ticket.message}</p>
                                    </td>
                                    <td className="p-4 text-gray-500 text-xs">
                                        {new Date(ticket.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-4">
                                        <StatusBadge status={ticket.status === 'OPEN' ? 'Open' : ticket.status === 'IN_REVIEW' ? 'Under Review' : 'Resolved'} />
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2 text-gray-500">
                                            {ticket.status !== 'RESOLVED' && (
                                                <button
                                                    onClick={() => handleStatusChange(ticket.id, 'RESOLVED')}
                                                    className="w-8 h-8 rounded-full bg-[#1a231c] flex items-center justify-center hover:bg-[#00df82]/10 hover:text-[#00df82] transition-colors"
                                                >
                                                    <CheckCircle2 size={16} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleStatusChange(ticket.id, 'IN_REVIEW')}
                                                className="w-8 h-8 rounded-full bg-[#1a231c] flex items-center justify-center hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors"
                                            >
                                                <AlertCircle size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7" className="p-10 text-center text-gray-600 font-bold italic">No support tickets found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="border-t border-[#1a231c] mt-4 pt-4 flex justify-between items-center text-xs font-bold text-gray-500">
                    <div>Showing 1-4 of 24 reports</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg border border-[#1a231c] hover:bg-[#1a231c] transition-all">Previous</button>
                        <button className="px-3 py-1.5 rounded-lg border border-[#1a231c] hover:bg-[#1a231c] transition-all">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TabButton = ({ label, count, active, icon }) => (
    <button className={`flex items-center gap-2 pb-4 border-b-2 transition-all ${active ? 'border-[#00df82] text-[#00df82]' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
        {icon}
        <span className="font-bold text-sm">{label}</span>
        {count && <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${active ? 'bg-[#00df82] text-[#050a06]' : 'bg-gray-700 text-gray-300'}`}>{count}</span>}
    </button>
);

const ReportRow = ({ reporter, reporterImg, user, userImg, reason, id, date, status }) => (
    <tr className="hover:bg-[#1a231c]/30 transition-colors">
        <td className="p-4">
            <div className="flex items-center gap-3">
                <img src={reporterImg} className="w-8 h-8 rounded-full" />
                <span className="font-bold text-white">{reporter}</span>
            </div>
        </td>
        <td className="p-4">
            <div className="flex items-center gap-3">
                <img src={userImg} className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                    <span className="font-bold text-white leading-none">{user}</span>
                </div>
            </div>
        </td>
        <td className="p-4 text-gray-300 font-medium">{reason}</td>
        <td className="p-4">
            <span className="bg-[#1a231c] px-2 py-1 rounded text-xs font-mono text-gray-400">{id}</span>
        </td>
        <td className="p-4 text-gray-500 text-xs">
            {date.split(',')[0]},<br />{date.split(',')[1]}
        </td>
        <td className="p-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2 w-fit ${status === 'Open' ? 'bg-red-500/10 text-red-500 dot-red-500' :
                status === 'Resolved' ? 'bg-[#00df82]/10 text-[#00df82] dot-[#00df82]' :
                    'bg-yellow-600/10 text-yellow-600 dot-yellow-600'
                }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${status === 'Open' ? 'bg-red-500' :
                    status === 'Resolved' ? 'bg-[#00df82]' :
                        'bg-yellow-600'
                    }`}></div>
                {status}
            </span>
        </td>
        <td className="p-4 text-right">
            <div className="flex justify-end gap-2 text-gray-500">
                <button className="hover:text-white transition-colors"><Eye size={16} /></button>
                <button className="hover:text-red-500 transition-colors"><Ban size={16} /></button>
            </div>
        </td>
    </tr>
);


export default AdminAlertsReports;
