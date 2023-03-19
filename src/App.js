import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const searchChange = (value) => {
    setSearch(value)
    // console.log(value);
  }

  const getWeatherData = () => {
    if(search !=="") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=748aedc835499428e714556f7ec5a93b&units=metric`).then((response) => {
        setWeather(response.data)
      }).catch((error) => {
        console.log(error)
      });

    }
  }


  return (
    <div className='container'>
      <Search searchData={search} eventHandler={searchChange} searchWeather={getWeatherData} />
      <Result weatherData={weather}/>
    </div>
  );
}

export default App;


// 5b860605e2d13460bb03ce12e5f270ba

// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid=5b860605e2d13460bb03ce12e5f270ba

// https://api.openweathermap.org/data/2.5/weather?id={kolkata}&appid=5b860605e2d13460bb03ce12e5f270ba=metric
