// requiring the word.js file which I will call Car since my hangman game is based off of cars
var Car = require('./word.js');

// here i create the cars i want in my hangman game
var cars_list = ['lamborghini', 'ferrari', 'lexus', 'acura', 'bmw', 'mercedes'];

function GameJS(){
	// starting all my values at 0 for it to be a fair game
	this.wins = 0;
	this.loss = 0;
	this.remainingLives = 0;
	this.usedAlpha = [];
	this.car;

	this.beginNewGame = function(){
		// at the beginning of a newGame you will always get 5 lives to start with
		this.remainingLives = 5;
		// and start with an empty used alphabet
		this.usedAlpha = [];
		// generates random car from list
		this.car = this.createRandomCar();
	};

	this.createRandomCar = function(){
		var randomCar = cars_list[Math.floor(Math.random()* cars_list.length)];

		// returns the randomCar from my list
		return new Car(randomCar);
	};

	this.produceOutcomes = function (str) {

		// start of my case statements
		switch(str){
			case "correct":
				console.log('You are correct!!!');
				break;
			case "wrong":
				console.log('You are wrong!!!');
				console.log('You have ', this.remainingLives + " lives left");
				break;
			case "already":
				console.log('You already used that letter!');
				break;
			// and if all this above goes to sh!% itll say error
			default:
				console.log('error error error')
		}
	}

}

module.exports = GameJS;