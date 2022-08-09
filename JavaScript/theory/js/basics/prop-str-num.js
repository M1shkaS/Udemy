'use strict';

//Методы и свойства строк и чисел
const stringTest = 'test ';
console.log(stringTest.toLocaleUpperCase);//В верхний регистр переводит
console.log(stringTest.toLocaleUpperCase);//В нижний регистр переводит
let fruit = 'Some fruit'
// Возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
console.log(fruit.indexOf("fruit"));
const logg = 'Hello world';
// Извлекает часть строки и возвращает новую строку без изменения оригинальной строки. Не включает последний элемент
console.log(logg.slice(6, 11));
//Вырезается с 6 элемента и до конца.
console.log(logg.slice(6));
//Ещё поддерживает отрицательные числа
console.log(logg.slice(-5, -1));//Начинаем с -5 символа справа и заканчиваем -1 тоже справа
//Также как и slice только тут не поддерживаются отрицательные значения
console.log(logg.substring(6, 11));
//Вторым аргументом говорим, сколько нужно вырезать
console.log(logg.substr(6, 3));

const probel = ' mimi '
console.log(probel);
//Убирает пробелы с самого конца и начала 
console.log(probel.trim());

const num = 12.2;
//Округляет до ближайшего целого
console.log(Math.round(num));

const test = '12.2px';
//Переводит число в другое систему исчисления
console.log(parseInt(test));//12 и сразу числовой тип данных
console.log(parseFloat(test));//12.2 

const str = 'abcdefghijklmnopqrstuvwxyz';
console.log(str.length);
for (let i = 0; i < str.length; i++) {
   console.log(` ${str[i]} =  ${str[i].charCodeAt(0)}`);
}

// .indexOf() - поиск индекса, с которого начинается подстрока (При отсутствии возвращает -1)
// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
//Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round
