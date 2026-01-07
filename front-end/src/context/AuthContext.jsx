
import { useNavigate } from "react-router-dom";
import { createContext,useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);

    if (userData.role === "admin") navigate("/admin/dashboard");
    if (userData.role === "farmer") navigate("/farmer/dashboard");
    if (userData.role === "buyer") navigate("/buyer/dashboard");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
