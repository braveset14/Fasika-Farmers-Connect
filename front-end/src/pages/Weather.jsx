import { getWeatherData } from "../api/services/weather.service";
import useFetch from "../hooks/useFetch";

export default function Weather() {
  const { data, loading, error } = useFetch(getWeatherData);

  const fallbackData = [
    { day: "Today", condition: "Sunny", temperature: "26°C", advice: "Good for planting." },
    { day: "Tomorrow", condition: "Cloudy", temperature: "24°C", advice: "Monitor crops." },
    { day: "Wednesday", condition: "Rainy", temperature: "21°C", advice: "Avoid harvesting." },
  ];

  const weatherData = data || fallbackData;

  return (
    <div className="weather">
      <h1 className="weather-title">Weather Advisory</h1>

      <div className="weather-cards">
        {loading && <p>Data is loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error &&
          weatherData.map((item, index) => (
            <div className="weather-card" key={index}>
              <h3>{item.day}</h3>
              <p>{item.condition}</p>
              <p>{item.temperature}</p>
              <p>{item.advice}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
