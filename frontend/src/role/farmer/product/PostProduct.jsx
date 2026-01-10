import React, { useState } from 'react';
import { ArrowLeft, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { mockApi } from '../../../services/mockApi';

const PostProduct = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cropType: '',
        quantity: '',
        unit: 'Quintals',
        qualityGrade: '',
        location: 'Amhara - North Shewa',
        pricePerUnit: '',
        additionalNotes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mockApi.listings.create({
            crop: formData.cropType,
            quantity: formData.quantity,
            unit: formData.unit,
            location: formData.location,
            price: formData.pricePerUnit,
            notes: formData.additionalNotes,
            ownerId: user?.id || 'farmer1',
            status: 'ACTIVE'
        });

        alert("Listing posted successfully!");
        navigate('/farmer/product');
    };

    return (
        <div className="max-w-xl mx-auto py-8 animate-in fade-in zoom-in duration-500">
            {/* Back Button */}
            <button
                onClick={() => navigate('/farmer/product')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold mb-6"
            >
                <ArrowLeft size={16} />
                Back to My Listings
            </button>

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-black text-white mb-3">Post produce listing</h1>
                <p className="text-gray-400 font-medium leading-relaxed">
                    Share what you have for sale so buyers can find you. All fields marked with <span className="text-[#00df82]">*</span> are required.
                </p>
            </div>

            {/* Form Container */}
            <div className="bg-[#0b120d] border border-white/5 rounded-[40px] p-10 shadow-2xl shadow-green-950/20">
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Crop Type */}
                    <div className="space-y-3">
                        <label className="text-[13px] font-black text-white uppercase tracking-wider">
                            Crop type <span className="text-green-500">*</span>
                        </label>
                        <div className="relative group">
                            <select
                                value={formData.cropType}
                                onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                                className="w-full bg-[#050a06] border border-white/10 rounded-2xl px-5 py-4 text-gray-300 text-sm font-bold outline-none focus:border-[#00ff00] transition-all appearance-none cursor-pointer group-hover:bg-[#080f09]"
                                required
                            >
                                <option value="">Select crop (e.g., Teff, Maize)</option>
                                <option value="Teff">Teff</option>
                                <option value="Wheat">Wheat</option>
                                <option value="Maize">Maize</option>
                                <option value="Barley">Barley</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <ChevronDown size={18} strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    {/* Quantity and Unit */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="text-[13px] font-black text-white uppercase tracking-wider">
                                Quantity <span className="text-green-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={formData.quantity}
                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                placeholder="0"
                                className="w-full bg-[#050a06] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm font-bold outline-none focus:border-[#00ff00] transition-all placeholder:text-gray-700 hover:bg-[#080f09]"
                                required
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[13px] font-black text-white uppercase tracking-wider">
                                Unit <span className="text-green-500">*</span>
                            </label>
                            <div className="relative group">
                                <select
                                    value={formData.unit}
                                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                    className="w-full bg-[#050a06] border border-white/10 rounded-2xl px-5 py-4 text-gray-300 text-sm font-bold outline-none focus:border-[#00ff00] transition-all appearance-none cursor-pointer group-hover:bg-[#080f09]"
                                >
                                    <option>Quintals</option>
                                    <option>Kilograms</option>
                                    <option>Tons</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <ChevronDown size={18} strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quality Grade */}
                    <div className="space-y-3">
                        <label className="text-[13px] font-black text-white uppercase tracking-wider">
                            Quality grade <span className="text-green-500">*</span>
                        </label>
                        <div className="relative group">
                            <select
                                value={formData.qualityGrade}
                                onChange={(e) => setFormData({ ...formData, qualityGrade: e.target.value })}
                                className="w-full bg-[#050a06] border border-white/10 rounded-2xl px-5 py-4 text-gray-300 text-sm font-bold outline-none focus:border-[#00ff00] transition-all appearance-none cursor-pointer group-hover:bg-[#080f09]"
                                required
                            >
                                <option value="">Select grade</option>
                                <option value="Grade 1">Grade 1 (Premium)</option>
                                <option value="Grade 2">Grade 2 (Standard)</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <ChevronDown size={18} strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-3">
                        <label className="text-[13px] font-black text-white uppercase tracking-wider">
                            Location <span className="text-green-500">*</span>
                        </label>
                        <div className="relative flex items-center group">
                            <div className="absolute left-5 text-green-500">
                                <MapPin size={18} />
                            </div>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full bg-[#050a06] border border-white/10 rounded-2xl pl-12 pr-16 py-4 text-gray-300 text-sm font-bold outline-none group-hover:bg-[#080f09] cursor-default"
                                readOnly
                            />
                            <button
                                type="button"
                                className="absolute right-5 text-[#00ff00] text-xs font-black uppercase tracking-widest hover:brightness-125 transition-all"
                            >
                                Edit
                            </button>
                        </div>
                    </div>

                    {/* Price with Optional Badge */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-[13px] font-black text-white uppercase tracking-wider">Price per unit (ETB)</label>
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Optional</span>
                        </div>
                        <input
                            type="text"
                            value={formData.pricePerUnit}
                            onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                            placeholder="ETB 0.00"
                            className="w-full bg-[#050a06] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm font-bold outline-none focus:border-[#00ff00] transition-all placeholder:text-gray-800 hover:bg-[#080f09]"
                        />
                    </div>

                    {/* Additional Notes with Optional Badge */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-[13px] font-black text-white uppercase tracking-wider">Additional notes</label>
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Optional</span>
                        </div>
                        <textarea
                            value={formData.additionalNotes}
                            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                            placeholder="Example: Fresh harvest ready next week."
                            rows="4"
                            className="w-full bg-[#050a06] border border-white/10 rounded-[24px] px-5 py-5 text-white text-sm font-bold outline-none focus:border-[#00ff00] transition-all placeholder:text-gray-800 hover:bg-[#080f09] resize-none leading-relaxed"
                        ></textarea>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-4 text-center">
                        <button
                            type="submit"
                            className="w-full bg-[#00ff00] text-black font-black py-5 rounded-[20px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_40px_-5px_rgba(0,255,0,0.3)] text-base"
                        >
                            Post listing
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/farmer/product')}
                            className="text-gray-400 font-black text-sm uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* Support Footer */}
            <div className="mt-12 text-center">
                <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em]">
                    Need help? Call <span className="text-[#00ff00]">8800</span> for support.
                </p>
            </div>
        </div>
    );
};

export default PostProduct;
