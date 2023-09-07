// Ex.4
// Given a square matrix (nxm). Rotate the matrix so that the rows become columns, and the columns become rows.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let transposeMatrix1 = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const transposedMatrix = [];

  for (let i = 0; i < columns; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
};

console.log(transposeMatrix1(matrix));
console.log(
  "------------------ \n solution using Array methods \n------------------ "
);

let transposedMatrix2 = (matrix) =>
  matrix[0].map((val, i) => matrix.map((row) => row[i]));

console.log(transposedMatrix2(matrix));
