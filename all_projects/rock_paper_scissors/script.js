let yourNumber = 0
let computerNumber = 0

function computerPlay(){
    let selection = ['Rock', 'Paper', 'Scissors'];
    return selection[Math.floor(Math.random()*selection.length)];
}
    
function updateYourScoreNumber(){
    const yourScoreNumber = document.querySelector('.yourscore-number');
    yourScoreNumber.textContent = yourNumber;
}

function updateComputerScoreNumber(){
    const computerScoreNumber = document.querySelector('.opponentscore-number');
    computerScoreNumber.textContent = computerNumber;
}

function resetGame(){
    yourNumber = 0;
    computerNumber = 0;
    updateYourScoreNumber();
    updateComputerScoreNumber();
    document.querySelector('.results').textContent = 'Make a selection above';
}

/*function gameEnd(){
    if (yourNumber == 5 || computerNumber == 5){
        let winner;
        if (yourNumber > computerNumber){
            winner = 'You';
        } else {
            winner = 'The computer'
        }
        alert(`${winner} reached 5 points! Winner = ${winner}`);
        resetGame();
    }
    return;
}*/

function gameEnd(){
    if (yourNumber == 5){
        alert('You won 5 rounds. You\'re the winner!')
        resetGame();
    }
    else if (computerNumber == 5){
        alert('The computer won 5 rounds. You lose. Try again!');
        resetGame();
    }
}

function playRound(playerSelection, computerSelection){
    let gameValue = {
        'Rock': 'Paper',
        'Paper': 'Scissors',
        'Scissors': 'Rock'
    };
    if (gameValue[computerSelection] === playerSelection){
        yourNumber += 1;
        updateYourScoreNumber();
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === computerSelection) {
        return (`Tie game! You both chose ${playerSelection}`)
    }
    else if (gameValue[playerSelection] === computerSelection){
        computerNumber += 1;
        updateComputerScoreNumber();
        return(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        console.error('not a valid input');
    }
}

let PaperButton = document.querySelector('#paper');
let ScissorsButton = document.querySelector('#scissors');
let RockButton = document.querySelector('#rock');
let resetButton = document.querySelector('.replay');

function game(choice){
    const resultsText = document.querySelector('.results');
    let comp = computerPlay();
    resultsText.textContent = playRound(choice, comp);
    gameEnd();
}

function reset(){
    yourNumber = 0;
    computerNumber = 0;
    updateYourScoreNumber();
    updateComputerScoreNumber();
    document.querySelector('.results').textContent = 'Make a selection above';
}

PaperButton.addEventListener('click', () => {
    game('Paper');
});

ScissorsButton.addEventListener('click', () => {
    game('Scissors');
});

RockButton.addEventListener('click', () => {
    game('Rock');
});

resetButton.addEventListener('click', () => {
    reset();
});