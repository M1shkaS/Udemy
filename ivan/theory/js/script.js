'use strict'

console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // Nan
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //true

//----------------------------------------------------------------------------------------

let n;
const fr = NaN;
const zer = 0;
const tw = 2;

if (n || zer || fr === 3 || tw) {
   console.log('done')
}

for (let i = 5; i <= 10; i++) {
   console.log(i)
}

for (let i = 20; i >= 10; i--) {
   if (i == 13) break;
   console.log(i);
}

for (let i = 2; i <= 10; i++) {
   if (i % 2 === 0) console.log(i);
}

for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}

let num = 2;
while (num != 17) {
   if (num % 2 !== 0) console.log(num);
   num++
}

//----------------------------------------------------------------------------------------

const dataInf = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
   if (typeof (dataInf[i]) === 'number') dataInf[i] *= 2;
   if (typeof (dataInf[i]) === 'string') dataInf[i] += ' - done';
}
console.log(dataInf);

const resul = [];
for (let i = 1; i <= data.length; i++) {
   resul[i - 1] = data[data.length - i];
}
console.log(resul);

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
   result += '\n'
}
console.log(result);

//----------------------------------------------------------------------------------------

function getMathResult(baseNumber, amount) {
   if (typeof (amount) === 'string' || amount <= 0) return baseNumber;

   let result = `${baseNumber}`;
   let num = baseNumber;

   for (let i = 1; i < amount; i++) {
      baseNumber = num * (i + 1);
      result += `---${baseNumber}`;
   }

   return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(5, 1));
console.log(getMathResult(5, 0));
console.log(getMathResult(5, 'str'));

function sayHello(userName) {
   return `Привет, ${userName}!`;
}
console.log(sayHello('Alex'));;

//----------------------------------------------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length === 0) return 'Семья пуста';

   let str = 'Семья состоит из: ';
   arr.forEach(item => {
      str += `${item} `;
   });

   return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   let str = '';
   if (arr.length === 0) console.log(str);;

   arr.forEach(item => {
      str += `${item.toLowerCase()}\n`
   })

   console.log(str);
}


const someString = 'This is some strange string';
//Переворачивание строки
function reverse(str) {
   if (typeof (str) !== 'string') return 'Ошибка';

   let arr = str.split('');
   arr.reverse();

   return arr.join('');

}
console.log(reverse(someString));

//----------------------------------------------------------------------------------------

let numb = 6;
function calc() {
   numb = 7;
}

calc()
console.log(numb);

//----------------------------------------------------------------------------------------

const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'surname', { writable: false })
// console.log(Object.getOwnPropertyDescriptor(user, 'surname'));
user.surname = 'selyavin'; // не перезапишет из-за writable
// console.log(user);

Object.defineProperty(user, 'gender', { value: 'M' }) //создаёт новое свойство сразу с флагами false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

Object.defineProperties(user, {
   name: { writable: false },
   surname: { enumerable: false }
})

const id = Symbol('id');
user[id] = 1;

for (let key in user) {
   console.log(user[key]);
}

console.log(user);
console.log(user[id]);

//Map

const shops = [
   { bread: 38 },
   { beer: 100 },
   { cake: 250 }
];

const budget = [5000, 6000, 7000];

const map = new Map(); // помогает делать ключ обьектом

shops.forEach((item, idx) => {
   map.set(item, budget[idx]);
})

console.log(map);
console.log(map.get(shops[0])); //выдаст значение
console.log(map.has(shops[0])); //Есть ли
console.log(map.delete(shops[0])); //Удаляет
console.log(map.clear()); //Удаляет всё
console.log(map.size); //Размер
console.log(map);

const mapSecond = new Map([
   [{ apple: 15 }, 50]
]);

for (const key of map.keys()) {
   console.log(key);
}
for (const val of map.values()) {
   console.log(val);
}
for (const item of map.entries()) {
   console.log(item);
}
//forEach тоже работает
console.log(mapSecond);

//Set

const arr = ['Alex', 'Ann', 'Oleg', 'Ann'];

const set = new Set(arr);
set.add('Oleg');
set.add('Ivan');
set.clear();
set.size;
set.delete('Ivan');
console.log(set.has('Ivan'));
console.log(set);

for (const value of set) {
   console.log(value);
}

set.forEach((value, valueAgain, set) => {
   console.log(value, valueAgain);
})

console.log(set.values());

function unique(array) {
   return Array.from(new Set(array));
}

console.log(unique(arr));

//----------------------------------------------------------------------------------------

const buttons = document.querySelectorAll('button'),
   wrapper = document.querySelector('.btn-block');

buttons[0].classList.add('red', 'mimm')
buttons[0].classList.remove('red')
buttons[0].classList.toggle('red')
console.log(buttons[0].classList.item(1));
console.log(buttons[0].classList.contains('red'));

//Делегирование событий
wrapper.addEventListener('click', (event) => {
   if (event.target && event.target.tagName == 'BUTTON') {
      console.log('Hello');
   }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn)

const timerId = setTimeout(logger, 1000);
clearTimeout(timerId)

//Нулевую задержку нельзя, всё равно буде 4мл.
//setInterval не делает паузы, если callback большой, а setTimeout делает
const intId = setInterval(logger, 1000);
clearInterval(intId)


function logger() {
   console.log('Hello');
}

//----------------------------------------------------------------------------------------

// WeakSet (аругментами могут быть только обьекты и если на нх удаляется ссылка, то и тут они тоже удалятся)
// add delete has

let messageUser = [
   { text: ' Hello', user: 'Ilya' },
   { text: ' Как дела?', user: 'Миша' },
   { text: ' Магазин', user: 'Dima' }
];

let readMessages = new WeakSet();

readMessages.add(messageUser[0]);

messageUser.shift();

console.log(readMessages.has(messageUser[0]));

// WeakMap (ключами могут быть только обьекты и если на нх удаляется ссылка, то и тут они тоже удалятся)
// add delete has get

let cashe = new WeakMap();

function casheUser(user) {
   if (!cashe.has(user)) {
      cashe.set(user, Date.now());
   }

   return cashe.get(user);
}

let lena = { name: 'lena' };
let Alex = { name: 'Alex' };

console.log(casheUser(lena));
console.log(casheUser(Alex));

Alex = null;
console.log(cashe.has(lena));
console.log(cashe.has(Alex));

//----------------------------------------------------------------------------------------
// Date

let date = new Date();


console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());

date.setFullYear(2023);
console.log(date);

let start = new Date();

let end = new Date();
end.setFullYear(2024)
console.log(((((end - start) / 1000) / 60) / 60) / 24);
//----------------------------------------------------------------------------------------

// Функции конструкторы (классы удобнее(изначально их не было))
// Нужны для создания однотипных обьектов

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

const ivan = new User('ivan', 1)
const ilya = new User('Alex', 20)

console.log(ivan);
console.log(ilya);
ivan.hello()
ilya.hello()

//this
function showThis(a, b) {
   console.log(this);
   function sum() {
      console.log(this);
      return a + b;
   }
   console.log(sum());
}
showThis(4, 5);

const obj = {
   a: 20,
   b: 15,
   sum: function () {
      console.log(this.a + this.b);
   }
}

obj.sum()

function sayNmae(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'Alex'
}

sayNmae.call(user, 'selyavin');
sayNmae.apply(user, ['selyavin']);

function count(num) {
   return this * num;
}

let double = count.bind(2)
console.log(double(3));

//1) Если функция: this = window, но если use strict - undefined
//2) Контекст у методов обьекта это сам обьект
//3) this в конструкторах и классах это новый экземпляр обьекта
//4) Ручная привязка this: call, apply, double

//----------------------------------------------------------------------------------------

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

//Rest operator

const log = function (a, b, ...rest) {
   console.log(a, b, rest);
}
log(4, 'mi', 1, 2, 3, 4, 5, 'lol')
