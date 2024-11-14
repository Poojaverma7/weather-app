import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img
        src={currentWeather.weatherIcons}
        alt="Clouds"
        className="weather-icon"
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
