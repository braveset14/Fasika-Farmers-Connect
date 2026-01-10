// @desc    Get weather forecast for a region
// @route   GET /api/weather/forecast
// @access  Private
const getWeatherForecast = async (req, res) => {
    // In a real app, this would call OpenWeatherMap or similar API
    // For now, we provide structured data based on common Ethiopian farming regions
    const region = req.query.region || 'Oromia';

    const forecasts = {
        'Oromia': { temp: 24, condition: 'Sunny', advice: 'Ideal for Teff sowing.' },
        'Amhara': { temp: 21, condition: 'Cloudy', advice: 'Good for fertilizer application.' },
        'Tigray': { temp: 28, condition: 'Dry', advice: 'Irrigation recommended.' },
        'SNNPR': { temp: 22, condition: 'Light Rain', advice: 'Watch for fungal growth on Coffee.' }
    };

    const data = forecasts[region] || forecasts['Oromia'];

    res.json({
        region,
        ...data,
        humidity: '45%',
        windSpeed: '12 km/h'
    });
};

// @desc    Get weather alerts
// @route   GET /api/weather/alerts
// @access  Private
const getWeatherAlerts = async (req, res) => {
    res.json([
        { id: 1, type: 'Warning', message: 'Heavy rain expected in Oromia region next Tuesday.', severity: 'High' },
        { id: 2, type: 'Info', message: 'Dry spell in Northern regions ending soon.', severity: 'Low' }
    ]);
};

module.exports = { getWeatherForecast, getWeatherAlerts };
