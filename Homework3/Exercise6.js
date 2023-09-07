//Ex.6
//Given a square matrix (nxn) consisting of zeros and ones. Find the length (k) of the largest embedded square (kxk) matrix consisting of ones.
const arr = [
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1]
];

function findLargestSquare(arr) {
  const len = arr.length;
  let maxLen = 0;

  const newArr = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === 1) {
        if (i === 0 || j === 0) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] =
            Math.min(newArr[i - 1][j - 1], newArr[i - 1][j], newArr[i][j - 1]) +
            1;
        }
        if (newArr[i][j] > maxLen) {
          maxLen = newArr[i][j];
        }
      }
    }
  }

  return maxLen;
}

const largestSquareLength = findLargestSquare(arr);
console.log(largestSquareLength);
