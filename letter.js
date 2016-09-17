function Letter(character) {

	this.character = character;
	this.placeholder = "$";
	this.guessed = false;

	this.getChar = function(){

		var char = ' ';

		if (this.guessed) {
			char = this.character;
		} else{
			char = this.placeholder;
		}
		return char;

	}

}

module.exports = Letter;