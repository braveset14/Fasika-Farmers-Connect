import React, { useState, useEffect } from 'react';
import {
    User,
    Phone,
    Mail,
    Mountain,
    MapPin,
    ChevronDown,
    CheckCircle2,
    Info,
    Store,
    LayoutGrid
} from 'lucide-react';

const ProfileSettings = () => {
    const [selectedCrops, setSelectedCrops] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        region: 'Oromia',
        zone: 'East Shewa',
        village: '',
        farmSize: '0.0'
    });

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                
                if (!token) {
                    console.error('No token found');
                    return;
                }

                const response = await fetch('/api/users/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                if (data) {
                setUserData(data);
                // Populate form with user data
                setFormData({
                    name: data.name || '',
                    email: data.email || '',
                    phone: data.phone || '+251 91 123 4567',
                    region: data.region || 'Oromia',
                    zone: data.zone || 'East Shewa',
                    village: data.village || '',
                    farmSize: data.farmSize?.toString() || '0.0'
                });
                // Set selected crops from backend
                setSelectedCrops(data.mainCrops || []);
            }
                
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const toggleCrop = (crop) => {
        setSelectedCrops(prev =>
            prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const updateData = {
            name: formData.name,
            phone: formData.phone,
            region: formData.region,
            zone: formData.zone,
            village: formData.village,
            farmSize: parseFloat(formData.farmSize) || 0.0,
            mainCrops: selectedCrops // Include selected crops
        };
            const response = await fetch('/api/users/profile', {
                method: 'PUT', 
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
           if (data) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            // Update user data with new values
            setUserData(data);
            // Also update form data
            setFormData({
                ...formData,
                name: data.name,
                email: data.email,
                phone: data.phone,
                region: data.region,
                zone: data.zone,
                village: data.village,
                farmSize: data.farmSize?.toString() || '0.0'
            });
            // Update crops
            setSelectedCrops(data.mainCrops || []);
        }
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-white">Loading profile...</div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-extrabold text-white">Profile Settings</h1>
                <p className="text-xs text-gray-500 mt-1 font-medium">View and update your personal and farm information.</p>
            </div>

            {/* Success Alert */}
            {showAlert && (
                <div className="flex items-center justify-between p-4 bg-[#00df82]/10 border border-[#00df82]/20 rounded-2xl animate-in zoom-in duration-300">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#00df82]" />
                        <span className="text-xs font-bold text-[#00df82]">Profile updated successfully.</span>
                    </div>
                    <button onClick={() => setShowAlert(false)} className="text-[#00df82] hover:opacity-70">
                        <span className="text-lg">×</span>
                    </button>
                </div>
            )}

            <div className="space-y-8">
                {/* Your Details */}
                <Section title="Your details" icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField 
                            label="Full name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                        />
                        <InputField 
                            label="Phone number" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="mt-6">
                        <InputField 
                            label="Email address (Optional)" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </Section>

                {/* Location and Farm Info */}
                <Section title="Location and farm info" icon={Mountain}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">Region <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select 
                                    name="region"
                                    value={formData.region}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl appearance-none outline-none focus:border-[#00df82]/50 transition-all"
                                >
                                    <option>Oromia</option>
                                    <option>Amhara</option>
                                    <option>SNNPR</option>
                                    <option>Tigray</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                            </div>
                        </div>
                        <InputField 
                            label="Zone / Woreda" 
                            name="zone"
                            value={formData.zone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <InputField 
                            label="Village / Kebele (Optional)" 
                            name="village"
                            placeholder="Enter your village"
                            value={formData.village}
                            onChange={handleInputChange}
                        />
                        <InputField 
                            label="Farm size (Hectares)" 
                            name="farmSize"
                            value={formData.farmSize}
                            onChange={handleInputChange}
                            type="number" 
                        />
                    </div>

                    <div className="mt-8">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 block mb-4">Main crops (Select all that apply)</label>
                        <div className="flex flex-wrap gap-3">
                            {['Teff', 'Maize', 'Wheat', 'Coffee', 'Barley'].map(crop => (
                                <button
                                    key={crop}
                                    onClick={() => toggleCrop(crop)}
                                    className={`px-6 py-2.5 rounded-full text-xs font-bold border transition-all ${selectedCrops.includes(crop)
                                            ? 'bg-[#00df82] text-[#050a06] border-[#00df82]'
                                            : 'bg-[#1a231c] text-gray-400 border-[#1a231c] hover:border-gray-600'
                                        }`}
                                >
                                    {crop}
                                </button>
                            ))}
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-500">
                            <div className="w-4 h-4 rounded-full bg-[#1a231c] flex items-center justify-center">
                                <Info size={10} className="text-gray-400" />
                            </div>
                            <span>Your location and crops help Fasika give you better advice and prices.</span>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
                <button className="px-8 py-3 bg-[#0d160f] border border-[#1a231c] text-white text-sm font-black rounded-xl hover:bg-white/5 transition-all">
                    Cancel Changes
                </button>
                <button 
                    onClick={handleSaveProfile}
                    className="px-10 py-3 bg-[#00df82] text-[#050a06] text-sm font-black rounded-xl hover:bg-[#00df82]/90 transition-all shadow-lg"
                >
                    Save Profile
                </button>
            </div>
        </div>
    );
};

const Section = ({ title, icon: Icon, children }) => (
    <div className="bg-[#0d160f] border border-[#1a231c] rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-8">
            <Icon size={20} className="text-[#00df82]" />
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

const InputField = ({ label, name, value, placeholder, required, type = "text", onChange }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-[#050a06] border border-[#1a231c] text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#00df82]/50 transition-all font-medium placeholder:text-gray-700"
        />
    </div>
);

export default ProfileSettings;
