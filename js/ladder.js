'use strict';

const throwButton = document.querySelector(".throw");
const restartButton = document.querySelector(".restart");
const expectedLabel = document.querySelector(".expected");
const throwsLabel = document.querySelector(".throws");
const die = document.querySelector(".die");

let throws = 0;
let expected = 1;

restartButton.addEventListener('click', () => {
    throwButton.disabled = false;

    throwsLabel.innerHTML = 'Throws: 0';
    throws = 0;

    expectedLabel.classList.remove('finished');
    expectedLabel.innerHTML = 'Expected: 1';
    expected = 1;
});

throwButton.addEventListener('click', () => {
    throws++;
    throwsLabel.innerHTML = `Throws: ${throws}`;

    let dots = Math.floor(Math.random() * 6) + 1;
    changeDieSide(dots);

    if (dots === expected && expected < 6) {
        expected++;
        expectedLabel.innerHTML = `Expected: ${expected}`;
    }

    if (dots === expected && (expected === 6)) {
        expectedLabel.innerHTML = 'GAME OVER';
        expectedLabel.classList.add('finished');
        throwButton.disabled = true;
    }
});

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