//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        String Enhancements
  Purpose:     Familiarize myself with string enhancements

  Author:      Edward Wang
  Created:     16-Oct-2023
  Updated:     16-Oct-2023
*/

//require('./lesson.js');

//Code goes here


firstSentence = readline.question("Enter a sentence: ").trim();
secondSentence = readline.question("Enter another sentence: ").trim();

// Convert both sentences to uppercase and lowercase, respectively

const firstSentenceUpperCase = firstSentence.toUpperCase();
const secondSentenceLowerCase = secondSentence.toLowerCase();

console.log(`The first sentence in uppercase is: ${firstSentenceUpperCase}`);
console.log(`The second sentence in lowercase is: ${secondSentenceLowerCase}`);

if (firstSentenceUpperCase.startsWith('A') ||
	firstSentenceUpperCase.startsWith('E') ||
	firstSentenceUpperCase.startsWith('I') ||
	firstSentenceUpperCase.startsWith('O') ||
	firstSentenceUpperCase.startsWith('U')) { // the first sentence starts with a vowel

	if (firstSentenceUpperCase.endsWith('A') ||
		firstSentenceUpperCase.endsWith('E') ||
		firstSentenceUpperCase.endsWith('I') ||
		firstSentenceUpperCase.endsWith('O') ||
		firstSentenceUpperCase.endsWith('U')) { // the first sentence ends with a vowel
		console.log('The first sentence starts with a vowel, and ends with one.');
	} else {
		console.log('The first sentence starts with a vowel, but does not end with one.');
	}
} else {
	if (firstSentenceUpperCase.endsWith('A') ||
		firstSentenceUpperCase.endsWith('E') ||
		firstSentenceUpperCase.endsWith('I') ||
		firstSentenceUpperCase.endsWith('O') ||
		firstSentenceUpperCase.endsWith('U')) { //first sentence end with a vowel but does not start
		console.log('The first sentence does not start with a vowel, but it does end with a vowel.');
	} else {
		console.log('The first sentence does not start with a vowel, and does not end with a vowel.');
	}
}

if (secondSentenceLowerCase.startsWith('a') ||
	secondSentenceLowerCase.startsWith('e') ||
	secondSentenceLowerCase.startsWith('i') ||
	secondSentenceLowerCase.startsWith('o') ||
	secondSentenceLowerCase.startsWith('u')) { //equivalent for second sentence

	if (secondSentenceLowerCase.endsWith('a') ||
		secondSentenceLowerCase.endsWith('e') ||
		secondSentenceLowerCase.endsWith('i') ||
		secondSentenceLowerCase.endsWith('o') ||
		secondSentenceLowerCase.endsWith('u')) {
		console.log('The second sentence starts with a vowel, and ends with one.');
	} else {
		console.log('The second sentence starts with a vowel, but does not end with one.');
	}
} else {
	if (secondSentenceLowerCase.endsWith('a') ||
		secondSentenceLowerCase.endsWith('e') ||
		secondSentenceLowerCase.endsWith('i') ||
		secondSentenceLowerCase.endsWith('o') ||
		secondSentenceLowerCase.endsWith('u')) {
		console.log('The second sentence does not start with a vowel, but it does end with a vowel.');
	} else {
		console.log('The second sentence does not start with a vowel, and does not end with a vowel.');
	}
}

//Initialize variables for the amount of spaces, punctuation, consonants, and vowels
thirdSentence = readline.question("Enter another sentence: ").trim();
spaces = 0
punctuation = 0
consonants = 0
vowels = 0

for (i in thirdSentence.toLowerCase()) {
	char = thirdSentence.at(i);
	if (char >= 'a' && char <= 'z') { // if its in the range a to z, it is a letter
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') { //Check for vowels
			vowels++;
		} else { //otherwise its a consonant
			consonants++;
		}
	} 
	else if (char === ' '){ // check for spcaes
		spaces++;
	}
	else if (char < '0' || char > '9') { //if its not a number, it is punctuation
		punctuation++;
	}
}
console.log("Spaces:", spaces)
console.log("Punctuation:", punctuation)
console.log("Consonants::", consonants)
console.log("Vowels:", vowels)
