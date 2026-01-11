export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        VERIFY_EMAIL: '/auth/verify-email',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USER: {
        PROFILE: '/users/profile',
        DASHBOARD_STATS: '/users/dashboard-stats',
    },
    PRODUCTS: {
        LIST: '/products',
        DETAIL: (id) => `/products/${id}`,
        CREATE: '/products',
        UPDATE: (id) => `/products/${id}`,
        DELETE: (id) => `/products/${id}`,
    },
    WEATHER: {
        FORECAST: '/weather/forecast',
        ALERTS: '/weather/alerts',
    },
    ADMIN: {
        STATS: '/admin/stats',
        USERS: '/admin/users',
        SUSPEND_USER: (id) => `/admin/users/${id}/suspend`,
    },
    MARKET: {
        PRICES: '/market/prices',
    }
};
