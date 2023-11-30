//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Documenting Functions
  Purpose:     Familiarize myself with documenting functions

  Author:      Edward Wang
  Created:     23-Nov-2023
  Updated:     23-Nov-2023
*/

require('./lesson.js');

//Code goes here

/**
 * Converts a distance in miles to kilometers. If the input distance is negative, 
 * the function returns undefined.
 *
 * @param {number} distance - The distance in miles to be converted. Must be a non-negative number.
 *
 * @returns {number|undefined} The converted distance in kilometers, rounded to two decimal places.
 * Returns undefined if the input distance is negative.
 */
function milesToKm(distance) { //Function to convert miles to kilometers
	if (distance < 0){
		return undefined; //distange cannot be negative
	}
	else{
		return Math.round((distance * 1.60934) * 100)/100; //return the distance multiplied by 1.60934, rounded to two integers
	}
}

/**
 * Calculates the final price of an item after applying a discount. 
 * If the discount is greater than 100%, or if either the price or discount is negative, 
 * the function returns undefined.
 *
 * @param {number} price - The original price of the item. Must be a non-negative number.
 * @param {number} discount - The discount percentage to be applied. 
 *                            Must be a number between 0 and 100 (inclusive).
 *
 * @returns {number|undefined} The final price after applying the discount, 
 *                             rounded to two decimal places. Returns undefined if 
 *                             the discount is greater than 100%, or if either the price 
 *                             or discount is negative.
 */
function saleCalculator(price, discount) {
	if (discount > 100 || price < 0 || discount < 0){ //price or discount cannot be negative
		return undefined;
	}
	else{
		return Math.round((price * (1 - discount/100))*100)/100; //return the price after discount, rounded to two decimals
	}
}

