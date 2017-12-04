var Word = require('./word.js');

// Set rapper to result from getRapper function //
module.exports.getRapper = function(){
        var choices = ["xzibit","redman","biggie","birdman","scarface", "eminem"];

        // picks a random rapper //
        var randomRapper = choices[Math.floor(Math.random() * choices.length)];

        // creates word object
        var rapper = new Word(randomRapper);

        // Return rapper object //
        return rapper;
}

