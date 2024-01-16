import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState('');
  const [weather2, setWeather2] = useState('');
  const [weather3, setWeather3] = useState('');
  const [weather4, setWeather4] = useState('');
  const [weather5, setWeather5] = useState('');
  const [city, setCity] = useState('london');

  const fetchingWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8230c11d1c9b581aebc5cc25ce54c58c&units=metric`)
      .then((res) => {
        setWeather(res.data.main.temp_max)
        setWeather2(res.data.main.temp_min)
        setWeather3(res.data.main.humidity)
        setWeather4(res.data.clouds.all)
        setWeather5(res.data.wind.speed)
        console.log(res.data)
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    fetchingWeather();
  }, [city]);

  return (
    <>
      <div className='App'>
        <div className='inp'>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        </div>
    <div className='main'>

        <div className='flex'>
        <h1>Temp_Max</h1>
        <p> {weather}</p>
        </div>
        <div className='flex'>
        <h1>Temp_Min</h1>
        <p>{weather2}</p>
        </div>
        <div className='flex'>
        <h1>Humidity</h1>
        <p>{weather3}</p>
        </div>
        <div className='flex'>
        <h1>Clouds</h1>
        <p> {weather4}</p>
        </div>
        <div className='flex'>
        <h1>Temp_Max</h1>
        <p>{`${weather5} Km/h`}</p>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
