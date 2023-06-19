export default function CityHistory(props) {
  const { cities, fetchWeatherData } = props;

  const parsedCities =
    Array.isArray(cities) &&
    cities.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeatherData(city)}>{city}</button>
      </li>
    ));
  return (
    <footer className="CityHistory">
      <ul>{parsedCities}</ul>
    </footer>
  );
}
