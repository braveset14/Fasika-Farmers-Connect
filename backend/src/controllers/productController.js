const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    const products = await Product.find({}).populate('farmer', 'name email');
    res.json(products);
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Farmer
const createProduct = async (req, res) => {
    const { name, description, category, price, quantity, unit, location } = req.body;

    const product = new Product({
        farmer: req.user._id,
        name,
        description,
        category,
        price,
        quantity,
        unit,
        location,
        status: 'Pending Approval' // Default for farmers
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Farmer/Admin
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        // Double check ownership unless admin
        if (product.farmer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(401).json({ message: 'Not authorized to update this product' });
        }

        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.category = req.body.category || product.category;
        product.price = req.body.price || product.price;
        product.quantity = req.body.quantity || product.quantity;
        product.unit = req.body.unit || product.unit;
        product.location = req.body.location || product.location;
        product.status = req.body.status || product.status;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = { getProducts, createProduct, updateProduct };
