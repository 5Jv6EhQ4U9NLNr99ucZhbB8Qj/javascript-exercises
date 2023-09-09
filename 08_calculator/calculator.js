const add = function(...args) {
  return args.reduce((total, arg) => total + arg, 0);
};

const subtract = function(...args) {
	return args.reduce((total, arg) => total - arg);
};

const sum = function(arr) {
	let total = 0;
  arr.forEach((item) => {
    total += item;
  });
  return total;
};

const multiply = function(...nums) {
  return nums.reduce((total, num) => total * num);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
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
