"use strict"

// BigInt нельзя использовать с встроенными командами Math
// Нельзя смешивать в операциях BigInt и обычные числа (за исключением операторов сравнения)
// Если BigInt, заходящий за рамки Number.MAX_SAFE_INTEGER, преобразовать в Number, то избыточная часть будет отброшена
// Спокойно можно использовать + * - ** % а также побитовые операторы
// Деление уже сложнее

// С n на конце получаем тип данныхbigInt
const bigInt = 1999999999999999999999999999999999991n;
// Аналогично, но в эту команду также можем передавать и строки
const sameBigInt = BigInt(123333331231231231231231231231212347190274091);
// 2^53 - 1/ Максимальное число с которым умеет работать js
console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof (bigInt));
console.log(typeof (sameBigInt));

// Нельзя смешивать в операциях BigInt и обычные числа (за исключением операторов сравнения)
console.log(5n + 3); // выдаст ошибку
// BigInt нельзя использовать с встроенными командами Math
console.log(Math.round(5n)); // выдаст ошибку

//Можно
console.log(14n + 5n);
console.log(7n / 3n);
console.log(2n > 1);
console.log(2n > 5);

// == Работает с приведение типов, а === без приведения типов
console.log(2n == 2);
console.log(2n === 2); // false, т.к.  разные типы данных

// Способ сложения BigInt с обычным числом 
let bigInt1 = 1n;
let number = 2;
console.log(bigInt1 + BigInt(number));
// или наоборот
console.log(Number(bigInt1) + number);
console.log(+bigInt1 + number);  // Не сработает