//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess);


//check if guess is right
if(guess === secretNumber) {
    alert("You got it right!!");
}

//Otherwise check if lower
else if (guess < secretNumber) {
    alert("Too low!");
}

//Otherwise check if higher
else {
    alert("Too high!");
}