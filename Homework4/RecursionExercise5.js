// Recursion Exercise 5
// Write a recursive function to check if a given string is a palindrome.

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1));
    } else {
      return false;
    }
  }
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
