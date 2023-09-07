//Ex.9
// Write a function which filters object by field
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true
  },
  {
    username: "Elon Musk",
    isAstronaut: false
  }
];

const filterByField = (arr, field) => {
  return arr.filter((element) => element[field]);
};

console.log(filterByField(users, "isAstronaut")); // [{ username: "Yuri Gagarin", lang:
// "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
