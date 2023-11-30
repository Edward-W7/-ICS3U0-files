//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Arrow function notation
  Purpose:     Convert both previous functions into arrow functions

  Author:      Edward Wang
  Created:     28-Nov-2023
  Updated:     28-Nov-2023
*/

require('./lesson.js');

//Code goes here

const milesToKm = (distance) => {
	if (distance < 0) {
		return undefined;
	} else {
		return Math.round((distance * 1.60934) * 100) / 100;
	}
};

const saleCalculator = (price, discount) => {
	if (discount > 100 || price < 0 || discount < 0) {
		return undefined;
	} else {
		return Math.round((price * (1 - discount / 100)) * 100) / 100;
	}
};
