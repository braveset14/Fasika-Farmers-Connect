import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Lock, MapPin, Tractor, CheckCircle, ChevronDown } from 'lucide-react';
import { mockApi } from '../../../services/mockApi';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        cropType: '',
        location: '',
        quantity: '',
        unit: 'Quintals',
        qualityGrade: 'Grade 2',
        pricePerUnit: '',
        notes: ''
    });

    useEffect(() => {
        const product = mockApi.listings.getById(id);
        if (product) {
            setFormData({
                cropType: product.crop,
                location: product.location,
                quantity: product.quantity,
                unit: product.unit,
                qualityGrade: product.qualityGrade || 'Grade 2',
                pricePerUnit: product.price,
                notes: product.notes || ''
            });
        }
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        mockApi.listings.update(id, {
            quantity: formData.quantity,
            unit: formData.unit,
            qualityGrade: formData.qualityGrade,
            price: formData.pricePerUnit,
            notes: formData.notes
        });
        alert("Changes saved successfully!");
        navigate('/farmer/product');
    };

    return (
        <div className="max-w-2xl mx-auto py-8">
            {/* Back Button */}
            <button
                onClick={() => navigate('/farmer/product')}
                className="flex items-center gap-2 text-gray-400 hover:text-[#00ff00] transition-colors mb-8 font-bold text-sm"
            >
                <ArrowLeft size={18} />
                Back to listings
            </button>

            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-white mb-2">Edit listing</h1>
                <p className="text-gray-400">Update details of your produce for sale.</p>
            </div>

            {/* Summary Card */}
            <div className="bg-[#121a14] border border-white/5 rounded-3xl p-6 mb-8 flex items-center gap-5 shadow-lg">
                <div className="w-16 h-16 bg-[#1a231c] rounded-2xl flex items-center justify-center">
                    <Tractor className="text-[#00ff00]" size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-black text-white">
                        {formData.cropType} – {formData.quantity} {formData.unit?.toLowerCase() || ''}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-bold">
                            <MapPin size={14} className="text-gray-600" />
                            {formData.location}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                        <div className="flex items-center gap-1.5 text-[#00ff00] text-sm font-black">
                            <CheckCircle size={14} strokeWidth={3} />
                            Status: Active
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-[#0b120d] border border-white/5 rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff00]/5 blur-[80px] rounded-full pointer-events-none" />

                <form onSubmit={handleUpdate} className="space-y-8 relative z-10">

                    {/* Readonly Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-white/5">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">Crop Type</label>
                                <Lock size={10} className="text-gray-600" />
                            </div>
                            <div className="relative">
                                <Tractor size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" />
                                <input
                                    type="text"
                                    value={formData.cropType}
                                    readOnly
                                    className="w-full bg-[#121a14]/60 border border-white/5 rounded-2xl py-4 pl-14 pr-5 text-gray-500 text-sm font-bold cursor-not-allowed"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">Location</label>
                                <Lock size={10} className="text-gray-600" />
                            </div>
                            <div className="relative">
                                <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" />
                                <input
                                    type="text"
                                    value={formData.location}
                                    readOnly
                                    className="w-full bg-[#121a14]/60 border border-white/5 rounded-2xl py-4 pl-14 pr-5 text-gray-500 text-sm font-bold cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quantity & Unit Row */}
                    <div className="space-y-3">
                        <label className="text-[11px] font-black text-white uppercase tracking-widest pl-1">Quantity</label>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <input
                                    type="number"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    className="w-full bg-[#121a14] border border-white/10 rounded-2xl p-4 text-white text-sm font-bold outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]/20 transition-all"
                                />
                            </div>
                            <div className="relative w-44">
                                <select
                                    value={formData.unit}
                                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                    className="w-full h-full bg-[#121a14] border border-white/10 rounded-2xl px-5 text-white text-sm font-bold outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]/20 appearance-none cursor-pointer"
                                >
                                    <option>Quintals</option>
                                    <option>Kilograms</option>
                                    <option>Tons</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                        <p className="text-[11px] font-bold text-gray-500 mt-2 pl-1 italic">Current stock available for sale.</p>
                    </div>

                    {/* Quality & Price Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="text-[11px] font-black text-white uppercase tracking-widest pl-1">Quality Grade</label>
                            <div className="relative">
                                <select
                                    value={formData.qualityGrade}
                                    onChange={(e) => setFormData({ ...formData, qualityGrade: e.target.value })}
                                    className="w-full bg-[#121a14] border border-white/10 rounded-2xl py-4 px-5 text-white text-sm font-bold outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]/20 appearance-none cursor-pointer"
                                >
                                    <option>Grade 1</option>
                                    <option>Grade 2</option>
                                    <option>Grade 3</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[11px] font-black text-white uppercase tracking-widest pl-1">Price per unit (ETB)</label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 text-[10px] font-black">ETB</span>
                                <input
                                    type="text"
                                    value={formData.pricePerUnit}
                                    onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                                    className="w-full bg-[#121a14] border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white text-sm font-bold outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]/20 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notes Row */}
                    <div className="space-y-3">
                        <label className="text-[11px] font-black text-white uppercase tracking-widest pl-1">Additional Notes</label>
                        <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="Describe the condition, harvest date, or any specific details about your produce..."
                            rows="4"
                            className="w-full bg-[#121a14] border border-white/10 rounded-3xl p-5 text-white text-sm font-bold outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]/20 resize-none leading-relaxed placeholder:text-gray-700"
                        ></textarea>
                    </div>

                    {/* Buttons Row */}
                    <div className="flex gap-4 pt-10">
                        <button
                            type="button"
                            onClick={() => navigate('/farmer/product')}
                            className="flex-1 bg-transparent border border-white/10 text-white font-black py-5 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm uppercase tracking-widest shadow-inner shadow-white/5"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] bg-[#00ff00] text-black font-black py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_15px_45px_-10px_rgba(0,255,0,0.4)] flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                        >
                            <Save size={18} strokeWidth={3} />
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
