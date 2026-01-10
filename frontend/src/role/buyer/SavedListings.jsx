import React from 'react';
import { Search, ChevronDown, CheckCircle, Trash2, Phone, Calendar, Wheat } from 'lucide-react';

const SavedListings = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-white mb-2">Saved listings</h1>
                <p className="text-gray-400">Review the listings you have marked to follow up later. Contact farmers directly to negotiate.</p>
            </div>

            {/* Filter Bar */}
            <div className="flex gap-4 items-end">
                <div className="flex-grow space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Find produce</label>
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-500 text-sm">
                        <Search size={18} />
                        <input type="text" placeholder="Search by crop or farmer..." className="bg-transparent outline-none w-full placeholder-gray-600 text-white" />
                    </div>
                </div>
                <div className="w-64 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Filter by Status</label>
                    <div className="bg-[#0d160f] border border-[#1a231c] rounded-xl px-4 py-3 flex justify-between items-center text-white text-sm cursor-pointer hover:border-[#00df82]/30 transition-all">
                        <span className="font-bold">All listings</span>
                        <ChevronDown size={14} className="text-gray-500" />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <SavedCard
                    title="White Teff – 20 Quintals"
                    price="4,500 ETB"
                    posted="Posted 2 days ago"
                    isActive={true}
                    id="#4402"
                    grade="Grade A"
                    location="Arsi, Oromia"
                    farmer="Kebede T."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Teff_grain.jpg/640px-Teff_grain.jpg"
                />
                <SavedCard
                    title="Maize – 50 Quintals"
                    price="2,800 ETB"
                    posted="Posted 1 week ago"
                    isActive={true}
                    id="#3210"
                    grade="Grade B"
                    location="Bahir Dar"
                    farmer="Almaz A."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Maize_ears.jpg/640px-Maize_ears.jpg"
                />
                <SavedCard
                    title="Dry Coffee – 10 Quintals"
                    price="Negotiable"
                    posted="Posted 1 month ago"
                    isActive={false}
                    id="#1029"
                    grade="Export Grade"
                    location="Sidama"
                    farmer="Dawit M."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/640px-Roasted_coffee_beans.jpg"
                />
            </div>
        </div>
    );
};

const SavedCard = ({ title, price, posted, isActive, id, grade, location, farmer, image }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#00df82]/30 transition-all">
        {/* Image Section */}
        <div className="relative w-full md:w-72 h-48 md:h-auto bg-gray-800">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-white flex items-center gap-2">
                <Calendar size={12} /> {posted}
            </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow p-6">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${isActive ? 'bg-[#00df82]/20 text-[#00df82]' : 'bg-gray-700 text-gray-400'}`}>
                        {isActive ? 'Active' : 'Deactivated'}
                    </span>
                    <span className="text-xs font-medium text-gray-500">ID: {id}</span>
                </div>
                <div className="text-right">
                    <span className={`text-xl font-black ${isActive ? 'text-[#00df82]' : 'text-gray-400'}`}>{price}</span>
                    <p className="text-[10px] text-gray-500">per Quintal</p>
                </div>
            </div>

            <h3 className={`text-2xl font-black mb-6 ${isActive ? 'text-white' : 'text-gray-500'}`}>{title}</h3>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1 flex items-center gap-1"><CheckCircle size={10} /> Quality</p>
                    <p className="text-sm font-bold text-white">{grade}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1"> Location</p>
                    <p className="text-sm font-bold text-white">{location}</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-gray-500 mb-1"> Farmer</p>
                    <p className="text-sm font-bold text-white">{farmer}</p>
                </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-[#1a231c] border-dashed">
                <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-red-400 transition-colors">
                    <Trash2 size={14} /> Remove
                </button>
                <div className="flex gap-3">
                    {isActive ? (
                        <>
                            <button className="bg-[#1a231c] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-white/10 transition-all">
                                View Details
                            </button>
                            <button className="bg-[#00df82] text-[#050a06] text-xs font-black px-6 py-2.5 rounded-xl hover:bg-[#00df82]/90 transition-all flex items-center gap-2">
                                <Phone size={14} fill="currentColor" /> Contact Farmer
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-medium text-gray-500 italic">This listing is no longer active</span>
                            <button className="bg-[#1a231c] text-gray-400 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                                <Phone size={14} /> Contact
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default SavedListings;
