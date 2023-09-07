//Ex.5
// Write a function which returns array of lengths of user names

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru"
  },
  {
    username: "Nil Armstrong",
    lang: "ENG"
  }
];
const getUserNamesLength = users.map((element) => element.username.length);

console.log(getUserNamesLength); // [12, 13]
