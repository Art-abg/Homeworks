//Ex.12
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

const sortBy = (arr, order) => {
  if (order === "Asc") {
    return arr.sort();
  } else if (order === "Desc") {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
};

console.log(sortBy([4, 3, 2, 1], "Asc")); // [1, 2, 3, 4]
console.log(sortBy([7, 8, 11, 66])); // [7, 8, 11, 66]
console.log(sortBy([7, 8, 11, 66], "Desc")); // [66, 11, 8, 7]
