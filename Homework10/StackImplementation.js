// Stack implementation using array

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  getSize() {
    return this.stack.length;
  }
}
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop()); // Should print 2
// console.log(stack.peek()); // Should print 1
// console.log(stack.isEmpty()); // Should print false
// console.log(stack.getSize()); // Should print 1

// str check for brackets that will give boolean using stack

const checkBrackets = (str) => {
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.indexOf(str[i]) > -1) {
      stack.push(str[i]);
    } else if (closingBrackets.indexOf(str[i]) > -1) {
      const lastOpenBracket = stack.pop();
      if (
        openingBrackets.indexOf(lastOpenBracket) ===
        closingBrackets.indexOf(str[i])
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(checkBrackets("([]){}[]")); // true
console.log(checkBrackets("(}()[]"));
console.log(checkBrackets("))"));
console.log(checkBrackets("((({))})"));
