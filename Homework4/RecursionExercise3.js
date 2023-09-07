// Recursion Exercise 3
//Write a recursive function to calculate the value of a number raised to an exponent.

function power(num, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return num * power(num, exp - 1);
  }
}

console.log(power(2, 3)); // Output: 8
