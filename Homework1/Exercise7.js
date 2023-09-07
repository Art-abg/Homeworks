//Ex.7
//Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ … _ 3 _ 2 _ 1 , 0! = 1

function factorialCalc(positiveNum) {
    let factorial = 1;
    if (positiveNum < 0){
        return 'Enter positive number!'

    } else if (positiveNum === 0 || positiveNum === 1){
        return `${positiveNum}! = ${factorial}`;

    } else if (positiveNum > 1){
        for (let i = positiveNum; i >= 1; i--){
            factorial *= i;
        }
        return `${positiveNum}! = ${factorial}`;
    }

}

console.log(factorialCalc(5));
console.log(factorialCalc(1));
console.log(factorialCalc(7));