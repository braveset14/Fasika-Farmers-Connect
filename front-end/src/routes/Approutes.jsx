
import { Routes,Route,Navigate } from "react-router-dom";
import ProtectedRoute from '../routes/ProtectedRoute';
import RoleRoute from '../routes/RoleRoute';
// Main pages
import Home from "../pages/Home";
import Market from "../pages/Market";
import Advisory from "../pages/Advisory";
import Help from "../pages/Help";
import Notifications from "../pages/Notifications";
import Weather from "../pages/Weather";
import About from "../pages/static/AboutUs";
import Contact from "../pages/static/Contact";
import Team from "../pages/static/Team";
import Cookies from "../pages/legal/Cookies";
import Privacy from "../pages/legal/PrivacyPolicy";
import Terms from "../pages/legal/TermsOfService";

//Auth Pages
import Landing from '../pages/auth/Landing';
import LoginForm from '../pages/auth/LoginForm';
import RegisterForm from '../pages/auth/RegisterForm';
import VerifyEmail from '../pages/auth/VerifyEmail';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';

// Admin Role Pages
import AdminDashboard from '../role/admin/AdminDashboard';
import AdminNavBar from '../role/admin/AdminNavBar';
import Management from '../role/admin/Management';
import ProductManagement from '../role/admin/product/ProductManagement';
import PriceManagement from '../role/admin/product/PriceManagement';
import PostManagement from '../role/admin/product/PostManagement';
import ProductDetail from '../role/admin/product/ProductDetail';
import ProductAnalytics from '../role/admin/product/ProductAnalytics';
import ProductReports from '../role/admin/product/ProductReports';
import ProductRatings from '../role/admin/product/ProductRatings';
import FarmerManagement from '../role/admin/user/FarmerManagement';
import BuyerManagement from '../role/admin/user/BuyerManagement';
import UserDetail from '../role/admin/user/UserDetail';
import SuspendUser from '../role/admin/user/SuspendUser';
import UserReports from '../role/admin/user/UserReports';
import WeatherManagement from '../role/admin/weather/WeatherManagement';
import WeatherRepoets from '../role/admin/weather/WeatherRepoets';
import TipsManagement from '../role/admin/tips/TipsManagement';
import TipsReports from '../role/admin/tips/TipsReports';

// Farmer Role Pages 
import FarmerDashboard from '../role/farmer/FarmerDashboard';
import FarmerNavbar from '../role/farmer/FarmerNavbar';
import FarmerViewProduct from '../role/farmer/product/ViewProduct';
import PostProduct from '../role/farmer/product/PostProduct';
import UpdateProduct from '../role/farmer/product/UpdateProduct';
import FarmerWeather from '../role/farmer/weather/Weather';

// Buyer Role Pages
import BuyerDashboard from '../role/buyer/BuyerDashboard';
import BuyerViewProduct from '../role/buyer/product/ViewProduct';
import BuyerWeather from '../role/buyer/weather/Weather';
//  Layout Pages
import FarmerLayout from "../layouts/FarmerLayout";
import AdminLayout from "../layouts/AdminLayout";

export default function AppRoutes({ sidebarOpen, toggleSidebar }){
    return(
        
        <Routes> 
            <Route path="/" element={<Landing />} ></Route>
            {/* Main Routes */}
            <Route path="/market" element={<Market />} ></Route>
            <Route path="/advisory" element={<Advisory />} ></Route>
            <Route path="/help" element={<Help />} ></Route>
            <Route path="/notifications" element={<Notifications />} ></Route>
            <Route path="/weather" element={<Weather />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/team" element={<Team />} ></Route>
            <Route path="/cookies" element={<Cookies />} ></Route>
            <Route path="/privacy" element={<Privacy />} ></Route>
            <Route path="/terms" element={<Terms />} ></Route>
           
            {/* Admin Routes */}

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
                <FarmerLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
                  <FarmerDashboard />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          }/>
        <Route path="/farmer/product" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
                  <FarmerViewProduct/>
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/product/post" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
                  <PostProduct />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/product/update/:id" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
                  <UpdateProduct />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />
        <Route path="/farmer/weather" element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["farmer"]}>
                <FarmerLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
                  <FarmerWeather />
                </FarmerLayout>
              </RoleRoute>
            </ProtectedRoute>
          } />

           {/* --- BUYER ROUTES --- */}

        <Route path="/buyer/dashboard" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
        
          <BuyerDashboard />
      
      </RoleRoute>
    </ProtectedRoute>
  } />
        <Route path="/buyer/product" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
       
          <BuyerViewProduct />
       
      </RoleRoute>
    </ProtectedRoute>
  } />
        <Route path="/buyer/weather" element={
    <ProtectedRoute>
      <RoleRoute allowedRoles={["buyer"]}>
       
          <BuyerWeather />
        
      </RoleRoute>
    </ProtectedRoute>
  }/>

  {/* Auth Routes */}

      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    
  {/* Unauthorized */}

      <Route path="/unauthorized" element={<h1>Access Denied</h1>} />
    
    
    </Routes>
    )}



