// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const User = require('./src/models/User'); // 
const app = express();
const PORT = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const connectDB = require('./src/config/db');  
const productRoutes = require('./src/routes/productRoutes');
const marketRoutes = require('./src/routes/marketRoutes');
const weatherRoutes = require('./src/routes/weatherRoutes');
app.use('/api/weather', weatherRoutes);
// Middleware
const allowedOrigins = [
  'http://localhost:5173',  
  'https://fasika-farmers-connect.onrender.com', 
  'https://fasika-farmers-connect.vercel.app'
];
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRoutes);
app.use('/api/market', marketRoutes);
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);
const dashboardRoutes = require('./src/routes/dashBoardRoutes');
const advisoryRoutes = require('./src/routes/advisoryRoutes');

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/advisory', advisoryRoutes);
// Log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: '🚜 Fasika Farmers Connect API',
    status: 'DEPLOYED 🎉',
    version: '1.0.0',
    deployed: true,
    environment: process.env.NODE_ENV || 'development',
    url: 'https://fasika-farmers-connect.onrender.com',
    timestamp: new Date().toISOString(),
    endpoints: [
      'POST /api/auth/login',
      'POST /api/auth/register',
      'GET /api/users/profile',
      'GET /api/health',
      'GET /api/products',
      'GET /api/market/prices',
      'GET /api/dashboard',
      'GET /api/advisory',
      'GET /api/weather/forecast'
    ]
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'FFC Backend API',
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
     database: 'MongoDB Atlas'
  });
});

// LOGIN ROUTE 

app.post('/api/auth/login', async (req, res) => {
  console.log('📨 Login request for:', req.body.email);
  
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  try {
    // Find user in MongoDB
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    
    // Check password (simple comparison for now)
  
const isPasswordValid = await user.matchPassword(password);
if (!isPasswordValid) {
    return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
    });
}
    
    // Generate token
    const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '30d' }
);
    
    // User response without password
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      location: user.location,
      verified: user.verified,
      createdAt: user.createdAt
    };
    
    console.log(`✅ Login successful for: ${user.email}`);
    
    res.json({
      success: true,
      message: 'Login successful!',
      token: token,
      user: userResponse
    });
    
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
});
// Registration route

app.post('/api/auth/register', async (req, res) => {
  console.log('📨 Registration request:', req.body);
  
  const { name, email, password, role = 'farmer', location } = req.body;
  
  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and password are required'
    });
  }
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }
    
    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password, // Note: In production, hash this!
      role,
      location: location || '',
      verified: false
    });
    
    console.log(`✅ User registered: ${user.email} (ID: ${user._id})`);
    
    // Generate a simple token (for now)
    const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '30d' }
);
    
    // Return user data (excluding password)
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      location: user.location,
      verified: user.verified,
      createdAt: user.createdAt
    };
    
    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      token: token,
      user: userResponse
    });
    
  } catch (error) {
    console.error('❌ Registration error:', error);
    
    // Handle duplicate key error (unique email)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// User profile
app.get('/api/users/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  
  res.json({
    success: true,
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      role: 'farmer'
    }
  });
});


// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    error: 'Something went wrong'
  });
});

// Start server WITH database connection
async function startServer() {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('✅ MongoDB connected successfully');
    
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT,'0.0.0.0', () => {
      console.log('\n✨ ========================================== ✨');
      console.log('   🚀 Server started successfully!');
      console.log(`   📍 http://localhost:${PORT}`);
      console.log('   💾 MongoDB: Connected to Atlas');
      console.log('✨ ========================================== ✨\n');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}
startServer();
