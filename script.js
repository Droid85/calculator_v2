const digitsBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const calcOperands = ['+', '-', '/', '*'];
const calcTag = 'button';
let operatorFirst = [];
let operatorSecond = [];
let operand = '';
let resultat = 0;
let num1 = 0;
let num2 = 0;

function Calculator(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.sum = function() {
        return this.numberOne + this.numberTwo;
    }
    this.diff = function() {
        return this.numberOne - this.numberTwo;
    }
    this.mult = function() {
        return this.numberOne * this.numberTwo;
    }
    this.divide = function() {
        return this.numberOne / this.numberTwo;
    }
}

const screenEl = document.querySelector('#screen');
const clearBtnEl = document.querySelector('#clr');
const digitsBtnEl = document.querySelector('#digits');
const operandsBtnEl = document.querySelector('#operands');
const resultBtnEl = document.querySelector('#resultBtn');

digitsBtnEl.addEventListener('click', onClickDigitsBtn);

operandsBtnEl.addEventListener('click', onClickOperandsBtn);

clearBtnEl.addEventListener('click', onClearScreen);

resultBtnEl.addEventListener('click', onResultBtn);

function createElements(conteiner, tag, content, className) {
    content.forEach(item => {
        let calcBtn = document.createElement(tag);
        calcBtn.id = `${className}-element${Math.random()}`;
        calcBtn.textContent = item;
        calcBtn.classList.add(className);
        conteiner.append(calcBtn);
    });
}

function onClickDigitsBtn(e) {
    const elements = digitsBtnEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            if (!operand) {
                operatorFirst.push(+elements[i].textContent);
                screenEl.textContent = operatorFirst.join('');
                num1 = +operatorFirst.join('');
            } else {
                operatorSecond.push(+elements[i].textContent);
                screenEl.textContent = operatorFirst.join('') + operand + operatorSecond.join('');
                num2 = +operatorSecond.join('');
            }
        }
    }
}

function onClickOperandsBtn(e) {
    const elements = operandsBtnEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            if (operand === '') {
            operand = elements[i].textContent;
            screenEl.textContent = operatorFirst.join('') + operand;
            }
        }
    }
}

function onClearScreen() {
    screenEl.textContent = '';
    operatorFirst = [];
    operatorSecond = [];
    operand = '';
}

createElements(digitsBtnEl, calcTag, digitsBtns, 'digit-bts');

createElements(operandsBtnEl, calcTag, calcOperands, 'operands-bts');

function onResultBtn() {
    resultat = new Calculator(num1, num2);
    if (operand === '+') {
        screenEl.textContent = resultat.sum();
    } else if (operand === '-') {
        screenEl.textContent = resultat.diff();
    } else if (operand === '*') {
        screenEl.textContent = resultat.mult();
    } else if (operand === '/') {
        screenEl.textContent = resultat.divide();
    }
}
