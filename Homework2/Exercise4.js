//Ex.4
// Write a function which returns array of usernames.
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

const getUserNames = users.map((element) => element.username);

console.log(getUserNames); // ['Yuri Gagarin', 'Nil Armstrong']
