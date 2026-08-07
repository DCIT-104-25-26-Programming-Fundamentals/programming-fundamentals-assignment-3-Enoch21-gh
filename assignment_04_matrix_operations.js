// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Helper function to read a matrix from the user row by row.
 * 
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @returns {number[][]} The constructed 2D array matrix.
 */
function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let valid = false;
    let rowVals = [];

    while (!valid) {
      const input = readlineSync.question(`Enter row ${i + 1}: `).trim();
      // Split by spaces and convert strings to numbers
      rowVals = input.split(/\s+/).map(Number);

      if (rowVals.length === cols && !rowVals.some(isNaN)) {
        valid = true;
      } else {
        console.log(`Error: Please enter exactly ${cols} numbers separated by spaces.`);
      }
    }

    matrix.push(rowVals);
  }
  return matrix;
}

/**
 * Prints a matrix in a neat, aligned grid format.
 * 
 * @param {number[][]} matrix - The matrix to print.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].map(val => String(val).padStart(4)).join(' '));
  }
}

// =============================================================================
// PART A — Transpose a Matrix
// =============================================================================

/**
 * Computes the transpose of an M x N matrix.
 * 
 * @param {number[][]} matrix - Input matrix (M x N).
 * @returns {number[][]} Transposed matrix (N x M).
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

// =============================================================================
// PART B — Add Two Matrices
// =============================================================================

/**
 * Computes the element-wise sum of two M x N matrices.
 * 
 * @param {number[][]} matrixA - First matrix (M x N).
 * @param {number[][]} matrixB - Second matrix (M x N).
 * @returns {number[][]} Resulting sum matrix (M x N).
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }

  return result;
}

// =============================================================================
// PART C — Multiply Two Matrices
// =============================================================================

/**
 * Computes the matrix product of an M x N matrix A and an N x P matrix B.
 * 
 * @param {number[][]} matrixA - Matrix A (M x N).
 * @param {number[][]} matrixB - Matrix B (N x P).
 * @returns {number[][]} Resulting matrix product A x B (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

// =============================================================================
// MAIN WORKFLOW
// =============================================================================

function main() {
  console.log('=== PART A: MATRIX TRANSPOSE ===');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');

  if (rowsA <= 0 || colsA <= 0) {
    console.log('Error: Dimensions must be positive integers.');
    return;
  }

  const matrixA = readMatrix(rowsA, colsA);

  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);

  console.log('\nTransposed Matrix:');
  const transposed = transposeMatrix(matrixA);
  printMatrix(transposed);

  console.log('\n=== PART B: MATRIX ADDITION ===');
  console.log(`Enter a second matrix Matrix B of size ${rowsA}x${colsA}:`);
  const matrixB = readMatrix(rowsA, colsA);

  console.log('\nMatrix A + Matrix B:');
  const added = addMatrices(matrixA, matrixB);
  printMatrix(added);

  console.log('\n=== PART C: MATRIX MULTIPLICATION ===');
  console.log(`Matrix A size is ${rowsA}x${colsA}.`);
  console.log(`Matrix C must have ${colsA} rows to perform multiplication (A x C).`);
  
  const colsC = readlineSync.questionInt('Enter number of columns for Matrix C: ');
  
  if (colsC <= 0) {
    console.log('Error: Number of columns must be a positive integer.');
    return;
  }

  const matrixC = readMatrix(colsA, colsC);

  console.log('\nMatrix A x Matrix C:');
  const multiplied = multiplyMatrices(matrixA, matrixC);
  printMatrix(multiplied);
}

// Run the application
main();