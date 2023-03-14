"use strict";
/**
 * функция сложения
 * @param {number} num1 //слагаемое
 * @param {number} num2 // слагаемое
 * @returns {number} // сумма
 */
 function sum (num1, num2) {
  return console.log(num1 + num2);
};

function subtraction (num1, num2) {
  return console.log(Math.abs(num1 - num2));
};

function multiplication (num1, num2) {
  return console.log(num1 * num2);
};

function division (num1, num2) {
  return console.log(num1 / num2);
};

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
		case "+":
			return sum(arg1, arg2);
		case "-":
		  return subtraction(arg1, arg2);
		case "*":
			return multiplication (arg1, arg2);
		case "+":
			return division(arg1, arg2);
		default: return console.log("NaN");
	}
}
mathOperation(5, 3, "+");
mathOperation(5, 3, ":)");