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
        }else{
            resultMessage = "You win! Rock beats scissors!";
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            resultMessage = "You win! Paper beats rock!";
        }else{
            resultMessage = "You lose! Scissors beats paper!";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            resultMessage = "You lose! Rock beats scissors!";
        }else{
            resultMessage = "You win! Scissors beats paper!";
        }
    }

    return resultMessage;
}

function game(){
    for(let i = 0; i < 5; i++){
        const computer = getComputerChoice();
        const player = prompt("Make your choice:");
        console.log(`The computer chose ${computer}`);
        console.log(`You chose ${player}`);
        console.log(playRound(player, computer));
    }
}