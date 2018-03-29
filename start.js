var Word = require("./Word");

function Start(){
    this.wordbank = ["pitbull", "dachshund", "golden retriever", "labrador retriever", 
    "beagle", "bulldog", "great dane", "poodle", "husky", "chihuahua", "boxer", "pug", "border collie"];

    this.randomWord = this.wordbank[ Math.floor(Math.random() * this.wordbank.length)];
    
    this.wordPick = new Word(this.randomWord);
    // this.currentWord = this.wordPick.wordGuessed();
    // var currentWordPick = currentWord.toString();
    // console.log(currentWord);
}

// var practice = new Start;
// console.log(practice);
// console.log(practice.letters);
// console.log(practice.wordPick.lettersArr);
// console.log("renderWord function: " + practice.wordPick.renderWord());
// console.log("findLetter function: " + practice.wordPick.findLetter('e'));
// console.log("renderWord second: " + practice.renderWord());
// console.log("findLetter function: " + practice.findLetter("u"));
// console.log("findLetter function: " + practice.findLetter("g"));
// console.log("wordGuessed function: " + practice.wordPick.wordGuessed());


module.exports = Start;



// console.log(currentWord.findLetter("u"));