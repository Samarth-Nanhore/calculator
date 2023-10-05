let add = (...arg) => {
  return arg.reduce((total, curr) => total + curr, 0);
};

let subtract = (...arg) => {
  return arg.reduce((total, curr) => total - curr);
};

let multiply = (...arg) => {
  return arg.reduce((total, curr) => total * curr, 1);
};

let divide = (...arg) => {
  return arg.reduce((total, curr) => total / curr);
};

let firstNumber = 50;
let secondNumber = 20;
let operator = "*";

let operate = (operator, firstNumber, secondNumber) => {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else {
    return "No output";
  }
};

console.log(operate(operator, firstNumber, secondNumber));
