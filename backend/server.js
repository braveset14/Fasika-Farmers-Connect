// // backend/server.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const User = require('./src/models/User'); 
// const {protect}=require('./src/middleware/authMiddleware');
// const app = express();
// const PORT = process.env.PORT || 5000;
// const jwt = require('jsonwebtoken');
// const connectDB = require('./src/config/db');  
// const productRoutes = require('./src/routes/productRoutes');
// const marketRoutes = require('./src/routes/marketRoutes');
// const weatherRoutes = require('./src/routes/weatherRoutes');
// const { registerUser,loginUser } = require('./src/controllers/userController');

// app.use('/api/weather', weatherRoutes);
// // Middleware
// const allowedOrigins = [
//   'http://localhost:5173',  
//   'https://fasika-farmers-connect.onrender.com', 
//   'https://fasika-farmers-connect.vercel.app'
// ];
// app.use(cors({
//   origin: '*',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
// }));
// app.options('*', cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api/products', productRoutes);
// app.use('/api/market', marketRoutes);
// const userRoutes = require('./src/routes/userRoutes');
// app.use('/api/users', userRoutes);
// const dashboardRoutes = require('./src/routes/dashBoardRoutes');
// const advisoryRoutes = require('./src/routes/advisoryRoutes');

// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/advisory', advisoryRoutes);
// // Log requests
// app.use((req, res, next) => {
//   console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
//   next();
// });

// // Root route
// app.get('/', (req, res) => {
//   res.json({
//     message: '🚜 Fasika Farmers Connect API',
//     status: 'DEPLOYED 🎉',
//     version: '1.0.0',
//     deployed: true,
//     environment: process.env.NODE_ENV || 'development',
//     url: 'https://fasika-farmers-connect.onrender.com',
//     timestamp: new Date().toISOString(),
//     endpoints: [
//       'POST /api/auth/login',
//       'POST /api/auth/register',
//       'GET /api/users/profile',
//       'GET /api/health',
//       'GET /api/products',
//       'GET /api/market/prices',
//       'GET /api/dashboard',
//       'GET /api/advisory',
//       'GET /api/weather/forecast'
//     ]
//   });
// });

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({
//     status: 'healthy',
//     service: 'FFC Backend API',
//     environment: process.env.NODE_ENV,
//     uptime: process.uptime(),
//     timestamp: new Date().toISOString(),
//      database: 'MongoDB Atlas'
//   });
// });
// app.post('/api/auth/register', registerUser);
// app.post('/api/auth/login', loginUser);
// // User profile
// app.get('/api/users/profile', protect, async (req, res) => {
//   try {
//     // User is already attached to req by the protect middleware
//     const user = req.user;
    
//     res.json({
//       success: true,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         location: user.location,
//         verified: user.verified,
//         createdAt: user.createdAt
//       }
//     });
    
//   } catch (error) {
//     console.error('❌ Profile fetch error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error fetching profile'
//     });
//   }
// });


// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     error: 'Route not found',
//     path: req.originalUrl,
//     method: req.method
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server Error:', err);
//   res.status(500).json({
//     error: 'Something went wrong'
//   });
// });

// // Start server WITH database connection
// async function startServer() {
//   try {
//     // Connect to MongoDB
//     await connectDB();
//     console.log('✅ MongoDB connected successfully');
    
//     // Start server
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT,'0.0.0.0', () => {
//       console.log('\n✨ ========================================== ✨');
//       console.log('   🚀 Server started successfully!');
//       console.log(`   📍 http://localhost:${PORT}`);
//       console.log('   💾 MongoDB: Connected to Atlas');
//       console.log('✨ ========================================== ✨\n');
//     });
//   } catch (error) {
//     console.error('❌ Failed to start server:', error);
//     process.exit(1);
//   }
// }
// startServer();
// backend/server.js - ULTRA MINIMAL WORKING VERSION
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// SIMPLE USER MODEL
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'farmer' },
  location: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// HEALTH CHECK
app.get('/', (req, res) => {
  res.json({ status: 'Server is running', time: new Date().toISOString() });
});

// SIMPLE REGISTRATION (NO PASSWORD HASHING)
app.post('/api/auth/register', async (req, res) => {
  try {
    console.log('Registration:', req.body);
    
    const { name, email, password, role, location } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }
    
    // Check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already exists' 
      });
    }
    
    // Create user (store password plaintext temporarily)
    const user = await User.create({
      name,
      email,
      password, // Plaintext for now
      role: role || 'farmer',
      location: location || ''
    });
    
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        location: user.location
      }
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error: ' + error.message 
    });
  }
});

// CONNECT TO MONGODB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://default:password@cluster.mongodb.net/fasika';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
