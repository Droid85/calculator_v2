let operatorFirst = [];
let operatorSecond = [];
let operand = '';
let resultat = null;
let num1 = null;
let num2 = null;

function Calculator(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.digitsBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    this.calcOperands = ['+', '-', '/', '*'];
    this.calcTag = 'button';
    this.btnDigitClass = 'digit-bts';
    this.btnOperandClass = 'operands-bts';

    this.screenEl = document.querySelector('#screen');
    this.clearBtnEl = document.querySelector('#clr');
    this.digitsBtnEl = document.querySelector('#digits');
    this.operandsBtnEl = document.querySelector('#operands');
    this.resultBtnEl = document.querySelector('#resultBtn');


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

calc = new Calculator();

calc.digitsBtnEl.addEventListener('click', onClickDigitsBtn);

calc.operandsBtnEl.addEventListener('click', onClickOperandsBtn);

calc.clearBtnEl.addEventListener('click', onClearScreen);

calc.resultBtnEl.addEventListener('click', onResultBtn);

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
    const elements = calc.digitsBtnEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            if (!operand) {
                operatorFirst.push(+elements[i].textContent);
                calc.screenEl.textContent = operatorFirst.join('');
                num1 = +operatorFirst.join('');
            } else {
                operatorSecond.push(+elements[i].textContent);
                calc.screenEl.textContent = operatorFirst.join('') + operand + operatorSecond.join('');
                num2 = +operatorSecond.join('');
            }
        }
    }
}

function onClickOperandsBtn(e) {
    const elements = calc.operandsBtnEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            if (operand === '') {
            operand = elements[i].textContent;
            calc.screenEl.textContent = operatorFirst.join('') + operand;
            }
        }
    }
}

function onClearScreen() {
    calc.screenEl.textContent = '';
    operatorFirst = [];
    operatorSecond = [];
    operand = '';
}

createElements(calc.digitsBtnEl, calc.calcTag, calc.digitsBtns, calc.btnDigitClass);

createElements(calc.operandsBtnEl, calc.calcTag, calc.calcOperands, calc.btnOperandClass);

function onResultBtn() {
    resultat = new Calculator(num1, num2);
    if (operand === '+') {
        calc.screenEl.textContent = resultat.sum();
    } else if (operand === '-') {
        calc.screenEl.textContent = resultat.diff();
    } else if (operand === '*') {
        calc.screenEl.textContent = resultat.mult();
    } else if (operand === '/') {
        calc.screenEl.textContent = resultat.divide();
    }
}
