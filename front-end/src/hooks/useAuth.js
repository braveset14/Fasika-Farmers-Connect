export const useAuth = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const login = (user, token) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        isAuthenticated: true,
        user,
        token
      })
    );
  };

  const logout = () => {
    localStorage.removeItem("auth");
  };

  return {
    isAuthenticated: auth?.isAuthenticated || false,
    user: auth?.user || null,
    token: auth?.token || null,
    login,
    logout
  };
};
