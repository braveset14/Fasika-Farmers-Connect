# Backend Integration Guide for Fasika Farmers Connect

This document provides instructions for backend developers on how to integrate the future Node.js / REST API with this frontend.

## API Architecture

The frontend uses an abstracted API layer located in `src/api`:
- `axiosInstance.js`: Handles base URL configuration, authentication headers, and global error interceptors.
- `endpoints.js`: Defines all API endpoint constants to ensure consistency.
- `http.js`: A clean wrapper around Axios for standard HTTP methods.

## Authentication

The frontend expects a JWT-based authentication system:
- **Token Storage**: The token is stored in `localStorage` under the key `token`.
- **Request Header**: The token is automatically attached to all requests via the `Authorization: Bearer <token>` header.
- **Auth Failure**: If the API returns a `401 Unauthorized` status, the frontend will automatically clear local storage and redirect the user to the login page.

## Expected Data Models

### Admin Stats
`GET /admin/stats`
```json
{
  "totalUsers": number,
  "activeFarmers": number,
  "totalProducts": number,
  "pendingApprovals": number,
  "recentActivity": [
    { "id": number, "action": string, "user": string, "time": string }
  ]
}
```

### Farmer Stats
`GET /users/dashboard-stats` (Authenticated)
```json
{
  "productCount": number,
  "activeListings": number,
  "pendingReviews": number,
  "weatherAlert": string,
  "recentNotifications": [
    { "id": number, "text": string, "read": boolean }
  ]
}
```

## Environment Setup

Ensure the backend URL is correctly set in the frontend's `.env` files:
- `VITE_API_BASE_URL=https://your-api-domain.com/api`

## CORS Configuration

The backend must be configured to allow requests from the frontend domain (e.g., `fasika-farmers.netlify.app` or `localhost:5173` during development).
```javascript
// Example Express.js CORS config
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));
```
