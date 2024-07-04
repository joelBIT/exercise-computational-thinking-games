/**
 * Pseudo code for Rock Paper Scissors
 * 
 * 
 * 
 * Target point is 3 (when the game ends)
 * Loop until one player reach the target point
 *      All players show their hand shape simultaneously (paper > rock && rock > scissors && scissors > paper)
 *      if draw
 *          continue
 *      else
 *          +1 point to the player that won the round
 *          check if player have reached the target point
 *              if true
 *                  player wins the game, end game
 *              else
 *                  continue
 * 
 */

const restartButton = document.querySelector(".restart");
const computerScoreLabel = document.querySelector(".computer");
const playerScoreLabel = document.querySelector(".you");
const outcomeText = document.querySelector('.outcome');
const playable = document.querySelectorAll('.playable');
const enemyHandImage = document.querySelector('.enemy-hand');

const targetScore = 3;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

restartButton.addEventListener('click', () => {
    outcomeText.innerHTML = 'Choose hand shape';

    computerScoreLabel.innerHTML = 'Computer: 0';
    computerScore = 0;
    playerScore = 0;
    gameOver = false;
    enemyHandImage.className = 'enemy-hand';
    outcomeText.innerHTML = 'Choose hand shape';
    outcomeText.classList.remove('win');
    outcomeText.classList.remove('loss');

    playerScoreLabel.innerHTML = 'You: 0';
});

for (const hand of playable) {
    hand.addEventListener('click', (event) => {
        if (gameOver) {
            return;
        }

        let enemyHand = Math.floor(Math.random() * 3) + 1;
        setEnemyHandImage(enemyHand);
        let yourHand = getYourHand(event.currentTarget);
        updateScore(yourHand, enemyHand);
        checkIfGameOver();
    });
}

function getYourHand(targetElement) {
    if (targetElement.classList.contains('paper')) {
        return 2;
    }
    if (targetElement.classList.contains('scissors')) {
        return 3;
    }
    return 1;
}

/**
 * 
 * @param {*} yourHand can be 1 (rock), 2 (paper), 3 (scissors)
 * @param {*} enemyHand can be 1 (rock), 2 (paper), 3 (scissors)
 */
function updateScore(yourHand, enemyHand) {
    if (yourHand === enemyHand) {
        return;
    } else if (yourHand === 1 && enemyHand === 2) {
        computerScore++;
    } else if (yourHand === 2 && enemyHand === 3) {
        computerScore++
    } else if (yourHand === 3 && enemyHand === 1) {
        computerScore++
    } else {
        playerScore++;
    }

    playerScoreLabel.innerHTML = `You: ${playerScore}`;
    computerScoreLabel.innerHTML = `Computer: ${computerScore}`;
}

function setEnemyHandImage(enemyHand) {
    enemyHandImage.className = 'enemy-hand';

    if (enemyHand === 1) {
        enemyHandImage.classList.add('rock');
    } else if (enemyHand === 2) {
        enemyHandImage.classList.add('paper');
    } else {
        enemyHandImage.classList.add('scissors');
    }
}

function checkIfGameOver() {
    if (playerScore === targetScore || computerScore === targetScore) {
        gameOver = true;
        outcomeText.innerHTML = 'GAME IS OVER';
        if (playerScore > computerScore) {
            outcomeText.classList.add('win');
        } else {
            outcomeText.classList.add('loss');
        }
    }
}