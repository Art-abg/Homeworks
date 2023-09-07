//Ex.3
//Given a word, compute the scrabble score for the given word. To calculate scrabble score use the
//following table of scores:

let letterValue = [null, "aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];

const calcScrabbleScore = (word) => {
  const letters = word.toLowerCase().split("");
  const scores = letters.map((letter) =>
    letterValue.findIndex((chars) => chars !== null && chars.includes(letter))
  );
  const score = scores.reduce((a, b) => a + b);
  return score;
};
console.log(calcScrabbleScore("javascript"));
console.log(calcScrabbleScore("ACA"));
console.log(calcScrabbleScore("course"));
console.log(calcScrabbleScore("qza"));
