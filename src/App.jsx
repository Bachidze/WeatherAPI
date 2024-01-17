import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState('');
  const [weather2, setWeather2] = useState('');
  const [weather3, setWeather3] = useState('');
  const [weather4, setWeather4] = useState('');
  const [weather5, setWeather5] = useState('');
  const [weather6, setWeather6] = useState('');
  const [city, setCity] = useState('Telavi');

  const fetchingWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8230c11d1c9b581aebc5cc25ce54c58c&units=metric`)
      .then((res) => {
        setWeather(res.data.main.temp_max)
        setWeather2(res.data.main.temp_min)
        setWeather3(res.data.main.humidity)
        setWeather4(res.data.clouds.all)
        setWeather5(res.data.wind.speed)
        setWeather6(res.data.sys.country)
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

          <img className='headerimg' src="/assets/Group 165.svg" alt="" />
          <img className='loop' src="/assets/fa_search.svg" alt="" />

        <input
        maxLength={15}
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search Location..."

        />
        </div>

        <div className='mainflex'>

          <h2>{weather}</h2>
          <div className='telavi'>

            <h3>
              {city}
            </h3>
            <h3>
              {weather6}

            </h3>
          </div>
        
            <img className='cloud' src="/assets/outline (1).svg" alt="" />
         

        </div>

        <div className='border'>

        </div>
    <div className='main'>
      <div className='title'>
        <h5>Weather Details...</h5>
        <h6>thunderstorm with light drizzle</h6>
      </div>

        <div className='flex'>
        <h1>Temp_Max</h1>
        <div className='line'>
        <p>{weather}</p>
        <img src="/assets/Vector.svg" alt="" />
        </div>
        </div>

        <div className='flex'>
        <h1 className='min'>Temp_Min</h1>
        <div className='line'>
        <p>{weather2}</p>
        <img src="/assets/Vector (1).svg" alt="" />
        </div>
        </div>

        <div className='flex'>
        <h1 className='humidity'>Humidity</h1>
        <div className='line line2'>
        <p>{weather3}</p>
        <img src="/assets/outline.svg" alt="" />
        </div>
        </div>

        <div className='flex'>
        <h1 className='cloudy'>Clouds</h1>
        <div className='line line3'>
        <p>{weather4}</p>
        <img src="/assets/outline (1).svg" alt="" />
        </div>
        </div>

        <div className='flex'>
        <h1 className='wind'>Wind</h1>
        <div className='line line4'>
        <p>{weather5}</p>
        <img src="/assets/outline (2).svg" alt="" />
        </div>
        </div>
        <div className="border2">

        </div>
        
      </div>

    </div>
    </>
  );
}

export default App;
