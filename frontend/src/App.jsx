import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// 1. Import Auth Pages (Member 1)
import Landing from './pages/auth/Landing';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import VerifyEmail from './pages/auth/VerifyEmail';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import AdminLogin from './pages/auth/AdminLogin';
import AdminRegister from './pages/auth/AdminRegister';

// 2. Import Admin Role Pages (Member 2)
import AdminDashboard from './role/admin/AdminDashboard';
import AdminUserManagement from './role/admin/AdminUserManagement';
import AdminProduceListings from './role/admin/AdminProduceListings';
import AdminAdvisoryWeather from './role/admin/AdminAdvisoryWeather';
import AdminMarketPrices from './role/admin/AdminMarketPrices';
import AdminAlertsReports from './role/admin/AdminAlertsReports';
import AdminSettings from './role/admin/AdminSettings';
import AdminHelp from './role/admin/AdminHelp';
import AdminSupport from './role/admin/AdminSupport';
import AdminLogout from './role/admin/AdminLogout';
import AdminNavBar from './role/admin/AdminNavBar';
import Management from './role/admin/Management';
import ProductManagement from './role/admin/product/ProductManagement';
import PriceManagement from './role/admin/product/PriceManagement';
import PostManagement from './role/admin/product/PostManagement';
import ProductDetail from './role/admin/product/ProductDetail';
import ProductAnalytics from './role/admin/product/ProductAnalytics';
import ProductReports from './role/admin/product/ProductReports';
import ProductRatings from './role/admin/product/ProductRatings';
import FarmerManagement from './role/admin/user/FarmerManagement';
import BuyerManagement from './role/admin/user/BuyerManagement';
import UserDetail from './role/admin/user/UserDetail';
import SuspendUser from './role/admin/user/SuspendUser';
import UserReports from './role/admin/user/UserReports';
import WeatherManagement from './role/admin/weather/WeatherManagement';
import WeatherRepoets from './role/admin/weather/WeatherRepoets';
import TipsManagement from './role/admin/tips/TipsManagement';
import TipsReports from './role/admin/tips/TipsReports';

// 3. Import Farmer Role Pages (Member 2)
import FarmerDashboard from './role/farmer/FarmerDashboard';
import FarmerNavbar from './role/farmer/FarmerNavbar';
import FarmerHeader from './role/farmer/FarmerHeader';
import FarmerViewProduct from './role/farmer/product/ViewProduct';
import PostProduct from './role/farmer/product/PostProduct';
import UpdateProduct from './role/farmer/product/UpdateProduct';
import FarmerWeather from './role/farmer/weather/Weather';
import Advisory from './role/farmer/Advisory';
import MarketPrices from './role/farmer/MarketPrices';
import ProfileSettings from './role/farmer/ProfileSettings';
import Settings from './role/farmer/Settings';
import Help from './role/farmer/Help';
import Support from './role/farmer/Support';
import Logout from './role/farmer/Logout';
import {
  ListingsPlaceholder,
  HelpPlaceholder,
  SupportPlaceholder
} from './role/farmer/FarmerPlaceholders';

// 4. Import Buyer Role Pages (Member 2)
import BuyerDashboard from './role/buyer/BuyerDashboard';
import BuyerViewProduct from './role/buyer/product/ViewProduct';
import BuyerWeather from './role/buyer/weather/Weather';

import BuyerNavbar from './role/buyer/BuyerNavbar';
import BuyerHeader from './role/buyer/BuyerHeader';
import SearchMarketplace from './role/buyer/SearchMarketplace';
import BuyerMarketPrices from './role/buyer/BuyerMarketPrices';
import SavedListings from './role/buyer/SavedListings';
import Messages from './role/buyer/Messages';
import BuyerProfile from './role/buyer/BuyerProfile';
import BuyerHelp from './role/buyer/BuyerHelp';
import BuyerSupport from './role/buyer/BuyerSupport';
import BuyerLogout from './role/buyer/BuyerLogout';

// Testing Helper Layouts
import AdminHeader from './role/admin/AdminHeader';

const AdminLayout = ({ children }) => (
  <div className="flex bg-[#050a06] min-h-screen">
    <AdminNavBar />
    <main className="flex-grow pl-72">
      <div className="p-8 max-w-7xl mx-auto">
        <AdminHeader />
        {children}
      </div>
    </main>
  </div>
);

const FarmerLayout = ({ children }) => (
  <div className="flex bg-[#050a06] min-h-screen">
    <FarmerNavbar />
    <main className="flex-grow pl-72">
      <div className="p-8 max-w-7xl mx-auto">
        <FarmerHeader />
        {children}
      </div>
    </main>
  </div>
);

const BuyerLayout = ({ children }) => (
  <div className="flex bg-[#050a06] min-h-screen">
    <BuyerNavbar />
    <main className="flex-grow pl-72">
      <div className="p-8 max-w-7xl mx-auto">
        <BuyerHeader />
        {children}
      </div>
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* --- AUTH ROUTES --- */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/user" element={<AdminLayout><AdminUserManagement /></AdminLayout>} />
        <Route path="/admin/product" element={<AdminLayout><AdminProduceListings /></AdminLayout>} />
        <Route path="/admin/weather" element={<AdminLayout><AdminAdvisoryWeather /></AdminLayout>} />
        <Route path="/admin/prices" element={<AdminLayout><AdminMarketPrices /></AdminLayout>} />
        <Route path="/admin/reports" element={<AdminLayout><AdminAlertsReports /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
        <Route path="/admin/help" element={<AdminLayout><AdminHelp /></AdminLayout>} />
        <Route path="/admin/support" element={<AdminLayout><AdminSupport /></AdminLayout>} />
        <Route path="/admin/logout" element={<AdminLayout><AdminLogout /></AdminLayout>} />
        <Route path="/admin/management" element={<AdminLayout><Management /></AdminLayout>} />
        <Route path="/admin/product" element={<AdminLayout><ProductManagement /></AdminLayout>} />
        <Route path="/admin/product/prices" element={<AdminLayout><PriceManagement /></AdminLayout>} />
        <Route path="/admin/product/approvals" element={<AdminLayout><PostManagement /></AdminLayout>} />
        <Route path="/admin/product/detail/:id" element={<AdminLayout><ProductDetail /></AdminLayout>} />
        <Route path="/admin/product/analytics" element={<AdminLayout><ProductAnalytics /></AdminLayout>} />
        <Route path="/admin/product/reports" element={<AdminLayout><ProductReports /></AdminLayout>} />
        <Route path="/admin/product/ratings" element={<AdminLayout><ProductRatings /></AdminLayout>} />
        <Route path="/admin/user" element={<AdminLayout><FarmerManagement /></AdminLayout>} />
        <Route path="/admin/user/buyers" element={<AdminLayout><BuyerManagement /></AdminLayout>} />
        <Route path="/admin/user/detail/:id" element={<AdminLayout><UserDetail /></AdminLayout>} />
        <Route path="/admin/user/suspend/:id" element={<AdminLayout><SuspendUser /></AdminLayout>} />
        <Route path="/admin/user/reports" element={<AdminLayout><UserReports /></AdminLayout>} />
        <Route path="/admin/weather" element={<AdminLayout><WeatherManagement /></AdminLayout>} />
        <Route path="/admin/weather/reports" element={<AdminLayout><WeatherRepoets /></AdminLayout>} />
        <Route path="/admin/tips" element={<AdminLayout><TipsManagement /></AdminLayout>} />
        <Route path="/admin/tips/reports" element={<AdminLayout><TipsReports /></AdminLayout>} />

        {/* --- FARMER ROUTES --- */}
        <Route path="/farmer" element={<Navigate to="/farmer/dashboard" replace />} />
        <Route path="/farmer/dashboard" element={<FarmerLayout><FarmerDashboard /></FarmerLayout>} />
        <Route path="/farmer/weather" element={<FarmerLayout><FarmerWeather /></FarmerLayout>} />
        <Route path="/farmer/advisory" element={<FarmerLayout><Advisory /></FarmerLayout>} />
        <Route path="/farmer/market-prices" element={<FarmerLayout><MarketPrices /></FarmerLayout>} />
        <Route path="/farmer/listings" element={<FarmerLayout><FarmerViewProduct /></FarmerLayout>} />
        <Route path="/farmer/product" element={<FarmerLayout><FarmerViewProduct /></FarmerLayout>} />
        <Route path="/farmer/product/post" element={<FarmerLayout><PostProduct /></FarmerLayout>} />
        <Route path="/farmer/product/update/:id" element={<FarmerLayout><UpdateProduct /></FarmerLayout>} />
        <Route path="/farmer/profile" element={<FarmerLayout><ProfileSettings /></FarmerLayout>} />
        <Route path="/farmer/settings" element={<FarmerLayout><Settings /></FarmerLayout>} />
        <Route path="/farmer/help" element={<FarmerLayout><Help /></FarmerLayout>} />
        <Route path="/farmer/support" element={<FarmerLayout><Support /></FarmerLayout>} />
        <Route path="/farmer/logout" element={<FarmerLayout><Logout /></FarmerLayout>} />

        {/* --- BUYER ROUTES --- */}
        <Route path="/buyer/dashboard" element={<BuyerLayout><BuyerDashboard /></BuyerLayout>} />
        <Route path="/buyer/search" element={<BuyerLayout><SearchMarketplace /></BuyerLayout>} />
        <Route path="/buyer/market-prices" element={<BuyerLayout><BuyerMarketPrices /></BuyerLayout>} />
        <Route path="/buyer/saved" element={<BuyerLayout><SavedListings /></BuyerLayout>} />
        <Route path="/buyer/messages" element={<BuyerLayout><Messages /></BuyerLayout>} />
        <Route path="/buyer/profile" element={<BuyerLayout><BuyerProfile /></BuyerLayout>} />
        <Route path="/buyer/product" element={<BuyerLayout><BuyerViewProduct /></BuyerLayout>} />
        <Route path="/buyer/weather" element={<BuyerLayout><BuyerWeather /></BuyerLayout>} />
        <Route path="/buyer/help" element={<BuyerLayout><BuyerHelp /></BuyerLayout>} />
        <Route path="/buyer/support" element={<BuyerLayout><BuyerSupport /></BuyerLayout>} />
        <Route path="/buyer/logout" element={<BuyerLayout><BuyerLogout /></BuyerLayout>} />

        {/* --- ERROR PAGE --- */}
        <Route path="/unauthorized" element={<div className="p-20 text-white">Access Denied</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
