// Closure Exercise 6
// Implement a memoization function using closure to cache expensive function calls.

function memoize(fn, cache = {}) {
  return function memoized(arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}

const memoizedFibonacci = memoize(function (n) {
  if (n <= 2) {
    return 1;
  } else {
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
});

console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
