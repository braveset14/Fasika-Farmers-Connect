const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Route files
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const marketRoutes = require('./routes/marketRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/market', marketRoutes);

// For Netlify Functions
app.use('/.netlify/functions/api', router => {
    router.use('/auth', authRoutes);
    router.use('/users', userRoutes);
    router.use('/products', productRoutes);
    router.use('/admin', adminRoutes);
    router.use('/weather', weatherRoutes);
    router.use('/market', marketRoutes);
});

// Root route
app.get('/', (req, res) => {
    res.send('Fasika API is running...');
});

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

module.exports = app;
