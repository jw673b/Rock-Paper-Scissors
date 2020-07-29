const rpsChoices = ['rock','paper','scissors'];
const choices = document.querySelectorAll('img');
const counterDisplay = document.getElementById('counterbox')
let playerScore = 0;
let computerScore = 0;

//hides a href
const a = document.querySelector('a');
a.style.display = "none";
//play function
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    result = playRound(playerChoice,computerChoice);
    countScore(result);
    console.log(playerScore,computerScore);
    //updates counter on page
    counterDisplay.innerHTML = `
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>`
    if (playerScore === 5) {
        alert("You scored 5 points and won the game!");
    } else if (computerScore === 5) {
        alert("The computer scored 5 points and you lost the game!");
    }
    resetGame();
}

//event listeners for buttons
choices.forEach(choice => choice.addEventListener('click', play));

//computer random input generator
function getComputerChoice() {
    let randNum =Math.floor(Math.random()*rpsChoices.length);
    return rpsChoices[randNum];
    }

//single round methodology and returns 1,0,-1
function playRound(player,computer) {
    let result;
        if (player === 'rock') {
            result = computer === 'rock' ? 0:
            computer === 'scissors' ? 1:
            -1
        } else if (player === 'scissors') {
            result = computer === 'scissors' ? 0:
            computer === 'paper' ? 1:
            -1
        } else {
            result = computer === 'paper' ? 0:
            computer === 'rock' ? 1:
            -1
        }
         return result;
}

//counter function
function countScore(gameoutcome) {
    if (gameoutcome === 1) {
        playerScore++
    } else if (gameoutcome === -1) {
        computerScore++
    } else {
    }
}

//resets game
function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        counterDisplay.innerHTML = `
        <p>Player: ${playerScore}</p>
        <p>Computer: ${computerScore}</p>`
    }
}