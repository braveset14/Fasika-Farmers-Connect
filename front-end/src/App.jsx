import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import your UI Pages
import Landing from './pages/auth/Landing';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import VerifyEmail from './pages/auth/VerifyEmail';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// 2. Import your Security Routes
import ProtectedRoute from './routes/ProtectedRoute';
import RoleRoute from './routes/RoleRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- PUBLIC AUTH ROUTES (Anyone can see these) --- */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* --- PROTECTED ROUTES (Must be logged in) --- */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <div style={{ padding: '20px' }}>
                <h1>Common Dashboard</h1>
                <p>Visible to any logged-in user.</p>
              </div>
            </ProtectedRoute>
          } 
        />

        {/* --- ROLE-BASED ROUTES (Farmer Only) --- */}
        <Route 
          path="/farmer-portal" 
          role="farmer"
          element={
            <RoleRoute allowedRoles={['farmer']}>
              <div style={{ padding: '20px' }}>
                <h1>Farmer Portal</h1>
                <p>Only Farmers can see this.</p>
              </div>
            </RoleRoute>
          } 
        />

        {/* --- ERROR PAGE --- */}
        <Route path="/unauthorized" element={<h1>Access Denied: You don't have the right role.</h1>} />
      </Routes>
    </Router>
  );
}

export default App;