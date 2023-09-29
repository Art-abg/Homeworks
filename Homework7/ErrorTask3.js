//Error Task 3

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    return error.message;
  }
  return s;
}

console.log(reverseString("hello"));
console.log(reverseString(1234));
