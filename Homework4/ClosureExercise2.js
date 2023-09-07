//Closure Ex.2

// Implement a function that returns an object with methods to get and set a private variable

function privateVariable(val) {
  return {
    get() {
      return val;
    },
    set(newVal) {
      val = newVal;
    }
  };
}

const secretValue = privateVariable(42);

console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
