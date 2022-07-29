'use strict';

// Функции конструкторы (классы удобнее(изначально их не было))
// Нужны для создания однотипных обьектов

// const func = new Function(3);
// console.log(func);

// Функция-конструктор (с её помощью можжем создавать новых пользователей) 
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

const ivan = new User('ivan', 1)
// ilivanya.exit();

// Все потомки, объявленные после объявления метода, унаследуют его
User.prototype.exit = function () {
   console.log(`User ${this.name} has left`);
};


const ilya = new User('Ilya', 20)

ilya.exit();

console.log(ivan);
console.log(ilya);
ivan.hello()
ilya.hello()

// Всё вышеперечисленное устарело. Нынче для данных нужд используются классы, которые, по сути, обладают тем же функционалом
// Классы появились только в ES6

// Функция-конструктор (с её помощью можжем создавать новых пользователей)
class UserClass {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
   }
   hello() {
      console.log(`Hello, ${this.name}`);
   }
   exit() {
      console.log(`User ${this.name} has left`);
   }
}


// Функции могут вызываться 4-мя разными способами
//1) Просто вызов
//this = window, но если use strict - undefined
function showThis() {
   console.log(this);
}
showThis(); // При нестрогом режиме возвращает глобальный объект window
//Иначе получаем undefined

// Практическая задача с собеседований
// При строгом режиме this также возвращает undefined или this дажке внутри функции
function showThis(a, b) {
   console.log(this);

   function sum() {
      console.log(this);
      return a + b; // this возвращает undefined, вместо него просто воспользуемся замыканием функций
   }

   console.log(sum());
}
showThis(4, 5);


// 2) Метод объекта
//Контекст вызова объекта - сам объект
const obj = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this);
   }
};
obj.sum(); // если используем метод внутри объекта, то контекст вызова всегда будет ссылаться на этот объект


// 2.1) Относится к первому пункту
const obj2 = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this);
      function shout() {
         console.log(this);//будет в зависимости от наличия use strict  undefiend, window
      }
      shout();
   }
};
obj2.sum();

// 3) Через конструкторы (оператор new) и классы
// Внутри функций-конструкторов контекст вызова - новосозданный объект (даже внутри методов этого объекта)
// This в конструкторах и классах - это новый экземпляр объекта
// function User(name, id) { // Функция-конструктор (с её помощью можжем создавать новых пользователей)
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// 4) Ручное присвоение this любой функции
// call, apply, bind
function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'John'
};

sayName.call(user, 'Smith'); // внутрь передаём контекст вызова, который хотим передать в эту функцию // следующие аргументы - аргументы вызова функции
sayName.apply(user, ['Smith']); // функции не отличаются // аргументы функции передаются в массиве

// // 4.3)
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // создает НОВУЮ функцию с нужным контекстом
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelectorAll('button');
btn.forEach(item => {
   item.addEventListener('click', function () { // при использовании стрелочной функции контекст вызовается теряется (можно использовать в таком случае e.target)
      console.log(this); // контекст вызова - элемент, на котором произошло событие (если cb-функция function(){})
      this.classList.toggle('red');
      this.classList.toggle('aquamarine');
   });
});

// Однако у стрелочной функции нет своего контекста вызова (она всегда будет его брать у своего родителя)

let obj3 = {
   num: 5,
   sayNumber: function () {
      const say = () => {
         console.log(this);
      };

      say();
   }
};
// не будь функция стрелочной this возвращал бы undefined, однако в стрелочной функции this возвращает obj
obj3.sayNumber();
// Ctrl + Shift + L - выделить все вхождения выделенной строки
const double = a => a * 2;
console.log(double(4));

//1) Если функция: this = window, но если use strict - undefined
//2) Контекст у методов обьекта это сам обьект
//3) this в конструкторах и классах это новый экземпляр обьекта
//4) Ручная привязка this: call, apply, bind


// Continue можно использовать только с циклами, Break исспользуется и с блоками кода
// foo: {
//   console.log('привет');
//   break foo;
//   console.log('эта строка не будет исполнена');
// }
