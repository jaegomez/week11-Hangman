// requiring inquirer
var inquirer = require('inquirer');

// here im requiring the game.js from my directory 
var GameJS = require('./game.js');

// starting new game with what is in the var GAMEJS
var game = new GameJS();

function startHangman() {
	game.beginNewGame();
	game.screenCar();
}



// starting the game down here by calling the function to run my code
startHangman();


