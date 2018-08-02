var inquirer = require("inquirer");
var letter = require("./Letter.js");
var wordLogic = require("./Word.js");

var wordBank = ["rene belloq", "mola ram", "walter donovan", "elsa schneider", "irina spanlko", "colenel vogel", "arnold toht", "george mchale", "colonel dovchenko", "snakes"];
var random = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;

console.log("This is the Villians of Indiana Jones Hangman Game!");
console.log("\n");
console.log("You need to guess one of the top ten villians from all the movies");
console.log("\n");
console.log("You will have 12 tries to win the game.");
console.log("\n");
console.log("Succeed and you shall win, fail and you will lose!")

var hangman = {
    guessesLeft: 12,
    wordChosen: null,
    // Methood/function to start game
    startGame: function (word) {
        // Sets number of player guesses
        this.guessesLeft = 12;
        // Gets a word from the array
        this.wordChosen = new wordLogic.wordLogic(wordBank);
        // Changes words into letter array
        this.wordChosen.splitWord();

        console.log(this.wordChosen.wordGuessResult());

        this.promptPlayer();
    }, //


    // Function to ask player question and give player results on guess
    promptPlayer: function () {
        var referred = this;

        inquirer.prompt([
            {
                name: "guessPrompt",
                message: "Guess a letter!"
            }
        ]).then(function(answer) {
            if (this.lettersGuessed === undefined) {
                this.lettersGuessed = answer.guessPrompt + ", ";
            }
            else {
                this.lettersGuessed += answer.guessPrompt.toString() + ", ";
            };

            var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
            // Display is guess is wrong
            if (guessResult === 0) {
                console.log("You have chosen poorly!");
                referred.guessesLeft -= 1;
            }
            // Display if guess is correct
            else if (guessResult !== 0) {
                console.log("You have chosen wisely...");

                if (referred.wordChosen.checkWordGuess()) {
                    console.log("\n Answer: " + referred.wordChosen.word);
                    console.log("YOU WIN");
                    console.log("\n");
                    return;
                };
            };

            console.log("\n Guesses remaining: " + referred.guessesLeft);
            console.log("\n Result: " + referred.wordChosen.wordGuessResult());
            console.log("\n Letters guessed: " + this.lettersGuessed);
            console.log("-------------------------------------------------------------");

            if ((referred.guessesLeft > 0) && (referred.wordChosen.correct === false)) {
                referred.promptPlayer();
            }
            else if (referred.guessesLeft === 0) {
                console.log("\n YOU LOSE!");
                console.log("\n Since you failed you do not get to know the word...");
              //console.log("\n The word you failed to spell was " + referred.wordChosen.word + "!");
                console.log("-------------------------------------------------------------");
            }
            else {
                console.log(referred.wordChosen.wordGuessResult());
                console.log("-------------------------------------------------------------");
            }
            
        });

    },// promptPlayer function end

};

hangman.startGame();//Call start game function