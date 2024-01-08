//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      
  Created:     28-Sep-2022
  Updated:     28-Sep-2022
*/

//require('./lesson.js');

let groceryObject = {};

// Use a prompt('') without a written question and while loop to add keys/value pairs until '!' is entered
// If key doesn't exist, add the key/value
// If key exists, increment the value (int)

inputKey = prompt('');


while (inputKey != '!') {
	inputValue = prompt('');

	if (groceryObject[inputKey] == undefined) {
		groceryObject[inputKey] = parseInt(inputValue);
	}
	else {
		groceryObject[inputKey] += parseInt(inputValue);
	}
	inputKey = prompt('');

}

// Print groceryObject

console.log(groceryObject);


// Take input from the user and remove the item from groceryObject if it exists

userInput = prompt('');
if (groceryObject[userInput] != undefined) {
	delete groceryObject[userInput];
}

// Calculate and print the quantity of items in your groceryObject

let total = 0;
for (let key in groceryObject) {
	total += groceryObject[key];
}
console.log(total)
