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

function multiplication  (num1, num2) {
  return console.log(num1 * num2);
};

function division (num1, num2) {
  return console.log(num1 / num2);
};

sum (1,2);
subtraction (10,15);
multiplication (5, 10);
division (20,4);