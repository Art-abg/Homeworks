//Ex.15

// Write a function which calculator average age of user (your function must use reduce method)

const users = [
    {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    },
    {
    name: "Jane Smith",
    age: 25,
    isAdmin: true,
    },
    {
    name: "Bob Johnson",
    age: 40,
    isAdmin: false,
    },
   ];

   function getAverageAge(arr) {
    let sum = arr.reduce((a, b) => a + b.age, 0);
    let average = sum / arr.length;
    return average;
  }

  console.log(getAverageAge(users));