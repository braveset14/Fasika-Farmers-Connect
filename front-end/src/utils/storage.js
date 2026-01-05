export const storage = {
  setToken: (token) => localStorage.setItem('token', token),
  getToken: () => localStorage.getItem('token'),
  setUser: (user) => localStorage.setItem('user', JSON.stringify(user)),
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  clear: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};