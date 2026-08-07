// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all elements in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The sum of all numbers.
 */
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of elements in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average value.
 */
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  return calculateSum(arr) / arr.length;
}

/**
 * Finds the maximum number in an array without using Math.max().
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The largest number in the array.
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum number in an array without using Math.min().
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The smallest number in the array.
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Main function to execute the program workflow.
 */
function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // Validate that N is a positive integer
  if (count <= 0) {
    console.log('Error: Number of elements must be a positive integer.');
    return;
  }

  const numbers = [];

  // Read numbers into the array
  for (let i = 0; i < count; i++) {
    const value = readlineSync.questionFloat(`Enter number ${i + 1}: `);
    numbers.push(value);
  }

  // Compute and output results
  console.log('\nResults:');
  console.log(`Sum:     ${calculateSum(numbers)}`);
  console.log(`Average: ${calculateAverage(numbers)}`);
  console.log(`Maximum: ${findMax(numbers)}`);
  console.log(`Minimum: ${findMin(numbers)}`);
}

// Run the application
main();
