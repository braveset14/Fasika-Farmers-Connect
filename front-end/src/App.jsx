import {  Routes, Route, Navigate,Router } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import RoleRoute from './routes/RoleRoute';
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



function App() {
  return (
   
      <Routes>
        

        {/* --- ADMIN ROUTES --- */}
        <Route path="/" element={<Landing />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <AdminDashboard/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/management" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <Management/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <ProductManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/prices" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <PriceManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/approvals" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <PostManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/detail/:id" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <ProductDetail/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/analytics" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <ProductAnalytics/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/reports" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <ProductReports/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/product/ratings" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <ProductRatings/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/user" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <FarmerManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/user/buyers" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <BuyerManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/user/detail/:id" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <UserDetail/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/user/suspend/:id" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <SuspendUser/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/user/reports" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <UserReports/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/weather" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <WeatherManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/weather/reports" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <WeatherRepoets/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/tips" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <TipsManagement/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />
        <Route path="/admin/tips/reports" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <TipsReports/>
              </AdminLayout>
            </RoleRoute>
          </ProtectedRoute>
          
          } />

        {/* --- FARMER ROUTES --- */}
        <Route path="/farmer/dashboard" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout>
                  <FarmerDashboard />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          }/>
        <Route path="/farmer/product" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout>
                  <FarmerViewProduct/>
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/product/post" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout>
                  <PostProduct />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/product/update/:id" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout>
                  <UpdateProduct />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/weather" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout>
                  <FarmerWeather />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />

        {/* --- BUYER ROUTES --- */}
        <Route path="/buyer/dashboard" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
        <BuyerLayout>
          <BuyerDashboard />
        </BuyerLayout>
      </RoleRoute>
    </ProtectedRoute>
  } />
        <Route path="/buyer/product" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
        <BuyerLayout>
          <BuyerViewProduct />
        </BuyerLayout>
      </RoleRoute>
    </ProtectedRoute>
  } />
        <Route path="/buyer/weather" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
        <BuyerLayout>
          <BuyerWeather />
        </BuyerLayout>
      </RoleRoute>
    </ProtectedRoute>
  }/>

        {/* --- ORIGINAL AUTH ROUTES (Hidden for testing root) --- */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* --- ERROR PAGE --- */}
        <Route path="/unauthorized" element={<h1>Access Denied</h1>} />

        <Route path="/dev-login" element={
  <div style={{ padding: 40 }}>
    <button onClick={() => {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: { role: 'admin' }
      }));
      window.location.href = '/admin/dashboard';
    }}>
      Login as Admin
    </button>

    <button onClick={() => {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: { role: 'farmer' }
      }));
      window.location.href = '/farmer/dashboard';
    }}>
      Login as Farmer
    </button>

    <button onClick={() => {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: { role: 'buyer' }
      }));
      window.location.href = '/buyer/dashboard';
    }}>
      Login as Buyer
    </button>
  </div>
} />

      </Routes>
    
  );
}

export default App;
