//This is required to get input from the user in the console.
const readline = require('readline-sync');

function rockPaperScissors(userChoice, fairGame, userWin = false) {
	//userChoice represents the user's choice in the game ("rock", "paper", or "scissors")
	//fairGame is a variable that represents whether the game is fair (random) or not
	//userWin is only used if fairGame is set to false, and represents whether the user will win the game or not
	if (fairGame) {
		let choiceNumber = Math.floor(Math.random() * 3); // randomly generate a number from 1 to 3
		if (choiceNumber == 0) {
			return "rock";
		} else if (choiceNumber == 1) {
			return "paper";
		} else if (choiceNumber == 2) {
			return "scissors";
		}
	}

	else {
		if (userWin) {
			if (userChoice === "rock") {
				return "scissors";
			} else if (userChoice === "paper") {
				return "rock";
			} else if (userChoice === "scissors") {
				return "paper";
			}
		}
		else {
			if (userChoice === "rock") {
				return "paper";
			} else if (userChoice === "paper") {
				return "scissors";
			} else if (userChoice === "scissors") {
				return "rock";
			}
		}

	}
}

console.log("Welcome to the rock paper scissors game!");
let input = readline.question("Would you like to play fair? (yes/no) ").toLowerCase();
while (input != "yes" && input != "no") {
	input = readline.question("Please input a valid answer: ").toLowerCase();
}
if (input === "yes") {
	var userFairGame = true;
	console.log("You have chosen to play fair. ");

} else {
	var userFairGame = false;

	let input = readline.question("Ok, who do you want to win, you or the computer? (me/computer) ").toLowerCase();
	while (input != "me" && input != "computer") {
		input = readline.question("Please input a valid answer ").toLowerCase();
	}
	if (input === "me") {
		var userWinInput = true;
		console.log("You have chosen to win. ");
	} else {
		var userWinInput = false;
		console.log("The computer has chosen to win. ");
	}

}

rounds = parseInt(readline.question("How many games would you like to play? Enter a number from 1 to 20 "));

while (rounds < 1 || rounds > 20) {
	rounds = parseInt(readline.question("Please enter a valid number "));
}

if (rounds == 1) {
	console.log("You have chosen to play " + rounds + " game.");
}
else {
	console.log("You have chosen to play " + rounds + " games.");
}

let userScore = 0;
let computerScore = 0;
let roundHistory = [];
var moveDictionary = { "r": "rock", "p": "paper", "s": "scissors" };

for (round = 1; round <= rounds; round++) {

	console.log("Round " + round + ": the score is currently " + userScore + "-" + computerScore);
	userChoice = readline.question("Please enter your choice (R: rock, P: paper, or S: scissors) ").toLowerCase();
	while (userChoice != "r" && userChoice != "p" && userChoice != "s") {
		userChoice = readline.question("Please enter a valid choice (R, P, S) ");
	}

	gameChoice = rockPaperScissors(moveDictionary[userChoice], userFairGame, userWinInput);

	console.log("You chose " + moveDictionary[userChoice] + " and the computer chose " + gameChoice);
	roundHistory.push([moveDictionary[userChoice], gameChoice]);

	if (moveDictionary[userChoice] === gameChoice) {
		console.log("It's a tie!");
		roundHistory[roundHistory.length - 1].push("It was a tie");

	} else if (userChoice === "r" && gameChoice === "paper") {
		console.log("The computer wins!");
		roundHistory[roundHistory.length - 1].push("You lost");
		computerScore++;
		
	} else if (userChoice === "r" && gameChoice === "scissors") {
		console.log("You win!");
		roundHistory[roundHistory.length - 1].push("You won");
		userScore++;

	} else if (userChoice === "p" && gameChoice === "rock") {
		console.log("You win!");
		roundHistory[roundHistory.length - 1].push("You won");
		userScore++;

	} else if (userChoice === "p" && gameChoice === "scissors") {
		console.log("The computer wins!");
		roundHistory[roundHistory.length - 1].push("You lost");
		computerScore++;

	} else if (userChoice === "s" && gameChoice === "rock") {
		console.log("The computer wins!");
		roundHistory[roundHistory.length - 1].push("You lost");
		computerScore++;

	} else if (userChoice === "s" && gameChoice === "paper") {
		console.log("You win!");
		roundHistory[roundHistory.length - 1].push("You won");
		userScore++;
	}

}
console.log("Round history: ")
for (round in roundHistory) {
	console.log(`In round ${parseInt(round) + 1}, you chose ${roundHistory[round][0]} and the computer chose ${roundHistory[round][1]}. ${roundHistory[round][2]}.`);
}
