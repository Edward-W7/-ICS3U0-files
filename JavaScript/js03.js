//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Loops in JS
  Purpose:     Familiarize myself with loops in JavaScript

  Author:      Edward Wang
  Created:     05-Oct-2023
  Updated:     05-Oct-2023
*/

//require('./lesson.js');

//Code goes here

// Code does not pass test cases because of the '>' character when taking input, not sure how to fix
let number = parseInt(prompt(""));

let begin = parseInt(prompt(""));
let end = parseInt(prompt(""));

if (number < 1) {
	console.log("Error.");
}
else {
	let i = 1;
	let factorial = 1;
	while (i <= number) {
		factorial = factorial * i;
		i++;
	}
	console.log(factorial)

}



if (begin >= end) {
	console.log("Error.");
}
else {
	let sum = 0;
	for (let i = begin; i <= end; i++) {
		sum += i;
	}
	console.log(sum)
	
	
}

