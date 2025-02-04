import { useEffect, useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import ErrorMessage from "./Components/ErrorMessage";
import axios from "axios";
import "./styles/GlobalStyles";
import ".App.css"


const API_KEY = "YOUR_API_KEY";

const App = () => {
  const { setWeatherData, setError } = useContext(WeatherContext);

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      fetchWeather(lastCity);
    }
    
    // Polling every 30 seconds
    const interval = setInterval(() => {
      if (lastCity) fetchWeather(lastCity);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <ErrorMessage />
      <WeatherDisplay />
    </div>
  );
};

export default App;
