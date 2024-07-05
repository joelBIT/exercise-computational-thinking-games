'use strict';

const knockNumbers = ['6', '7', '8', '9'];

const throwButton = document.querySelector(".throw");
const restartButton = document.querySelector(".restart");
const targetLabel = document.querySelector(".target");
const totalLabel = document.querySelector(".total");
const knockLabel = document.querySelector(".knockout");
const dice = document.querySelectorAll(".die");
const die1 = dice[0];
const die2 = dice[1];

let totalSum = 0;
let knockNumber = 0;
let targetSum;
throwButton.disabled = true;

/**
 * A throw of two dice. Their dot sum is added to the total sum unless it corresponds to the knock-out number. Then, the dot sum 
 * is subtracted from the total sum.
 */
throwButton.addEventListener('click', () => {
    let firstDieDots = throwDie();
    let secondDieDots = throwDie();

    changeDieSide(die1, firstDieDots);
    changeDieSide(die2, secondDieDots);

    updateTotalSum(firstDieDots + secondDieDots);

    totalLabel.innerHTML = `Total sum: ${totalSum}`;

    if (totalSum >= targetSum) {
        gameOver();
    }
});

/**
 * Resets the game state.
 */
restartButton.addEventListener('click', () => {
    throwButton.disabled = false;

    totalLabel.innerHTML = 'Total sum: 0';
    totalSum = 0
    knockNumber = 0;
    targetSum = 'NaN';

    getKnockNumber();
    knockLabel.innerHTML = `Knockout number: ${knockNumber}`;

    getTargetNumber();
    targetLabel.classList.remove('finished');
    targetLabel.innerHTML = `Target sum: ${targetSum}`;
});

/**
 * Prompts the user for the knock-out number.
 */
function getKnockNumber() {
    while (!knockNumbers.includes(knockNumber)) {
        knockNumber = prompt('Enter a knock out number (either 6, 7, 8, or 9)');
    }
}

/**
 * Prompts the user for the target point.
 */
function getTargetNumber() {
    while (isNaN(targetSum)) {
        targetSum = prompt('Enter a target point for when the game is over');
    }

    targetSum = Math.trunc(targetSum);
}

/**
 * If dotSum corresponds to the knock-out number, subtract dotSum from the total sum. Otherwise, add dotSum to the total sum.
 * 
 * @param {*} dotSum the sum of the two dice dots.
 */
function updateTotalSum(dotSum) {
    if (dotSum == knockNumber) {
        totalSum -= dotSum;
    } else {
        totalSum += dotSum;
    }
}

/**
 * Change the die side image to that of the thrown die.
 * 
 * @param {*} die the die element
 * @param {*} dots the number of dots of the die side
 */
function changeDieSide(die, dots) {
    die.className = 'die';

    switch(dots) {
        case 1:
            die.classList.add('one');
            break;
        case 2:
            die.classList.add('two');
            break;
        case 3:
            die.classList.add('three');
            break;
        case 4:
            die.classList.add('four');
            break;
        case 5:
            die.classList.add('five');
            break;
        case 6:
            die.classList.add('six');
            break;
    }
}

/**
 * Simulates a die throw.
 * 
 * @returns a number between 1 and 6
 */
function throwDie() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * Inform the user that the game is over, and disable the throw button.
 */
function gameOver() {
    targetLabel.innerHTML = 'GAME OVER';
    targetLabel.classList.add('finished');
    throwButton.disabled = true;
}
