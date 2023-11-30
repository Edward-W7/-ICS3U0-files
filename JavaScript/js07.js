//This is required to get input from the user in the console.
const readline = require('readline-sync');

//This section is needed for testing.
module.exports = {
  milesToKm,
  saleCalculator
}

/* **** DO NOT DELETE ABOVE THIS LINE **** */

/*
  Name:        JavaScript Functions
  Purpose:     Familiarize myself with functions in javascript

  Author:      Edward Wang
  Created:     19-Oct-2023
  Updated:     19-Oct-2023
*/

//require('./lesson.js');

//Code goes here

function milesToKm(distance) { //Function to convert miles to kilometers
	if (distance < 0){
		return undefined; //distange cannot be negative
	}
	else{
		return Math.round((distance * 1.60934) * 100)/100; //return the distance multiplied by 1.60934, rounded to two integers
	}
}

function saleCalculator(price, discount) {
	if (discount > 100 || price < 0 || discount < 0){ //price or discount cannot be negative
		return undefined;
	}
	else{
		return Math.round((price * (1 - discount/100))*100)/100; //return the price after discount, rounded to two decimals
	}
}
