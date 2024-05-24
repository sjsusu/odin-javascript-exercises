const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, item) => total + item, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
