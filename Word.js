var Letter = require("./Letter");
// var Player = require("./player.js");

function Word(word){
	this.word = word;
	this.lettersArr = [];  
	this.solved = false;  
	this.lettersGuessed = " ";

	for(var i = 0; i < this.word.length; i++){
		var letters = new Letter(this.word[i]);
		this.lettersArr.push(letters);
	}
}


//function to call toString property, which replaces letters with underscores
Word.prototype.renderWord = function() {
	var string = " ";
	for (var i = 0; i < this.lettersArr.length; i++) {
		string += this.lettersArr[i].toString();
	}
	return string;
};

//function to check if user guess is that same as any letters in lettersArray
Word.prototype.findLetter = function(letterGuess){
	for(var i = 0; i < this.lettersArr.length; i++){ 
		if(letterGuess == this.lettersArr[i].letter){
		this.lettersArr[i].display = true;
		}
	}
}

//function to determine if all letters were guessed
Word.prototype.wordGuessed = function() {
	var length = 0;
	for (var i = 0; i < this.lettersArr.length; i++) {
		if (this.lettersArr[i].display) {
			length++;
		}
	}
	if (length === this.lettersArr.length) {
		this.solved = true;
	}
	return this.solved;
};
var practice = new Word ("pug");
// console.log(practice);
// console.log(this.letters);
// console.log(this.lettersArr);
console.log("renderWord function: " + practice.renderWord());
console.log("findLetter function: " + practice.findLetter("p"));
// console.log("findLetter function: " + practice.findLetter("u"));
// console.log("findLetter function: " + practice.findLetter("g"));
console.log("wordGuessed function: " + practice.wordGuessed());
module.exports = Word;
