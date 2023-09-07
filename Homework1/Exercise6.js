//Ex.6
/*
Takes two arrays and insert the second array in the middle of the first array. The first array always has
two elements. 
*/

function insertArrInMid(arr1 = [], arr2 = []) {
  if (arr1.length != 2) {
    return `Incorrect entry! Your input for the array consists of ${arr1.length} elements, when it should have just 2`;
  }

  arr1.splice(1, 0, ...arr2);
  return arr1;
}

console.log(insertArrInMid([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(insertArrInMid([15, 150], [45, 75, 35]));
console.log(insertArrInMid([[1, 2],[5, 6]],[[3, 4]]));
console.log(insertArrInMid([1, 10, 14], [2, 3, 4, 5, 6, 7, 8, 9]));