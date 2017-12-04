var Letter = require('./letter.js');

function Word(rapperName) {
  this.word = rapperName;
  this.remainingGuesses = 10;
  this.currentIndex = 0;
  this.guessedLetter = "";
  this.guessedLetters = [];
  this.wrongLetters = [];
  this.displayWord = "";

  // Sets the initial display according to the word.length (using the letter constructor)
  this.initializeDisplay = function () {
    let wordToDisplay = '';
    for (let i = 0; i < this.word.length; i++) {
      var letter = new Letter();
      this.guessedLetters.push(letter);
      wordToDisplay += letter.display;
    }
    this.displayWord = wordToDisplay;
  }

  // Sets the display after letters are correctly guessed
  this.setDisplay = function () {
   let wordToDisplay = '';
    for (let i = 0; i < this.guessedLetters.length; i++) {
      wordToDisplay += this.guessedLetters[i].display
   }
   this.displayWord = wordToDisplay;


  }
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
};

/*var rapper1 = new Word('test');
console.log(rapper1, "first")
console.log(rapper1.displayWord, "second");*/

module.exports = Word;