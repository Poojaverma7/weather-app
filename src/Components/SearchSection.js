import React from "react";

//Handle city search form submission
const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL); //fetches weather details for the entered city
  };

  // get the user's current location by logitude and latitude
  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL); //fetches weather details for the user current location
        window.innerWidth >= 768 && searchInputRef.current.focus();
      },
      () => {
        alert(
          "Location access denied. Please enable permissions to use this feature."
        );
      }
    );
  };
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Enter a city name"
          ref={searchInputRef}
          className="search-input"
          required
        />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <i class="fa-solid fa-location-crosshairs"></i>
      </button>
    </div>
  );
};

export default SearchSection;
