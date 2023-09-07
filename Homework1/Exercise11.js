//Ex.11
// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that
// array. Check that items of the given array are arrays.


function prodOfBigNegNum(arr) {
    if (!Array.isArray(arr)) 
    {
      return 'Invalid Argument';
    } 
    if (arr.every(num => typeof num === 'number')) 
    {
        return 'Invalid Argument';
    }
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      let subarray = arr[i];
      if (!Array.isArray(subarray)) {
        continue;
      }
      let biggestNegative = 0;
      for (let j = 0; j < subarray.length; j++) {
        let num = subarray[j];
        if (num < 0) {
          if (biggestNegative === 0 || num > biggestNegative) {
            biggestNegative = num;
          }
        }
      }
      if (biggestNegative !== 0) {
        product *= biggestNegative;
      }
    }
    if (product === 1) {
      return 'No negatives';
    } else {
      return product;
    }
  }
  
  console.log(prodOfBigNegNum([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
  console.log(prodOfBigNegNum([[3, 4], [11, 0], [5, 6, 7, 8]]));
  console.log(prodOfBigNegNum([1, 2, 3])); 