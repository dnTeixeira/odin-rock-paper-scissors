let humanScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let winner = "";

const div = document.querySelector("div");
const score = document.createElement("p");
const winnerP = document.createElement("p");

function getComputerChoice() {
    let randomNumber = Math.random();

    if(randomNumber <= 0.33) {
        return "rock";
    } else if(randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            div.textContent = `That's a tie!`;
        } else if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            div.textContent = `You lose! Paper beats Rock`;
        } else if(humanChoice == "rock") {
            humanScore++;
            div.textContent = `You win! Rock beats Scissors`;
        } else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            div.textContent = `You win! Paper beats Rock`;
        } else if(humanChoice == "paper") {
            computerScore++;
            div.textContent = `You lose! Scissors beats Paper`;
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            div.textContent = `You lose! Rock beats Scissors`;
        } else if(humanChoice == "scissors") {
            humanScore++;
            div.textContent = `You win!! Scissors beats Paper`;
        }

        score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        div.appendChild(score);

        if(gamesPlayed < 4) {
            gamesPlayed++;
        } else {
            announceWinner();
        }
    }

    const playerSelectionButton = document.querySelectorAll('.playerSelection');

    playerSelectionButton.forEach( btn => {
        btn.addEventListener('click', (e) => {
            playRound(e.target.getAttribute("id"), getComputerChoice());
        });
    }
    );
    
}

function announceWinner() {
    if(humanScore > computerScore) {
        winner = "Human wins!";
    } else if(humanScore < computerScore) {
        winner = "Computer wins!";
    } else {
        winner = "It's a draw";
    }

    winnerP.textContent = winner;
    div.appendChild(winnerP);

    gamesPlayed = 0;
    humanScore = 0;
    computerScore = 0;
}

playGame();