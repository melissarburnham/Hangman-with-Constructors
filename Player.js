function Player() {
  this.wins = 0;
  this.losses = 0;
  this.guessesLeft = 10;
}
Player.prototype.incrementWins = function() {
  this.wins++;
}
Player.prototype.incrementLosses = function() {
  this.losses++;
}
Player.prototype.decrementGuesses = function() {
  this.guessesLeft--;
}

module.exports = Player;
