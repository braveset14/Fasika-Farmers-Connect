import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Import all 8 Stages
import RegistrationForm from './pages/auth/RegistrationForm'; // Stage 1
import VerificationPage from './pages/auth/VerificationPage';   // Stage 2
import LoginPage from './pages/auth/LoginPage';               // Stage 3
import ForgotPassword from './pages/auth/ForgotPassword';     // Stage 4
import ResetPassword from './pages/auth/ResetPassword';       // Stage 5
import ChangePassword from './pages/auth/ChangePassword';     // Stage 6
import MFASetup from './pages/auth/MFASetup';                 // Stage 7

// Note: Sidebar is imported here (Teammate's work)
// import Sidebar from './components/Sidebar'; 

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Show Sidebar only if user is logged in */}
      {/* isAuthenticated && <Sidebar /> */}

      <div className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Protected Private Routes */}
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <div className="p-10"><h1>Welcome to Dashboard</h1></div> : <Navigate to="/login" />} 
          />
          
          <Route 
            path="/settings/password" 
            element={isAuthenticated ? <ChangePassword /> : <Navigate to="/login" />} 
          />
          
          <Route 
            path="/settings/mfa" 
            element={isAuthenticated ? <MFASetup /> : <Navigate to="/login" />} 
          />

          {/* Default Redirects */}
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;