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
    }
}