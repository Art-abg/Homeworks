const nestedObject = {
  a: 1,
  g: 5,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};

function nestedSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedSum(obj[key]);
    }
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(nestedSum(nestedObject));
