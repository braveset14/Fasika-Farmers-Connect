export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        VERIFY_EMAIL: '/api/auth/verify-email',
        FORGOT_PASSWORD: '/api/auth/forgot-password',
        RESET_PASSWORD: '/api/auth/reset-password',
    },
    USER: {
        PROFILE: '/api/users/profile',
        DASHBOARD_STATS: '/api/users/dashboard-stats',
    },
    PRODUCTS: {
        LIST: '/api/products',
        DETAIL: (id) => `/api/products/${id}`,
        CREATE: '/api/products',
        UPDATE: (id) => `/api/products/${id}`,
        DELETE: (id) => `/api/products/${id}`,
    },
    WEATHER: {
        FORECAST: '/api/weather/forecast',
        ALERTS: '/api/weather/alerts',
    },
    ADMIN: {
        STATS: '/api/admin/stats',
        USERS: '/api/admin/users',
        SUSPEND_USER: (id) => `/api/admin/users/${id}/suspend`,
    },
    MARKET: {
        PRICES: '/api/market/prices',
    }
};
