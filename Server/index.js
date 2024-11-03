// server.js or your main backend file
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Fetch the OpenWeatherMap API key from environment variables
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY; // Ensure this is set in your .env file

// Enable CORS for all requests
app.use(cors());

// Predefined movie recommendations based on weather type
const movieRecommendations = {
  Clear: ['The Pursuit of Happyness','Chennai Express', 'La La Land','Bangalore days', 'The Secret Life of Pets','Ustad Hotel'],
  Clouds: ['Tamasha','Forrest Gump', 'The Notebook','Maheshinte Prathikaram','The Fault in Our Stars','Ennu Ninnte Moideen'],
  Rain: ['Jab we Met','The Shawshank Redemption','Premam', 'The Notebook','Barfi','A Walk to Remember'],
  Snow: ['Frozen','Seeta Ramam', 'Snowpiercer', 'The Revenant'],
};

app.get('/api/forecast', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        lat,
        lon,
        appid: OPENWEATHER_API_KEY, // Use the API key from the environment variable
        units: 'metric',
      },
    });

    res.json(response.data); // Send the forecast data back to the frontend
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    res.status(500).json({ error: 'Unable to fetch weather forecast. Please try again later.' });
  }
});

app.get('/',  (req, res) => {res.send('api')});

app.get('/api/movies', (req, res) => {
  const { weatherType } = req.query;

  if (!weatherType) {
    return res.status(400).json({ error: 'Weather type is required' });
  }

  const recommendations = movieRecommendations[weatherType] || [];
  res.json({ recommendations });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
