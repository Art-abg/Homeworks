//Closure Exercise 5
//Write a function that received callback and set of arguments and calculate the result via callback
//using closure.

function add(a, b, c) {
  return a + b + c;
}

function partial(add, num) {
  return function (x, y) {
    return add(num, x, y);
  };
}

const add5 = partial(add, 5);
console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)
