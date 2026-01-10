const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    stats: {
      totalProducts: 15,
      activeListings: 8,
      totalSales: 45250,
      messages: 3,
      visitors: 124
    },
    recentActivity: [
      { type: 'product', action: 'added', item: 'Maize', time: '2 hours ago' }
    ]
  });
});

module.exports = router;