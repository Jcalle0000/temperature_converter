const assert = require('assert');
const { fahrenheit_to_celcius, celsiusToFahrenheit } = require('./index.js'); // how does this know the extension?

assert.strictEqual(fahrenheit_to_celcius(32), 0, '32 F should be 0');
assert.strictEqual(celsiusToFahrenheit(100), 212, '100°C should be 212');

console.log('All tests passed!');
