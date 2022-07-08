let initialNumber = ''
let secondNumber = ''
let initialOperator = null

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const btns = document.querySelectorAll('.btn')
const clear = document.getElementById('clear')
const pos_neg = document.getElementById('pos_neg')
const equal = document.getElementById('equal')
const screen = document.getElementById('screen')
const results = document.getElementById('results')

numberButtons.forEach((number) => {
    number.addEventListener('click', () => changeScreen(number.textContent))
    // initialNumber = number.textContent
    // results.textContent = initialNumber
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => changeScreen(operator.textContent))
    // initialOperator = operator.textContent
    // console.log(initialOperator)
})

clear.addEventListener('click', clearScreen)

function changeScreen(value) {
    screen.textContent += value
}

function clearScreen() {
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
        default:
            return null
    }
}