const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");
const clear = document.querySelector(".clear");

let firstNumber = "";
let operator = "";
let secondNumber = "";

const handleNumberClick = (event) => {
  const clickedNumber = event.target.innerText;
  if (operator === "") {
    firstNumber += clickedNumber;
    screen.innerText = firstNumber;
  } else {
    secondNumber += clickedNumber;
    screen.innerText = secondNumber;
  }
};
const handleOperatorClick = (event) => {
  operator = event.target.innerText;
  screen.innerText = operator;
};

const handleEqualsClick = () => {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      break;
  }
  screen.innerText = result;
  firstNumber = result;
  secondNumber = "";
  operator = "";
};

const handleClearClick = () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  screen.innerText = "0";
};

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});

equals.addEventListener("click", handleEqualsClick);

clear.addEventListener("click", handleClearClick);
