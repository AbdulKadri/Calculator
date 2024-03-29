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
const _error = document.getElementById('error')

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
decimal.addEventListener('click', addDecimal)
pos_neg.addEventListener('click', changeSign)
window.addEventListener('keydown', keyboardInput)

function changeScreen(value) {
    _error.textContent = ''
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
        if (results.hasAttribute('class', 'start_up')) {
            results.classList.remove('start_up')
        }
        if (initialOperator === null) {
            initialNumber = calculation.textContent    
        }
        // if (secondNumber !== '') {
        //     evaluate()
        // }
        initialOperator = `${value}`
        results.textContent =  (initialNumber + ' ' + initialOperator)
        calculation.textContent = ''
    } else {
        calculation.textContent += value
        calculation.textContent = calculation.textContent.substring(0, 10)
        if (calculation.textContent.length == 10) {
            _error.textContent = 'You have reached the limit of the display'
        }
        if (initialOperator !== null) {
            secondNumber = calculation.textContent
        }
    }
}
function evaluate() {
    calculation.textContent = ''
    if (secondNumber === '') {
        _error.textContent = 'There needs to be two operands and an operator to work!'
        clearScreen()
    } else if (initialOperator === '/' && secondNumber == 0) {
        _error.textContent = 'You can\'t divide by 0!'
        clearScreen()
    } else {
        results.textContent = operate(initialOperator, initialNumber, secondNumber)
    }
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
function addDecimal() {
    if (calculation.textContent.includes('.')) {
        return (_error.textContent = 'Your number already contains a decimal')
    }
    calculation.textContent += '.'
}
function changeSign() {
    num = parseFloat(calculation.textContent)
    if (num > 0) {
        calculation.textContent = '-' + calculation.textContent
        secondNumber = calculation.textContent
    } else {
        calculation.textContent = calculation.textContent.substring(1)
    }
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
        // case '+/-':
        //     return changeSign(floatnum1)
        default:
            return null
    }
}

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) changeScreen(e.key)
    if (e.key === '.') addDecimal()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') _delete()
    if (e.key === 'Escape') clearScreen()
    if (e.key === '+' || e.key == '-' || e.key === '*' || e.key === '/' || e.key === '^')
        changeScreen(e.key)
}