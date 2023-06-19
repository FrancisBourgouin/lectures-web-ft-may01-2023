import { useEffect, useReducer, useState } from "react";

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
  const initialState = {
    weatherData: undefined,
    cities: [],
  };

  // const [state, setState] = useState(initialState);

  // const addCity = (cityName) => {
  //   const updatedCities = { ...state.cities };

  //   if (!updatedCities.includes(cityName)) {
  //     updatedCities.push(cityName);
  //     setState({ ...state, cities: updatedCities });
  //   }
  // };

  // payload => {type:"ADD_CITY", name:"Montréal"}

  const stateReducer = (state, payload) => {
    switch (payload.type) {
      case payload.type === "ADD_CITY":
        const updatedCities = { ...state.cities };

        if (!updatedCities.includes(cityName)) {
          updatedCities.push(cityName);
          return { ...state, cities: updatedCities };
        }
        break;
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  dispatch("ADD_CITY", "Montréal");

  const addCity = (cityName) => dispatch("ADD_CITY", cityName);

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
