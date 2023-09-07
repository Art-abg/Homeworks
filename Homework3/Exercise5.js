//Ex.5
//Given a square matrix (nxn), return a new one, where there will be only those rows and columns whose sum does not exceed the specified k number.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function filterMatrix(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const filteredMatrix = [];

  for (let i = 0; i < rows; i++) {
    let rowSum = 0;
    for (let j = 0; j < cols; j++) {
      rowSum += matrix[i][j];
      if (rowSum <= k) {
      }
    }
  }
}
