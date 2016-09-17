// requiring the letter.js file
var Letter = require('./letter.js');

var alphabetSoupExpression = /[a-z]|[0-9]/i;

function Car(target) {
	this.target = target;
	this.targetCar = target.toUpperCase().split('');

	this.createDisplayCar = function() {
		var carArray = [];

		for (var i = 0; i < this.target.length; i++){
			if (alphabetSoupExpression.test(this.target[i])){
				carArray.push(new Letter(this.target[i].toUpperCase()));
			} else {
				carArray.push(this.target[i])
			}
		}
		return carArray;
	};

	this.displayCar = this.createDisplayCar();
	this.checkAlphaInput = function(letter) {

		var youIsRight = false;

		for (var index in this.targetCar) {
			if (letter.toUpperCase() === this.targetCar[index]) {
				this.displayCar[index].guessed = true;
				youIsRight = true;
			}
		}
		return youIsRight;
	};

	this.guitarGetCar = function(){
		return this.targetCar.join('');
	};

	this.getCarToShow = function(){
		var show = '';

		for (var index in this.displayCar){
			if (alphabetSoupExpression.test(this.displayCar[index])) {
				show += this.displayCar[index].getChar();
			} else{
				show += this.displayCar[index];
			}
		}
		return show;
	}
}

module.exports = Car;