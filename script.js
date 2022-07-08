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
const results = document.getElementById('results')

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        changeScreen(number.textContent)
        changeResults(number.textContent)
    })   
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => changeScreen(operator.textContent))
})

equal.addEventListener('click', evaluate)
clear.addEventListener('click', clearScreen)


function changeScreen(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        initialNumber = screen.textContent
        initialOperator = `${value}`
        screen.textContent += (' ' + `${value}` + ' ')
    } else {
        screen.textContent += (`${value}`)
    }
}

function evaluate() {
    empty()
    screen.textContent = operate(initialOperator, initialNumber, secondNumber)
}

function changeResults(value) {
    initialNumber += value
}

function clearScreen() {
    screen.textContent = ''
    initialNumber = ''
    secondNumber = ''
    initialOperator = null
}

function empty() {
    screen.textContent = ''
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
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
        case '^':
            return _power(num1, num2)
        case '+/-':
            return changeSign(num1)
        default:
            return null
    }
}