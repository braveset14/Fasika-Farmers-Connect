import http from '../http';
import { ENDPOINTS } from '../endpoints';

export const authService = {
  login: async (credentials) => {
    return await http.post(ENDPOINTS.AUTH.LOGIN, credentials);
  },
  register: async (data) => {
    return await http.post(ENDPOINTS.AUTH.REGISTER, data);
  },
  verifyEmail: async (data) => {
    return await http.post(ENDPOINTS.AUTH.VERIFY_EMAIL, data);
  }
};