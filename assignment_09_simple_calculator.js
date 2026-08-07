// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Performs addition of two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction of two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication of two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division of two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|null} Quotient, or null if dividing by zero.
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

/**
 * Performs modulus operation (remainder).
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|null} Remainder, or null if taking modulus by zero.
 */
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}

/**
 * Performs exponentiation (a raised to power b).
 * 
 * @param {number} a - Base number.
 * @param {number} b - Exponent.
 * @returns {number} Result of exponentiation.
 */
function power(a, b) {
  return a ** b;
}

/**
 * Displays the formatted calculator menu options.
 */
function displayMenu() {
  console.log('\n============================');
  console.log('       SIMPLE CALCULATOR    ');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

/**
 * Main application control loop.
 */
function main() {
  let running = true;

  while (running) {
    displayMenu();
    const choice = readlineSync.question('Select an operation (1-7): ').trim();

    if (choice === '7') {
      console.log('Goodbye!');
      running = false;
      continue;
    }

    if (!['1', '2', '3', '4', '5', '6'].includes(choice)) {
      console.log('Error: Invalid selection. Please enter a number between 1 and 7.');
      continue;
    }

    const num1 = readlineSync.questionFloat('Enter first number : ');
    const num2 = readlineSync.questionFloat('Enter second number: ');

    let result = null;
    let operator = '';

    switch (choice) {
      case '1':
        result = add(num1, num2);
        operator = '+';
        break;
      case '2':
        result = subtract(num1, num2);
        operator = '-';
        break;
      case '3':
        result = multiply(num1, num2);
        operator = '*';
        break;
      case '4':
        result = divide(num1, num2);
        operator = '/';
        if (result === null) {
          console.log('Error: Cannot divide by zero.');
          continue;
        }
        break;
      case '5':
        result = modulus(num1, num2);
        operator = '%';
        if (result === null) {
          console.log('Error: Cannot perform modulus by zero.');
          continue;
        }
        break;
      case '6':
        result = power(num1, num2);
        operator = '**';
        break;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
  }
}

// Run the application
main();

