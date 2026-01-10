import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ label, options, value, onChange, placeholder = "Select option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#050a06] border transition-all text-sm font-bold ${isOpen ? 'border-[#00df82] ring-1 ring-[#00df82]/20' : 'border-[#1a231c] hover:border-[#00df82]/30'
                    } text-white`}
            >
                <span className="truncate">{value || placeholder}</span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00df82]' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-[#0d160f] border border-[#1a231c] rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2.5 text-sm font-bold cursor-pointer transition-colors ${value === option
                                    ? 'bg-[#00df82]/10 text-[#00df82]'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
