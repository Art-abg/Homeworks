//Ex.3
/*
 Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
new array where each element from that array is placed under the index of its value. Start from the
smallest value and end with the biggest one. If there are missing values, put in its places undefined */

function underItsIndex(arr = []) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr[i]; j++) {
      if (j === arr[i]) {
        arr1[j] = arr[i];
        continue;
      }

      if (arr1[j] === undefined) {
        arr1[j] = undefined;
        continue;
      }
    }
  }

  return arr1;
}

console.log(underItsIndex([4, 3, 0, 9]));
console.log(underItsIndex([26, 30, 19, 5]));
