import React from "react";

const HourlyWeatherItem = ({ hourlyWeather }) => {
  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  console.table(temperature, time);
  const imgSrc = hourlyWeather.condition.icon;

  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={imgSrc} alt="Clouds" className="weather-icon" />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
