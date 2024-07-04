'use strict';

/**
 * Iterate through the numbers 1 to 100 and print numbers divisible with 3 or 5, or both.
 */
for (let i = 1; i < 101; i++) {
    let text = '';

    if (i % 3 === 0) {
        text = 'Fizz';
    }

    if (i % 5 === 0) {
        text += 'Buzz';
    }

    if (text) {
        console.log(text);
        addElementToDOM(i, text);
    }
}

/**
 * Print the divisible number and its corresponding text to the DOM.
 * 
 * @param {*} number the number that is divisible with 3 or 5, or both.
 * @param {*} text the corresponding text which is either "Fizz", "Buzz" or "FizzBuzz"
 */
function addElementToDOM(number, text) {
    const node = document.createElement("h2");
    const textnode = document.createTextNode(`${number} is equal to ${text}`);
    node.appendChild(textnode);
    document.getElementById("board").appendChild(node);
}