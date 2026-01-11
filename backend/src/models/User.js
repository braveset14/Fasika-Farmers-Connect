const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true
    },
    password: { 
        type: String, 
        required: true 
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'farmer', 'buyer', 'support'],
        default: 'buyer'
    },
    status: { 
        type: String, 
        default: 'Active', 
        enum: ['Active', 'Pending', 'Suspended'] 
    },
    phone: { 
        type: String,
        default: ''
    },
    location: { 
        type: String,
        default: ''
    },
    // ADD THESE NEW FIELDS FOR PROFILE PAGE
    region: {
        type: String,
        default: 'Oromia'
    },
    zone: {
        type: String,
        default: ''
    },
    village: {
        type: String,
        default: ''
    },
    farmSize: {
        type: Number,
        default: 0.0
    },
    mainCrops: {
        type: String,
        default: []
    },
    profileImage: { 
        type: String,
        default: '' 
    },
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
