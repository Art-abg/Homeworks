//Ex.5
// Convert base-2 number to base-10

function convertBinaryToDecimal(binary) {
  let decimal = parseInt(binary, 2);
  return decimal;
}

console.log(convertBinaryToDecimal("010"));
console.log(convertBinaryToDecimal("10010"));
console.log(convertBinaryToDecimal("0101011"));
