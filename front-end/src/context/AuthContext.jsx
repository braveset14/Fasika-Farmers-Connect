import { createContext, useState, useContext, useEffect } from 'react';
import { storage } from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(storage.getUser());
  const [loading, setLoading] = useState(false);

  const login = (userData, token) => {
    storage.setToken(token);
    storage.setUser(userData);
    setUser(userData);
  };

  const logout = async () => {
    setLoading(true);
    try {
      const token = storage.getToken();
      if (token) {
        await fetch('/api/auth/logout-user', { 
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      storage.clear();
      setUser(null);
      setLoading(false);
      window.location.href = '/login';
    }
  };

  const isAuthenticated = !!user;
  const isFarmer = user?.role === 'Farmer';
  const isBuyer = user?.role === 'Buyer';

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated, isFarmer, isBuyer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);