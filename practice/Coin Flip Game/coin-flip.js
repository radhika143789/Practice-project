const Score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    loses: 0
};

function computerChoice() { 
    randomNumber = Math.random();
    randomNumber < 0.5 ? computerchoice ='head' : computerchoice ='tail';
    return computerchoice;
}

function playGame(playerMove) {
    result = '';
    computerchoice = computerChoice();
    if (playerMove === computerchoice) {
        result = 'You Win';
    } else {
        result = 'You Lose';
    }
    
    if (result === 'You Win') {
        Score.wins += 1;
    } else {
        Score.loses += 1;
    }
    localStorage.setItem('Score', JSON.stringify(Score)); 
    document.querySelector('.show-move').innerHTML = `You pick <img src="./images/${playerMove}.png" class="icon-pic"> computer picks <img src="./images/${computerchoice}.png"class="icon-pic" >`;
    document.querySelector('.Result').innerHTML = `${result}; Wins: ${Score.wins} Loses: ${Score.loses}`;
}

function resetScore() {
    Score.wins = 0;
    Score.loses = 0;
    localStorage.setItem('Score', JSON.stringify(Score));
    document.querySelector('.Result').innerHTML = `Wins: ${Score.wins} Loses: ${Score.loses}`; // Update display immediately
}
