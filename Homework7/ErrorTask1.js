// Error Task 1

function reverseString(s) {
  try {
    let chars = s.split("");
    let reversed = chars.reverse();
    let result = reversed.join("");
    console.log(result);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString("hello");
reverseString(1234);
