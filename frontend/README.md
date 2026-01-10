# Fasika Farmers Connect - Frontend

Fasika Farmers Connect is a modern web application designed to bridge the gap between farmers and buyers. This repository contains the frontend codebase, built with React and Vite.

## Features
- **Farmer Portal**: Manage products, view market trends, and check weather forecasts.
- **Buyer Market**: Browse and purchase agricultural products directly from farmers.
- **Admin Dashboard**: Comprehensive management of users, products, and platform metrics.
- **Responsive Design**: Optimized for both desktop and mobile users.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Deployment**: Configured for Netlify and Vercel

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the `front-end` directory:
   ```bash
   cd front-end
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Production Build
Create a production-ready build:
```bash
npm run build
```
The output will be in the `dist` folder.

## Environment Variables
The application uses environment variables for configuration. Create a `.env` file in the `front-end` directory:
- `VITE_API_BASE_URL`: The base URL for the backend API.
- `VITE_APP_NAME`: The name of the application.

## Deployment

### Netlify
The project includes a `netlify.toml` file for seamless deployment on Netlify. It handles Single Page Application (SPA) routing and build settings.

### Vercel
A `vercel.json` file is also included for hosting on Vercel.

## Documentation
- [Backend Integration Guide](./BACKEND_INTEGRATION.md)
