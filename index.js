//variable declaration
let computerChoice = getComputerChoice();
let winCounter = 0;
let loseCounter = 0;

function getComputerChoice() {
    const cpuChoices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = cpuChoices[Math.floor(Math.random() * 3)];

    // console.log(computerChoice);
    return (computerChoice);
}
// getComputerChoice();


function playRound(playerSelection, computerChoice) {

    if (playerSelection == computerChoice) {
        console.log('draw');
    } else if (playerSelection == 'ROCK' && computerChoice == 'SCISSORS') {
        console.log('You Win');
        winCounter++;
    } else if (playerSelection == 'PAPER' && computerChoice == 'ROCK') {
        console.log('You Win');
        winCounter++;
    } else if (playerSelection == 'SCISSORS' && computerChoice == 'PAPER') {
        console.log('You Win');
        winCounter++;
    }
    else {
        console.log('You lose!')
        loseCounter++;


    }
    console.log("Player:" + playerSelection);
    console.log("CPU: " + computerChoice);
    return winCounter, loseCounter;

}



/*
you win: if rock and cpu = scissors 
you win: if paper and cpu = rock
you win: if scissors and cpu = paper
you lose: else

*/

function game() {

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        let playerInput = prompt('Enter Rock, Paper or Scissors');
        let playerSelection = playerInput.toUpperCase();
        playRound(playerSelection, computerChoice);
    }
    if (winCounter > loseCounter) {
        console.log(`Congratulations! You win! Score: ${winCounter, loseCounter}`)
    } else {
        console.log(`Too bad... You lost Score: ${winCounter}, ${loseCounter} `);
    }
}

game();






