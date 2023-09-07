// Ex.1
// Find the sign of product of three numbers without multiplication operator. Display the specified sign.
"use strict";

function signValue(a, b, c) {
  let negativeCount = 0;

  if (a < 0) {
    negativeCount++;
  }
  if (b < 0) {
    negativeCount++;
  }
  if (c < 0) {
    negativeCount++;
  }

  if (negativeCount % 2 === 0) {
    return "+";
  } else if (a === 0 || b === 0 || c === 0) {
    return "unsigned";
  } else {
    return "-";
  }
}

console.log(signValue(-14, 5, 0));

console.log(signValue(-8, 9, -6));

console.log(signValue(4, 19, -2));

// without conditionals but with multiplication operator

function signValue2(a, b, c) {
  let multiplication = a * b * c;
  let r = String(multiplication / Math.abs(multiplication));
  let obj = {
    1: "+",
    "-1": "-",
    NaN: "unsigned"
  };
  return obj[r];
}

console.log(signValue2(-14, 5, 0));

console.log(signValue2(-8, 9, -6));

console.log(signValue2(4, 19, -2));

