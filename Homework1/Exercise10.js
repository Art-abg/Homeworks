//Ex.10
//Write a function to convert a long phrase to its acronym

function phrazeToAcronym(phraze) {
    let phrazeArr = phraze.split(" ")
    let arr = [];
    for (let i = 0; i < phrazeArr.length; i++){
        arr[i] = phrazeArr[i][0].toUpperCase();
    }
    return arr.join("");
}

console.log(phrazeToAcronym("Prisoner of War"));
console.log(phrazeToAcronym("Have a good night"));