// Recursion Exercise 2
//  Write a recursive function to generate the nth number in the Fibonacci sequence.

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7)); // Output: 13
