var Word = require("./Word");

   var  wordbank = ["pitbull", "dachshund", "golden retriever", "labrador retriever", 
    "beagle", "bulldog", "great dane", "poodle", "husky", "chihuahua", "boxer", "pug", "border collie"];

    var randomWord = wordbank[ Math.floor(Math.random() * wordbank.length)];
    
    var currentWord = new Word(randomWord);
	



exports.currentWord = currentWord;

console.log(currentWord.findLetter());