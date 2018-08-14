var maxGuessCount = 10;

var wins = 0;
var loss = 0;
var guessesLeft = maxGuessCount;
var guesses = [];
var possible = "abcdefghijklmnopqrstuvwxyz";
var answer = possible.charAt(Math.floor(Math.random() * possible.length));



function reset() {
    guesses = [];
    guessesLeft = maxGuessCount;
    answer = possible.charAt(Math.floor(Math.random() * possible.length));
    console.log("reset Ran");
    displayRefresh();
}

function displayRefresh() {
    console.log("displayRefresh ran");
    var winText = document.getElementById("wins");
    var lossText = document.getElementById("losses");
    var guessesLeftText = document.getElementById("guessesLeft");
    var guessesText = document.getElementById("guesses");

    winText.textContent = wins;
    lossText.textContent = loss;
    guessesLeftText.textContent = guessesLeft;

    var guess = "";
    guesses.forEach(element => {
        guess += element + " ";
    });
    guessesText.textContent = guess;
}

document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();

    //check if the letter has been guessed before
    if (guesses.indexOf(guess) > -1) {
        alert("Sorry " + guess + " has already been used")
        return;
    }else if(possible.indexOf(guess) < 0){
        return;
    }

    guesses.push(guess);

    if (guess === answer) {
        wins++;
        reset();
    }
    else {
        guessesLeft--;

        if (guessesLeft === 0) {
            loss++;
            alert("My letter was: " + answer + "!");
            reset();
            return;
        }
    }

    displayRefresh();
}
