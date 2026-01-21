/* Lowering the page to clear the navbar */
.weather-page-wrapper {
  padding-top: 100px; /* Adjust this based on your navbar height */
  min-height: 100vh;
  background: #f0f4f1;
}

.weather-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

/* Modern Dashboard Cards */
.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.weather-card {
  padding: 30px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease;
}

.weather-card:hover { transform: translateY(-5px); }

.main-card { background: #e8f5e9; border-color: #c8e6c9; }

/* Chart Styling */
.visual-section {
  margin-top: 30px;
  padding: 20px;
  background: #f8fdf9;
  border-radius: 12px;
}

.chart-container {
  margin-top: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
}

/* 7-Day List View */
.day-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.day-row {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
  border-radius: 10px;
  border-bottom: 1px solid #eee;
}

/* Footer Section */
.modern-footer-info {
  margin-top: 40px;
  padding: 20px;
  background: #2d6a4f;
  color: white;
  border-radius: 12px;
}

.trend-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
}

.trend-controls select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #2d6a4f;
}
