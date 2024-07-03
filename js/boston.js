const throwButton = document.querySelector(".throw");
const restartButton = document.querySelector(".restart");
const totalLabel = document.querySelector(".total");
const dice = document.querySelectorAll(".die");
const throwsLabel = document.querySelector('.throws');

let totalSum = 0;
throwButton.disabled = true;
let throwsLeft = 3;
let diceLeft = [0, 1, 2];

throwButton.addEventListener('click', () => {
    console.log(diceLeft.length);
    if (throwsLeft === 3) {
        throwsLeft--;
        let firstThrow = throwDie();
        let secondThrow = throwDie();
        let thirdThrow = throwDie();
    
        changeDieSide(dice[0], firstThrow);
        changeDieSide(dice[1], secondThrow);
        changeDieSide(dice[2], thirdThrow);

        keepFirstDie(firstThrow, secondThrow, thirdThrow);
        throwsLabel.innerHTML = `Throws left: ${throwsLeft}`;

        return;
    }

    if (throwsLeft === 2) {
        throwsLeft--;
        let firstThrow = throwDie();
        let secondThrow = throwDie();

        changeDieSide(dice[diceLeft[0]], firstThrow);
        changeDieSide(dice[diceLeft[1]], secondThrow);

        keepSecondDie(firstThrow, secondThrow);
        throwsLabel.innerHTML = `Throws left: ${throwsLeft}`;

        return;
    }

    let lastThrow = throwDie();
    changeDieSide(dice[diceLeft[0]], lastThrow);
    totalSum += lastThrow;
    gameOver();

    totalLabel.innerHTML = `Total sum: ${totalSum}`;
});

restartButton.addEventListener('click', () => {
    throwButton.disabled = false;

    totalLabel.innerHTML = 'Total sum: 0';
    totalSum = 0
    diceLeft = [0, 1, 2];
    throwsLeft = 3;

    throwsLabel.classList.remove('finished');
    throwsLabel.innerHTML = `Throws left: ${throwsLeft}`;
});

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
    throwsLabel.innerHTML = 'GAME OVER';
    throwsLabel.classList.add('finished');
    throwButton.disabled = true;
}

function keepFirstDie(firstThrow, secondThrow, thirdThrow) {
    if (firstThrow >= secondThrow) {
        if (firstThrow < thirdThrow) {
            totalSum = thirdThrow;
            diceLeft.splice(2, 1);
        } else {
            totalSum = firstThrow;
            diceLeft.splice(0, 1);
        }
    } else {
        if (secondThrow >= thirdThrow) {
            totalSum = secondThrow;
            diceLeft.splice(1, 1);
        } else {
            totalSum = thirdThrow;
            diceLeft.splice(2, 1);
        }
    }
}

function keepSecondDie(firstThrow, secondThrow) {
    if (firstThrow >= secondThrow) {
        totalSum += firstThrow;
        diceLeft.splice(0, 1);
    } else {
        totalSum += secondThrow;
        diceLeft.splice(1, 1);
    }
}