import http from '../http';
import { ENDPOINTS } from '../endpoints';

export const weatherService = {
    getForecast: async (region) => {
        return await http.get(ENDPOINTS.WEATHER.FORECAST, { params: { region } });
    },
    getAlerts: async () => {
        return await http.get(ENDPOINTS.WEATHER.ALERTS);
    }
};
