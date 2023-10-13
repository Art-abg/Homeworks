// Closure Exercise 8
//Implement a currying function using closures.

// function add(a, b, c) {
//   return a + b + c;
// }

// function curry(func) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return func(a, b, c);
//       };
//     };
//   };
// }

// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1, 2, 3)); // Output: 6

function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curred(...args) {
    if (fn.length >= args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curred(...args, ...newArgs);
      };
    }
  };
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
