import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. Import Auth Pages (Member 1)
import Landing from './pages/auth/Landing';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import VerifyEmail from './pages/auth/VerifyEmail';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// 2. Import Admin Role Pages (Member 2)
import AdminDashboard from './role/admin/AdminDashboard';
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
import FarmerViewProduct from './role/farmer/product/ViewProduct';
import PostProduct from './role/farmer/product/PostProduct';
import UpdateProduct from './role/farmer/product/UpdateProduct';
import FarmerWeather from './role/farmer/weather/Weather';

// 4. Import Buyer Role Pages (Member 2)
import BuyerDashboard from './role/buyer/BuyerDashboard';
import BuyerViewProduct from './role/buyer/product/ViewProduct';
import BuyerWeather from './role/buyer/weather/Weather';

// Testing Helper Layouts
const AdminLayout = ({ children }) => (
  <div className="flex">
    <AdminNavBar />
    <div className="flex-grow">{children}</div>
  </div>
);

const FarmerLayout = ({ children }) => (
  <div className="flex">
    <FarmerNavbar />
    <div className="flex-grow">{children}</div>
  </div>
);

const BuyerLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    {/* Buyer usually has a top nav or different layout, but for now we'll just show the dashboard */}
    <div className="flex-grow">{children}</div>
  </div>
);

const TestSelector = () => (
  <div className="p-20 text-center bg-gray-50 min-h-screen">
    <h1 className="text-4xl font-black mb-10">Fasika Testing Hub (Member 2)</h1>
    <div className="flex justify-center gap-8">
      <Link to="/admin/dashboard" className="bg-green-800 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">Admin Portal</Link>
      <Link to="/farmer/dashboard" className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">Farmer Portal</Link>
      <Link to="/buyer/dashboard" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">Buyer Market</Link>
    </div>
    <p className="mt-10 text-gray-400 font-medium italic">Bypassing auth for prototype testing.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* --- TESTING ROOT --- */}
        <Route path="/" element={<TestSelector />} />

        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
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
        <Route path="/farmer/dashboard" element={<FarmerLayout><FarmerDashboard /></FarmerLayout>} />
        <Route path="/farmer/product" element={<FarmerLayout><FarmerViewProduct /></FarmerLayout>} />
        <Route path="/farmer/product/post" element={<FarmerLayout><PostProduct /></FarmerLayout>} />
        <Route path="/farmer/product/update/:id" element={<FarmerLayout><UpdateProduct /></FarmerLayout>} />
        <Route path="/farmer/weather" element={<FarmerLayout><FarmerWeather /></FarmerLayout>} />

        {/* --- BUYER ROUTES --- */}
        <Route path="/buyer/dashboard" element={<BuyerLayout><BuyerDashboard /></BuyerLayout>} />
        <Route path="/buyer/product" element={<BuyerLayout><BuyerViewProduct /></BuyerLayout>} />
        <Route path="/buyer/weather" element={<BuyerLayout><BuyerWeather /></BuyerLayout>} />

        {/* --- ORIGINAL AUTH ROUTES (Hidden for testing root) --- */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* --- ERROR PAGE --- */}
        <Route path="/unauthorized" element={<h1>Access Denied</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
