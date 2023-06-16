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

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");
const cChoice = document.querySelector("#c-choice");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        cChoice.textContent = `The Computer Chose: ${computerChoice}`
        results.textContent = playRound(button.textContent, computerChoice);
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    });
});