//Ex.4
/*
Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
row and print them as an array.
*/

function sumArr(arr = []) {
  let output = [];

  for (let arr1 of arr) {
    let sum = 0;
    for (let num of arr1) {
      sum += num;
    }
    output.push(sum);
  }
  return output;
}

console.log(
  sumArr([[3, 4, 5],[1, 0, 0],[4, 5, 4],[8, 8, -1]]));
console.log(sumArr([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]));
console.log(sumArr([[1], [2], [3], [4]]));
