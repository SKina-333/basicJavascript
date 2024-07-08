
let humanScore = 0;
let computerScore = 0;
function getComputerChoice () {
    let RandNum = Math.floor(Math.random() * 3)

    if (RandNum == 1) {
        console.log("rock");
    }
    else if (RandNum == 2) {
        console.log("paper");
    }
    else if (RandNum == 3) {
        console.log("scissor");
    }
}

function getHumanChoice () {
    let Choice = prompt("Rock, Paper, or Scissor?");

    console.log("user has chosen: " + Choice);
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("Computer've won! Paper beats Rock! Computer get 1 point!");
            computerScore += 1;
        }else if (computerChoice == "scissor"){
            console.log("You've won! Rock beats Scissor! You get 1 point!");
            humanScore += 1;
        }else if (computerChoice == "rock"){
            console.log("Its a draw! Nothing happens");
        }
    }else if (humanChoice == "paper"){
        if (computerChoice == "paper"){
            console.log("Its a draw! Nothing happens");
        }else if (computerChoice == "scissor"){
            console.log("Computer've won! Scissor beats Paper! Computer get 1 point!");
            computerScore += 1;
        }else if (computerChoice == "rock"){
            console.log("You've won! Paper beats Rock! You get 1 point!");
            humanScore += 1;
        }
    }else if (humanChoice == "scissor"){
        if (computerChoice == "paper"){
            console.log("You've won! Scissor beats Paper! You get 1 point!");
            humanScore += 1;
        }else if (computerChoice == "scissor"){
            console.log("Its a draw! Nothing happens");
        }else if (computerChoice == "rock"){
            console.log("Computer've won! Rock beats Scissor! Computer get 1 point!");
            computerScore += 1;
        }
    }
}

function resetGame () {
    humanScore = computerScore = 0;
}

function playRound() {
    let round = 5 
    while (round != 0){
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        round -= 1;
    }
}

