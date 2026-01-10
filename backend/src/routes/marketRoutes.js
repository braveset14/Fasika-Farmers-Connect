const express = require('express');
const router = express.Router();
const { getMarketPrices } = require('../controllers/marketController');

router.get('/prices', getMarketPrices);

router.get('/', (req, res) => {
  res.json({
    message: 'Market API',
    endpoints: {
      prices: '/api/market/prices',
      // Add other market endpoints here
    }
  });
});
module.exports = router;
