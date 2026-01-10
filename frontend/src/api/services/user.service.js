import http from '../http';
import { ENDPOINTS } from '../endpoints';

export const userService = {
  getProfile: async () => {
    // Token is handled by axios interceptor
    return await http.get(ENDPOINTS.USER.PROFILE);
  },
  updateProfile: async (data) => {
    return await http.put(ENDPOINTS.USER.PROFILE, data);
  }
};