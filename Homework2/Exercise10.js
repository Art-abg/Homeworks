//Ex.10
// Given an array, return the sum of numbers that are 18 or over
const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

const over18 = arr.filter((element) => element > 18);
const sumOver18 = over18.reduce((a, b) => a + b);

console.log(over18);
console.log(sumOver18);
