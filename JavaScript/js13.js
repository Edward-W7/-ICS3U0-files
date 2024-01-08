//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Handling Errors
  Purpose:     Familiarize myself with error handling in javascript

  Author:      Edward Wang
  Created:     11-Dec-2023
  Updated:     11-Dec 2023
*/

require('./lesson.js');
function milesToKm(distance) { //Function to convert miles to kilometers
	if (isNaN(distance)) {
		throw new TypeError("Distance must be a number.");

	}
	if (distance < 0) {
		throw new RangeError("Distance cannot be negative");

	}
	else {
		return Math.round((distance * 1.60934) * 100) / 100; //return the distance multiplied by 1.60934, rounded to two integers
	}
}

function saleCalculator(price, discount) {
	if (isNan(price) || isNan(discount)) {
		throw new TypeError("Price and discount must be numbers.");
	}
	if (discount > 100 || price < 0 || discount < 0) { //price or discount cannot be negative
		throw new RangeError("Price and discount must be positive and less than 100.");
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
	try {
		console.log("For pricing reasons, that is also " + milesToKm(miles) + " kilometers.");
	}
	catch (err) {
		console.log("An error occurred when attempting to convert miles to kilometers: " + err.message);
	}

	if (miles > 100) {
		try {
			var totalPrice = saleCalculator(milesToKm(miles) * 5, 15); // Calculate the price with the sale and the miles converted into km
		}
		catch (err) {
			console.log("An error occurred when attempting to calculate the sale or mile conversion: " + err.message);
		}

	} else {
		try {
			var totalPrice = saleCalculator(milesToKm(miles) * 5, 5);
		}
		catch (err) {
			console.log("An error occurred when attempting to calculate the sale or mile conversion: " + err.message);
		}
	}
} else { // If the user chooses regular gas
	console.log("For regular quality gas, we have a sale, 10% off if you travel more than 150 miles. Otherwise, it is 5% off.");

	let miles = readline.question("How many miles do you want to travel? \n");
	try {
		console.log("For pricing reasons, that is also " + milesToKm(miles) + " kilometers.");
	}
	catch (err) {
		console.log("An error occurred when attempting to convert miles to kilometers: " + err.message);
	}

	if (miles > 150) { // Calculate based on the respective sale and gas type
		try {
			var totalPrice = saleCalculator(milesToKm(miles) * 3, 10);

		}
		catch (err) {
			console.log("An error occurred when attempting to calculate the sale or mile conversion: " + err.message);
		}
	} else {
		try {
			var totalPrice = saleCalculator(milesToKm(miles) * 3, 5);

		}
		catch (err) {
			console.log("An error occurred when attempting to calculate the sale or mile conversion: " + err.message);
		}
	}
}

console.log("Thanks for shopping with us! Your total comes out to be $" + totalPrice + ".") // Output the total gas price
