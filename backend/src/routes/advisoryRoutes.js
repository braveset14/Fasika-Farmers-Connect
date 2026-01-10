const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    tips: [
      'Plant maize 2 weeks before rainy season',
      'Use compost fertilizer for organic farming',
      'Check soil pH before planting',
      'Harvest in early morning for best quality'
    ],
    alerts: [
      { type: 'rain', message: 'Heavy rainfall expected', severity: 'medium' }
    ]
  });
});

module.exports = router;