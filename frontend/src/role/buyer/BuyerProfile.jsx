import React from 'react';
import { CheckCircle, MapPin, Edit2, CheckSquare, Square } from 'lucide-react';

const BuyerProfile = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-white mb-2">Buyer Profile</h1>
                <p className="text-gray-400">Manage your personal details and buying preferences.</p>
            </div>

            {/* Success Message */}
            <div className="bg-[#0d160f] border border-[#00df82]/30 rounded-2xl p-4 flex items-center gap-3 text-[#00df82]">
                <CheckCircle size={20} fill="#0d160f" />
                <span className="text-sm font-bold">Profile updated successfully.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Details Form */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 h-full">
                    <div className="flex items-center gap-3 mb-8 text-[#00df82]">
                        <div className="w-10 h-10 bg-[#00df82]/10 rounded-xl flex items-center justify-center">
                            <div className="w-5 h-4 border-2 border-[#00df82] rounded-sm"></div> {/* Briefcase Icon Mock */}
                        </div>
                        <h2 className="text-xl font-extrabold text-white">Your Details</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Full name <span className="text-[#00df82]">*</span></label>
                            <input type="text" defaultValue="Abebe Bikila" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white outline-none focus:border-[#00df82]" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Organization / business name <span className="text-gray-600 lowercase font-medium">(optional)</span></label>
                            <input type="text" defaultValue="Addis Agro Trading" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white outline-none focus:border-[#00df82]" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Phone number <span className="text-[#00df82]">*</span></label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-bold">+251</span>
                                    <input type="text" defaultValue="911 234 567" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl pl-14 pr-4 py-3 text-white outline-none focus:border-[#00df82]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email <span className="text-gray-600 lowercase font-medium">(optional)</span></label>
                                <input type="email" placeholder="name@example.com" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white outline-none focus:border-[#00df82]" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Location (Region, City) <span className="text-[#00df82]">*</span></label>
                            <div className="relative">
                                <input type="text" defaultValue="Oromia, Adama" className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 text-white outline-none focus:border-[#00df82]" />
                                <MapPin size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Buying Preferences */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-8 text-[#00df82]">
                        <div className="w-10 h-10 bg-[#00df82]/10 rounded-xl flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-[#00df82] rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-[#00df82]"></div></div> {/* Cart Icon Mock */}
                        </div>
                        <h2 className="text-xl font-extrabold text-white">Buying Preferences</h2>
                    </div>

                    <div className="space-y-8 flex-grow">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 block mb-3">Preferred crops (Select all that apply)</label>
                            <div className="flex flex-wrap gap-3">
                                <CropChip label="Teff" active={true} />
                                <CropChip label="Coffee" />
                                <CropChip label="Wheat" active={true} />
                                <CropChip label="Maize" />
                                <CropChip label="Sesame" />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 block mb-3">Typical purchase quantity (Quintals)</label>
                            <div className="flex bg-[#050a06] p-1 rounded-xl border border-[#1a231c]">
                                <button className="flex-1 py-3 rounded-lg text-sm font-bold text-gray-500 hover:text-white transition-colors">10-50</button>
                                <button className="flex-1 py-3 rounded-lg text-sm font-black bg-[#00df82] text-[#050a06] shadow-lg">50-100</button>
                                <button className="flex-1 py-3 rounded-lg text-sm font-bold text-gray-500 hover:text-white transition-colors">100+</button>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 block mb-3">Preferred sourcing regions</label>
                            <div className="grid grid-cols-2 gap-4">
                                <RegionCheckbox label="Amhara" checked={true} />
                                <RegionCheckbox label="Oromia" checked={true} />
                                <RegionCheckbox label="Sidama" checked={false} />
                                <RegionCheckbox label="Tigray" checked={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
                <button className="bg-[#00df82] text-[#050a06] px-10 py-4 rounded-xl font-black shadow-lg shadow-[#00df82]/20 hover:bg-[#00df82]/90 transition-all hover:scale-[1.02]">
                    Save changes
                </button>
                <button className="bg-transparent border border-[#1a231c] text-white px-10 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                    Cancel
                </button>
            </div>
        </div>
    );
};

const CropChip = ({ label, active }) => (
    <button className={`px-6 py-3 rounded-full text-sm font-bold border-2 transition-all ${active ? 'bg-[#00df82] border-[#00df82] text-[#050a06]' : 'bg-transparent border-[#1a231c] text-gray-400 hover:border-gray-600'}`}>
        {label}
    </button>
);

const RegionCheckbox = ({ label, checked }) => (
    <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${checked ? 'bg-[#1a231c] border-[#1a231c]' : 'bg-transparent border-[#1a231c] hover:border-gray-700'}`}>
        <div className={`w-5 h-5 rounded flex items-center justify-center ${checked ? 'bg-[#00df82] text-black' : 'border-2 border-gray-600'}`}>
            {checked && <CheckSquare size={14} fill="currentColor" />}
        </div>
        <span className={`text-sm font-bold ${checked ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default BuyerProfile;
