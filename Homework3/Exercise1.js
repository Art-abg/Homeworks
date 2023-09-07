// Ex.1
// Given a matrix of numbers (the length of the rows can vary), find the index of the array with the largest sum.
const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8]
];
const arrMatrix1 = [
  [4, 6, 9],
  [66, 3456, 856],
  [568568, 54367, 4356],
  [457457, 58687, 5757, 45656, 347777]
];
const findLargestSumIndex = (arr) => {
  const sum = arr.map((element) => element.reduce((acc, ele) => acc + ele, 0));
  const largestSum = Math.max(...sum);
  const largestSumIndex = sum.findIndex((element) => element === largestSum);

  return `Index of the Array with largest sum is ${largestSumIndex}`;
};

console.log(findLargestSumIndex(arrMatrix));
console.log(findLargestSumIndex(arrMatrix1));
