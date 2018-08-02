var letter = require('./Letter.js');

exports.wordLogic = wordLogic;

// Constructor for current word to guess
var wordLogic = function (currentWord) {
    this.word = currentWord;
    // Current word letter array
    this.letterArray = [];
    this.correct = false;

    // Function to change word into letters
    this.splitWord = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new letter.Letter(this.word[i]));
        }
    };

    // Verify that word has been guessed.
    // If word is guessed, then end game.
    this.checkWordGuess = function() {
        var letterRight = 0;

        for (var i = 0; i < this.letterArray.lenght; i++) {
            if (this.letterArray[i].showLetter === true) {
                letterRight += 1;
            }
        };

        if (letterRight === this.letterArray.length) {
            this.correct = true;
        }
        else {
            this.correct = false;
        }
        return this.correct;
    };

    // Validates if guessed letter is correct
    this.letterFound = function (guessPrompt) {
        var numberFound = 0;
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].wordLetter === guessPrompt) {
                this.letterArray[i].showLetter = true;
                numberFound += 1;
            }
        };
        return numberFound;
    };
    this.wordGuessResult = function () {
        var line = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            line += this.letterArray[i].letterAppear();
        };
        return line;
    };
}