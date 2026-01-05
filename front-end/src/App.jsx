import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Sidebar from './components/Sidebar'

// Page Imports
import RegistrationForm from './pages/auth/RegistrationForm'
import VerificationPage from './pages/auth/VerificationPage'
import LoginPage from './pages/auth/LoginPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import ChangePassword from './pages/auth/ChangePassword'
import MFASetup from './pages/auth/MFASetup'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* 8️⃣ Sidebar & Logout: Only show when logged in [cite: 110, 112] */}
      {user && <Sidebar />}

      <div className="flex-1 overflow-y-auto">
        <Routes>
          {/* 1️⃣ Registration Page [cite: 2] */}
          <Route path="/register" element={<RegistrationForm />} />

          {/* 2️⃣ Verification Page (OTP) [cite: 32] */}
          <Route path="/verify" element={<VerificationPage />} />

          {/* 3️⃣ Login Page [cite: 44] */}
          <Route path="/login" element={<LoginPage />} />

          {/* 4️⃣ & 5️⃣ Forgot/Reset Password [cite: 67, 77] */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* 6️⃣ & 7️⃣ Change Password & MFA [cite: 89, 100] */}
          <Route path="/settings/password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
          <Route path="/settings/mfa" element={<ProtectedRoute><MFASetup /></ProtectedRoute>} />

          {/* Main Dashboard (Protected) */}
          <Route path="/dashboard" element={<ProtectedRoute><div>Farmer Dashboard</div></ProtectedRoute>} />

          {/* Redirect to login by default */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App