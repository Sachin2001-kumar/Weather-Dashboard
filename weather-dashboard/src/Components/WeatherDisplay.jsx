import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { weatherData, unit, setUnit } = useContext(WeatherContext);

  if (!weatherData) return null;

  const temp = unit === "metric" ? weatherData.main.temp : (weatherData.main.temp * 9/5) + 32;
  
  return (
    <div>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>Temperature: {temp} {unit === "metric" ? "°C" : "°F"}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default WeatherDisplay;
