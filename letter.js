function Letter(letter = "") {
  this.guessedLetters = [];
  this.letter = letter;
  this.display = "_";

 // sets the guessed letter into the word constructor
  this.setGuessedLetter = function (letter) {
    this.guessedLetter = new Letter(letter);
    // when the letter is set, function is called to check if it's correct
    this.checkLetter();
  }

  this.checkLetter = function () {
    if (this.remainingGuesses === 0) {
      console.log('game over')// log to the dOM gameover
      return;
    }
    // guessed the right letter
    if (this.word[this.currentIndex] === this.guessedLetter.letter) {
      this.guessedLetter.display = this.guessedLetter.letter;
      // empty the array if the guess is correct
      this.wrongLetters.length = 0
      // write the correct letter to the array of guessed letters
      this.guessedLetters[this.currentIndex] = this.guessedLetter;
      this.setDisplay();
      this.currentIndex += 1;
    }
    // guessed the wrong letter
    else {
      this.remainingGuesses -= 1;
      this.wrongLetters[this.currentIndex] = this.guessedLetter.letter;
    }
  }
}

/*var letter1 = new Letter('i');
console.log(letter1);*/


module.exports = Letter;