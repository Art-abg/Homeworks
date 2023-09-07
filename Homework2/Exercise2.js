// Ex.2
// Convert a long phrase to its acronym.
function phrazeToAcronym(phraze) {
  let phrazeArr = phraze.split(" ");
  let arr = [];

  phrazeArr.forEach(function (item, i) {
    arr.push(phrazeArr[i][0].toUpperCase());
  });

  return arr.join("");
}

console.log(phrazeToAcronym("Prisoner of War"));
console.log(phrazeToAcronym("Have a good night"));

SafeArray.reduce((acc, el));
