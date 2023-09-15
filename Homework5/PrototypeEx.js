//Create a draw of prototype inheritance for following code

const arr = [1, 2, 3]; // arr -> Array.prototype -> Object.prototype -> null
const human = {
  isHuman: true // human -> Object.prototype -> null
};
const str = ""; // str -> String.prototype -> Object.prototype -> null
const user = {
  // user -> human -> Object.prototype -> null
  name: "John",
  __proto__: human
};
const car = {
  // car -> Object.prototype -> null
  hasEngine: true
};
const mercedes = {
  // mercedes -> car -> Object.prototype -> null
  name: "mercedes",
  __proto__: car
};
const bmw = Object.create(null); // bmw -> null
const emptyObj = {}; // emptyObj -> Object.prototype -> null
function fn() {
  // fn -> Function.prototype -> Object.prototype -> null
  console.log("hello, world!");
}
const emptyWithoutProto = Object.create(null); // emptyWithoutProto -> null
const num = 12; // num -> Number.prototype -> Object.prototype -> null
const isAuth = false; // isAuth -> Boolean.prototype -> Object.prototype -> nulls
