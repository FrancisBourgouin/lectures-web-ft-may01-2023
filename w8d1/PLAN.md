# Weather Magic!

Type your city in a form, get the current weather for that city. Optionnally, add a list of buttons for previously searched cities

# Data structures

## City

```jsx
const city = "";
```

## List of cities

```jsx
const cities = [city, city, city];
```

## Weather Data

Temp is in K

- Key is 09fd719b4b698ec0260e424f83378e3d
- Temperature weatherData.main.temp
- Condition weatherData.weather[0].description
- City weatherData.name
- Kelvin <- 273.15

```jsx
const weatherData = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# HTML Structure

- body
  - header
    - h1 Title
  - main
    - section city form
      - form
        - input
        - button
    - section weather information
      - h1 temp - city name
      - h2 conditions
  - footer
    - ul
      - li button city

# Component Structure

- App
  - Header
  - CityForm
  - WeatherInfo
  - CityHistory
    - CityHistoryListItem (?)

# Component Data Structure

- App (provides: weatherData{}, cities[], fetchWeather(), addCity())
  - Header (needs: nothing)
  - CityForm (needs: fetchWeather(), addCity())
  - WeatherInfo (needs: weatherData{})
  - CityHistory (needs: cities[])
    - CityHistoryListItem (?) (needs: city"", fetchWeather())
