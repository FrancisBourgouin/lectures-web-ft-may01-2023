export default function WeatherInfo(props) {
  const { weatherData } = props;

  const temperature = weatherData.main.temp;
  const prettyTemp = Math.round(temperature - 273.15) + "°C";
  const condition = weatherData.weather[0].description;
  const city = weatherData.name;

  return (
    <section className="WeatherInfo">
      <h1>
        {prettyTemp} - {city}
      </h1>
      <h2>{condition}</h2>
    </section>
  );
}
