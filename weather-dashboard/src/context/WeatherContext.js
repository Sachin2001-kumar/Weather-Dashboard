import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric"); 

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, error, setError, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
