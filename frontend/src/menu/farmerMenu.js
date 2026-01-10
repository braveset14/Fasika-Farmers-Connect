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
    LogOut
} from 'lucide-react';

export default [
    { label: "Dashboard", path: "/farmer/dashboard", icon: LayoutDashboard },
    { label: "Weather", path: "/farmer/weather", icon: CloudSun },
    { label: "Advisory", path: "/farmer/advisory", icon: Lightbulb },
    { label: "Market prices", path: "/farmer/market-prices", icon: TrendingUp },
    { label: "My listings", path: "/farmer/listings", icon: ShoppingBag },
    { label: "Profile", path: "/farmer/profile", icon: User },
    { label: "Settings", path: "/farmer/settings", icon: Settings },
];

export const secondaryMenu = [
    { label: "Help / Tutorial", path: "/farmer/help", icon: HelpCircle },
    { label: "Contact support", path: "/farmer/support", icon: MessageSquare },
];
