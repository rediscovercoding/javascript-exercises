const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array1) {
	let sum = 0;
  for (element in array1){
    sum = array1[element] + sum;
  };
  return sum;
};

const multiply = function(array1) {
  let multiplication = 1;
  for (element in array1){
    multiplication = array1[element] * multiplication;
  };
  return multiplication;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num1) {
  let num2 = num1;
  if (num1 ==0 || num1 ===1)
    return 1;
  while(num1 > 1){
    num1--;
    num2 = num1* num2;
      }
	return num2;
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
