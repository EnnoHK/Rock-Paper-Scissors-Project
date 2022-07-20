//variable declaration
let computerChoice = getComputerChoice();
let winCounter = 0;
let loseCounter = 0;
let playerInput;

//eventlistener
document.getElementById("RK").addEventListener("click", inpRock);
document.getElementById("PP").addEventListener("click", inpPaper);
document.getElementById("SC").addEventListener("click", inpScissors);

function inpRock() {
    playRound("ROCK");
}
function inpPaper() {
    playRound("PAPER");
}
function inpScissors() {
    playRound("SCISSORS");
}

function getComputerChoice() {
    const cpuChoices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = cpuChoices[Math.floor(Math.random() * 3)];

    // console.log(computerChoice);
    return (computerChoice);
}
// getComputerChoice();


function playRound(playerSelection, computerChoice) {
    computerChoice = getComputerChoice();
    if (winCounter + loseCounter < 5) {
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
        // return winCounter, loseCounter;
        console.log(winCounter);
        console.log(loseCounter);
    }
    else if (winCounter + loseCounter == 5) {
        if (winCounter > loseCounter && winCounter + loseCounter == 5 && document.getElementById('score').innerHTML != 'Congratulations! You win!') {
            console.log(`Congratulations! You win! Score: ${winCounter, loseCounter}`)
            document.getElementById('score').innerHTML = 'Congratulations! You win!';
        } else if (winCounter < loseCounter && winCounter + loseCounter == 5 && document.getElementById('score').innerHTML != 'Too bad... You lost!') {
            console.log(`Too bad... You lost Score: ${winCounter}, ${loseCounter} `);
            document.getElementById('score').innerHTML = 'Too bad... You lost!';
        }
    } else {
        return;
    }
}





// function game(playerInput) {
//     computerChoice = getComputerChoice();
//     // let playerInput = prompt('Enter Rock, Paper or Scissors');
//     let playerSelection = playerInput;
//     playRound(playerSelection, computerChoice);

//     if (winCounter > loseCounter) {
//         console.log(`Congratulations! You win! Score: ${winCounter, loseCounter}`)
//     } else {
//         console.log(`Too bad... You lost Score: ${winCounter}, ${loseCounter} `);
//     }
// }







/*
you win: if rock and cpu = scissors 
you win: if paper and cpu = rock
you win: if scissors and cpu = paper
you lose: else





function game() {

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        // let playerInput = prompt('Enter Rock, Paper or Scissors');

        let playerSelection = playerInput;
        playRound(playerSelection, computerChoice);
    }
    if (winCounter > loseCounter) {
        console.log(`Congratulations! You win! Score: ${winCounter, loseCounter}`)
    } else {
        console.log(`Too bad... You lost Score: ${winCounter}, ${loseCounter} `);
    }
}



*/