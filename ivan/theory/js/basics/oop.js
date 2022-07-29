"use strict";

//Обьект самая главная структура. Всё идёт от него
//Любые конструкции прототипно наследуются от обьекта

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

const soldier = {
   health: 400,
   armor: 100,
   sayHello: function () {
      console.log("Hello!");
   }
};

const jonh = {
   health: 100
};

//Устаревший формат
jonh.__proto__ = soldier;
console.log(jonh.armor);
jonh.sayHello();

// Создаём, наследуя от солдата
const alex = Object.create(soldier);

// Новый формат
// Устанавливаем первому аргументу в качестве прототипа второй аргумент
Object.setPrototypeOf(jonh, soldier);

