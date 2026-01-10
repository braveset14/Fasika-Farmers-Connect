import React from 'react';
import { Search, Star, BarChart2, Phone, GraduationCap, ChevronRight } from 'lucide-react';

const BuyerHelp = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <div className="flex items-center gap-2 mb-2 text-[#00df82]">
                    <GraduationCap size={24} />
                    <span className="text-xs font-black uppercase tracking-widest">Tutorial Center</span>
                </div>
                <h1 className="text-4xl font-black text-white mb-3">How to use Fasika as a buyer</h1>
                <p className="text-gray-400 text-lg">Learn how to search listings, check prices, save offers, and contact farmers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TutorialCard
                    title="Find a listing"
                    icon={<Search size={24} className="text-[#00df82]" />}
                    steps={[
                        { num: 1, text: "Open Search listings.", bold: "Search listings" },
                        { num: 2, text: "Choose crop and region.", bold: "crop" },
                        { num: 3, text: "Look at results.", bold: "results" },
                    ]}
                />
                <TutorialCard
                    title="Save a listing"
                    icon={<Star size={24} fill="#00df82" className="text-[#00df82]" />}
                    steps={[
                        { num: 1, text: "In results, tap the Star icon.", bold: "Star icon" },
                        { num: 2, text: "See it later under Saved listings.", bold: "Saved listings" },
                    ]}
                />
                <TutorialCard
                    title="Check prices"
                    icon={<BarChart2 size={24} className="text-[#00df82]" />}
                    steps={[
                        { num: 1, text: "Open Market prices.", bold: "Market prices" },
                        { num: 2, text: "Pick crop and markets.", bold: "crop" },
                        { num: 3, text: "Compare prices.", bold: "Compare" },
                    ]}
                />
                <TutorialCard
                    title="Contact a farmer"
                    icon={<Phone size={24} fill="#00df82" className="text-[#00df82]" />}
                    steps={[
                        { num: 1, text: "Go to Saved listings.", bold: "Saved listings" },
                        { num: 2, text: "Tap View details.", bold: "View details" },
                        { num: 3, text: "See number and Call/SMS.", bold: "Call/SMS" },
                    ]}
                />
            </div>

            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 flex justify-between items-center group hover:border-[#00df82]/30 transition-all mt-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1a231c] rounded-full flex items-center justify-center text-gray-400">
                        <div className="w-6 h-6 border-2 border-gray-500 rounded-full flex items-center justify-center font-bold text-xs">?</div>
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-white">Still need help?</h3>
                        <p className="text-gray-400">Call our support line for assistance.</p>
                    </div>
                </div>
                <button className="bg-[#00df82] text-[#050a06] px-8 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20">
                    <Phone size={18} fill="currentColor" /> Call Support
                </button>
            </div>
        </div>
    );
};

const TutorialCard = ({ title, icon, steps }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 relative overflow-hidden group hover:border-[#00df82]/30 transition-all">
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-black text-white">{title}</h3>
            <div className="w-12 h-12 bg-[#1a231c] rounded-xl flex items-center justify-center shadow-inner">
                {icon}
            </div>
        </div>

        <div className="space-y-6">
            {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00df82]/20 text-[#00df82] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.num}
                    </div>
                    <p className="text-sm font-bold text-gray-300">
                        {step.text.split(step.bold).map((part, i) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < step.text.split(step.bold).length - 1 && <span className="text-white underline decoration-[#00df82]">{step.bold}</span>}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            ))}
        </div>

        <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#00df82] rounded-r-full"></div>
    </div>
);

export default BuyerHelp;
