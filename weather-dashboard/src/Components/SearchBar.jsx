import { useState, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

const API_KEY = "YOUR_API_KEY";

const SearchBar = () => {
  const { setWeatherData, setError } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};

export default SearchBar;
