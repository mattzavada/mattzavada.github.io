let fahrenheit = 50;
let celsius;
let kelvin;

celsius = (fahrenheit - 32) * (5 / 9);
kelvin = (fahrenheit - 32) / 1.8 + 273.15;

console.log(
  fahrenheit +
    " degrees in Fahrenheit is equal to " +
    celsius +
    " degrees in Celsius and " +
    kelvin +
    " degrees in Kelvin"
);
