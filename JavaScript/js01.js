//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Javascript Math Operators
  Purpose:     Familiarize myself with math operators in Javascript

  Author:      Edward Wang
  Created:     2-Oct-2023
  Updated:     2-Oct-2023
*/



//require('./lesson.js');

//Code goes here

//User inputs a number into the console
let number = parseFloat(readline.question("Enter a number \n"));

//Constants are assigned to different operations performed on the variable
const square = number * number;
const double = number * 2;
const half = number / 2;
const root = number ** 0.5;
const remainderSeven = number % 7;
//Rounding factor determines how many digits to round the number to
let roundingFactor = 10000;

// The number after operations is outputted with an appropriate message
console.log("The square of your number is " + square);
console.log("Two times your number is " + double);
console.log("Half your number is " + half);
console.log("The square root of your number is " + Math.round(root * roundingFactor) / roundingFactor);
console.log("The remainder after dividing your number by 7 is " + remainderSeven);
