"use strict";

const arr = [0, 1, 2, 3, 6, 8];

// function принимает в себя 3 аргумента (эл-т массива, его номер по порядку, ссылка на перебираемый массив)
arr.forEach((item, idx, arr) => {
   console.log(`${idx}: ${item} is contained inside of ${arr}`)
});

//Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, String, Map, Set, объект аргументов и подобных),Тут можно использовать break и continue , а в forEach нет 
for (let value of arr) {
   if (value == 3) continue;
   console.log(value);
}

console.log(arr);
// Удаляет последний элемент из массива.
arr.pop();
console.log(arr);
// Добавляет элемент в конце массива.
arr.push(10);
console.log(arr);

const str2 = prompt("", "");
// Делит строку на элементы массива, в качестве аргумента указывается символ, через который в строке перечисляются элементы
const products = str2.split(", ");
// Регистр влияет на сортировку. Заглавные буквы будут "выше" по значимости. Нужно смотреть юникод
products.sort();
console.log(products.join(";\n")); // обратная операция

//filter. Возвращает ток те элементы, которые удов условию
const names = ['Ivan', 'Alex', 'Misha', 'Petrushka', 'Ann'];
const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames);

//map. Преоразовывает элементы
let answers = ['miaDASDA', 'Mdsdads', 'dsaSA'];
const lowerAnswers = answers.map(item => item.toLowerCase());
answers = answers.map(item => item.toLowerCase());

console.log(lowerAnswers);
console.log(answers);

//every/some
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.some(num => num > 5));
console.log(numbers.every(num => num > 1));

//reduce
const arrNumbers = [1, 2, 6, 4, 90, 56];
const resultNum = arrNumbers.reduce((sum, current) => sum + current, 3);
console.log(resultNum);

const arrFruits = ['apple', 'milk', 'beer'];
const resultFrit = arrFruits.reduce((sum, current) => sum + ', ' + current);
console.log(resultFrit);


//Метки
let str = '';

loop1:
for (let i = 0; i < 5; i++) {
   if (i === 1) {
      continue loop1;
   }
   str = str + i;
}

console.log(str);
// expected output: "0234"

let i, j;

loop1:
for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
      if (i === 1 && j === 1) {
         break loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}


for (let i = 5; i <= 10; i++) {
   console.log(i)
}

for (let i = 20; i >= 10; i--) {
   if (i == 13) break;
   console.log(i);//...14
}
