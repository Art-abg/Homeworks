//Closure Exercise 1

//Create a counter function using closure that increments a count every time it's called.

const counter = createCounter();
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
