//Write your own call, apply and bind methods

function myCall(obj, a) {
  return this(obj, a);
}

function f(n, r) {
  return n.c + r;
}

Function.prototype.myCall = myCall;
const obj = {
  c: 6
};

console.log(f.myCall(obj, 5));

function myApply(obj, args) {
  return this(...args);
}
function myBind(obj) {
  return function () {
    return this.apply(obj, arguments);
  };
}
Function.prototype.myApply = myApply;
Function.prototype.myBind = myBind;
