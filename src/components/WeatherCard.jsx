
import React, { useEffect, useState } from 'react'
import axios from "axios";
import './WeatherCard.css'
import { PiMapPinFill } from 'react-icons/pi';

export default function WeatherCard({lat, lon, locationName}) {
  const API_KEY = '' //ADD openweathermap API KEY AQUI
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}&lang=pt_br`;
  
  const initState = {
    location: 'Local',
    temperature: 0,
    weatherDescription: 'descrição',
    feelsLike: 0,
    max: 0,
    min: 0,
    humidity:0
  }
  // API param units = metric retornando max_temp e min_temp errado
  const kelvinToCelsius = (K) =>  (K - 273.15).toFixed(0); 

  const [post1, setPost1] = useState(initState);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      const state = {
        location: locationName,
        temperature: kelvinToCelsius(response.data.main.temp),
        weatherDescription: response.data.weather[0].description,
        feelsLike: kelvinToCelsius(response.data.main.feels_like),
        max: kelvinToCelsius(response.data.main.temp_max),
        min: kelvinToCelsius(response.data.main.temp_min),
        humidity: response.data.main.humidity
      }
      setPost1(state);
    });

  }, []);

  return (
    <div className='box-container'>
      <div className="location-box">
        <span className='location-text'>{post1.location}</span>
        <PiMapPinFill size={14} />
      </div>
      <div className='weather-box'>
        <span className='weather-num'>{post1.temperature}º</span>
        <span className="wether-desc">{post1.weatherDescription}</span>
      </div>
      <span className="weather-text">Sensação térmica {post1.feelsLike}º<br/>Mínima de {post1.min}º<br/>Máxima de {post1.max}º<br/>A umidade do ar é de {[post1.humidity]}%</span>

    </div>
  )
}
