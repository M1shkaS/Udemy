'use strict';

// все даты хранятся в мс (с начала 1970 года)

// при передаче без аргумента получаем текущую дату
const now = new Date();
console.log(now);
// при передаче опредёленной даты получаем эту дату в полночь
const now1 = new Date('2022-07-23');
console.log(now1);
// месяцы считаются с нуля (0 - январь), также учитывается именно время по Гринвич
const now2 = new Date(2022, 6, 23, 20);

const now3 = new Date(0); // мс  //1970-01-01T00:00:00.000Z
console.log(now3);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());

// Вышеперечисленные методы возвразают время по местному часовому поясу
console.log(now.getUTCHours());
// Разница в минутах между UTC и местным временем
console.log(now.getTimezoneOffset());
// количество мс с 1970.01.01 00:00
console.log(now.getTime());

// Методы на установление даты (аналогичны вышеперечисленным, но с приставкой set)
// Если, например, укажем больше 23 часов, то этот недочёт автоматически исправится и будут установлены уже последующие дни 
let end = new Date();
end.setFullYear(2024)
console.log(end);

// Парсинг дат
const now5 = new Date('2022-07-23');
// new Date.parse('2022-07-23'); // данный метод ничем не отличается

// Вычитание дат
let start = new Date();

for (let i = 0; i < 100000; i++) {
   let some = i ** 3;
}

let end2 = new Date();
console.log(`Цикл отработал за ${end2 - start} миллисекунд`);

