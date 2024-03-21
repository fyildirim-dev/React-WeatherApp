import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import RightBar from './RightBar';
import WeatherInfo from './WeatherInfo';
import { text } from './RightBar';

const BASE_URL = "http://localhost:3005";

function App() {
  const [cityWeather, setCityWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const [country, setCountry] = useState(null);
  const [time, setTime] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const getWeatherInfo = async (cityName) => {
    const response = await axios.get(`${BASE_URL}/cities`, {
      params: {
        name: cityName
      }
    });
    return response.data;
  }

  const getTime = async () => {
    const response = await axios.get("https://worldtimeapi.org/api/timezone/Europe/Istanbul");
    return response.data;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const cityInfo = await getWeatherInfo({ text });
        const currentTime = await getTime();
        setCityWeather(cityInfo[0]);
        setTemp(cityInfo[0].temperature);
        setCountry(cityInfo[0].country);
        setTime(currentTime);
        setImgSrc("./src/images/" + cityInfo[0].weather + ".jpg");
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    }

    fetchData();
  }, []);

  const handleChildButtonClick = async (value) => {
    let cityInfo = await getWeatherInfo(value);
    const currentTime = await getTime();
    if (cityInfo.length == 0) {
      cityInfo = await getWeatherInfo("New York");
    }
    setCityWeather(cityInfo[0]);
    setTemp(cityInfo[0].temperature);
    setCountry(cityInfo[0].country);
    setTime(currentTime);
    setImgSrc("./src/images/" + cityInfo[0].weather + ".jpg");
  };

  return (
    <div>
      <img className='resim' src={imgSrc} alt="Hava Durumu" />
      <WeatherInfo timeInfo={time} tempe={temp} country={country} />
      <RightBar weatherInfo={cityWeather} onButtonClick={handleChildButtonClick} />
    </div>
  )
}

export default App
