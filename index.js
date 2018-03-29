
var inquirer = require("inquirer");
var Word = require("./Word");
var Player = require("./Player");
var Letter = require("./Letter");
var Start = require("./start");
var newWord = Start.currentWord;
// var chosenWord = new Word(newWord);
var currentPlayer = new Player;

inquirer.prompt([
	{
		type: "confirm",
		message: "Do you want to play some hangman?",
		name: "confirm"
	}
	]).then(function(answers) {
		if (answers.confirm) {
            startGame();
		} else {
            return console.log("That's the only game on here! You should play!")
        }
    });


function startGame(){
    console.log(newWord);
    // if(chosenWord.lettersGuessed.length >= currentPlayer.guessesLeft){
    //     console.log ("You are out of guesses! Try again!");
    //     return;
    // }
    // inquirer.prompt([
    //     {
    //         type: "input",
    //         message: "Guess a letter!",
    //         name: "userInput"
    //     }
    //         ]).then(function(response) {
    //             // Pick a word --DONE AT THE BEGINNING OF THIS FUNCTION
    //             // Replace letters with underscore
    //             // Display to screen
    //             // User guesses a letter
    //             // Check to see if guess is a letter
    //             // Check to see if guess has already been guessed
    //             // Check to see if guess is in the word
    //             // If yes, alert "correct!" replace underscore with correct letter
    //             // If no, alert "incorrect!" decrease “Guesses Left”
    //             // If Guesses Left = 0, game over, update losses, option to play again
    //             // If word is guessed, update wins and option to play again
    //         });

        //  startGame();   
        }
