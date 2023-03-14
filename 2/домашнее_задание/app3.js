  "use strict";

  const num1 = +prompt(`Введите первое число`);
  const num2 = +prompt(`Введите второе число`);
  
  result(num1, num2);
  
  /**
	 * Функция показывает:разность если числа положительные, произведение если числа отрицательные, сумму если числа рзных знаков.
	 * @param {number} num1 
	 * @param {number} num2 
	 */
  function result (num1, num2) {
    if (num1 > 0 && num2 > 0) {
      console.log(num1 - num2); 
    } else if (num1 < 0 && num2 < 0) {
      console.log(num1 * num2);
    } else
      console.log(num1 + num2);
  }