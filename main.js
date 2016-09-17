// requiring inquirer
var inquirer = require('inquirer');

// here im requiring the game.js from my directory 
var GameJS = require('./game.js');

// starting new game with what is in the var GAMEJS
var game = new GameJS();

function startHangman() {
	game.beginNewGame();
	promptRunInput();
}

function promptRunInput() {
	console.log(game.car.getCarToShow());
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess',
		message: 'Please enter your guess for a random car:',
		validate: function (value) {

			var correctInput = /[a-z]|[0-9]/i;

			//check if already guessed
			if (value.length === 1 && correctInput.test(value)){
				return true;
			} else {
				console.log('failed');
				return 'Enter a guess thats valid:';
			}

		}
	}
	]).then(function(answer){
		// grabs userGuess from prompt and turns it into upperCase
		var userGuess = answer.userGuess.toUpperCase();
		//
		if (game.usedAlpha.indexOf(userGuess) === -1) {
			
			game.usedAlpha.push(userGuess);
			
			var correct = game.car.checkAlphaInput(userGuess);

			if (correct) {
				// prints to screen wether correct
				game.produceOutcomes("correct");
			} else {
				//subtracts live from ramining live & lets them know they are wrong
				game.remainingLives--;
				game.produceOutcomes("wrong");
			}
		} else {
			game.produceOutcomes("already");
		}

		var userWins = game.car.getCarToShow() === game.car.guitarGetCar();
		console.log(userWins);

		if (userWins) {
			game.wins++;
			console.log("You Won!");
		} else if (game.remainingLives > 0) {
			promptRunInput();
		} else {
			game.loss++;
			console.log("You Lost");
		}
	});
}



// starting the game down here by calling the function to run my code
startHangman();


