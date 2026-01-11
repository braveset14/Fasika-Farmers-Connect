const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { validationResult } = require('express-validator');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                success: true,
                message: 'Login successful!',
                token: generateToken(user._id),
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status,
                    phone: user.phone,
                    location: user.location,
                    region: user.region,
                    zone: user.zone,
                    village: user.village,
                    farmSize: user.farmSize
                }
            });
        } else {
            res.status(401).json({ 
                success: false,
                message: 'Invalid email or password' 
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error during login' 
        });
    }
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                message: errors.array()[0]?.msg || 'Validation error'
            });
        }

        const { name, email, password, role, location } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ 
                success: false,
                message: 'User already exists' 
            });
        }

        // Create user with all fields including location
        const userData = {
            name,
            email,
            password,
            role: role || 'buyer',
            location: location || ''
        };

        const user = await User.create(userData);

        res.status(201).json({
            success: true,
            message: 'Registration successful!',
            token: generateToken(user._id),
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                status: user.status,
                location: user.location
            }
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        
        if (error.code === 11000) {
            return res.status(400).json({ 
                success: false,
                message: 'Email already exists' 
            });
        }
        
        res.status(500).json({ 
            success: false,
            message: 'Server error during registration' 
        });
    }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status,
                    phone: user.phone || '',
                    location: user.location || '',
                    region: user.region || '',
                    zone: user.zone || '',
                    village: user.village || '',
                    farmSize: user.farmSize || 0,
                    mainCrops: user.mainCrops || []
                }
            });
        } else {
            res.status(404).json({ 
                success: false,
                message: 'User not found' 
            });
        }
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error fetching profile' 
        });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        // Update fields if provided
        const { name, phone, location, region, zone, village, farmSize, mainCrops } = req.body;
        
        if (name !== undefined) user.name = name;
        if (phone !== undefined) user.phone = phone;
        if (location !== undefined) user.location = location;
        if (region !== undefined) user.region = region;
        if (zone !== undefined) user.zone = zone;
        if (village !== undefined) user.village = village;
        if (farmSize !== undefined) user.farmSize = parseFloat(farmSize) || 0.0;
        if (mainCrops !== undefined) user.mainCrops = mainCrops;
        
        const updatedUser = await user.save();

        res.json({
            success: true,
            message: 'Profile updated successfully',
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                status: updatedUser.status,
                phone: updatedUser.phone,
                location: updatedUser.location,
                region: updatedUser.region,
                zone: updatedUser.zone,
                village: updatedUser.village,
                farmSize: updatedUser.farmSize,
                mainCrops: updatedUser.mainCrops
            }
        });

    } catch (error) {
        console.error('Profile update error:', error);
        
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                success: false,
                message: 'Validation error: ' + error.message 
            });
        }
        
        if (error.code === 11000) {
            return res.status(400).json({ 
                success: false,
                message: 'Email already exists' 
            });
        }
        
        res.status(500).json({ 
            success: false,
            message: 'Server error updating profile' 
        });
    }
};

module.exports = { loginUser, registerUser, getUserProfile, updateUserProfile };
