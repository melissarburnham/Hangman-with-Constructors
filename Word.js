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
	for (var i = 0; i < this.lettersArr.length; i++) {
		Letter.display = false;
		this.lettersArr[i].toString(this.word);
	}
	return this.word;
};

//function to check if user guess is that same as any letters in lettersArray
Word.prototype.findLetter = function(letterGuess){
	for(var i = 0; i < this.lettersArr.length; i++){ 
		var correctLetter = this.lettersArr[i].letter;
		if(letterGuess === correctLetter){
		Letter.display = true;
		Letter.toString(correctLetter);
		console.log("correct letter: " + correctLetter);
		console.log("find letter display: " + Letter.display);
		
		}
	}
}

//function to determine if all letters were guessed
Word.prototype.wordGuessed = function() {
	var length = 0;
	for (var i = 0; i < this.lettersArr.length; i++) {
		console.log("word guessed Arr: " + this.lettersArr);
		if (Letter.display) {
			length++;
			console.log(length);
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
console.log("findLetter function: " + practice.findLetter('p'));
console.log("renderWord second: " + practice.renderWord());


// console.log("findLetter function: " + practice.findLetter("u"));
// console.log("findLetter function: " + practice.findLetter("g"));
console.log("wordGuessed function: " + practice.wordGuessed());
module.exports = Word;
