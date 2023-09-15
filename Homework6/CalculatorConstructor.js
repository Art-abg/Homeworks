// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

function Calculator() {
  this.add = (a, b) => a + b;
  this.subtract = (a, b) => a - b;
  this.multiply = (a, b) => a * b;
  this.divide = (a, b) => a / b;
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
