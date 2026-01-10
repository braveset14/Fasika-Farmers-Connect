import React from 'react';
import { X, Ban } from 'lucide-react';

const DeactivateModal = ({ isOpen, onClose, onConfirm, listing }) => {
    if (!isOpen) return null;

    const handleDeactivate = () => {
        onConfirm();
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
            <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl max-w-md w-full p-8 animate-in zoom-in duration-300">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                        <Ban className="text-red-500" size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-white">Deactivate this listing?</h2>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    If you deactivate this listing, buyers will no longer see it. You can activate it again later if the produce is still available.
                </p>

                {/* Listing Preview */}
                <div className="bg-[#050a06] border border-[#1a231c] rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#1a231c] rounded-xl flex items-center justify-center text-2xl">
                            {listing?.image || '🌾'}
                        </div>
                        <div>
                            <h3 className="text-base font-black text-white">{listing?.crop || 'Teff'} – {listing?.quantity || '20'} quintals</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500">{listing?.location || 'Arsi, Oromia'}</span>
                                <span className="text-xs text-gray-600">•</span>
                                <span className="px-2 py-0.5 rounded bg-[#00df82]/20 text-[#00df82] text-[10px] font-black uppercase">
                                    {listing?.status || 'Active'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 bg-[#1a231c] text-white font-bold rounded-xl hover:bg-[#253027] transition-all text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDeactivate}
                        className="flex-1 px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all text-sm flex items-center justify-center gap-2"
                    >
                        <Ban size={16} />
                        Deactivate listing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeactivateModal;
