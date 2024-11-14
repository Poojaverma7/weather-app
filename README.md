Weather App
A weather forecasting web application built with React that provides current weather and a 24-hour forecast for any searched city. This project utilizes the WeatherAPI to fetch weather data and presents it in a user-friendly format with hourly updates.

Table of Contents
Overview
Features
Technologies
Setup Instructions
How to Use
Components
APIs Used
Folder Structure
License
Contributing
Repository Link
Overview
This weather app displays the current weather conditions along with an hourly forecast for the next 24 hours. Users can search for any city worldwide, and the app will display accurate and updated weather information.

Features
Search weather conditions by city name.
Display current temperature, weather description, and an icon representing weather conditions.
24-hour hourly forecast, including temperature and weather conditions.
Auto-fetch default weather data for 'Canada' on initial load.
Responsive design optimized for both mobile and desktop devices.
Error handling for cases where no results are found.
Technologies
React (Create React App)
JavaScript
CSS (for styling)
WeatherAPI (for fetching weather data)
Setup Instructions
To set up the project locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (version 14 or later)
npm or yarn
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
Navigate to the Project Directory:

bash
Copy code
cd weather-app
Install Dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Set Up Environment Variables:

Create a .env file in the root directory of the project and add your WeatherAPI key:

makefile
Copy code
REACT_APP_API_KEY=your_weather_api_key_here
Replace your_weather_api_key_here with your actual API key from WeatherAPI.

Start the Application:

bash
Copy code
npm start
or

bash
Copy code
yarn start
The app should open in your default web browser at http://localhost:3000.

How to Use
Enter a city name in the search bar to get current weather information and a 24-hour forecast.
The app will automatically display the weather data for the default city ('Canada') on the first load.
If the entered city is not found or there's an error, an error message will appear.