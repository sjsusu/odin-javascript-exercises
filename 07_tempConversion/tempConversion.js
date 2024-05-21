const convertToCelsius = function (degreesF) {
  let degreesC = (degreesF - 32) * (5 / 9);

  if (degreesC % 1 !== 0) {
    degreesC = Math.round(degreesC * 10) / 10;
  }

  return degreesC;
};

const convertToFahrenheit = function (degreesC) {
  let degreesF = degreesC * (9 / 5) + 32;

  if (degreesF % 1 !== 0) {
    degreesF = Math.round(degreesF * 10) / 10;
  }

  return degreesF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
