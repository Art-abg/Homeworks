// Closure Ex.3
// Write a function that caches the duplication of result of a calculation using closure.

function createCachingFunction(val) {
  let obj = {};

  return function (n) {
    if (obj[n] !== undefined) {
      return `cached ${obj[n]}`;
    } else {
      obj[n] = n * 2;
      return `calculated ${obj[n]}`;
    }
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); // Output: 10 (calculated)
console.log(cachedCalculation(5)); // Output: 10 (cached)
console.log(cachedCalculation(5));
console.log(cachedCalculation(4));
console.log(cachedCalculation(4));
console.log(cachedCalculation(5));
