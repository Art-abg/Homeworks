// Recursion Exercise 6
// Write a recursive function to perform a binary search on a sorted array

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return -1;
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 10)); // Output: -1
