// declaring global variables
const gameChoices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
// allows computer to randomly select from rock, paper or scissors
function computerPlay() {
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}
// executes 1 game of rock, paper, scissors
function playRound(playerSelection, player2selection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        result = player2selection === "rock" ? "It's a tie!" :
        player2selection === "scissors" ?
        1 : 0;
    } else if (playerSelection === "scissors") {
        result = player2selection === "scissors" ? "It's a tie!" :
        player2selection === "paper" ?
        1 : 0;
    } else {
        result = player2selection === "paper" ? "It's a tie!" :
        player2selection === "rock" ?
        1 : 0;
    }
    if (result === "It's a tie!") {
        return result;
    } else if (result === 1) {
        return `You win! ${playerSelection} beats ${player2selection}.`;
    } else {
        return `You lose... ${player2selection} beats ${playerSelection}.`;
    }
}
// keeps score for the game
function countScore(gameResult) {
    if (gameResult.includes("win")) {
        playerScore++
    } else if (gameResult.includes("lose")) {
        computerScore++
    } else {
        playerScore = playerScore;
        computerScore = computerScore;
    }
}

// plays 5 rounds of rock, paper scissors
function playGame() {
for (i = 1;5 >= i;i++) {
    let gameResult = playRound(prompt("Please enter rps"),computerPlay());
    alert(gameResult);
    countScore(gameResult);
    }
if (playerScore > computerScore) {
    alert("You win!")
} else if (computerScore > playerScore) {
    alert("You lose!")
} else {
    alert("It's a tie!")
}
}
