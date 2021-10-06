const digitsBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const calcOperands = ['+', '-', '*', '/', '='];
const calcTag = 'button';

const screenEl = document.querySelector('#screen');
const clearBtnEl = document.querySelector('#clr');
const digitsBtnEl = document.querySelector('#digits');
const operandsBtnEl = document.querySelector('#operands');

function createElements(conteiner, tag, content, className) {
    content.forEach(item => {
        let calcBtn = document.createElement(tag);
        calcBtn.textContent = item;
        calcBtn.classList.add(className);
        conteiner.append(calcBtn);
    });
}

createElements(digitsBtnEl, calcTag, digitsBtns, 'digit-bts');

createElements(operandsBtnEl, calcTag, calcOperands, 'operands-bts');

