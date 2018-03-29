function Letter(letter) {
    this.letter = letter;
    // this.lowerCase = letter.toLowerCase();
    this.display = false;
    if(this.letter == " "){
        this.display = true;
        return ' ';
    }
}
 
Letter.prototype.toString = function(){
    if(!this.display){
        return "_ "
    } else {
        return this.letter;
    }
}


module.exports = Letter;
