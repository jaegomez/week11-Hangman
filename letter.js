function Letter(character) {

	this.character = character;
	// Instructions said to use the placeholder as this = _ but i used the $ instead just cause idk
	// but this is what makes my letter not show what the letter, basically letter placeholder
	this.placeholder = "$";
	this.guessed = false;

	this.getChar = function(){

		var char = ' ';

		// if guessed correctly the character letter will pop up instead of the $ sign
		if (this.guessed) {
			char = this.character;
			// else itll just stay as my place holder
		} else{
			char = this.placeholder;
		}
		return char;

	}

}

module.exports = Letter;