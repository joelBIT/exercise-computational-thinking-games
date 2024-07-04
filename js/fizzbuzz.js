'use strict';

const chooseButton = document.querySelector('.choose');
let min;
let max;

/**
 * Let user choose min and max values to iterate between.
 */
chooseButton.addEventListener('click', () => {
    min = prompt('Enter min value');
    max = prompt('Enter max value');
    removePreviousPrint();
    iterateMinMax();
});

/**
 * Iterate through the numbers min to max and print numbers divisible with 3 or 5, or both.
 */
function iterateMinMax() {
    for (let i = min; i <= max; i++) {
        let text = '';
    
        if (i % 3 === 0) {
            text = 'Fizz';
        }
    
        if (i % 5 === 0) {
            text += 'Buzz';
        }
    
        if (text) {
            addElementToDOM(i, text);
        }
    }
}

/**
 * Print the divisible number and its corresponding text to the DOM.
 * 
 * @param {*} number the number that is divisible with 3 or 5, or both.
 * @param {*} text the corresponding text which is either "Fizz", "Buzz" or "FizzBuzz"
 */
function addElementToDOM(number, text) {
    let node = document.createElement("h2");
    node.appendChild(document.createTextNode(`${number} is equal to ${text}`));
    document.querySelector('.board').appendChild(node);
}

/**
 * Removes the elements that were added to the DOM in the previous print.
 */
function removePreviousPrint() {
    document.querySelector('.board').remove();
    const section = document.createElement("section");
    section.classList.add('board');
    document.querySelector('body').appendChild(section);
}