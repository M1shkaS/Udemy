"use strict";

const options = {
   name: 'test',
   with: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function () {
      console.log("Test");
   }
};

options.makeTest();


let counter = 0;
for (let key in options) {
   if (typeof (options[key]) === "object") {
      for (let i in options[key]) {
         console.log(`Property ${i} of object ${key} equils "${options[key][i]}"`);
      }
      counter++;
   } else {
      console.log(`Property ${key} equils "${options[key]}"`);
      counter++;
   }
}
console.log(`\nObject options summary contains ${counter} properties.`);

//Данный метод на основании объекта создаёт массив
console.log(Object.keys(options));
console.log(Object.keys(options).length);

// Деструктуризация объекта
const { border, bg } = options.colors;
console.log(border);
console.log(options.name);
delete options.name;
console.log(options);

// Если хочется присвоить свойство объекта в переменную с другим именем, например, чтобы свойство options.width пошло в переменную w, то можно указать соответствие через двоеточие, вот так:
const { border: bd } = options.colors;
console.log(bd);

//Если каких-то свойств в объекте нет, можно указать значение по умолчанию через знак равенства =, вот так;
let opt = {
   title: "Меню"
};

let { width = 100, height = 200, title } = opt;
console.log(title); // Меню
console.log(width); // 100
console.log(height); // 200

//Деструктуризация массива
let [firstName, lastName] = ["Илья", "Кантор"];

const arr = [1, 2, 3, 4]
//Будет 1
let [fisrtm] = arr;
console.log(fisrtm);

// Object.is() определяет, являются ли два значения различимыми (одинаковыми)

Object.is('foo', 'foo');// true
Object.is(window, window); // true

Object.is('foo', 'bar'); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Специальные случаи
Object.is(0, -0);// false
Object.is(-0, -0);// true
Object.is(NaN, 0 / 0);// true


const obj = {
   a: 5,
   b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);
// obj меняется вместе с copy, т.к. мы скопировали в copy ссылку на obj, а не структуру obj

// копирование объекта через цикл
function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      if (typeof (mainObj[key]) == "object") {
         objCopy[key] = copy(mainObj[key]);
      } else {
         objCopy[key] = mainObj[key];
      }
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 20;
// console.log(numbers);
// console.log(newNumbers);

const add = {
   d: 17,
   e: 20
};

//assign делает ток поверхностое копирование
console.log(Object.assign(numbers, add)); //соединение объектов. Возвращает новую структуру 
const clone = Object.assign({}, add); // получаем копию объекта
clone.d = 100;
console.log(add);
console.log(clone);
//for in при переборе массивов и строк может случиться так, что перебор будет идти не по порядку

// for of проходится по значениям перебираемого объекта (строгое соответствие порядка в переборе)
// Также из перебора исключаются все унаследованные методы
// Объекты являются итерируемыми (перебираемыми) только если у них есть значение Symbol(Symbol.iterator)
// Перебираемые: Массивы, строки, типизированные массивы, SAT, MAP и типизированные DOM-коллекции
// нельзя использовать break и continue

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // создание копии массива
newArray[2] = 'asdasd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
   blogs = ['wordpress', 'livejournal', 'blogger'],
   //spread() разворачивает структуру на её переменные 
   internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array]; // очередной способ копирования массива, но только поверхностный

const q = {
   one: 1,
   two: 2
};

const newObj = { ...q }; // способ копирования объектоб, но только поверхностный


const salaries = {
   john: 500,
   ivan: 1000,
   ann: 5000,
   sayHello: function () {
      console.log('Hello');
   }
};

// salaries[Symbol.iterator] = function() {
//     return {
//         next() {
//         }
//     };
// }; // Позволяет в дальнейшем перебирать этот объект

salaries[Symbol.iterator] = function () {
   return {
      current: this.john,
      last: this.ann,
      next() {
         if (this.current < this.last) {
            this.current += 500;
            return { done: false, value: this.current }; // следующее значение на следующий перебор, которое на 500 больше
         } else {
            return { done: true };
         }
      }
   };
}; // Позволяет в дальнейшем перебирать этот объект

for (let res of salaries) {
   console.log(res);
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

//!JSON
// JS object notation
// Текстовый формат обмена и хранения данных
// Набор пар ключ-значение
// В качестве значений могут быть объекты, массивы, числа, строки, лог.значение или null
// В итоге можем получть небольшую реляционную бд
// Главное правило - все сущности д/б записаны в двойные кавычки
// Ранее для общения с сервером использовался формат XML

// const person = {
//     name: 'Alex',
//     tel: '+744444444'
// }; // объект необходимо передать на сервер

// console.log(JSON.stringify(person)); // Преобразование для передачи на сервер
// console.log(JSON.parse(JSON.stringify(person))); // Обратное Преобразование для передачи с сервера

//Можно делать глубокое копирование
//const clone = JSON.parse(JSON.stringify(persone));