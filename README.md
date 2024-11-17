<img width="1280" alt="readme-banner" src="https://github.com/user-attachments/assets/35332e92-44cb-425b-9dff-27bcf1023c6c">

# WeatherFlix 🎯


## Basic Details
### Team Name: Akhil V A's Team


### Team Members
- Team Lead: Akhil V A - Saintgits College of Engineering

### Project Description
WeatherFlix is a web app that suggests movies based on real-time weather conditions using the OpenWeather API. It automatically detects the user's location to provide tailored recommendations and features dynamic backgrounds that change according to the weather.

### The Problem (that doesn't exist)
The Problem: In an era of endless streaming options, finding the perfect movie can be overwhelming, especially when considering the current weather. Users often struggle to select films that match their mood and the environment, leading to a less enjoyable viewing experience. WeatherFlix addresses this by seamlessly integrating weather conditions with personalized movie recommendations.

### The Solution (that nobody asked for)
The Solution: WeatherFlix provides a unique movie recommendation system that suggests films based on real-time weather conditions. By analyzing the current climate at the user's location, the platform curates tailored suggestions, enhancing the viewing experience and making it easier for users to find the perfect movie to match their mood.

## Technical Details
### Technologies/Components Used
For Software:
- Javascript
- React js, Express js
- axios, cors, express, bootstrap, react, react-bootstrap, react-dom
- @eslint/js, @types/react, @types/react-dom, @vitejs/plugin-react, eslint, eslint-plugin-react,vite

### Implementation
For Software: On the landing page, clicking the movie suggestion button utilizes browser geolocation to obtain the user's coordinates. These coordinates are sent to the backend, where the OpenWeatherMap API analyzes the current weather conditions. Based on this data, the application suggests movies from predefined arrays tailored to the specific weather.
# Installation
npm install

# Run
client:
  -npm run dev
server:
  -node index.js

### Project Documentation
For Software:
- OpenWeatherMap API
    Endpoint: https://api.openweathermap.org/data/2.5/weather
    Method: GET
- Parameters:
    lat (required): Latitude of the location.
    lon (required): Longitude of the location.
    appid (required): Your OpenWeatherMap API key.
    units: (optional) Units for temperature. Can be metric, imperial, or standard.
- Response:
    Returns weather data, including conditions, temperature, and more.

# Screenshots (Add at least 3)
![Screenshot1](https://github.com/Akhilva4871/WeatherFlix/blob/main/Screenshot1.png?raw=true)
*Initial look of Home page*

![Screenshot2](![image](https://github.com/user-attachments/assets/e78b3ee3-5c0b-400e-96a9-9cdcd0c179ea)
*current weather and suitable movie recommendation*

![Screenshot3](https://github.com/Akhilva4871/WeatherFlix/blob/main/Screenshot%203.png?raw=true)
*Current weather and suitable movie recommendation when vpn was used*

##Project Demo
##Video

https://drive.google.com/file/d/1wF1FvI2cNqVyi5D0VgUv2Hfz4vmbZnIW/view?usp=drivesdk


## Team Contributions
- [Akhil V A]: [SFull Stack Developer]

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProject--24-24?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)



