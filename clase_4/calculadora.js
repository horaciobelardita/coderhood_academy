function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
function sustract(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}
function calculate(firstNumber, secondNumber, operator) {
  const operations = [
    ['+', add],
    ['-', sustract],
    ['/', divide],
    ['*', multiply],
  ]
  const validOperations = operations.map(([symbol]) => symbol)
  const isValidOperation = validOperations.includes(operator)
  if (isValidOperation) {
    const [_, fn] = operations.find(([op]) => op === operator)
    return fn(firstNumber, secondNumber)
  }
  return 'Perdón, no conozco ese operador'
}

console.log(calculate(2, 5, '*'))
