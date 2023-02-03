const options = ["Rock", "Paper", "Scissors"];

playerPoint = 0;
computerPoint = 0;

var playGame = true;
var playerPlay = '';

while (this.playGame) {
    playerPlay = prompt('What do you play?');

    if (String(playerPlay).toLowerCase() === 'stop') {
        this.playGame = false;
        alert('Good game, well played.');
    } else {
        var computerPlay = getComputerChoice();
        console.log('Computer plays: ', computerPlay);
        console.log(playRound(playerPlay, computerPlay))
        console.log(`total score is player: ${playerPoint} computer: ${computerPoint}`)
    }
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerPlay, computerPlay) {
    if (String(playerPlay).toLowerCase() === String(computerPlay).toLowerCase()) {
        return 'Draw, nobody wins';
    }

    if (String(playerPlay).toLowerCase() === 'rock' 
        && String(computerPlay).toLowerCase() === 'scissors') {
            this.playerPoint++;
            return 'You win! Rock beats scissors.'
        }

    if (String(playerPlay).toLowerCase() === 'paper' 
        && String(computerPlay).toLowerCase() === 'rock') {
            this.playerPoint++;
            return 'You win! Paper beats Rock.'
        }

    if (String(playerPlay).toLowerCase() === 'scissors' 
        && String(computerPlay).toLowerCase() === 'paper') {
            this.playerPoint++;
            return 'You win! Scissors beats Paper.'
        }
        this.computerPoint++;
    return `You lose! ${computerPlay} beats ${playerPlay}.`;
}