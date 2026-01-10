import React, { useState } from 'react';
import { Search, ChevronDown, Wheat, Coffee, TrendingUp } from 'lucide-react';
import Select from '../../components/ui/Select';

const SearchMarketplace = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cropType, setCropType] = useState('All Crops');
    const [region, setRegion] = useState('All Regions');
    const [quality, setQuality] = useState('Any Grade');

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-white mb-2">Search produce listings</h1>
                <p className="text-gray-400">Find crops by type, location, and quality grade.</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    <div className="lg:col-span-4 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">What are you looking for?</label>
                        <div className="bg-[#050a06] border border-[#1a231c] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-500 text-sm focus-within:border-[#00df82] transition-colors">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Teff, maize, wheat..."
                                className="bg-transparent outline-none w-full placeholder-gray-600 text-white font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Crop Type</label>
                        <Select
                            value={cropType}
                            onChange={setCropType}
                            options={['All Crops', 'White Teff', 'Red Teff', 'Maize', 'Wheat', 'Coffee', 'Beans']}
                        />
                    </div>

                    <div className="lg:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Region</label>
                        <Select
                            value={region}
                            onChange={setRegion}
                            options={['All Regions', 'Oromia', 'Amhara', 'SNNPR', 'Sidama', 'Tigray', 'Afar']}
                        />
                    </div>

                    <div className="lg:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Quality</label>
                        <Select
                            value={quality}
                            onChange={setQuality}
                            options={['Any Grade', 'Grade A', 'Grade B', 'Grade C', 'Premium']}
                        />
                    </div>

                    <div className="lg:col-span-2 pb-[1px]">
                        <button className="w-full bg-[#00df82] text-[#050a06] py-3.5 rounded-xl font-black text-sm hover:bg-[#00df82]/90 transition-all shadow-lg shadow-[#00df82]/20">
                            Apply Filters
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#1a231c]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-5 bg-[#1a231c] rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1 w-3 h-3 bg-gray-500 rounded-full"></div>
                        </div>
                        <span className="text-xs font-bold text-gray-400">Show only active listings</span>
                    </div>
                    <button className="text-xs font-bold text-gray-500 hover:text-white underline">Clear all</button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-extrabold text-white">24 listings found</h2>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <span>Sort by:</span>
                    <span className="text-white cursor-pointer flex items-center gap-1">Newest first <ChevronDown size={12} /></span>
                </div>
            </div>

            <div className="space-y-4">
                <ListingCard
                    title="White Teff"
                    farmer="Alemu Kebede"
                    quantity="30 Quintals"
                    quality="Grade A"
                    qualityColor="text-green-500"
                    location="Arsi, Oromia"
                    date="Dec 24, 2025"
                    price="3,150 ETB"
                    Icon={Wheat}
                    iconColor="text-[#00df82]"
                />
                <ListingCard
                    title="Yellow Maize"
                    farmer="Lake Tana Co-op"
                    quantity="50 Quintals"
                    quality="Grade B"
                    qualityColor="text-yellow-500"
                    location="Bahir Dar"
                    date="Dec 23, 2025"
                    price="2,100 ETB"
                    Icon={TrendingUp} // Using placeholder icon
                    iconColor="text-yellow-500"
                />
                <ListingCard
                    title="Premium Coffee"
                    farmer="Dawit Haile"
                    quantity="10 Quintals"
                    quality="Grade A"
                    qualityColor="text-green-500"
                    location="Jimma"
                    date="Dec 22, 2025"
                    price="On Request"
                    priceColor="text-[#00df82]"
                    Icon={Coffee}
                    iconColor="text-[#00df82]"
                />
            </div>
        </div>
    );
};

const ListingCard = ({ title, farmer, quantity, quality, qualityColor, location, date, price, Icon, iconColor, priceColor }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-[#00df82]/30 transition-all group">
        <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-[#1a231c] rounded-2xl flex items-center justify-center">
                <Icon size={32} className={iconColor} />
            </div>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            <div className="md:col-span-1">
                <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#00df82] transition-colors">{title}</h3>
                <p className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-gray-700 flex items-center justify-center text-[8px] text-white">👤</span>
                    {farmer}
                </p>
            </div>

            <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Quantity</p>
                <p className="text-sm font-bold text-white">{quantity}</p>
            </div>

            <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Quality</p>
                <p className={`text-sm font-bold ${qualityColor}`}>{quality}</p>
            </div>

            <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold text-white flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span> {location}
                </p>
            </div>

            <div className="space-y-1 md:hidden">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Posted</p>
                <p className="text-sm font-bold text-white">{date}</p>
            </div>
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-3 min-w-[140px]">
            <div className="text-right">
                <p className="text-[10px] font-medium text-gray-500 mb-1">Price per Quintal</p>
                <p className={`text-2xl font-black ${priceColor || 'text-[#00df82]'}`}>{price}</p>
            </div>
            <div className="flex gap-3 w-full justify-end">
                <button className="w-10 h-10 bg-[#1a231c] rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                    <div className="w-4 h-5 border-2 border-current rounded-sm border-t-0 border-r-0 transform rotate-[-45deg] mt-[-2px]"></div> {/* Bookmark Icon Mock */}
                </button>
                <button className="bg-white text-black text-xs font-black px-6 py-3 rounded-xl hover:bg-gray-200 transition-all">
                    View details
                </button>
            </div>
        </div>
    </div>
);

export default SearchMarketplace;
