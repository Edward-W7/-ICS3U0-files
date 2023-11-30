//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Arrays
  Purpose:     Familiarize myself with arrays

  Author:      Edward Wang
  Created:     28-Nov-2023
  Updated:     28-Nov-2023
*/

//require('./lesson.js');

//Code goes here

const milesToKm = (distance) => {
	if (distance < 0) {
		return undefined; // output undefined if the output is invalid
	} else {
		return Math.round((distance * 1.60934) * 100) / 100; // output the rounded result of kilometers
	}
};

const milesArray = []; // Initialize both arrays
const kmArray = [];

for (i = 0; i < 10; i++) {
	
	milesArray.push(readline.question('Enter a number: ')); // Take user input and put it into milesArray
	kmArray.push(milesToKm(milesArray[milesArray.length - 1])); // Convert the last number of milesArray, convert it, and push it into kmArray
	
}

for (i = 0; i < milesArray.length; i++){
	console.log(`${kmArray[i]} kilomters is ${milesArray[i]} miles.`); // Output results
}
