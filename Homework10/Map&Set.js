class Users {
  constructor(users) {
    this.users = [];
    for (let user of users) {
      this.addUser(user);
    }
  }

  addUser(user) {
    this.users.push(user);
  }

  addUsers(users) {
    this.users.push(...users);
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}

function memoize(func) {
  let cache = {};
  return function (...args) {
    let key = args.join(",");
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    } else {
      let result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let memoizedFactorial = memoize(factorial);

function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
]);
console.log(mappedUser.getUserById(1)); // { id: 1, name: "Alice", email:
//"alice@example.com" };
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
console.log(mappedUser.getUserById(3)); // { id: 3, name: "Ann", email:
//"ann@example.com"

console.log(memoizedFactorial(5)); // Output: 120

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])); // Output: [1,2,3,4,5]
