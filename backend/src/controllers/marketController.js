// @desc    Get regional market prices
// @route   GET /api/market/prices
// @access  Public
const getMarketPrices = async (req, res) => {
    res.json([
        { crop: 'White Teff', price: '5,400 ETB/qt', market: 'Adama', trend: 'up' },
        { crop: 'Red Teff', price: '4,800 ETB/qt', market: 'Addis Ababa', trend: 'stable' },
        { crop: 'Maize', price: '2,800 ETB/qt', market: 'Shashemene', trend: 'down' },
        { crop: 'Coffee (Grade 1)', price: '12,500 ETB/qt', market: 'Jimma', trend: 'up' },
        { crop: 'Honey (White)', price: '850 ETB/kg', market: 'Gondar', trend: 'stable' }
    ]);
};

module.exports = { getMarketPrices };
