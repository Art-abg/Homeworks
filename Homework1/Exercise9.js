//Ex.9
// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// If the phone number is less than 10 and longer than 10 digits assume that it is a bad number
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.
// Ignore spaces between digits.

function numCheck(number) {
    let numberStr = String(number);
    numberStr = numberStr.replace(/\s/g, '');
    let numberArr = Array.from(numberStr);
  
    if (numberArr[0] === "+") {
      numberArr.shift();
    } 
    if (numberArr.length !== 10) {
      return "Bad number";
    } else if (numberArr.some((x) => x === "+")) {
      return "Bad number";
    } else {
      return numberArr.join("");
    }
  
  }
  
  console.log(numCheck("455678")); 
  console.log(numCheck('339 5656888')); 
  console.log(numCheck("+0008989562")); 
  console.log(numCheck("45231489562")); 
  console.log(numCheck("123+2356897452")); 
  
