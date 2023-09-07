// Recursion Exercise 8
// Write a recursive function to flatten a nested object.

function flattenObject(obj) {
  let flat = {};
  function recursive(obj) {
    Object.keys(obj).forEach((key) => {
      return recursive(obj[key]); //not sure how to do this
    });
  }
  return flat;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
};
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject); /* {
    "a": 1,
    "b.c": 2,
    "b.d.e": 3,
    "b.d.f": 4,
    "g": 5
   } */
