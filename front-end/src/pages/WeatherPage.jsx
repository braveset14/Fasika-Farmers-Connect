import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdWbSunny, MdWaterDrop, MdAir, MdLocationOn, MdThunderstorm, MdOutlineWbTwilight, MdAgriculture } from 'react-icons/md';
import "./WeatherPage.css";

const tabs = ["Live", "Hourly", "7-Day", "Trends"];
const trendsOptions = ["temp", "rainfall", "wind", "humidity"];

const WeatherPage = () => {
  const [activeTab, setActiveTab] = useState("Live");
  const [trendType, setTrendType] = useState("temp");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
          });
        },
        (err) => {
          setError("Please allow location access to see weather.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const { latitude, longitude } = location;
        const url = "https://api.open-meteo.com/v1/forecast";
        let params = { 
            latitude, longitude, timezone: "Africa/Nairobi",
            current_weather: true,
            hourly: "temperature_2m,relativehumidity_2m,precipitation,uv_index,windspeed_10m",
            daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,sunrise,sunset"
        };

        const resp = await axios.get(url, { params });
        const data = resp.data;

        // Keep your existing transformation logic
        if (activeTab === "Live") {
          const current = data.current_weather;
          setWeatherData({
            current: {
              temperature: current?.temperature ?? "N/A",
              wind_speed: current?.windspeed ?? "N/A",
              humidity: data.hourly?.relativehumidity_2m[0] ?? "N/A",
              uv: data.hourly?.uv_index[0] ?? "N/A",
              condition: "N/A",
            },
          });
        } else if (activeTab === "Hourly") {
          const hourlyArray = data.hourly?.time?.map((t, i) => ({
            dateTime: t,
            temperature: data.hourly?.temperature_2m?.[i] ?? "N/A",
            precipitation: data.hourly?.precipitation?.[i] ?? "N/A",
          })) || [];
          setWeatherData({ hourly: hourlyArray });
        } else if (activeTab === "7-Day") {
          const dailyArray = data.daily?.time?.map((date, i) => ({
            date,
            maxTemp: data.daily?.temperature_2m_max?.[i] ?? "N/A",
            minTemp: data.daily?.temperature_2m_min?.[i] ?? "N/A",
            rainfall: data.daily?.precipitation_sum?.[i] ?? "N/A",
            uv: data.daily?.uv_index_max?.[i] ?? "N/A",
            sunrise: data.daily?.sunrise[i].split("T")[1],
            sunset: data.daily?.sunset[i].split("T")[1]
          })) || [];
          setWeatherData({ daily: dailyArray });
        } else if (activeTab === "Trends") {
          let trends = [];
          if (trendType === "temp") {
            trends = data.daily?.time.map((d, i) => ({ date: d, value: ((data.daily.temperature_2m_max[i] + data.daily.temperature_2m_min[i]) / 2).toFixed(2) }));
          } else if (trendType === "rainfall") {
            trends = data.daily?.time.map((d, i) => ({ date: d, value: data.daily.precipitation_sum[i] }));
          }
          setWeatherData({ trends });
        }
      } catch (err) {
        setError("Failed to fetch weather.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [location, activeTab, trendType]);

  const renderContent = () => {
    if (!weatherData) return null;
    // ... KEEP YOUR EXISTING TABLE/LIVE RENDER LOGIC HERE ...
    if (activeTab === "Live") {
        return (
          <div className="existing-view">
            <p><strong>Temperature:</strong> {weatherData.current?.temperature} °C</p>
            <p><strong>Humidity:</strong> {weatherData.current?.humidity} %</p>
            <p><strong>Wind Speed:</strong> {weatherData.current?.wind_speed} m/s</p>
          </div>
        );
      }
  
      if (activeTab === "Hourly") {
        return (
          <div className="table-wrapper">
            <table className="weather-table">
              <thead><tr><th>Time</th><th>Temp (°C)</th><th>Precipitation (mm)</th></tr></thead>
              <tbody>
                {weatherData.hourly?.map((h, i) => (
                  <tr key={i}><td>{h.dateTime}</td><td>{h.temperature}</td><td>{h.precipitation}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
  
      if (activeTab === "7-Day") {
        return (
          <div className="table-wrapper">
            <table className="weather-table">
              <thead><tr><th>Date</th><th>Max</th><th>Min</th><th>Rain</th></tr></thead>
              <tbody>
                {weatherData.daily?.map((d, i) => (
                  <tr key={i}><td>{d.date}</td><td>{d.maxTemp}</td><td>{d.minTemp}</td><td>{d.rainfall}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      if (activeTab === "Trends") {
        return (
          <div className="table-wrapper">
            <select value={trendType} onChange={(e) => setTrendType(e.target.value)}>
               {trendsOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
            <table className="weather-table">
                <thead><tr><th>Date</th><th>Value</th></tr></thead>
                <tbody>{weatherData.trends?.map((t, i) => (<tr key={i}><td>{t.date}</td><td>{t.value}</td></tr>))}</tbody>
            </table>
          </div>
        );
      }
  };

  return (
    <div className="weather-page-wrapper">
      <div className="weather-container">
        <h1 className="weather-title">Weather at Your Location</h1>

        <div className="weather-tabs">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`weather-tab ${activeTab === tab ? "active" : ""}`}>
              {tab}
            </button>
          ))}
        </div>

        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : renderContent()}

        {/* --- MODERN ADDITIONS BELOW THE EXISTING ONE --- */}
        {!loading && weatherData && (
          <div className="modern-dashboard-section">
            <h2 className="section-divider">Modern Insights</h2>
            
            <div className="modern-grid">
              <div className="weather-card main-card">
                <MdThunderstorm size={35} color="#673ab7" />
                <h3>{weatherData.current?.uv ?? 0}</h3>
                <p>UV Index</p>
              </div>
              <div className="weather-card">
                <MdAir size={35} color="#455a64" />
                <h3>{weatherData.current?.wind_speed} <small>km/h</small></h3>
                <p>Air Flow</p>
              </div>
              <div className="weather-card">
                <MdAgriculture size={35} color="#2d6a4f" />
                <p style={{fontSize: '0.8rem', marginTop: '10px'}}>Optimal for Planting</p>
              </div>
            </div>

            <div className="modern-footer-info">
              <h3><MdAgriculture /> Agricultural Advisory</h3>
              <p>
                {weatherData.current?.temperature > 30 
                  ? "Heat stress alert! Increase irrigation frequency." 
                  : "Perfect conditions for field activities and fertilizer application."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
