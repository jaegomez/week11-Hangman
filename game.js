// here i create the cars i want in my hangman game
var cars = ['lamborghini', 'ferrari', 'lexus', 'acura', 'bmw', 'mercedes'];

function game(){
	this.car;

	this.beginNewGame = function(){
		this.car = this.createRandomCar();
	}

	this.createRandomCar = function(){
		var long = cars.length;
		// picks random car from the list by using Math.random and multiplying it by my
		// variable above so it runs through all those cars and grabs one randomly
		var randomCar = cars[Math.floor(Math.random() * long)];

		console.log("testing randomCar car: " + randomCar);

		// returns the randomCar from my list
		return randomCar;
	}

	// checks if the user is typing something in 
	this.screenCar = function () {
		console.log('The screenCar car we are testing is: ' + this.car);
	}

};

module.exports = game;