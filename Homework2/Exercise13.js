//Ex.13
//Implement these array methods: unshift, shift, pop, push, forEach, findIndex, find, every, some, map, filter, reduce, slice, splice, flat

//not sure how exactly this exercise should have been completed

const items = [
  "Armenian",
  "Code",
  "Academy",
  "Advanced",
  "JavaScript",
  "Course"
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Unshift

const itemsUnshift = items.unshift("New");
// console.log(itemsUnshift);
// console.log(items);

// Shift

const itemsShift = items.shift();
// console.log(itemsShift);

// pop
const itemsPop = items.pop();
//console.log(itemsPop);

//push

const itemsPush = items.push("Adding");
//console.log(itemsPush);
// console.log(items);

// forEach

items.forEach((item) => {
  console.log(item);
});

// findIndex

const index = items.findIndex((item) => item === "JavaScript");
// console.log(index);

// find

const foundItem = items.find((item) => item === "Code");
// console.log(foundItem);

// every

const isEveryItemLongerThanThreeCharacters = items.every(
  (item) => item.length > 3
);
// console.log(isEveryItemLongerThanThreeCharacters);

// some

const isThereAnItemWithThreeCharacters = items.some(
  (item) => item.length === 3
);
// console.log(isThereAnItemWithThreeCharacters);

// map

const mappedItems = items.map((item) => item.toUpperCase());
// console.log(mappedItems);

// filter

const filteredItems = items.filter((item) => item.length > 5);
// console.log(filteredItems);

// reduce

const totalSum = numbers.reduce((sum, num) => sum + num);
// console.log(totalSum);

// slice

const slicedItems = items.slice(0, 2);
// console.log(slicedItems);

// splice

const splicedItems = items.splice(1, 3);
// console.log(splicedItems); // console.log(items);

// flat

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const flatArray = nestedArray.flat();
// console.log(flatArray);
