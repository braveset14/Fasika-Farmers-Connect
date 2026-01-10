import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
    LayoutDashboard,
    CloudSun,
    Lightbulb,
    TrendingUp,
    ShoppingBag,
    User,
    Settings,
    HelpCircle,
    MessageSquare,
    LogOut,
    Leaf
} from 'lucide-react';
// import farmerMenu from '../../menu/farmerMenu'; // We will use local definition to be 100% sure

const FarmerNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/farmer/logout');
    };

    // HARDCODED MENU TO ENSURE VISIBILITY
    const farmerMenu = [
        { label: "Dashboard", path: "/farmer/dashboard", icon: LayoutDashboard },
        { label: "Weather", path: "/farmer/weather", icon: CloudSun },
        { label: "Advisory", path: "/farmer/advisory", icon: Lightbulb },
        { label: "Market prices", path: "/farmer/market-prices", icon: TrendingUp },
        { label: "My listings", path: "/farmer/listings", icon: ShoppingBag },
        { label: "Profile", path: "/farmer/profile", icon: User },
        { label: "Settings", path: "/farmer/settings", icon: Settings },
    ];

    const secondaryMenu = [
        { label: "Help / Tutorial", path: "/farmer/help", icon: HelpCircle },
        { label: "Contact support", path: "/farmer/support", icon: MessageSquare },
    ];
    const { user, logout } = useAuth();

    return (
        <nav className="bg-[#050a06] border-r border-[#1a231c] w-72 h-screen flex flex-col fixed left-0 top-0 z-40 overflow-y-auto scrollbar-hide">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8 px-6 pt-6 shrink-0">
                <div className="w-10 h-10 bg-[#00df82] rounded-xl flex items-center justify-center transform rotate-12">
                    <Leaf size={24} className="text-[#050a06]" />
                </div>
                <div>
                    <h2 className="text-lg font-black text-white leading-tight">Fasika Farmers’</h2>
                    <p className="text-xs font-bold text-[#00df82] tracking-wider -mt-1">Connect</p>
                </div>
            </div>

            <div className="px-6 pb-6 flex flex-col flex-grow">
                {/* Profile Card */}
                <div className="bg-[#0d160f] border border-[#1a231c] rounded-2xl p-4 mb-8 flex items-center gap-4 group hover:border-[#00df82]/30 transition-all cursor-pointer shrink-0">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-[#00df82] p-0.5">
                            <div className="w-full h-full bg-[#1a231c] rounded-full flex items-center justify-center text-[#00df82] font-black overflow-hidden">
                                {user?.name ? (
                                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1a231c&color=00df82`} alt={user.name} />
                                ) : (
                                    'F'
                                )}
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00df82] rounded-full border-2 border-[#0d160f]" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm font-bold text-white leading-none mb-1 truncate max-w-[100px]">{user?.name?.split(' ')[0] || 'Farmer'}</p>
                        <p className="text-[10px] font-medium text-gray-500">Standard Plan</p>
                    </div>
                </div>

                {/* Main Menu */}
                <div className="space-y-1 mb-8 shrink-0">
                    {farmerMenu.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group ${isActive
                                    ? 'bg-[#00df82]/10 text-[#00df82] border-l-4 border-[#00df82]'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon size={20} className={isActive ? 'text-[#00df82]' : 'text-gray-500 group-hover:text-[#00df82]'} />
                                    <span className="text-sm">{item.label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Secondary Menu */}
                <div className="space-y-1 pt-6 border-t border-[#1a231c] mb-6 shrink-0">
                    <p className="px-4 text-[10px] font-black uppercase text-gray-600 tracking-widest mb-2">Support</p>
                    {secondaryMenu.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all group ${isActive
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            <item.icon size={18} className="text-gray-500 group-hover:text-white" />
                            <span className="text-xs">{item.label}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-[#e11d48] hover:bg-[#e11d48]/10 transition-all group mt-auto shrink-0"
                >
                    <LogOut size={18} className="text-[#e11d48]/70 group-hover:text-[#e11d48]" />
                    <span className="text-sm">Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default FarmerNavbar;
