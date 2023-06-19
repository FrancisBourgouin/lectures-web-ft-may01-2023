import { useEffect, useState } from "react";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import WeatherInfo from "./components/WeatherInfo";
import CityHistory from "./components/CityHistory";

import "./App.css";

import fakeWeatherData from "./mocks/fakeWeatherData";
import axios from "axios";
import BreakingComponent from "./components/BreakingComponent";

// What is useEffect ?
// What is the effect on our code ?

function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [cities, setCities] = useState([]);

  const addCity = (cityName) => {
    if (!cities.includes(cityName)) {
      setCities([...cities, cityName]);
    }
  };

  const fetchWeatherData = (cityName) => {
    const API = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`;

    return axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        // do something
        console.log(data);
        setWeatherData(data);
        addCity(cityName);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(undefined);
      });

    // Fetch thinks that 404s are a success
    // return fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // do something
    //     console.log(data);
    //     setWeatherData(data);
    //     addCity(cityName);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setWeatherData(undefined);
    //   });
  };

  const searchWeatherByCityName = (formData) => {
    const cityName = formData.city;

    fetchWeatherData(cityName);
  };

  useEffect(() => {
    fetchWeatherData("Montréal");
  }, []);
  return (
    <div className="App">
      <BreakingComponent />
      <Header />
      <main>
        <CityForm onSubmit={searchWeatherByCityName} />
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </main>
      <CityHistory cities={cities} fetchWeatherData={fetchWeatherData} />
    </div>
  );
}

export default App;
