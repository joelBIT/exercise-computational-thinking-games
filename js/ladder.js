'use strict';

const throwButton = document.querySelector(".throw");
const restartButton = document.querySelector(".restart");
const expectedLabel = document.querySelector(".expected");
const throwsLabel = document.querySelector(".throws");
const die = document.querySelector(".die");

let throws = 0;
let expected = 1;

/**
 * Reset the game state.
 */
restartButton.addEventListener('click', () => {
    throwButton.disabled = false;

    throwsLabel.innerHTML = 'Throws: 0';
    throws = 0;

    expectedLabel.classList.remove('finished');
    expectedLabel.innerHTML = 'Expected: 1';
    expected = 1;
});

/**
 * Throw a die.
 */
throwButton.addEventListener('click', () => {
    throws++;
    throwsLabel.innerHTML = `Throws: ${throws}`;

    let dots = throwDie();
    changeDieSide(dots);

    checkIfLadderAchieved(dots);
});

/**
 * Change the die side image to that of the thrown die.
 * 
 * @param {*} die the die element
 * @param {*} dots the number of dots of the die side
 */
function changeDieSide(dots) {
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
 * Compare dots with the expected value. If they are the same, increment the expected dot value. If both dots and the expected value
 * is 6, then a ladder has been achieved and the game is over.
 * 
 * @param {*} dots the number of dots of the die in the most recent throw.
 */
function checkIfLadderAchieved(dots) {
    if (dots === expected && expected < 6) {
        expected++;
        expectedLabel.innerHTML = `Expected: ${expected}`;
    }

    if (dots === expected && (expected === 6)) {
        gameOver();
    }
}

/**
 * Inform the user that the game is over, and disable the throw button.
 */
function gameOver() {
    expectedLabel.innerHTML = 'GAME OVER';
    expectedLabel.classList.add('finished');
    throwButton.disabled = true;
}