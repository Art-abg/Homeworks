//Ex.2
// Given a matrix of numbers (nxm), output the array consisting of the minimum numbers of each row.

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
const findSmallestNumberOfEachArr = (arr) => {
  const smallNum = arr.map((element) => Math.min(...element));
  return smallNum;
};

console.log(findSmallestNumberOfEachArr(arrMatrix));
console.log(findSmallestNumberOfEachArr(arrMatrix1));
