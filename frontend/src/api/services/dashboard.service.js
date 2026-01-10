import http from '../http';
import { ENDPOINTS } from '../endpoints';

// Dashboard Business Service
export const dashboardService = {
    getAdminStats: async () => {
        try {
            return await http.get(ENDPOINTS.ADMIN.STATS);
        } catch (error) {
            console.error("Dashboard Service Error:", error);
            throw error;
        }
    },

    getFarmerStats: async () => {
        try {
            // This would ideally be a single endpoint returning all farmer dashboard data
            return await http.get(ENDPOINTS.USER.DASHBOARD_STATS);
        } catch (error) {
            // Fallback for missing endpoint during transition
            return {
                productCount: 0,
                activeListings: 0,
                pendingReviews: 0,
                weatherAlert: "No alerts at this time.",
                recentNotifications: []
            };
        }
    },

    getBuyerStats: async () => {
        try {
            return {
                featuredProducts: await http.get(ENDPOINTS.PRODUCTS.LIST),
                marketTrends: "Fetch regional trends from market price API",
            };
        } catch (error) {
            return { featuredProducts: [], marketTrends: "Unavailable" };
        }
    }
};
