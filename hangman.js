var Name = require('./name.js');
var inquirer = require('inquirer');

console.log('************************************Welcome to 90s Rapper Hangman*************************************');
console.log('********************************************Guess a letter********************************************');


var word = Name.getRapper();
word.initializeDisplay();

function startGame (){

inquirer.prompt([{
                    type: "input",
                    name: "newGuess",
                    message: "Enter a letter"
        }
    ])
    .then(answers => {
/*                        var guessesRemaining = word.remainingGuesses;
                        if (guesses Remaining)*/

                            // Unable to loop through this //
                        console.log(word.displayWord);
                        console.log(word.remainingGuesses);
                        console.log()
                        console.log(answers.newGuess);
})
};








startGame();
