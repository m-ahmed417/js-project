"use strict";

var screen = document.querySelector(".screen");
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var equals = document.querySelector("#equal");
var clear = document.querySelector(".clear");
var firstNumber = "";
var operator = "";
var secondNumber = "";

var handleNumberClick = function handleNumberClick(event) {
  var clickedNumber = event.target.innerText;

  if (operator === "") {
    firstNumber += clickedNumber;
    screen.innerText = firstNumber;
  } else {
    secondNumber += clickedNumber;
    screen.innerText = secondNumber;
  }
};

var handleOperatorClick = function handleOperatorClick(event) {
  operator = event.target.innerText;
  screen.innerText = operator;
};

var handleEqualsClick = function handleEqualsClick() {
  var result;

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

var handleClearClick = function handleClearClick() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  screen.innerText = "0";
};

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberClick);
});
operators.forEach(function (operator) {
  operator.addEventListener("click", handleOperatorClick);
});
equals.addEventListener("click", handleEqualsClick);
clear.addEventListener("click", handleClearClick);