'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let minNumber = 1;
let maxNumber = 100;

let number = Math.trunc(prompt(`Enter an integer between ${minNumber} and ${maxNumber}`));

while (secretNumber !== number) {
    if (number < secretNumber) {
        if (minNumber < number) {
            minNumber = number;
        }
        number = Math.trunc(prompt(`Too low. Enter an integer between ${minNumber} and ${maxNumber}`));
    } else if (number > secretNumber) {
        if (maxNumber > number) {
            maxNumber = number;
        }
        number = Math.trunc(prompt(`Too high. Enter an integer between ${minNumber} and ${maxNumber}`));
    }
}

alert(`You won. Your number is the same as the secret number ${secretNumber}`);