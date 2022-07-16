//variable declaration
let computerChoice = getComputerChoice();


function getComputerChoice() {
    const cpuChoices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = cpuChoices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    return (computerChoice);
}
// getComputerChoice();


function playRound(playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        console.log('draw');
    } else if (playerSelection == 'ROCK' && computerChoice == 'SCISSORS') {
        console.log('You Win');
    } else if (playerSelection == 'PAPER' && computerChoice == 'ROCK') {
        console.log('You Win');
    } else if (playerSelection == 'SCISSORS' && computerChoice == 'PAPER') {
        console.log('You Win');
    }
    else {
        console.log('You lose!')
        console.log(playerSelection);
        console.log(computerChoice);
    }

}

let playerInput = prompt('Enter Rock, Paper or Scissors');
let playerSelection = playerInput.toUpperCase();
playRound(playerSelection, computerChoice);
/*
you win: if rock and cpu = scissors 
you win: if paper and cpu = rock
you win: if scissors and cpu = paper
you lose: else

*/