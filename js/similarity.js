'use strict';

const firstWord = prompt('Enter a word');
const secondWord = prompt('Enter another word');
const letters = [];

let numberOfSimilarLetters = 0;
let iterations = 0;

if (firstWord.length > secondWord.length) {
    iterations = secondWord.length;
} else {
    iterations = firstWord.length;
}

for (let i = 0; i < iterations; i++) {
    if (firstWord[i] === secondWord[i]) {
        numberOfSimilarLetters++;
        letters.push(firstWord[i]);
    }
}

alert(`There are ${numberOfSimilarLetters} letters (${letters}) occurring in the same position of the words ${firstWord} and ${secondWord}`);