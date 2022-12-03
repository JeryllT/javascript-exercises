const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
	return nums.reduce((total, cur) => cur + total, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, cur) => cur * total);
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  res = 1
  for(i = a; i > 0; i--) {
    res *= i;
  }
  return res;
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
