// semistandard code formatter

// convert fahrenheit to celsius
// convert celsiusToFahrenheit

function fahrenheit_to_celcius (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// reverse conversion
function celsiusToFahrenheit (celsius) {
  return (celsius) * (9 / 5) + 32;
}

// export the conversion functions
// 
module.exports = {
  fahrenheit_to_celcius,
  celsiusToFahrenheit
};
