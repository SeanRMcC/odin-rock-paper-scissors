let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    const choice = parseInt(Math.random() * 3);
    let result;
    if(choice === 0){
        result = "Rock";
    }else if(choice === 1){
        result = "Paper";
    }else if(choice === 2){
        result = "Scissors";
    }
    return result;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let resultMessage;
    if(playerSelection === computerSelection){
        resultMessage = "It's a tie!";
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            resultMessage = "You lose! Paper beats rock!";
            computerScore++;
        }else{
            resultMessage = "You win! Rock beats scissors!";
            playerScore++;
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            resultMessage = "You win! Paper beats rock!";
            playerScore++;
        }else{
            resultMessage = "You lose! Scissors beats paper!";
            computerScore++;
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            resultMessage = "You lose! Rock beats scissors!";
            computerScore++;
        }else{
            resultMessage = "You win! Scissors beats paper!";
            playerScore++;
        }
    }

    return resultMessage;
}

const buttons = document.querySelectorAll(".choice");
const results = document.querySelector("#results");
const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");
const cChoice = document.querySelector("#c-choice");
const winner = document.querySelector("#winner");
const reset = document.querySelector("#reset");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(computerScore < 5 && playerScore < 5){
            const computerChoice = getComputerChoice();
            cChoice.textContent = `The Computer Chose: ${computerChoice}`;
            results.textContent = playRound(button.id, computerChoice);
            pScore.textContent = playerScore;
            cScore.textContent = computerScore;
            if(computerScore == 5){
                winner.style.color = "red";
                winner.textContent = "Computer Wins! Better luck next time!";
            }else if(playerScore == 5){
                winner.style.color = "green";
                winner.textContent = "Player Wins! Congrats!";
            }
        }
    });
});

reset.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    winner.textContent = "";
    cChoice.textContent = "";
    results.textContent = "";
});