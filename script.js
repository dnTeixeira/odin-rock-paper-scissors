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

function getHumanChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner = "";

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            console.log("That's a tie!");
        } else if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if(humanChoice == "rock") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if(humanChoice == "paper") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else if(humanChoice == "scissors") {
            humanScore++;
            console.log("You win!! Scissors beats Paper");
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    if(humanScore > computerScore) {
        winner = "Human wins!";
    } else if(humanScore < computerScore) {
        winner = "Computer wins!";
    } else {
        winner = "It's a draw";
    }

    console.log(winner);
}

playGame()