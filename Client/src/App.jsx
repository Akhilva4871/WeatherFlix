// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Updated paths to use images from the public folder
  const getBackgroundImage = (weatherType) => {
    switch (weatherType) {
      case 'Clear':
        return 'url(/assets/sunny day.jpg)';
      case 'Clouds':
        return 'url(/assets/cloudy.jpg)';
      case 'Rain':
        return 'url(/assets/rain.webp)';
      case 'Snow':
        return 'url(/assets/snow.jpg)';
      default:
        return 'url(/assets/default.jpg)';
    }
  };

  const fetchWeatherAndMovies = async () => {
    setError(null);
    setButtonClicked(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const weatherResponse = await axios.get(`http://localhost:5000/api/forecast`, {
              params: {
                lat: latitude,
                lon: longitude,
              },
            });
            setWeather(weatherResponse.data);
            fetchMovies(weatherResponse.data.list[0].weather[0].main);
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
      const moviesResponse = await axios.get(`http://localhost:5000/api/movies`, {
        params: {
          weatherType: weatherType,
        },
      });
      setMovies(moviesResponse.data.recommendations);
    } catch (error) {
      setError('Unable to fetch movie recommendations.');
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <>
      <Header />
      <div 
        className="app" 
        style={{ 
          background: weather ? getBackgroundImage(weather.list[0].weather[0].main) : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          transition: 'background-image 0.5s ease-in-out'
        }}
      >
        {!buttonClicked && <Button onClick={fetchWeatherAndMovies} />} {/* Show button only if not clicked */}
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <div className="content">
          {weather && (
            <div className="weather-card">
              <h2>Weather Forecast in {weather.city.name}</h2>
              <p>{weather.list[0].weather[0].main}</p>
              <p>{weather.list[0].weather[0].description}</p>
              <p>Temperature: {weather.list[0].main.temp} °C</p>
            </div>
          )}
          
          {movies.length > 0 && (
            <div className="movie-card">
              <h2>Recommended Movies</h2>
              <ul>
                {movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
