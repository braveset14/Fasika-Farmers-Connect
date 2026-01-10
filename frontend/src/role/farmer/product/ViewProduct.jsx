import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit, Ban, MapPin, Plus } from 'lucide-react';
import DeactivateModal from './DeactivateModal';
import Select from '../../../components/ui/Select';

import { useAuth } from '../../../hooks/useAuth';
import { mockApi } from '../../../services/mockApi';

const ViewProduct = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Status: All');
    const [sortBy, setSort] = useState('Newest first');
    const [showDeactivateModal, setShowDeactivateModal] = useState(false);
    const [selectedListing, setSelectedListing] = useState(null);

    // Dynamic state from mockApi
    const [listings, setListings] = useState(mockApi.listings.getByFarmer(user?.id || 'farmer1'));

    const handleDeactivateClick = (listing) => {
        setSelectedListing(listing);
        setShowDeactivateModal(true);
    };

    const confirmDeactivate = () => {
        if (selectedListing) {
            mockApi.listings.deactivate(selectedListing.id);
            setListings(mockApi.listings.getByFarmer(user?.id || 'farmer1'));
            setShowDeactivateModal(false);
        }
    };

    const filteredListings = listings.filter(l => {
        const matchesSearch = l.crop.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'Status: All' || `Status: ${l.status.charAt(0).toUpperCase() + l.status.slice(1).toLowerCase()}` === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-white">My listings</h1>
                    <p className="text-gray-400 mt-2 text-sm">Manage your active and past produce listings.</p>
                </div>
                <button
                    onClick={() => navigate('/farmer/product/post')}
                    className="flex items-center gap-2 bg-[#00df82] text-[#050a06] px-6 py-3.5 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-lg shadow-[#00df82]/20"
                >
                    <Plus size={18} strokeWidth={3} />
                    Post produce
                </button>
            </div>

            {/* Search and Filters */}
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search by crop name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#050a06] border border-[#1a231c] rounded-xl pl-12 pr-4 py-3 text-white text-sm outline-none focus:border-[#00df82] transition-colors"
                        />
                    </div>

                    {/* Status Filter */}
                    <Select
                        value={statusFilter}
                        onChange={setStatusFilter}
                        options={['Status: All', 'Status: Active', 'Status: Pending', 'Status: Inactive']}
                    />

                    {/* Sort */}
                    <Select
                        value={sortBy}
                        onChange={setSort}
                        options={['Newest first', 'Oldest first', 'Quantity: High to Low']}
                    />
                </div>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.length > 0 ? filteredListings.map((listing) => (
                    <div
                        key={listing.id}
                        className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-6 hover:border-[#00df82]/30 transition-all group"
                    >
                        {/* Header with Image and Status */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#1a231c] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                                    {listing.image || '🌾'}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white">{listing.crop}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Posted {listing.postedDate}</p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${listing.status === 'ACTIVE' ? 'bg-[#00df82]/20 text-[#00df82] border-[#00df82]/30' :
                                    listing.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' :
                                        'bg-gray-600/20 text-gray-400 border-gray-600/30'
                                }`}>
                                {listing.status}
                            </span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-[#050a06] border border-[#1a231c] rounded-xl p-4">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Quantity</p>
                                <p className="text-lg font-black text-white">{listing.quantity}</p>
                                <p className="text-xs text-gray-400 font-medium">{listing.unit}</p>
                            </div>
                            <div className="bg-[#050a06] border border-[#1a231c] rounded-xl p-4">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <MapPin size={14} className="text-[#00df82]" />
                                    <p className="text-sm font-bold text-white">{listing.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate(`/farmer/product/update/${listing.id}`)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#1a231c] text-white font-bold rounded-xl hover:bg-[#253027] transition-all text-sm"
                            >
                                <Edit size={16} />
                                Edit
                            </button>
                            {listing.status !== 'INACTIVE' && (
                                <button
                                    onClick={() => handleDeactivateClick(listing)}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#1a231c] text-gray-300 font-bold rounded-xl hover:bg-[#1a231c] transition-all text-sm"
                                >
                                    <Ban size={16} />
                                    Deactivate
                                </button>
                            )}
                        </div>
                    </div>
                )) : (
                    <div className="md:col-span-2 text-center py-20 bg-[#0d160f] rounded-3xl border border-[#1a231c]">
                        <p className="text-gray-500 font-bold">No listings found matching your criteria.</p>
                    </div>
                )}
            </div>

            {/* Deactivate Modal */}
            <DeactivateModal
                isOpen={showDeactivateModal}
                onClose={() => setShowDeactivateModal(false)}
                onConfirm={confirmDeactivate}
                listing={selectedListing}
            />
        </div>
    );
};

export default ViewProduct;
