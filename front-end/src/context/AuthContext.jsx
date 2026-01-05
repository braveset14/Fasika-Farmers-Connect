import { useContext } from 'react'; // Add this at the top with other imports

// ... your existing AuthProvider code ...

// ADD THIS AT THE BOTTOM OF THE FILE

import { createContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(storage.getUser());
  const [loading, setLoading] = useState(false);

  // 3️⃣ Login Page: Connects to POST /api/auth/login-user 
  const login = (userData, token) => {
    storage.setToken(token); // Issues Access Token 
    storage.setUser(userData);
    setUser(userData);
  };

  // 8️⃣ Logout: Connects to POST /api/auth/logout-user 
  const logout = async () => {
    setLoading(true);
    try {
      // Logic for backend session invalidation 
      const token = storage.getToken();
      if (token) {
        await fetch('/api/auth/logout-user', { 
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      }
    } catch (error) {
      console.error("Session termination failed on server:", error);
    } finally {
      storage.clear(); // Action: Terminate session 
      setUser(null);
      setLoading(false);
      window.location.href = '/login';
    }
  };
 // 1. Define the logic variables ABOVE the return statement
  const isAuthenticated = !!user; 
  const isFarmer = user?.role === 'Farmer';
  const isBuyer = user?.role === 'Buyer';

  // 2. Pass those clean variables into the Provider
  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      loading, 
      isAuthenticated,
      isFarmer,
      isBuyer
    }}>
      {children}
    </AuthContext.Provider>
  );
};export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};