//Ex.11
// Write a function which calculates average age of users

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54
  }
];

const getAverageAge = (users) => {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;
  return averageAge;
};

console.log(getAverageAge(users)); // 55
