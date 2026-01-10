import http from '../http';
import { ENDPOINTS } from '../endpoints';

export const marketService = {
    getPrices: async () => {
        return await http.get(ENDPOINTS.MARKET.PRICES);
    }
};
