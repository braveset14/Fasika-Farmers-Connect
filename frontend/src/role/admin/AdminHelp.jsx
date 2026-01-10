import React from 'react';
import {
    Search,
    CheckCircle,
    Ban,
    CloudLightning,
    BookOpen,
    ChevronRight,
    AlertTriangle,
    Info
} from 'lucide-react';

const AdminHelp = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-white">Admin Help Center</h1>
                <p className="text-gray-400 mt-1">Resources, guides, and tools to manage the platform effectively for farmers and buyers.</p>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                    type="text"
                    placeholder="Search documentation, error codes, or guides..."
                    className="w-full bg-[#0d160f] border border-[#1a231c] rounded-2xl py-4 pl-12 pr-4 text-white text-sm outline-none focus:border-[#00df82] transition-colors"
                />
            </div>

            {/* Quick Actions */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-[#00df82] w-1 h-5 rounded-full"></div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                        <span className="text-[#00df82]"><ZapIcon size={20} /></span> Quick Actions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ActionButton
                        icon={<CheckCircle size={24} className="text-white" />}
                        title="Approve Listings"
                        subtitle="Review pending produce"
                        bg="bg-[#1a231c]"
                    />
                    <ActionButton
                        icon={<Ban size={24} className="text-white" />}
                        title="Suspend User"
                        subtitle="Manage flags and bans"
                        bg="bg-[#1a231c]"
                    />
                    <ActionButton
                        icon={<CloudLightning size={24} className="text-white" />}
                        title="API Status"
                        subtitle="Check weather services"
                        bg="bg-[#1a231c]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Admin User Guides */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex items-center gap-2 mb-6 text-[#00df82]">
                        <BookOpen size={20} />
                        <h2 className="text-lg font-black text-white">Admin User Guides</h2>
                    </div>

                    <div className="space-y-4">
                        <GuideLink text="How to approve listings" />
                        <GuideLink text="Performing bulk user actions" />
                        <GuideLink text="Managing advisory rules" />
                    </div>

                    <button className="mt-6 text-[#00df82] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        View all guides <ChevronRight size={16} />
                    </button>
                </div>

                {/* Troubleshooting */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex items-center gap-2 mb-6 text-[#00df82]">
                        <span className="text-green-500"><WrenchIcon size={20} /></span>
                        <h2 className="text-lg font-black text-white">Troubleshooting Common Issues</h2>
                    </div>

                    <div className="space-y-6">
                        <IssueItem
                            icon={<CloudLightning size={16} className="text-red-500" />}
                            text="Weather API down: Diagnosis"
                        />
                        <IssueItem
                            icon={<AlertTriangle size={16} className="text-yellow-500" />}
                            text="SMS quota exceeded"
                        />
                        <IssueItem
                            icon={<DatabaseIcon size={16} className="text-gray-400" />}
                            text="Database connection errors"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Documentation */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex items-center gap-2 mb-6 text-[#00df82]">
                        <TerminalIcon size={20} />
                        <h2 className="text-lg font-black text-white">Technical Documentation</h2>
                    </div>

                    <div className="bg-[#1a231c]/50 border border-[#1a231c] rounded-2xl p-6 hover:border-[#00df82]/30 transition-all cursor-pointer group">
                        <h3 className="font-bold text-white mb-1 group-hover:text-[#00df82] transition-colors">Database Schema Reference</h3>
                        <p className="text-gray-500 text-xs">Detailed ERD and table definitions for developers.</p>
                    </div>
                </div>

                {/* Platform Update Log */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                    <div className="flex items-center gap-2 mb-6 text-[#00df82]">
                        <HistoryIcon size={20} />
                        <h2 className="text-lg font-black text-white">Platform Update Log</h2>
                    </div>

                    <div className="relative pl-4 border-l-2 border-[#1a231c] space-y-6">
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#00df82] ring-4 ring-[#0d160f]"></div>
                            <p className="text-[10px] font-black text-[#00df82] uppercase tracking-widest mb-1">Dec 25, 2025</p>
                            <h3 className="font-bold text-white text-sm">Improved listing approval workflow</h3>
                            <p className="text-gray-500 text-xs mt-1">Added one-click bulk approval for maize listings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ActionButton = ({ icon, title, subtitle, bg }) => (
    <button className={`flex flex-col items-start p-6 rounded-2xl ${bg} hover:bg-[#253027] transition-all border border-transparent hover:border-[#00df82]/30 group w-full text-left`}>
        <div className="w-10 h-10 rounded-full bg-[#2a362c] flex items-center justify-center mb-4 group-hover:bg-[#00df82] transition-colors">
            {React.cloneElement(icon, { size: 20, className: "text-white group-hover:text-[#050a06]" })}
        </div>
        <div className="font-black text-white mb-1">{title}</div>
        <div className="text-xs text-gray-500 group-hover:text-gray-300">{subtitle}</div>
    </button>
);

const GuideLink = ({ text }) => (
    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1a231c] transition-all group">
        <div className="bg-[#1a231c] p-1.5 rounded-lg text-gray-400 group-hover:text-[#00df82] group-hover:bg-[#00df82]/10 transition-colors">
            <FileTextIcon size={16} />
        </div>
        <span className="text-sm text-gray-300 font-medium group-hover:text-white">{text}</span>
    </a>
);

const IssueItem = ({ icon, text }) => (
    <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-bold text-gray-300">{text}</span>
    </div>
);

// Lucide icon helper wrapper/renames if needed for clarity
import {
    Zap as ZapIcon,
    Wrench as WrenchIcon,
    Database as DatabaseIcon,
    TerminalSquare as TerminalIcon,
    History as HistoryIcon,
    FileText as FileTextIcon
} from 'lucide-react';

export default AdminHelp;
