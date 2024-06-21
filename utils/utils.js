function modernFisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // swap in place
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getRandomEmoji(array) {
    // shuffle array, pull out 3 random elements & join 
    // const shuffled = array.sort(() => 0.5 - Math.random()).slice(0, 3).join('  ');

    // more optimized version of ☝️
    const shuffledArray = modernFisherYatesShuffle(array);
    const emoji = shuffledArray[0];
    if (window.innerWidth <= 768) {
        return emoji; // Return one emoji for small screens
    }
    return shuffledArray.slice(0, 3).join('   ');
}

export const isCorrectAnswer = val => !val.includes('!');

export function solveProblem(getCurrentValues, showValue, getRandomEmoji, emojis) {
    const {num1, num2, submittedAnswer, operation} = getCurrentValues();

    if (eval(`${num1} ${operation} ${num2}`) === submittedAnswer) {
        showValue(getRandomEmoji(emojis));
    } else {
        showValue('Try again! 🤪');
    }
}

export function normalizeDivisionOperands(operation) {
    // normalize division problems to never have remainder
    let num1, num2;
    if (operation === '/') {
        num2 = Math.floor(Math.random() * 10) + 1; // num2 should not be 0
        num1 = num2 * (Math.floor(Math.random() * 10) + 1); // num1 is a multiple of num2
    } else {
        num1 = Math.round(Math.random() * 20);
        num2 = Math.round(Math.random() * 10);
    }
    return {num1, num2};
}
