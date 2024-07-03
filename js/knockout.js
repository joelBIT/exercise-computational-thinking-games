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

throwButton.addEventListener('click', () => {
    let firstThrow = throwDie();
    let secondThrow = throwDie();

    changeDieSide(die1, firstThrow);
    changeDieSide(die2, secondThrow);

    let throwSum = firstThrow + secondThrow;

    if (throwSum == knockNumber) {
        totalSum -= throwSum;
    } else {
        totalSum += throwSum;
    }

    totalLabel.innerHTML = `Total sum: ${totalSum}`;

    if (totalSum >= targetSum) {
        gameOver();
        return;
    }
});

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

function getKnockNumber() {
    while (!knockNumbers.includes(knockNumber)) {
        knockNumber = prompt('Enter a knock out number (either 6, 7, 8, or 9)');
    }
}

function getTargetNumber() {
    while (isNaN(targetSum)) {
        targetSum = prompt('Enter a target point for when the game is over');
    }

    targetSum = Math.trunc(targetSum);
}

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

function throwDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function gameOver() {
    targetLabel.innerHTML = 'GAME OVER';
    targetLabel.classList.add('finished');
    throwButton.disabled = true;
}
