const User = require('../models/User');
const Product = require('../models/Product');

// @desc    Get dashboard stats for Admin
// @route   GET /api/admin/stats
// @access  Private/Admin
const getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeFarmers = await User.countDocuments({ role: 'farmer', status: 'Active' });
        const totalProducts = await Product.countDocuments();
        const pendingApprovals = await Product.countDocuments({ status: 'Pending Approval' });

        res.json({
            totalUsers,
            activeFarmers,
            totalProducts,
            pendingApprovals,
            recentActivity: [
                { id: 1, action: "System Initialized", user: "Admin", time: "recently" }
            ]
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAdminStats };
