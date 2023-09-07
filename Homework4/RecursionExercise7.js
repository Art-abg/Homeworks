// Recursion Exercise 7
// Write a recursive function to flatten an array of nested arrays.

function flattenArray(arr) {
  let flat = [];
  function recursive(arr) {
    if (Array.isArray(arr)) {
      arr.forEach((el) => recursive(el));
    } else {
      flat.push(arr);
    }
  }
  recursive(arr);
  return flat;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
