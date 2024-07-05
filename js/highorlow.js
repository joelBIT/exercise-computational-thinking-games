'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let minNumber = 1;
let maxNumber = 100;
let number;

const label = document.querySelector('h2');
const input = document.querySelector('#guess');
const tryButton = document.querySelector('.try');
const restartButton = document.querySelector(".reset");

/**
 * Check if the given input value corresponds to the secret number. If the given value is lower or higher than the secret number,
 * update the minNumber or maxNumber values accordingly.
 */
tryButton.addEventListener('click', () => {
    number = input.value;

    if (number < secretNumber) {
        if (minNumber < number) {
            minNumber = number;
        }
        label.innerHTML = `Too low. Enter an integer between ${minNumber} and ${maxNumber}`;
    } else if (number > secretNumber) {
        if (maxNumber > number) {
            maxNumber = number;
        }
        label.innerHTML = `Too high. Enter an integer between ${minNumber} and ${maxNumber}`;
    } else {
        label.innerHTML = `You won. Your number is the same as the secret number ${secretNumber}`;
        tryButton.disabled = true;
    }
});

/**
 * Resets the game state.
 */
restartButton.addEventListener('click', () => {
    tryButton.disabled = false;
    minNumber = 1;
    maxNumber = 100;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    label.innerHTML = `Enter an integer between 1 and 100:`;
});