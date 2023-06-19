import Header from "./components/Header";
import CityForm from "./components/CityForm";
import WeatherInfo from "./components/WeatherInfo";
import CityHistory from "./components/CityHistory";

import "./App.css";

import BreakingComponent from "./components/BreakingComponent";
import useWeather from "./hooks/useWeather";

// What is useEffect ?
// What is the effect on our code ?

function App() {
  const { weatherData, cities, searchWeatherByCityName, fetchWeatherData } = useWeather();

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
