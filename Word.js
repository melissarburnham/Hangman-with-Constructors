const Letter = require("./Letter");
let correctLetter;
let length = 0;
let count = 0;

// let Player = require("./player.js");

function Word(word){
  this.word = word;
  this.lettersArr = [];  
  this.solved = false;  
  this.guessesMade = " ";
  for(let i = 0; i < this.word.length; i++){
	let letters = new Letter(this.word[i]);	
	this.lettersArr.push(letters);
  }
}


//function to check if user guess is that same as any letters in lettersArray
Word.prototype.findLetter = function(letterGuess){
  console.log("LETTERS ARRAY: " + this.lettersArr);
  for(let i = 0; i < this.lettersArr.length; i++){ 
	let guess = this.lettersArr[i];
    console.log("LETTERS ARR[i].letter: " + this.lettersArr[i].letter);
	correctLetter = this.lettersArr[i].letter;
	if(letterGuess === correctLetter){
	  this.lettersArr[i].display = true;
	  this.toString(letterGuess);
	  inArr = true;
	}
  }
  return inArr;  
}

//function to determine if all letters were guessed
Word.prototype.wordGuessed = function() {
  for (let i = 0; i < this.lettersArr.length; i++) {
	if (this.lettersArr[i].display) {
	  length++;
		// console.log(length);
	}
  }
  if (length === this.lettersArr.length) {
	this.solved = true;
  }
  console.log("Current Word: " + this.lettersArr);
  return ("Is this solved? " + this.solved);
};

const practice = new Word ("poodle");
// console.log(practice);
// console.log(this.letters);
// console.log(this.lettersArr);
// console.log("renderWord function: " + practice.renderWord());
console.log("findLetter function for P: " + practice.findLetter('p'));
// // console.log("renderWord second: " + practice.renderWord());
console.log("findLetter function for U: " + practice.findLetter("o"));
console.log("findLetter function for G: " + practice.findLetter("g"));
console.log("wordGuessed function: " + practice.wordGuessed());
module.exports = Word;


//function to call toString property, which replaces letters with underscores
// Word.prototype.renderWord = function() {
// 	for (var i = 0; i < this.lettersArr.length; i++) {
// 		this.lettersArr[i].display = false;
// 		this.lettersArr[i].toString(this.word);
// 	}
// 	return this.word;
// };
