//exports.Letter = Letter;

// Constructor variable
var Letter = function(guess) {
    // Letter guessed
    this.wordLetter = guess;
    // If the letter has or hasn't been guessed
    this.showLetter = false;
    
    // Method to show letter when correctly guessed
    this.letterAppear = function () {
        // Conditionals
        if (this.wordLetter === " ") {
            this.showLetter = true;
            return " ";
        }

        if (this.showLetter === true) {
            return " " + this.wordLetter + " ";
        }
        else {
            return " ";
        }
        
    };

};