//This is required to get input from the user in the console.
const readline = require('readline-sync');

//This section is needed for testing.
module.exports = {
	milesToKm,
	saleCalculator
}

/* **** DO NOT DELETE ABOVE THIS LINE **** */

/*
  Name:        Calling Functions!
  Purpose:     Pratice calling functions

  Author:      Edward Wang
  Created:     29-Oct-2023
  Updated:     29-Oct-2023
*/

//require('./lesson.js');


/*
Copy the two functions from your previous exercise (milesToKm() and saleCalculator()).  BOTH - even if you're using only one.

Write some code that makes MULTIPLE CALLS of at least one of the functions, producing different results and being used in a meaningful way.

*/


function milesToKm(distance) { //Function to convert miles to kilometers
	if (distance < 0) {
		return undefined; //distange cannot be negative
	}
	else {
		return Math.round((distance * 1.60934) * 100) / 100; //return the distance multiplied by 1.60934, rounded to two integers
	}
}

function saleCalculator(price, discount) {
	if (discount > 100 || price < 0 || discount < 0) { //price or discount cannot be negative
		return undefined;
	}
	else {
		return Math.round((price * (1 - discount / 100)) * 100) / 100; //return the price after discount, rounded to two decimals
	}
}



console.log("Welcome to a gas station!");
console.log("Here, we charge money per kilometer of distance you want to travel. ");
console.log("But for some reason, our selections are in miles, go figure.");

console.log("Do you want premium gasoline or regular? (p/r)");
console.log("Regular : 3$/kilometer");
let quality = readline.question("Premium : 5$/kilometer \n").toLowerCase(); // Explain the situation, and take input from user for their choice

while (quality != 'p' && quality != 'r') { // Check input for validity
	quality = readline.question("Please enter a valid option. (p/r) \n").toLowerCase();
}

if (quality === 'p') { // If the user chooses premium gas
	console.log("For premium gas, we have a sale, 15% off if you travel more than 100 miles. Otherwise, it is 5% off.");

	let miles = readline.question("How many miles do you want to travel? \n"); // Take the miles the user wants to travel
	console.log("For pricing reasons, that is also " + milesToKm(miles) + " kilometers.");

	if (miles > 100) {
		var totalPrice = saleCalculator(milesToKm(miles) * 5, 15); // Calculate the price with the sale and the miles converted into km
	} else {
		var totalPrice = saleCalculator(milesToKm(miles) * 5, 5);
	}
} else { // If the user chooses regular gas
	console.log("For regular quality gas, we have a sale, 10% off if you travel more than 150 miles. Otherwise, it is 5% off.");

	let miles = readline.question("How many miles do you want to travel? \n");
	console.log("For pricing reasons, that is also " + milesToKm(miles) + " kilometers.");

	if (miles > 150) { // Calculate based on the respective sale and gas type
		var totalPrice = saleCalculator(milesToKm(miles) * 3, 10);
	} else {
		var totalPrice = saleCalculator(milesToKm(miles) * 3, 5);
	}
}

console.log("Thanks for shopping with us! Your total comes out to be $" + totalPrice + ".") // Output the total gas price
