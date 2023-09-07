//Ex.3
// Given a matrix of strings (nxm) and a word: Find out if the word exists in the matrix or not.

let matrix = [
  ["t", "e", "s", "t"],
  ["c", "o", "d", "e"],
  ["a", "b", "c", "a"],
  ["x", "y", "z", "t"]
];

function wordExists(matrix, word) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Checking if current element matches the first character of the word
      if (matrix[i][j] === word[0]) {
        let k = 1;
        while (k < word.length) {
          // Checking if the next characters match horizontally
          if (i + k < rows && matrix[i + k][j] === word[k]) {
            k++;
          } // Checking if the next characters match vertically
          else if (j + k < cols && matrix[i][j + k] === word[k]) {
            k++;
          } else {
            break;
          }
        } // If all characters match, return true
        if (k === word.length) return true;
      }
    }
  }

  return false;
}

console.log(wordExists(matrix, "test"));
console.log(wordExists(matrix, "tea"));
console.log(wordExists1(matrix, "post"));

console.log(
  "------------------ \n solution using Array methods \n------------------ "
);

function wordExists1(matrix, word) {
  return matrix.some((row) => {
    return row.some((char, index) => {
      // Search horizontally
      if (row.slice(index, index + word.length).join("") === word) {
        return true;
      }
      // Search vertically
      if (
        matrix
          .slice(index, index + word.length)
          .every((row) => row[char] === word[index])
      ) {
        return true;
      }
      return false;
    });
  });
}

console.log(wordExists1(matrix, "test"));
console.log(wordExists1(matrix, "tea"));
console.log(wordExists1(matrix, "post"));
