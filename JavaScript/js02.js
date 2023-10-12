//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Javascript Conditionals
  Purpose:     Familiarize myself with conditional statements in Javascript

  Author:      Edward Wang
  Created:     03-Oct-2023
  Updated:     03-Oct-2023
*/

//require('./lesson.js');

//Code goes here

// Collect user from input with prompt()
let input = parseInt(prompt(""));

if (input < 0 || input > 100) { // All grades less than 0 or above 100 are invalid
	console.log("Invalid Grade.")
} else if (input < 50){
	console.log("Not Passing.");
} else if (input <= 69){
	console.log("Needs Improvement.");
} else if (input <= 79) {
	console.log("Meeting Expectations.")
} else if (input <= 100) {
	console.log("Exceeding Expectations.")
} 
