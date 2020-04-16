const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const score = document.getElementById('scoreboard');
const final = document.getElementById('finalscore');

buttons.forEach((button) => {
    button.addEventListener('click', playGame);
})


function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)];
}


function playGame() {
    let computerSelection = computerChoice()
    let playerChoice = this.value;
    let status;

    if (playerChoice == computerSelection) {
        results.textContent = 'Draw! You both chose ' + playerChoice;
    } else if ((playerChoice=='rock' && computerSelection=='scissors') ||
                (playerChoice=='paper' && computerSelection=='rock') ||
                (playerChoice=='scissors' && computerSelection== 'paper')) 
                {
        results.textContent = ('You win! ' + playerChoice + ' beats ' + computerSelection);
        status = 'won';
    } else {
        results.textContent = ('You lose! ' + computerSelection + ' beats ' + playerChoice);
        status = 'lost';
    }
    updateScore(status);   
    checkWin();
}


let playerScore = 0;
let computerScore = 0;
function updateScore(status) {
    console.log(status);
    if (status=='won') {
        playerScore += 1
     } else if (status=='lost') {
        computerScore += 1;
     } 
    score.textContent = `Your score: ${playerScore}\tComputer score: ${computerScore}`;
    
}

function checkWin() {
    if (playerScore > 4) {
        final.textContent = 'Player has won!';
    } else if (computerScore > 4) {
        final.textContent = 'Computer has won!';
    } 
}


