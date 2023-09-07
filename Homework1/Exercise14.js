//Ex.14
//Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (let key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  let a = {a: '1'};
  let b = {a: '1'};
  let c = {a: '1', b: '2'}
  let d = {};
  let e = {};
  console.log(shallowCompare(a,b));
  console.log(shallowCompare(a,c));
  console.log(shallowCompare(d,e));

  