import {
    LayoutDashboard,
    Users,
    Package,
    CloudSun,
    TrendingUp,
    AlertTriangle,
    Settings,
    HelpCircle,
    MessageSquare
} from 'lucide-react';

export const adminMenu = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "User Management", path: "/admin/user", icon: Users },
    { label: "Produce Listings", path: "/admin/product", icon: Package },
    { label: "Advisory & Weather", path: "/admin/weather", icon: CloudSun },
    { label: "Market Prices", path: "/admin/prices", icon: TrendingUp },
    { label: "Alerts & Reports", path: "/admin/reports", icon: AlertTriangle }
];

export const secondaryMenu = [
    { label: "Settings", path: "/admin/settings", icon: Settings },
    { label: "Help Center", path: "/admin/help", icon: HelpCircle },
    { label: "Support & Escalation", path: "/admin/support", icon: MessageSquare }
];

export default adminMenu;
