//Ex.7
// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// [1, 2, 55, 166]

const onlyNum = arr.filter(
  (element) => typeof element === "number" && !isNaN(element)
);

console.log(onlyNum);
