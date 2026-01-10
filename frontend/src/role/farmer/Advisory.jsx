import React, { useState } from 'react';
import {
    Droplets,
    Bug,
    Leaf,
    Calendar,
    Info,
    CheckCircle,
    Filter,
    ArrowRight,
    Search,
    MapPin,
    Tractor
} from 'lucide-react';

const Advisory = () => {
    const [filter, setFilter] = useState('All');

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-white">Today’s important advice</h1>
                    <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                            <MapPin size={14} className="text-[#00df82]" />
                            <span>For Maize - 0.5 hectares, Arsi, Oromia</span>
                        </div>
                    </div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 bg-[#0d160f] px-3 py-1.5 rounded-full border border-[#1a231c]">
                    Updated: Just now
                </span>
            </div>

            {/* Top Urgent Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <UrgentCard
                    level="High Urgency"
                    title="Irrigate this evening"
                    desc="Soil moisture is critically low. Water after sunset to avoid evaporation."
                    image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400"
                    color="red"
                    icon={Droplets}
                />
                <UrgentCard
                    level="Normal Priority"
                    title="Check for stalk borer"
                    desc="Inspect leaves for window-pane damage. Early detection saves crops."
                    image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400"
                    color="green"
                    icon={Bug}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Advisory List Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-xl font-extrabold text-white mb-6">Advisory notes for this week</h2>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Irrigation', 'Planting', 'Pest & Disease', 'Harvest'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${filter === cat
                                            ? 'bg-[#00df82] text-[#050a06] border-[#00df82]'
                                            : 'bg-[#0d160f] text-gray-400 border-[#1a231c] hover:text-white hover:border-gray-700'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <AdvisoryItem
                            category="IRRIGATION"
                            title="Irrigate in the early morning"
                            desc="Temperatures are rising. Watering before 8 AM ensures deep root absorption for your Maize."
                            tags={['Maize', 'Wheat']}
                            time="Today"
                            icon={Droplets}
                            iconColor="text-blue-400"
                        />
                        <AdvisoryItem
                            category="PEST WARNING"
                            title="Scout for Fall Armyworm"
                            desc="Recent humid weather increases risk. Check undersides of leaves on young plants."
                            tags={['Teff', 'Maize']}
                            time="This Week"
                            icon={Bug}
                            iconColor="text-yellow-500"
                        />
                        <AdvisoryItem
                            category="SOIL HEALTH"
                            title="Prepare compost for next cycle"
                            desc="Start collecting crop residues now. Mixing with animal manure will boost yield next season."
                            tags={['General']}
                            time="Upcoming"
                            icon={Tractor}
                            iconColor="text-green-500"
                        />
                    </div>

                    <button className="w-full py-4 bg-[#0d160f] border border-[#1a231c] rounded-2xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                        Load older advisories
                    </button>
                </div>

                {/* Sidebar Section */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-extrabold text-white mb-2">Crop recommendations</h2>
                        <p className="text-[10px] text-gray-500 font-bold mb-6">Based on location & weather patterns.</p>

                        <div className="space-y-4">
                            <RecommendCard
                                title="Teff"
                                status="Good Fit"
                                statusColor="bg-green-900/40 text-green-400 border-green-800/40"
                                image="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=400"
                                desc="Performs well in expected rainfall and temperature for your Arsi zone."
                                window="Jul - Aug"
                            />
                            <RecommendCard
                                title="Chickpea"
                                status="Moderate"
                                statusColor="bg-yellow-900/40 text-yellow-500 border-yellow-800/40"
                                image="https://images.unsplash.com/photo-1549420063-71887e4726e8?auto=format&fit=crop&q=80&w=400"
                                desc="Can be planted after main rains, but requires careful moisture monitoring."
                                window="Sep - Oct"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-5 bg-[#00df82]/5 border border-[#00df82]/20 rounded-2xl">
                        <Info size={18} className="text-[#00df82] shrink-0" />
                        <p className="text-[10px] text-[#00df82] font-semibold leading-relaxed">
                            Discuss with your local extension worker before making major crop changes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UrgentCard = ({ level, title, desc, image, color, icon: Icon }) => (
    <div className={`flex bg-[#0d160f] border-l-4 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer ${color === 'red' ? 'border-red-500' : 'border-green-500'}`}>
        <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${color === 'red' ? 'bg-red-900/40 text-red-400 border-red-800/40' : 'bg-green-900/40 text-green-400 border-green-800/40'}`}>
                        ! {level}
                    </span>
                    <Icon size={16} className={color === 'red' ? 'text-red-400' : 'text-green-400'} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{desc}</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1a231c] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#00df82] hover:text-[#050a06] transition-all w-fit group-hover:bg-[#1a231c]/80">
                <CheckCircle size={14} />
                Mark Done
            </button>
        </div>
        <div className="w-1/3 relative hidden sm:block">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className={`absolute inset-0 bg-gradient-to-r ${color === 'red' ? 'from-[#0d160f] to-transparent' : 'from-[#0d160f] to-transparent'}`} />
        </div>
    </div>
);

const AdvisoryItem = ({ category, title, desc, tags, time, icon: Icon, iconColor }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] p-6 rounded-3xl hover:border-[#00df82]/30 transition-all group flex items-start gap-6">
        <div className={`w-12 h-12 rounded-2xl bg-[#050a06] flex items-center justify-center shrink-0 ${iconColor} group-hover:scale-110 transition-transform`}>
            <Icon size={24} />
        </div>
        <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{category}</span>
                <span className="text-[10px] font-bold text-gray-400 bg-[#1a231c] px-3 py-1 rounded-full">{time}</span>
            </div>
            <h4 className="text-lg font-extrabold text-white mb-2 group-hover:text-[#00df82] transition-colors">{title}</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4">{desc}</p>
            <div className="flex gap-2">
                {tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase text-gray-400 bg-[#1a231c] px-3 py-1 rounded-lg border border-[#0d160f]">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const RecommendCard = ({ title, status, statusColor, image, desc, window }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl overflow-hidden group hover:border-[#00df82]/30 transition-all cursor-pointer">
        <div className="h-24 relative">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d160f] to-transparent" />
            <span className={`absolute top-3 right-3 text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${statusColor}`}>
                {status}
            </span>
        </div>
        <div className="p-4 pt-0">
            <h4 className="text-lg font-black text-white mb-2">{title}</h4>
            <p className="text-[10px] text-gray-500 font-medium leading-relaxed mb-4">{desc}</p>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold border-t border-[#1a231c] pt-3">
                <Calendar size={12} className="text-[#00df82]" />
                <span>Planting window: {window}</span>
            </div>
        </div>
    </div>
);

export default Advisory;
