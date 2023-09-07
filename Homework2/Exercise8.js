//Ex.8
//Write a function which remove users with language equals to 'ru'.

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
const noRussians = users.filter((element) => element.lang !== "ru");

console.log(noRussians); // [{ username: "Nil Armstrong, lang: "ENG" }]
