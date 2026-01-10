import {
    LayoutDashboard,
    Search,
    TrendingUp,
    Heart,
    MessageSquare,
    Settings
} from 'lucide-react';

export default [
    { label: "Dashboard", path: "/buyer/dashboard", icon: LayoutDashboard },
    { label: "Search Marketplace", path: "/buyer/search", icon: Search },
    { label: "Market prices", path: "/buyer/market-prices", icon: TrendingUp },
    { label: "Saved listings", path: "/buyer/saved", icon: Heart },
    { label: "Messages", path: "/buyer/messages", icon: MessageSquare },
    { label: "Settings", path: "/buyer/profile", icon: Settings }
];

import { HelpCircle, Phone, LogOut } from 'lucide-react';

export const secondaryMenu = [
    { label: "Help & Tutorial", path: "/buyer/help", icon: HelpCircle },
    { label: "Customer Support", path: "/buyer/support", icon: Phone },
    { label: "Logout", path: "/buyer/logout", icon: LogOut }
];
