var inquirer = require("inquirer");
var Word = require("./Word");
var Player = require("./Player");
var Letter = require("./Letter");
var Start = require("./start");
var newWord = Start.currentWord;
var chosenWord = new Word(newWord);
var currentPlayer = new Player;


console.log(Start.currentWord);
inquirer.prompt([
	{
		type: "confirm",
		message: "Do you want to play some hangman?",
		name: "confirm"
	}
	]).then(function(response) {
		if (response.confirm) {
            startGame();
		} else {
            return console.log("That's the only game on here! You should play!")
        }
    });


function startGame(){
    console.log(chosenWord);
    if(chosenWord.lettersGuessed.length >= currentPlayer.guessesLeft){
        console.log ("You are out of guesses! Try again!");
        return;
    }
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "userInput"
        }
            ]).then(function(response) {
                //all game logic here
            });

         startGame();   
        }
