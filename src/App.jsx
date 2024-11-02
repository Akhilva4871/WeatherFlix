// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchWeatherAndMovies = async () => {
    setError(null); // Reset error state

    // Get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

          try {
            // Fetch weather data from OpenWeatherMap API
            const weatherResponse = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={YOUR_API_KEY}&units=metric`
            );
            setWeather(weatherResponse.data);

            // You can fetch movie recommendations based on weather type here
            fetchMovies(weatherResponse.data.weather[0].main);
          } catch (error) {
            setError('Unable to fetch weather data. Please try again later.');
            console.error('Error fetching weather:', error);
          }
        },
        (error) => {
          setError('Unable to retrieve location. Please check your browser settings.');
          console.error('Error getting location:', error);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const fetchMovies = async (weatherType) => {
    try {
      const moviesResponse = await axios.get(`http://localhost:5000/api/movies?weatherType=${weatherType}`);
      setMovies(moviesResponse.data.recommendations);
    } catch (error) {
      setError('Unable to fetch movie recommendations.');
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <Header />
      <Button onClick={fetchWeatherAndMovies} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      {movies.length > 0 && (
        <div>
          <h2>Recommended Movies</h2>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
