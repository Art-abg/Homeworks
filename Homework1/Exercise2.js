/* Ex.2
Given a number n ( n >= 0 ). Print n-th Fibonacci number. (Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8 …, an
= an-1 + an-2) 
*/

function fibonacciNumber(n) {
  let a = 0;
  let b = 1;
  let sum = 0;

  if (n === 0) {
    return a;
  }

  if (n === 1) {
    return b;
  }

  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return sum;
}

console.log(fibonacciNumber(0));
console.log(fibonacciNumber(2));
console.log(fibonacciNumber(10));
console.log(fibonacciNumber(20));

// second easier solution (came later to mind :) )

function fibonacciNumber(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
  }
}

console.log(fibonacciNumber(0));
console.log(fibonacciNumber(2));
console.log(fibonacciNumber(10));
console.log(fibonacciNumber(20));
