//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Modifying arrays
  Purpose:     Familiarize myself with arrays and array functions in Javascript

  Author:      Edward Wang
  Created:     30-Nov-2023
  Updated:     30-Nov-2023
*/

//require('./lesson.js');

let groceryList = []

// Use while loop to use a readline.question('') without a written question 
//   to fill list
// Items are added only if not already in list
// Loop should stop when '!' is entered

userInput = prompt('');
while (userInput != '!') {
	if (!groceryList.includes(userInput)) {
		groceryList.push(userInput);
	}
	userInput = prompt('');
}


// Sort and print the list
groceryList.sort();
console.log(groceryList);

// Print 3rd item, then 3rd LAST item
console.log(groceryList[2]);
console.log(groceryList[groceryList.length - 3]);


// Print slice of 4th through 6th item
console.log(groceryList.slice(3, 6));
// Print same slice BACKWARDS
console.log(groceryList.slice(3, 6).reverse());


// Remove last item
groceryList.pop();


// Take input via a readline.question('') without a written question, remove that item if it exists
userInput = prompt('');
if (groceryList.includes(userInput)) {
	groceryList.splice(groceryList.indexOf(userInput), 1);
}


// Print array
console.log(groceryList);






// DO NOT CHANGE THIS ARRAY
const intArray = [5,8,-10,3,18,22,1,71]

// If item in the array is odd, multiply by 2
for (let i = 0; i < intArray.length; i++) {
	if (intArray[i] % 2 == 1) {
		intArray[i] = intArray[i] * 2;
	}
}

// Print array
console.log(intArray);
