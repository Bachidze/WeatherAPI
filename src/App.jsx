import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Temp from './components/Temp';
import { data } from './Weather';
import Title from './components/Title';
import Img2 from './components/Img2';


function App() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('choose');

  const fetchingWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8230c11d1c9b581aebc5cc25ce54c58c&units=metric`)
      .then((res) => {
        setWeather(res.data)
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };


  return (
    <>
      <div className='App'>
        
        <div className='inp'>

          <img className='headerimg' src="/assets/Group 165.svg" alt="" />

          <div>
          <button onClick={fetchingWeather}>
            <img className='loop' src="/assets/fa_search.svg" alt="" />
          </button>
          </div>
          
          <input
          maxLength={15}
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search Location..."
          />

        </div>

        <div className='mainflex'>
          <h2>{weather.main?.temp_max}</h2>
          <div className='telavi'>

            <h3>
              {city}
            </h3>
            <h3>
           {weather?.sys?.country} 
            </h3>
          </div>
        
            <Img2/>
         
        </div>

        <div className='border'>
        </div>
    <div className='main'>

          <Title/>
     

            <Temp
          title={data[0].title}
          imgUrl={data[0].imgUrl}
          weather={weather?.main?.temp_max}
          />    <Temp
          title={data[1].title}
          imgUrl={data[1].imgUrl}
          weather={weather?.main?.temp_min}
          />    <Temp
          title={data[2].title}
          imgUrl={data[2].imgUrl}
          weather={weather?.main?.humidity}
          />    <Temp
          title={data[3].title}
          imgUrl={data[3].imgUrl}
          weather={weather?.clouds?.all}
          />
            <Temp
          title={data[4].title}
          imgUrl={data[4].imgUrl}
          weather={weather?.wind?.speed}
          />

          <div className="border2">
        </div>
      </div> 
    </div>
    </>
  );
}

export default App;
