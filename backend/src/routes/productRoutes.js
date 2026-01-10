const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('../controllers/productController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(getProducts)
    .post(protect, authorize('farmer', 'admin'), createProduct);

router.route('/:id')
    .put(protect, authorize('farmer', 'admin'), updateProduct);

module.exports = router;
