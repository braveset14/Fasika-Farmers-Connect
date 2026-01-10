import React from 'react';
import {
    CloudSun,
    Lightbulb,
    TrendingUp,
    Plus,
    Edit3,
    MoreHorizontal,
    MessageCircle,
    Phone
} from 'lucide-react';

const Help = () => {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-white">Help Center</h1>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Learn how to get the most out of your farm dashboard.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#00df82] text-[#050a06] text-xs font-bold rounded-xl hover:bg-[#00df82]/90 transition-all">
                    <Plus size={16} />
                    Post Produce
                </button>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-black text-white">How to use Fasika</h2>
                <p className="text-sm text-gray-400 font-medium max-w-2xl">
                    These simple steps show how to see weather and advice, check prices, and post your produce to sell.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Weather Guide */}
                    <GuideCard title="See today's weather" icon={CloudSun} color="bg-blue-500/10 text-blue-400">
                        <Step number="1" text="Open Menu" icon={<MoreHorizontal size={14} />} />
                        <Step number="2" text="Read Temp" highlight="24°C" />
                        <Step number="3" text="Check Days" icon={<TrendingUp size={14} />} />
                    </GuideCard>

                    {/* Advisory Guide */}
                    <GuideCard title="Farming advice" icon={Lightbulb} color="bg-[#00df82]/10 text-[#00df82]">
                        <Step number="1" text="Open Advisory" icon={<Lightbulb size={14} />} />
                        <Step number="2" text="Find Advice" highlight="! Tip" accent="text-yellow-500" />
                        <Step number="3" text="Tap to read" icon={<div className="w-3 h-3 bg-white/20 rounded-full" />} />
                    </GuideCard>

                    {/* Market Guide */}
                    <GuideCard title="Check market prices" icon={TrendingUp} color="bg-purple-500/10 text-purple-400">
                        <Step number="1" text="Open Market" icon={<TrendingUp size={14} />} />
                        <Step number="2" text="Pick Crop" icon={<div className="w-2 h-2 rounded-full bg-white" />} />
                        <Step number="3" text="Compare" icon={<TrendingUp size={14} />} />
                    </GuideCard>

                    {/* Post Listing Guide */}
                    <GuideCard title="Post a new listing" icon={Plus} color="bg-[#00df82]/10 text-[#00df82]">
                        <Step number="1" text="My Listings" icon={<MoreHorizontal size={14} />} />
                        <Step number="2" text="Tap Post" icon={<Plus size={14} className="bg-[#00df82] text-[#050a06] rounded p-0.5" />} />
                        <Step number="3" text="Fill & Post" icon={<Edit3 size={14} />} />
                    </GuideCard>

                    {/* Edit Guide */}
                    <GuideCard title="Edit or Deactivate" icon={Edit3} color="bg-orange-500/10 text-orange-400">
                        <Step number="1" text="View Listing" icon={<div className="w-2 h-2 border border-white rounded-full" />} />
                        <Step number="2" text="Tap Edit" icon={<Edit3 size={14} />} />
                        <Step number="3" text="Save Change" icon={<div className="w-3 h-3 bg-[#00df82] rounded-full" />} />
                    </GuideCard>
                </div>
            </div>

            {/* Still Need Help Footer */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-xl font-black text-white">Still need help?</h3>
                        <p className="text-xs text-gray-500 font-medium mt-2 max-w-md">
                            You can call our support team for free. We speak Amharic, Oromiffa, and Tigrinya.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-3 px-6 py-3 bg-white text-[#050a06] text-sm font-black rounded-xl hover:bg-gray-200 transition-all">
                            <Phone size={18} />
                            Call Support
                        </button>
                        <button className="flex items-center gap-3 px-6 py-3 bg-[#1a231c] text-white text-sm font-black rounded-xl border border-[#1a231c] hover:border-[#00df82]/50 hover:text-[#00df82] transition-all">
                            <MessageCircle size={18} />
                            Chat Agent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GuideCard = ({ title, icon: Icon, color, children }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 group hover:border-[#00df82]/30 transition-all">
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-lg font-black text-white">{title}</h3>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={20} />
            </div>
        </div>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const Step = ({ number, text, icon, highlight, accent }) => (
    <div className="flex items-center justify-between group/step">
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#00df82] text-[#050a06] font-black flex items-center justify-center text-xs group-hover/step:scale-110 transition-transform">
                {number}
            </div>
            <span className="text-xs font-bold text-gray-300">{text}</span>
        </div>
        <div className="text-gray-500">
            {icon}
            {highlight && <span className={`text-xs font-black px-2 py-1 bg-[#1a231c] rounded border border-[#2d3b30] ${accent ? accent : 'text-white'}`}>{highlight}</span>}
        </div>
    </div>
);

export default Help;
