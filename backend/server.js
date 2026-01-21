const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const pool = require('./config/dbConfig');

const app = express();

/* ✅ REQUIRED FOR RENDER (SECURE COOKIES) */
app.set('trust proxy', 1);

// 1️⃣ CORS CONFIGURATION - Updated origin only
app.use(cors({
  origin: [
    'https://fasika-frontend.onrender.com', 
    'https://fasika-farmers-connect-5r2h.onrender.com'
  ], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2️⃣ GLOBAL MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

// 🛰️ REQUEST LOGGER
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.originalUrl}`);
  next();
});

// 3️⃣ IMPORT ROUTES
const authRoutes = require('./routes/authentication/authRoutes'); 
const adminUserRoutes = require('./routes/admin/adminUserRoutes');
const adminFarmerRoutes = require('./routes/admin/adminFarmerFarmRoutes'); 

// --- NEW ADMIN MARKETPLACE ROUTE ---
const adminMarketplaceRoutes = require('./routes/admin/adminProductListingRoutes'); 

const farmerFarmRoutes = require('./routes/farmer/farmerFarmRoutes'); 
const farmerListingRoutes = require('./routes/farmer/farmerListingRoutes'); 
const advisoryRoutes = require("./routes/farmer/farmerAdvisoryRoutes");
const farmerSupportRoutes = require('./routes/farmer/farmerSupportRoutes');
const notificationRoutes = require("./routes/farmer/farmerNotificationsRoutes");
const buyerMarketplaceRoutes = require('./routes/buyer/buyerMarketplaceRoutes'); 
const farmerProfileRoutes = require('./routes/farmer/farmerProfileRoutes');

// 🏠 ROOT HEALTH CHECK
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fasika DROP Registry is Live",
    environment: process.env.NODE_ENV || 'development'
  });
});

// 4️⃣ DATABASE CONNECTION
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
  } else {
    console.log('✅ Database connected successfully');
    release();
  }
});

// 5️⃣ MOUNT ROUTES
app.use('/api/auth', authRoutes);

/* --- ADMIN REGISTRY SECTOR --- */
app.use('/api/admin/users', adminUserRoutes);
app.use('/api/admin/farmers', adminFarmerRoutes);

// --- MOUNTING ADMIN MARKETPLACE ---
app.use('/api/admin/marketplace', adminMarketplaceRoutes); 

/* --- FARMER/PRODUCER SECTOR --- */
app.use('/api/farmer/farm/land', farmerFarmRoutes); 
app.use('/api/farmer/farm', farmerFarmRoutes);
app.use('/api/farmer/listings', farmerListingRoutes);
app.use('/api/farmer/advisory', advisoryRoutes);
app.use('/api/farmer/support', farmerSupportRoutes);
app.use('/api/farmer/notifications', notificationRoutes);
app.use('/api/farmers', farmerProfileRoutes); 

/* --- BUYER/MARKET SECTOR --- */
app.use('/api/buyer/marketplace', buyerMarketplaceRoutes);

// 6️⃣ CATCH-ALL 404 HANDLER
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route Not Found",
    message: `The path ${req.originalUrl} does not exist on this DROP registry.`
  });
});

// 7️⃣ GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
    message: err.message
  });
});

// 8️⃣ START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
