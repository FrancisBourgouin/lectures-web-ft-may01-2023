import axios from "axios";
import { useEffect, useState } from "react";

export default function useWeather() {
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

  return { weatherData, cities, searchWeatherByCityName, fetchWeatherData };
}
