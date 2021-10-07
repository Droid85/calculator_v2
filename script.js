const digitsBtns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const calcOperands = ['+', '-', '*', '/', '='];
const calcTag = 'button';
let operatorFirst = '';
let operatorSecond = '';

const screenEl = document.querySelector('#screen');
const clearBtnEl = document.querySelector('#clr');
const digitsBtnEl = document.querySelector('#digits');
const operandsBtnEl = document.querySelector('#operands');

digitsBtnEl.addEventListener('click', onClickDigitsBtn);

clearBtnEl.addEventListener('click', onClearScreen);

function createElements(conteiner, tag, content, className) {
    content.forEach(item => {
        let calcBtn = document.createElement(tag);
        calcBtn.id = `${className}-element${Math.random()}`
        calcBtn.textContent = item;
        calcBtn.classList.add(className);
        conteiner.append(calcBtn);
    });
}

function onClickDigitsBtn(e) {
    const elements = digitsBtnEl.children;
    for (let i = 0; i < elements.length; i++) {
        if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
            operatorFirst += elements[i].textContent;
            screenEl.textContent = operatorFirst;
        }
    }
}

function onClearScreen() {
    screenEl.textContent = '';
    operatorFirst = '';
}

createElements(digitsBtnEl, calcTag, digitsBtns, 'digit-bts');

createElements(operandsBtnEl, calcTag, calcOperands, 'operands-bts');

