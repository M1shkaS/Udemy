//Classes

class Reactangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea() {
      return this.height * this.width
   }
}

class ColoredReactangleWithText extends Reactangle {
   constructor(height, width, text, bgColor) {
      super(height, width);
      this.text = text;
      this.bgColor = bgColor;
   }
   showMyProps() {
      console.log(`Текст ${this.text}, цвет ${this.bgColor}`);
   }
}

const div = new ColoredReactangleWithText(50, 10, 'Misha', 'red');
div.showMyProps()
console.log(div.calcArea());

const square = new Reactangle(100, 10);
console.log(square.calcArea());

// Инкапсуляция (encapsulation) - это механизм, который объединяет данные и код, манипулирующий зтими данными, а также защищает и то, и другое от внешнего вмешательства или неправильного использования. В объектно-ориентированном программировании код и данные могут быть объединены вместе; в этом случае говорят, что создаётся так называемый "чёрный ящик". Когда коды и данные объединяются таким способом, создаётся объект (object). Другими словами, объект - это то, что поддерживает инкапсуляцию.

// Полиморфизм (polymorphism) (от греческого polymorphos) - это свойство, которое позволяет одно и то же имя использовать для решения двух или более схожих, но технически разных задач. Целью полиморфизма, применительно к объектно-ориентированному программированию, является использование одного имени для задания общих для класса действий. Выполнение каждого конкретного действия будет определяться типом данных. Например для языка Си, в котором полиморфизм поддерживается недостаточно, нахождение абсолютной величины числа требует трёх различных функций: abs(), labs() и fabs().

//!Инкапсуляция

// function User(name, age) {
//    this.name = name;
//    this.age = age;

//    this.say = function () {
//       console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
//    }
// }
// function User(name, age) {
//    this.name = name;
//    let userAge = age;

//    this.say = function () {
//       console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//    }

//    this.getUserAge = function () {
//       return userAge;
//    }
//    this.setUserAge = function (num) {
//       userAge = num;
//    }
// }

// const misha = new User('misha', 20)
// console.log(misha.age);
// misha.say();

// misha.age = 30;
// misha.say();
// misha.setUserAge(30)
// console.log(misha.getUserAge());

class User {
   constructor(name, age) {
      this.name = name;
      this._age = age;
   }

   say = () => {
      console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
   }

   get age() {
      return this._age;
   }
   set age(age) {
      if (typeof (age) == 'number' && age > 0 && age < 125) {
         this._age = age;
      } else {
         console.log('Введите корректное число...');
      }
   }
}
const misha = new User('misha', 20)
misha.say();
console.log(misha.age);
misha.age = 10000;
console.log(misha.age);

class User {
   constructor(name, age) {
      this.name = name;
      this._age = age;
   }
   #surname = 'Selyavin';
   say = () => {
      console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
   }

   get surname() {
      return this.#surname;
   }
   set surname(surname) {
      this.#surname = surname;
   }
}

const misha = new User('misha', 20);
misha.surname = 'Roga'
misha.say();
console.log(misha.surname);

// Статические методы вызываются через имя класса.