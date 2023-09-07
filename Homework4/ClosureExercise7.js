//Closure Exercise 7
//Create a function factory that generates functions for different operations.

function createCalculator(operation) {
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };

  return function (x, y) {
    return operations[operation](x, y);
  };
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8
