import React, { useState } from 'react';
import {
    AlertTriangle,
    CheckCircle,
    AlertCircle,
    Server,
    Users,
    Activity,
    Phone,
    Mail,
    MessageCircle,
    Send
} from 'lucide-react';

const AdminSupport = () => {
    const [ticket, setTicket] = useState({ priority: 'Critical', description: '' });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-white">Admin Support & Escalation</h1>
                <p className="text-gray-400 mt-1">Monitor system health or report critical issues directly to the technical team and hosting provider.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Report Form */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none"></div>

                        <div className="flex items-center gap-3 mb-8">
                            <AlertTriangle className="text-red-500" size={24} strokeWidth={2.5} />
                            <h2 className="text-xl font-black text-white">Report a Critical Issue</h2>
                        </div>
                        <p className="text-gray-500 text-sm mb-6 -mt-6 ml-9">Submit a ticket for immediate investigation.</p>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white">Priority Level</label>
                                <div className="relative">
                                    <select className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white text-sm font-bold appearance-none outline-none focus:border-red-500 transition-colors">
                                        <option>Critical - System Down</option>
                                        <option>High - Feature Broken</option>
                                        <option>Medium - Performance Issue</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-500"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white">Detailed Description</label>
                                <textarea
                                    className="w-full h-32 bg-[#050a06] border border-[#1a231c] rounded-xl p-4 text-white text-sm outline-none focus:border-[#00df82] resize-none"
                                    placeholder="Describe the issue, its impact, and steps to reproduce..."
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white">Attachments (Optional)</label>
                                <div className="border-2 border-dashed border-[#1a231c] rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#00df82]/50 hover:bg-[#00df82]/5 transition-all cursor-pointer group">
                                    <div className="bg-[#1a231c] p-2 rounded-lg mb-2 group-hover:bg-[#00df82] group-hover:text-[#050a06] transition-colors">
                                        <PlusFileIcon size={20} />
                                    </div>
                                    <span className="text-xs font-bold">Attach screenshots or logs</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-[#00df82] text-[#050a06] font-black py-4 rounded-xl hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20 flex items-center justify-center gap-2">
                            <Send size={18} /> Submit Ticket
                        </button>
                    </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                    {/* System Status */}
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <Server size={20} className="text-[#00df82]" />
                                <h3 className="font-black text-white">System Status</h3>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-[#00df82]/20 text-[#00df82] text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00df82] animate-pulse"></div> Operational
                            </span>
                        </div>

                        <div className="space-y-3">
                            <StatusRow label="Uptime (30d)" value="99.9%" icon={<CheckCircle size={16} className="text-[#00df82]" />} />
                            <StatusRow label="Error Rate (24h)" value="0.01%" icon={<Activity size={16} className="text-[#00df82]" />} />
                            <StatusRow label="Active Users" value="45" icon={<Users size={16} className="text-blue-500" />} />
                        </div>

                        <div className="mt-6 pt-4 border-t border-[#1a231c]">
                            <a href="#" className="text-[#00df82] text-xs font-bold hover:underline flex items-center justify-center">View Full System Status Page →</a>
                        </div>
                    </div>

                    {/* Escalation Contacts */}
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <AlertCircle className="text-orange-500" size={20} />
                            <h3 className="font-black text-white">Escalation Contacts</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Development Lead</p>
                                <p className="text-white font-bold mb-2">Abebe Bikila</p>
                                <div className="flex gap-2">
                                    <ContactButton icon={<Phone size={14} />} text="+251 911 000 000" />
                                    <ContactButton icon={<Mail size={14} />} text="Email" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#1a231c] border-dashed">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Hosting Emergency</p>
                                <p className="text-white font-bold mb-2">EthioTelecom Cloud</p>
                                <div className="flex gap-2">
                                    <ContactButton icon={<Phone size={14} />} text="999" />
                                    <ContactButton icon={<MessageCircle size={14} />} text="Support Portal" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                            <AlertTriangle size={16} className="text-red-500 shrink-0" />
                            <span className="text-red-400 text-xs font-bold">Emergency Procedures</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatusRow = ({ label, value, icon }) => (
    <div className="flex justify-between items-center bg-[#050a06] border border-[#1a231c] p-3 rounded-xl">
        <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-lg bg-[#1a231c]`}>
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-400">{label}</span>
        </div>
        <span className="font-black text-white">{value}</span>
    </div>
);

const ContactButton = ({ icon, text }) => (
    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1a231c] text-xs font-bold text-gray-300 hover:bg-[#1a231c] transition-all hover:text-white">
        {icon} {text}
    </button>
);

// Helper for 'PlusFile' icon simulation
import { FilePlus as PlusFileIcon } from 'lucide-react';

export default AdminSupport;
