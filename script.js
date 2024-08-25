console.log("Hello, welcome to rock, paper, scissors!");

var compScore = 0;
var humScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Returns 1, 2, or 3
}

function getHumanChoice() {
    var hum = parseInt(prompt("Enter a number 1, 2, or 3 for rock, paper, or scissors:"));
    while (hum < 1 || hum > 3 || isNaN(hum)) {
        hum = parseInt(prompt("Please enter a valid number 1, 2, or 3:"));
    }
    return hum;
}

function play(human, computer) {
    if (computer === human) {
        console.log("This round was a draw");
    } else if (computer == 1 && human == 2) {
        console.log("You win this round! Paper beats Rock.");
        humScore++;
    } else if (computer == 1 && human == 3) {
        console.log("You lose this round! Rock beats Scissors.");
        compScore++;
    } else if (computer == 2 && human == 1) {
        console.log("You lose this round! Paper beats Rock.");
        compScore++;
    } else if (computer == 2 && human == 3) {
        console.log("You win this round! Scissors beats Paper.");
        humScore++;
    } else if (computer == 3 && human == 1) {
        console.log("You win this round! Rock beats Scissors.");
        humScore++;
    } else if (computer == 3 && human == 2) {
        console.log("You lose this round! Scissors beats Paper.");
        compScore++;
    }
}

function game() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    play(humanChoice, computerChoice);
    
    if (compScore === 3) {
        console.log("You Lost this series");
        return true; // End the game
    }
    if (humScore === 3) {
        console.log("You win!!!!!!!!!!!!");
        return true; // End the game
    }
    return false; // Continue the game
}

while (!game()) {
    // Loop continues until game() returns true
}