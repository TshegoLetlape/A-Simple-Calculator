let currentInput = "";
let currentOperator = "";
let firstOperand = "";
let awaitingNextNumber = false;

function appendNumber(number) {
  if (awaitingNextNumber) {
    currentInput = number;
    awaitingNextNumber = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  firstOperand = currentInput;
  awaitingNextNumber = true;
}

function calculate() {
  const secondOperand = currentInput;
  if (currentOperator === "+") {
    currentInput = add(parseFloat(firstOperand), parseFloat(secondOperand));
  } else if (currentOperator === "-") {
    currentInput = subtract(
      parseFloat(firstOperand),
      parseFloat(secondOperand)
    );
  } else if (currentOperator === "*") {
    currentInput = multiply(
      parseFloat(firstOperand),
      parseFloat(secondOperand)
    );
  } else if (currentOperator === "/") {
    currentInput = divide(parseFloat(firstOperand), parseFloat(secondOperand));
  }
  currentOperator = "";
  firstOperand = "";
  awaitingNextNumber = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  firstOperand = "";
  awaitingNextNumber = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}
