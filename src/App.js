import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyWeatherItem from "./Components/HourlyWeatherItem";
import SearchSection from "./Components/SearchSection";
import NoResultDiv from "./Components/NoResultDiv";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const [currentWeather, setcurrentWeather] = useState({});
  const [hourlyForecasts, sethourlyForecasts] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const searchInputRef = useRef(null);

  const filterhourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    //filter the hourly data to only include the next 24 hours
    const next24Hoursdata = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
    sethourlyForecasts(next24Hoursdata);
  };
  //fetched weather detais based on the API URL
  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);
    window.innerWidth <= 768 && searchInputRef.current.focus();
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error();
      const data = await response.json();
      console.log(data);
      //extract current weather data
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcons = data.current.condition.icon;
      setcurrentWeather({ temperature, description, weatherIcons });
      //combine hourly data from last 2 days
      const combinedHourlyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];
      searchInputRef.current.value = data.location.name;
      filterhourlyForecast(combinedHourlyData);
    } catch {
      setHasNoResults(true);
    }
  };
//fetch default city 'canada' weather data on the initial render
  useEffect(()=>{
    const defaultCity = 'Canada'
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDetails(API_URL);
  })

  return (
    <div className="container">
      {/* Search section */}
      <SearchSection
        getWeatherDetails={getWeatherDetails}
        searchInputRef={searchInputRef}
      />

      {hasNoResults ? (
        <NoResultDiv />
      ) : (
        <div className="weather-section">
          <CurrentWeather currentWeather={currentWeather} />
          {/* hourly weather forecast list */}
          <div className="hourly-forecast">
            <ul className="weather-list">
              {hourlyForecasts.map((hourlyWeather) => (
                <HourlyWeatherItem
                  key={hourlyWeather.time_epoch}
                  hourlyWeather={hourlyWeather}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
