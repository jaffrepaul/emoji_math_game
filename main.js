import {emojis} from './data/emojis.js';
import {getRandomEmoji, isCorrectAnswer, solveProblem, normalizeDivisionOperands} from './utils/utils.js';

window.addEventListener('load', () => {
    // Initialize inputs and operation on load
    setRandomInputsAndOperation();

    // Adjust volume for the correct answer sound, original is loud
    document.getElementById('rightAnswer').volume = 0.2;

    // Capture 'N' key & map to 'New Quiz?'
    window.addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.code === 'KeyN') {
            reload();
        }
    });

    // Capture pressing Enter & submit answer
    document.querySelector("#answer").addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector("#try-it").click();
        }
    });

    // Validate the answer input to prevent invalid characters
    // HTML5 inputs accept scientific notation 
    const invalidChars = ["+", "e", "E"];
    document.getElementById("answer").addEventListener("input", function (e) {
        e.target.value = e.target.value.split('').filter(char => !invalidChars.includes(char)).join('');
    });

    // Put focus back in answer field after operation or input change
    document.addEventListener("input", setFocusToAnswerBox);

    // Put focus back in answer field after answer submitted
    document.querySelector("#try-it").addEventListener("click", (event) => {
        event.preventDefault();
        setFocusToAnswerBox();
    });

    document.getElementById('try-it').addEventListener('click', () => solveProblem(getCurrentValues, showValue, getRandomEmoji, emojis));
    document.getElementById('new-quiz').addEventListener('click', reload);
});

// Move the setFocusToAnswerBox function definition outside of window load event to make it global
function setFocusToAnswerBox() {
    document.getElementById("answer").focus();
}

function reload() {
    setRandomInputsAndOperation();
    clearResults();
    document.getElementById("answer").value = '';
    setFocusToAnswerBox();
}

function setRandomInputsAndOperation() {
    const operationsSelector = document.getElementById('operations');
    const operations = operationsSelector.getElementsByTagName('option');
    const operationsIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[operationsIndex].value;

    const {num1, num2} = normalizeDivisionOperands(operation);

    document.getElementById('input0').value = num1;
    document.getElementById('input1').value = num2;
    operationsSelector.selectedIndex = operationsIndex;
}

function getCurrentValues() {
    const x = document.getElementById("operations").selectedIndex;
    return {
        num1: document.getElementById("input0").value,
        num2: document.getElementById("input1").value,
        operation: document.getElementsByTagName("option")[x].value,
        submittedAnswer: Number(document.getElementById("answer").value),
    };
}

function playSound(val) {
    isCorrectAnswer(val) ?
        document.getElementById("rightAnswer").play() :
        document.getElementById("wrongAnswer").play();
}

function displayCorrectAnswer(val) {
    clearResults();
    const target = document.querySelector('#result-content');
    const span = document.createElement('div');
    span.id = 'correctAns';
    span.className = 'result-message';
    span.textContent = val;
    target.appendChild(span);
    playSound(val);
}

function displayInCorrectAnswer(val) {
    clearResults();
    const target = document.querySelector('#result-content');
    const span = document.createElement('div');
    span.id = 'inCorrectAns';
    span.className = 'result-message';
    span.textContent = val;
    target.appendChild(span);
    playSound(val);
}

function clearResults() {
    const correctAns = document.getElementById('correctAns');
    const inCorrectAns = document.getElementById('inCorrectAns');
    if (correctAns) correctAns.remove();
    if (inCorrectAns) inCorrectAns.remove();
}

function showValue(val) {
    if (isCorrectAnswer(val)) displayCorrectAnswer(val);
    else displayInCorrectAnswer(val);
}