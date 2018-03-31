
const inquirer = require("inquirer");
const Word = require("./Word");
const Player = require("./Player");
const Letter = require("./Letter");
const Start = require("./start");
let currentPlayer = new Player;
let newWord;

function startGame(){
  inquirer.prompt([
    {
      type: "confirm",
      message: "Do you want to play some hangman?",
      name: "confirm"
    }
    ]).then(function(answers) {
      if (answers.confirm) {
        newWord = new Start;
        gamePlay();
        } else {
          return console.log("That's the only game on here! You should play!")
        }
    });
}




function gamePlay(){
    // if(newWord.lettersGuessed.length >= currentPlayer.guessesLeft){
    //     console.log ("You are out of guesses! Try again!");
    //     return;
    // }

    if (currentPlayer.guessesLeft > 0){
      inquirer.prompt([
        {
          type: "input",
          message: "Guess a letter!",
          name: "userInput"
        }
        ]).then(function(answers) {
           console.log("1: " + newWord.wordPick.wordGuessed());
           // console.log(newWord.currentWord);
           console.log("new word: " + newWord.wordPick.findLetter(answers.userInput));
           if(newWord.wordPick.findLetter(answers.userInput)){
             console.log("You are correct!");
             console.log("2: " + newWord.wordPick.wordGuessed());
             gamePlay();
            } else {
              console.log("wrong");
              gamePlay();
            }
                // User guesses a letter
                    // Check to see if guess is a letter
                    // Check to see if guess has already been guessed
                    // Check to see if guess is in the word
                    // If yes, alert "correct!" replace underscore with correct letter
                    // If no, alert "incorrect!" decrease “Guesses Left”
                    // If Guesses Left = 0, game over, update losses, option to play again
                    // If word is guessed, update wins and option to play again
            });
    
            //  gamePlay();   
        }
    }
    
startGame();