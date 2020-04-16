const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');

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

    if (playerChoice == computerSelection) {
        results.textContent = 'Draw! You both chose ' + playerChoice;
    } else if ((playerChoice=='rock' && computerSelection=='scissors') ||
                (playerChoice=='paper' && computerSelection=='rock') ||
                (playerChoice=='scissors' && computerSelection== 'paper')) 
                {
        results.textContent = ('You win! ' + playerChoice + ' beats ' + computerSelection);
        return 'won';
    } else {
        results.textContent = ('You lose! ' + computerSelection + ' beats ' + playerChoice);
        return 'lost';
    }   
}


function game(rounds) {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        (playGame() == 'won') 
                ? playerScore += 1 : computerScore += 1;
    }

    if (playerScore == computerScore) {
        status = 'draw';
    } else if (playerScore > computerScore) {
        status = 'won';
    } else {
        status = 'lost';
    }

    console.log(`The score is ${playerScore}:${computerScore}, you have ${status}`)
}



