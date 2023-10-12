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
n = parseInt(readline.question("How many numbers are you inputting? \n"));
sum = 0;

//Initialize max and min variables as the min and max possible value. respectively
min = Infinity
max = -Infinity;


//Iterate through each input and update values accordingly
for (i = 0; i < n; i++) {
	num = parseFloat(readline.question(""));
	sum += num;
	min = Math.min(min, num);
	max = Math.max(max, num);
}

//Output values
console.log("The average of the numbers is: " + Math.round(sum / n));
console.log("The maximum of the numbers is: " + max);
console.log("The minimum of the numbers is: " + min);
