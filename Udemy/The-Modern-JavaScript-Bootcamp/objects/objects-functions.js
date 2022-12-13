let currentWeather = {
  temp: 32,
  wind: 22,
  conidition: "cloudy",
};

let convertFahrenheit = function (weather) {
  return {
    fahrenheit: weather.temp,
    celsius: (weather.temp - 32) * (5 / 9),
    kelvin: (weather.temp - 32) / 1.8 + 273.15,
  };
};

let temps = convertFahrenheit(currentWeather);

console.log(
  `The current temps are ${temps.fahrenheit}F, ${temps.celsius}C, and ${temps.kelvin}K.`
);
