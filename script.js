let initialNumber = ''
let secondNumber = ''
let initialOperator = null

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clear = document.getElementById('clear')
const del = document.getElementById('delete')
const power = document.getElementById('power')
const decimal = document.getElementById('decimal')
const pos_neg = document.getElementById('pos_neg')
const equal = document.getElementById('equal')
const screen = document.getElementById('screen')
const calculation = document.getElementById('calculation')
const results = document.getElementById('results')

results.textContent = '0'

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        changeScreen(number.textContent)
    })   
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => changeScreen(operator.textContent))
})

equal.addEventListener('click', evaluate)
clear.addEventListener('click', clearScreen)
del.addEventListener('click', _delete)


function changeScreen(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
        if (results.hasAttribute('class', 'start_up')) {
            results.classList.remove('start_up')
        }
        if (initialOperator === null) {
            initialNumber = calculation.textContent    
        }
        initialOperator = `${value}`
        results.textContent =  (initialNumber + ' ' + initialOperator)
        calculation.textContent = ''
    } else {
        calculation.textContent += value
        if (initialOperator !== null) {
            secondNumber = calculation.textContent
        }
    }
}

function evaluate() {
    calculation.textContent = ''
    results.textContent = operate(initialOperator, initialNumber, secondNumber)
}
function clearScreen() { 
    calculation.textContent = ''
    results.classList.add('start_up')
    results.textContent = '0'
    initialNumber = ''
    secondNumber = ''
    initialOperator = null
}
function _delete() {
    calculation.textContent = calculation.textContent
        .toString()
        .slice(0, -1)
}
function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
function _power(num1, num2) {
    return num1 ** num2
}
function changeSign(num1) {
    return -num1
}

function operate(operator, num1, num2) {
    floatnum1 = parseFloat(num1)
    floatnum2 = parseFloat(num2)
    switch (operator) {
        case '+':
            initialNumber = add(floatnum1, floatnum2)
            return (initialNumber + ' ' +initialOperator)
        case '-':
            initialNumber = subtract(floatnum1, floatnum2)
            return (initialNumber + ' ' +initialOperator)
        case '*':
            initialNumber = multiply(floatnum1, floatnum2)
            return (initialNumber + ' ' +initialOperator)
        case '/':
            initialNumber = divide(floatnum1, floatnum2)
            return (initialNumber + ' ' +initialOperator)
        case '^':
            initialNumber = _power(floatnum1, floatnum2)
            return (initialNumber + ' ' +initialOperator)
        case '+/-':
            return changeSign(floatnum1)
        default:
            return null
    }
}