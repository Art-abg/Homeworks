//Ex.6
//Write a function which parses string integers. If it's not possible to parse, then add null
const parseInteger = (arr) => {
  let integer = arr.map((element) => {
    if (isNaN(+element) || typeof +element === "string") {
      return null;
    } else {
      return +element;
    }
  });
  return integer;
};

console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323]
