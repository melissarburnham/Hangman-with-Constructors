var Word = require("./Word");

function Start(){
    this.wordbank = ["pitbull", "dachshund", "golden retriever", "labrador retriever", 
    "beagle", "bulldog", "great dane", "poodle", "husky", "chihuahua", "boxer", "pug", "border collie"];

    this.randomWord = this.wordbank[ Math.floor(Math.random() * this.wordbank.length)];
    
    this.wordPick = new Word(this.randomWord);
    this.currentWord = this.wordPick.wordGuessed();
    // var currentWordPick = currentWord.toString();
    // console.log(currentWord);
}


module.exports = Start;



// console.log(currentWord.findLetter("u"));