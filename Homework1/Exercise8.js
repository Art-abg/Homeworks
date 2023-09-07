//Ex.8
// Write a program to check the validity of password input by users. Validation :
// At least 1 letter between [a-z] and 1 letter between [A-Z].
// At least 1 number between [0-9].
// At least 1 character from [$#@].
// Minimum length 6 characters.
// Maximum length 16 characters.

function passwordCheck(pass) {
    let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@]).*$/;
    if (pass.length < 6 || pass.length > 16) {
        return "Invalid";
    } else if (regEx.test(pass)) {
        return "Valid";
    } else{
        return "Invalid";
    }
    
}

console.log(passwordCheck('12asdf'));
console.log(passwordCheck('Aaza1234566#'));

