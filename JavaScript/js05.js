//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Built in math functions
  Purpose:     Familiarize myself with math functions in js

  Author:      Edward Wang
  Created:     11-Oct-2023
  Updated:     11-Oct-2023
*/

//require('./lesson.js');

//Code goes here

//Take input from user
n = parseInt(prompt("How many numbers are you inputting?"));
sum = 0;

//Initialize max and min variables as the min and max possible value. respectively
min = Infinity
max = -Infinity;

//Iterate through each input and update values accordingly
for (i = 0; i < n; i++) {
	num = parseFloat(prompt(""));
	sum += num;
	min = Math.min(min, num);
	max = Math.max(max, num);
}

//Output values
console.log("The average of the numbers is: " + Math.round(sum / n));
console.log("The maximum of the numbers is: " + max);
console.log("The minimum of the numbers is: " + min);

//Take input from the user for a, b, and c
a = parseInt(prompt("a"));
b = parseInt(prompt("b"));
c = parseInt(prompt("c"));

//If a is 0, it is not a quadratic
if (a == 0) {
	console.log("Not a quadratic equation");

} else {

	//Calculate the discriminant 
	discriminant = Math.abs(b ** 2 - 4 * a * c); //Absolute value makes it positive

	//if the discriminant is 0, there is only one solution
	if (discriminant == 0) {
		console.log("One real solution: " + (-b / (2 * a)));
	} else { //Otherwise, output the two roots
		console.log("Two real solutions: " + (-b + Math.sqrt(discriminant)) / (2 * a) + " and " + (-b - Math.sqrt(discriminant)) / (2 * a));
	}
}
