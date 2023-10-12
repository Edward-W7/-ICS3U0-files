//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Math Functions JS
  Purpose:     Familiarize myself with math functions in JavaScript

  Author:      Edward Wang
  Created:     10-Oct-2023
  Updated:     10-Oct-2023
*/

//require('./lesson.js');

//Code goes here

// Task one:

//Initialize each dice as a random number from 1 to 6
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;

//Counter for amount of times rolled
let rolls = 1;
console.log(dice1, dice2, dice3);

//Continue looping while there are dice that are inequal to each other
while (dice1 != dice2 || dice1 != dice3 || dice2 != dice3) {

	//Reroll the dice every time you loop
	dice1 = Math.floor(Math.random() * 6) + 1;
	dice2 = Math.floor(Math.random() * 6) + 1;
	dice3 = Math.floor(Math.random() * 6) + 1;
	console.log(dice1, dice2, dice3);
	rolls++;
}
console.log("It took", rolls, "rolls to find a match!");


// Task two:

//Initialize each dice as a random number from 1 to 6
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;
dice3 = Math.floor(Math.random() * 6) + 1;

//Counter for amount of times rolled
rolls = 1;
console.log(dice1, dice2, dice3);

//Continue looping while dice3 is not equal to dice 2 + dice1
while (dice3 != dice2 + dice1) {

	//Reroll the dice every time you loop
	dice1 = Math.floor(Math.random() * 6) + 1;
	dice2 = Math.floor(Math.random() * 6) + 1;
	dice3 = Math.floor(Math.random() * 6) + 1;
	console.log(dice1, dice2, dice3);
	rolls++;
}
console.log("It took", rolls, "have the first two dice to equal the third die.");


