const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, default: 'kg' }, // e.g., kg, quintal
    location: { type: String },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Pending Approval', 'Sold', 'Inactive'],
        default: 'Pending Approval'
    },
    images: [{ type: String }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
