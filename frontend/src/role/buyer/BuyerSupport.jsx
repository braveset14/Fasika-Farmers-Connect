import React from 'react';
import { Phone, MessageSquare, Mail, Send } from 'lucide-react';

const BuyerSupport = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-white mb-2">Buyer Support</h1>
                <p className="text-gray-400">We are here to help you with your orders and account.</p>
            </div>

            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <h2 className="text-xl font-extrabold text-white mb-2">Talk to the support team</h2>
                <p className="text-sm text-gray-400 mb-8">Support can help with account issues, listing problems, and general questions.</p>

                <div className="space-y-6">
                    <SupportOption
                        icon={<Phone size={20} fill="currentColor" />}
                        title="Call Support"
                        detail="0911 234 567"
                        action="Call Now"
                        actionIcon={<Phone size={16} fill="currentColor" />}
                        primary
                    />
                    <SupportOption
                        icon={<MessageSquare size={20} fill="currentColor" />}
                        title="Send SMS"
                        detail="Text 'HELP' to 0911 234 567"
                        action="Send SMS"
                        actionIcon={<Send size={16} fill="currentColor" />}
                    />
                    <SupportOption
                        icon={<Mail size={20} fill="currentColor" />}
                        title="Email Support"
                        detail="support@fasika.et"
                        action="Email Us"
                        actionIcon={<Mail size={16} fill="currentColor" />}
                    />
                </div>
            </div>

            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
                <h2 className="text-xl font-extrabold text-white mb-6">Send a message from Fasika</h2>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-300 uppercase tracking-widest pl-1">Subject</label>
                        <input type="text" placeholder="Issue with a listing" className="w-full bg-[#050a06] border border-[#1a231c] rounded-lg px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#00df82]" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-300 uppercase tracking-widest pl-1">Message</label>
                        <textarea rows="6" placeholder="Explain your problem in a few words..." className="w-full bg-[#050a06] border border-[#1a231c] rounded-lg px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#00df82] resize-none"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SupportOption = ({ icon, title, detail, action, actionIcon, primary }) => (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-[#050a06] border border-[#1a231c] hover:border-[#00df82]/30 transition-all gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 bg-[#1a231c] rounded-xl flex items-center justify-center text-[#00df82]">
                {icon}
            </div>
            <div>
                <h3 className="text-base font-bold text-white leading-tight">{title}</h3>
                <p className="text-xs font-medium text-gray-400">{detail}</p>
            </div>
        </div>
        <button className={`w-full md:w-auto px-6 py-3 rounded-lg font-black text-sm flex items-center justify-center gap-2 transition-all ${primary
                ? 'bg-[#00df82] text-[#050a06] hover:bg-[#00df82]/90 shadow-lg shadow-[#00df82]/20'
                : 'bg-[#1a231c] text-white hover:bg-white/10'
            }`}>
            {actionIcon} {action}
        </button>
    </div>
);

export default BuyerSupport;
